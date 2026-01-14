
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Menu,
  X,
  ChevronDown,
  MessageCircle
} from 'lucide-react';
import Footer from '@/components/common/Footer';

export default function Layout({ children, currentPageName }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);

    // Canonical Tag Logic
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    // Remove query params for canonical if strictly needed, but keeping search is safer for search results pages if they existed.
    // However, usually canonicals should be the clean URL.
    const cleanUrl = window.location.origin + location.pathname;
    canonicalLink.setAttribute("href", cleanUrl.endsWith('/') ? cleanUrl : cleanUrl + '/');
  }, [location]);

  const navLinks = [
    { name: 'Home', page: 'Home' },
    {
      name: 'Company',
      children: [
        { name: 'About Us', page: 'About' },
        { name: 'Our Team', page: 'OurTeam' },
        { name: 'Global Presence', page: 'GlobalPresence' }
      ]
    },
    {
      name: 'Exhibitions & Events',
      children: [
        { name: 'Sales Agent – Space Bookings', page: 'SalesAgent' },
        { name: 'Booth Design & Construction', page: 'BoothDesign' },
        { name: 'Events Management', page: 'EventsManagement' },
        { name: 'VIP & Delegation Services', page: 'VIPServices' }
      ]
    },
    {
      name: 'Extra Services',
      children: [
        { name: 'Sponsorship', page: 'Sponsorship' },
        { name: 'Marketing', page: 'Marketing' },
        { name: 'Branding', page: 'Branding' },
        { name: 'AI Enhancements', page: 'AIEnhancements' },
        { name: 'Content Production', page: 'ContentProduction' },
        { name: 'Multimedia & Immersive', page: 'MultimediaImmersive' }
      ]
    },
    { name: 'Case Studies', page: 'CaseStudies' },
    { name: 'Contact', page: 'Contact' },
    { name: 'News', page: 'News' }
  ];

  const isHome = currentPageName === 'Home';
  const headerBg = scrolled || !isHome
    ? 'bg-white/95 backdrop-blur-lg shadow-sm'
    : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-[#0a1628]' : 'text-white';

  return (
    <div className="min-h-screen flex flex-col">
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center">
              <img
                src={scrolled || !isHome
                  ? "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695d3b88fb220305fba31023/66efdc399_orchestra-media-black.png"
                  : "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695d3b88fb220305fba31023/5f3c2fd4b_orchestra-media-white-logo.png"
                }
                alt="Orchestra Media"
                className="h-16 w-auto"
                width="240"
                height="64"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 ml-16">
              {navLinks.map((link) => (
                link.children ? (
                  <div key={link.name} className="relative group">
                    <button
                      className={`flex items-center gap-1 font-medium ${textColor} hover:text-[#8B1538] transition-colors`}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-2 min-w-[280px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.page}
                            to={createPageUrl(child.page)}
                            className="block px-4 py-3 text-[#0a1628] hover:bg-gray-50 hover:text-[#8B1538] transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className={`font-medium ${textColor} hover:text-[#8B1538] transition-colors ${currentPageName === link.page ? 'text-[#8B1538]' : ''
                      }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block ml-6">
              <Link to={createPageUrl('Contact')}>
                <Button className="bg-[#8B1538] hover:bg-[#6d1029] text-white rounded-full px-6">
                  Book a Free Consultation
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 ${textColor}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="max-w-7xl mx-auto px-6 py-4">
                {navLinks.map((link) => (
                  link.children ? (
                    <div key={link.name} className="py-2">
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center justify-between w-full py-2 text-[#0a1628] font-medium"
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {servicesOpen && (
                        <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                          {link.children.map((child) => (
                            <Link
                              key={child.page}
                              to={createPageUrl(child.page)}
                              className="block py-2 text-gray-600 hover:text-[#8B1538]"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.page}
                      to={createPageUrl(link.page)}
                      className="block py-3 text-[#0a1628] font-medium hover:text-[#8B1538]"
                    >
                      {link.name}
                    </Link>
                  )
                ))}
                <Link to={createPageUrl('Contact')} className="block mt-4">
                  <Button className="w-full bg-[#8B1538] hover:bg-[#6d1029] text-white rounded-full">
                    Book a Free Consultation
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* WhatsApp Float Button */}
      <a
        href="https://api.whatsapp.com/send?phone=+971554978427&text=Hello+Orchestra%21"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 group"
      >
        <div className="relative">
          <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>
          <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-white px-3 py-1.5 rounded-lg shadow-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Need Help?
          </span>
        </div>
      </a>

      {/* Footer */}
      <Footer />
    </div>
  );
}
