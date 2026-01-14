import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Globe2 } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function WhyChooseSectionNew() {
  return (
    <section className="py-24 bg-[#0a1628] relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: 'radial-gradient(circle, #8B1538 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <span className="text-[#C9A227] text-sm font-bold tracking-wider uppercase">
                Why Choose Us
              </span>
              <div className="w-16 h-1 bg-[#8B1538] mt-2" />
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Maximizing Profitability
              <br />
              Expert Guidance
            </h2>

            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              We deliver exceptional exhibition solutions that drive measurable results for your business, 
              combining decades of experience with innovative approaches.
            </p>

            {/* Counter Stats */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-[#8B1538]/10 blur-2xl" />
                <div className="relative bg-[#0f1e2e]/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                  <div className="text-4xl font-bold text-[#C9A227] mb-2">
                    <AnimatedCounter end={500} duration={2} suffix="+" />
                  </div>
                  <div className="text-white/60 text-sm">Happy Customers</div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#C9A227]/10 blur-2xl" />
                <div className="relative bg-[#0f1e2e]/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                  <div className="text-4xl font-bold text-[#C9A227] mb-2">
                    <AnimatedCounter end={1000} duration={2} suffix="+" />
                  </div>
                  <div className="text-white/60 text-sm">Complete Projects</div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#8B1538]/20 flex items-center justify-center flex-shrink-0 border border-[#8B1538]/30">
                  <Award className="w-6 h-6 text-[#C9A227]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Process Excellence</h3>
                  <p className="text-white/60">
                    Streamlined workflows and proven methodologies ensure consistent, high-quality delivery.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#8B1538]/20 flex items-center justify-center flex-shrink-0 border border-[#8B1538]/30">
                  <Globe2 className="w-6 h-6 text-[#C9A227]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Global Expertise</h3>
                  <p className="text-white/60">
                    International reach with local expertise across 50+ countries worldwide.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image with Experience Badge */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
                alt="Why Choose Us"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1628]/60 to-transparent" />
              
              {/* Floating Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-10 left-10 right-10 bg-gradient-to-br from-[#8B1538] to-[#6d1029] rounded-3xl p-8 shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-5xl font-bold text-white mb-2">
                      <AnimatedCounter end={35} duration={2} suffix="+" />
                    </div>
                    <div className="text-white/80 text-lg font-medium">Years of</div>
                    <div className="text-white font-bold text-xl">Work Experience</div>
                  </div>
                  <CheckCircle2 className="w-16 h-16 text-[#C9A227]" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}