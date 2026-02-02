import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import bill from './projects/billing software arch.png';
import bill1 from './projects/bill.png';
import {
  FileText,
  Users,
  ShoppingCart,
  Smartphone,
  ArrowRight,
  Check,
  Lock,
  TrendingUp,
  Zap,
  Award,
  Database,
  BarChart3,
  Download,
} from 'lucide-react';

const ProjectDetailsPage11 = () => {
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
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-indigo-900 via-violet-900 to-purple-900"></div>

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
              <FileText className="w-10 h-10 text-indigo-300" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-300 via-violet-300 to-purple-300 bg-clip-text text-transparent">
              Billing Software
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Automated Invoice and Billing Management System
            </p>

            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8">
              A comprehensive web-based billing platform enabling businesses to generate professional invoices, manage customers and products, track sales, and generate detailed reports with automated calculations.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-indigo-300 hover:border-indigo-500/50 transition-colors"
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
                <div className="w-2 h-2 rounded-full bg-indigo-300"></div>
                <span className="text-indigo-300 font-semibold">Project Overview</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Billing Software</h2>

              <p className="text-lg text-white/80 leading-relaxed mb-6">
                The Billing Software is a web-based application designed to generate, manage, and track bills for products or services. It automates the billing process, reduces manual errors, and provides real-time record keeping for businesses or institutions.
              </p>

              <p className="text-lg text-white/80 leading-relaxed">
                This system is admin-managed, allowing staff to create invoices, track sales, and manage customer data through a clean and interactive interface. Built with PHP, MySQL, HTML, CSS, and JavaScript, it provides automated calculations, professional invoice generation, and comprehensive reporting capabilities for efficient business operations.
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
                <div className="w-2 h-2 rounded-full bg-violet-300"></div>
                <span className="text-violet-300 font-semibold">Problem Statement</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Billing Challenges</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <FileText className="w-6 h-6" />,
                    title: 'Manual Invoice Generation',
                    desc: 'Time-consuming process of creating invoices'
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: 'Calculation Errors',
                    desc: 'Human errors in totals, taxes, and discounts'
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" />,
                    title: 'Sales Tracking Issues',
                    desc: 'Difficulty tracking sales and payments'
                  },
                  {
                    icon: <BarChart3 className="w-6 h-6" />,
                    title: 'Limited Reporting',
                    desc: 'Poor reporting and analytics capabilities'
                  },
                  {
                    icon: <Database className="w-6 h-6" />,
                    title: 'Data Fragmentation',
                    desc: 'Customer data scattered across systems'
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: 'Manual Record Keeping',
                    desc: 'Error-prone manual record management'
                  },
                ].map((challenge, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-violet-500/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center mb-4 group-hover:bg-violet-500/30 transition-colors">
                      <span className="text-violet-300">{challenge.icon}</span>
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
                <div className="w-2 h-2 rounded-full bg-indigo-300"></div>
                <span className="text-indigo-300 font-semibold">Solution</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Digital Billing Solution</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Quick Invoice Creation', desc: 'Generate invoices in seconds' },
                  { title: 'Automatic Calculations', desc: 'Auto-calculate totals, taxes, discounts' },
                  { title: 'Customer Management', desc: 'Centralized customer data' },
                  { title: 'Product Management', desc: 'Manage products/services with pricing' },
                  { title: 'Professional Invoices', desc: 'Downloadable and printable PDFs' },
                  { title: 'Advanced Reporting', desc: 'Sales and analytics reports' },
                ].map((solution, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-indigo-500/50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <Check className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
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
        <section className="py-20 px-4" arcimage="billing-user-roles-section">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                <span className="text-purple-300 font-semibold" arcimage="billing-roles-title">User Roles</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">User Access Roles</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  variants={itemVariants}
                  className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-purple-500/50 transition-all"
                >
                  <h3 className="text-2xl font-bold mb-4 text-purple-300">Admin / Staff</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Secure dashboard login</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Add/manage customer information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Add/manage products and services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Generate and print invoices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Track payments and sales</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">View reports and summaries</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-indigo-500/50 transition-all"
                >
                  <h3 className="text-2xl font-bold mb-4 text-indigo-300">Customer</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Receives professional invoice</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Print or PDF format options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">View purchased items</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Check amount and payment details</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Email invoice option (future)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Track order information</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </section>
import out from './projects/outpass flow.png';

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
                    src={bill1}
                    alt=""
                    className="w-full h-auto object-contain"
                    arcimage="hardware-image"
                  />
                     </motion.div>
                     </section>
        {/* SYSTEM MODULES */}
        <section className="py-20 px-4" arcimage="billing-modules-section">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-violet-300"></div>
                <span className="text-violet-300 font-semibold" arcimage="billing-modules-title">System Modules</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Core System Modules</h2>

              <div className="space-y-6">
                {[
                  {
                    title: 'Authentication Module',
                    items: ['Secure staff login', 'Session-based access control', 'Password encryption (hashed)']
                  },
                  {
                    title: 'Customer Management Module',
                    items: ['Add/edit/delete customers', 'Track purchase history', 'Search and filter functionality']
                  },
                  {
                    title: 'Product/Service Management Module',
                    items: ['Add products with pricing', 'Manage stock quantity', 'Update or remove items']
                  },
                  {
                    title: 'Billing & Invoice Module',
                    items: ['Dynamic invoice generation', 'Auto-calculate tax and discounts', 'PDF and print export']
                  },
                  {
                    title: 'Payment Tracking Module',
                    items: ['Update payment status', 'Track paid/unpaid invoices', 'Payment history']
                  },
                  {
                    title: 'Reports & Analytics Module',
                    items: ['Daily/weekly/monthly reports', 'Filter by product/customer/date', 'Export as PDF/Excel']
                  },
                ].map((module, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-violet-500/50 transition-all"
                  >
                    <h3 className="text-2xl font-bold mb-4 text-violet-300">{module.title}</h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {module.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-violet-400 flex-shrink-0 mt-1" />
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

        {/* SYSTEM ARCHITECTURE */}
        <section className="py-20 px-4" arcimage="billing-architecture-section">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-indigo-300"></div>
                <span className="text-indigo-300 font-semibold" arcimage="billing-architecture-title">Architecture</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">System Architecture</h2>

              <motion.div
                variants={itemVariants}
                className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-center mb-8"
              >
                <div className="inline-block space-y-3">
                   <img
        src={bill}
        alt=""
        className="w-full h-auto object-contain"
        arcimage="hardware-image"
      />

                </div>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { layer: 'Frontend Layer', tech: 'HTML, CSS, JavaScript', desc: 'User dashboard and forms' },
                  { layer: 'Backend Layer', tech: 'PHP', desc: 'Business logic and processing' },
                  { layer: 'Database Layer', tech: 'MySQL', desc: 'Invoices, customers, products' },
                ].map((arch, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-indigo-500/50 transition-all text-center"
                  >
                    <h3 className="text-lg font-bold text-indigo-300 mb-2">{arch.layer}</h3>
                    <p className="text-violet-300 font-semibold mb-2">{arch.tech}</p>
                    <p className="text-white/70 text-sm">{arch.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* TECHNOLOGY STACK */}
        <section className="py-20 px-4" arcimage="billing-tech-stack">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                <span className="text-purple-300 font-semibold" arcimage="billing-tech-title">Technology Stack</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Technologies & Tools</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <motion.div variants={itemVariants} className="space-y-4">
                  <h3 className="text-2xl font-bold text-indigo-300 mb-4">Frontend</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {['HTML', 'CSS', 'JavaScript'].map((tech, i) => (
                      <motion.div
                        key={i}
                        className="p-4 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-center hover:border-indigo-500/50 transition-colors"
                      >
                        <p className="font-semibold text-indigo-300">{tech}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-4">
                  <h3 className="text-2xl font-bold text-violet-300 mb-4">Backend & Database</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {['PHP', 'MySQL', 'TCPDF'].map((tech, i) => (
                      <motion.div
                        key={i}
                        className="p-4 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-center hover:border-violet-500/50 transition-colors"
                      >
                        <p className="font-semibold text-violet-300">{tech}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div
                variants={itemVariants}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 grid md:grid-cols-3 gap-6 text-center"
              >
                <div>
                  <p className="text-purple-300 font-semibold mb-2">PDF Generation</p>
                  <p className="text-white/70">TCPDF / FPDF Library</p>
                </div>
                <div>
                  <p className="text-purple-300 font-semibold mb-2">Invoice Export</p>
                  <p className="text-white/70">PDF and Print Format</p>
                </div>
                <div>
                  <p className="text-purple-300 font-semibold mb-2">Deployment</p>
                  <p className="text-white/70">Web Server (Apache/Nginx)</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* WORKFLOW */}
        <section className="py-20 px-4" arcimage="billing-workflow-section">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-violet-300"></div>
                <span className="text-violet-300 font-semibold" arcimage="billing-workflow-title">End-to-End Flow</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Billing Workflow</h2>

              <div className="space-y-4">
                {[
                  '1. Staff logs into Billing Software dashboard',
                  '2. Selects or adds customer details',
                  '3. Adds purchased items/products with quantity and price',
                  '4. System calculates subtotal, taxes, discounts automatically',
                  '5. System calculates grand total',
                  '6. Generates professional invoice',
                  '7. Invoice can be printed or downloaded as PDF',
                  '8. Updates payment status (paid/unpaid)',
                  '9. All invoices logged in MySQL for records',
                  '10. Reports and analytics generated from stored data',
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-violet-500/50 transition-all flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-violet-300 font-bold text-sm">{index + 1}</span>
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
                <div className="w-2 h-2 rounded-full bg-indigo-300"></div>
                <span className="text-indigo-300 font-semibold">Testing</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Testing & Validation</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Calculation Testing', items: ['Invoice totals', 'Tax calculations', 'Discount application'] },
                  { title: 'CRUD Operations', items: ['Customer management', 'Product management', 'Invoice creation'] },
                  { title: 'Database Testing', items: ['Data consistency', 'Record validation', 'Query performance'] },
                  { title: 'PDF Generation', items: ['Invoice format', 'Print layout', 'File download'] },
                  { title: 'Authentication', items: ['Secure login', 'Session management', 'Access control'] },
                  { title: 'Data Integrity', items: ['Record persistence', 'Payment tracking', 'Report accuracy'] },
                ].map((test, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-indigo-500/50 transition-all"
                  >
                    <h3 className="text-xl font-bold mb-4 text-indigo-300">{test.title}</h3>
                    <ul className="space-y-2">
                      {test.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-1" />
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
                <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                <span className="text-purple-300 font-semibold">Results & Impact</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Results & Benefits</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Reduced Errors', desc: 'Eliminated calculation mistakes' },
                  { title: 'Faster Processing', desc: 'Invoice creation in seconds' },
                  { title: 'Centralized Data', desc: 'All customer and sales data in one place' },
                  { title: 'Easy Reporting', desc: 'Quick report generation for management' },
                  { title: 'Professional Image', desc: 'Professional invoice and receipts' },
                  { title: 'Improved Tracking', desc: 'Better payment and sales tracking' },
                ].map((result, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-purple-500/50 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <Award className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors">{result.title}</h3>
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
                <div className="w-2 h-2 rounded-full bg-violet-300"></div>
                <span className="text-violet-300 font-semibold">Future Scope</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Future Enhancements</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: <Download className="w-6 h-6" />, title: 'Email Invoices', desc: 'Send invoices directly to customers' },
                  { icon: <Users className="w-6 h-6" />, title: 'Multi-User Roles', desc: 'Advanced role-based access control' },
                  { icon: <Zap className="w-6 h-6" />, title: 'Stock Alerts', desc: 'Low inventory notifications' },
                  { icon: <TrendingUp className="w-6 h-6" />, title: 'Payment Gateway', desc: 'Online payment integration' },
                  { icon: <ShoppingCart className="w-6 h-6" />, title: 'Multi-Store Support', desc: 'Cloud-based multi-outlet deployment' },
                  { icon: <BarChart3 className="w-6 h-6" />, title: 'Advanced Analytics', desc: 'Business intelligence and forecasting' },
                ].map((enhancement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-violet-500/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center mb-4 group-hover:bg-violet-500/30 transition-colors">
                      <span className="text-violet-300">{enhancement.icon}</span>
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
                <div className="w-2 h-2 rounded-full bg-indigo-300"></div>
                <span className="text-indigo-300 font-semibold">Conclusion</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Project Conclusion</h2>

              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  The Billing Software automates the invoicing process, reduces manual work, and provides a professional, accurate, and centralized system for managing sales and customers. By eliminating calculation errors and streamlining invoice generation, it significantly improves operational efficiency.
                </p>

                <p>
                  Built with PHP, MySQL, and web technologies, the system offers an intuitive interface for creating invoices, managing customers and products, and generating comprehensive reports. The automatic calculation features and PDF export capabilities make it ideal for businesses seeking to professionalize their billing operations.
                </p>

                <p>
                  With its simple yet powerful design, easy deployment, and scalability, the Billing Software demonstrates how a well-architected invoicing system can streamline business operations, improve accuracy, and enhance customer experience for small to medium-sized businesses and institutions.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetailsPage11;
