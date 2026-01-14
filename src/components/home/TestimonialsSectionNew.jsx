import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Senior Marketing Manager',
    company: 'TechCorp International',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    quote: 'Orchestra Media transformed our exhibition presence completely. Their attention to detail and creative approach resulted in a 300% increase in booth traffic. The team\'s professionalism and expertise are unmatched in the industry.'
  },
  {
    name: 'James Anderson',
    role: 'Director of Business Development',
    company: 'Global Aerospace Solutions',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    quote: 'Working with Orchestra Media has been an absolute pleasure. Their global reach and local expertise helped us successfully launch at exhibitions across three continents. They consistently deliver excellence.'
  },
  {
    name: 'Lisa Chen',
    role: 'VP of Marketing',
    company: 'Innovation Defense Systems',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    quote: 'The ROI we achieved through Orchestra Media\'s services exceeded all expectations. From initial planning to post-event analysis, they demonstrated exceptional strategic thinking and flawless execution.'
  }
];

export default function TestimonialsSectionNew() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-[#0f1e2e] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 rounded-full bg-[#8B1538]/5 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A227] text-sm font-bold tracking-wider uppercase">
            Client Feedback
          </span>
          <div className="w-16 h-1 bg-[#8B1538] mx-auto mt-2 mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Happy Client Feedback
            <br />
            About Our Service
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-[#0a1628]/50 backdrop-blur-sm rounded-3xl p-12 border border-white/5">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  {/* Image */}
                  <div className="relative flex-shrink-0">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#8B1538]/30 shadow-2xl">
                      <img
                        src={testimonials[current].image}
                        alt={testimonials[current].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-[#8B1538] to-[#6d1029] flex items-center justify-center shadow-xl">
                      <Quote className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <p className="text-white/80 text-xl leading-relaxed mb-8 italic">
                      &quot;{testimonials[current].quote}&quot;
                    </p>
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-1">
                        {testimonials[current].name}
                      </h4>
                      <p className="text-[#C9A227] font-semibold">
                        {testimonials[current].role}
                      </p>
                      <p className="text-white/60 text-sm">
                        {testimonials[current].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-full bg-[#0a1628] border border-white/10 flex items-center justify-center hover:bg-[#8B1538] hover:border-[#8B1538] transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all ${index === current
                      ? 'w-12 bg-[#8B1538]'
                      : 'w-8 bg-white/20 hover:bg-white/40'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-14 h-14 rounded-full bg-[#0a1628] border border-white/10 flex items-center justify-center hover:bg-[#8B1538] hover:border-[#8B1538] transition-all"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Thumbnail Previews */}
          <div className="flex justify-center gap-4 mt-8">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`relative w-16 h-16 rounded-full overflow-hidden transition-all ${index === current
                    ? 'ring-4 ring-[#8B1538] scale-110'
                    : 'opacity-50 hover:opacity-100'
                  }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}