import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const regions = [
  { id: 'mena', name: 'MENA', color: 'from-[#8B1538] to-[#6d1029]' },
  { id: 'europe', name: 'Europe', color: 'from-[#1e40af] to-[#1e3a8a]' },
  { id: 'usa', name: 'USA', color: 'from-[#047857] to-[#065f46]' },
  { id: 'cis', name: 'CIS', color: 'from-[#7c3aed] to-[#6d28d9]' },
  { id: 'asia', name: 'Asia', color: 'from-[#C9A227] to-[#a3811e]' }
];

export default function GlobalPresenceSection() {
  const [activeRegion, setActiveRegion] = useState('mena');

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#8B1538] font-semibold text-sm tracking-wider uppercase">
              Global Presence
            </span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#0a1628] leading-tight">
              We Are Where
              <span className="block text-[#8B1538]">You Need Us</span>
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Orchestra Media maintains a truly global presence, with established teams
              and partners across Europe, the Middle East & North Africa (MENA), the
              United States, the CIS/Baltics, and Asia.
            </p>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Our &quot;<strong>4 continents, 1 team</strong>&quot; approach means no matter where
              your next event is, we have local experts ready to execute with precision.
            </p>

            {/* Region Pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region.id)}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${activeRegion === region.id
                      ? `bg-gradient-to-r ${region.color} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {region.name}
                </button>
              ))}
            </div>

            <Link to={createPageUrl('GlobalPresence')} className="mt-8 inline-flex items-center text-[#8B1538] font-semibold group">
              <span>Learn more</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          {/* Globe Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-200 animate-spin-slow" style={{ animationDuration: '30s' }} />

              {/* Middle Ring */}
              <div className="absolute inset-8 rounded-full border-2 border-gray-100" />

              {/* Globe Image */}
              <div className="absolute inset-16 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80"
                  alt="Global Network"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1628]/60 to-transparent" />
              </div>

              {/* Region Markers */}
              {[
                { top: '15%', left: '60%', label: 'Europe' },
                { top: '35%', left: '75%', label: 'Asia' },
                { top: '50%', left: '55%', label: 'MENA' },
                { top: '30%', left: '20%', label: 'USA' },
                { top: '20%', left: '65%', label: 'CIS' }
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
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-[#8B1538] animate-pulse" />
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#8B1538]/50 animate-ping" />
                  </div>
                </motion.div>
              ))}

              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center">
                  <Globe2 className="w-10 h-10 text-[#8B1538]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}