import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const heroContent = [
  {
    smallTitle: "Global Exhibition Excellence",
    bigTitle: ["Experience the", "Power of World-Class", "Exhibition Services"]
  },
  {
    smallTitle: "Stand Design & Construction",
    bigTitle: ["Transform Your", "Exhibition Presence with", "Innovative Solutions"]
  },
  {
    smallTitle: "Events Management",
    bigTitle: ["Create Unforgettable", "Experiences That Drive", "Business Growth"]
  }
];

export default function HeroSectionNew() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
            {/* Animated Small Title */}
            <div className="h-[44px] mb-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  className="inline-block px-6 py-2 rounded-full bg-[#8B1538]/20 backdrop-blur-sm text-[#C9A227] text-sm font-semibold border border-[#8B1538]/30"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {heroContent[currentIndex].smallTitle}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Animated Big Title */}
            <div className="h-[200px] md:h-[220px] lg:h-[260px] mb-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentIndex}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {heroContent[currentIndex].bigTitle.map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < heroContent[currentIndex].bigTitle.length - 1 && <br />}
                    </span>
                  ))}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Fixed Buttons */}
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
                  What We Do
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

      {/* Progress Indicators */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {heroContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentIndex 
                ? 'w-8 bg-[#C9A227]' 
                : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}