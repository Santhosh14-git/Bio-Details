import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import travels from './projects/sakthi travels.png';
import {
  Globe,
  MapPin,
  MessageSquare,
  Smartphone,
  ArrowRight,
  Check,
  Users,
  TrendingUp,
  Zap,
  Award,
} from 'lucide-react';

const ProjectDetailsPage7 = () => {
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
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-rose-900 via-pink-900 to-fuchsia-900"></div>

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
              <Globe className="w-10 h-10 text-rose-400" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-300 via-pink-300 to-fuchsia-300 bg-clip-text text-transparent">
              Sakthi Travels Website
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Travel Blog & Services Website with Google Maps Integration
            </p>

            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8">
              A static, fast-loading travel website built for a freelance client, showcasing travel services, destinations, and travel blog content with integrated Google Maps for improved customer reach.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-rose-300 hover:border-rose-500/50 transition-colors"
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
                <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                <span className="text-rose-300 font-semibold">Project Overview</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Sakthi Travels Website</h2>

              <p className="text-lg text-white/80 leading-relaxed mb-6">
                The Sakthi Travels Website is a static travel blog and service showcase developed as a freelance project. It serves as an online presence for Sakthi Travels, helping them present their travel services to potential customers and facilitating easy bookings and inquiries.
              </p>

              <p className="text-lg text-white/80 leading-relaxed">
                The website is hosted online with integrated Google Maps to help customers locate the travel office and plan visits easily. By using a static website approach, the project delivers high performance, zero server costs, and easy maintenance while providing a professional digital presence for the travel business.
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
                <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                <span className="text-pink-300 font-semibold">Project Goals</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Key Objectives</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Globe className="w-6 h-6" />,
                    title: 'Create Online Presence',
                    desc: 'Establish Sakthi Travels on the web with a professional website presence'
                  },
                  {
                    icon: <Award className="w-6 h-6" />,
                    title: 'Showcase Services',
                    desc: 'Display travel services, destinations, and packages in an attractive way'
                  },
                  {
                    icon: <MessageSquare className="w-6 h-6" />,
                    title: 'Customer Engagement',
                    desc: 'Enable easy contact and booking support through multiple channels'
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" />,
                    title: 'Improve Visibility',
                    desc: 'Enhance local search visibility using Google Maps integration'
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: 'Performance Focus',
                    desc: 'Deliver a fast, lightweight, and mobile-friendly experience'
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: 'Target Users',
                    desc: 'Reach tourists, travelers, families, and local customers'
                  },
                ].map((objective, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-pink-500/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mb-4 group-hover:bg-pink-500/30 transition-colors">
                      <span className="text-pink-300">{objective.icon}</span>
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
        <section className="py-20 px-4" arcimage="travel-features-section">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-fuchsia-400"></div>
                <span className="text-fuchsia-300 font-semibold" arcimage="features-title">Key Features</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-12">Website Features & Capabilities</h2>

              <div className="space-y-6">
                {[
                  {
                    title: 'Static Website Architecture',
                    items: ['Fast loading and lightweight design', 'No server-side dependency', 'Easy to maintain and update']
                  },
                  {
                    title: 'Travel Service Showcase',
                    items: ['Displays available travel services', 'Highlights destinations and travel packages', 'Uses images and engaging content to attract customers']
                  },
                  {
                    title: 'Travel Blog Section',
                    items: ['Shares travel-related content and experiences', 'Builds trust and interest among visitors', 'SEO-optimized blog posts for better search visibility']
                  },
                  {
                    title: 'Contact & Booking Support',
                    items: ['Click-to-call contact option', 'WhatsApp and phone number integration', 'Easy inquiry form for trip booking']
                  },
                  {
                    title: 'Google Maps Integration',
                    items: ['Embedded Google Map showing office location', 'Helps customers navigate easily', 'Improves local search visibility']
                  },
                  {
                    title: 'Responsive Design',
                    items: ['Works smoothly on mobile, tablet, and desktop', 'User-friendly layout for all screen sizes', 'Optimized touch interactions for mobile users']
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-fuchsia-500/50 transition-all group"
                  >
                    <h3 className="text-2xl font-bold mb-4 text-fuchsia-300">{feature.title}</h3>
                    <ul className="space-y-3">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-fuchsia-400 flex-shrink-0 mt-1" />
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
        <section className="py-20 px-4" arcimage="structure-section">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                <span className="text-pink-300 font-semibold" arcimage="structure-title">Website Structure</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Site Architecture & Pages</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Home Page', desc: 'Landing page with service highlights and call-to-action' },
                  { title: 'About Sakthi Travels', desc: 'Company information and history' },
                  { title: 'Travel Services', desc: 'Comprehensive list of available travel services' },
                  { title: 'Travel Blog', desc: 'Collection of travel articles and experiences' },
                  { title: 'Contact Section', desc: 'Multiple contact methods and inquiry form' },
                  { title: 'Google Map Location', desc: 'Embedded map showing office location' },
                ].map((page, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-pink-500/50 transition-all"
                  >
                    <h3 className="text-xl font-bold mb-3 text-pink-300">{page.title}</h3>
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
                        <h3 className="text-lg font-bold text-white mb-4">🎨 User Interface</h3>
                        <img
                    src={travels}
                    alt=""
                    className="w-full h-auto object-contain"
                    arcimage="hardware-image"
                  />
                     </motion.div>
                     </section>
        {/* TECHNOLOGIES USED */}
        <section className="py-20 px-4" arcimage="tech-stack">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
      
                          
                        
                      
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                <span className="text-rose-300 font-semibold" arcimage="tech-title">Technology Stack</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Technologies & Tools Used</h2>

              <div className="grid md:grid-cols-4 gap-4">
                {['HTML', 'CSS', 'JavaScript', 'Google Maps Embed'].map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-center hover:border-rose-500/50 transition-colors"
                  >
                    <p className="font-semibold text-lg">{tech}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* GOOGLE MAPS INTEGRATION */}
        <section className="py-20 px-4" arcimage="maps-section">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-fuchsia-400"></div>
                <span className="text-fuchsia-300 font-semibold" arcimage="maps-title">Map Integration</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Google Maps Integration</h2>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div variants={itemVariants} className="space-y-6">
                  {[
                    { icon: <MapPin className="w-6 h-6" />, title: 'Location Visibility', desc: 'Embedded Google Map showing exact office location' },
                    { icon: <Users className="w-6 h-6" />, title: 'Customer Navigation', desc: 'Helps customers easily find and navigate to the office' },
                    { icon: <TrendingUp className="w-6 h-6" />, title: 'SEO Benefits', desc: 'Improves local search visibility and reach' },
                    { icon: <Smartphone className="w-6 h-6" />, title: 'Mobile Friendly', desc: 'Mobile-optimized map for on-the-go directions' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-fuchsia-500/50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-fuchsia-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-fuchsia-400">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{item.title}</h4>
                        <p className="text-white/70 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 p-8 text-center"
                >
                  <div className="w-full h-80 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-fuchsia-400 mx-auto mb-4" />
                      <p className="text-white/70">Google Map Embedded Here</p>
                      <p className="text-sm text-white/50 mt-2">Office Location Showcase</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* TRAVEL BLOG & SERVICES */}
        <section className="py-20 px-4" arcimage="blog-section">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                <span className="text-pink-300 font-semibold" arcimage="blog-title">Content Strategy</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Travel Blog & Service Showcase</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  variants={itemVariants}
                  className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-pink-500/50 transition-all"
                >
                  <h3 className="text-2xl font-bold mb-4 text-pink-300">Travel Blog</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Shares travel-related content and experiences</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Builds trust and interest among visitors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">SEO-optimized for better search visibility</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Engages potential customers with valuable insights</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-rose-500/50 transition-all"
                >
                  <h3 className="text-2xl font-bold mb-4 text-rose-300">Service Showcase</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Displays available travel services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Highlights destinations and travel packages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Uses attractive images and engaging content</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Encourages customer inquiries and bookings</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* CONTACT & BOOKING */}
        <section className="py-20 px-4" arcimage="contact-section">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-fuchsia-400"></div>
                <span className="text-fuchsia-300 font-semibold" arcimage="contact-title">Customer Engagement</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Contact & Booking Support</h2>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: <MessageSquare className="w-8 h-8" />, title: 'WhatsApp Integration', desc: 'Direct WhatsApp messaging for quick inquiries' },
                  { icon: <Smartphone className="w-8 h-8" />, title: 'Click-to-Call', desc: 'One-tap phone calling option for immediate contact' },
                  { icon: <Globe className="w-8 h-8" />, title: 'Inquiry Form', desc: 'Easy-to-use form for trip booking requests' },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-center hover:border-fuchsia-500/50 transition-all group"
                  >
                    <div className="w-16 h-16 rounded-full bg-fuchsia-500/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-fuchsia-500/30 transition-colors">
                      <span className="text-fuchsia-400">{contact.icon}</span>
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
                <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                <span className="text-rose-300 font-semibold">Results & Impact</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Results & Benefits</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Online Visibility', desc: 'Increased visibility for Sakthi Travels in search results' },
                  { title: 'Customer Reach', desc: 'Easy customer reach through multiple contact channels' },
                  { title: 'Professional Presence', desc: 'Professional digital presence for a local travel business' },
                  { title: 'Customer Trust', desc: 'Improved customer trust through comprehensive service information' },
                  { title: 'Low Maintenance Cost', desc: 'Zero server cost due to static hosting architecture' },
                  { title: 'Fast Performance', desc: 'Fast loading times and excellent performance metrics' },
                ].map((result, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-rose-500/50 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <Check className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-rose-300 transition-colors">{result.title}</h3>
                        <p className="text-white/70">{result.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* RESPONSIVE DESIGN */}
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
                <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                <span className="text-pink-300 font-semibold">Design Excellence</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Responsive Design & Performance</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants} className="space-y-4">
                  <h3 className="text-2xl font-bold text-pink-300 mb-4">Mobile Optimization</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Works smoothly on mobile, tablet, and desktop</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">User-friendly layout for all screen sizes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Optimized touch interactions for mobile users</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Fast loading on cellular connections</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-4">
                  <h3 className="text-2xl font-bold text-fuchsia-300 mb-4">Performance Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-fuchsia-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Lightweight static HTML architecture</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-fuchsia-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Optimized images and CSS for fast loading</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-fuchsia-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">SEO-optimized for search engines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-fuchsia-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Excellent Core Web Vitals performance</span>
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
                <div className="w-2 h-2 rounded-full bg-fuchsia-400"></div>
                <span className="text-fuchsia-300 font-semibold">Deployment</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Hosting & Deployment</h2>

              <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: 'Online Hosting', desc: 'Website hosted online for public access and availability' },
                    { title: 'Google Maps', desc: 'Integrated Google Maps for location visibility' },
                    { title: 'SEO Optimized', desc: 'Optimized for performance and search engine ranking' },
                  ].map((deploy, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="text-center"
                    >
                      <h3 className="text-lg font-bold mb-2 text-fuchsia-300">{deploy.title}</h3>
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
                <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                <span className="text-rose-300 font-semibold">Resume Highlight</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Freelance Project Highlight</h2>

              <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20">
                <p className="text-lg text-white/80 leading-relaxed italic">
                  "Sakthi Travels Website – Designed and hosted a static travel blog and service website for a freelance client using HTML, CSS, and JavaScript, with Google Maps integration to improve customer reach and booking inquiries. Delivered a fast-loading, mobile-friendly platform that increased online visibility and customer engagement for the local travel business."
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
                <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                <span className="text-pink-300 font-semibold">Conclusion</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Project Conclusion</h2>

              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  The Sakthi Travels Website successfully provides a simple, fast, and effective online platform for showcasing travel services. By using a static website approach with Google Maps integration, the project delivers high performance, easy maintenance, and better customer accessibility.
                </p>

                <p>
                  The website serves as a professional digital presence for the travel business, enabling customers to easily discover services, read travel blog content, and contact the agency through multiple channels. The combination of responsive design, fast loading times, and integrated maps makes it an ideal solution for a local travel business looking to establish an online presence.
                </p>

                <p>
                  With zero server costs, SEO optimization, and comprehensive service showcase capabilities, the Sakthi Travels Website demonstrates how a well-designed static website can effectively support business growth and customer engagement in the travel industry.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetailsPage7;
