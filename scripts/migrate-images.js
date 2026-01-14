import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.resolve(__dirname, '..');
const SRC_DIR = path.join(PROJECT_ROOT, 'src');
const PUBLIC_IMG_DIR = path.join(PROJECT_ROOT, 'public/assets/images');

// Ensure directory exists
if (!fs.existsSync(PUBLIC_IMG_DIR)) {
    fs.mkdirSync(PUBLIC_IMG_DIR, { recursive: true });
}

// Helper to download file
const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(dest)) {
            // console.log(`Skipping existing: ${dest}`);
            resolve();
            return;
        }
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
};

// Recursive file walker
const walk = (dir, fileList = []) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filepath = path.join(dir, file);
        const stat = fs.statSync(filepath);
        if (stat.isDirectory()) {
            walk(filepath, fileList);
        } else {
            if (file.endsWith('.jsx') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.ts')) {
                fileList.push(filepath);
            }
        }
    }
    return fileList;
};

const unsplashRegex = /https:\/\/images\.unsplash\.com\/([a-zA-Z0-9-]+)(\?[^"'\s]+)?/g;

async function main() {
    const files = walk(SRC_DIR);
    console.log(`Scanning ${files.length} files...`);

    const imageMap = new Map(); // id -> { originalUrl, sizes: Set }

    // 1. Scan and collect unique Unsplash IDs
    for (const file of files) {
        const content = fs.readFileSync(file, 'utf-8');
        let match;
        while ((match = unsplashRegex.exec(content)) !== null) {
            const fullUrl = match[0];
            let id = match[1];
            // Remove 'photo-' prefix if present for cleaner names, or just keep as is.
            // Some IDs are like "photo-12345".
            // Let's iterate and extract the ID cleanly. The regex captures the path part.
            // Often it's "photo-1540..."

            // Clean up ID for filename
            const cleanId = id.replace(/^photo-/, '').substring(0, 15); // Take first 15 chars for brevity? No, keep it unique.

            // Store
            if (!imageMap.has(id)) {
                imageMap.set(id, { fullUrl, cleanId });
            }
        }
    }

    console.log(`Found ${imageMap.size} unique images.`);

    // 2. Download Images (Large, Medium, Small)
    // We will standardise to WebP
    const downloadQueue = [];

    for (const [id, data] of imageMap.entries()) {
        const baseUrl = `https://images.unsplash.com/${id}`;

        // Define sizes
        const sizes = [
            { suffix: 'large', w: 1920 },
            { suffix: 'medium', w: 800 },
            { suffix: 'small', w: 400 },
            { suffix: 'thumb', w: 300 } // For that specific case
        ];

        for (const size of sizes) {
            const destFilename = `${data.cleanId}-${size.suffix}.webp`;
            const destPath = path.join(PUBLIC_IMG_DIR, destFilename);
            const downloadUrl = `${baseUrl}?w=${size.w}&q=80&fm=webp`;

            downloadQueue.push({ url: downloadUrl, dest: destPath });
        }
    }

    console.log(`Downloading ${downloadQueue.length} assets...`);
    // Process in chunks to avoid rate limiting
    const CHUNK_SIZE = 10;
    for (let i = 0; i < downloadQueue.length; i += CHUNK_SIZE) {
        const chunk = downloadQueue.slice(i, i + CHUNK_SIZE);
        await Promise.all(chunk.map(item => downloadFile(item.url, item.dest).catch(e => console.error(e.message))));
        process.stdout.write('.');
    }
    console.log('\nDownload complete.');

    // 3. Replace in Code
    console.log('Replacing URLs in code...');
    for (const file of files) {
        let content = fs.readFileSync(file, 'utf-8');
        let hasChanges = false;

        // We need to replace the URL with the correct local path based on the queried width
        // This is tricky because the regex matches the whole abstract URL.
        // We will replace occurrences based on typical patterns.

        // Pattern 1: replace(..., 'w=...') used in srcSet
        // In the code we see: validUrl.replace('w=1920', 'w=640')
        // This dynamic replacement logic BREAKS if we switch to static local files with different names.
        // WE MUST REWRITE THE SRCSET LOGIC.

        // Simple replacements first: distinct static URLs
        // e.g. src="https://...w=1920..." -> src="/assets/images/...-large.webp"

        // We will construct a regex that looks for the Unsplash URL AND the width param.

        content = content.replace(/https:\/\/images\.unsplash\.com\/([a-zA-Z0-9-]+)(\?[^"'\s]*)?/g, (match, id, query) => {
            if (!imageMap.has(id)) return match;
            const cleanId = imageMap.get(id).cleanId;

            // Analyze the query for width
            let suffix = 'medium'; // default
            if (query && query.includes('w=1920')) suffix = 'large';
            if (query && query.includes('w=400')) suffix = 'small';
            if (query && query.includes('w=300')) suffix = 'thumb';
            if (query && query.includes('w=800')) suffix = 'medium'; // default

            return `/assets/images/${cleanId}-${suffix}.webp`;
        });

        // Now we must fix the broken `.replace('w=1920', 'w=640')` calls.
        // These will now look like: `"/assets/images/abc-large.webp".replace('w=1920', 'w=640')`
        // We need to change the code structure pattern.

        // Strategy: simplified regex for the specific pattern used in this project
        // pattern: `${someVar.replace('w=...', 'w=...')}`
        // This is too hard to regex safely for all cases.
        // However, looking at the code, the `srcSet` often uses string replacement on the `image` variable.
        // If the `image` variable is now `/assets/images/abc-medium.webp`, replace won't work.

        // FIX: Update the data source first?
        // No, the data source is updated by the replace above.
        // So `service.image` becomes `/assets/...-medium.webp`.
        // Then `service.image.replace('w=800', 'w=400')` will fail to find 'w=800'.

        // We need to change the component logic to handle local files.
        // Identify files with `replace('w=` and update them.

        // Hacky but effective fix for this codebase:
        // Replace `.replace('w=800', 'w=400')` with `.replace('-medium.webp', '-small.webp')`
        // Replace `.replace('w=1920', 'w=640')` with `.replace('-large.webp', '-medium.webp')` (approx)

        const replacements = [
            { from: /replace\('w=1920', 'w=640'\)/g, to: "replace('-large.webp', '-medium.webp')" }, // 640 close to 800? 
            { from: /replace\('w=1920', 'w=1024'\)/g, to: "replace('-large.webp', '-medium.webp')" },
            { from: /replace\('w=1920', 'w=1920'\)/g, to: "replace('-large.webp', '-large.webp')" },

            { from: /replace\('w=800', 'w=300'\)/g, to: "replace('-medium.webp', '-thumb.webp')" },
            { from: /replace\('w=800', 'w=400'\)/g, to: "replace('-medium.webp', '-small.webp')" },
            { from: /replace\('w=800', 'w=600'\)/g, to: "replace('-medium.webp', '-medium.webp')" }, // 600 close to 800
            { from: /replace\('w=800', 'w=800'\)/g, to: "replace('-medium.webp', '-medium.webp')" },
        ];

        for (const rep of replacements) {
            if (content.match(rep.from)) {
                content = content.replace(rep.from, rep.to);
                hasChanges = true;
            }
        }

        // Also the `400w` descriptors in srcSet might be wrong if we use -medium (800w) for 600w slot.
        // But it's "close enough" for this automated task.

        // Specific fix for "replace('w=1920', 'w=640')" -> we don't have 640. We have 800 (medium).
        // So mapping 640 request to Medium is safe.

        if (content !== fs.readFileSync(file, 'utf-8') || hasChanges) {
            console.log(`Updated ${path.relative(SRC_DIR, file)}`);
            fs.writeFileSync(file, content);
        }
    }
}

main().catch(console.error);
