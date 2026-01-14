import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Crown, Globe2, Users, Award, CheckCircle2 } from 'lucide-react';

const highlights = ['Hosted buyers', 'Official delegations', 'Protocol & concierge'];

const features = [
  {
    icon: Users,
    title: 'Invitation Management',
    description: 'We help you identify and reach out to VIPs who would benefit your event presence. We craft personalised invitation letters and handle any necessary formalities.'
  },
  {
    icon: Globe2,
    title: 'Travel & Logistics',
    description: 'Once VIPs confirm, we take care of their journey including booking flights, arranging accommodation, and coordinating ground transportation.'
  },
  {
    icon: Crown,
    title: 'On-Site VIP Services',
    description: 'We roll out the red carpet with dedicated VIP lounges, welcome packs, scheduled visits, and exclusive demonstrations.'
  },
  {
    icon: Award,
    title: 'Memorable Touches',
    description: 'We provide customised collaterals and gifts, arrange private dinners or networking receptions in high-end environments.'
  }
];

export default function VIPServicesNew() {
  useEffect(() => {
    document.title = 'VIP & Delegation Services - Orchestra Media';
  }, []);

  return (
    <div className="bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80"
            alt="VIP Services"
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
              EXHIBITIONS & EVENTS - VIP & DELEGATIONS
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              VIP & DELEGATION SERVICES
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
              When the Stakes Are High and
              <br />
              the Guests Are Important
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Our VIP & Delegations service ensures a gold-standard experience for all involved. 
              We handle the delicate task of engaging VIP attendees so that you can build meaningful 
              relationships in an exclusive setting.
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
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
                alt="VIP Services"
                className="rounded-2xl h-64 object-cover border border-white/10"
              />
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"
                alt="Delegation Services"
                className="rounded-2xl h-64 object-cover border border-white/10 mt-8"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-white/70 leading-relaxed mb-6">
                We also assist event organisers in attracting and managing official delegations 
                to elevate the profile of their events.
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
              WHAT WE OFFER
            </span>
            <div className="w-16 h-1 bg-[#8B1538] mx-auto mt-2 mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Your VIPs, Our Playbook:
              <br />
              Discreet, Precise, Effortless
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto mt-4">
              Make every minute with high-value guests count. Our multilingual, protocol-trained 
              team choreographs VIP programmes across MENA, Europe, the USA and Asia.
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-br from-[#0f1e2e] to-[#0a1628] rounded-3xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Results</h3>
            <p className="text-white/70 leading-relaxed">
              By handling VIP and delegation engagement end-to-end, we help our clients forge 
              connections that can lead to major deals, partnerships, or policy support. In the 
              defence sector, for instance, we've hosted over <strong className="text-[#C9A227]">580+ VIP military and government 
              delegations</strong> at exhibitions, facilitating introductions that led to significant 
              contracts.
            </p>
          </motion.div>
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
              Want to Make a Splash
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#8B1538]">
                with VIPs at Your Next Event?
              </span>
            </h2>
            <p className="text-white/70 text-xl mb-12">
              Contact us for a bespoke VIP management plan!
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#8B1538] to-[#6d1029] hover:from-[#6d1029] hover:to-[#8B1538] text-white rounded-full px-10 h-16 text-lg group shadow-2xl shadow-[#8B1538]/30"
              >
                Contact Us Online
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}