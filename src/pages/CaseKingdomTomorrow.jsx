import React, { useEffect } from 'react';
import CaseStudyDetail from './CaseStudyDetail';

const caseStudy = {
  title: 'The Kingdom of Tomorrow Journey',
  categories: ['Booth Construction'],
  heroImage: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=1920&q=80',
  sections: [
    {
      title: 'Case Overview',
      content: 'The project "Kingdom of Tomorrow Journey" was designed as an immersive, high-tech exhibition experience that guided visitors through the visionary transformation of the Kingdom of Saudi Arabia under the framework of Vision 2030.\n\nThis concept combined cutting-edge technologies — VR, holograms, interactive touch screens, projection mapping, and sensory effects — to take guests on a symbolic journey into the Kingdom\'s future. Each thematic area revealed a new aspect of Saudi innovation, from tourism and mobility to industry, space, and sports.\n\nThe pavilion was envisioned as a multi-sensory narrative space, blending digital art, architecture, and storytelling into a cohesive experiential journey.',
      images: ['https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&q=80']
    },
    {
      title: 'Architectural and Design Concept',
      content: 'At the heart of the exhibition stood a cube-shaped structure — an architectural metaphor for innovation and modernity.',
      list: [
        '<strong>Exterior:</strong> The outer shell was crafted from metal and mirrored surfaces, designed to instantly attract attention. The reflections created a dynamic interplay between visitors, light, and space, inviting them to step into the unknown — the future of the Kingdom.',
        '<strong>Interior:</strong> Inside the mirrored cube, visitors entered a spherical projection space, where 360° cinematic content enveloped them in a seamless digital environment. This sphere represented the Kingdom\'s evolving identity — futuristic, interconnected, and limitless.',
        '<strong>Circulation:</strong> A minimalistic staircase guided the flow of movement, enhancing the clean, modern aesthetic and keeping the visitor\'s focus on the visual narrative.'
      ],
      images: [
        'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
      ]
    },
    {
      title: 'Execution and Materials',
      content: 'The exhibition unfolded as a multi-chapter story, where each zone highlighted one pillar of Saudi Arabia\'s technological and cultural progress.',
      subsections: [
        {
          title: 'Opening Zone – "A Journey to the Future"',
          content: 'Visitors began their experience in a darkened chamber illuminated by projection mapping, setting the stage for a forward-looking journey. The audiovisual show immersed guests in a vision of what the Kingdom would look like decades ahead — cities of light, innovation hubs, sustainable environments, and smart living.'
        },
        {
          title: 'A Glimpse on Each Sector',
          content: 'A panoramic area featuring 12 interactive screens, each representing a key sector of the Kingdom\'s development — from tourism and industry to technology and culture. The screens were equipped with motion sensors, reacting to visitors\' movements and displaying dynamic content accordingly. This interactivity turned each visitor into an active participant rather than a passive observer.'
        },
        {
          title: 'Voyage into Saudi Tourism',
          content: 'This section celebrated the natural and cultural wealth of the Kingdom. It combined three sub-zones:',
          list: [
            '<strong>Hidden Gems & Breathtaking Landscapes:</strong> A curved panoramic screen presented stunning visuals of Saudi Arabia\'s diverse regions. Visitors could explore locations through touchscreen selection or interactive floor triggers — stepping on illuminated points to activate specific content.',
            '<strong>Wonders of Saudi Show / Saudi Cities VR Experience:</strong> Guests entered a futuristic car simulator, where VR headsets took them on a sensory journey through Saudi\'s cities. The experience engaged multiple senses — sight, sound, smell, heat, and wind — offering an almost real-world sensation of travel.',
            '<strong>Holographic Cities:</strong> A holographic pyramid displayed 3D models of future Saudi cities. Visitors could zoom in and interact through transparent touch panels, enlarging holograms and exploring architectural details.'
          ]
        }
      ]
    },
    {
      title: 'Technology and Innovation Highlights',
      list: [
        'Projection Mapping for immersive storytelling.',
        'VR and AR Experiences combining visuals, motion, and environmental effects.',
        'Holographic 3D Displays and touch-sensitive transparent screens.',
        'Motion-tracking sensors for interactive visitor engagement.',
        '360° LED environments and spherical projection domes.',
        'Integration of multi-sensory triggers (wind, heat, scent) for full immersion.'
      ]
    },
    {
      title: 'Conclusion',
      content: '"Kingdom of Tomorrow Journey" is more than an exhibition — it\'s a visionary experience that translates the Saudi Vision 2030 narrative into a tangible, emotional, and futuristic space. By merging art, architecture, and advanced technology, the project invited every visitor to see, feel, and believe in the Kingdom\'s bright future.',
      images: ['https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&q=80']
    }
  ],
  relatedProjects: [
    { slug: 'CaseMirionSunNuclear', title: 'Mirion Sun Nuclear global concept', categories: ['Booth Construction'], image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80' },
    { slug: 'CaseFormula1', title: 'Formula 1 Fanzone', categories: ['Booth Construction'], image: 'https://images.unsplash.com/photo-1518899109542-12e8f71e8a32?w=800&q=80' },
    { slug: 'CaseFalcon', title: 'Falcon', categories: ['Booth Construction'], image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80' }
  ]
};

export default function CaseKingdomTomorrow() {
  useEffect(() => {
    document.title = 'The Kingdom of Tomorrow Journey - Orchestra Media';
  }, []);

  return <CaseStudyDetail caseStudy={caseStudy} />;
}