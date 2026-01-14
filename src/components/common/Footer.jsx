import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import {
  Facebook,
  Youtube,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'About', page: 'About' },
    { name: 'Global Presence', page: 'GlobalPresence' },
    { name: 'Case Studies', page: 'CaseStudies' },
    { name: 'News', page: 'News' },
    { name: 'Contact', page: 'Contact' }
  ];

  const serviceLinks = [
    { name: 'Sales Agent – Space Bookings', page: 'SalesAgent' },
    { name: 'Booth Design & Construction', page: 'BoothDesign' },
    { name: 'Events Management', page: 'EventsManagement' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/orchestramediaagency/', label: 'Facebook' },
    { icon: Youtube, href: 'https://www.youtube.com/@orchestramedia', label: 'YouTube' },
    { icon: Instagram, href: 'https://www.instagram.com/orchestra_media/', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-[#0a1628] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695d3b88fb220305fba31023/5f3c2fd4b_orchestra-media-white-logo.png"
                alt="Orchestra Media"
                className="h-20 w-auto"
                width="250"
                height="80"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Your trusted global agent for exhibition space and world-class stand building services.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8B1538] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              {['About', 'OurTeam', 'GlobalPresence', 'News'].map((page) => (
                <li key={page}>
                  <Link
                    to={createPageUrl(page)}
                    className="text-gray-400 hover:text-[#C9A227] transition-colors"
                  >
                    {page.replace(/([A-Z])/g, ' $1').trim()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Core Services</h3>
            <ul className="space-y-4">
              {[
                { name: 'Sales Agent', page: 'SalesAgent' },
                { name: 'Booth Design', page: 'BoothDesign' },
                { name: 'Events Management', page: 'EventsManagement' },
                { name: 'VIP Services', page: 'VIPServices' }
              ].map((service) => (
                <li key={service.page}>
                  <Link
                    to={createPageUrl(service.page)}
                    className="text-gray-400 hover:text-[#C9A227] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Connect</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#C9A227] transition-colors group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <Link
                  to={createPageUrl('Contact')}
                  className="flex items-center gap-3 text-gray-400 hover:text-[#C9A227] transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Orchestra Media. All rights reserved.
            </p>
            <span className="hidden md:inline text-white/20">|</span>
            <p className="text-white/60 text-sm">
              Website created by{' '}
              <a
                href="https://webcraftdev.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A227] hover:text-white transition-colors underline"
              >
                WebCraftDev
              </a>
            </p>
          </div>
          <div className="flex gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}