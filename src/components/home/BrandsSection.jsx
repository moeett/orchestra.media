import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  'Rolls Royce', 'JETEX', 'Pratt & Whitney', 'Datron', 'Valco', 'Palacio',
  'Boeing', 'Airbus', 'Collins', 'Honeywell', 'GE Aviation', 'Safran',
  'MTU', 'Lufthansa Technik', 'SR Technics', 'Turkish Technic'
];

export default function BrandsSection() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-gray-500 font-medium text-sm tracking-wider uppercase">
            Brands That Trust Us
          </span>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-16"
          >
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 px-6 py-4 bg-gray-50 rounded-xl"
              >
                <span className="text-lg font-semibold text-gray-400 whitespace-nowrap">
                  {brand}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}