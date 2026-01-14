import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Facebook,
  Youtube,
  Instagram,
  Linkedin
} from 'lucide-react';
import { toast } from 'sonner';

const offices = [
  {
    region: 'MENA',
    contact: 'Karan Ajay Shah',
    title: 'Head of Sales',
    email: 'Karan@orchestra.media',
    phones: ['+971 4 574 5900', '+971 4 608 6799'],
    address: 'Office 211- Floor 03, The Place- Dubai Chambers, DCCI New Extension, Baniyas Rd – Port Saeed – Dubai, UAE'
  },
  {
    region: 'Egypt',
    contact: 'Eman Hegazy',
    title: 'Business Development Manager',
    email: 'Eman@orchestra.media',
    phones: ['+20 120 666 0933'],
    address: '36R, Sixth district, Zahraa Al Maadi, Cairo, Egypt'
  },
  {
    region: 'CIS',
    contact: 'Rishat Khamitov',
    title: 'Business Development Manager',
    email: 'Rishat@orchestra.media',
    phones: ['+7 777 622 2929'],
    address: '225 Khussainov str, office 323, Almaty, Kazakhstan 050060'
  },
  {
    region: 'USA',
    contact: 'Irina Toma',
    title: 'Managing Partner',
    email: 'Irina@orchestra.media',
    phones: ['+1 754 230 0884'],
    address: '2540 SW 14 ave, unit 205, Fort Lauderdale FL 33315'
  }
];

const services = [
  'Booth Design & Construction',
  'Sales agents & Space bookings',
  'Events Management',
  'VIP & Delegation Services',
  'Sponsorship',
  'Marketing',
  'Branding',
  'AI enhancements',
  'Content Production',
  'Multimedia & Immersive'
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us - Orchestra Media';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Get in touch with Orchestra Media. Contact our global team for exhibition space, booth design, events management, and VIP services.');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = 'Get in touch with Orchestra Media. Contact our global team for exhibition space, booth design, events management, and VIP services.';
      document.head.appendChild(newMeta);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Thank you! We will get back to you soon.');
    setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
    setLoading(false);
  };

  return (
    <div className="bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
            alt="Contact"
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
              GET IN TOUCH
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              CONTACT US
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-[#0f1e2e] relative overflow-hidden">
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
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#8B1538]/20 to-[#C9A227]/20 backdrop-blur-sm text-[#C9A227] text-sm font-bold tracking-wider uppercase mb-6 border border-[#8B1538]/30"
              >
                CONTACT US
              </motion.span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Questions, Ideas,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] via-[#8B1538] to-[#C9A227]">
                  Get in Touch
                </span>
              </h2>
              <p className="mt-4 text-white/60 text-lg leading-relaxed mb-8">
                Whether you're interested in collaborating with us on your next project 
                or simply want to reach out for a conversation.
              </p>

              <div className="space-y-8">
                <h3 className="font-bold text-xl text-white">SALES TEAM INQUIRIES:</h3>
                
                {offices.map((office, index) => (
                  <motion.div 
                    key={office.region}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538]/10 to-[#C9A227]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative bg-gradient-to-br from-[#0a1628] to-[#0f1e2e] border-l-2 border-[#8B1538] pl-6 py-4 rounded-r-2xl hover:border-[#C9A227] transition-colors">
                      <h4 className="font-bold text-white text-lg">{office.region}: {office.contact}</h4>
                      <p className="text-sm text-white/50 mb-3">{office.title}</p>
                      
                      <div className="space-y-2">
                        <a 
                          href={`mailto:${office.email}`}
                          className="flex items-center gap-2 text-white/70 hover:text-[#C9A227] transition-colors group"
                        >
                          <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          {office.email}
                        </a>
                        {office.phones.map((phone) => (
                          <a 
                            key={phone}
                            href={`tel:${phone.replace(/\s/g, '')}`}
                            className="flex items-center gap-2 text-white/70 hover:text-[#C9A227] transition-colors group"
                          >
                            <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            {phone}
                          </a>
                        ))}
                        <div className="flex items-start gap-2 text-white/70">
                          <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span className="text-sm">{office.address}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-10"
              >
                <p className="text-white/60 mb-4">Drop us a line anytime!</p>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, href: 'https://www.facebook.com/orchestramediaagency/', label: 'Facebook' },
                    { icon: Youtube, href: 'https://www.youtube.com/@orchestramedia', label: 'YouTube' },
                    { icon: Instagram, href: 'https://www.instagram.com/orchestra_media/', label: 'Instagram' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/company/orchestramedia/', label: 'LinkedIn' }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0a1628] to-[#0f1e2e] border border-white/10 flex items-center justify-center hover:border-[#8B1538] hover:bg-gradient-to-br hover:from-[#8B1538] hover:to-[#6d1029] transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538]/20 to-[#C9A227]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-gradient-to-br from-[#0f1e2e] to-[#0a1628] rounded-3xl p-8 lg:p-10 border border-white/10 hover:border-[#8B1538]/50 transition-all duration-500">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Let us help you unlock new markets
                  </h3>
                  <p className="text-white/60 mb-8">Fill out the form below.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <Input
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-[#0a1628] border-white/20 text-white placeholder:text-white/40 h-12 rounded-xl focus:border-[#8B1538] transition-colors"
                      />
                      <Input
                        placeholder="Company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-[#0a1628] border-white/20 text-white placeholder:text-white/40 h-12 rounded-xl focus:border-[#8B1538] transition-colors"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <Input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-[#0a1628] border-white/20 text-white placeholder:text-white/40 h-12 rounded-xl focus:border-[#8B1538] transition-colors"
                      />
                      <Input
                        type="tel"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-[#0a1628] border-white/20 text-white placeholder:text-white/40 h-12 rounded-xl focus:border-[#8B1538] transition-colors"
                      />
                    </div>

                    <Select 
                      value={formData.service} 
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                    >
                      <SelectTrigger className="bg-[#0a1628] border-white/20 text-white h-12 rounded-xl focus:border-[#8B1538] transition-colors">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0a1628] border-white/20">
                        {services.map((service) => (
                          <SelectItem key={service} value={service} className="text-white hover:bg-[#8B1538]/20">
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Textarea
                      placeholder="Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-[#0a1628] border-white/20 text-white placeholder:text-white/40 rounded-xl min-h-[120px] focus:border-[#8B1538] transition-colors"
                    />

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-[#8B1538] to-[#6d1029] hover:from-[#6d1029] hover:to-[#8B1538] text-white h-12 rounded-xl text-lg font-semibold shadow-2xl shadow-[#8B1538]/30 group"
                      >
                        {loading ? (
                          'Sending...'
                        ) : (
                          <>
                            Submit
                            <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}