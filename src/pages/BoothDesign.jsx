import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Settings, Globe2, Cpu, Headphones, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Inspirational Design',
    description: 'Our design team blends technical excellence with imaginative creativity to craft booths that stop people in their tracks. From eye-catching architecture to immersive themed environments, we make sure your booth not only looks impressive but also serves your business goals.'
  },
  {
    icon: Settings,
    title: 'Turnkey Construction',
    description: 'Enjoy peace of mind with our end-to-end project management. We handle everything – structural engineering, material sourcing, audio-visual setup, lighting, furniture, graphics, and even last-minute changes – so you don\'t have to juggle multiple vendors.'
  },
  {
    icon: Globe2,
    title: 'Global Reach, Local Execution',
    description: 'With offices and partners across four continents, Orchestra Media delivers consistent quality worldwide. Our unique network of regional leaders in stand construction combines local knowledge with global standards.'
  },
  {
    icon: Cpu,
    title: 'Innovative Technology Integration',
    description: 'We can incorporate immersive multimedia elements – from 3D/AR experiences and interactive touchscreens to massive LED walls and holographic displays – to captivate attendees and make your booth a destination.'
  },
  {
    icon: Headphones,
    title: 'On-Site Support & Maintenance',
    description: 'A dedicated Orchestra Media crew will be on-site throughout the event to handle any technical needs, maintenance, or support for your booth. You can focus on your clients while we ensure your exhibit runs flawlessly.'
  }
];

const highlights = ['Design excellence', 'Quality construction', 'End-to-end convenience'];

export default function BoothDesign() {
  useEffect(() => {
    document.title = 'Booth Design & Construction - Orchestra Media';
  }, []);

  return (
    <div className="bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Booth Design Construction"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/95 to-[#0a1628]/80" />
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
              CORE SERVICES - BOOTH DESIGN
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              BOOTH DESIGN & CONSTRUCTION
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#0f1e2e] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#8B1538]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#C9A227]/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#C9A227] text-sm font-bold tracking-wider uppercase">
              BENEFIT OUR SERVICE
            </span>
            <div className="w-16 h-1 bg-[#8B1538] mx-auto mt-2 mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Make a Powerful Impression with
              <br />
              an Unforgettable Exhibition Stand
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Orchestra Media's Booth Design & Construction service delivers turn-key booth solutions – 
              custom-designed, expertly built, and ready to wow – anywhere in the world.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Booth Design"
                className="rounded-2xl h-64 object-cover border border-white/10"
              />
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
                alt="Exhibition Stand"
                className="rounded-2xl h-64 object-cover border border-white/10 mt-8"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-white/70 leading-relaxed mb-6">
                We take care of everything from initial creative concept to on-site construction and dismantle, 
                so you can focus on engaging your visitors.
              </p>
              <div className="space-y-3">
                {highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0" />
                    <span className="text-white/80 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
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
              HOW IT WORKS
            </span>
            <div className="w-16 h-1 bg-[#8B1538] mx-auto mt-2 mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Make Your Booth the Centerpiece of the Show
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto mt-4">
              In the bustling environment of an international trade show, a stunning booth can mean 
              the difference between blending in and becoming the talk of the event.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={createPageUrl('EventsManagement')} className="block">
                <div className="bg-gradient-to-br from-[#0a1628] to-[#0a1628] rounded-3xl overflow-hidden border border-white/10 hover:border-[#8B1538]/50 transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80"
                      alt="Project Management & Production"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#C9A227] transition-colors">
                      Project Management & Production
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
              Ready to Build Something
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#8B1538]">
                Extraordinary?
              </span>
            </h2>
            <p className="text-white/70 text-xl mb-12">
              Request a booth design proposal and let's start crafting your next showpiece!
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