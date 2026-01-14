import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Building2, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const services = [
  {
    title: 'Sales Agent – Space Bookings',
    description: 'Expand your exhibition reach with our global network and end-to-end sales management.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80',
    page: 'SalesAgent'
  },
  {
    title: 'Booth Design & Construction',
    description: 'Make a powerful impression with custom-designed, expertly built exhibition stands.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    page: 'BoothDesign'
  },
  {
    title: 'Events Management',
    description: 'Immersive events with purpose and power - from concept to flawless execution.',
    icon: Calendar,
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80',
    page: 'EventsManagement'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#8B1538] font-semibold text-sm tracking-wider uppercase">
            Our Services
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#0a1628]">
            Your Comprehensive Solution
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            We offer a comprehensive suite of services that cover every aspect of your 
            exhibition or event participation – from strategy to execution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={createPageUrl(service.page)} className="group block h-full" aria-label={`Learn more about ${service.title}`}>
                <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      width="600"
                      height="256"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/50 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute bottom-4 left-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#8B1538] flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0a1628] group-hover:text-[#8B1538] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center text-[#8B1538] font-semibold">
                      <span>View details</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
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