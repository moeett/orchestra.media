import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, ExternalLink } from 'lucide-react';

const caseStudies = [
  {
    slug: 'Formula1',
    title: 'Formula 1 Fanzone',
    category: 'Events & Experiences',
    image: '/assets/images/1532298229144-0-medium.webp',
  },
  {
    slug: 'Mirionsunnuclear',
    title: 'Mirion Sun Nuclear',
    category: 'Exhibition Stand Design',
    image: '/assets/images/1492619375914-8-medium.webp',
  },
  {
    slug: 'Falcon',
    title: 'Falcon Aviation',
    category: 'VIP Services',
    image: '/assets/images/1451187580459-4-medium.webp',
  },
  {
    slug: 'Rollsroyce',
    title: 'Rolls Royce',
    category: 'Premium Stand Build',
    image: '/assets/images/1558618666-fcd2-medium.webp',
  }
];

export default function CaseStudiesSectionNew() {
  return (
    <section className="py-24 bg-[#0a1628] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#8B1538]/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#C9A227]/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A227] text-sm font-bold tracking-wider uppercase">
            Recent Projects
          </span>
          <div className="w-16 h-1 bg-[#8B1538] mx-auto mt-2 mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Latest Case Studies
          </h2>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <Link to={createPageUrl(`Case${study.slug}`)}>
                <div className="relative overflow-hidden rounded-3xl bg-[#0f1e2e] border border-white/5 hover:border-[#8B1538]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#8B1538]/20">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={study.image}
                      srcSet={`
                        ${study.image.replace('-medium.webp', '-small.webp')} 400w,
                        ${study.image.replace('-medium.webp', '-medium.webp')} 600w,
                        ${study.image.replace('-medium.webp', '-medium.webp')} 800w
                      `}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      alt={study.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/50 to-transparent" />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <span className="text-[#C9A227] text-sm font-semibold mb-2">
                        {study.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#C9A227] transition-colors">
                        {study.title}
                      </h3>
                      <div className="flex items-center text-white/80 group-hover:text-[#C9A227] transition-colors">
                        <span className="text-sm font-semibold">View Project</span>
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to={createPageUrl('CaseStudies')}>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8B1538] to-[#6d1029] text-white rounded-full font-semibold hover:shadow-xl hover:shadow-[#8B1538]/30 transition-all group">
              View All Case Studies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}