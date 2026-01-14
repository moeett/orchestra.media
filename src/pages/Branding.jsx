import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb, Palette, Layout, FileText, Globe2, Package, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'Insight & Positioning',
    description: 'We begin with clarity: who you are, who you serve, and how you win. We define your <strong>value proposition, messaging pillars, tone of voice, and proof points</strong>—then map cultural nuances per region (EU/MENA/USA/CIS) so your message lands without friction.',
    outputs: 'positioning statement, audience & region matrix, competitor map, messaging hierarchy, tone & lexicon.'
  },
  {
    icon: Palette,
    title: 'Identity System Design',
    description: 'Logotype, symbol, color, typography, grids, iconography, motion principles, 3D cues, and accessibility guardrails. We build a <strong>cohesive visual language</strong> that remains unmistakable whether it\'s on a 6m tower, a mobile screen, or a holographic overlay.',
    outputs: 'master identity, color & type scales, motion guidelines, icon set, data-visualization styles.'
  },
  {
    icon: Layout,
    title: 'Exhibition Visual System',
    description: 'A dedicated guide for exhibitions: material palettes, lighting direction, line-of-sight rules, zoning, screen aspect ratios, content density per distance, environmental graphics.',
    outputs: 'exhibition brand book, sightline maps, modular booth templates, vendor spec sheets.'
  },
  {
    icon: FileText,
    title: 'Content & Story Playbook',
    description: 'Signature headlines, narrative arcs for demos, product storytelling frames, and a translation/localization guide. Your teams get plug-and-play copy that protects brand voice.',
    outputs: 'content templates, demo scripts, localization QA checklist.'
  },
  {
    icon: Globe2,
    title: 'Digital & Social Extensions',
    description: 'Component libraries and templates for web, landing pages, email, social. Consistency from digital to physical means your pre-show campaigns and on-site visuals feel like one continuous experience.',
    outputs: 'UI component library, landing page templates, social graphics kit.'
  },
  {
    icon: Package,
    title: 'Activation Kits per Region & Show',
    description: 'Ready-to-deploy packs tailored to specific exhibitions: hero lines, screen ratios, approved materials & finishes, power/rigging constraints, and co-exhibitor rules.',
    outputs: 'regional activation guides, show-specific design packs.'
  },
  {
    icon: TrendingUp,
    title: 'Measurement & Optimization',
    description: 'We define brand KPIs and a scoreboard that connects creative to commercial outcomes: recall & preference, stand recognition, dwell time, asset reuse rates, speed to launch.',
    outputs: 'brand performance dashboard, KPI framework, quarterly optimization reports.'
  }
];

export default function Branding() {
  useEffect(() => {
    document.title = 'Branding - Orchestra Media';
  }, []);

  return (
    <div className="bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80"
            alt="Branding"
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
              EXTRA SERVICES - STRATEGIC MARKETING
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              BRANDING
            </h1>
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
              BENEFIT OUR SERVICE
            </motion.span>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Brand Systems That
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] via-[#8B1538] to-[#C9A227]">
                Travel Well
              </span>
            </h2>
            <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
              Your brand has to work everywhere: on a 30-second video, a 30-meter lightbox, a 3D façade at a
              national pavilion, a LinkedIn ad, and a C-level deck—often in different languages, regulations,
              and cultural contexts.
            </p>
          </motion.div>

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
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
                    alt="Branding"
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
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                    alt="Brand Identity"
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
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <div className="text-white/80 text-sm">Brand Consistency</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Orchestra Media designs <strong className="text-white">brand systems built for exhibitions</strong>:
                strong enough to be instantly recognizable, flexible enough to adapt to any venue, and precise
                enough to guide dozens of vendors without diluting quality.
              </p>
              <p className="text-white/60 leading-relaxed">
                We design for <strong className="text-white">impact & operational reality</strong>. That means
                we pair creative direction with the rules, templates, and production specs that make delivery
                reliable on the ground.
              </p>
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
              Global Strategies,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] via-[#8B1538] to-[#C9A227]">
                Local Impact
              </span>
            </h2>
            <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
              We design for impact & operational reality. That means we pair creative direction with the
              rules, templates, and production specs that make delivery reliable on the ground.
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