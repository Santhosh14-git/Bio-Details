import { motion } from 'framer-motion';
import { ArrowRight, Check, MapPin, Zap, Shield, BarChart3, Wifi, AlertCircle } from 'lucide-react';
import Bus from './projects/bus track flow.png';
import Bus1 from './projects/bus.png';

const ProjectDetailsPage5 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Bus Tracking System
          </h1>
          <p className="text-xl text-orange-300 mb-2">
            Real-Time GPS-Based Bus Monitoring System
          </p>
          <p className="text-gray-300">
            A web-based application that tracks and displays the real-time location and operational status of college buses using GPS devices. The system continuously collects location data and sends it to a central server for live dashboard monitoring and improved transport efficiency.
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
            The Bus Tracking System is a web-based application that tracks and displays the real-time location and operational status of college buses using GPS devices installed in each bus. The system continuously collects location data and sends it to a central server, where it is processed and displayed on a live dashboard.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            This system helps students and transport administrators monitor bus movement, reduce waiting time, and improve transport scheduling by providing complete visibility of bus locations and operational status.
          </p>
          <p className="text-gray-300 leading-relaxed">
            This system is ideal for educational institutions, corporate campuses, and public transportation systems where real-time bus monitoring is essential.
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
          <p className="text-gray-300 leading-relaxed mb-4">College transportation systems face several significant challenges:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Students do not know the real-time location of buses',
              'Delays cause confusion and long waiting times',
              'Manual tracking is inefficient and error-prone',
              'No visibility of bus speed or running status',
              'Difficulty managing multiple buses effectively',
              'Lack of transparency in transport operations'
            ].map((problem, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <span className="text-gray-200">{problem}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-300 leading-relaxed mt-6">
            <strong className="text-orange-300">Solution Required:</strong> A real-time GPS-based tracking system is needed to improve transparency, reduce student waiting time, and enhance overall transport efficiency.
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
            The proposed system uses GPS devices mounted in buses to capture real-time location data. This data is transmitted to a web server, processed using backend technologies, and displayed through a user-friendly web interface.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            <strong className="text-orange-300">Dashboard shows:</strong>
          </p>
          <div className="space-y-3">
            {[
              'Bus location (Latitude & Longitude)',
              'Current speed and movement status',
              'Running or stopped status indicators',
              'Last updated date and time',
              'Total buses and operational summary',
              'Detailed bus information and history'
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
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
          arcimage="bus-user-roles-section"
        >
          <h2 className="text-2xl font-bold text-white mb-6" arcimage="bus-roles-title">👥 User Roles & Permissions</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-orange-300 mb-4">👨‍💼 Administrator</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400">✓</span>
                  <span>Monitor all buses from a single dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400">✓</span>
                  <span>View running and stopped buses in real-time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400">✓</span>
                  <span>Check speed and last updated timestamps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400">✓</span>
                  <span>Access detailed bus information and history</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400">✓</span>
                  <span>Manage bus routes and scheduling</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-orange-300 mb-4">👨‍🎓 Students</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400">✓</span>
                  <span>View bus location and status in real-time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400">✓</span>
                  <span>Plan arrival time effectively based on bus location</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400">✓</span>
                  <span>Check bus speed and estimated arrival time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400">✓</span>
                  <span>No login required - read-only access available</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400">✓</span>
                  <span>Simple and intuitive interface for easy navigation</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* System Flow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
          arcimage="bus-system-flow"
        >
          <h2 className="text-2xl font-bold text-white mb-6" arcimage="bus-flow-title">🔁 System Flow (End-to-End)</h2>
          
          <div className="space-y-3 mb-8">
            {[
              'GPS device installed in the bus collects location data',
              'Location data is converted into JSON format',
              'Data is transmitted to the server via internet',
              'PHP processes and validates the data',
              'Data is stored in the database with timestamp',
              'Website fetches updated data using JavaScript',
              'Dashboard displays live bus information in real-time',
              'Updates refresh automatically without page reload'
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/30 flex items-center justify-center border border-orange-500/50">
                  <span className="text-orange-300 font-bold text-sm">{idx + 1}</span>
                </div>
                <p className="text-gray-300 pt-1">{step}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">🏗 System Architecture </h3>
            <img
        src={Bus}
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
          arcimage="bus-system-modules"
        >
          <h2 className="text-2xl font-bold text-white mb-6" arcimage="bus-modules-title">🧩 System Modules</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-orange-300 mb-3">📡 GPS Tracking Module</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Uses GPS device to obtain latitude and longitude</li>
                <li>✓ Tracks speed and movement status</li>
                <li>✓ Records timestamp for each update</li>
                <li>✓ Handles data transmission to server</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-orange-300 mb-3">🌐 Web Dashboard Module</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Displays all bus details in real-time</li>
                <li>✓ Shows total buses, running and stopped counts</li>
                <li>✓ Provides bus location on interactive interface</li>
                <li>✓ Responsive design for all devices</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-orange-300 mb-3">⏱ Status Monitoring Module</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Displays real-time speed information</li>
                <li>✓ Indicates running or stopped status</li>
                <li>✓ Shows last updated timestamp</li>
                <li>✓ Alerts on status changes</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-orange-300 mb-3">🔄 Data Communication Module</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Uses JSON for data exchange format</li>
                <li>✓ Ensures fast and reliable communication</li>
                <li>✓ Handles API requests and responses</li>
                <li>✓ Manages data synchronization</li>
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
          arcimage="bus-tech-stack"
        >
          <h2 className="text-2xl font-bold text-white mb-6" arcimage="bus-tech-title">🛠 Technologies Used (Detailed)</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold text-orange-300 mb-3">📍 GPS Device</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div>✓ Installed inside each bus</div>
                  <div>✓ Collects real-time location (latitude & longitude)</div>
                  <div>✓ Measures speed and movement patterns</div>
                  <div>✓ Transmits data over mobile/internet connection</div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold text-orange-300 mb-3">🎨 CSS</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div>✓ Styles the dashboard layout</div>
                  <div>✓ Provides color-coded status indicators</div>
                  <div>✓ Ensures responsive and clean user interface</div>
                  <div>✓ Creates professional visual design</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold text-orange-300 mb-3">🧱 HTML</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div>✓ Builds the structure of the bus tracking website</div>
                  <div>✓ Displays bus cards and status labels</div>
                  <div>✓ Organizes information hierarchy</div>
                  <div>✓ Ensures semantic and accessible markup</div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold text-orange-300 mb-3">⚙ JavaScript</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div>✓ Fetches real-time bus data from server</div>
                  <div>✓ Updates bus status dynamically without page reload</div>
                  <div>✓ Handles live dashboard refresh intervals</div>
                  <div>✓ Manages user interactions and events</div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-orange-300 mb-3">🖥 PHP</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <div>✓ Acts as the backend server</div>
                <div>✓ Receives GPS data from bus devices</div>
                <div>✓ Processes and validates bus information</div>
                <div>✓ Sends data to frontend for display</div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-orange-300 mb-3">🔄 JSON</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <div>✓ Used for sending GPS data from device to server</div>
                <div>✓ Transfers data between backend and frontend</div>
                <div>✓ Ensures efficient and lightweight data exchange</div>
                <div>✓ Enables easy data parsing and validation</div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div>
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">🎨 User Interface Highlights</h3>
            <img
        src={Bus1}
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
              <h3 className="text-lg font-bold text-orange-300 mb-4">✅ Test Results</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> GPS data accuracy verification
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Real-time updates functioning correctly
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Speed and status calculation accuracy
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Dashboard loading performance
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-orange-300 mb-4">✅ Performance Metrics</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Update frequency: Every 5-10 seconds
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Server response time: &lt;100ms
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Dashboard refresh smooth and responsive
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Multi-bus handling with 50+ buses
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-4">
            <p className="text-orange-200 text-sm"><strong>Result:</strong> The system performed reliably with accurate GPS tracking, smooth real-time updates, and a responsive dashboard that efficiently handles multiple buses.</p>
          </div>
        </motion.div>

        {/* Results & Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95 }}
          className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">📊 Results & Impact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-orange-300 mb-3">✅ Key Benefits</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Reduced student waiting time significantly</li>
                <li>✓ Improved transport coordination and efficiency</li>
                <li>✓ Easy tracking and management of multiple buses</li>
                <li>✓ Better planning and transparency for all users</li>
                <li>✓ Real-time visibility of bus operations</li>
                <li>✓ Enhanced student satisfaction and convenience</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-orange-300 mb-3">🚀 Use Cases</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ College and university campus transportation</li>
                <li>✓ Corporate employee shuttle management</li>
                <li>✓ School bus tracking for safety</li>
                <li>✓ Public transportation monitoring</li>
                <li>✓ Tourism and charter bus management</li>
                <li>✓ Emergency and rescue vehicle tracking</li>
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
              'Google Maps live route integration for detailed tracking',
              'Bus arrival time prediction using machine learning',
              'Mobile application support for iOS and Android',
              'Push notifications to students about bus arrival',
              'Driver behavior monitoring and analytics',
              'Historical trip data and analytics dashboard',
              'Integration with college attendance system',
              'SMS alerts for delayed or diverted buses'
            ].map((enhancement, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-orange-400">→</span>
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
            The Bus Tracking System provides an efficient and reliable solution for real-time monitoring of college buses. By using GPS and web technologies (HTML, CSS, JavaScript, PHP, and JSON), it enhances student convenience and improves transportation management across the institution.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            The system successfully demonstrates the effective integration of GPS hardware with web technologies to solve real-world transportation challenges. It can be further enhanced with advanced features like machine learning predictions, mobile app support, and comprehensive analytics.
          </p>
          <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-4 mt-4">
            <p className="text-orange-200 text-sm"><strong>💼Summary:</strong> Bus Tracking System – Designed and developed a GPS-based web application using HTML, CSS, JavaScript, PHP, and JSON to track real-time bus location and status, improving transport efficiency and student convenience.</p>
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
            className="group px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg flex items-center gap-2 transition-all"
          >
            View Project Details
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectDetailsPage5;
