import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import email1 from './projects/outpass flow.png';
import email from './projects/email.png';

import {
  BarChart3,
  Users,
  MessageSquare,
  Smartphone,
  ArrowRight,
  Check,
  Lock,
  TrendingUp,
  Zap,
  Award,
  Database,
  ShieldCheck,
  Layers,
  Mail,
  Eye,
  Send,
  RotateCcw,
} from 'lucide-react';


const ProjectDetailsPage10 = () => {
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
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-green-900 via-emerald-900 to-lime-900"></div>

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
              <Mail className="w-10 h-10 text-green-300" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-300 via-emerald-300 to-lime-300 bg-clip-text text-transparent">
              Mail Send Module
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Automated Web-Based Email Sending System
            </p>

            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8">
              A comprehensive email sending platform enabling users to compose, send, and track emails to multiple recipients with centralized logging and delivery status monitoring.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-green-300 hover:border-green-500/50 transition-colors"
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
                <div className="w-2 h-2 rounded-full bg-green-300"></div>
                <span className="text-green-300 font-semibold">Project Overview</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Mail Send Module</h2>

              <p className="text-lg text-white/80 leading-relaxed mb-6">
                The Mail Send Module is a web-based application that allows users to compose, send, and track emails directly from a browser. It eliminates the need for external email clients and provides an integrated solution for sending emails to multiple recipients efficiently and reliably.
              </p>

              <p className="text-lg text-white/80 leading-relaxed">
                This system is designed for organizations, schools, or businesses to send notifications, newsletters, or alerts directly to staff, students, or customers. Built with PHP backend, MySQL database, and HTML/CSS/JavaScript frontend, it provides a simple yet powerful email management solution with centralized logging and delivery tracking.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* PROBLEM STATEMENT */}
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
                <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
                <span className="text-emerald-300 font-semibold">Problem Statement</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Email Communication Challenges</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <MessageSquare className="w-6 h-6" />,
                    title: 'Manual Email Sending',
                    desc: 'Time-consuming process of sending emails one by one'
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: 'Recipient Errors',
                    desc: 'Errors while typing or managing recipient addresses'
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: 'Bulk Sending Issues',
                    desc: 'Difficulty sending emails to multiple users at once'
                  },
                  {
                    icon: <Eye className="w-6 h-6" />,
                    title: 'No Tracking',
                    desc: 'Lack of tracking for sent emails and delivery status'
                  },
                  {
                    icon: <Lock className="w-6 h-6" />,
                    title: 'Security Concerns',
                    desc: 'Email credentials exposed through external clients'
                  },
                  {
                    icon: <Database className="w-6 h-6" />,
                    title: 'No Centralization',
                    desc: 'Email records scattered across multiple systems'
                  },
                ].map((challenge, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-emerald-500/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                      <span className="text-emerald-300">{challenge.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
                    <p className="text-white/70">{challenge.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* PROPOSED SOLUTION */}
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
                <div className="w-2 h-2 rounded-full bg-green-300"></div>
                <span className="text-green-300 font-semibold">Solution</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Integrated Mail Send Solution</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Simple Web Interface', desc: 'Easy email composer with clean UI' },
                  { title: 'Multi-Recipient Support', desc: 'Send to single or multiple recipients' },
                  { title: 'Email Tracking', desc: 'Track email status (sent/failed/pending)' },
                  { title: 'Centralized Logs', desc: 'All emails stored in MySQL database' },
                  { title: 'Retry Failed Emails', desc: 'Resend failed emails with one click' },
                  { title: 'Secure Authentication', desc: 'Session-based login and access control' },
                ].map((solution, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-green-500/50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                        <p className="text-white/70">{solution.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* USER ROLES */}
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
                <div className="w-2 h-2 rounded-full bg-lime-300"></div>
                <span className="text-lime-300 font-semibold">User Roles</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">User Access Roles</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  variants={itemVariants}
                  className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-lime-500/50 transition-all"
                >
                  <h3 className="text-2xl font-bold mb-4 text-lime-300">Admin / Staff</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-lime-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Secure system login</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-lime-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Compose emails with simple editor</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-lime-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Select single or multiple recipients</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-lime-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Send emails instantly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-lime-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">View history and delivery status</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-green-500/50 transition-all"
                >
                  <h3 className="text-2xl font-bold mb-4 text-green-300">Recipients</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Receive emails in their inbox</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">No direct system login required</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Email address as identifier</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">External email client support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Standard email compatibility</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </section>
                <section className="py-20 px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
                        <h3 className="text-lg font-bold text-white mb-4">🎨 User Interface </h3>
                        <img
                    src={email}
                    alt=""
                    className="w-full h-auto object-contain"
                  />
                     </motion.div>
                     </section>

        {/* SYSTEM MODULES */}
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
                <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
                <span className="text-emerald-300 font-semibold">System Modules</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Core System Modules</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Authentication Module',
                    items: ['Secure admin login', 'Session-based authentication', 'Role-based access control']
                  },
                  {
                    title: 'Email Composer Module',
                    items: ['Recipient input fields', 'Subject and body editors', 'Multi-recipient support (comma-separated)']
                  },
                  {
                    title: 'Email Log Module',
                    items: ['Email history storage', 'Status tracking (sent/failed)', 'Filter and search functionality']
                  },
                  {
                    title: 'Retry Module',
                    items: ['Resend failed emails', 'Status updates', 'Error logging']
                  },
                  {
                    title: 'Frontend Module',
                    items: ['Clean responsive UI', 'Form validation', 'User-friendly dashboard']
                  },
                  {
                    title: 'Email Delivery Module',
                    items: ['PHP mail() function', 'SMTP server integration', 'Delivery status reporting']
                  },
                ].map((module, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-emerald-500/50 transition-all"
                  >
                    <h3 className="text-xl font-bold mb-4 text-emerald-300">{module.title}</h3>
                    <ul className="space-y-2">
                      {module.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                          <span className="text-white/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* SYSTEM ARCHITECTURE */}
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
                <div className="w-2 h-2 rounded-full bg-green-300"></div>
                <span className="text-green-300 font-semibold">Architecture</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">System Architecture</h2>

              <motion.div
                variants={itemVariants}
                className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-center mb-8"
              >
                <div className="inline-block space-y-3">
                  <img
        src={email1}
        alt=""
        className="w-full h-auto object-contain"
      />

                </div>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { layer: 'Frontend Layer', tech: 'HTML, CSS, JavaScript', desc: 'User interface and form interactions' },
                  { layer: 'Backend Layer', tech: 'PHP', desc: 'Server-side logic and email sending' },
                  { layer: 'Database Layer', tech: 'MySQL', desc: 'Email logs and user data storage' },
                ].map((arch, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-green-500/50 transition-all text-center"
                  >
                    <h3 className="text-lg font-bold text-green-300 mb-2">{arch.layer}</h3>
                    <p className="text-emerald-300 font-semibold mb-2">{arch.tech}</p>
                    <p className="text-white/70 text-sm">{arch.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* TECHNOLOGY STACK */}
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
                <div className="w-2 h-2 rounded-full bg-lime-300"></div>
                <span className="text-lime-300 font-semibold">Technology Stack</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Technologies & Tools</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <motion.div variants={itemVariants} className="space-y-4">
                  <h3 className="text-2xl font-bold text-green-300 mb-4">Frontend</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {['HTML', 'CSS', 'JavaScript'].map((tech, i) => (
                      <motion.div
                        key={i}
                        className="p-4 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-center hover:border-green-500/50 transition-colors"
                      >
                        <p className="font-semibold text-green-300">{tech}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-4">
                  <h3 className="text-2xl font-bold text-emerald-300 mb-4">Backend & Database</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {['PHP', 'MySQL', 'SMTP'].map((tech, i) => (
                      <motion.div
                        key={i}
                        className="p-4 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-center hover:border-emerald-500/50 transition-colors"
                      >
                        <p className="font-semibold text-emerald-300">{tech}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div
                variants={itemVariants}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 grid md:grid-cols-2 gap-6 text-center"
              >
                <div>
                  <p className="text-lime-300 font-semibold mb-2">Email Delivery</p>
                  <p className="text-white/70">PHP mail() / SMTP Server</p>
                </div>
                <div>
                  <p className="text-green-300 font-semibold mb-2">Deployment</p>
                  <p className="text-white/70">Web Server (Apache/Nginx)</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* WORKFLOW */}
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
                <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
                <span className="text-emerald-300 font-semibold">End-to-End Flow</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Email Sending Workflow</h2>

              <div className="space-y-4">
                {[
                  '1. Admin logs into Mail Send Module',
                  '2. Opens email composer interface',
                  '3. Enters subject, message body, and recipient addresses',
                  '4. Selects single or multiple recipients',
                  '5. Clicks "Send" button',
                  '6. PHP validates recipient email and content',
                  '7. Email sent via PHP mail() or SMTP server',
                  '8. Status (sent/failed) recorded in MySQL database',
                  '9. Admin views sent emails and can retry failed ones',
                  '10. Email logs stored for future reference and tracking',
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-emerald-500/50 transition-all flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-300 font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-white/80 pt-1">{step}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* TESTING & VALIDATION */}
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
                <div className="w-2 h-2 rounded-full bg-green-300"></div>
                <span className="text-green-300 font-semibold">Testing</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Testing & Validation</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Email Format Validation', items: ['Correct email addresses', 'Invalid format rejection', 'Multiple email parsing'] },
                  { title: 'SMTP Testing', items: ['Successful delivery', 'Connection testing', 'Error handling'] },
                  { title: 'Database Logging', items: ['Email records stored', 'Status updates', 'Log retrieval'] },
                  { title: 'Retry Functionality', items: ['Failed email retry', 'Status updates', 'Error logging'] },
                  { title: 'Security Testing', items: ['Session validation', 'Login authentication', 'Access control'] },
                  { title: 'UI/UX Testing', items: ['Form validation', 'User feedback', 'Error messages'] },
                ].map((test, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-green-500/50 transition-all"
                  >
                    <h3 className="text-xl font-bold mb-4 text-green-300">{test.title}</h3>
                    <ul className="space-y-2">
                      {test.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                          <span className="text-white/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* RESULTS & IMPACT */}
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
                <div className="w-2 h-2 rounded-full bg-lime-300"></div>
                <span className="text-lime-300 font-semibold">Results & Impact</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Results & Benefits</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Automated Sending', desc: 'Emails sent automatically and efficiently' },
                  { title: 'Error Reduction', desc: 'Reduced human errors in sending emails' },
                  { title: 'Centralized Logs', desc: 'All email records maintained in one place' },
                  { title: 'Bulk Support', desc: 'Easy sending to multiple recipients' },
                  { title: 'Better Tracking', desc: 'Real-time delivery status monitoring' },
                  { title: 'Improved Communication', desc: 'Streamlined email communication process' },
                ].map((result, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-lime-500/50 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <Award className="w-6 h-6 text-lime-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-lime-300 transition-colors">{result.title}</h3>
                        <p className="text-white/70">{result.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* FUTURE ENHANCEMENTS */}
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
                <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
                <span className="text-emerald-300 font-semibold">Future Scope</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Future Enhancements</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: <Send className="w-6 h-6" />, title: 'Attachment Support', desc: 'Send files and attachments' },
                  { icon: <Mail className="w-6 h-6" />, title: 'Email Templates', desc: 'Pre-designed templates for recurring messages' },
                  { icon: <RotateCcw className="w-6 h-6" />, title: 'Scheduled Sending', desc: 'Schedule emails for future delivery' },
                  { icon: <Users className="w-6 h-6" />, title: 'Multi-User Support', desc: 'Role-based access for multiple users' },
                  { icon: <Zap className="w-6 h-6" />, title: 'CRM Integration', desc: 'Integration with CRM and ERP systems' },
                  { icon: <BarChart3 className="w-6 h-6" />, title: 'Analytics', desc: 'Email delivery statistics and reports' },
                ].map((enhancement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-emerald-500/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                      <span className="text-emerald-300">{enhancement.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{enhancement.title}</h3>
                    <p className="text-white/70">{enhancement.desc}</p>
                  </motion.div>
                ))}
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
                <div className="w-2 h-2 rounded-full bg-green-300"></div>
                <span className="text-green-300 font-semibold">Conclusion</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Project Conclusion</h2>

              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  The Mail Send Module provides a simple, secure, and automated solution for email communication. By eliminating the need for external email clients, it improves efficiency and reduces errors in organizational email workflows.
                </p>

                <p>
                  Built with PHP, MySQL, and web technologies, the system offers an easy-to-use interface for composing and sending emails to multiple recipients while maintaining centralized logs for tracking and compliance. The role-based access control ensures security while the retry functionality handles failed deliveries gracefully.
                </p>

                <p>
                  With its simple yet powerful design, the Mail Send Module demonstrates how a well-architected email system can streamline communication processes in organizations, schools, and businesses, providing a cost-effective alternative to external email services.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetailsPage10;
