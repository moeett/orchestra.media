import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const teamMembers = [
  {
    name: 'NATASHA LITVINOV',
    title: 'Managing Partner',
    bio: 'Global Brand Activations Expert with 20 years of experience in international management and large-scale projects.',
    image: '/assets/images/1573496359142-b-small.webp'
  },
  {
    name: 'JULIA NOVIKOVA',
    title: 'Managing Partner',
    bio: 'Over 15 years of extensive experience in the event industry. A creative visionary with a wealth of innovative ideas.',
    image: '/assets/images/1580489944761-1-small.webp'
  },
  {
    name: 'IRINA TOMA',
    title: 'Managing Partner (USA)',
    bio: 'A visionary business strategist focused on scaling operations in the US market.',
    image: '/assets/images/1487412720507-e-small.webp'
  },
  {
    name: 'KARAN SHAH',
    title: 'HEAD OF SALES (MENA)',
    bio: 'A dynamic sales leader with extensive experience across global trade and defense industries.',
    image: '/assets/images/1519085360753-a-small.webp'
  },
  {
    name: 'Keith Barthelot',
    title: 'Head of Sales (Egypt)',
    bio: 'A seasoned sales professional with extensive experience in the aerospace and defense exhibition sectors.',
    image: '/assets/images/1507003211169-0-small.webp'
  },
  {
    name: 'Rim Hicham',
    title: 'Head of Government Engagement',
    bio: 'Extensive expertise in managing high-level delegations, government relations, and protocol operations across major international events.',
    image: '/assets/images/1544005313-94dd-small.webp'
  },
  {
    name: 'Dona Makram',
    title: 'Head of Customer Service',
    bio: 'Experienced Operations Manager with 10 years in trade and defense exhibitions, specializing in full-scale event operations.',
    image: '/assets/images/1494790108377-b-small.webp'
  },
  {
    name: 'EMAN HEGAZY',
    title: 'BUSINESS DEVELOPMENT MANAGER (MENA)',
    bio: 'Proven track record in market research and client acquisition, expanding the company\'s footprint in MENA.',
    image: '/assets/images/1573497019940-1-small.webp'
  },
  {
    name: 'RISHAT KHAMITOV',
    title: 'BUSINESS DEVELOPMENT MANAGER (CIS)',
    bio: 'Strategic development expert specializing in forging high-value partnerships and securing sponsorship deals.',
    image: '/assets/images/1500648767791-0-small.webp'
  },
  {
    name: 'ANGELA STARTSEVA',
    title: 'PRODUCTION DIRECTOR',
    bio: 'Experienced production lead, overseeing end-to-end process of event and exhibition build-ups.',
    image: '/assets/images/1551836022-d5d8-small.webp'
  },
  {
    name: 'DOROTA PRIFTIS',
    title: 'PROJECT MANAGER',
    bio: 'Over 5 years of experience in project coordination, excelling in managing timelines and logistics.',
    image: '/assets/images/1534528741775-5-small.webp'
  },
  {
    name: 'MEI JEN WONG',
    title: 'PROJECT MANAGER',
    bio: 'Accomplished project manager with strong background in planning and executing complex events.',
    image: '/assets/images/1489424731084-a-small.webp'
  },
  {
    name: 'NARMINA MAGARAMOVA',
    title: 'PROJECT MANAGER',
    bio: 'Detail-oriented and process-driven, specializing in managing multi-phase projects from conceptualization to delivery.',
    image: '/assets/images/1438761681033-6-small.webp'
  },
  {
    name: 'RIADA HABIBOVA',
    title: 'PROJECT MANAGER',
    bio: 'Strategic thinker responsible for overseeing project lifecycles with focus on operational efficiency.',
    image: '/assets/images/1531123897727-8-small.webp'
  },
  {
    name: 'SAMI ULLAH ABBASI',
    title: 'Chief Financial Officer',
    bio: 'Finance specialist with deep expertise in budgeting, forecasting, and financial planning ensuring fiscal discipline.',
    image: '/assets/images/1472099645785-5-small.webp'
  },
  {
    name: 'Ahmed Guesmi',
    title: 'Creative Director',
    bio: 'Leads creative direction, turning brand stories into striking exhibition stands and immersive environments.',
    image: '/assets/images/1506794778202-c-small.webp'
  },
  {
    name: 'ELIZABETH D\'ALVA',
    title: 'Brand and Content Manager',
    bio: 'Results-driven professional with over a decade of experience in marketing strategy and business growth.',
    image: '/assets/images/1487412720507-e-small.webp'
  },
  {
    name: 'ELENA KHENKINA',
    title: 'HR & TRAVELLING COORDINATOR',
    bio: 'Combines HR expertise with logistical efficiency, ensuring smooth staffing operations and travel arrangements.',
    image: '/assets/images/1580489944761-1-small.webp'
  },
  {
    name: 'Olena Khanas',
    title: 'GRAPHIC DESIGNER',
    bio: 'Skilled graphic designer with expertise in branding, visual communication, and digital design.',
    image: '/assets/images/1534528741775-5-small.webp'
  },
  {
    name: 'Sally Elghonaimy',
    title: 'Senior Sales Manager',
    bio: 'Results-driven sales professional with over 14 years of experience in the events industry.',
    image: '/assets/images/1573496359142-b-small.webp'
  },
  {
    name: 'Mennat Allah Mansour',
    title: 'Marketing Manager',
    bio: '7+ years of experience in exhibitions and event marketing, led marketing campaigns for EDEX and Egypt International Airshow.',
    image: '/assets/images/1573497019940-1-small.webp'
  },
  {
    name: 'Bahaa Elbahery',
    title: 'Senior Marketing Executive',
    bio: 'Marketing professional with over five years of experience developing multi-channel campaigns.',
    image: '/assets/images/1500648767791-0-small.webp'
  },
  {
    name: 'Barbara Essam',
    title: 'Marketing Executive',
    bio: 'Seasoned Marketing Executive with proven track record in developing innovative strategies.',
    image: '/assets/images/1544005313-94dd-small.webp'
  },
  {
    name: 'Chehab Emad',
    title: 'VIP Executive',
    bio: 'Years of experience in customer relations, sales, and team leadership in VIP coordination.',
    image: '/assets/images/1507003211169-0-small.webp'
  },
  {
    name: 'Ahmed Atef',
    title: 'VIP Executive',
    bio: 'Specializing in high-level delegation coordination and protocol management for international events.',
    image: '/assets/images/1519085360753-a-small.webp'
  },
  {
    name: 'Mira Isakander',
    title: 'Administrational Manager',
    bio: 'Results-oriented professional with experience in marketing, administration, and event management.',
    image: '/assets/images/1494790108377-b-small.webp'
  }
];

