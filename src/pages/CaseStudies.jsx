import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, ExternalLink } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    slug: 'kingdom-tomorrow',
    title: 'Kingdom of Tomorrow Exhibition',
    category: 'Exhibition Management',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    description: 'A groundbreaking exhibition showcasing future technologies and innovation for a major government initiative.'
  },
  {
    id: 2,
    slug: 'pratt-whitney',
    title: 'Pratt & Whitney Global Tour',
    category: 'Booth Design',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    description: 'Multi-continent exhibition presence for aerospace leader with custom-built stands across 15 international shows.'
  },
  {
    id: 3,
    slug: 'rolls-royce',
    title: 'Rolls-Royce Defense Solutions',
    category: 'Immersive Experience',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    description: 'Interactive booth experience featuring AR demonstrations and immersive product showcases.'
  },
  {
    id: 4,
    slug: 'mirion-sun-nuclear',
    title: 'Mirion & Sun Nuclear',
    category: 'Booth Construction',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80',
    description: 'Sophisticated medical technology exhibition stands designed for global healthcare conferences.'
  },
  {
    id: 5,
    slug: 'jetex',
    title: 'Jetex VIP Services',
    category: 'Event Management',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80',
    description: 'Premium event coordination and VIP delegation management for luxury aviation brand.'
  },
  {
    id: 6,
    slug: 'falcon',
    title: 'Falcon Defense Systems',
    category: 'Technology Integration',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    description: 'Advanced holographic presentations and interactive displays for defense technology showcase.'
  },
  {
    id: 7,
    slug: 'formula1',
    title: 'Formula 1 Experience Zone',
    category: 'Brand Activation',
    image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&q=80',
    description: 'High-energy fan engagement zone featuring racing simulators and immersive brand experiences.'
  }
];

export default function CaseStudies() {
  useEffect(() => {
    document.title = 'Case Studies - Orchestra Media';
  }, []);

  return (
    <div className="bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80"
            alt="Case Studies"
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
              OUR PORTFOLIO
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              CASE STUDIES
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-[#0f1e2e] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#8B1538]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#C9A227]/10 blur-3xl" />
        
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: 'radial-gradient(circle, #8B1538 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#8B1538]/20 to-[#C9A227]/20 backdrop-blur-sm text-[#C9A227] text-sm font-bold tracking-wider uppercase mb-6 border border-[#8B1538]/30"
            >
              FEATURED PROJECTS
            </motion.span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Success Stories from
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] via-[#8B1538] to-[#C9A227]">
                Around the World
              </span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Explore our portfolio of successful exhibition projects, event management, and immersive experiences 
              delivered for global brands across multiple continents and industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid Section */}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={createPageUrl(`Case${project.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}`)}>
                  <div className="group relative h-full">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538]/20 to-[#C9A227]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative bg-gradient-to-br from-[#0f1e2e] to-[#0a1628] rounded-3xl overflow-hidden border border-white/10 hover:border-[#8B1538]/50 transition-all duration-500 h-full">
                      {/* Image Container */}
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/50 to-transparent opacity-60" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#8B1538] to-[#6d1029] text-white text-xs font-bold tracking-wider uppercase shadow-lg">
                            {project.category}
                          </span>
                        </div>

                        {/* Hover Icon */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <ExternalLink className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C9A227] transition-colors line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed line-clamp-3 mb-4">
                          {project.description}
                        </p>
                        
                        {/* View Project Link */}
                        <div className="flex items-center gap-2 text-[#C9A227] font-semibold text-sm group-hover:gap-3 transition-all">
                          <span>View Project</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>

                      {/* Decorative Corner */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8B1538]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
              Ready to Create Your Own
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#8B1538]">
                Success Story?
              </span>
            </h2>
            <p className="text-white/70 text-xl mb-12">
              Let's discuss how we can make your next project unforgettable
            </p>
            <Link to={createPageUrl('Contact')}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#8B1538] to-[#6d1029] hover:from-[#6d1029] hover:to-[#8B1538] text-white rounded-full px-10 py-4 text-lg font-semibold shadow-2xl shadow-[#8B1538]/30 inline-flex items-center gap-3 group"
              >
                Start Your Project
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}