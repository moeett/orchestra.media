import React, { useEffect } from 'react';
import HeroSectionNew from '@/components/home/HeroSectionNew';
import AboutSectionNew from '@/components/home/AboutSectionNew';
import ServicesSectionNew from '@/components/home/ServicesSectionNew';
import WhyChooseSectionNew from '@/components/home/WhyChooseSectionNew';
import TestimonialsSectionNew from '@/components/home/TestimonialsSectionNew';
import CaseStudiesSectionNew from '@/components/home/CaseStudiesSectionNew';
import CTASectionNew from '@/components/home/CTASectionNew';
import BrandsSection from '@/components/home/BrandsSection';

export default function Home() {
  useEffect(() => {
    document.title = 'Orchestra Media - Global Exhibition & Event Services';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Orchestra Media is a trusted global agent for exhibition space and world-class stand building service for international defence, aerospace, technology/AI, and aviation trade shows.');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = 'Orchestra Media is a trusted global agent for exhibition space and world-class stand building service for international defence, aerospace, technology/AI, and aviation trade shows.';
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <div>
      <HeroSectionNew />
      <AboutSectionNew />
      <ServicesSectionNew />
      <WhyChooseSectionNew />
      <TestimonialsSectionNew />
      <BrandsSection />
      <CaseStudiesSectionNew />
      <CTASectionNew />
    </div>
  );
}