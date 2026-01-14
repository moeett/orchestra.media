import React, { useEffect } from 'react';
import CaseStudyDetail from './CaseStudyDetail';

const caseStudy = {
  title: 'Mirion Sun Nuclear global concept',
  categories: ['Booth Construction'],
  heroImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80',
  sections: [
    {
      title: 'Case Overview',
      content: "Mirion's campaign was rooted in one powerful idea — to support the fight against cancer not only through cutting-edge technology, but through emotional connection and psychological comfort.\n\nThe client sought to move beyond the cold, sterile image often associated with medical environments and instead create a warm, welcoming space that speaks to the heart. The goal was to design an exhibition booth that would help people feel safe, supported, and inspired — a space that celebrates both patients' resilience and the humanity of doctors, portraying them as true heroes of everyday life."
    },
    {
      title: 'Concept and Inspiration',
      content: "Departing from the traditional clinical aesthetic, the concept centers around emotional storytelling — bringing together medicine, technology, and humanity in a single, cohesive narrative.\n\nRather than relying on white surfaces and technical charts, the design embraces soft textures, natural tones, and kinetic forms, creating a meditative and life-affirming environment.\n\nHere, every design element works to redefine the experience of healthcare — not as something distant and intimidating, but as something deeply human, filled with empathy and quiet strength.\n\nMirion's booth becomes a sanctuary of optimism and connection, where technology supports the most essential human values: care, trust, and the will to live fully.",
      images: [
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
        'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=800&q=80'
      ]
    },
    {
      title: 'Design Philosophy',
      content: 'The central message — "Living Your Regular Real Life" — reflects Mirion\'s mission to empower patients to continue living normal, fulfilling lives throughout their treatment journeys.\n\nThrough authentic stories of doctors and patients, the booth tells a story of partnership and progress. Each interaction demonstrates how Mirion\'s technologies seamlessly integrate into daily medical practice — enabling doctors to focus on care, and patients to focus on life.\n\nVisually, the design expresses balance and serenity. The color palette draws from nature — soft neutrals and gentle contrasts — creating an atmosphere of trust and calm.\n\nLighting plays a key role: diffused and ambient, it evokes warmth rather than clinical brightness.'
    },
    {
      title: 'Spatial Experience',
      content: 'The space is designed as a living environment rather than a typical trade booth — inviting visitors to pause, breathe, and connect.\n\nA dedicated relaxation area encourages open conversation and quiet reflection, reinforcing Mirion\'s role as a company that listens and supports.\n\nInteractive displays and multimedia installations reveal how Mirion\'s technologies operate in real-world settings, translating complex innovations into tangible human benefits.\n\nThe emotional flow of the booth moves from curiosity to comfort, and from comfort to confidence — mirroring the emotional journey of healing and resilience.',
      images: ['https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80']
    },
    {
      title: 'Artistic and Kinetic Elements',
      content: 'A signature feature of the Mirion booth is a collection of meditative kinetic sculptures — poetic expressions of science and motion.\n\nInspired by Mirion\'s visual identity, these pieces incorporate patterns such as honeycombs, spirals, ripples, and waves — each symbolizing precision, progress, and the seamless rhythm of life.\n\nThe gentle, flowing movements of the sculptures act as visual metaphors for the harmony between technology and humanity — constant, deliberate, and full of life.'
    },
    {
      title: 'Impact and Emotional Resonance',
      content: 'The concept challenges the industry norm by placing emotion at the center of innovation.\n\nVisitors don\'t just observe Mirion\'s solutions — they feel their purpose. The space radiates calm confidence, reminding every guest that life continues beautifully, even in moments of uncertainty.\n\n<strong>"The best time to live is now — and together, we can overcome any challenge."</strong>\n\nThis is the essence of the Mirion experience: a celebration of courage, care, and connection.'
    }
  ],
  relatedProjects: [
    { slug: 'CaseFormula1', title: 'Formula 1 Fanzone', categories: ['Booth Construction'], image: 'https://images.unsplash.com/photo-1518899109542-12e8f71e8a32?w=800&q=80' },
    { slug: 'CaseKingdomTomorrow', title: 'The Kingdom of Tomorrow Journey', categories: ['Booth Construction'], image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&q=80' },
    { slug: 'CaseFalcon', title: 'Falcon', categories: ['Booth Construction'], image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80' }
  ]
};

export default function CaseMirionSunNuclear() {
  useEffect(() => {
    document.title = 'Mirion Sun Nuclear - Orchestra Media';
  }, []);

  return <CaseStudyDetail caseStudy={caseStudy} />;
}