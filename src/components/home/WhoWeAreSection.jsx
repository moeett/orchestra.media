import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function WhoWeAreSection() {
  const stats = [
    { value: 20, suffix: '+', label: 'Years of experience' },
    { value: 100, suffix: '+', label: 'Countries With Realised Projects' },
    { value: 1200, suffix: '+', label: 'Successfully projects done' }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#8B1538]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#C9A227]/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" 
                alt="Global Reach"
                className="w-full h-[500px] object-cover"
                width="800"
                height="500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
            >
              <div className="text-center">
                <span className="text-4xl font-bold text-[#8B1538]">4</span>
                <p className="text-gray-600 text-sm mt-1">Continents</p>
                <p className="text-[#0a1628] font-semibold">One Team</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#8B1538] font-semibold text-sm tracking-wider uppercase">
              Who We Are
            </span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#0a1628] leading-tight">
              Local Excellence,
              <span className="block text-[#8B1538]">Global Reach</span>
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Uniting top experts across continents, we help brands expand globally through 
              unified project execution. As your strategic partner, we unlock new markets and 
              opportunities, providing end-to-end support from concept to completion.
            </p>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              With a global vision and boutique execution, our team delivers the creativity, 
              innovation, and cultural fluency that world-class events demand.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-[#0a1628]">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}