export default function OurTeam() {
  useEffect(() => {
    document.title = 'Our Team - Orchestra Media';
  }, []);

  return (
    <div className="bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/orchestra-media-team2.webp"
            alt="Our Team"
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
              Consulting Team
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Dedicated Expert Team
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#0f1e2e] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#8B1538]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#C9A227]/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl bg-[#0a1628] border border-white/5 hover:border-[#8B1538]/50 transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#C9A227] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[#C9A227] text-sm font-medium mb-3">{member.title}</p>
                    <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-24 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#8B1538]/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#C9A227]/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/images/1522071820081-0-medium.webp"
                  alt="Join Our Team"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1628]/60 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#C9A227] text-sm font-bold tracking-wider uppercase">
                Join Our Team
              </span>
              <div className="w-16 h-1 bg-[#8B1538] mt-2 mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Orchestra Media Looking for
                <br />
                Talented Professionals
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Join a global team of exhibition and event professionals. We&apos;re always looking for talented individuals who are passionate about delivering world-class experiences.
              </p>
              <Link to={createPageUrl('Contact')}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#8B1538] to-[#6d1029] hover:from-[#6d1029] hover:to-[#8B1538] text-white rounded-full px-10 h-14 text-lg group shadow-2xl shadow-[#8B1538]/30"
                >
                  Send Us Message
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}