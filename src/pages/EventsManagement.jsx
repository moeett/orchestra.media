import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb, ClipboardList, Users, Cog, Globe2, CheckCircle2 } from 'lucide-react';

const eventTypes = [
  'Activations and launches',
  'Conferences and seminars',
  'Forums',
  'Exhibitions',
  'Gala dinners',
  'VIP dinners',
  'Corporate events',
  'Business missions',
  'Strategic sessions',
  'Festivals',
  'Concerts and shows',
  'Opening/closing ceremonies',
  'Events in Digital format',
  'Drone shows'
];

const features = [
  {
    icon: Lightbulb,
    title: 'Creative Concepts & Theme',
    description: 'It all starts with a big idea. We brainstorm unique, brand-focused ideas that align with your objectives and audience. Whether it\'s a futuristic tech showcase, a culturally themed gala dinner, or an adrenaline-pumping product reveal.'
  },
  {
    icon: ClipboardList,
    title: 'Full Event Planning',
    description: 'Our producers take care of every detail – venue selection, staging, lighting and sound design, entertainment booking, logistics, and vendor management. With expert ceremony planning for openings, closings, and key moments.'
  },
  {
    icon: Users,
    title: 'Audience Engagement & Networking',
    description: 'Beyond the stage, we craft opportunities for your attendees to actively participate and connect. This can include interactive installations, live polls/Q&A via event apps, social media walls, or facilitated networking sessions.'
  },
  {
    icon: Cog,
    title: 'Technical Production & Innovation',
    description: 'Our technical directors and crew are masters of cutting-edge event tech. Expect breathtaking audio-visuals: large-scale projection mapping, synchronized light shows, pyrotechnics, augmented reality displays.'
  },
  {
    icon: Globe2,
    title: 'Global Experience',
    description: 'Whether your event is in a premier convention center or a remote desert, we have done it. Our production experience spans the globe, including complex multinational events with multicultural teams.'
  }
];

const relatedServices = [
  {
    title: 'Content Production',
    page: 'ContentProduction',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80'
  },
  {
    title: 'VIP & Delegation Services',
    page: 'VIPServices',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80'
  },
  {
    title: 'Sponsorship',
    page: 'Sponsorship',
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&q=80'
  },
  {
    title: 'Marketing',
    page: 'Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
  }
];

export default function EventsManagement() {
  useEffect(() => {
    document.title = 'Events Management - Orchestra Media';
  }, []);

  return (
    <div className="bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&q=80"
            alt="Events Management"
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
              CORE SERVICES - EVENTS PRODUCTION
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              EVENTS MANAGEMENT
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
              Immersive Events with
              <br />
              Purpose and Power
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Orchestra Media&apos;s Strategic Marketing services ensure that your message travels far and resonates deeply.
              We develop holistic marketing strategies that are both visionary and pragmatic.
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
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80"
                alt="Events Production"
                className="rounded-2xl h-64 object-cover border border-white/10"
              />
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
                alt="Event Management"
                className="rounded-2xl h-64 object-cover border border-white/10 mt-8"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-white/70 leading-relaxed mb-6">
                Whether you&apos;re launching a product in a new region, boosting your presence at an exhibition,
                or rebranding for global growth, we have the expertise to make it a success.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {eventTypes.map((type) => (
                  <div key={type} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
                    <span className="text-white/80 text-sm">{type}</span>
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
              WHAT WE OFFER
            </span>
            <div className="w-16 h-1 bg-[#8B1538] mx-auto mt-2 mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              We Produce Extraordinary Events
              <br />
              That Stir Emotions and Drive Engagement
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto mt-4">
              We believe every event should serve a clear purpose. Our role is to infuse that purpose
              into every element of the event, while also delivering spectacle and excitement that
              attendees will never forget.
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={createPageUrl(service.page)} className="block">
                  <div className="bg-gradient-to-br from-[#0a1628] to-[#0a1628] rounded-3xl overflow-hidden border border-white/10 hover:border-[#8B1538]/50 transition-all duration-500">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#C9A227] transition-colors">
                        {service.title}
                      </h3>
                      <span className="inline-flex items-center text-[#C9A227] font-semibold text-sm group-hover:gap-2 transition-all">
                        View details
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
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
              Dreaming of an Event That
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#8B1538]">
                Leaves a Lasting Legacy?
              </span>
            </h2>
            <p className="text-white/70 text-xl mb-12">
              Get in Touch - Let&apos;s make it a reality.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#8B1538] to-[#6d1029] hover:from-[#6d1029] hover:to-[#8B1538] text-white rounded-full px-10 h-16 text-lg group shadow-2xl shadow-[#8B1538]/30"
              >
                Contact Us
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}