import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function CTASectionNew() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0a1628] via-[#0f1e2e] to-[#0a1628] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#8B1538]/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#C9A227]/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-3 rounded-full bg-[#8B1538]/20 backdrop-blur-sm text-[#C9A227] text-sm font-bold tracking-wider uppercase mb-6 border border-[#8B1538]/30"
          >
            Get Started Today
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Ready to Transform
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#8B1538]">
              Your Exhibition Presence?
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/70 text-xl mb-12 max-w-3xl mx-auto"
          >
            Partner with Orchestra Media and experience world-class exhibition services that 
            deliver measurable results and unforgettable brand experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-6 justify-center mb-16"
          >
            <Link to={createPageUrl('Contact')}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#8B1538] to-[#6d1029] hover:from-[#6d1029] hover:to-[#8B1538] text-white rounded-full px-10 h-16 text-lg group shadow-2xl shadow-[#8B1538]/30"
              >
                Book Free Consultation
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to={createPageUrl('CaseStudies')}>
              <Button 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#0a1628] rounded-full px-10 h-16 text-lg"
              >
                View Our Work
              </Button>
            </Link>
          </motion.div>

          {/* Contact Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            <a 
              href="tel:+97145745900"
              className="flex items-center gap-4 p-6 rounded-2xl bg-[#0f1e2e]/50 backdrop-blur-sm border border-white/10 hover:border-[#8B1538]/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8B1538] to-[#6d1029] flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div className="text-left">
                <div className="text-white/60 text-sm mb-1">Call Us Anytime</div>
                <div className="text-white font-bold text-lg group-hover:text-[#C9A227] transition-colors">
                  +971 4 574 5900
                </div>
              </div>
            </a>

            <a 
              href="mailto:info@orchestra.media"
              className="flex items-center gap-4 p-6 rounded-2xl bg-[#0f1e2e]/50 backdrop-blur-sm border border-white/10 hover:border-[#8B1538]/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8B1538] to-[#6d1029] flex items-center justify-center flex-shrink-0">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div className="text-left">
                <div className="text-white/60 text-sm mb-1">Email Us</div>
                <div className="text-white font-bold text-lg group-hover:text-[#C9A227] transition-colors">
                  info@orchestra.media
                </div>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}