import React, { useEffect } from 'react';
import CaseStudyDetail from './CaseStudyDetail';

const caseStudy = {
  title: 'Pratt and Whitney',
  categories: ['Booth Construction', 'Sales Agent – Space Bookings'],
  heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80',
  sections: [
    {
      title: 'Case Overview',
      content: 'Pratt & Whitney, a global leader in aerospace propulsion systems, required a comprehensive exhibition solution that would showcase their technological innovations while facilitating meaningful business engagement.\n\nOur role extended beyond booth design and construction — we also served as their sales agent, managing space bookings and exhibition logistics to ensure a seamless presence at major industry events.\n\nThe project demanded a strategic approach that balanced brand storytelling, technical presentations, and hospitality, creating an environment where innovation meets collaboration.',
      images: ['https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80']
    },
    {
      title: 'Design and Spatial Concept',
      content: 'The booth was designed as a modern, open environment that reflected Pratt & Whitney\'s forward-thinking approach to aerospace engineering.\n\nWe created distinct functional zones: a central display area for showcasing engine technologies, private meeting spaces for client discussions, and an open lounge area for networking and hospitality.\n\nThe design language incorporated clean lines, industrial materials, and bold graphics that communicated precision, power, and innovation — core attributes of the Pratt & Whitney brand.\n\nInteractive digital displays and multimedia presentations were integrated throughout the space, allowing visitors to explore complex technologies in an engaging, accessible manner.',
      images: [
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
        'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80'
      ]
    },
    {
      title: 'Sales Agent Services',
      content: 'Beyond design and construction, our role as sales agent included:',
      list: [
        '<strong>Exhibition Space Management:</strong> Securing optimal booth locations at key aerospace exhibitions worldwide.',
        '<strong>Logistics Coordination:</strong> Managing transportation, customs, and on-site delivery of all exhibition materials.',
        '<strong>Vendor Relations:</strong> Coordinating with exhibition organizers, contractors, and service providers.',
        '<strong>Budget Optimization:</strong> Ensuring cost-effective solutions without compromising quality or brand presence.',
        '<strong>Regulatory Compliance:</strong> Handling all necessary permits, insurance, and safety certifications.'
      ]
    },
    {
      title: 'Execution and Build',
      content: 'The booth was engineered for durability and reusability, with modular components that could be adapted to different exhibition spaces while maintaining brand consistency.\n\nAll elements were pre-fabricated and tested before shipment, ensuring smooth installation at each event location.\n\nOur on-site team managed the complete build process — from structural assembly to final styling — working within tight schedules and coordinating with multiple stakeholders to deliver a flawless result.\n\nSpecial attention was given to lighting design, using strategic illumination to highlight key technologies and create visual depth throughout the space.',
      images: ['https://images.unsplash.com/photo-1473168345425-33e0154e9bcd?w=800&q=80']
    },
    {
      title: 'Technology Integration',
      content: 'The booth featured cutting-edge presentation technologies:',
      list: [
        'Large-format LED screens displaying engine animations and technical specifications',
        'Interactive touchscreens for product exploration',
        'AR experiences demonstrating engine components and performance',
        'Live data feeds showcasing real-time performance metrics',
        'Integrated audio-visual systems for presentations and demonstrations'
      ]
    },
    {
      title: 'Results and Impact',
      content: 'The Pratt & Whitney booth became a prominent fixture at major aerospace exhibitions, consistently drawing high-level visitors and generating substantial business leads.\n\nOur comprehensive approach — combining design excellence with strategic sales agent services — allowed Pratt & Whitney to focus on their core business while we ensured their exhibition presence was impeccable.',
      list: [
        'Successful participation at multiple international exhibitions',
        'Increased brand visibility and industry recognition',
        'Enhanced visitor engagement through interactive technologies',
        'Streamlined logistics and cost optimization through dedicated sales agent support',
        'Strong client satisfaction and ongoing partnership for future events'
      ]
    },
    {
      title: 'Reflections',
      content: '<em>"Managing both design and logistics for a brand like Pratt & Whitney taught us the value of integrated solutions. When exhibition services are coordinated under one roof, the result is not just efficiency — it\'s excellence."</em>\n\nThis project exemplified how combining creative design with strategic exhibition management creates a seamless brand experience, allowing clients to focus on what matters most: connecting with their audience and advancing their business objectives.'
    }
  ],
  relatedProjects: [
    { slug: 'CaseFalcon', title: 'Falcon', categories: ['Booth Construction'], image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80' },
    { slug: 'CaseRollsRoyce', title: 'Rolls Royce', categories: ['Booth Construction'], image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80' },
    { slug: 'CaseKingdomTomorrow', title: 'The Kingdom of Tomorrow Journey', categories: ['Booth Construction'], image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&q=80' }
  ]
};

export default function CasePrattWhitney() {
  useEffect(() => {
    document.title = 'Pratt and Whitney - Orchestra Media';
  }, []);

  return <CaseStudyDetail caseStudy={caseStudy} />;
}