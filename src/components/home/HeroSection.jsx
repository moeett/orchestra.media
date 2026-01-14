import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80&fm=webp"
          alt="Aviation exhibition background"
          className="w-full h-full object-cover"
          width="1920"
          height="1080"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/60" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#8B1538]/30 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#C9A227]/20 to-transparent blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40 w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[#C9A227] text-sm font-medium mb-6">
              Global Exhibition Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight lg:max-w-2xl"
          >
            ORCHESTRA
            <span className="block text-[#8B1538]">MEDIA.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-2xl md:text-3xl text-white/90 font-light lg:max-w-2xl"
          >
            Your Global Growth Accelerator
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-lg text-white/70 leading-relaxed lg:max-w-2xl"
          >
            Orchestra Media is a trusted global agent for exhibition space and a world-class
            stand building service for international defence, aerospace, technology/AI, and
            aviation trade shows, focusing on MENA, USA and CIS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link to={createPageUrl('About')}>
              <Button size="lg" className="bg-[#8B1538] hover:bg-[#6d1029] text-white px-8 py-6 text-lg rounded-full group">
                What We Do
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-white text-[#0a1628] hover:bg-white/90 px-8 py-6 text-lg rounded-full">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scrolling Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/95 to-[#0a1628] border-t border-white/10">
        <div className="overflow-hidden py-5">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 whitespace-nowrap"
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-12">
                <span className="flex items-center gap-3 text-white/80">
                  <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                  With 20+ years of experience and 1200+ projects delivered
                </span>
                <span className="flex items-center gap-3 text-white/80">
                  <span className="w-2 h-2 rounded-full bg-[#8B1538]" />
                  Trusted advisors to Fortune 500 companies
                </span>
                <span className="flex items-center gap-3 text-white/80">
                  <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                  Track record spans 100+ countries
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}