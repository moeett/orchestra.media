import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80',
    subtitle: 'Global Exhibition Excellence',
    title: ['Experience the', 'Power of World-Class', 'Exhibition Services'],
  },
  {
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&q=80',
    subtitle: 'Stand Design & Construction',
    title: ['Transform Your', 'Exhibition Presence with', 'Innovative Solutions'],
  },
  {
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80',
    subtitle: 'Events Management',
    title: ['Create Unforgettable', 'Experiences That Drive', 'Business Growth'],
  }
];

export default function HeroSectionNew() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen min-h-[600px] lg:min-h-[750px] overflow-hidden bg-[#0a1628]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            srcSet={`
              ${slides[currentSlide].image.replace('w=1920', 'w=640')} 640w,
              ${slides[currentSlide].image.replace('w=1920', 'w=1024')} 1024w,
              ${slides[currentSlide].image.replace('w=1920', 'w=1920')} 1920w
            `}
            sizes="100vw"
            alt="Exhibition"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#8B1538]/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#C9A227]/5 blur-3xl" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                className="inline-block px-6 py-2 rounded-full bg-[#8B1538]/20 backdrop-blur-sm text-[#C9A227] text-sm font-semibold mb-6 border border-[#8B1538]/30"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                {slides[currentSlide].subtitle}
              </motion.span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                {slides[currentSlide].title.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {line}
                  </motion.div>
                ))}
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
          </AnimatePresence>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-[#8B1538] transition-colors group"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1 rounded-full transition-all ${index === currentSlide
                ? 'w-12 bg-[#8B1538]'
                : 'w-8 bg-white/30 hover:bg-white/50'
                }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-[#8B1538] transition-colors group"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  );
}