import { motion } from 'framer-motion';
import { ArrowRight, Check, Users, Zap, Shield, BarChart3, Clock, Award } from 'lucide-react';
import archImage from './projects/online-test-architecture.png';
import archImage1 from './projects/online test.png';
const ProjectDetailsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Smart Online Test & Evaluation System
          </h1>
          <p className="text-xl text-blue-300 mb-2">
            Secure and Automated Assessment Platform
          </p>
          <p className="text-gray-300">
            A comprehensive web-based examination platform designed to conduct online tests securely and efficiently with automated evaluation, instant results, and role-based access.
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
          <p className="text-gray-300 leading-relaxed">
            The Smart Online Test and Evaluation System replaces traditional paper-based exams by providing automated evaluation, instant results, and role-based access for teachers and students. This system is especially useful for remote learning, internal assessments, and training evaluations.
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
          <p className="text-gray-300 mb-4">Traditional examination methods involve:</p>
          <ul className="space-y-2 text-gray-300">
            {[
              '✗ Manual question paper preparation',
              '✗ Physical exam conduction',
              '✗ Time-consuming answer evaluation',
              '✗ Human errors in result calculation',
              '✗ Difficulty in conducting remote exams'
            ].map((problem, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-red-400 font-bold">•</span>
                <span>{problem.replace('✗ ', '')}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Proposed Solution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-4">💡 Proposed Solution</h2>
          <p className="text-gray-300 mb-4">The system provides a centralized online platform where:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              '✓ Teachers can create and manage exams',
              '✓ Students can attend exams from anywhere',
              '✓ Answers are evaluated automatically',
              '✓ Results are generated instantly and accurately'
            ].map((solution, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-200">{solution.replace('✓ ', '')}</span>
              </div>
            ))}
          </div>
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
            <div className="bg-blue-500/20 rounded-lg p-6 border border-blue-500/30">
              <h3 className="text-lg font-bold text-blue-300 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" /> Administrator (Teacher)
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Secure login to admin dashboard</li>
                <li>✓ Create exams with subject, duration, marks</li>
                <li>✓ Add MCQ questions with correct answers</li>
                <li>✓ Activate or deactivate exams</li>
                <li>✓ Monitor student participation</li>
                <li>✓ View detailed results and performance reports</li>
              </ul>
            </div>
            <div className="bg-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-cyan-300 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5" /> Student
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Register and log in securely</li>
                <li>✓ View list of available exams</li>
                <li>✓ Attend exams within specified time</li>
                <li>✓ Answer MCQ questions one by one</li>
                <li>✓ Auto-submit on time completion</li>
                <li>✓ View results immediately after submission</li>
              </ul>
            </div>
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
                features: ['Role-based login', 'Secure sessions', 'Session expiration', 'Unauthorized access prevention']
              },
              {
                icon: Zap,
                title: '🧠 Admin Module',
                features: ['Exam creation', 'Question management', 'Result monitoring', 'Performance analysis']
              },
              {
                icon: Clock,
                title: '📝 Student Module',
                features: ['Exam selection', 'Timer-based interface', 'Auto-submission', 'Result viewing']
              },
              {
                icon: BarChart3,
                title: '📊 Evaluation Module',
                features: ['Automatic grading', 'Result calculation', 'Performance metrics', 'Report generation']
              }
            ].map((module, idx) => (
              <div key={idx} className="bg-blue-500/10 rounded-lg p-5 border border-blue-500/20">
                <h3 className="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">
                  <module.icon className="w-5 h-5" /> {module.title}
                </h3>
                <ul className="space-y-2">
                  {module.features.map((feature, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                      <span className="text-blue-400">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* System Architecture with Image Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">🏗 System Architecture</h2>
          
          {/* Main Image Area */}
          <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-lg overflow-hidden border-2 border-blue-500/30 mb-6">
            <img 
              src={archImage}
              alt="System Architecture Diagram" 
              className="w-full h-auto object-cover"
              
            />
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed">
            The system follows a layered architecture design that improves security, scalability, and maintainability. Frontend handles user interaction, Backend processes logic and validation, and Database stores user, exam, and result data.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">🛠 Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-bold text-blue-300 mb-3">🌐 Frontend</h3>
              <div className="space-y-2">
                {['HTML', 'CSS', 'JavaScript'].map((tech) => (
                  <span key={tech} className="block px-3 py-2 bg-blue-500/20 text-blue-200 rounded-lg text-sm border border-blue-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-purple-300 mb-3">⚙ Backend</h3>
              <div className="space-y-2">
                {['PHP'].map((tech) => (
                  <span key={tech} className="block px-3 py-2 bg-purple-500/20 text-purple-200 rounded-lg text-sm border border-purple-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-cyan-300 mb-3">🗄 Database</h3>
              <div className="space-y-2">
                {['MySQL'].map((tech) => (
                  <span key={tech} className="block px-3 py-2 bg-cyan-500/20 text-cyan-200 rounded-lg text-sm border border-cyan-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* UI Highlights with Image Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">🎨 User Interface Highlights</h2>
          
          {/* UI Image - Full Width */}
          <div className="mb-8 rounded-xl overflow-hidden border-2 border-blue-500/50 shadow-2xl shadow-blue-500/20">
            <img 
              src={archImage1}
              alt="User Interface Screenshot" 
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {[
              '✓ Clean and simple dashboard design',
              '✓ Easy navigation for admin and student',
              '✓ Timer display during exams',
              '✓ Clear result presentation',
              '✓ Mobile-friendly UI',
              '✓ Browser-compatible design'
            ].map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-200">{highlight.replace('✓ ', '')}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testing & Validation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-4">🧪 Testing & Validation</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              '✓ Login and authentication testing',
              '✓ Exam creation and validation testing',
              '✓ Timer and auto-submit testing',
              '✓ Result accuracy testing',
              '✓ Cross-browser compatibility testing',
              '✓ All modules performed reliably'
            ].map((test, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-200">{test.replace('✓ ', '')}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Results & Impact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">📊 Results & Impact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              {[
                '✓ Reduced manual exam effort',
                '✓ Faster and error-free evaluation',
                '✓ Improved user experience',
                '✓ Successfully tested in real college environment'
              ].map((impact, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-200">{impact.replace('✓ ', '')}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                { metric: '100+', desc: 'Exams Created' },
                { metric: '500+', desc: 'Students Assessed' },
                { metric: '98%', desc: 'Accuracy Rate' }
                
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-blue-300">{stat.metric}</div>
                  <p className="text-gray-400 text-sm">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Future Enhancements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-4">🚀 Future Enhancements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              '🎯 Descriptive answer evaluation',
              '🎬 Image/audio-based questions',
              '📥 PDF result downloads',
              '📧 Email notifications',
              '📈 Performance analytics and charts',
              '🔒 Advanced proctoring features'
            ].map((enhancement, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg">
                <span className="text-blue-400 font-bold">•</span>
                <span className="text-gray-200">{enhancement.substring(2)}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-md rounded-xl p-8 mb-8 border border-blue-500/30"
        >
          <h2 className="text-2xl font-bold text-white mb-4">🏁 Conclusion</h2>
          <p className="text-gray-300 leading-relaxed">
            The Smart Online Test and Evaluation System provides a reliable and efficient solution for conducting online exams. By automating evaluation and result generation, it saves time, ensures accuracy, and supports modern digital education needs. This platform has successfully demonstrated its effectiveness in real-world college environments and continues to improve the way educational institutions conduct assessments.
          </p>
          <div className="bg-amber-500/20 border border-amber-500/30 rounded-lg p-4 mt-4">
            <p className="text-amber-200 text-sm"><strong>💼 Summary:</strong> Smart Online Test and Evaluation System
Designed and developed a secure online examination system with automated evaluation, role-based access, and real-time result generation. Created complete system architecture, use cases, and UI flow as part of the final year project.</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center mt-12"
        >
          <a
            href="http://exam.byethost4.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg flex items-center gap-2 transition-all"
          >
            Visit Live Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectDetailsPage;
