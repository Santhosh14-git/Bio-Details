import { motion } from 'framer-motion';
import { ArrowRight, Check, FileText, Zap, Shield, BarChart3, Lock, AlertCircle } from 'lucide-react';
import out from './projects/outpass flow.png';
import out1 from './projects/outpass.jpg';

const ProjectDetailsPage6 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            College Outpass Management System
          </h1>
          <p className="text-xl text-slate-300 mb-2">
            Digital Permission System for Students
          </p>
          <p className="text-gray-300">
            A web-based application designed to digitize and automate the process of granting temporary permission for students to leave the college campus. It replaces the traditional paper-based outpass system with a secure, fast, and transparent digital solution.
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
            The College Outpass Management System is a web-based application designed to digitize and automate the process of granting temporary permission for students to leave the college campus. It replaces the traditional paper-based outpass system with a secure, fast, and transparent digital solution.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            The system helps students apply for outpass online and allows staff to review, approve, or reject requests efficiently, ensuring better control and accountability.
          </p>
          <p className="text-gray-300 leading-relaxed">
            This system is ideal for educational institutions seeking to modernize their administrative processes and improve campus security management.
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
          <p className="text-gray-300 leading-relaxed mb-4">In many colleges, outpass management is handled manually using paper slips or registers. This causes several significant issues:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Time-consuming approval process causing delays',
              'Excessive paper wastage and manual errors',
              'Difficulty in tracking student movement patterns',
              'High risk of misuse or fake permissions',
              'Heavy workload and burden on staff members',
              'Poor record-keeping and accountability'
            ].map((problem, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-1" />
                <span className="text-gray-200">{problem}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-300 leading-relaxed mt-6">
            <strong className="text-slate-300">Solution Required:</strong> A digital system is needed to improve efficiency, security, transparency, and accountability in the outpass management process.
          </p>
        </motion.div>

        {/* Proposed Solution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-4">💡 Proposed Solution</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The proposed Outpass Management System provides a comprehensive digital solution to replace manual outpass management. It streamlines the entire process from application to approval and tracking.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            <strong className="text-slate-300">Key Features:</strong>
          </p>
          <div className="space-y-3">
            {[
              'Online outpass application with detailed forms',
              'Staff approval workflow with notifications',
              'Real-time status tracking and updates',
              'Digital records for future reference and audits',
              'Secure and transparent permission process',
              'Complete outpass history and reports'
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-slate-400 flex-shrink-0 mt-1" />
                <span className="text-gray-200">{feature}</span>
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
          arcimage="outpass-user-roles-section"
        >
          <h2 className="text-2xl font-bold text-white mb-6" arcimage="outpass-roles-title">👥 User Roles & Permissions</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-slate-300 mb-4">👨‍🎓 Student</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-slate-400">✓</span>
                  <span>Login using registration number</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400">✓</span>
                  <span>Apply for outpass with reason and time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400">✓</span>
                  <span>View approval status (Pending / Approved / Rejected)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400">✓</span>
                  <span>Receive confirmation once approved</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400">✓</span>
                  <span>Download and print outpass proof</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-slate-300 mb-4">👨‍🏫 Staff / Warden</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-slate-400">✓</span>
                  <span>Login to staff dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400">✓</span>
                  <span>View all outpass requests</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400">✓</span>
                  <span>Approve or reject requests with remarks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400">✓</span>
                  <span>Monitor student outpass history</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400">✓</span>
                  <span>Generate reports and statistics</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-lg font-bold text-slate-300 mb-4">👨‍💼 Admin (Optional)</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-slate-400">✓</span>
                <span>Manage users (students and staff)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400">✓</span>
                <span>View reports and logs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400">✓</span>
                <span>Maintain system settings and configurations</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* System Flow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
          arcimage="outpass-system-flow"
        >
          <h2 className="text-2xl font-bold text-white mb-6" arcimage="outpass-flow-title">🔁 System Flow (End-to-End)</h2>
          
          <div className="space-y-3 mb-8">
            {[
              'Student logs into the system using registration number',
              'Student submits an outpass request with details',
              'Request is sent to staff/warden for review',
              'Staff reviews the request and student history',
              'Request is approved or rejected with remarks',
              'Student views updated outpass status in real-time',
              'Approved outpass is used for exit verification',
              'System maintains complete audit trail and records'
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-500/30 flex items-center justify-center border border-slate-500/50">
                  <span className="text-slate-300 font-bold text-sm">{idx + 1}</span>
                </div>
                <p className="text-gray-300 pt-1">{step}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">🏗 System Architecture </h3>
           <img
        src={out}
        alt=""
        className="w-full h-auto object-contain"
        arcimage="hardware-image"
      />

          </div>
        </motion.div>

        {/* System Modules */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
          arcimage="outpass-system-modules"
        >
          <h2 className="text-2xl font-bold text-white mb-6" arcimage="outpass-modules-title">🧩 System Modules</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-slate-300 mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5" /> 🔐 Authentication Module
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Secure login for students and staff</li>
                <li>✓ Role-based access control</li>
                <li>✓ Session management and security</li>
                <li>✓ Password encryption and validation</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-slate-300 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5" /> 📝 Outpass Request Module
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Online request form with validation</li>
                <li>✓ Reason, date, time, and destination entry</li>
                <li>✓ Attachment upload support</li>
                <li>✓ Request submission and confirmation</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-slate-300 mb-3">✅ Approval Module</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Staff can approve or reject requests</li>
                <li>✓ Optional remarks can be added</li>
                <li>✓ Notification system for students</li>
                <li>✓ Bulk approval/rejection capability</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-slate-300 mb-3">📊 Status & Tracking Module</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Real-time request status updates</li>
                <li>✓ Outpass history and logs</li>
                <li>✓ Status notifications and alerts</li>
                <li>✓ Digital outpass proof generation</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-slate-300 mb-3">📄 Reports Module</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Daily and monthly outpass reports</li>
                <li>✓ Student-wise and date-wise filtering</li>
                <li>✓ Export to PDF/Excel</li>
                <li>✓ Statistical analysis and graphs</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-slate-300 mb-3">📋 Admin Module</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ User management (add/edit/delete)</li>
                <li>✓ Role and permission assignment</li>
                <li>✓ System logs and audit trails</li>
                <li>✓ Configuration and settings management</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Technologies Used */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
          arcimage="outpass-tech-stack"
        >
          <h2 className="text-2xl font-bold text-white mb-6" arcimage="outpass-tech-title">🛠 Technologies Used</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold text-slate-300 mb-3">🧱 HTML</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div>✓ Structures login pages and forms</div>
                  <div>✓ Displays outpass details clearly</div>
                  <div>✓ Semantic markup for accessibility</div>
                  <div>✓ Form elements and input validation</div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold text-slate-300 mb-3">🎨 CSS</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div>✓ Styles the user interface</div>
                  <div>✓ Makes the system user-friendly</div>
                  <div>✓ Responsive design for all devices</div>
                  <div>✓ Professional color schemes and layouts</div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold text-slate-300 mb-3">⚙️ JavaScript</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div>✓ Handles form validation</div>
                  <div>✓ Updates status dynamically</div>
                  <div>✓ Client-side error handling</div>
                  <div>✓ AJAX for seamless data updates</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold text-slate-300 mb-3">🖥️ PHP</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div>✓ Backend processing and logic</div>
                  <div>✓ Handles approvals and data storage</div>
                  <div>✓ User authentication and authorization</div>
                  <div>✓ Report generation and data queries</div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold text-slate-300 mb-3">🗄️ Database (MySQL)</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div>✓ Stores student data and outpass records</div>
                  <div>✓ Maintains approval history</div>
                  <div>✓ Secure data persistence</div>
                  <div>✓ Query optimization for performance</div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold text-slate-300 mb-3">🔄 JSON</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div>✓ Data exchange between frontend and backend</div>
                  <div>✓ API response formatting</div>
                  <div>✓ Lightweight data transfer</div>
                  <div>✓ Easy parsing and validation</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div>
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">🎨 User Interface Highlights</h3>
            <img
        src={out1}
        alt=""
        className="w-full h-auto object-contain"
        arcimage="hardware-image"
      />
              
            
          </div>
        </motion.div>

        {/* Testing & Validation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">🧪 Testing & Validation</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-300 mb-4">✅ Functional Tests</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Login authentication verified
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Outpass request submission tested
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Approval and rejection flow checked
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Status updates accurate
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-300 mb-4">✅ Performance Tests</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> No data loss during operations
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Database queries optimized
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> System handled multiple concurrent users
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Smooth and responsive interface
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-slate-500/20 border border-slate-500/30 rounded-lg p-4">
            <p className="text-slate-200 text-sm"><strong>Result:</strong> The system worked smoothly without data loss, with secure authentication, accurate status tracking, and efficient approval workflows.</p>
          </div>
        </motion.div>

        {/* Results & Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95 }}
          className="bg-gradient-to-r from-slate-500/20 to-slate-600/20 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">📊 Results & Impact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-slate-300 mb-3">✅ Key Benefits</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Reduced paper usage significantly</li>
                <li>✓ Faster approval process</li>
                <li>✓ Better student tracking and accountability</li>
                <li>✓ Improved staff efficiency</li>
                <li>✓ Secure digital records with audit trails</li>
                <li>✓ 24/7 access to outpass status</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-300 mb-3">🚀 Use Cases</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Residential college outpass management</li>
                <li>✓ Day scholar permission tracking</li>
                <li>✓ Emergency leave requests</li>
                <li>✓ Internship and external program approval</li>
                <li>✓ Medical leave and special permissions</li>
                <li>✓ Campus security and access control</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Future Enhancements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">🚀 Future Enhancements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'QR code-based outpass verification at gates',
              'Mobile application support for iOS and Android',
              'Parent notification system for approval status',
              'Biometric exit verification at campus gates',
              'SMS/email alerts for outpass reminders',
              'Integration with attendance tracking system',
              'Geofencing for location-based verification',
              'Machine learning for risk assessment'
            ].map((enhancement, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-slate-400">→</span>
                <span className="text-gray-200">{enhancement}</span>
              </div>
            ))}
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
            The College Outpass Management System provides a reliable and efficient way to manage student outpass requests digitally. It saves time, improves security, and enhances administrative control over student movements on campus.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            By replacing the manual paper-based system with this web-based solution, colleges can achieve better accountability, faster processing, and comprehensive digital records for future audits and analysis.
          </p>
          <div className="bg-slate-500/20 border border-slate-500/30 rounded-lg p-4 mt-4">
            <p className="text-slate-200 text-sm"><strong>💼 Summary:</strong> College Outpass Management System – Developed a web-based application to digitize student outpass requests and approvals using HTML, CSS, JavaScript, PHP, and MySQL, improving administrative efficiency and campus security.</p>
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
            href="#demo"
            className="group px-8 py-4 bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-lg flex items-center gap-2 transition-all"
          >
            View Project Details
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectDetailsPage6;
