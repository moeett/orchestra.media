import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Globe2 } from 'lucide-react';

const regions = [
  {
    id: 'mena',
    name: 'MENA',
    image: '/assets/images/1512453979798-5-medium.webp',
    description: 'In MENA, we\'ve spent over a decade building deep regional expertise. Our Dubai-based team (and broader GCC network) provides on-the-ground know-how in one of the world\'s most vibrant exhibition markets. We understand the business etiquette, language (Arabic/French/English), and government protocols critical to success in the Middle East. This MENA cultural intelligence gives our clients an edge when engaging audiences from the Gulf to North Africa.'
  },
  {
    id: 'usa',
    name: 'USA',
    image: '/assets/images/1485871981521-5-medium.webp',
    description: 'In the USA, our presence keeps us at the forefront of exhibition technology and trends. North America\'s trade shows are larger-than-life, and we bring that big thinking to our clients worldwide. From Las Vegas conventions to East Coast industry summits, we handle the unique logistics (union labor, venue rules) of U.S. venues and incorporate American tech innovations into our projects.'
  },
  {
    id: 'cis',
    name: 'CIS & Baltics',
    image: '/assets/images/1513326738677-b-medium.webp',
    description: 'In CIS & Baltics market, we offer invaluable local insight in a region that can be challenging to navigate. Our partners in Central Asia, and Eastern Europe understand local business customs, permitting, and infrastructure. We\'ve managed pavilion builds and trade show participation in Moscow, Astana, and beyond.'
  },
  {
    id: 'asia',
    name: 'Asia',
    image: '/assets/images/1480796927426-f-medium.webp',
    description: 'Across Asia, we have a strong network spanning East Asia, South Asia, and Southeast Asia. Our team has delivered projects in China, India, Singapore, Indonesia, and more. We guide you through Asia\'s diverse exhibition landscape – from mega-shows in China\'s high-growth cities to specialised conferences in emerging ASEAN markets.'
  }
];

export default function GlobalPresence() {
  useEffect(() => {
    document.title = 'Global Presence - Orchestra Media';
  }, []);

  return (
    <div className="bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/1451187580459-4-large.webp"
            alt="Global Presence"
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
              HOME - GLOBAL PRESENCE
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              GLOBAL PRESENCE
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-[#0f1e2e] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#8B1538]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#C9A227]/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#C9A227] text-sm font-bold tracking-wider uppercase">
                Four Continents, One Team
              </span>
              <div className="w-16 h-1 bg-[#8B1538] mt-2 mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                We Combine Local Excellence with Unified Quality Standards
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Our footprint spans <strong>MENA</strong>, <strong>Europe</strong>, the <strong>USA</strong>,
                <strong> CIS</strong>, and <strong>Asia</strong> with native teams, trusted partners, and a
                unified standard of quality.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                This means one contract and one project cadence, delivered seamlessly across time zones
                with cultural fluency, established organizer relationships, and on-the-ground problem-solving.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                From VIP protocol in the Gulf to union regulations in the U.S., EU build compliance,
                or venue approvals in China, we navigate local realities, so your brand shows up
                flawlessly everywhere.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl border-8 border-[#0a1628]">
                  <img
                    src="/assets/images/1451187580459-4-medium.webp"
                    alt="Global Network"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1628]/60 to-transparent" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#8B1538] to-[#6d1029] shadow-2xl flex flex-col items-center justify-center border-4 border-[#0a1628]">
                    <Globe2 className="w-12 h-12 text-white mb-2" />
                    <span className="text-sm font-bold text-white">50+</span>
                    <span className="text-xs text-white/80">Countries</span>
                  </div>
                </div>

                {[
                  { top: '10%', left: '50%', label: 'Europe' },
                  { top: '40%', left: '80%', label: 'Asia' },
                  { top: '50%', left: '45%', label: 'MENA' },
                  { top: '30%', left: '15%', label: 'USA' },
                  { top: '25%', left: '65%', label: 'CIS' }
                ].map((marker, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{ top: marker.top, left: marker.left }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.5 }}
                  >
                    <div className="relative group">
                      <div className="w-4 h-4 rounded-full bg-[#C9A227] cursor-pointer" />
                      <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#C9A227]/50 animate-ping" />
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[#0a1628]">
                        {marker.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regions Grid */}
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
              Our Regions
            </span>
            <div className="w-16 h-1 bg-[#8B1538] mx-auto mt-2 mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Worldwide Coverage
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <motion.div
                key={region.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f1e2e] to-[#0a1628] border border-white/10 hover:border-[#8B1538]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#8B1538]/20">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={region.image}
                      srcSet={`
                        ${region.image.replace('-medium.webp', '-small.webp')} 400w,
                        ${region.image.replace('-medium.webp', '-medium.webp')} 600w,
                        ${region.image.replace('-medium.webp', '-medium.webp')} 800w
                      `}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      alt={region.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/50 to-transparent" />

                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8B1538] to-[#6d1029] flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-white font-bold text-3xl">{region.name}</span>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-white/70 leading-relaxed">
                      {region.description}
                    </p>
                  </div>
                </div>
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
              Whatever Your Ambition
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#8B1538]">
                We&apos;re Ready to Help
              </span>
            </h2>
            <p className="text-white/70 text-xl mb-12">
              Expanding into new markets, dominating an exhibition, or creating an unforgettable event –
              our team will manage a solution for success.
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