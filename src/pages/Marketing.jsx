import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Target, Globe2, Palette, Handshake } from 'lucide-react';

const highlights = ['Pre-event buzz', 'Unique concepts', 'Full-spectrum marketing', 'Post-event follow-through'];

const features = [
  {
    icon: Target,
    title: 'Targeted Multi-Channel Campaigns',
    description: 'Reach the right audience at the right time. We create tailored plans for global outreach, deploying campaigns across <strong>social media, search engines, industry publications, email, and event media.</strong>',
    outputs: 'campaign strategies, content calendars, ad creative, email sequences, media placement plans.'
  },
  {
    icon: Globe2,
    title: 'Local Adaptation, Global Reach',
    description: 'A successful international campaign must feel local. We provide culturally aligned messaging and localization services to adapt your content for different regions without <strong>losing your brand\'s essence.</strong>',
    outputs: 'localized content, regional messaging guides, cultural adaptation frameworks, translation management.'
  },
  {
    icon: Palette,
    title: 'Creative Content & Design',
    description: 'Our in-house creative studio produces high-end graphic design, brochures, banners, dynamic video content and interactive web experiences. We excel in <strong>UI/UX design and web development.</strong>',
    outputs: 'brand collateral, promotional materials, video content, website designs, interactive experiences.'
  },
  {
    icon: Handshake,
    title: 'Growth Partnerships',
    description: 'Beyond traditional marketing, we identify strategic partnerships and sponsorships that can amplify your reach. This might mean <strong>aligning with a regional distributor or co-hosting an industry webinar.</strong>',
    outputs: 'partnership opportunities, co-marketing strategies, joint venture proposals, alliance roadmaps.'
  }
];

export default function Marketing() {
  useEffect(() => {
    document.title = 'Marketing - Orchestra Media';
  }, []);

  return (
    <div className="bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/1460925895917-a-large.webp"
            alt="Marketing"
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
              Growth Marketing for
              <br />
              Exhibitions and Global Launches
            </h1>
            <p className="text-white/70 text-lg max-w-3xl mx-auto mt-6">
              Orchestra Media&apos;s Strategic Marketing services ensure that your message travels far and resonates deeply.
              We develop holistic marketing strategies that are both visionary and pragmatic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-[#0f1e2e] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#8B1538]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#C9A227]/10 blur-3xl" />

        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, #8B1538 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538] to-[#C9A227] rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                  <img
                    src="/assets/images/1460925895917-a-medium.webp"
                    alt="Marketing"
                    className="relative rounded-3xl h-72 object-cover border border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="relative group mt-12"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227] to-[#8B1538] rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                  <img
                    src="/assets/images/1451187580459-4-medium.webp"
                    alt="Digital Marketing"
                    className="relative rounded-3xl h-72 object-cover border border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -right-8 bg-gradient-to-br from-[#8B1538] to-[#6d1029] rounded-2xl p-6 shadow-2xl border border-white/10"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">360°</div>
                  <div className="text-white/80 text-sm">Marketing Solutions</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Whether you&apos;re launching a product in a new region, boosting your presence at an exhibition,
                or rebranding for global growth, we have the expertise to make it a success.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-3 bg-gradient-to-r from-[#0a1628]/50 to-transparent rounded-2xl p-4 border border-white/5 hover:border-[#8B1538]/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8B1538] to-[#6d1029] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white/90 font-medium text-sm">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#8B1538]/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[#C9A227]/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

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
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#8B1538]/20 to-[#C9A227]/20 backdrop-blur-sm text-[#C9A227] text-sm font-bold tracking-wider uppercase mb-6 border border-[#8B1538]/30"
            >
              WHAT WE OFFER
            </motion.span>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              What Makes Our
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] via-[#8B1538] to-[#C9A227]">
                Marketing Different
              </span>
            </h2>
            <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
              We craft marketing strategies that combine branding, targeted messaging, social media,
              and digital presence to amplify your reach. Our campaigns are tailored for global
              outreach with local relevance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538]/20 to-[#C9A227]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-gradient-to-br from-[#0f1e2e] to-[#0a1628] rounded-3xl p-8 border border-white/10 hover:border-[#8B1538]/50 transition-all duration-500 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8B1538]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#8B1538] to-[#6d1029] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#C9A227] transition-colors">
                      {feature.title}
                    </h3>
                    <p
                      className="text-white/60 leading-relaxed mb-6"
                      dangerouslySetInnerHTML={{ __html: feature.description }}
                    />
                    {feature.outputs && (
                      <div className="bg-[#0a1628]/80 rounded-2xl p-5 border border-white/5 group-hover:border-[#8B1538]/30 transition-all">
                        <p className="text-xs font-bold text-[#C9A227] mb-2 uppercase tracking-wider">
                          Deliverables:
                        </p>
                        <p className="text-white/50 text-sm leading-relaxed">
                          {feature.outputs}
                        </p>
                      </div>
                    )}
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
              Looking to Make a
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#8B1538]">
                Bigger Impact?
              </span>
            </h2>
            <p className="text-white/70 text-xl mb-12">
              Get in Touch - Let&apos;s Start a New Project Together!
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