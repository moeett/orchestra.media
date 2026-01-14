import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Video, Eye, Box, Layers, Globe, Maximize } from 'lucide-react';

const highlights = [
  'Video/Photo & 3D/2D',
  'AR/VR, holograms',
  'Phygital activations',
  'Web Development',
  'Commercial',
  'Projection Mapping',
  'Post-production & distribution'
];

const features = [
  {
    icon: Video,
    title: 'Video/Photo & 3D/2D',
    description: 'Our content studio produces cinematic video, product films, and photography alongside 2D/3D assets for screens, LED walls, and brand environments. <strong>Story first, production second, impact always.</strong>',
    outputs: 'brand films, product demos, event recaps, motion graphics, 3D product renders, photorealistic visualizations.'
  },
  {
    icon: Eye,
    title: 'AR/VR',
    description: 'We design immersive layers that invite audiences to explore—AR try-ons, guided VR demos, spatial product walkthroughs, and digital twins of your stand. Each experience is built to be <strong>intuitive and multilingual.</strong>',
    outputs: 'AR applications, VR experiences, 360° virtual tours, interactive product configurators.'
  },
  {
    icon: Box,
    title: 'Holograms',
    description: 'Holographic showcases add a striking, future-forward dimension to product storytelling. We integrate holograms with lighting, sound, and show control for <strong>crisp legibility on a busy floor.</strong>',
    outputs: 'holographic content, 3D models optimized for holographic displays, synchronized show programming.'
  },
  {
    icon: Layers,
    title: 'Phygital Activations',
    description: 'We connect physical architecture with digital interaction—sensor-based triggers, responsive screens, mobile extensions, and live data that adapts content in real time.',
    outputs: 'interactive installations, touchscreen applications, motion-triggered experiences, mobile companion apps.'
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'We build fast, elegant websites and landing pages for show campaigns, registration and ticketing, product microsites, and post-event follow-up—integrated with <strong>analytics, CRM, and marketing automation.</strong>',
    outputs: 'event websites, landing pages, registration systems, post-event portals, lead capture forms.'
  },
  {
    icon: Maximize,
    title: 'Projection Mapping',
    description: 'Projection mapping transforms any surface into a storytelling canvas. We handle creative, technical design, content production, and show programming to deliver <strong>sharp, distortion-free visuals.</strong>',
    outputs: 'projection mapping content, show scripts, technical rider documents, calibration files.'
  }
];

export default function ContentProduction() {
  useEffect(() => {
    document.title = 'Content Production - Orchestra Media';
  }, []);

  return (
    <div className="bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1920&q=80"
            alt="Content Production"
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
              EXTRA SERVICES - CONTENT PRODUCTION
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              CONTENT PRODUCTION
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
              Engage Your Audience with
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] via-[#8B1538] to-[#C9A227]">
                Compelling Content
              </span>
            </h2>
            <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
              Our Content Production service helps you tell your story in ways that captivate attention 
              and leave a lasting impression. In a crowded exhibition hall, dynamic content can be the 
              magnet that draws visitors to your booth.
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
                    src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80"
                    alt="Content Production"
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
                    src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80"
                    alt="Video Production"
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
                  <div className="text-white/80 text-sm">Content Solutions</div>
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
                We blend artistic direction with engineering precision to turn bold concepts into flawless 
                realities. From first sketch to opening hour, our end-to-end team orchestrates idea, script, 
                design, technical build, and on-site delivery.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
                    <span className="text-white/80 text-sm">{highlight}</span>
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
              Fresh Ideas,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] via-[#8B1538] to-[#C9A227]">
                Brilliant Realisation
              </span>
            </h2>
            <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
              We blend artistic direction with engineering precision to turn bold concepts into flawless realities. 
              From first sketch to opening hour, our end-to-end team orchestrates every touchpoint.
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
              Your Business Deserves the
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#8B1538]">
                Content Production Solutions
              </span>
            </h2>
            <p className="text-white/70 text-xl mb-12">
              Get in Touch - Let's Start a New Project Together!
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