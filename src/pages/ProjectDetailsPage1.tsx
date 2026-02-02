import { motion } from 'framer-motion';
import { ArrowRight, Check, Users, Zap, Shield, BarChart3, Clock, Award } from 'lucide-react';
import archImage from './projects/exam-hall-seat.png';
import archImage1 from './projects/exam hall.png';
const ProjectDetailsPage1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Exam Hall Seating Management System
          </h1>
          <p className="text-xl text-amber-300 mb-2">
            Automated and Efficient Student Seating Allocation
          </p>
          <p className="text-gray-300">
            A web-based application designed to automatically allocate students to exam halls and seat numbers. It replaces manual seating arrangements with a structured and rule-based allocation process, reducing errors and saving time.
          </p>
        </div>

        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-4">📌 Project Overview</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The Exam Hall Seating Management System is a web-based application designed to automatically allocate students to exam halls and seat numbers. It replaces manual seating arrangements with a structured and rule-based allocation process, reducing errors and saving time.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The system helps colleges and universities efficiently manage seating plans for internal assessments, semester examinations, and large-scale exams, ensuring smooth exam-day operations.
          </p>
        </motion.div>

        {/* Problem Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-4">🎯 Problem Statement</h2>
          <p className="text-gray-300 mb-4">Traditional exam hall seating is usually managed manually using registers or spreadsheets, which causes several issues:</p>
          <ul className="space-y-2 text-gray-300">
            {[
              'Time-consuming seat allocation process',
              'Human errors and duplicate seat assignments',
              'Difficulty in managing a large number of students',
              'Improper seating arrangements that may encourage malpractice',
              'Last-minute confusion during examinations'
            ].map((problem, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✗</span>
                <span>{problem}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-300 mt-4">To overcome these challenges, a secure and automated seating management system is required.</p>
        </motion.div>

        {/* Proposed Solution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-4">💡 Proposed Solution</h2>
          <p className="text-gray-300 mb-4">The proposed system provides an automated seating allocation platform where:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Admins can create exam schedules and halls',
              'Student details can be entered or uploaded in bulk',
              'Seats are allocated automatically based on predefined rules',
              'Seating charts are generated instantly'
            ].map((solution, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <span className="text-gray-200">{solution}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-300 mt-4">This significantly reduces administrative workload and improves exam organization.</p>
        </motion.div>

        {/* User Roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">👥 User Roles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-500/20 rounded-lg p-6 border border-amber-500/30">
              <h3 className="text-lg font-bold text-amber-300 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" /> Administrator (Exam Coordinator)
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Secure login to the admin dashboard</li>
                <li>✓ Add exam details (exam name, date, session)</li>
                <li>✓ Add and manage exam halls (hall number, capacity)</li>
                <li>✓ Upload student details (register number, department, year)</li>
                <li>✓ Define seating rules (department mixing, alternate seating)</li>
                <li>✓ Generate seating arrangements automatically</li>
                <li>✓ View, edit, and download seating charts</li>
              </ul>
            </div>
            <div className="bg-orange-500/20 rounded-lg p-6 border border-orange-500/30">
              <h3 className="text-lg font-bold text-orange-300 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5" /> Student
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Log in using register number</li>
                <li>✓ View allotted exam hall and seat number</li>
                <li>✓ Check exam date, session, and hall location</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Use Case Flow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">🔁 Use Case Flow (End-to-End)</h2>
          <div className="space-y-3">
            {[
              'Admin logs into the system',
              'Admin creates exam details',
              'Admin adds exam halls with seating capacities',
              'Admin uploads or enters student data',
              'Admin defines seating rules',
              'System automatically allocates seats',
              'Seating chart is generated',
              'Admin reviews and finalizes the arrangement',
              'Students log in to view their hall and seat number'
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/30 flex items-center justify-center border border-amber-500/50">
                  <span className="text-amber-300 font-bold text-sm">{idx + 1}</span>
                </div>
                <p className="text-gray-300 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* System Modules */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">🧩 System Modules</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Shield,
                title: '🔐 Authentication Module',
                features: ['Role-based login (Admin / Student)', 'Secure session handling', 'Prevention of unauthorized access']
              },
              {
                icon: Zap,
                title: '🏢 Hall Management Module',
                features: ['Add and manage exam halls', 'Define hall capacity and seating pattern', 'Activate or deactivate halls']
              },
              {
                icon: Users,
                title: '🧑‍🎓 Student Management Module',
                features: ['Add student details manually', 'Bulk upload using CSV or Excel files', 'Categorize students by department and year']
              },
              {
                icon: Clock,
                title: '🪑 Seating Allocation Module',
                features: ['Automatic seat assignment', 'Department-mixing logic', 'Alternate seating to reduce malpractice', 'Hall capacity validation']
              },
            ].map((module, idx) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
                className="bg-white/5 rounded-lg p-6 border border-white/10"
              >
                <h3 className="text-lg font-bold text-white mb-3">{module.title}</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {module.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="text-amber-400">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 p-6 bg-white/5 rounded-lg border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">📄 Seating Chart Module</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>✓ Generate hall-wise seating plans</li>
              <li>✓ Display register number and seat number</li>
              <li>✓ Download seating charts as PDF</li>
              <li>✓ Print-ready format for exam use</li>
            </ul>
          </div>
        </motion.div>

        {/* System Architecture */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">🏗 System Architecture</h2>
          
          {/* Architecture Image */}
          <div className="mb-8 rounded-xl overflow-hidden border-2 border-amber-500/50 shadow-2xl shadow-amber-500/20 max-w-2xl mx-auto">
            <img 
              src={archImage}
              alt="System Architecture Diagram" 
              className="w-full h-auto object-contain"
            />
          </div>

          <p className="text-gray-300 mb-6">The system follows a modular and layered architecture:</p>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10 text-center">
              <h3 className="text-lg font-bold text-amber-300 mb-2">Frontend</h3>
              <p className="text-gray-300 text-sm">Handles user interaction and display</p>
            </div>
            <div className="bg-white/5 rounded-lg p-6 border border-white/10 text-center">
              <h3 className="text-lg font-bold text-amber-300 mb-2">Backend</h3>
              <p className="text-gray-300 text-sm">Processes seating allocation logic</p>
            </div>
            <div className="bg-white/5 rounded-lg p-6 border border-white/10 text-center">
              <h3 className="text-lg font-bold text-amber-300 mb-2">Database</h3>
              <p className="text-gray-300 text-sm">Stores student, hall, and seating data</p>
            </div>
          </div>
          <p className="text-gray-300">This architecture ensures scalability, security, and easy maintenance.</p>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">🛠 Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-bold text-amber-300 mb-3">🌐 Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript'].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-amber-300 mb-3">⚙ Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['PHP'].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-amber-300 mb-3">🗄 Database</h3>
              <div className="flex flex-wrap gap-2">
                {['MySQL'].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* UI Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">🎨 User Interface Highlights</h2>
          
          {/* UI Image Placeholder */}
          <div className="mb-8 rounded-lg overflow-hidden border border-white/20">
            <div className="bg-gradient-to-br from-amber-900/30 to-slate-900/30 h-80 flex items-center justify-center">
                <img 
              src={archImage1}
              alt="System Architecture Diagram" 
              className="w-full h-auto object-cover"
              
            />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Simple and clean admin dashboard',
              'Step-by-step exam and hall setup',
              'Clear seating chart visualization',
              'Search and filter options',
              'Easy seat lookup for students',
              'Professional design and layout'
            ].map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <span className="text-gray-200">{highlight}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testing & Validation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">🧪 Testing & Validation</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {[
              'Hall capacity validation',
              'Duplicate seat prevention',
              'Department mixing verification',
              'Student login and seat lookup testing',
              'PDF generation testing',
              'Performance under load testing'
            ].map((test, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-200">{test}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-sm bg-white/5 rounded p-3">The system performed reliably without seat conflicts or data errors.</p>
        </motion.div>

        {/* Results & Impact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">📊 Results & Impact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-amber-300 mb-3">✅ Key Achievements</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Drastically reduced seating preparation time</li>
                <li>✓ Eliminated manual allocation errors</li>
                <li>✓ Improved exam hall discipline and organization</li>
                <li>✓ Easy and quick access to seating information for students</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-amber-300 mb-3">🚀 Future Enhancements</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Invigilator assignment for each hall</li>
                <li>✓ QR code-based hall entry verification</li>
                <li>✓ Real-time attendance tracking</li>
                <li>✓ Mobile-friendly student interface</li>
                <li>✓ Integration with exam timetable systems</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-4">🏁 Conclusion</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The Exam Hall Seating Management System provides a reliable and automated solution for managing exam seating arrangements. It improves efficiency, accuracy, and fairness while significantly reducing administrative effort during examinations.
          </p>
          <div className="bg-amber-500/20 border border-amber-500/30 rounded-lg p-4 mt-4">
            <p className="text-amber-200 text-sm"><strong>💼 Summary:</strong> Exam Hall Seating Management System – Developed a web-based application to automate student seating allocation using hall capacity and department-mixing logic, reducing manual errors and improving examination management efficiency.</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://exam.byethost12.com/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg flex items-center gap-2 transition-all"
          >
            Visit Live Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectDetailsPage1;
