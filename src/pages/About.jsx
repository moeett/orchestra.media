import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Globe,
  Target,
  Lightbulb,
  Shield,
  CheckCircle2
} from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const stats = [
  { number: 17, suffix: '+', label: 'Years of Excellence' },
  { number: 50, suffix: '+', label: 'Countries Served' },
  { number: 500, suffix: '+', label: 'Successful Projects' },
  { number: 1000, suffix: '+', label: 'Happy Clients' }
];

const values = [
  {
    icon: Shield,
    title: 'Trust & Reliability',
    description: 'Building lasting partnerships through consistent excellence and transparent communication.'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Seamless execution across 50+ countries with local expertise and international standards.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Cutting-edge solutions combining creativity with advanced technology for memorable experiences.'
  },
  {
    icon: Target,
    title: 'Client-Centric',
    description: 'Your success is our mission. We tailor every solution to your unique business objectives.'
  }
];

const milestones = [
  {
    year: '2007',
    title: 'Foundation',
    description: 'Orchestra Media established with a vision to revolutionize exhibition services in the MENA region.'
  },
  {
    year: '2010',
    title: 'Regional Expansion',
    description: 'Expanded operations across Middle East with offices in UAE, Egypt, and Saudi Arabia.'
  },
  {
    year: '2015',
    title: 'Global Recognition',
    description: 'Recognized as a leading exhibition service provider, serving Fortune 500 companies worldwide.'
  },
  {
    year: '2020',
    title: 'Digital Innovation',
    description: 'Launched AI-enhanced and immersive exhibition solutions, pioneering the digital transformation.'
  },
  {
    year: '2024',
    title: 'Industry Leader',
    description: 'Established as the go-to partner for world-class exhibitions across 50+ countries.'
  }
];

export default function About() {
  useEffect(() => {
    document.title = 'About Us - Orchestra Media';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Learn about Orchestra Media - your trusted global partner for exhibition services with 17+ years of excellence across 50+ countries.');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = 'Learn about Orchestra Media - your trusted global partner for exhibition services with 17+ years of excellence across 50+ countries.';
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <div className="bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[500px] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
            alt="About Orchestra Media"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/95 to-[#0a1628]/80" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#8B1538]/10 blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#C9A227]/10 blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-6 py-2 rounded-full bg-[#8B1538]/20 backdrop-blur-sm text-[#C9A227] text-sm font-bold tracking-wider uppercase mb-6 border border-[#8B1538]/30">
              About Orchestra Media
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Maximizing Efficiency
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#8B1538]">
                and Productivity
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl">
              Your trusted global agent for exhibition space and world-class stand building services,
              delivering excellence across 50+ countries since 2007.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#0f1e2e] to-[#0a1628] border border-white/10 hover:border-[#8B1538]/50 transition-all"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#8B1538]">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </span>
                </div>
                <p className="text-white/70 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#8B1538]/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
                    alt="Exhibition"
                    className="rounded-2xl w-full h-64 object-cover border border-white/10"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
                    alt="Event"
                    className="rounded-2xl w-full h-48 object-cover border border-white/10"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
                    alt="Booth Design"
                    className="rounded-2xl w-full h-48 object-cover border border-white/10"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80"
                    alt="Team"
                    className="rounded-2xl w-full h-64 object-cover border border-white/10"
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#8B1538] to-[#6d1029] p-8 rounded-2xl shadow-2xl border border-white/10"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">
                    <AnimatedCounter end={17} suffix="+" />
                  </div>
                  <p className="text-white/90 text-sm font-medium">Years of<br />Excellence</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-[#8B1538]/20 text-[#C9A227] text-sm font-semibold mb-4">
                About Company
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Expert Consultant
              </h2>

              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                Orchestra Media is a trusted global agent for exhibition space and world-class stand building
                services. With over 17 years of expertise, we specialize in international defence, aerospace,
                technology/AI, and aviation trade shows.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Comprehensive exhibition services from space booking to execution',
                  'Global presence across 50+ countries with local expertise',
                  'Award-winning booth design and construction',
                  'End-to-end event management and VIP services'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                    <p className="text-white/80">{item}</p>
                  </motion.div>
                ))}
              </div>

              <Link to={createPageUrl('Contact')}>
                <Button className="bg-gradient-to-r from-[#8B1538] to-[#6d1029] hover:from-[#6d1029] hover:to-[#8B1538] text-white rounded-full px-8 h-14 text-lg group">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#8B1538]/20 text-[#C9A227] text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Maximizing Profitability
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#8B1538]">
                Expert Guidance
              </span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              We combine industry expertise, global reach, and innovative solutions to deliver
              exceptional results for your exhibition needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-[#0f1e2e] to-[#0a1628] border border-white/10 hover:border-[#8B1538]/50 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B1538] to-[#6d1029] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(to right, #8B1538 1px, transparent 1px), linear-gradient(to bottom, #8B1538 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[#C9A227] text-sm font-bold tracking-wider uppercase mb-4 inline-block">
              Our Journey
            </span>
            <div className="w-16 h-1 bg-[#8B1538] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Milestones of Excellence
            </h2>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8B1538] via-[#C9A227] to-[#8B1538] transform -translate-x-1/2" />

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                    }`}
                >
                  {/* Year Circle - Center */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-[#8B1538] to-[#6d1029] items-center justify-center border-8 border-[#0a1628] shadow-2xl z-10">
                    <span className="text-xl font-bold text-white">{milestone.year}</span>
                  </div>

                  {/* Mobile Year Badge */}
                  <div className="lg:hidden inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-[#8B1538] to-[#6d1029] shadow-xl mb-4">
                    <span className="text-2xl font-bold text-white">{milestone.year}</span>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 lg:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.2 }}
                      className="p-8 rounded-3xl bg-gradient-to-br from-[#0f1e2e] to-[#0a1628] border border-white/10 hover:border-[#8B1538]/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#8B1538]/20 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#C9A227] transition-colors">
                            {milestone.title}
                          </h3>
                          <p className="text-white/70 leading-relaxed text-lg">
                            {milestone.description}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-[#8B1538]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8B1538]/40 transition-colors">
                          <div className="w-3 h-3 rounded-full bg-[#C9A227]" />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#8B1538]/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#C9A227]/10 blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-12 rounded-3xl bg-gradient-to-br from-[#0f1e2e] to-[#0a1628] border border-white/10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Partner with Orchestra Media and transform your exhibition presence with our
              world-class services and global expertise.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-gradient-to-r from-[#8B1538] to-[#6d1029] hover:from-[#6d1029] hover:to-[#8B1538] text-white rounded-full px-10 h-14 text-lg group">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}