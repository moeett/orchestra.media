import React, { useEffect } from 'react';
import CaseStudyDetail from './CaseStudyDetail';

const caseStudy = {
  title: 'Falcon',
  categories: ['Booth Construction'],
  heroImage: '/assets/images/1540575467063-1-large.webp',
  sections: [
    {
      title: 'Case Overview',
      content: 'Falcon, a leading name in high-end business aviation, approached us with a vision to create an exhibition environment that embodied the brand\'s essence — refined luxury, aviation excellence, and understated sophistication.\n\nThe project took place at EBACE in Geneva, one of the most prestigious global aviation events, where brands compete not only in technology but in the art of presentation.\n\nThe goal was clear: to design a space that would provide Falcon\'s clients with an exclusive and seamless brand experience, reinforcing its position as a leader in private aviation while reflecting the unparalleled comfort of its aircraft interiors.',
      images: ['/assets/images/1540575467063-1-medium.webp']
    },
    {
      title: 'Concept and Design',
      content: 'The booth\'s concept was developed in close collaboration with Falcon\'s marketing and branding team, transforming the brand\'s refined aesthetic into an architectural experience.\n\nOur creative department envisioned a layout that mirrored the journey of Falcon\'s clientele — from open, welcoming zones into more intimate VIP spaces designed for private discussions and hospitality.\n\nAt the heart of the stand stood a striking centerpiece — a bar and VIP lounge that blended deep burgundy tones, brushed gold accents, and high-end upholstery. The design exuded the same calm confidence and opulent comfort found aboard Falcon\'s aircraft, inviting guests into an atmosphere of effortless prestige.\n\nThe color palette — dominated by rich burgundy and soft gold — was chosen to communicate warmth, exclusivity, and quiet authority. Every texture and surface was carefully considered: from soft leather and rich fabrics to lacquered wall panels and custom furniture, each element contributed to a unified expression of Falcon\'s DNA.',
      images: [
        '/assets/images/1540575467063-1-medium.webp',
        '/assets/images/1436491865332-7-medium.webp'
      ]
    },
    {
      title: 'Execution and Materials',
      content: 'Precision craftsmanship and meticulous attention to detail defined every stage of execution.\n\nThe booth incorporated 3D illuminated Falcon logos, elegantly backlit to project a subtle yet powerful brand presence. Integrated LED lighting was used to enhance the depth of color and highlight key architectural features, creating a warm and immersive glow.\n\nDigital screens seamlessly displayed Falcon\'s latest aircraft models and innovations — balancing information with elegance and reinforcing the brand\'s forward-thinking identity.\n\nBehind the scenes, sustainability was a quiet but important consideration: modular and reusable components were employed to minimize waste, while energy-efficient lighting reduced the project\'s footprint.'
    },
    {
      title: 'Project Management and Build',
      content: 'The preparation and build process demanded precise coordination and timing.\n\nEach element was pre-fabricated, pre-assembled, and tested before shipment to ensure a flawless installation on-site in Geneva.\n\nThe on-site build took five days, including assembly, lighting calibration, and final styling.\n\nThe greatest challenge lay in maintaining perfect color consistency across a diverse range of materials — from metallic finishes to custom textiles. This was overcome through close collaboration with suppliers, rigorous quality testing, and continuous on-site supervision.\n\nSpecialized partners were engaged for premium upholstery and finishing, ensuring the booth reflected Falcon\'s commitment to perfection.\n\nLogistics were managed by our in-house team, coordinating every stage of transportation, installation, and dismantling with EBACE organizers to guarantee efficiency and precision.',
      images: ['/assets/images/1497366216548-3-medium.webp']
    },
    {
      title: 'Results and Impact',
      content: 'The Falcon booth quickly became one of the most admired spaces at EBACE, drawing attention for its refined design and sophisticated ambiance.\n\nVisitors described it as both elegant and inviting — a rare balance of luxury and comfort that perfectly echoed Falcon\'s in-flight experience.\n\nThe client was thrilled with the outcome, praising the harmony of materials, lighting, and overall brand expression. The booth exceeded expectations not only in aesthetics but also in function — facilitating numerous business meetings and fostering genuine engagement with clients.\n\n<strong>Key results included:</strong>',
      list: [
        'High visitor engagement and increased lead generation.',
        'Consistently positive feedback from both new and returning clients.',
        'Strong media and industry recognition for its visual impact and craftsmanship.'
      ]
    },
    {
      title: 'Reflections and Takeaways',
      content: 'This project was a masterclass in precision, collaboration, and sensory storytelling.\n\nFrom the harmonious interplay of textures and light to the fluidity of spatial design, every detail contributed to an immersive brand experience.\n\n<em>"Seeing every element come together with such precision and harmony was deeply rewarding. The booth didn\'t just represent Falcon — it felt like Falcon"</em>\n\nThe experience reaffirmed the importance of color and texture coordination, material integrity, and constant dialogue between design, production, and the client\'s vision.\n\nUltimately, the project\'s greatest success lay in delivering a space that was not only visually stunning but emotionally aligned with the spirit of Falcon — timeless, luxurious, and welcoming.'
    }
  ],
  relatedProjects: [
    { slug: 'CaseMirionSunNuclear', title: 'Mirion Sun Nuclear global concept', categories: ['Booth Construction'], image: '/assets/images/1576091160550-2-medium.webp' },
    { slug: 'CaseFormula1', title: 'Formula 1 Fanzone', categories: ['Booth Construction'], image: '/assets/images/1485872299829-c-medium.webp' },
    { slug: 'CaseKingdomTomorrow', title: 'The Kingdom of Tomorrow Journey', categories: ['Booth Construction'], image: '/assets/images/1535016120720-4-medium.webp' }
  ]
};

export default function CaseFalcon() {
  useEffect(() => {
    document.title = 'Falcon - Orchestra Media';
  }, []);

  return <CaseStudyDetail caseStudy={caseStudy} />;
}