import React from 'react';
import { motion } from 'framer-motion';
import mat from './projects/matrimony flow.png';
import mat1 from './projects/mat.png';
import {
  Heart,
  Users,
  Search,
  Globe,
  CheckCircle,
  BarChart3,
  Zap,
  Shield,
  Smartphone,
} from 'lucide-react';

const ProjectDetailsPage12 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-red-900 via-rose-900 to-pink-900">
      {/* Navigation Spacing */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <motion.div
        className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-md">
            <Heart className="w-4 h-4 text-red-300" />
            <span className="text-sm font-medium text-red-100">Matrimonial Platform</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Vivaha Milan
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-rose-200 to-pink-200">
              Matrimony & Compatibility Web App
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-red-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            A responsive matrimonial web application blending cultural matchmaking with modern UI/UX,
            enabling users to find compatible life partners through intelligent profile matching and
            traditional compatibility checks.
          </p>

          <motion.button
            variants={itemVariants}
            className="px-8 py-3 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
          >
            View Live Project →
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Overview Section */}
      <motion.div
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="bg-white/10 border border-white/20 rounded-xl p-8 backdrop-blur-md"
          >
            <div className="flex items-start gap-4 mb-6">
              <Heart className="w-8 h-8 text-red-300 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Project Overview</h2>
                <p className="text-red-100 leading-relaxed mb-4">
                  Vivaha Milan is a responsive web application designed to help users find compatible life partners
                  and check marriage compatibility using traditional methods, such as horoscope-based or profile
                  matching. It blends cultural matchmaking needs with modern UI/UX, making the cultural concept of
                  Vivaha Milan (marriage match) accessible online.
                </p>
                <p className="text-red-100 leading-relaxed">
                  The app is hosted on Netlify, providing fast, secure, and globally accessible deployment. In many
                  cultures, especially in India, compatibility and alignment of partners—whether based on preferences or
                  traditional astrological rules—is an important step in arranged marriages.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Purpose Section */}
      <motion.div
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-8 text-center">
            Purpose & Objectives
          </motion.h2>
          <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Search, title: 'Smart Search', desc: 'Help users search and review profiles efficiently' },
              {
                icon: Users,
                title: 'Profile Management',
                desc: 'Register, log in, and create detailed profiles',
              },
              {
                icon: Heart,
                title: 'Compatibility Checks',
                desc: 'Provide intelligent compatibility checks and matching',
              },
              {
                icon: Globe,
                title: 'Global Reach',
                desc: 'Display potential matches with user-friendly filters',
              },
              {
                icon: CheckCircle,
                title: 'Member Details',
                desc: 'Present comprehensive information like education and profession',
              },
              {
                icon: Zap,
                title: 'Efficiency',
                desc: 'Reduce time, increase reach, and bring modern convenience',
              },
            ].map((purpose, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 border border-white/20 rounded-lg p-6 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
              >
                <purpose.icon className="w-8 h-8 text-red-300 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">{purpose.title}</h3>
                <p className="text-red-100 text-sm leading-relaxed">{purpose.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* User Roles Section */}
      <motion.div
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-8 text-center">
            👥 User Roles
          </motion.h2>
          <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-6">
            {[
              {
                role: 'Visitor',
                permissions: ['Browse landing page', 'View high-level service information', 'Register or log in'],
              },
              {
                role: 'Registered User',
                permissions: [
                  'Set up personal profile',
                  'Select preferences',
                  'View matches based on filters',
                  'Send interest or connect',
                ],
              },
            ].map((user, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 border border-white/20 rounded-lg p-6 backdrop-blur-md"
              >
                <h3 className="text-xl font-bold text-red-200 mb-4">{user.role}</h3>
                <ul className="space-y-3">
                  {user.permissions.map((perm, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-300 flex-shrink-0 mt-0.5" />
                      <span className="text-red-100">{perm}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Key Features Section */}
      <motion.div
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-8 text-center">
            🧠 Key Features
          </motion.h2>
          <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-4">
            {[
              'User Registration & Login',
              'Profile Creation & Management',
              'Search and Filter Potential Matches',
              'View Member Details (Education, Age, Profession)',
              'Responsive UI for Mobile & Desktop',
              'Hosted on Netlify for Global Access',
              'Optional: Saved Profiles',
              'Optional: Match Scoring Algorithm',
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm"
              >
                <CheckCircle className="w-5 h-5 text-red-300 flex-shrink-0 mt-0.5" />
                <span className="text-red-100">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* User Flow Section */}
      <motion.div
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-8 text-center">
            🔁 User Flow
          </motion.h2>
          <motion.div variants={containerVariants} className="space-y-4">
            {[
              'Visitor lands on homepage',
              'Visitor can register or log in',
              'Registered user fills in detailed profile',
              'User sets partner preferences and compatibility criteria',
              'System displays match list based on preferences',
              'User views selected profiles and details',
              'Optional: User sends connection request',
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 bg-white/10 border border-white/20 rounded-lg p-4 backdrop-blur-md"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/30 border border-red-400 flex items-center justify-center text-red-200 font-semibold">
                  {index + 1}
                </div>
                <p className="text-red-100 pt-1">{step}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
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
                    src={mat1}
                    alt=""
                    className="w-full h-auto object-contain"
                    arcimage="hardware-image"
                  />
                     </motion.div>
                     </section>

      {/* System Architecture Section */}
      <motion.div
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-8 text-center">
            🏗 System Architecture
          </motion.h2>
          <motion.div variants={itemVariants} className="bg-white/10 border border-white/20 rounded-xl p-8 backdrop-blur-md mb-8">
            <div className="space-y-6">
             <img
        src={mat}
        alt=""
        className="w-full h-auto object-contain"
        arcimage="hardware-image"
      />

            </div>
          </motion.div>
          <motion.p variants={itemVariants} className="text-red-100 leading-relaxed">
            Since the project is frontend-focused and hosted on Netlify, it uses a modern architecture with React
            handling dynamic UI. The frontend communicates with optional backend services for authentication, user data,
            and matchmaking logic. Netlify's CDN ensures fast global delivery, while serverless functions can handle
            backend logic without managing servers.
          </motion.p>
        </div>
      </motion.div>

      {/* Technologies Section */}
      <motion.div
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-8 text-center">
            🛠 Tools & Technologies
          </motion.h2>
          <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-6">
            {[
              { label: 'Hosting', value: 'Netlify CDN' },
              { label: 'Frontend', value: 'React, HTML, CSS, JavaScript' },
              { label: 'Build Tool', value: 'Vite or Create React App' },
              { label: 'Deployment', value: 'Git + Netlify CI/CD' },
              { label: 'Optional Backend', value: 'Node.js, PHP, .NET, Firebase' },
              { label: 'Optional Database', value: 'MySQL, MongoDB, Firebase' },
            ].map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 border border-white/20 rounded-lg p-6 backdrop-blur-md"
              >
                <p className="text-red-300 font-semibold mb-2">{tech.label}</p>
                <p className="text-red-100">{tech.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* UI/UX Highlights Section */}
      <motion.div
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-8 text-center">
            🎨 UI / UX Highlights
          </motion.h2>
          <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Clean Layout', desc: 'Modern and intuitive design for matrimonial browsing' },
              { title: 'Responsive Design', desc: 'Seamless experience across mobile and desktop' },
              { title: 'Intuitive Navigation', desc: 'Easy-to-use menus and page flows' },
              { title: 'Profile Cards', desc: 'Photo, basic info, and preferences at a glance' },
              { title: 'User-Friendly Forms', desc: 'Simple registration and profile setup' },
              { title: 'Visual Hierarchy', desc: 'Clear prioritization of important information' },
            ].map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 border border-white/20 rounded-lg p-6 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-red-200 mb-2">{highlight.title}</h3>
                <p className="text-red-100 text-sm leading-relaxed">{highlight.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Testing & Validation Section */}
      <motion.div
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-8 text-center">
            🧪 Testing & Validation
          </motion.h2>
          <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-4">
            {[
              'Responsive layout testing on different screen sizes',
              'Form validation for inputs (name, email, age, religion)',
              'Navigation testing across pages and flows',
              'Performance optimization via Netlify CDN',
              'Browser compatibility testing',
              'Input sanitization for backend submissions',
            ].map((test, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm"
              >
                <CheckCircle className="w-5 h-5 text-red-300 flex-shrink-0 mt-0.5" />
                <span className="text-red-100 text-sm">{test}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Deployment & Performance Section */}
      <motion.div
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-8 text-center">
            📊 Deployment & Performance
          </motion.h2>
          <motion.div variants={containerVariants} className="space-y-6">
            {[
              {
                icon: Globe,
                title: 'Global Deployment',
                desc: 'Deployed via Netlify with automatic build and deploy on Git commits',
              },
              {
                icon: Zap,
                title: 'Fast Performance',
                desc: 'Global CDN ensures fast load times from anywhere in the world',
              },
              {
                icon: Shield,
                title: 'Security',
                desc: 'Free SSL certificate protects user data in transit automatically',
              },
              {
                icon: Smartphone,
                title: 'Accessibility',
                desc: 'Publicly accessible via any device with responsive mobile design',
              },
            ].map((perf, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 border border-white/20 rounded-lg p-6 backdrop-blur-md flex gap-4"
              >
                <perf.icon className="w-8 h-8 text-red-300 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-red-200 mb-1">{perf.title}</h3>
                  <p className="text-red-100 text-sm leading-relaxed">{perf.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Future Enhancements Section */}
      <motion.div
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-8 text-center">
            💼 Future Enhancements
          </motion.h2>
          <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-4">
            {[
              'Add backend API with database for real matchmaking',
              'Secure login & authentication with encryption',
              'Chat or messaging between matches',
              'Profile photo uploads with image validation',
              'Advanced compatibility algorithm using AI',
              'Advanced filters (age, location, religion, education)',
            ].map((enhancement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm"
              >
                <CheckCircle className="w-5 h-5 text-red-300 flex-shrink-0 mt-0.5" />
                <span className="text-red-100 text-sm">{enhancement}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Results Section */}
      <motion.div
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-8 text-center">
            🏆 Results & Impact
          </motion.h2>
          <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-6">
            {[
              { metric: 'User-Centric Design', value: 'Modern UI making matchmaking convenient' },
              { metric: 'Global Reach', value: 'Fast deployment via Netlify CDN worldwide' },
              { metric: 'Cultural Integration', value: 'Blends traditional values with modern tech' },
              { metric: 'Security & Trust', value: 'SSL-protected data and secure transactions' },
              { metric: 'Responsive Experience', value: 'Works seamlessly on all devices' },
              { metric: 'Scalability', value: 'Ready for backend integration and growth' },
            ].map((result, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 border border-white/20 rounded-lg p-6 backdrop-blur-md"
              >
                <p className="text-red-300 font-semibold mb-2">{result.metric}</p>
                <p className="text-red-100 text-sm leading-relaxed">{result.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Conclusion Section */}
      <motion.div
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="bg-white/10 border border-white/20 rounded-xl p-8 backdrop-blur-md text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">🏁 Conclusion</h2>
            <p className="text-red-100 leading-relaxed text-lg">
              Vivaha Milan successfully brings traditional matrimonial match concepts online with a modern UI and fast
              deployment. By hosting on Netlify and employing responsive design, it offers a user-friendly experience
              for finding potential life partners. The platform bridges cultural values with contemporary technology,
              making matchmaking more accessible and efficient for users worldwide while maintaining security and
              performance standards.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Spacing */}
      <div className="h-16"></div>
    </div>
  );
};

export default ProjectDetailsPage12;
