import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote: "The team is supportive and available around the clock. The quality of their work has always been impeccable. They're innovative, flexible, and a pleasure to work with.",
    author: "Komal Qaiser",
    company: "JETEX"
  },
  {
    quote: "I appreciate all that the Orchestra Media team has done to help us maintain a very professional look worldwide.",
    author: "Joseph Ulicny",
    company: "Valco"
  },
  {
    quote: "The stand ambassadors provided by Orchestra Media have set a new standard — professional, engaging, and truly exceptional.",
    author: "Beatriz Cases",
    company: "Palacio Corporate"
  },
  {
    quote: "For the past 7 years, the Orchestra Media team has delivered outstanding trade show stands and an unprecedented level of service at various events.",
    author: "Jenn Barter",
    company: "Datron"
  }
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#0a1628] via-[#0f1f35] to-[#0a1628] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#8B1538]/10 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-[#C9A227]/5 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A227] font-semibold text-sm tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white">
            What Clients Say About Us
          </h2>
        </motion.div>

        <div className="relative">
          {/* Quote Icon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <div className="w-16 h-16 rounded-full bg-[#8B1538] flex items-center justify-center">
              <Quote className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 pt-14 border border-white/10 min-h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-light italic">
                  "{testimonials[current].quote}"
                </p>
                <div className="mt-8">
                  <p className="text-[#C9A227] font-semibold text-lg">
                    {testimonials[current].author}
                  </p>
                  <p className="text-white/60">{testimonials[current].company}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prev}
              className="rounded-full border border-white/20 text-white hover:bg-white/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === current 
                      ? 'w-8 h-3 bg-[#8B1538]' 
                      : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={next}
              className="rounded-full border border-white/20 text-white hover:bg-white/10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}