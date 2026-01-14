import React, { useEffect } from 'react';
import CaseStudyDetail from './CaseStudyDetail';

const caseStudy = {
  title: 'Jetex',
  categories: ['Booth Construction', 'Event', 'Sales Agent – Space Bookings'],
  heroImage: '/assets/images/1474302770737-1-large.webp',
  sections: [
    {
      title: 'Case Overview',
      content: 'Jetex, one of the world\'s leading private aviation service providers, required a comprehensive exhibition and event solution that would reflect their premium brand positioning and global reach.\n\nOur collaboration extended across three key service areas: booth design and construction, full event management, and sales agent services for space bookings at major aviation exhibitions worldwide.\n\nThis integrated approach allowed Jetex to maintain a consistent, high-impact presence at international events while focusing on their core business of delivering exceptional private aviation services.',
      images: ['/assets/images/1474302770737-1-medium.webp']
    },
    {
      title: 'Booth Design and Construction',
      content: 'The Jetex booth was designed to embody the luxury, sophistication, and efficiency that define the brand\'s private aviation services.\n\nWe created an elegant, open-plan space featuring premium materials, sophisticated lighting, and comfortable hospitality areas where Jetex could engage with high-net-worth clients and aviation partners.\n\nThe design incorporated sleek architectural elements, brushed metal finishes, and ambient lighting that evoked the refined atmosphere of a private jet lounge.\n\nDigital screens showcased Jetex\'s global network, fleet capabilities, and exclusive services, while private meeting rooms provided confidential spaces for business discussions.',
      images: [
        '/assets/images/1474302770737-1-medium.webp',
        '/assets/images/1540575467063-1-medium.webp'
      ]
    },
    {
      title: 'Event Management',
      content: 'Beyond booth construction, we orchestrated complete event experiences for Jetex, including:',
      subsections: [
        {
          title: 'VIP Hospitality',
          content: 'Organizing exclusive client receptions, networking events, and private dinners that reinforced Jetex\'s premium positioning.'
        },
        {
          title: 'On-Site Coordination',
          content: 'Managing all aspects of event logistics, from staff briefings and scheduling to catering and entertainment.'
        },
        {
          title: 'Brand Activations',
          content: 'Creating memorable brand experiences through interactive displays, product demonstrations, and immersive presentations.'
        },
        {
          title: 'Media and PR Support',
          content: 'Coordinating press coverage, photography, and social media content to maximize event impact.'
        }
      ]
    },
    {
      title: 'Sales Agent Services',
      content: 'As Jetex\'s dedicated sales agent, our responsibilities included:',
      list: [
        '<strong>Strategic Space Selection:</strong> Securing premium exhibition spaces at key aviation events including EBACE, MEBAA, and NBAA.',
        '<strong>Exhibition Planning:</strong> Managing registration, documentation, and compliance with exhibition regulations.',
        '<strong>Logistics Management:</strong> Coordinating transportation, customs clearance, and on-site delivery of exhibition materials.',
        '<strong>Vendor Coordination:</strong> Managing relationships with exhibition organizers, contractors, and service providers.',
        '<strong>Budget Oversight:</strong> Ensuring cost-effective solutions while maintaining Jetex\'s high standards.',
        '<strong>Multi-Event Coordination:</strong> Managing Jetex\'s presence across multiple simultaneous global exhibitions.'
      ]
    },
    {
      title: 'Technology and Innovation',
      content: 'The booth incorporated state-of-the-art technology to enhance visitor engagement:',
      list: [
        'Interactive route planning systems showcasing Jetex\'s global network',
        'Virtual reality experiences of private jet interiors and services',
        'Real-time flight tracking and fleet availability displays',
        'Integrated CRM systems for instant client information and follow-up',
        'High-definition video walls featuring destination content and service highlights'
      ]
    },
    {
      title: 'Results and Impact',
      content: 'Our comprehensive approach delivered exceptional results for Jetex across multiple dimensions:',
      list: [
        '<strong>Brand Elevation:</strong> Consistent, premium presence at all major aviation exhibitions worldwide',
        '<strong>Business Development:</strong> Significant increase in qualified leads and high-value client acquisitions',
        '<strong>Operational Efficiency:</strong> Streamlined exhibition process allowing Jetex to focus on business relationships',
        '<strong>Cost Optimization:</strong> Integrated service model delivered savings through coordinated logistics and vendor management',
        '<strong>Global Consistency:</strong> Unified brand experience across multiple international markets',
        '<strong>Industry Recognition:</strong> Jetex booth consistently recognized as one of the most impressive at major aviation events'
      ]
    },
    {
      title: 'Long-Term Partnership',
      content: 'What began as a single exhibition project evolved into a strategic long-term partnership spanning multiple years and dozens of international events.\n\nThe success of this collaboration demonstrates the value of integrated exhibition services — when design, construction, event management, and sales agent services work in harmony, the result is more than the sum of its parts.\n\n<em>"Working with Jetex taught us that true partnership means understanding not just what a client needs, but anticipating what they\'ll need next. It\'s about building trust through consistent excellence, event after event, year after year."</em>\n\nThis project stands as a testament to the power of comprehensive exhibition solutions, where creative vision, operational excellence, and strategic planning converge to create lasting impact.'
    }
  ],
  relatedProjects: [
    { slug: 'CaseFalcon', title: 'Falcon', categories: ['Booth Construction'], image: '/assets/images/1540575467063-1-medium.webp' },
    { slug: 'CasePrattWhitney', title: 'Pratt and Whitney', categories: ['Booth Construction', 'Sales Agent'], image: '/assets/images/1436491865332-7-medium.webp' },
    { slug: 'CaseRollsRoyce', title: 'Rolls Royce', categories: ['Booth Construction'], image: '/assets/images/1544620347-c4fd-medium.webp' }
  ]
};

export default function CaseJetex() {
  useEffect(() => {
    document.title = 'Jetex - Orchestra Media';
  }, []);

  return <CaseStudyDetail caseStudy={caseStudy} />;
}