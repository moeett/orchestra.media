import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function AboutSectionNew() {
  return (
    <section className="py-24 bg-[#0a1628] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#8B1538]/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#C9A227]/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-7">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/assets/images/1540575467063-1-medium.webp"
                    alt="Exhibition"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
              <div className="col-span-5 flex flex-col gap-4">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/assets/images/1511578314322-3-medium.webp"
                    alt="Stand Design"
                    className="w-full h-[190px] object-cover"
                  />
                </div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/assets/images/1558618666-fcd2-medium.webp"
                    alt="Events"
                    className="w-full h-[190px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Counter Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#8B1538] to-[#6d1029] rounded-3xl p-8 shadow-2xl"
            >
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">
                  <AnimatedCounter end={35} duration={2} suffix="+" />
                </div>
                <div className="text-white/80 text-sm font-medium">Years of<br />Experience</div>
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
            <div className="mb-4">
              <span className="text-[#C9A227] text-sm font-bold tracking-wider uppercase">
                About Company
              </span>
              <div className="w-16 h-1 bg-[#8B1538] mt-2" />
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Maximizing Exhibition
              <br />
              Success & Impact
            </h2>

            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Your trusted global agent for exhibition space and world-class stand building services, 
              specializing in international defense, aerospace, technology/AI, and aviation trade shows.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#8B1538]/20 flex items-center justify-center flex-shrink-0 border border-[#8B1538]/30">
                  <CheckCircle2 className="w-6 h-6 text-[#C9A227]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Expert Consultation</h3>
                  <p className="text-white/60">
                    Strategic guidance from industry veterans with decades of combined exhibition experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#8B1538]/20 flex items-center justify-center flex-shrink-0 border border-[#8B1538]/30">
                  <CheckCircle2 className="w-6 h-6 text-[#C9A227]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Experience Excellence</h3>
                  <p className="text-white/60">
                    Delivering world-class exhibition solutions across 50+ countries globally.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Link to={createPageUrl('About')}>
                <Button 
                  size="lg" 
                  className="bg-[#8B1538] hover:bg-[#6d1029] text-white rounded-full px-8 h-14 group shadow-xl shadow-[#8B1538]/20"
                >
                  Explore Us
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}