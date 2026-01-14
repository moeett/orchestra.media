import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
export default function HeroSectionNew() {

  return (
    <section className="relative h-screen min-h-[600px] lg:min-h-[750px] overflow-hidden bg-[#0a1628]">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Video Overlay - Reduced Opacity */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[#0a1628]/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/80 via-[#0a1628]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent opacity-80" />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs tracking-[0.2em] uppercase font-light">Scroll</span>
          <div className="w-[30px] h-[50px] rounded-full border-2 border-white/20 flex justify-center p-2">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1.5 h-1.5 rounded-full bg-white mb-1"
            />
          </div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#8B1538]/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#C9A227]/5 blur-3xl" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="inline-block px-6 py-2 rounded-full bg-[#8B1538]/20 backdrop-blur-sm text-[#C9A227] text-sm font-semibold mb-6 border border-[#8B1538]/30"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Global Exhibition Excellence
            </motion.span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Experience the<br />
              Power of World-Class<br />
              Exhibition Services
            </h1>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Link to={createPageUrl('About')}>
                <Button
                  size="lg"
                  className="bg-[#8B1538] hover:bg-[#6d1029] text-white rounded-full px-8 h-14 text-lg group shadow-xl shadow-[#8B1538]/20"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to={createPageUrl('Contact')}>
                <Button
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#0a1628] rounded-full px-8 h-14 text-lg"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}