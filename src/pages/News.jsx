import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, ExternalLink } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: 'Key Takeaways from MRO Europe 2025: Innovation, Insight & Impact',
    excerpt: 'MRO Europe 2025 showcased the latest innovations in aircraft maintenance, repair, and overhaul, bringing together industry leaders from around the world.',
    date: 'August 7, 2025',
    category: 'News',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Unlocking the Asian Market with Strategic Sponsorship at MRO Guangzhou 2025',
    excerpt: 'Strategic sponsorship opportunities at MRO Guangzhou 2025 offer unprecedented access to the rapidly growing Asian aviation market.',
    date: 'August 7, 2025',
    category: 'News',
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80',
    readTime: '4 min read'
  },
  {
    id: 3,
    title: 'Top-Tier Global Exhibitions Driving the Future of IT 2025-2026',
    excerpt: 'A comprehensive guide to the most impactful IT exhibitions worldwide, featuring emerging trends and networking opportunities.',
    date: 'August 5, 2025',
    category: 'Industry Insights',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'The Evolution of Exhibition Design: Trends Shaping 2026',
    excerpt: 'Discover the cutting-edge design trends that will define exhibition spaces in 2026, from immersive technology to sustainable materials.',
    date: 'July 28, 2025',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    readTime: '5 min read'
  },
  {
    id: 5,
    title: 'Maximizing ROI at International Trade Shows',
    excerpt: 'Expert strategies for ensuring your exhibition investment delivers measurable returns and lasting business relationships.',
    date: 'July 20, 2025',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
    readTime: '7 min read'
  },
  {
    id: 6,
    title: 'Sustainable Exhibition Practices: Leading the Green Revolution',
    excerpt: 'How Orchestra Media is pioneering eco-friendly booth design and construction practices for a more sustainable future.',
    date: 'July 15, 2025',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
    readTime: '4 min read'
  }
];

const categories = ['All', 'News', 'Industry Insights', 'Design', 'Business', 'Sustainability'];

export default function News() {
  const [activeCategory, setActiveCategory] = React.useState('All');

  useEffect(() => {
    document.title = 'News & Insights - Orchestra Media';
  }, []);

  const filteredArticles = activeCategory === 'All' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeCategory);

  return (
    <div className="bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80"
            alt="News & Insights"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/95 to-[#0a1628]/80" />
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#8B1538]/10 blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#C9A227]/10 blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-6 py-2 rounded-full bg-[#8B1538]/20 backdrop-blur-sm text-[#C9A227] text-sm font-bold tracking-wider uppercase mb-6 border border-[#8B1538]/30">
              LATEST UPDATES
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              NEWS & INSIGHTS
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-12 bg-[#0f1e2e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: 'radial-gradient(circle, #8B1538 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-[#8B1538] to-[#6d1029] text-white shadow-lg shadow-[#8B1538]/30'
                    : 'bg-[#0a1628] border border-white/20 text-white/70 hover:border-[#8B1538] hover:text-white'
                }`}
                aria-label={`Filter by ${category}`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredArticles.length > 0 && (
        <section className="py-20 bg-[#0a1628] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#8B1538]/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#C9A227]/10 blur-3xl" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538]/20 to-[#C9A227]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative grid lg:grid-cols-2 gap-8 bg-gradient-to-br from-[#0f1e2e] to-[#0a1628] rounded-3xl overflow-hidden border border-white/10 hover:border-[#8B1538]/50 transition-all duration-500">
                <div className="relative h-80 lg:h-auto overflow-hidden">
                  <img 
                    src={filteredArticles[0].image}
                    alt={filteredArticles[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/50 to-transparent opacity-60" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#8B1538] to-[#6d1029] text-white text-xs font-bold tracking-wider uppercase shadow-lg">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-white/50 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#8B1538]/20 text-[#C9A227] font-medium">
                      {filteredArticles[0].category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {filteredArticles[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {filteredArticles[0].readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-4xl font-bold text-white group-hover:text-[#C9A227] transition-colors mb-4">
                    {filteredArticles[0].title}
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed mb-6">
                    {filteredArticles[0].excerpt}
                  </p>
                  <div className="flex items-center text-[#C9A227] font-semibold group-hover:gap-3 transition-all">
                    <span>Read Full Article</span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-20 bg-[#0f1e2e] relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#8B1538]/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[#C9A227]/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: 'radial-gradient(circle, #8B1538 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#8B1538]/20 to-[#C9A227]/20 backdrop-blur-sm text-[#C9A227] text-sm font-bold tracking-wider uppercase mb-6 border border-[#8B1538]/30"
            >
              LATEST ARTICLES
            </motion.span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Stay Updated with
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#8B1538]">
                Industry Insights
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(1).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="group relative h-full cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538]/20 to-[#C9A227]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative bg-gradient-to-br from-[#0f1e2e] to-[#0a1628] rounded-3xl overflow-hidden border border-white/10 hover:border-[#8B1538]/50 transition-all duration-500 h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/50 to-transparent opacity-60" />
                      
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#8B1538] to-[#6d1029] text-white text-xs font-bold tracking-wider uppercase shadow-lg">
                          {article.category}
                        </span>
                      </div>

                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <ExternalLink className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-xs text-white/50 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#C9A227] transition-colors line-clamp-2 mb-3">
                        {article.title}
                      </h3>
                      <p className="text-white/60 text-sm line-clamp-2 mb-4 flex-1">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center text-[#C9A227] font-semibold text-sm group-hover:gap-3 transition-all">
                        <span>Read Article</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8B1538]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}