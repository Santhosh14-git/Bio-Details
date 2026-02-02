import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import web from './projects/erp flow.png';
import web1 from './projects/erp portal.png';

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
} from 'lucide-react';

const ProjectDetailsPage9 = () => {
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
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900"></div>

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
              <BarChart3 className="w-10 h-10 text-teal-300" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
              ERP Web Application
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Integrated Enterprise Resource Planning System
            </p>

            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8">
              A comprehensive full-stack enterprise management system integrating HR, Finance, Inventory, and Project modules with real-time reporting and role-based access control.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-teal-300 hover:border-teal-500/50 transition-colors"
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
                <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                <span className="text-teal-300 font-semibold">Project Overview</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">About ERP Web Application</h2>

              <p className="text-lg text-white/80 leading-relaxed mb-6">
                The ERP Web Application is a full-stack enterprise software solution designed to help organizations manage their business processes efficiently. It integrates multiple critical modules including Human Resources, Finance, Inventory, Sales, and Projects into a single unified platform with seamless real-time data flow.
              </p>

              <p className="text-lg text-white/80 leading-relaxed">
                Built with modern technologies (React + TypeScript frontend, .NET Core backend, SQL Server database), the system ensures secure role-based access control, scalable architecture, and reliable performance suitable for medium to large organizations. It provides centralized data management, automated workflows, and comprehensive reporting capabilities to streamline organizational operations.
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
                <div className="w-2 h-2 rounded-full bg-cyan-300"></div>
                <span className="text-cyan-300 font-semibold">Problem Statement</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Organizational Challenges</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Layers className="w-6 h-6" />,
                    title: 'Fragmented Systems',
                    desc: 'Multiple standalone software for different departments'
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" />,
                    title: 'Data Redundancy',
                    desc: 'Duplicate data and errors across systems'
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: 'Lack of Real-Time Info',
                    desc: 'Delayed information and delayed decision making'
                  },
                  {
                    icon: <Award className="w-6 h-6" />,
                    title: 'Manual Processes',
                    desc: 'Time-consuming and error-prone manual operations'
                  },
                  {
                    icon: <BarChart3 className="w-6 h-6" />,
                    title: 'Poor Reporting',
                    desc: 'Inadequate reporting and analytics capabilities'
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: 'Data Silos',
                    desc: 'Isolated information preventing cross-department visibility'
                  },
                ].map((challenge, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-cyan-500/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/30 transition-colors">
                      <span className="text-cyan-300">{challenge.icon}</span>
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
                <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                <span className="text-teal-300 font-semibold">Solution</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Integrated ERP Solution</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Centralized Platform', desc: 'Integrate all departments into one unified system' },
                  { title: 'Real-Time Data', desc: 'Live tracking of transactions and records' },
                  { title: 'Reduced Errors', desc: 'Eliminate data redundancy and manual mistakes' },
                  { title: 'Automated Workflows', desc: 'Streamline processes and reduce manual effort' },
                  { title: 'Role-Based Access', desc: 'Secure, authorized access to specific modules' },
                  { title: 'Advanced Analytics', desc: 'Comprehensive reporting and business insights' },
                ].map((solution, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-teal-500/50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <Check className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
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
        <section className="py-20 px-4" arcimage="erp-user-roles-section">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                <span className="text-blue-300 font-semibold" arcimage="erp-roles-title">User Roles</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Role-Based Access Control</h2>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    role: 'Admin',
                    permissions: ['Full system control', 'User management', 'Role assignment', 'System configuration']
                  },
                  {
                    role: 'HR Staff',
                    permissions: ['Employee management', 'Attendance & leave', 'Payroll management', 'HR reports']
                  },
                  {
                    role: 'Finance Staff',
                    permissions: ['Invoice management', 'Expense tracking', 'Budget allocation', 'Financial reports']
                  },
                  {
                    role: 'Inventory Staff',
                    permissions: ['Stock management', 'Purchase orders', 'Supplier management', 'Inventory alerts']
                  },
                  {
                    role: 'Project Heads',
                    permissions: ['Project tracking', 'Task assignment', 'Progress monitoring', 'Resource allocation']
                  },
                  {
                    role: 'Employees',
                    permissions: ['View personal info', 'Check leave status', 'View assigned tasks', 'Submit requests']
                  },
                ].map((userRole, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-blue-500/50 transition-all"
                  >
                    <h3 className="text-xl font-bold mb-4 text-blue-300">{userRole.role}</h3>
                    <ul className="space-y-2">
                      {userRole.permissions.map((perm, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                          <span className="text-white/70 text-sm">{perm}</span>
                        </li>
                      ))}
                    </ul>
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
                    src={web1}
                    alt=""
                    className="w-full h-auto object-contain"
                    arcimage="hardware-image"
                  />
                     </motion.div>
                     </section>

        {/* SYSTEM MODULES */}
        <section className="py-20 px-4" arcimage="erp-modules-section">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-cyan-300"></div>
                <span className="text-cyan-300 font-semibold" arcimage="erp-modules-title">System Modules</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Core ERP Modules</h2>

              <div className="space-y-6">
                {[
                  {
                    title: 'Authentication & Authorization',
                    items: ['Role-based login system', 'Secure password storage (hashed)', 'JWT token-based sessions', 'Multi-factor authentication support']
                  },
                  {
                    title: 'Human Resources (HR) Module',
                    items: ['Employee management (add/update/delete)', 'Attendance & leave tracking', 'Payroll management', 'Performance reviews']
                  },
                  {
                    title: 'Finance Module',
                    items: ['Invoice creation & tracking', 'Expense management', 'Budget allocation & control', 'Financial reporting & analytics']
                  },
                  {
                    title: 'Inventory Module',
                    items: ['Stock management (add/update/remove)', 'Supplier & purchase order management', 'Low stock alerts', 'Warehouse tracking']
                  },
                  {
                    title: 'Project & Task Management',
                    items: ['Create projects and tasks', 'Employee task assignment', 'Progress tracking', 'Deadline management']
                  },
                  {
                    title: 'Reporting & Analytics',
                    items: ['Department-wise reports', 'Real-time analytics dashboards', 'PDF/Excel export', 'Custom report generation']
                  },
                  {
                    title: 'Notifications System',
                    items: ['Email notifications', 'In-app notifications', 'Alert management', 'Task reminders']
                  },
                ].map((module, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-cyan-500/50 transition-all"
                  >
                    <h3 className="text-2xl font-bold mb-4 text-cyan-300">{module.title}</h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {module.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
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
        <section className="py-20 px-4" arcimage="erp-architecture-section">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                <span className="text-teal-300 font-semibold" arcimage="erp-architecture-title">Architecture</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Layered System Architecture</h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    layer: 'Frontend Layer',
                    tech: 'React + TypeScript',
                    features: ['User-friendly dashboards', 'Role-based module visibility', 'Responsive UI', 'Real-time updates']
                  },
                  {
                    layer: 'Backend Layer',
                    tech: '.NET Core Web API',
                    features: ['Business logic processing', 'Request handling', 'Data validation', 'Security enforcement']
                  },
                  {
                    layer: 'Database Layer',
                    tech: 'SQL Server',
                    features: ['Relational data structure', 'Optimized queries', 'Data integrity', 'Backup & recovery']
                  },
                ].map((arch, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-teal-500/50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center mb-4">
                      <Layers className="w-6 h-6 text-teal-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-1 text-teal-300">{arch.layer}</h3>
                    <p className="text-blue-300 font-semibold mb-4">{arch.tech}</p>
                    <ul className="space-y-2">
                      {arch.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-teal-400 flex-shrink-0 mt-1" />
                          <span className="text-white/70 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={itemVariants}
                className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-center"
              >
                <div className="inline-block">
                  <p className="text-white/80 mb-4 font-semibold">Architecture Flow</p>
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            
            <img
        src={web}
        alt=""
        className="w-full h-auto object-contain"
        arcimage="hardware-image"
      />
              
            
          </div>

                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* TECHNOLOGY STACK */}
        <section className="py-20 px-4" arcimage="erp-tech-stack">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                <span className="text-blue-300 font-semibold" arcimage="erp-tech-title">Technology Stack</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Technologies & Tools</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants} className="space-y-6">
                  <h3 className="text-2xl font-bold text-teal-300 mb-4">Frontend</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {['React', 'TypeScript', 'CSS', 'HTML', 'Redux', 'Axios'].map((tech, i) => (
                      <motion.div
                        key={i}
                        className="p-4 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-center hover:border-teal-500/50 transition-colors"
                      >
                        <p className="font-semibold text-teal-300">{tech}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-6">
                  <h3 className="text-2xl font-bold text-cyan-300 mb-4">Backend & Database</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {['.NET Core', 'C#', 'SQL Server', 'Entity Framework', 'JWT Auth', 'REST API'].map((tech, i) => (
                      <motion.div
                        key={i}
                        className="p-4 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-center hover:border-cyan-500/50 transition-colors"
                      >
                        <p className="font-semibold text-cyan-300">{tech}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div
                variants={itemVariants}
                className="mt-8 p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 grid md:grid-cols-3 gap-6 text-center"
              >
                <div>
                  <p className="text-blue-300 font-semibold mb-2">Communication</p>
                  <p className="text-white/70">REST API / JSON</p>
                </div>
                <div>
                  <p className="text-blue-300 font-semibold mb-2">Deployment</p>
                  <p className="text-white/70">IIS / Cloud Server</p>
                </div>
                <div>
                  <p className="text-blue-300 font-semibold mb-2">Testing</p>
                  <p className="text-white/70">Unit & Integration Tests</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* WORKFLOW */}
        <section className="py-20 px-4" arcimage="erp-workflow-section">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-cyan-300"></div>
                <span className="text-cyan-300 font-semibold" arcimage="erp-workflow-title">End-to-End Flow</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">System Workflow</h2>

              <div className="space-y-4">
                {[
                  '1. User Login → Secure token-based authentication',
                  '2. Dashboard Access → Role-based module visibility',
                  '3. Data Operations → CRUD operations on records',
                  '4. Data Storage → All data persisted in SQL Server',
                  '5. Real-Time Updates → Live notifications and alerts',
                  '6. Report Generation → Analytics and export options',
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-cyan-500/50 transition-all flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-cyan-300 font-bold text-sm">{index + 1}</span>
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
                <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                <span className="text-teal-300 font-semibold">Testing</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Testing & Validation</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Unit Testing', items: ['Backend API tests', '.NET unit tests', 'Data validation tests'] },
                  { title: 'Frontend Testing', items: ['React component tests', 'UI/UX testing', 'React Testing Library'] },
                  { title: 'Integration Testing', items: ['Module interaction tests', 'API integration tests', 'Database connectivity'] },
                  { title: 'Security Testing', items: ['Role-based access tests', 'Authentication tests', 'Data encryption validation'] },
                  { title: 'Performance Testing', items: ['Load testing', 'Large dataset handling', 'Query optimization'] },
                  { title: 'UAT', items: ['End-user acceptance testing', 'Business logic validation', 'Real-world scenario testing'] },
                ].map((test, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-teal-500/50 transition-all"
                  >
                    <h3 className="text-xl font-bold mb-4 text-teal-300">{test.title}</h3>
                    <ul className="space-y-2">
                      {test.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-teal-400 flex-shrink-0 mt-1" />
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
                <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                <span className="text-blue-300 font-semibold">Results & Impact</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Results & Benefits</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Unified Platform', desc: 'All departments integrated into one system' },
                  { title: 'Error Reduction', desc: 'Eliminated data redundancy and manual errors' },
                  { title: 'Real-Time Insights', desc: 'Live analytics for informed decision making' },
                  { title: 'Process Efficiency', desc: 'Automated workflows and streamlined operations' },
                  { title: 'Cost Reduction', desc: 'Reduced manual work and operational costs' },
                  { title: 'Data Security', desc: 'Secure role-based access and data protection' },
                ].map((result, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-blue-500/50 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <Award className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors">{result.title}</h3>
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
                <div className="w-2 h-2 rounded-full bg-cyan-300"></div>
                <span className="text-cyan-300 font-semibold">Future Scope</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Future Enhancements</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: <Smartphone className="w-6 h-6" />, title: 'Mobile Application', desc: 'Native mobile app for employees' },
                  { icon: <BarChart3 className="w-6 h-6" />, title: 'AI Analytics', desc: 'ML-based predictions and insights' },
                  { icon: <ShieldCheck className="w-6 h-6" />, title: 'Biometric Login', desc: 'Enhanced security with biometrics' },
                  { icon: <Database className="w-6 h-6" />, title: 'Multi-Organization', desc: 'Cloud-hosted multi-tenant support' },
                  { icon: <MessageSquare className="w-6 h-6" />, title: 'Chat System', desc: 'In-app messaging and collaboration' },
                  { icon: <TrendingUp className="w-6 h-6" />, title: 'Advanced Reporting', desc: 'Custom dashboards and KPIs' },
                ].map((enhancement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-cyan-500/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/30 transition-colors">
                      <span className="text-cyan-300">{enhancement.icon}</span>
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
                <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                <span className="text-teal-300 font-semibold">Conclusion</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Project Conclusion</h2>

              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  The ERP Web Application provides a modern, centralized, and secure solution for managing multiple organizational processes. By combining a React + TypeScript frontend, .NET Core backend, and SQL Server database, the system delivers a scalable, responsive, and reliable platform for enterprise resource management.
                </p>

                <p>
                  The system successfully integrates HR, Finance, Inventory, and Project management modules into a unified platform, enabling organizations to streamline operations, reduce manual errors, and gain real-time insights. The role-based access control ensures security while maintaining user-friendly interfaces for different organizational roles.
                </p>

                <p>
                  With comprehensive reporting capabilities, automated workflows, and scalable architecture, the ERP Web Application demonstrates how modern full-stack development can solve complex organizational management challenges, making it suitable for businesses and educational institutions seeking digital transformation.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetailsPage9;
