import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe2, Target, TrendingUp, Lightbulb, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Globe2,
    title: 'Global Exhibitor Network',
    description: 'Leverage our connections with thousands of companies worldwide. We\'ll promote your event across 100+ countries, attracting a diverse mix of exhibitors – including international market leaders and innovative startups – to enrich your show floor.'
  },
  {
    icon: Target,
    title: 'End-to-End Sales Management',
    description: 'From initial outreach and lead nurturing to final contract signing, we manage the entire sales cycle for booth bookings. Our team keeps a sharp focus on your targets, ensuring every square meter of exhibition space is sold to high-quality exhibitors.'
  },
  {
    icon: TrendingUp,
    title: 'Sponsorship & Advertising Deals',
    description: 'We don\'t stop at booth sales. We also package and sell sponsorships and advertising opportunities – helping you increase revenue per exhibitor and enhance the attendee experience through sponsored features.'
  },
  {
    icon: Lightbulb,
    title: 'Strategic Market Insight',
    description: 'Planning to expand your exhibition into new regions or industries? We provide data-driven insight on market demand and exhibitor preferences, guiding you on which sectors to target and how to position your event for maximum appeal.'
  }
];

const benefits = [
  'Professional brand representation',
  'Lead generation & qualification',
  'Cultural fluency across markets',
  'Post-event reporting & follow-up'
];

export default function SalesAgent() {
  useEffect(() => {
    document.title = 'Sales Agent – Space Bookings - Orchestra Media';
  }, []);

  return (
    <div className="bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/Sales-agent-space-booking-scaled.webp"
            alt="Sales Agent Space Bookings"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/80 to-[#0a1628]/60" />
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#8B1538]/10 blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#C9A227]/10 blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-6 py-2 rounded-full bg-[#8B1538]/20 backdrop-blur-sm text-[#C9A227] text-sm font-bold tracking-wider uppercase mb-6 border border-[#8B1538]/30">
              Benefit Our Service
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Expand Your Exhibition&apos;s
              <br />
              Reach and Revenue
            </h1>
            <p className="text-white/70 text-lg max-w-3xl mx-auto mt-6">
              Partnering with Orchestra Media as your sales agent at exhibitions ensures your brand stands out
              and converts visibility into results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#0f1e2e] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#8B1538]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#C9A227]/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="/assets/images/1556761175-5973-medium.webp"
                alt="Exhibition Sales"
                className="rounded-2xl h-64 object-cover border border-white/10"
              />
              <img
                src="/assets/images/1540575467063-1-medium.webp"
                alt="Trade Show"
                className="rounded-2xl h-64 object-cover border border-white/10 mt-8"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-white/70 leading-relaxed mb-6">
                With on-the-ground expertise, cultural fluency, and post-event reporting, we handle every detail,
                from client engagement to follow-up, so you achieve measurable ROI and a seamless, high-impact
                exhibition presence.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0" />
                    <span className="text-white/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, #8B1538 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#C9A227] text-sm font-bold tracking-wider uppercase">
              OUR APPROACH
            </span>
            <div className="w-16 h-1 bg-[#8B1538] mx-auto mt-2 mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              What Makes Our Approach Unique
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto mt-4">
              We have deep roots in key regions including the CIS, MENA, USA and beyond. This means we can tap
              into a vast database of potential exhibitors and sponsors across multiple sectors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-[#0f1e2e] to-[#0a1628] rounded-3xl p-8 border border-white/10 hover:border-[#8B1538]/50 transition-all duration-500 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B1538] to-[#6d1029] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C9A227] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 bg-[#0f1e2e] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#8B1538]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#C9A227]/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#C9A227] text-sm font-bold tracking-wider uppercase">
              RELATED SERVICES
            </span>
            <div className="w-16 h-1 bg-[#8B1538] mx-auto mt-2 mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              You Might Also Need
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <Link to={createPageUrl('VIPServices')} className="block">
                <div className="bg-gradient-to-br from-[#0a1628] to-[#0a1628] rounded-3xl overflow-hidden border border-white/10 hover:border-[#8B1538]/50 transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src="/assets/images/1511795409834-e-medium.webp"
                      alt="VIP & Delegation Services"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#C9A227] transition-colors">
                      VIP & Delegation Services
                    </h3>
                    <span className="inline-flex items-center text-[#C9A227] font-semibold group-hover:gap-2 transition-all">
                      View details
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <Link to={createPageUrl('Sponsorship')} className="block">
                <div className="bg-gradient-to-br from-[#0a1628] to-[#0a1628] rounded-3xl overflow-hidden border border-white/10 hover:border-[#8B1538]/50 transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src="/assets/images/1540575467063-1-medium.webp"
                      alt="Sponsorship"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#C9A227] transition-colors">
                      Sponsorship
                    </h3>
                    <span className="inline-flex items-center text-[#C9A227] font-semibold group-hover:gap-2 transition-all">
                      View details
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0a1628] via-[#0f1e2e] to-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#8B1538]/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#C9A227]/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Business Deserves
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#8B1538]">
                the Best!
              </span>
            </h2>
            <p className="text-white/70 text-xl mb-12">
              Get in Touch - Let&apos;s Start a New Project!
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#8B1538] to-[#6d1029] hover:from-[#6d1029] hover:to-[#8B1538] text-white rounded-full px-10 h-16 text-lg group shadow-2xl shadow-[#8B1538]/30"
              >
                Start a Project Now
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}