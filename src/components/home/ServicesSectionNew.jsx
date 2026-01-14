import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Building2, Users, TrendingUp, Zap, Palette, Presentation } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Booth Design',
    subtitle: '& Construction',
    description: 'Transform your exhibition space into a stunning showcase that captures attention and drives engagement.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    page: 'BoothDesign'
  },
  {
    icon: Users,
    title: 'Events',
    subtitle: 'Management',
    description: 'Comprehensive event planning and execution services that ensure flawless delivery from start to finish.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    page: 'EventsManagement'
  },
  {
    icon: TrendingUp,
    title: 'Sales Agent',
    subtitle: 'Space Bookings',
    description: 'Strategic space acquisition and booking services at premier exhibitions worldwide.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    page: 'SalesAgent'
  },
  {
    icon: Zap,
    title: 'VIP Services',
    subtitle: '& Delegation',
    description: 'Exclusive VIP hospitality and delegation management for high-profile exhibition attendees.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
    page: 'VIPServices'
  },
  {
    icon: Palette,
    title: 'Branding',
    subtitle: '& Marketing',
    description: 'Comprehensive brand identity and marketing solutions tailored for global exhibitions.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    page: 'Branding'
  },
  {
    icon: Presentation,
    title: 'Content',
    subtitle: 'Production',
    description: 'Professional content creation services including video, photography, and multimedia production.',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80',
    page: 'ContentProduction'
  }
];

export default function ServicesSectionNew() {
  return (
    <section className="py-24 bg-[#0f1e2e] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#8B1538]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#C9A227]/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A227] text-sm font-bold tracking-wider uppercase">
            Popular Services
          </span>
          <div className="w-16 h-1 bg-[#8B1538] mx-auto mt-2 mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Innovative Exhibition Solutions
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <Link to={createPageUrl(service.page)}>
                <div className="relative overflow-hidden rounded-3xl bg-[#0a1628] border border-white/5 transition-all duration-500 hover:border-[#8B1538]/50 hover:shadow-2xl hover:shadow-[#8B1538]/20">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      srcSet={`
                        ${service.image.replace('w=800', 'w=300')} 300w,
                        ${service.image.replace('w=800', 'w=400')} 400w,
                        ${service.image.replace('w=800', 'w=600')} 600w,
                        ${service.image.replace('w=800', 'w=800')} 800w
                      `}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/50 to-transparent" />

                    {/* Icon Badge */}
                    <div className="absolute top-6 left-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B1538] to-[#6d1029] flex items-center justify-center shadow-xl">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#C9A227] transition-colors">
                      {service.title}
                      <br />
                      <span className="text-white/70">{service.subtitle}</span>
                    </h3>
                    <p className="text-white/60 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-[#C9A227] font-semibold group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}