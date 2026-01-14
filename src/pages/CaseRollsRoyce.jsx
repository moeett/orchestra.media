import React, { useEffect } from 'react';
import CaseStudyDetail from './CaseStudyDetail';

const caseStudy = {
  title: 'Rolls Royce',
  categories: ['Booth Construction'],
  heroImage: '/assets/images/1544620347-c4fd-large.webp',
  sections: [
    {
      title: 'Case Overview',
      content: 'Rolls-Royce, synonymous with luxury, precision engineering, and timeless elegance, required an exhibition presence that would embody the brand\'s distinguished heritage while showcasing its cutting-edge innovations.\n\nOur mission was to create a booth that would serve as a dignified yet dynamic space — one that reflects the craftsmanship, sophistication, and technical excellence that define Rolls-Royce across automotive and aerospace industries.\n\nThe exhibition stand was designed to provide an immersive brand experience, seamlessly blending classic luxury aesthetics with modern innovation, ensuring every visitor felt the essence of what makes Rolls-Royce extraordinary.',
      images: ['/assets/images/1544620347-c4fd-medium.webp']
    },
    {
      title: 'Design Philosophy',
      content: 'The booth\'s design language was rooted in understated elegance — clean lines, rich materials, and a refined color palette that spoke to the brand\'s iconic identity.\n\nWe created distinct zones within the space: a welcoming reception area, private meeting rooms for client discussions, and an open display area showcasing Rolls-Royce\'s latest technological advancements.\n\nEvery element was carefully selected to reinforce the brand\'s commitment to perfection — from premium upholstery and polished surfaces to ambient lighting that created an atmosphere of exclusivity and prestige.\n\nThe spatial flow was designed to guide visitors through a curated journey, allowing them to experience the brand\'s story, values, and innovations in a natural, engaging manner.',
      images: [
        '/assets/images/1544620347-c4fd-medium.webp',
        '/assets/images/1549317661-bd32-medium.webp'
      ]
    },
    {
      title: 'Materials and Craftsmanship',
      content: 'True to Rolls-Royce\'s dedication to excellence, every material and finish was chosen with meticulous care.',
      list: [
        '<strong>Premium Woods and Metals:</strong> Rich wood veneers and brushed metal accents reflected the brand\'s automotive and aerospace heritage.',
        '<strong>Luxurious Fabrics:</strong> Custom upholstery in deep, sophisticated tones created comfortable, inviting spaces for meaningful conversations.',
        '<strong>Integrated Technology:</strong> Digital displays and interactive screens were seamlessly incorporated to showcase innovations without disrupting the elegant aesthetic.',
        '<strong>Precision Lighting:</strong> Carefully designed lighting highlighted key features while maintaining an atmosphere of refined sophistication.'
      ]
    },
    {
      title: 'Execution and On-Site Build',
      content: 'The project demanded flawless coordination between design, production, and installation teams.\n\nAll structural elements were pre-fabricated and tested to ensure seamless assembly on-site. Our team worked closely with exhibition organizers to coordinate logistics, from material delivery to final styling.\n\nThe on-site build was completed within the allocated timeframe, with continuous quality checks ensuring every detail met Rolls-Royce\'s exacting standards.\n\nThe greatest challenge was maintaining consistency across various material finishes — ensuring that every surface, texture, and tone aligned perfectly with the brand\'s visual identity. This was achieved through rigorous supplier coordination and hands-on supervision throughout the build process.',
      images: ['/assets/images/1563899415-7f0c-medium.webp']
    },
    {
      title: 'Impact and Reception',
      content: 'The Rolls-Royce booth became a distinguished landmark at the exhibition, drawing admiration for its sophisticated design and impeccable execution.\n\nVisitors praised the space for its ability to convey both heritage and innovation — a delicate balance that resonated deeply with the brand\'s identity.\n\nThe booth facilitated high-level business discussions, hosted VIP clients, and generated significant media attention, reinforcing Rolls-Royce\'s position as a leader in luxury and engineering excellence.',
      list: [
        'Increased visitor engagement and qualified leads',
        'Exceptional feedback from both clients and industry professionals',
        'Strong alignment between brand identity and physical space',
        'Successful representation of Rolls-Royce\'s values: excellence, innovation, and timeless elegance'
      ]
    },
    {
      title: 'Key Takeaways',
      content: 'This project exemplified the importance of attention to detail, material integrity, and the harmonious integration of design and function.\n\nWorking with a brand as prestigious as Rolls-Royce required not just technical expertise, but a deep understanding of what luxury truly means — restraint, precision, and the confidence to let quality speak for itself.\n\n<em>"Creating an environment worthy of Rolls-Royce was both a challenge and an honor. Every decision, every material, every detail contributed to a space that didn\'t just represent the brand — it embodied it."</em>\n\nThe project reinforced our belief that great design is not about complexity, but about clarity, confidence, and an unwavering commitment to excellence.'
    }
  ],
  relatedProjects: [
    { slug: 'CaseMirionSunNuclear', title: 'Mirion Sun Nuclear global concept', categories: ['Booth Construction'], image: '/assets/images/1576091160550-2-medium.webp' },
    { slug: 'CaseFormula1', title: 'Formula 1 Fanzone', categories: ['Booth Construction'], image: '/assets/images/1485872299829-c-medium.webp' },
    { slug: 'CaseFalcon', title: 'Falcon', categories: ['Booth Construction'], image: '/assets/images/1540575467063-1-medium.webp' }
  ]
};

export default function CaseRollsRoyce() {
  useEffect(() => {
    document.title = 'Rolls Royce - Orchestra Media';
  }, []);

  return <CaseStudyDetail caseStudy={caseStudy} />;
}