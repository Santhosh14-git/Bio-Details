import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import hostel from './projects/hostel.png';
import hostelArch from './projects/hostel flow.png';
import {
  Home,
  Users,
  BookOpen,
  Smartphone,
  ArrowRight,
  Check,
  Lock,
  TrendingUp,
  Zap,
  Award,
  Database,
  BarChart3,
  Clock,
} from 'lucide-react';

const ProjectDetailsPage13 = () => {
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
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900"></div>

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
              <Home className="w-10 h-10 text-blue-300" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              Hostel Room Management System
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Smart and Efficient Hostel Administration Platform
            </p>

            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8">
              A comprehensive web-based application designed to manage hostel rooms, students, and allocations efficiently. Helps hostel administrators handle room allotment, occupancy tracking, and student records in a structured and digital way.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-blue-300 hover:border-blue-500/50 transition-colors"
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
                <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                <span className="text-blue-300 font-semibold">Project Overview</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Hostel Management System</h2>

              <p className="text-lg text-white/80 leading-relaxed mb-6">
                The Hostel Room Management System is a web-based application designed to manage hostel rooms, students, and allocations efficiently. It helps hostel administrators handle room allotment, occupancy tracking, and student records in a structured and digital way.
              </p>

              <p className="text-lg text-white/80 leading-relaxed">
                This system reduces manual paperwork and ensures transparent, accurate, and fast hostel management. By automating room allocation and student tracking, it provides a reliable solution for managing hostel operations in educational institutions.
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

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Hostel Management Challenges</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <BookOpen className="w-6 h-6" />,
                    title: 'Manual Registers',
                    desc: 'Traditional hostel management relies on manual registers and Excel sheets'
                  },
                  {
                    icon: <Clock className="w-6 h-6" />,
                    title: 'Time-Consuming Allocation',
                    desc: 'Room allocation process takes significant time and effort'
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: 'Tracking Difficulties',
                    desc: 'Difficulty in tracking room availability and occupancy'
                  },
                  {
                    icon: <Database className="w-6 h-6" />,
                    title: 'Record Errors',
                    desc: 'Errors in student and room records due to manual entry'
                  },
                  {
                    icon: <Smartphone className="w-6 h-6" />,
                    title: 'Poor Communication',
                    desc: 'Limited communication between admin and students'
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" />,
                    title: 'Inefficiency',
                    desc: 'Managing large hostels becomes inefficient and error-prone'
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
                <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                <span className="text-blue-300 font-semibold">Solution</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Integrated Hostel Management Solution</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Centralized Digital Platform', desc: 'One unified system for all hostel operations' },
                  { title: 'Admin Dashboard', desc: 'Manage rooms and students from one place' },
                  { title: 'Automatic Room Updates', desc: 'Room availability updated in real-time' },
                  { title: 'Student Portal', desc: 'Students can view their room details' },
                  { title: 'Allocation Tracking', desc: 'Track all allocations and changes clearly' },
                  { title: 'Better Organization', desc: 'Ensures better organization and accuracy' },
                ].map((solution, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-blue-500/50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
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
                <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                <span className="text-teal-300 font-semibold">User Roles</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">User Access Roles</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  variants={itemVariants}
                  className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-teal-500/50 transition-all"
                >
                  <h3 className="text-2xl font-bold mb-4 text-teal-300">👨‍💼 Hostel Admin</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Secure login to admin dashboard</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Add and manage hostel rooms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Allocate rooms to students</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Update room status (occupied/vacant)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">View hostel occupancy details</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Manage student records</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-blue-500/50 transition-all"
                >
                  <h3 className="text-2xl font-bold mb-4 text-blue-300">🧑‍🎓 Student</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Secure login</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">View allotted room details</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Check hostel rules and information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">View roommates (if allowed)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">See hostel notices and updates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                      <span className="text-white/80">Track allocation history</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* USER INTERFACE */}
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
                <span className="text-cyan-300 font-semibold">User Interface</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-4">🎨 Dashboard & Management Interface</h3>
              <img
                src={hostel}
                alt="Hostel Management System User Interface"
                className="w-full h-auto object-contain rounded-2xl border border-white/20"
              />
            </motion.div>
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
                <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                <span className="text-blue-300 font-semibold">🧩 System Modules</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Core System Modules</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: '🔐 Authentication Module',
                    items: ['Role-based login (Admin / Student)', 'Secure session handling', 'Unauthorized access prevention']
                  },
                  {
                    title: '🏢 Room Management Module',
                    items: ['Add, edit, and delete rooms', 'Set room capacity and type', 'Track vacant and occupied rooms']
                  },
                  {
                    title: '👥 Student Management Module',
                    items: ['Add and manage student details', 'Assign rooms to students', 'Update or remove allocations']
                  },
                  {
                    title: '📊 Dashboard & Reports Module',
                    items: ['Total rooms count', 'Occupied vs vacant rooms', 'Student occupancy summary']
                  },
                  {
                    title: '🗄️ Database Module',
                    items: ['Hostel and room data storage', 'Student records management', 'Allocation history tracking']
                  },
                  {
                    title: '📢 Notification Module',
                    items: ['Send hostel notices', 'Update announcements', 'Alert functionality']
                  },
                ].map((module, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-blue-500/50 transition-all"
                  >
                    <h3 className="text-xl font-bold mb-4 text-blue-300">{module.title}</h3>
                    <ul className="space-y-2">
                      {module.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
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
                <div className="w-2 h-2 rounded-full bg-cyan-300"></div>
                <span className="text-cyan-300 font-semibold">🏗️ Architecture</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">System Architecture</h2>

              <motion.div
                variants={itemVariants}
                className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-center mb-8"
              >
                <img
                  src={hostelArch}
                  alt="Hostel Management System Architecture"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { layer: 'Frontend Layer', tech: 'HTML, CSS, JavaScript', desc: 'User interface and form interactions' },
                  { layer: 'Backend Layer', tech: 'PHP', desc: 'Server-side logic and room allocation' },
                  { layer: 'Database Layer', tech: 'MySQL', desc: 'Room, student, and allocation data storage' },
                ].map((arch, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-blue-500/50 transition-all text-center"
                  >
                    <h3 className="text-lg font-bold text-blue-300 mb-2">{arch.layer}</h3>
                    <p className="text-cyan-300 font-semibold mb-2">{arch.tech}</p>
                    <p className="text-white/70 text-sm">{arch.desc}</p>
                  </motion.div>
                ))}
              </div>
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
                <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                <span className="text-teal-300 font-semibold">🔁 Use Case Flow</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">End-to-End Flow</h2>

              <div className="space-y-4">
                {[
                  '1. Admin logs into the system',
                  '2. Admin adds hostel blocks, floors, and rooms',
                  '3. Admin sets room capacity and availability',
                  '4. Student registers or is added by admin',
                  '5. Admin allocates room to student',
                  '6. System updates room occupancy automatically',
                  '7. Student logs in and views room details',
                  '8. Admin can change or vacate rooms when needed',
                  '9. System maintains detailed allocation history',
                  '10. Comprehensive reports generated for hostel management',
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-teal-500/50 transition-all flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-teal-300 font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-white/80 pt-1">{step}</p>
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
                <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                <span className="text-blue-300 font-semibold">🛠️ Technology Stack</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Technologies & Tools</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <motion.div variants={itemVariants} className="space-y-4">
                  <h3 className="text-2xl font-bold text-blue-300 mb-4">🌐 Frontend</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {['HTML', 'CSS', 'JavaScript'].map((tech, i) => (
                      <motion.div
                        key={i}
                        className="p-4 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-center hover:border-blue-500/50 transition-colors"
                      >
                        <p className="font-semibold text-blue-300">{tech}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-4">
                  <h3 className="text-2xl font-bold text-cyan-300 mb-4">⚙️ Backend & Database</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {['PHP', 'MySQL', 'Apache'].map((tech, i) => (
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
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 grid md:grid-cols-2 gap-6 text-center"
              >
                <div>
                  <p className="text-blue-300 font-semibold mb-2">Architecture Type</p>
                  <p className="text-white/70">Layered Architecture (Frontend, Backend, Database)</p>
                </div>
                <div>
                  <p className="text-cyan-300 font-semibold mb-2">Deployment</p>
                  <p className="text-white/70">Web Server (Apache/Nginx)</p>
                </div>
              </motion.div>
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
                <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                <span className="text-blue-300 font-semibold">🧪 Testing</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Testing & Validation</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Admin Login Testing', items: ['Correct credentials accepted', 'Invalid access rejected', 'Session management'] },
                  { title: 'Room Allocation', items: ['Room allocation validation', 'Duplicate assignment prevention', 'Occupancy tracking'] },
                  { title: 'Student Data', items: ['Student record accuracy', 'Data validation', 'Duplicate prevention'] },
                  { title: 'Database Testing', items: ['Data consistency', 'Query performance', 'Backup integrity'] },
                  { title: 'UI/UX Testing', items: ['Form validation', 'User feedback', 'Navigation flow'] },
                  { title: 'Security Testing', items: ['Session validation', 'Access control', 'Data protection'] },
                ].map((test, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-blue-500/50 transition-all"
                  >
                    <h3 className="text-xl font-bold mb-4 text-blue-300">{test.title}</h3>
                    <ul className="space-y-2">
                      {test.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
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
                <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                <span className="text-teal-300 font-semibold">📊 Results & Impact</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Results & Benefits</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Reduced Paperwork', desc: 'Eliminated manual registers and paperwork' },
                  { title: 'Faster Allocation', desc: 'Faster room allocation process' },
                  { title: 'Accurate Tracking', desc: 'Accurate room occupancy tracking' },
                  { title: 'Better Efficiency', desc: 'Improved hostel administration efficiency' },
                  { title: 'Transparency', desc: 'Transparent and clear allocation records' },
                  { title: 'Student Satisfaction', desc: 'Improved student satisfaction and communication' },
                ].map((result, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-teal-500/50 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <Award className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-teal-300 transition-colors">{result.title}</h3>
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
                <span className="text-cyan-300 font-semibold">🚀 Future Scope</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Future Enhancements</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: <Smartphone className="w-6 h-6" />, title: 'Online Room Request', desc: 'Students can request rooms online' },
                  { icon: <Zap className="w-6 h-6" />, title: 'Fee Management', desc: 'Hostel fee collection and management' },
                  { icon: <Clock className="w-6 h-6" />, title: 'Complaint Module', desc: 'Maintenance complaint tracking' },
                  { icon: <BarChart3 className="w-6 h-6" />, title: 'Attendance Tracking', desc: 'Student attendance monitoring' },
                  { icon: <Home className="w-6 h-6" />, title: 'Mobile App', desc: 'Mobile app support for students' },
                  { icon: <TrendingUp className="w-6 h-6" />, title: 'Analytics', desc: 'Advanced hostel analytics and insights' },
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
                <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                <span className="text-blue-300 font-semibold">🏁 Conclusion</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">Project Conclusion</h2>

              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  The Hostel Room Management System simplifies hostel administration by automating room allocation and student management. It provides a reliable and efficient solution for managing hostel operations in educational institutions.
                </p>

                <p>
                  By eliminating manual processes and providing digital transparency, the system improves both administrative efficiency and student satisfaction. The centralized platform ensures accurate records, faster decision-making, and better communication between administrators and students.
                </p>

                <p>
                  With its scalable architecture built on PHP, MySQL, and web technologies, this system can be easily adapted to accommodate hostel growth and future enhancements, making it a cost-effective solution for modern hostel management.
                </p>
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/20">
                <p className="text-lg text-blue-300 font-semibold mb-2">💼  Summary</p>
                <p className="text-white/80">
                  Hostel Room Management System – Designed and developed a web-based application to manage hostel rooms and student allocation efficiently using PHP, MySQL, HTML, CSS, and JavaScript. The system automates room allocation, tracks occupancy in real-time, and provides admin and student portals for seamless hostel management.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetailsPage13;
