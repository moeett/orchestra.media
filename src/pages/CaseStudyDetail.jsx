import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Quote, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

// This component will be used for all case study detail pages
export default function CaseStudyDetail({ caseStudy }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (!caseStudy) {
    return <div>Case study not found</div>;
  }

  // Check if content contains quote
  const renderContent = (content) => {
    const paragraphs = content.split('\n\n');
    return paragraphs.map((paragraph, i) => {
      // Check if it's a quote (wrapped in quotes or contains em/strong tags suggesting emphasis)
      if (paragraph.includes('"') && paragraph.includes('</em>')) {
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative my-8 pl-12 pr-6 py-6 border-l-4 border-[#C9A227] bg-[#0f1e2e]/50 rounded-r-2xl"
          >
            <Quote className="absolute left-3 top-6 w-6 h-6 text-[#C9A227]/50" />
            <p className="text-lg text-white/80 italic" dangerouslySetInnerHTML={{ __html: paragraph }} />
          </motion.div>
        );
      }
      return (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="mb-6 text-lg text-white/70 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      );
    });
  };

  return (
    <div className="bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            className="w-full h-full object-cover opacity-20"
            width="1920"
            height="800"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/95 to-[#0a1628]/80" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#8B1538]/10 blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#C9A227]/10 blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-wrap gap-3 mb-6">
              {caseStudy.categories.map((category, idx) => (
                <motion.span
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-[#8B1538] to-[#6d1029] backdrop-blur-sm text-white text-sm font-bold tracking-wider uppercase shadow-lg"
                >
                  {category}
                </motion.span>
              ))}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {caseStudy.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div>
        {caseStudy.sections.map((section, index) => (
          <section 
            key={index} 
            className={`py-20 relative overflow-hidden ${
              index % 2 === 0 ? 'bg-[#0a1628]' : 'bg-[#0f1e2e]'
            }`}
          >
            {/* Background decorations */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" 
                style={{
                  backgroundImage: 'radial-gradient(circle, #8B1538 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }}
              />
            </div>
            
            {index % 2 === 0 ? (
              <>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#8B1538]/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#C9A227]/5 blur-3xl" />
              </>
            ) : (
              <>
                <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#C9A227]/5 blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#8B1538]/5 blur-3xl" />
              </>
            )}

            <div className="max-w-5xl mx-auto px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                {section.title && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                  >
                    <div className="h-1 w-16 bg-gradient-to-r from-[#8B1538] to-[#C9A227] rounded-full mb-6" />
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                      {section.title}
                    </h2>
                  </motion.div>
                )}
                
                {section.content && (
                  <div className="prose prose-lg max-w-none prose-invert">
                    {renderContent(section.content)}
                  </div>
                )}

                {section.images && section.images.length > 0 && (
                  <div className={`grid gap-6 mt-12 ${section.images.length === 1 ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
                    {section.images.map((image, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="relative group overflow-hidden rounded-2xl shadow-2xl border border-white/10"
                      >
                        <img 
                          src={image}
                          alt={`${section.title} - ${i + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    ))}
                  </div>
                )}

                {section.list && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-8 space-y-4"
                  >
                    {section.list.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-4 text-white/70 text-lg group hover:text-white transition-colors"
                      >
                        <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-[#8B1538] to-[#C9A227] mt-3 group-hover:scale-125 transition-transform" />
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </motion.li>
                    ))}
                  </motion.ul>
                )}

                {section.subsections && (
                  <div className="mt-12 space-y-12">
                    {section.subsections.map((subsection, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="border-l-2 border-[#C9A227]/30 pl-8 hover:border-[#C9A227] transition-colors"
                      >
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                          {subsection.title}
                        </h3>
                        {subsection.content && (
                          <p className="text-white/70 text-lg leading-relaxed mb-4">
                            {subsection.content}
                          </p>
                        )}
                        {subsection.list && (
                          <ul className="space-y-3 mt-6">
                            {subsection.list.map((item, j) => (
                              <motion.li
                                key={j}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: j * 0.05 }}
                                className="flex items-start gap-3 text-white/60 hover:text-white/80 transition-colors"
                              >
                                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#8B1538] mt-2.5" />
                                <span dangerouslySetInnerHTML={{ __html: item }} />
                              </motion.li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* More Projects Section */}
      <section className="py-24 bg-gradient-to-br from-[#0a1628] via-[#0f1e2e] to-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#8B1538]/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#C9A227]/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#8B1538]/20 to-[#C9A227]/20 backdrop-blur-sm text-[#C9A227] text-sm font-bold tracking-wider uppercase mb-6 border border-[#8B1538]/30"
            >
              MORE PROJECTS
            </motion.span>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Discover More
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#8B1538]">
                Success Stories
              </span>
            </h3>
            <p className="text-white/60 text-lg">Explore our portfolio of exceptional work</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudy.relatedProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link to={createPageUrl(project.slug)}>
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
                            {project.categories[0]}
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
                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#C9A227] transition-colors line-clamp-2">
                          {project.title}
                        </h4>
                        
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
    </div>
  );
}