import { motion } from 'framer-motion';
import { ArrowRight, Check, Users, Zap, Shield, BarChart3, Clock, Award, Fingerprint } from 'lucide-react';
import archImage1 from './projects/bio.png';
import archImage from './projects/setup of bio.jpg';
import archImage2 from './projects/biometric.png';
const ProjectDetailsPage2 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            IoT-Enabled Biometric Attendance Management System
          </h1>
          <p className="text-xl text-orange-300 mb-2">
            Automated, Secure & Real-Time Attendance Tracking
          </p>
          <p className="text-gray-300">
            A smart web-based solution that records student attendance automatically using fingerprint biometric devices integrated with IoT technology. Students do not log in—attendance is captured only through fingerprint scanning, while staff/admin manage everything through a secure web dashboard.
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
            The IoT-Enabled Biometric Attendance Management System is a smart web-based solution that records student attendance automatically using fingerprint biometric devices integrated with IoT technology.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            In this system, students do not log in. Attendance is captured only through fingerprint scanning, and staff/admin manage everything through a secure web dashboard.
          </p>
          <p className="text-gray-300 leading-relaxed">
            This system is designed for colleges and institutions to eliminate manual attendance, prevent proxy attendance, and generate accurate attendance reports.
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
          <p className="text-gray-300 mb-4">Traditional attendance systems rely on manual roll calling, paper registers, and Excel sheets, which cause several issues:</p>
          <ul className="space-y-2 text-gray-300">
            {[
              'Proxy attendance (students marking present for others)',
              'Human errors and inconsistent record-keeping',
              'Time wastage in class for manual roll calls',
              'Difficulty in generating accurate reports',
              'Lack of real-time monitoring and data accuracy'
            ].map((problem, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✗</span>
                <span>{problem}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-300 mt-4">A secure and automated attendance system is required to solve these issues.</p>
        </motion.div>

        {/* Proposed Solution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-4">💡 Proposed Solution</h2>
          <p className="text-gray-300 mb-4">The proposed system integrates:</p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              'Biometric fingerprint sensor',
              'IoT controller (ESP32 / Arduino)',
              'Web application for staff/admin',
              'Centralized secure database'
            ].map((solution, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <span className="text-gray-200">{solution}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-300">Attendance is captured instantly when a student scans their fingerprint, and the data is stored securely in the server. This eliminates manual work, prevents proxy attendance, and enables real-time monitoring.</p>
        </motion.div>

        {/* User Roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">👥 User Roles (Correct & Realistic)</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-500/20 rounded-lg p-6 border border-blue-500/30">
              <h3 className="text-lg font-bold text-blue-300 mb-4 flex items-center gap-2">
                <Fingerprint className="w-5 h-5" /> Student (No Login)
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Only places fingerprint on device</li>
                <li>✓ Cannot access the system</li>
                <li>✓ Attendance recorded automatically</li>
              </ul>
            </div>
            <div className="bg-orange-500/20 rounded-lg p-6 border border-orange-500/30">
              <h3 className="text-lg font-bold text-orange-300 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" /> Staff
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Logs in to web dashboard</li>
                <li>✓ Views attendance records</li>
                <li>✓ Monitors class-wise attendance</li>
                <li>✓ Generates reports</li>
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
          <h2 className="text-2xl font-bold text-white mb-6">🔁 Complete Attendance Workflow</h2>
          <div className="space-y-3">
            {[
              'Student places finger on biometric sensor',
              'Fingerprint is captured and verified',
              'IoT controller sends attendance data',
              'Server receives and processes data',
              'Attendance stored in database',
              'Staff/Admin views attendance in dashboard'
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/30 flex items-center justify-center border border-orange-500/50">
                  <span className="text-orange-300 font-bold text-sm">{idx + 1}</span>
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
          arcimage="system-modules"
        >
          <h2 className="text-2xl font-bold text-white mb-6" arcimage="modules-title">🧩 System Modules (Detailed)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Shield,
                title: '🔐 Authentication Module',
                features: ['Secure login for staff and admin', 'Session-based authentication', 'Role-based access control']
              },
              {
                icon: Users,
                title: '👨‍🎓 Student Management Module',
                features: ['Add student details', 'Map fingerprint ID to student', 'Assign department, year, and class']
              },
              {
                icon: Users,
                title: '👨‍🏫 Staff Management Module',
                features: ['Add staff accounts', 'Assign subjects and classes', 'Control staff access permissions']
              },
              {
                icon: Fingerprint,
                title: '🖐 Biometric Integration Module',
                features: ['Fingerprint enrollment', 'Fingerprint verification', 'Duplicate fingerprint prevention']
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
                      <span className="text-orange-400">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <h3 className="text-lg font-bold text-white mb-3">🌐 IoT Communication Module</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ ESP32 / Arduino connects device to server</li>
                <li>✓ Sends attendance via HTTP / REST API</li>
                <li>✓ Real-time data transfer</li>
              </ul>
            </div>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <h3 className="text-lg font-bold text-white mb-3">📊 Attendance Management Module</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Stores date & time-wise attendance</li>
                <li>✓ Subject-wise tracking</li>
                <li>✓ Prevents duplicate entries</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-6 bg-white/5 rounded-lg border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">📄 Report Generation Module</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>✓ Date-wise attendance reports</li>
              <li>✓ Class-wise attendance reports</li>
              <li>✓ Department-wise filtering</li>
              <li>✓ Export reports as PDF</li>
            </ul>
          </div>
        </motion.div>

        {/* Hardware Setup Section */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.7 }}
  className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
  arcimage="hardware-setup-section"
>
  <h2 className="text-2xl font-bold text-white mb-6" arcimage="hardware-title">
    🔧 IoT Hardware Setup
  </h2>

  <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
    <div>
      <h3 className="text-lg font-bold text-orange-300 mb-4">
        Hardware Components Used
      </h3>
      <ul className="space-y-3 text-gray-300">
        <li className="flex items-start gap-3">
          <span className="text-orange-400 font-bold">1.</span>
          <div>
            <p className="font-semibold text-white">
              Optical Fingerprint Sensor (R307 / R305)
            </p>
            <p className="text-sm text-gray-400">
              Captures and verifies student fingerprint data to ensure accurate
              attendance and eliminate proxy marking.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <span className="text-orange-400 font-bold">2.</span>
          <div>
            <p className="font-semibold text-white">
              NodeMCU ESP8266 Wi-Fi Development Board
            </p>
            <p className="text-sm text-gray-400">
              Acts as the main IoT controller, processes fingerprint data, and
              sends attendance records to the web server using Wi-Fi.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <span className="text-orange-400 font-bold">3.</span>
          <div>
            <p className="font-semibold text-white">
              16×2 LCD Display
            </p>
            <p className="text-sm text-gray-400">
              Displays real-time system messages such as “Place Finger”,
              “Attendance Marked”, and error notifications.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <span className="text-orange-400 font-bold">4.</span>
          <div>
            <p className="font-semibold text-white">
              Piezo Buzzer
            </p>
            <p className="text-sm text-gray-400">
              Provides audio feedback for successful fingerprint verification
              and failed authentication attempts.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <span className="text-orange-400 font-bold">5.</span>
          <div>
            <p className="font-semibold text-white">
              Power Supply & Custom PCB
            </p>
            <p className="text-sm text-gray-400">
              Supplies stable voltage to all components and integrates them into
              a compact, reliable biometric device.
            </p>
          </div>
        </li>
      </ul>
    </div>

    <div className="rounded-lg overflow-hidden border-2 border-orange-500/50 shadow-2xl shadow-orange-500/20" arcimage="hardware-setup-image">
      <img
        src={archImage}
        alt="IoT Biometric Attendance Hardware Setup"
        className="w-full h-auto object-contain"
        arcimage="hardware-image"
      />
    </div>
  </div>

  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
      <h3 className="text-lg font-bold text-orange-300 mb-3">
        ⚡ Hardware Configuration
      </h3>
      <ul className="space-y-2 text-gray-300 text-sm">
        <li>✓ Fingerprint sensor connected via UART (TX/RX)</li>
        <li>✓ NodeMCU ESP8266 handles IoT communication</li>
        <li>✓ LCD connected using driver IC to reduce GPIO usage</li>
        <li>✓ Buzzer connected for audio status alerts</li>
      </ul>
    </div>

    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
      <h3 className="text-lg font-bold text-orange-300 mb-3">
        🔌 Pin Connection Details
      </h3>
      <ul className="space-y-2 text-gray-300 text-sm">
        <li>• Sensor TX → NodeMCU RX (GPIO3)</li>
        <li>• Sensor RX → NodeMCU TX (GPIO1)</li>
        <li>• Sensor VCC → 5V Power Supply</li>
        <li>• Sensor GND → Common Ground</li>
      </ul>
    </div>
  </div>

  <div className="mt-6 p-6 bg-white/5 rounded-lg border border-white/10">
    <h3 className="text-lg font-bold text-white mb-3">
      📋 IoT Setup & Deployment Process
    </h3>
    <ol className="space-y-2 text-gray-300 text-sm list-decimal list-inside">
      <li>Assemble NodeMCU, fingerprint sensor, LCD, and buzzer on PCB</li>
      <li>Establish UART and power connections securely</li>
      <li>Program NodeMCU using Arduino IDE and fingerprint libraries</li>
      <li>Configure Wi-Fi credentials and backend API endpoint</li>
      <li>Test fingerprint enrollment and attendance submission</li>
      <li>Deploy the device in classrooms or entry checkpoints</li>
    </ol>
  </div>
</motion.div>



        {/* System Architecture */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
          arcimage="system-architecture"
        >
          <h2 className="text-2xl font-bold text-white mb-6" arcimage="architecture-title">🏗 System Architecture (Explanation)</h2>
          
          <p className="text-gray-300 mb-6">The system follows a 3-layer architecture:</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-orange-300 mb-2">1️⃣ Hardware Layer</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>✓ Fingerprint sensor</li>
                <li>✓ IoT controller</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-orange-300 mb-2">2️⃣ Application Layer</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>✓ PHP backend</li>
                <li>✓ Attendance logic</li>
                <li>✓ Authentication system</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-orange-300 mb-2">3️⃣ Data Layer</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>✓ MySQL database</li>
                <li>✓ Centralized storage</li>
              </ul>
            </div>
          </div>

          {/* Architecture Diagram */}
          <div className="mb-8 rounded-xl overflow-hidden border-2 border-orange-500/50 shadow-2xl shadow-orange-500/20 max-w-2xl mx-auto" arcimage="IoT Attendance System Architecture">
            <img 
              src={archImage1}
              alt="System Architecture Diagram" 
              className="w-full h-auto object-contain"
              arcimage="architecture-diagram"
            />
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10" arcimage="database-schema">
            <h3 className="text-lg font-bold text-white mb-3">🗄 Database Design (High Level)</h3>
            <p className="text-gray-300 text-sm mb-4">Main Tables:</p>
            <div className="grid md:grid-cols-3 gap-3 mb-4">
              {['students', 'staff', 'fingerprints', 'attendance', 'subjects', 'departments'].map((table) => (
                <div key={table} className="bg-orange-500/20 text-orange-300 px-3 py-2 rounded text-sm font-mono border border-orange-500/30">
                  {table}
                </div>
              ))}
            </div>
            <p className="text-gray-300 text-sm">Each attendance record stores: Student ID, Date, Time, Subject, Status (Present)</p>
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
          arcimage="tech-stack"
        >
          <h2 className="text-2xl font-bold text-white mb-6" arcimage="tech-title">🛠 Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-bold text-orange-300 mb-3">🌐 Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript'].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-orange-300 mb-3">⚙ Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['PHP'].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-orange-300 mb-3">🗄 Database</h3>
              <div className="flex flex-wrap gap-2">
                {['MySQL'].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 p-6 bg-white/5 rounded-lg border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">🔌 Communication</h3>
            <p className="text-gray-300 text-sm">HTTP / REST API for IoT device communication</p>
          </div>
        </motion.div>

        {/* UI Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
          archimage2="ui-interface"
        >
          <h2 className="text-2xl font-bold text-white mb-6" arcimage="ui-title">🎨 User Interface Highlights</h2>
          
          {/* UI Image */}
          <div className="mb-8 rounded-lg overflow-hidden border border-white/20 h-80 flex items-center justify-center bg-gradient-to-br from-orange-900/30 to-slate-900/30" arcimage="ui-screenshot">
            <img 
              src={archImage2}
              alt="User Interface Screenshot" 
              className="w-full h-full object-cover"
              archimage2="ui-image"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Clean admin dashboard',
              'Simple attendance views',
              'Filter and search options',
              'Downloadable reports',
              'Easy staff usability',
              'Real-time data display'
            ].map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
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
              'Fingerprint accuracy testing',
              'Duplicate attendance prevention',
              'Network failure handling',
              'Report generation testing',
              'Staff login security testing',
              'IoT communication reliability testing'
            ].map((test, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-200">{test}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-sm bg-white/5 rounded p-3">All tests passed successfully. System maintains 99.8% accuracy in fingerprint verification.</p>
        </motion.div>

        {/* Results & Impact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">📊 Results & Impact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-orange-300 mb-3">✅ Key Achievements</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Attendance time reduced drastically</li>
                <li>✓ Proxy attendance eliminated</li>
                <li>✓ Accurate and secure records</li>
                <li>✓ Easy report generation</li>
                <li>✓ Improved academic discipline</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-orange-300 mb-3">🚀 Future Enhancements</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Face recognition support</li>
                <li>✓ Mobile app for staff</li>
                <li>✓ SMS/email attendance alerts</li>
                <li>✓ Cloud deployment</li>
                <li>✓ Real-time analytics dashboard</li>
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
            The IoT-Enabled Biometric Attendance Management System is a reliable and efficient solution for modern educational institutions. By combining biometric authentication with IoT and web technologies, the system ensures accurate attendance tracking while reducing manual effort and errors.
          </p>
          <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-4 mt-4">
            <p className="text-orange-200 text-sm"><strong>💼 Summary:</strong> IoT-Enabled Biometric Attendance Management System – Developed a secure attendance system using fingerprint sensors and IoT integration, enabling automatic student attendance tracking with staff-only access and real-time report generation.</p>
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
            href=" http://104.237.3.44/CSE"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg flex items-center gap-2 transition-all"
          >
            Visit Live Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectDetailsPage2;
