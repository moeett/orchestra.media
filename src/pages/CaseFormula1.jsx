import React, { useEffect } from 'react';
import CaseStudyDetail from './CaseStudyDetail';

const caseStudy = {
  title: 'Formula 1 Fanzone',
  categories: ['Booth Construction'],
  heroImage: '/assets/images/1485872299829-c-large.webp',
  sections: [
    {
      title: 'Case Overview',
      content: "At the heart of Formula 1 lies the meeting point of speed, innovation, and human potential — where physics, mechanics, and design converge to push the limits of possibility.\n\nThe Formula 1 Fan Zone: \"Time of Endless Possibilities\" was conceived as a multi-sensory brand space that reimagines what it means to experience the thrill of racing — both in the real world and the virtual dimension.\n\nBy blending cutting-edge technology, interactive storytelling, and emotionally charged experiences, the Fan Zone offered visitors not just entertainment but a profound connection to the spirit of Formula 1 — where adrenaline meets artistry."
    },
    {
      title: 'Concept and Inspiration',
      content: "The creative idea reflects the fusion of time and eternity, symbolized through mirrors, infinite loops, and digital reflections inspired by Formula 1's dynamic identity on Instagram.\n\nVisitors entered a space designed as an infinity-shaped environment, embodying F1's perpetual motion — its drive toward the future. The design drew inspiration from Tron Legacy aesthetics, with glowing neon threads, mirrored surfaces, and immersive color gradients representing motion, light, and power.\n\nFormula 1's \"Time of Endless Possibilities\" illustrated how technology, passion, and precision coexist beyond boundaries — where the real and virtual worlds merge seamlessly."
    },
    {
      title: 'Multisensory Experience',
      content: 'Every sense was activated to create a powerful emotional connection between the brand and its audience.',
      subsections: [
        {
          title: 'Hearing',
          content: 'Sound was treated as an art form. Visitors could create their own racing track sound mix — from roaring engines to cheering crowds — and perform it live with a DJ. Exclusive playlists featured F1 drivers\' favorite tracks, allowing fans to "hear the race" through their heroes\' rhythm.'
        },
        {
          title: 'Vision',
          content: 'Light, color, and motion shaped the Fan Zone\'s visual identity. Bright hues of red, purple, and gold energized the space, supported by color neuromarketing to evoke excitement and vitality. Holograms, stage lighting reminiscent of royal regalia, and the signature infinity symbol united the aesthetic. The Relax Zone featured a softer palette and gentle illumination for contrast.'
        },
        {
          title: 'Balance and Motion',
          content: 'Interactive sports activities simulated the training and acceleration sensations experienced by F1 drivers and astronauts — exploring the boundaries of the human body and its balance systems.'
        },
        {
          title: 'Smell',
          content: 'Distinct fragrances enhanced the sensory experience — stimulating energy in racing zones and calmness in relaxation areas. Exclusive scents linked to past champions and race winners were introduced, adding a layer of emotional storytelling through aroma.'
        },
        {
          title: 'Touch',
          list: [
            'Creating art installations',
            'Touching mirrored structures',
            'Engaging with interactive panels',
            'Sharing hugs and photos with fellow fans — turning every contact into connection'
          ]
        },
        {
          title: 'Taste',
          content: 'Catering followed the F1 lifestyle concept: Menus reflected drivers\' favorite meals or nutrition-based diets, with creative naming such as "Pitstop Fries", "Fuel for Your Car", or "High-Speed Shake". The serving design mirrored the Fan Zone\'s aesthetics — mirrored disposables, gold accents, and thematic packaging.'
        }
      ]
    },
    {
      title: 'Social Media Integration',
      content: 'Designed for virality, the Fan Zone extended its experience online through strategic digital engagement:',
      list: [
        'Multiple photo zones eliminated waiting time and boosted shareable content.',
        'Photo objects included the art car, podium, mirror arch with headphones, and 3D hashtag installations.',
        'Guests were encouraged to post using event hashtags for prizes and recognition, making F1 content organically trend across platforms.',
        'Formula 1 sticker packs, Instagram AR filters, and branded icons connected digital creativity with on-ground experience.',
        'The Fan Zone\'s layout itself — shaped as the infinity symbol — became an aerial visual signature of the event.'
      ]
    },
    {
      title: 'Design and Atmosphere',
      list: [
        'Lighting and mirrors formed the core aesthetic vocabulary, transforming the space into a futuristic realm of reflection and energy.',
        'Neon lines outlined the architecture, changing colors dynamically to match Formula 1 branding.',
        'Gold accents, circular motifs, and reflective surfaces evoked luxury and innovation.',
        'The environment encouraged constant movement, echoing the spirit of the race itself.'
      ]
    },
    {
      title: 'Results and Impact',
      content: 'The Formula 1 Fan Zone became one of the most talked-about attractions during the Royal Circuit Racing event — praised for its fusion of technology, design, and emotion.\n\n<strong>Achievements:</strong>',
      list: [
        'High social media engagement and organic reach through user-generated content.',
        'Visitors described the experience as "the most immersive and emotionally charged fan space at F1."',
        'The project set a benchmark for future experiential brand activations — bridging digital storytelling and real-world emotion.'
      ]
    }
  ],
  relatedProjects: [
    { slug: 'CaseMirionSunNuclear', title: 'Mirion Sun Nuclear global concept', categories: ['Booth Construction'], image: '/assets/images/1576091160550-2-medium.webp' },
    { slug: 'CaseKingdomTomorrow', title: 'The Kingdom of Tomorrow Journey', categories: ['Booth Construction'], image: '/assets/images/1535016120720-4-medium.webp' },
    { slug: 'CaseFalcon', title: 'Falcon', categories: ['Booth Construction'], image: '/assets/images/1540575467063-1-medium.webp' }
  ]
};

export default function CaseFormula1() {
  useEffect(() => {
    document.title = 'Formula 1 Fanzone - Orchestra Media';
  }, []);

  return <CaseStudyDetail caseStudy={caseStudy} />;
}