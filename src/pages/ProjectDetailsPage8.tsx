import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import construction from './projects/construction.png';
import {
  Building2,
  MapPin,
  MessageSquare,
  Smartphone,
  ArrowRight,
  Check,
  Users,
  TrendingUp,
  Zap,
  Award,
  Home,
  Hammer,
} from 'lucide-react';

const ProjectDetailsPage8 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div ref={containerRef} className="w-full text-white overflow-hidden">
      {/* ANIMATED BACKGROUND */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-yellow-900 via-amber-900 to-orange-900"></div>

      {/* CONTENT */}
      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-lg border border-white/20">
              <Building2 className="w-10 h-10 text-yellow-300" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300 bg-clip-text text-transparent">
              Muthu Construction Website
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Professional Construction Services & Project Showcase Website
            </p>

            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8">
              A static, fast-loading construction business website built for a freelance client, showcasing services, completed projects, and company information with easy contact options.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-yellow-300 hover:border-yellow-500/50 transition-colors"
            >
              <span>Scroll to explore</span>
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </section>

        {/* OVERVIEW SECTION */}
        <section className="py-20 px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
                <span className="text-yellow-300 font-semibold">Project Overview</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Muthu Construction Website</h2>

              <p className="text-lg text-white/80 leading-relaxed mb-6">
                The Muthu Construction Website is a static professional business website developed and hosted as a freelance project. It serves as an online presence for Muthu Construction, helping them showcase construction services and completed projects to potential customers.
              </p>

              <p className="text-lg text-white/80 leading-relaxed">
                The website is designed to build trust, credibility, and online presence for the construction business. By using a static website approach, the project delivers high performance, zero server costs, and easy maintenance while providing a professional digital platform for the construction company.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* PROJECT OBJECTIVES */}
        <section className="py-20 px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-amber-300"></div>
                <span className="text-amber-300 font-semibold">Project Goals</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Key Objectives</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Building2 className="w-6 h-6" />,
                    title: 'Professional Presence',
                    desc: 'Create a professional online presence for Muthu Construction'
                  },
                  {
                    icon: <Award className="w-6 h-6" />,
                    title: 'Showcase Services',
                    desc: 'Display construction services offered by the company'
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" />,
                    title: 'Build Trust',
                    desc: 'Improve customer trust through clear presentation of work'
                  },
                  {
                    icon: <MessageSquare className="w-6 h-6" />,
                    title: 'Easy Contact',
                    desc: 'Make it easy for customers to contact the company'
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: 'Performance',
                    desc: 'Provide a fast and mobile-friendly website experience'
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: 'Local Reach',
                    desc: 'Reach residential, commercial, and local clients'
                  },
                ].map((objective, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-amber-500/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors">
                      <span className="text-amber-300">{objective.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{objective.title}</h3>
                    <p className="text-white/70">{objective.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* KEY FEATURES */}
        <section className="py-20 px-4" arcimage="construction-features-section">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-orange-300"></div>
                <span className="text-orange-300 font-semibold" arcimage="construction-features-title">Key Features</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-12">Website Features & Capabilities</h2>

              <div className="space-y-6">
                {[
                  {
                    title: 'Static Business Website',
                    items: ['Lightweight and fast-loading pages', 'Easy to maintain and update', 'No backend or database required']
                  },
                  {
                    title: 'Services Showcase',
                    items: ['Displays construction services offered', 'Covers residential, commercial, and renovation works', 'Professional presentation of expertise']
                  },
                  {
                    title: 'Completed Projects Section',
                    items: ['Shows images and details of completed projects', 'Helps build trust and credibility', 'Demonstrates quality of work and expertise']
                  },
                  {
                    title: 'Contact & Inquiry Section',
                    items: ['Easy contact options (phone / WhatsApp)', 'Simple inquiry section for customer communication', 'Multiple contact methods for customer convenience']
                  },
                  {
                    title: 'Company Information',
                    items: ['About company section with history', 'Team and expertise highlights', 'Company mission and values display']
                  },
                  {
                    title: 'Responsive Design',
                    items: ['Optimized for mobile, tablet, and desktop', 'Clean and professional layout', 'User-friendly navigation for all devices']
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-orange-500/50 transition-all group"
                  >
                    <h3 className="text-2xl font-bold mb-4 text-orange-300">{feature.title}</h3>
                    <ul className="space-y-3">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                          <span className="text-white/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* WEBSITE STRUCTURE */}
        <section className="py-20 px-4" arcimage="construction-structure-section">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-amber-300"></div>
                <span className="text-amber-300 font-semibold" arcimage="construction-structure-title">Website Structure</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Site Architecture & Pages</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Home Page', desc: 'Landing page with service highlights and call-to-action' },
                  { title: 'About Company', desc: 'Company information, history, and team details' },
                  { title: 'Services', desc: 'Comprehensive list of construction services' },
                  { title: 'Completed Projects', desc: 'Showcase of finished projects with images' },
                  { title: 'Contact Section', desc: 'Multiple contact methods and inquiry form' },
                  { title: 'Gallery', desc: 'Visual gallery of construction work samples' },
                ].map((page, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-amber-500/50 transition-all"
                  >
                    <h3 className="text-xl font-bold mb-3 text-amber-300">{page.title}</h3>
                    <p className="text-white/70">{page.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>
        <section className="py-20 px-4" arcimage="tech-stack">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
                        <h3 className="text-lg font-bold text-white mb-4">🎨 User Interface </h3>
                        <img
                    src={construction}
                    alt=""
                    className="w-full h-auto object-contain"
                    arcimage="hardware-image"
                  />
                     </motion.div>
                     </section>

        {/* TECHNOLOGIES USED */}
        <section className="py-20 px-4" arcimage="construction-tech-stack">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
                <span className="text-yellow-300 font-semibold" arcimage="construction-tech-title">Technology Stack</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Technologies & Tools Used</h2>

              <div className="grid md:grid-cols-3 gap-4">
                {['HTML', 'CSS', 'JavaScript'].map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-center hover:border-yellow-500/50 transition-colors"
                  >
                    <p className="font-semibold text-lg">{tech}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* SERVICES SHOWCASE */}
        <section className="py-20 px-4" arcimage="construction-services-section">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-orange-300"></div>
                <span className="text-orange-300 font-semibold" arcimage="construction-services-title">Services Offered</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Construction Services</h2>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: <Home className="w-8 h-8" />, title: 'Residential Construction', desc: 'Home building, renovation, and extension projects' },
                  { icon: <Building2 className="w-8 h-8" />, title: 'Commercial Construction', desc: 'Office buildings, shops, and commercial complexes' },
                  { icon: <Hammer className="w-8 h-8" />, title: 'Renovation Works', desc: 'Remodeling, repairs, and restoration services' },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-center hover:border-orange-500/50 transition-all group"
                  >
                    <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-orange-500/30 transition-colors">
                      <span className="text-orange-300">{service.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/70">{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* COMPLETED PROJECTS */}
        <section className="py-20 px-4" arcimage="construction-projects-section">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
                <span className="text-yellow-300 font-semibold" arcimage="construction-projects-title">Portfolio</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Completed Projects</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  variants={itemVariants}
                  className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-yellow-500/50 transition-all"
                >
                  <h3 className="text-2xl font-bold mb-4 text-yellow-300">Project Showcase</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">High-quality project photography and details</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Project descriptions and specifications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Before and after project comparisons</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Client testimonials and project results</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-orange-500/50 transition-all"
                >
                  <h3 className="text-2xl font-bold mb-4 text-orange-300">Trust Building</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Demonstrates quality of work and expertise</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Builds credibility with potential customers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Shows range of experience and capabilities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Encourages customer confidence and inquiries</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* CONTACT & COMMUNICATION */}
        <section className="py-20 px-4" arcimage="construction-contact-section">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-amber-300"></div>
                <span className="text-amber-300 font-semibold" arcimage="construction-contact-title">Customer Engagement</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Contact & Inquiry Support</h2>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: <MessageSquare className="w-8 h-8" />, title: 'WhatsApp', desc: 'Direct WhatsApp messaging for inquiries' },
                  { icon: <Smartphone className="w-8 h-8" />, title: 'Phone Contact', desc: 'Click-to-call phone option for direct reach' },
                  { icon: <Award className="w-8 h-8" />, title: 'Inquiry Form', desc: 'Simple form for project quote requests' },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-center hover:border-amber-500/50 transition-all group"
                  >
                    <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-amber-500/30 transition-colors">
                      <span className="text-amber-300">{contact.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                    <p className="text-white/70">{contact.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* RESULTS & BENEFITS */}
        <section className="py-20 px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
                <span className="text-yellow-300 font-semibold">Results & Impact</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Results & Benefits</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Professional Image', desc: 'Improved professional image of the business' },
                  { title: 'Customer Inquiries', desc: 'Increased customer inquiries and leads' },
                  { title: 'Service Discovery', desc: 'Easy service discovery for potential clients' },
                  { title: 'Digital Presence', desc: 'Strong digital presence for local business' },
                  { title: 'Cost Effective', desc: 'Zero server costs with static hosting solution' },
                  { title: 'Easy Maintenance', desc: 'Simple to maintain and update website content' },
                ].map((result, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-yellow-500/50 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <Check className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">{result.title}</h3>
                        <p className="text-white/70">{result.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* RESPONSIVE & PERFORMANCE */}
        <section className="py-20 px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-orange-300"></div>
                <span className="text-orange-300 font-semibold">Technical Excellence</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Responsive Design & Performance</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants} className="space-y-4">
                  <h3 className="text-2xl font-bold text-orange-300 mb-4">Mobile Optimization</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Works smoothly on mobile, tablet, and desktop</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Clean and professional layout for all devices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Touch-friendly navigation and interactions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Fast loading on all connection speeds</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-4">
                  <h3 className="text-2xl font-bold text-amber-300 mb-4">Performance Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Lightweight static HTML architecture</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Optimized images and CSS for fast loading</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">SEO-optimized for search engines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Excellent Core Web Vitals scores</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* HOSTING & DEPLOYMENT */}
        <section className="py-20 px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-amber-300"></div>
                <span className="text-amber-300 font-semibold">Deployment</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Hosting & Deployment</h2>

              <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: 'Online Hosting', desc: 'Website hosted online for public access' },
                    { title: 'Performance', desc: 'Optimized for fast loading and performance' },
                    { title: 'SEO Ready', desc: 'SEO-optimized for search engine visibility' },
                  ].map((deploy, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="text-center"
                    >
                      <h3 className="text-lg font-bold mb-2 text-amber-300">{deploy.title}</h3>
                      <p className="text-white/70">{deploy.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* FREELANCE HIGHLIGHT */}
        <section className="py-20 px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
                <span className="text-yellow-300 font-semibold">Resume Highlight</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Freelance Project Highlight</h2>

              <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20">
                <p className="text-lg text-white/80 leading-relaxed italic">
                  "Muthu Construction Website – Designed and hosted a static professional website for a construction company to showcase services and completed projects, improving online presence and customer engagement. Delivered a fast-loading, mobile-friendly platform that increased customer inquiries and established a strong digital presence for the construction business."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* CONCLUSION */}
        <section className="py-20 px-4 pb-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-orange-300"></div>
                <span className="text-orange-300 font-semibold">Conclusion</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Project Conclusion</h2>

              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  The Muthu Construction Website successfully provides a professional and reliable online platform for showcasing construction services and completed works. The static website approach ensures fast performance, easy maintenance, and better customer reach.
                </p>

                <p>
                  The website serves as a digital showroom for the construction business, enabling customers to easily discover services, view completed projects, and contact the company through multiple channels. The combination of responsive design, fast loading times, and comprehensive project gallery builds trust and credibility with potential clients.
                </p>

                <p>
                  With zero server costs, easy maintenance, and comprehensive service showcase capabilities, the Muthu Construction Website demonstrates how a well-designed static website can effectively support business growth and customer engagement in the construction industry.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetailsPage8;
