import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Maximize, Video, Eye, Box, Film, Globe, Layers, Zap, MapPin, Microscope } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Immersive & Interactive Experience Design',
    description: 'We design audience journeys and interactive spaces that fuse custom screen visuals, spatial installations, mapping, AR/VR, synchronized effects, lighting, video and music—so the <strong>environment itself tells your story</strong> and invites participation. It\'s how we turn a stand or venue into an experience people feel, remember, and talk about.',
    outputs: 'interactive journey maps, spatial design specifications, synchronized show programming, multi-sensory experience frameworks.'
  },
  {
    icon: Maximize,
    title: 'Projection Mapping',
    description: 'From domes and building façades to vehicles and bespoke set pieces, we craft scalable projection mapping that transforms physical structures into dynamic canvases—elevating product launches, ceremonies, and outdoor showcases with <strong>cinematic precision.</strong>',
    outputs: 'projection content files, calibration data, technical riders, show control scripts, installation guides.'
  },
  {
    icon: Video,
    title: 'Large-Scale Multimedia Installations',
    description: 'We produce high-tech multimedia sculptures and installations for exhibitions, public spaces, and retail—engineered to <strong>attract crowds, deliver brand messages at scale,</strong> and integrate seamlessly with your campaign narrative.',
    outputs: 'installation designs, structural engineering specs, AV system integration, content management systems.'
  },
  {
    icon: Eye,
    title: 'AR/VR Experiences & Simulators',
    description: 'We build AR/VR product tours, demos, and training simulators that let audiences explore complex systems hands-on—boosting understanding, dwell time, and conversion while remaining <strong>portable for global event circuits.</strong>',
    outputs: 'AR applications, VR environments, simulator software, 3D product models, training modules.'
  },
  {
    icon: Box,
    title: 'Holographic Presentations',
    description: 'For high-impact reveals and technical storytelling, we deploy holographic installations that visualize products or data in 3D space—perfect for crowded halls where <strong>clarity and spectacle win attention fast.</strong>',
    outputs: 'holographic content, 3D models optimized for holographic displays, demonstration scripts.'
  },
  {
    icon: Film,
    title: '2D/3D Animation & Motion Content',
    description: 'Our content studio delivers cinematic motion graphics and full 3D/2D pipelines—from concept and scripting to rendering—so your visuals articulate value, reduce complexity, and stay <strong>on-brand across screens and formats.</strong>',
    outputs: 'motion graphics, 3D animations, brand films, explainer videos, screen content loops.'
  },
  {
    icon: Globe,
    title: 'Metaverse/Naked-Eye 3D & Emerging Formats',
    description: 'We extend campaigns into metaverse environments and naked-eye 3D displays, blending digital and physical to create <strong>future-ready brand worlds</strong> that can be activated at shows, pop-ups, or online.',
    outputs: 'metaverse environments, naked-eye 3D content, virtual showrooms, hybrid experience frameworks.'
  },
  {
    icon: Layers,
    title: 'Phygital Activations & Immersive Zones',
    description: 'We design "phygital" zones—holograms, interactivity, and city-embedded touchpoints—that scale globally yet adapt to local culture, turning campaigns into <strong>living ecosystems audiences step into.</strong>',
    outputs: 'phygital activation concepts, sensor integration specs, mobile app extensions, data-driven content systems.'
  },
  {
    icon: Zap,
    title: 'Tech-Enabled Live Shows & Support',
    description: 'Our show teams integrate state-of-the-art technologies with creative direction—covering idea, script, performance, capture/broadcast, and on-site technical support—so <strong>complex live moments run flawlessly.</strong>',
    outputs: 'show concepts, technical riders, run-of-show documents, on-site crew coordination, live streaming setup.'
  },
  {
    icon: MapPin,
    title: 'Global Rollout & Localization',
    description: 'Every immersive asset is built for synchronized global deployment and market-specific adaptation—keeping quality consistent while aligning content, language, and cultural cues to each region.',
    outputs: 'master content library, regional adaptation guides, localization workflows, quality control frameworks.'
  },
  {
    icon: Microscope,
    title: 'Sector-Specific Innovation Zones',
    description: 'We tailor immersive content to verticals—defense holographics, telecom 5G demos, AR/VR expositions—so decision-makers experience your value proposition <strong>in context, not in abstraction.</strong>',
    outputs: 'sector-specific demos, industry-tailored content, technical proof-of-concepts, vertical experience zones.'
  }
];

export default function AIEnhancements() {
  useEffect(() => {
    document.title = 'AI Enhancements - Orchestra Media';
  }, []);

  return (
    <div className="bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/1677442136019-2-large.webp"
            alt="AI Enhancements"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/60 to-[#0a1628]/40" />
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
              AI That Makes
              <br />
              Exhibitions Smarter
            </h1>
            <p className="text-white/70 text-lg max-w-3xl mx-auto mt-6">
              Trade shows are noisy. AI turns noise into signal—helping you choose the right markets, craft
              content faster, match exhibitors with buyers, personalize on-site interactions, and prove ROI
              after the show.
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
                    src="/assets/images/1677442136019-2-medium.webp"
                    alt="AI Technology"
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
                    src="/assets/images/1478720568477-1-medium.webp"
                    alt="Immersive Experience"
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
                  <div className="text-3xl font-bold text-white mb-1">AI</div>
                  <div className="text-white/80 text-sm">Powered Solutions</div>
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
                Orchestra Media builds an <strong className="text-white">AI-powered exhibition engine</strong> that
                sits across your sales, marketing, operations, and booth experience.
              </p>
              <p className="text-white/60 leading-relaxed">
                We craft marketing strategies that combine <strong className="text-white">branding, targeted messaging,
                  social media, and digital presence</strong> to amplify your reach. Our campaigns are tailored for
                global outreach with local relevance.
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
              Capture Attention.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] via-[#8B1538] to-[#C9A227]">
                Keep It. Convert It.
              </span>
            </h2>
            <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
              From immersive experiences to cutting-edge technologies, we deliver solutions that transform
              exhibitions into unforgettable brand moments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538]/20 to-[#C9A227]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-gradient-to-br from-[#0f1e2e] to-[#0a1628] rounded-3xl p-8 border border-white/10 hover:border-[#8B1538]/50 transition-all duration-500 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8B1538]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#8B1538] to-[#6d1029] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#C9A227] transition-colors">
                      {feature.title}
                    </h3>
                    <p
                      className="text-white/60 leading-relaxed mb-6 text-sm"
                      dangerouslySetInnerHTML={{ __html: feature.description }}
                    />
                    {feature.outputs && (
                      <div className="bg-[#0a1628]/80 rounded-2xl p-5 border border-white/5 group-hover:border-[#8B1538]/30 transition-all">
                        <p className="text-xs font-bold text-[#C9A227] mb-2 uppercase tracking-wider">
                          Deliverables:
                        </p>
                        <p className="text-white/50 text-xs leading-relaxed">
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