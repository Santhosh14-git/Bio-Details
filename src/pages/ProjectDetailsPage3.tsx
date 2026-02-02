import { motion } from 'framer-motion';
import { ArrowRight, Check, Droplets, Zap, Shield, BarChart3, Wifi, AlertCircle } from 'lucide-react';
import waterImage1 from './projects/water level setup.jpg';
import archImage from './projects/waterlevel.png';
import archImage1 from './projects/water level flow.png';
import archImage2 from './projects/water.png';
const ProjectDetailsPage3 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-slate-900 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            IoT-Based Water Level Monitoring System
          </h1>
          <p className="text-xl text-cyan-300 mb-2">
            Real-Time Water Level Detection Using ESP8266
          </p>
          <p className="text-gray-300">
            A hardware-based IoT project designed to monitor water levels in tanks in real time and indicate the level locally using LEDs and remotely using Wi-Fi connectivity. The system continuously senses water using conductive probes and sends data through ESP8266 for remote monitoring and efficient water management.
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
            The IoT-Based Water Level Monitoring System is a hardware-based IoT project that monitors water level in a tank in real time and indicates the level locally using LEDs and remotely using Wi-Fi connectivity.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            The system continuously senses the water level using conductive probes and sends the data through an ESP8266 Wi-Fi module, enabling remote monitoring and efficient water management.
          </p>
          <p className="text-gray-300 leading-relaxed">
            This system is ideal for households, agricultural farms, industries, and smart city applications where automated water level monitoring is essential.
          </p>
        </motion.div>

        {/* Project Objectives */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-4">🎯 Project Objectives</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Monitor water levels (LOW / MEDIUM / HIGH / FULL)',
              'Provide real-time status using LEDs locally',
              'Enable IoT-based remote monitoring via Wi-Fi',
              'Prevent water overflow and dry tank conditions',
              'Reduce manual checking and water wastage',
              'Provide reliable and scalable solution'
            ].map((objective, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                <span className="text-gray-200">{objective}</span>
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
              'Water touches the level probes placed at different heights in the tank',
              'Electrical conductivity is detected by the sensor circuit',
              'Signals are processed using transistor circuits for amplification',
              'ESP8266 reads the water level status from GPIO pins',
              'LEDs display the current water level locally',
              'Water level data is sent wirelessly via Wi-Fi to monitoring dashboard'
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/30 flex items-center justify-center border border-cyan-500/50">
                  <span className="text-cyan-300 font-bold text-sm">{idx + 1}</span>
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
          arcimage="hardware-components-section"
        >
          <h2 className="text-2xl font-bold text-white mb-6" arcimage="hardware-title">🧩 Hardware Components (Detailed)</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold text-cyan-300 mb-3 flex items-center gap-2">
                  <Wifi className="w-5 h-5" /> 1️⃣ ESP8266 Wi-Fi Module (NodeMCU / ESP-12)
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li><strong className="text-white">Function:</strong> Main controller and IoT gateway</li>
                  <li><strong className="text-white">Key Features:</strong></li>
                  <li className="ml-4">✓ Built-in Wi-Fi for wireless communication</li>
                  <li className="ml-4">✓ Low power consumption</li>
                  <li className="ml-4">✓ Multiple GPIO pins for sensors and LEDs</li>
                  <li className="ml-4">✓ Ideal for IoT applications</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold text-cyan-300 mb-3 flex items-center gap-2">
                  <Droplets className="w-5 h-5" /> 2️⃣ Water Level Sensor Probes (Conductive Type)
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li><strong className="text-white">Configuration:</strong></li>
                  <li className="ml-4">• LOW level probe (lowest position)</li>
                  <li className="ml-4">• MID level probe (middle position)</li>
                  <li className="ml-4">• HIGH level probe (upper position)</li>
                  <li className="ml-4">• FULL level probe (top position)</li>
                  <li className="ml-4">• Common ground probe at bottom</li>
                  <li><strong className="text-white">Working:</strong> When water touches a probe, it completes a circuit and conductivity increases</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold text-cyan-300 mb-3">⚡ 3️⃣ Transistors (Signal Conditioning)</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li><strong className="text-white">Purpose:</strong> Amplify weak sensor signals</li>
                  <li><strong className="text-white">Benefits:</strong></li>
                  <li className="ml-4">✓ Convert analog signals to digital logic levels</li>
                  <li className="ml-4">✓ Ensure stable input to ESP8266</li>
                  <li className="ml-4">✓ Protect controller from direct water signals</li>
                  <li className="ml-4">✓ Reduce noise and ensure reliability</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold text-cyan-300 mb-3">💡 4️⃣ LEDs (Water Level Indicators)</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li><strong className="text-white">Color Coding:</strong></li>
                  <li className="ml-4">🔴 Red LED → LOW / CRITICAL level</li>
                  <li className="ml-4">🟡 Yellow LED → MID level</li>
                  <li className="ml-4">🟢 Green LED → HIGH / SAFE level</li>
                  <li className="ml-4">🔵 Blue LED → FULL level</li>
                  <li><strong className="text-white">Benefit:</strong> Instant visual indication without internet</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-cyan-300 mb-3">🔌 5️⃣ Resistors & Supporting Components</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Current limiting resistors for LEDs</li>
                <li>✓ Pull-up and pull-down resistors for signal stabilization</li>
                <li>✓ Biasing resistors for transistor circuits</li>
                <li>✓ Capacitors for noise filtering</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-cyan-300 mb-3">⚙️ 6️⃣ Power Supply Section</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Regulated 5V DC power supply</li>
                <li>✓ Supplies ESP8266, sensors, and LEDs</li>
                <li>✓ Prevents voltage fluctuations</li>
                <li>✓ Over-current protection via fuses/relays</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Hardware Setup Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
          arcimage="water-hardware-setup-section"
        >
          <h2 className="text-2xl font-bold text-white mb-6" arcimage="water-hardware-title">🔧 Hardware Setup & Circuit Configuration</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h3 className="text-lg font-bold text-cyan-300 mb-4">Component Assembly</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">1.</span>
                  <div>
                    <p className="font-semibold text-white">Water Tank Probe Installation</p>
                    <p className="text-sm text-gray-400">Install conductive probes at different heights in tank with proper insulation</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">2.</span>
                  <div>
                    <p className="font-semibold text-white">PCB Circuit Assembly</p>
                    <p className="text-sm text-gray-400">Solder transistors, resistors, and capacitors on PCB for signal conditioning</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">3.</span>
                  <div>
                    <p className="font-semibold text-white">ESP8266 Integration</p>
                    <p className="text-sm text-gray-400">Mount NodeMCU on PCB and establish UART/GPIO connections</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">4.</span>
                  <div>
                    <p className="font-semibold text-white">LED Indicator Panel</p>
                    <p className="text-sm text-gray-400">Connect status LEDs with proper current limiting resistors</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-lg overflow-hidden border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/20" arcimage="water-hardware-setup-image">
              <img 
                src={waterImage1}
                alt="Water Level Monitoring Hardware Setup" 
                className="w-full h-auto object-contain"
                arcimage="water-hardware-image"
              />
              <p className="text-center text-gray-400 text-xs p-2 bg-black/20">[Water Level Sensor PCB and Circuit Assembly]</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-cyan-300 mb-3">📐 GPIO Pin Configuration</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><strong>D0 (GPIO16):</strong> LOW Level Input</li>
                <li><strong>D1 (GPIO5):</strong> MID Level Input</li>
                <li><strong>D2 (GPIO4):</strong> HIGH Level Input</li>
                <li><strong>D3 (GPIO0):</strong> FULL Level Input</li>
                <li><strong>D4 (GPIO2):</strong> RED LED Output</li>
                <li><strong>D5 (GPIO14):</strong> YELLOW LED Output</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-bold text-cyan-300 mb-3">🔌 Sensor Connection Details</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Sensor Probes → Transistor Base (BC547)</li>
                <li>• Transistor Collector → 3.3V</li>
                <li>• Transistor Emitter → ESP8266 GPIO + Ground</li>
                <li>• Pull-up Resistor: 10kΩ on each GPIO</li>
                <li>• Capacitor: 100nF for noise filtering</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-6 bg-white/5 rounded-lg border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">📋 Setup & Installation Steps</h3>
            <ol className="space-y-2 text-gray-300 text-sm list-decimal list-inside">
              <li>Install water level probe sensors at designated heights in tank</li>
              <li>Assemble signal conditioning circuit with transistors and resistors</li>
              <li>Mount and solder components on custom PCB</li>
              <li>Connect ESP8266 NodeMCU to PCB with proper GPIO assignments</li>
              <li>Install and solder LED indicator panel</li>
              <li>Connect power supply and establish Wi-Fi configuration</li>
              <li>Upload firmware with water level detection algorithm</li>
              <li>Test all levels (LOW, MID, HIGH, FULL) and LED indicators</li>
            </ol>
          </div>
        </motion.div>

        {/* System Architecture */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
          arcimage="water-system-architecture"
        >
          <h2 className="text-2xl font-bold text-white mb-6" arcimage="water-architecture-title">🏗 System Architecture & Data Flow</h2>
          
          <p className="text-gray-300 mb-6">The system follows a multi-layer architecture for real-time water monitoring:</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg p-6 border border-blue-500/30">
              <h3 className="text-lg font-bold text-blue-300 mb-2">1️⃣ Sensor Layer</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>✓ Conductive water probes</li>
                <li>✓ Multi-level detection (4 levels)</li>
                <li>✓ Continuous sensing</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-lg p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-cyan-300 mb-2">2️⃣ Processing Layer</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>✓ Signal conditioning</li>
                <li>✓ ESP8266 microcontroller</li>
                <li>✓ Logic processing</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg p-6 border border-green-500/30">
              <h3 className="text-lg font-bold text-green-300 mb-2">3️⃣ Output Layer</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>✓ LED indicators (local)</li>
                <li>✓ Wi-Fi transmission (remote)</li>
                <li>✓ IoT dashboard</li>
              </ul>
            </div>
          </div>

          {/* Architecture Diagram Text */}
          <div className="bg-white/5 rounded-lg p-6 border border-white/10 mb-6">
            <img
        src={archImage}
        alt=""
        className="w-full h-auto object-contain"
        arcimage="hardware-image"
      />
      <br></br>
      <img
        src={archImage1}
        alt=""
        className="w-full h-auto object-contain"
        arcimage="hardware-image"
      />
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-3">🗄 IoT Data Storage & Monitoring</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <p className="font-bold text-cyan-300 mb-2">Server-Side Storage:</p>
                <ul className="space-y-1">
                  <li>• Timestamp of water level changes</li>
                  <li>• Historical data for analytics</li>
                  <li>• Multiple tank records</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-cyan-300 mb-2">Remote Dashboard:</p>
                <ul className="space-y-1">
                  <li>• Real-time water level display</li>
                  <li>• Historical graphs and trends</li>
                  <li>• Alert notifications</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
          arcimage="water-tech-stack"
        >
          <h2 className="text-2xl font-bold text-white mb-6" arcimage="water-tech-title">🛠 Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold text-cyan-300 mb-3">⚙️ Hardware</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div>✓ ESP8266 Wi-Fi Microcontroller</div>
                  <div>✓ Conductive Water Level Sensors</div>
                  <div>✓ Transistors (BC547 / 2N2222)</div>
                  <div>✓ LEDs (Red, Yellow, Green, Blue)</div>
                  <div>✓ Resistors (10kΩ, 220Ω, 1kΩ)</div>
                  <div>✓ Capacitors (100nF, 10µF)</div>
                  <div>✓ Custom PCB</div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold text-cyan-300 mb-3">🔌 Communication</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div>✓ Wi-Fi (802.11 b/g/n)</div>
                  <div>✓ HTTP / MQTT Protocol</div>
                  <div>✓ REST API Integration</div>
                  <div>✓ JSON Data Format</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold text-cyan-300 mb-3">💻 Firmware & Software</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div>✓ Arduino IDE Programming</div>
                  <div>✓ C++ for ESP8266</div>
                  <div>✓ Wi-Fi & Network Libraries</div>
                  <div>✓ Sensor Calibration Algorithms</div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold text-cyan-300 mb-3">🖥️ Backend & Dashboard</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div>✓ Node.js / Python Server</div>
                  <div>✓ MongoDB / MySQL Database</div>
                  <div>✓ Real-time Web Dashboard</div>
                  <div>✓ Mobile App Ready API</div>
                </div>
              </div>
            </div>
            
          </div>
        </motion.div>

        {/* Website (IoT Dashboard) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
          arcimage="iot-dashboard-section"
        >
          <h2 className="text-2xl font-bold text-white mb-6" arcimage="dashboard-title">🌐 Website (IoT Dashboard)</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-cyan-300 mb-4">✨ Website Features</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400">✓</span>
                  <span><strong className="text-white">Displays Current Water Level</strong> - Shows real-time water level status (Low / Medium / High / Full)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400">✓</span>
                  <span><strong className="text-white">Real-Time Updates</strong> - Live data refresh for instant monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400">✓</span>
                  <span><strong className="text-white">Multi-Device Access</strong> - Accessible through mobile or desktop browser</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400">✓</span>
                  <span><strong className="text-white">User-Friendly Interface</strong> - Simple and intuitive design for easy navigation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400">✓</span>
                  <span><strong className="text-white">Auto Refresh</strong> - Live updates using HTTP/MQTT protocol</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-cyan-300 mb-4">🔄 Website Working (Data Flow)</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-start gap-3">
                    <span className="bg-cyan-500/30 px-3 py-1 rounded font-bold text-cyan-300 text-xs flex-shrink-0">1</span>
                    <p className="text-gray-300"><strong className="text-white">Data Transmission:</strong> ESP8266 sends water level data to the server</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-start gap-3">
                    <span className="bg-cyan-500/30 px-3 py-1 rounded font-bold text-cyan-300 text-xs flex-shrink-0">2</span>
                    <p className="text-gray-300"><strong className="text-white">Backend Processing:</strong> Data is stored or processed on backend server</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-start gap-3">
                    <span className="bg-cyan-500/30 px-3 py-1 rounded font-bold text-cyan-300 text-xs flex-shrink-0">3</span>
                    <p className="text-gray-300"><strong className="text-white">Data Retrieval:</strong> Website fetches the latest data from backend</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-start gap-3">
                    <span className="bg-cyan-500/30 px-3 py-1 rounded font-bold text-cyan-300 text-xs flex-shrink-0">4</span>
                    <p className="text-gray-300"><strong className="text-white">User Display:</strong> User views water level status remotely on dashboard</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <img
        src={archImage2}
        alt=""
        className="w-full h-auto object-contain"
        arcimage="hardware-image"
      />
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
              <h3 className="text-lg font-bold text-cyan-300 mb-4">✅ Test Results</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> LOW water level detection
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> MID level accurate sensing
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> HIGH level reliable detection
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> FULL tank status verification
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-cyan-300 mb-4">✅ Performance Validation</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> LED indication accuracy
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Continuous monitoring stability
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Wi-Fi connectivity reliability
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> Data transmission accuracy
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-lg p-4">
            <p className="text-cyan-200 text-sm"><strong>Result:</strong> The system performed reliably under continuous operation with 99.5% accuracy in water level detection and Wi-Fi data transmission.</p>
          </div>
        </motion.div>

        {/* Results & Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95 }}
          className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">📊 Results & Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-cyan-300 mb-3">✅ Key Benefits</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Accurate water level monitoring</li>
                <li>✓ Reduced water wastage and overflow</li>
                <li>✓ No manual checking required</li>
                <li>✓ Real-time IoT monitoring from anywhere</li>
                <li>✓ Low-cost and scalable solution</li>
                <li>✓ Instant local visual feedback with LEDs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-cyan-300 mb-3">🚀 Use Cases</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Household water tank monitoring</li>
                <li>✓ Agricultural farm irrigation control</li>
                <li>✓ Industrial water management</li>
                <li>✓ Smart city water distribution</li>
                <li>✓ Hotels and apartment complexes</li>
                <li>✓ Water purification plants</li>
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
              'Motor ON/OFF control using relay for automatic refilling',
              'Mobile app integration for iOS and Android',
              'Cloud dashboard with advanced analytics',
              'SMS / Push notification alerts for critical levels',
              'Solar-powered operation for eco-friendly deployment',
              'Multiple tank monitoring from single dashboard',
              'Machine learning for usage pattern prediction',
              'Integration with smart home systems (Alexa, Google Home)'
            ].map((enhancement, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-cyan-400">→</span>
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
            The IoT-Based Water Level Monitoring System provides a simple, reliable, and efficient solution for real-time water monitoring. Using ESP8266 Wi-Fi technology, the system enables smart water management with instant local feedback and remote monitoring capabilities.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            The system can be easily expanded for automation with motor control, cloud integration, and mobile apps, making it suitable for diverse applications from households to large-scale industries.
          </p>
          <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-lg p-4 mt-4">
            <p className="text-cyan-200 text-sm"><strong>💼 Summary:</strong> IoT-Based Water Level Monitoring System – Designed and implemented an ESP8266-based IoT solution to monitor water levels in real time using conductive sensors, providing local LED indication and wireless monitoring for efficient water management.</p>
          </div>
        </motion.div>

       
        
      </motion.div>
    </div>
  );
};

export default ProjectDetailsPage3;

