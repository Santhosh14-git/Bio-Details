import { motion } from 'framer-motion';
import { ArrowRight, Check, Phone, Zap, Shield, BarChart3, Wifi, AlertCircle } from 'lucide-react';
import waterImage1 from './projects/motor contoll.jpg';
import waterImage2 from './projects/motor control flow.png';

const ProjectDetailsPage4 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            IoT-Based Water Motor Controller
          </h1>
          <p className="text-xl text-blue-300 mb-2">
            Remote ON/OFF Control Using GSM Call
          </p>
          <p className="text-gray-300">
            A hardware-based remote control system designed to turn a water motor ON or OFF using a phone call. The system uses a GSM module to receive incoming calls and a relay circuit to control the motor, helping users control water motors remotely and reduce water wastage.
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
            The IoT-Based Water Motor Controller is a hardware-based remote control system designed to turn a water motor ON or OFF using a phone call. The system uses a GSM module to receive incoming calls and a relay circuit to control the motor.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            This project helps users control water motors remotely, reducing water wastage, saving electricity, and eliminating the need for physical presence near the motor.
          </p>
          <p className="text-gray-300 leading-relaxed">
            This system is ideal for agricultural fields, households, apartment complexes, and industrial water management applications.
          </p>
        </motion.div>

        {/* Project Goal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-4">🎯 Project Goal</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Control a water motor remotely',
              'Turn the motor ON or OFF using a phone call',
              'Avoid manual switching and physical presence',
              'Improve water usage efficiency',
              'Support farmers, homes, and industries',
              'Reduce electricity consumption'
            ].map((goal, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-200">{goal}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Working Principle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-4">🧠 Working Principle (Simple Explanation)</h2>
          <div className="space-y-3">
            {[
              'User makes a phone call to the GSM module',
              'GSM module detects the incoming call signal',
              'Microcontroller processes the call signal',
              'Logic decides to activate or deactivate relay',
              'Relay switches water motor ON or OFF',
              'Status is indicated using LED indicators'
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center border border-blue-500/50">
                  <span className="text-blue-300 font-bold text-sm">{idx + 1}</span>
                </div>
                <p className="text-gray-300 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hardware Components */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
          arcimage="gsm-hardware-components-section"
        >
          <h2 className="text-2xl font-bold text-white mb-6" arcimage="gsm-hardware-title">🧩 Hardware Components (Detailed)</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">
                  <Phone className="w-5 h-5" /> 1️⃣ GSM Module (SIM800 / SIM900)
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li><strong className="text-white">Function:</strong> Communication gateway for phone calls</li>
                  <li><strong className="text-white">Key Features:</strong></li>
                  <li className="ml-4">✓ Receives incoming phone calls</li>
                  <li className="ml-4">✓ Communicates with microcontroller via serial</li>
                  <li className="ml-4">✓ Works with standard SIM card</li>
                  <li className="ml-4">✓ Acts as communication interface</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5" /> 2️⃣ Microcontroller (ATmega / PIC / Arduino)
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li><strong className="text-white">Function:</strong> Main control unit</li>
                  <li><strong className="text-white">Responsibilities:</strong></li>
                  <li className="ml-4">• Acts as the main processing unit</li>
                  <li className="ml-4">• Detects call signals from GSM module</li>
                  <li className="ml-4">• Decides ON/OFF logic</li>
                  <li className="ml-4">• Controls relay operation</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold text-blue-300 mb-3">⚡ 3️⃣ Relay Module</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li><strong className="text-white">Purpose:</strong> Switch high-voltage AC motor</li>
                  <li><strong className="text-white">Benefits:</strong></li>
                  <li className="ml-4">✓ Electrically isolates motor from controller</li>
                  <li className="ml-4">✓ Safely handles high-voltage AC power</li>
                  <li className="ml-4">✓ Protects controller circuit</li>
                  <li className="ml-4">✓ Enables remote motor switching</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold text-blue-300 mb-3">💡 4️⃣ LEDs (Status Indicators)</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li><strong className="text-white">Color Coding:</strong></li>
                  <li className="ml-4">🔴 Red LED → Motor OFF</li>
                  <li className="ml-4">🟢 Green LED → Motor ON</li>
                  <li><strong className="text-white">Benefit:</strong> Instant visual feedback for motor status</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-blue-300 mb-3">💧 5️⃣ Water Motor (Load)</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ AC motor for pumping water</li>
                <li>✓ Controlled through relay switching</li>
                <li>✓ Can be single or three-phase</li>
                <li>✓ Rated for continuous operation</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-blue-300 mb-3">⚙️ 6️⃣ Power Supply Circuit</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Step-down transformer (AC to AC)</li>
                <li>✓ Rectifier circuit (AC to DC conversion)</li>
                <li>✓ Filter and voltage regulator</li>
                <li>✓ Provides regulated DC power</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-lg font-bold text-blue-300 mb-3">🔌 7️⃣ Supporting Components</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>✓ Resistors for current limiting and signal conditioning</li>
              <li>✓ Capacitors for noise filtering and signal stabilization</li>
              <li>✓ Crystal oscillator for microcontroller timing</li>
              <li>✓ Diodes for protection and rectification</li>
            </ul>
          </div>
        </motion.div>

        {/* System Architecture */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
          arcimage="gsm-system-architecture"
        >
          <h2 className="text-2xl font-bold text-white mb-6" arcimage="gsm-architecture-title">🏗 System Architecture & Use Case Flow</h2>
          
          <p className="text-gray-300 mb-6">The system follows a simple call-based control architecture:</p>
          
          <div className="bg-white/5 rounded-lg p-6 border border-white/10 mb-8">
            
            <img
        src={waterImage2}
        alt=""
        className="w-full h-auto object-contain"
        arcimage="hardware-image"
      />
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">🎯 Use Case Flow</h3>
            <ol className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-4">
                <span className="bg-blue-500/30 px-3 py-1 rounded font-bold text-blue-300 text-xs flex-shrink-0">1</span>
                <span><strong className="text-white">User Action:</strong> User dials the GSM module phone number</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-blue-500/30 px-3 py-1 rounded font-bold text-blue-300 text-xs flex-shrink-0">2</span>
                <span><strong className="text-white">GSM Detection:</strong> GSM module receives and processes the call</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-blue-500/30 px-3 py-1 rounded font-bold text-blue-300 text-xs flex-shrink-0">3</span>
                <span><strong className="text-white">Verification:</strong> Microcontroller verifies the incoming call signal</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-blue-500/30 px-3 py-1 rounded font-bold text-blue-300 text-xs flex-shrink-0">4</span>
                <span><strong className="text-white">Logic Decision:</strong> If motor OFF → turn ON | If motor ON → turn OFF</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-blue-500/30 px-3 py-1 rounded font-bold text-blue-300 text-xs flex-shrink-0">5</span>
                <span><strong className="text-white">Relay Switch:</strong> Relay switches motor state (ON/OFF)</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-blue-500/30 px-3 py-1 rounded font-bold text-blue-300 text-xs flex-shrink-0">6</span>
                <span><strong className="text-white">Status Feedback:</strong> LED shows motor status immediately</span>
              </li>
            </ol>
          </div>
        </motion.div>

        {/* Hardware Setup */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
          arcimage="gsm-hardware-setup-section"
        >
          <h2 className="text-2xl font-bold text-white mb-6" arcimage="gsm-hardware-title">🔧 Hardware Setup & Circuit Configuration</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h3 className="text-lg font-bold text-blue-300 mb-4">Circuit Assembly Steps</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">1.</span>
                  <div>
                    <p className="font-semibold text-white">GSM Module Connection</p>
                    <p className="text-sm text-gray-400">Connect GSM module TX/RX to microcontroller serial pins</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">2.</span>
                  <div>
                    <p className="font-semibold text-white">Relay Circuit Assembly</p>
                    <p className="text-sm text-gray-400">Assemble relay driver circuit with transistor and diode protection</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">3.</span>
                  <div>
                    <p className="font-semibold text-white">Motor Power Connection</p>
                    <p className="text-sm text-gray-400">Connect AC motor through relay contacts for safe switching</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">4.</span>
                  <div>
                    <p className="font-semibold text-white">LED Indicator Panel</p>
                    <p className="text-sm text-gray-400">Connect status LEDs to microcontroller GPIO pins</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-lg overflow-hidden border-2 border-blue-500/50 shadow-2xl shadow-blue-500/20" arcimage="gsm-hardware-setup-image">
              <img 
                src={waterImage1}
                alt="Water Motor Controller Hardware Setup" 
                className="w-full h-auto object-contain"
                arcimage="gsm-hardware-image"
              />
              <p className="text-center text-gray-400 text-xs p-2 bg-black/20">[GSM Module and Relay Circuit Assembly]</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-blue-300 mb-3">📱 GSM Module Pin Configuration</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><strong>VCC:</strong> +5V Power Supply</li>
                <li><strong>GND:</strong> Ground Connection</li>
                <li><strong>TX:</strong> Transmit to Microcontroller RX</li>
                <li><strong>RX:</strong> Receive from Microcontroller TX</li>
                <li><strong>RST:</strong> Reset pin (optional)</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-blue-300 mb-3">🔌 Relay Circuit Connection</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Microcontroller GPIO → Base of NPN Transistor</li>
                <li>• Transistor Collector → Relay Coil</li>
                <li>• Relay Coil → +12V Power Supply</li>
                <li>• Diode across relay coil for protection</li>
                <li>• Relay Contacts → AC Motor Power</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-6 bg-white/5 rounded-lg border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">📋 Installation & Testing Steps</h3>
            <ol className="space-y-2 text-gray-300 text-sm list-decimal list-inside">
              <li>Assemble power supply circuit and verify regulated DC output</li>
              <li>Mount GSM module and connect to microcontroller via serial</li>
              <li>Build relay driver circuit with proper components</li>
              <li>Connect relay output to AC motor power circuit</li>
              <li>Connect LEDs to microcontroller GPIO pins</li>
              <li>Load firmware with phone call detection algorithm</li>
              <li>Insert SIM card in GSM module and verify signal strength</li>
              <li>Test by calling the GSM module number and verify motor ON/OFF</li>
            </ol>
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
          arcimage="gsm-tech-stack"
        >
          <h2 className="text-2xl font-bold text-white mb-6" arcimage="gsm-tech-title">🛠 Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold text-blue-300 mb-3">⚙️ Hardware</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div>✓ GSM Module (SIM800 / SIM900)</div>
                  <div>✓ Microcontroller (ATmega328 / PIC18)</div>
                  <div>✓ Relay Module (12V / 5V coil)</div>
                  <div>✓ AC Water Motor</div>
                  <div>✓ Transistor (NPN - BC547/2N2222)</div>
                  <div>✓ Protective Diodes</div>
                  <div>✓ LEDs, Resistors, Capacitors</div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold text-blue-300 mb-3">🔌 Communication</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div>✓ GSM Network (Phone Call Based)</div>
                  <div>✓ Serial Communication (UART)</div>
                  <div>✓ AT Commands Protocol</div>
                  <div>✓ Call Detection Signals</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold text-blue-300 mb-3">💻 Firmware & Software</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div>✓ Arduino IDE / MPLAB Programming</div>
                  <div>✓ C/C++ for Microcontroller</div>
                  <div>✓ GSM AT Commands Library</div>
                  <div>✓ Call Signal Detection Algorithm</div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold text-blue-300 mb-3">📊 Control Logic</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div>✓ Call Detection & Processing</div>
                  <div>✓ Toggle Motor ON/OFF Logic</div>
                  <div>✓ Status Indication System</div>
                  <div>✓ Error Handling & Protection</div>
                </div>
              </div>
            </div>
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
              <h3 className="text-lg font-bold text-blue-300 mb-4">✅ Test Results</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Incoming call detection
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Relay switching accuracy
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Motor ON/OFF response time
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Power stability under load
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-300 mb-4">✅ Performance Validation</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Continuous operation stability
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Call reliability with GSM signal
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> LED status indication accuracy
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Motor switching reliability
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
            <p className="text-blue-200 text-sm"><strong>Result:</strong> The system performed reliably during repeated call operations with 100% call detection accuracy and stable motor switching over extended operational periods.</p>
          </div>
        </motion.div>

        {/* Results & Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95 }}
          className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">📊 Results & Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-blue-300 mb-3">✅ Key Benefits</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Remote motor control from anywhere</li>
                <li>✓ Reduced water wastage and overflow</li>
                <li>✓ Saves electricity consumption</li>
                <li>✓ No need for physical presence</li>
                <li>✓ Simple and low-cost solution</li>
                <li>✓ Instant visual feedback with LEDs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-300 mb-3">🚀 Use Cases</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Agricultural farm water pumping</li>
                <li>✓ Household water tank filling</li>
                <li>✓ Industrial water management</li>
                <li>✓ Apartment complex water control</li>
                <li>✓ Remote well water pumping</li>
                <li>✓ Smart irrigation systems</li>
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
              'SMS-based motor control for flexibility',
              'Mobile app integration for iOS and Android',
              'Dry-run protection to prevent pump damage',
              'Water level sensor integration for automation',
              'IoT cloud monitoring and analytics',
              'Multiple motor control from one device',
              'Timer-based automatic ON/OFF scheduling',
              'Call authentication with password protection'
            ].map((enhancement, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-blue-400">→</span>
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
            The IoT-Based Water Motor Controller Using GSM provides a simple, reliable, and efficient solution for remote motor control. By using phone calls and relay switching, the system enables users to manage water motors easily, making it ideal for agricultural fields, homes, and industries.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            The system can be further enhanced with SMS control, water level sensors, timer-based automation, and IoT cloud integration, making it suitable for diverse applications from basic household use to advanced smart water management systems.
          </p>
          <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 mt-4">
            <p className="text-blue-200 text-sm"><strong>💼Summary:</strong> Water Motor Controller Using GSM – Designed and implemented a GSM-based remote motor control system that allows users to turn a water motor ON or OFF through a phone call, improving water usage efficiency and operational convenience.</p>
          </div>
        </motion.div>

        {/* CTA */}
        
      </motion.div>
    </div>
  );
};

export default ProjectDetailsPage4;
