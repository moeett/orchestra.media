import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ChevronRight } from 'lucide-react';

export default function PageHero({ title, breadcrumbs = [], backgroundImage }) {
  const defaultImage = "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80";

  return (
    <section className="relative pt-32 pb-20 min-h-[400px] flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${backgroundImage || defaultImage}&fm=webp`}
          alt={`${title} page header background`}
          className="w-full h-full object-cover"
          width="1920"
          height="400"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/80 to-[#0a1628]/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#8B1538]/10 blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#C9A227]/5 blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            {title}
          </h1>
          
          {breadcrumbs.length > 0 && (
            <nav className="mt-6 flex items-center gap-2 text-white/60">
              <Link to={createPageUrl('Home')} className="hover:text-white transition-colors">
                Home
              </Link>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <ChevronRight className="w-4 h-4" />
                  {crumb.page ? (
                    <Link to={createPageUrl(crumb.page)} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}
        </motion.div>
      </div>
    </section>
  );
}