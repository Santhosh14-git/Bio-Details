import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, LockOpen, Star, Sparkles, Award } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  domain: string;
  domain_color: string;
  certificateImage: string;
  description: string;
  skills: string[];
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'UI/UX Internship',
    issuer: 'SkillForge',
    year: '2024',
    domain: 'Design',
    domain_color: '#8b7d6b',
    certificateImage: '/projects/ui%20ux%20intern.jpg',
    description: 'I am a passionate UI/UX designer with the objective of creating intuitive, efficient, and visually appealing user interfaces that deliver seamless and enjoyable user experiences. I completed a two-month UI/UX Design Internship at SkillForge from 1 May 2024 to 30 June 2024, where I strengthened my skills in user-centered design, usability principles, and visual consistency, contributing to improved user satisfaction and engagement.',
  skills: ['UI Design', 'UX Research', 'Figma', 'Adobe XD', 'User Flows', 'Wireframing' ,'Prototyping','Usability Testing','Design Systems','Responsive Design','Collaboration','Problem-Solving','Creativity'],
  },
  {
    id: 2,
    title: 'Ethical Hacking Workshop',
    issuer: 'Nikistian Media',
    year: '2024',
    domain: 'Security',
    domain_color: '#6b5d52',
    certificateImage: '/projects/hacking.jpg',
    description: 'Successfully participated in an Ethical Hacking workshop conducted by Nikistian Media Private Limited on 25 June 2024, where I gained foundational knowledge of cybersecurity concepts, ethical hacking techniques, and security best practices.',
    skills: ['Cybersecurity', 'Ethical Hacking'],
  },
  {
    id: 3,
    title: 'Microsoft Copilot',
    issuer: 'SkillNation',
    year: '2024',
    domain: 'AI',
    domain_color: '#7a8a99',
    certificateImage: '/projects/microsoft.jpg',
    description: 'Successfully completed the Microsoft Copilot course on 3 July 2024, conducted by Hardik Raja from the SkillNation team, gaining practical knowledge on using AI tools to improve productivity and workflow efficiency.',
    skills: ['AI Tools', 'Copilot'],
  },
  {
    id: 4,
    title: 'Building Alexa',
    issuer: 'NoviTech R&D',
    year: '2024',
    domain: 'IoT',
    domain_color: '#6b7d7a',
    certificateImage: '/projects/alexa.jpg',
    description: 'Completed an immersive bootcamp on “Building Your Own Alexa Using Python” at NoviTech R&D Private Limited in June 2024, where I gained practical exposure to voice assistant development and Python programming fundamentals.',
    skills: ['Python', 'Voice Assistant'],
  },
  {
    id: 5,
    title: 'UI/UX Course',
    issuer: 'SkillForge',
    year: '2024',
    domain: 'Design',
    domain_color: '#8b7d6b',
    certificateImage: '/projects/ui%20ux%20course.jpg',
    description: 'Successfully completed a two-month UI/UX Design course at SkillForge from 1 May 2024 to 30 June 2024, gaining hands-on experience in designing intuitive, efficient, and visually appealing user interfaces.',
    skills: ['UI Design', 'UX Research', 'Figma', 'Adobe XD', 'User Flows', 'Wireframing' ,'Prototyping','Usability Testing','Design Systems','Responsive Design','Collaboration','Problem-Solving','Creativity','User-Centered Design','Usability Principles','Visual Consistency','Interaction Design' ,'Information Architecture','Accessibility','User Testing','Design Principles'],
  },
  {
    id: 6,
    title: 'Frontend Development',
    issuer: 'Devskillhub',
    year: '2024',
    domain: 'Web',
    domain_color: '#7a8a99',
    certificateImage: '/projects/frontend.jpg',
    description: 'Successfully completed a two-month internship in Frontend Web Development at DevSkillHub Training & Consultancy from 26 May 2024 to 26 July 2024. During this internship, I gained practical experience in basic web development using HTML, CSS, Bootstrap, and JavaScript.',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 7,
    title: 'UI/UX Internship',
    issuer: 'Postulate',
    year: '2024',
    domain: 'Design',
    domain_color: '#7a8a99',
    certificateImage: '/projects/postulate.jpg',
    description: 'Successfully completed a one-month UI/UX Design internship at Postulate Info Tech Private Limited from 8 July 2024 to 8 August 2024. During this internship, I gained hands-on experience using Figma, progressing from beginner to advanced level. I worked on wireframing, prototyping, UI design, and user flow creation, while applying usability principles and design best practices to create intuitive and visually appealing interfaces.',
    skills: ['UI Design', 'UX Research', 'Figma', 'Adobe XD', 'User Flows', 'Wireframing' ,'Prototyping','Usability Testing','Design Systems','Responsive Design','Collaboration','Problem-Solving','Creativity','User-Centered Design','Usability Principles','Visual Consistency','Interaction Design' ,'Information Architecture','Accessibility','User Testing','Design Principles'],
  },
  {
    id: 8,
    title: 'AI Tools & ChatGPT Workshop',
    issuer: 'be10x',
    year: '2025',
    domain: 'Artificial Intelligence (AI)',
    domain_color: '#7a8a99',
    certificateImage: '/projects/be 10x.png',
    description: 'Successfully completed an AI Tools and ChatGPT Workshop conducted by be10x, where I learned to effectively use AI tools to enhance productivity. The workshop focused on creating presentations, analyzing data, and coding/debugging tasks using AI within minimal time, improving efficiency and problem-solving speed.',
    skills: ['AI Tools', 'ChatGPT', 'Productivity','Generative AI', 'Automation' ],
  },
  {
    id: 9,
    title: 'National Conference Paper Presentation – NCITE’25',
    issuer: 'Dr. G U Pope College of Engineering',
    year: 'Rewards',
    domain: 'Web Technologies / Educational Technology (EdTech)',
    domain_color: '#7a8a99',
    certificateImage: '/projects/paper.png',
    description: 'Presented a research paper titled “A Smart Online Test and Evaluation System for Secure and Automated Assessment” at NCITE’25 – 8th National Level Conference on Innovative Technologies in Engineering, held on 25 April 2025 and conducted by Dr. G U Pope College of Engineering. The work focused on secure online examination systems and automated evaluation methods, contributing to advancements in digital education technologies.',
    skills: [],
  },
  {
    id: 10,
    title: 'Big Data - 301 – Infosys Springboard',
    issuer: 'Infosys',
    year: '2024',
    domain: 'Data Engineering & Analytics',
    domain_color: '#7a8a99',
    certificateImage: '/projects/infosys.png',
    description: 'Successfully completed the advanced Big Data - 301 certification via Infosys Springboard. The course focused on mastering the Hadoop ecosystem and advanced data processing frameworks. Key areas of expertise gained include optimizing large-scale datasets using Advanced Hive (partitioning and bucketing), performing seamless data migration with Sqoop, and building high-performance data pipelines using Apache Spark Core and Spark SQL.',
    skills: ['Hadoop', 'Hive', 'Sqoop', 'Apache Spark', 'Data Pipelines', 'Data Migration'],
  }
];
// Evidence Card Component
interface EvidenceCardProps {
  cert: Certificate;
  index: number;
  isSelected: boolean;
  onClick: () => void;
  isOtherUnlocked: boolean;
}

const EvidenceCard = ({ cert, index, isSelected, onClick, isOtherUnlocked }: EvidenceCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.12,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="h-full"
    >
      <motion.div
        className="relative h-64 cursor-pointer perspective"
        onClick={() => {
          setIsFlipped(!isFlipped);
          onClick();
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
        style={{ perspective: '1000px' }}
      >
        <motion.div
          className="w-full h-full relative preserve-3d"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front of Card */}
          <motion.div
            className="absolute w-full h-full"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            <motion.div
              className="relative w-full h-full bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 border-2 border-slate-600 rounded-xl overflow-hidden group"
              whileHover={{ borderColor: cert.domain_color }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${cert.domain_color}20, transparent 80%)`,
                }}
              />

              {/* Holographic shimmer */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                animate={{
                  background: [
                    'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
                    'linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)',
                    'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                {/* Top Section */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <motion.p
                        className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-2 font-bold"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        ◆ ACHIEVEMENT
                      </motion.p>
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  {/* Domain Ribbon */}
                  <motion.div
                    className="inline-block mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 + 0.2 }}
                  >
                    <div
                      className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white font-mono relative"
                      style={{
                        background: `linear-gradient(135deg, ${cert.domain_color}30, ${cert.domain_color}10)`,
                        border: `2px solid ${cert.domain_color}`,
                        boxShadow: `0 0 20px ${cert.domain_color}40`,
                      }}
                    >
                      {cert.domain}
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Section */}
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 + 0.3 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-mono">{cert.year}</span>
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Star size={18} fill={cert.domain_color} color={cert.domain_color} />
                    </motion.div>
                  </div>

                  {/* Flip Hint */}
                  <motion.div
                    className="text-xs text-slate-500 text-center uppercase tracking-wider font-mono"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ↻ FLIP FOR DETAILS
                  </motion.div>
                </motion.div>
              </div>

              {/* Corner Accent */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 opacity-20"
                style={{
                  background: `linear-gradient(135deg, ${cert.domain_color}, transparent)`,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Back of Card */}
          <motion.div
            className="absolute w-full h-full"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <div className="relative w-full h-full bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-slate-600 rounded-xl overflow-hidden p-6 flex flex-col justify-between">
              {/* Certificate Image / PDF */}
              {cert.certificateImage.toLowerCase().endsWith('.pdf') ? (
                <div className="absolute inset-0 w-full h-full flex items-center justify-center p-6">
                  <a
                    href={cert.certificateImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 text-center"
                  >
                    {/* PDF Icon */}
                    <svg width="64" height="80" viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-500">
                      <rect width="64" height="80" rx="6" fill="currentColor" className="opacity-90" />
                      <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="18" fontFamily="monospace" fontWeight="bold">PDF</text>
                    </svg>
                    <span className="text-xs text-slate-200">Open PDF</span>
                  </a>
                </div>
              ) : (
                <motion.img
                  src={cert.certificateImage}
                  alt={cert.title}
                  className="absolute inset-0 w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://placehold.co/400x300/1e293b/94a3b8?text=Certificate';
                  }}
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/30 to-transparent" />

              {/* Content */}
              <div className="relative z-10">
                <motion.p className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold mb-2">
                  {cert.issuer}
                </motion.p>
                <h3 className="text-base font-bold text-white mb-4">{cert.title}</h3>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.slice(0, 3).map((skill, idx) => (
                    <motion.span
                      key={skill}
                      className="px-2 py-1 text-xs bg-slate-700/60 border border-slate-600 rounded text-slate-300 font-mono uppercase"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Verified Badge */}
              <motion.div
                className="relative z-10 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs text-green-400 font-mono uppercase font-bold">
                  ✓ VERIFIED
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Certificate Detail Drawer
interface CertificateDetailProps {
  cert: Certificate | null;
  isOpen: boolean;
  onClose: () => void;
}

const CertificateDetailDrawer = ({ cert, isOpen, onClose }: CertificateDetailProps) => {
  return (
    <AnimatePresence>
      {isOpen && cert && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-2xl max-h-[90vh] pointer-events-auto"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, type: 'spring', stiffness: 120, damping: 20 }}
            >
              {/* Modal Content */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-950 rounded-2xl border-2 border-slate-600 overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
                {/* Image Section */}
                <motion.div
                  className="relative h-96 overflow-hidden bg-slate-900 flex-shrink-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {cert.certificateImage.toLowerCase().endsWith('.pdf') ? (
                    <>
                      <iframe
                        src={cert.certificateImage}
                        title={cert.title}
                        className="w-full h-full"
                      />

                      {/* Open PDF in new tab */}
                      <a
                        href={cert.certificateImage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 px-3 py-1 bg-slate-800/70 rounded text-xs text-slate-200 border border-slate-700"
                      >
                        Open PDF
                      </a>
                    </>
                  ) : (
                    <img
                      src={cert.certificateImage}
                      alt={cert.title}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://placehold.co/600x300/1e293b/94a3b8?text=Certificate';
                      }}
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />

                  {/* Certificate Badge */}
                  <motion.div
                    className="absolute top-6 right-6 px-4 py-2 bg-gradient-to-r rounded-full font-bold text-white text-xs uppercase tracking-widest shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${cert.domain_color}, ${cert.domain_color}80)`,
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    ◆ {cert.domain}
                  </motion.div>
                </motion.div>

                {/* Scrollable Content Section */}
                <div className="p-8 space-y-6 overflow-y-auto flex-1">
                  {/* Title and Issuer */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-2">{cert.title}</h2>
                    <p className="text-sm font-mono text-blue-400 uppercase tracking-wider">
                      Issued by {cert.issuer}
                    </p>
                  </motion.div>

                  {/* Description */}
                  <motion.div
                    className="px-4 py-4 bg-blue-500/10 border border-blue-500/30 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                  >
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {cert.description}
                    </p>
                  </motion.div>

                  {/* Year */}
                  <motion.div
                    className="px-4 py-3 bg-slate-700/30 border border-slate-600 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="text-xs text-slate-400 font-mono uppercase tracking-wider mb-1">
                      Year of Achievement
                    </p>
                    <p className="text-lg font-bold text-white">{cert.year}</p>
                  </motion.div>

                  {/* Skills Section */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {cert.year !== 'Rewards' && (
                      <p className="text-sm font-bold text-white mb-3 uppercase tracking-wider flex items-center gap-2">
                        <Award size={16} style={{ color: cert.domain_color }} />
                        Skills Gained
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-2 bg-slate-700/50 border rounded-lg text-xs font-mono text-slate-300 uppercase"
                          style={{
                            borderColor: `${cert.domain_color}60`,
                            background: `${cert.domain_color}15`,
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Verification Status */}
                  <motion.div
                    className="pt-4 border-t border-slate-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center gap-2 text-green-400">
                      <motion.div
                        className="w-2 h-2 bg-green-400 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-xs font-mono uppercase font-bold">
                        ✓ AUTHENTICITY VERIFIED
                      </span>
                    </div>
                  </motion.div>

                  {/* Close Button */}
                  <motion.button
                    onClick={onClose}
                    className="w-full mt-4 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white font-semibold uppercase tracking-wider hover:bg-slate-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Main Component
const CertificatesShowcase = () => {
  const [selectedCertId, setSelectedCertId] = useState<number | null>(null);
  const scrollPositionRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedCert = certificates.find((c) => c.id === selectedCertId);

  // Prevent scrolling when modal is open
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (selectedCertId !== null) {
        e.preventDefault();
      }
    };

    if (selectedCertId !== null) {
      // Capture current scroll position
      scrollPositionRef.current = window.scrollY;
      
      // Lock scroll with fixed positioning
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.body.style.scrollBehavior = 'auto';
      document.body.style.overscrollBehavior = 'none';
      
      // Prevent mouse wheel scroll
      document.addEventListener('wheel', handleWheel, { passive: false });
    } else {
      // Remove wheel event listener immediately
      document.removeEventListener('wheel', handleWheel);
      
      // Store scroll position before clearing styles
      const scrollPos = scrollPositionRef.current;
      
      // Reset body styles with proper timing
      document.body.style.position = 'static';
      document.body.style.top = 'auto';
      document.body.style.width = 'auto';
      document.body.style.overflow = 'auto';
      document.body.style.overscrollBehavior = 'auto';
      
      // Use multiple animation frames to ensure browser has processed style changes
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top: scrollPos, left: 0, behavior: 'instant' });
        });
      });
    }
    
    return () => {
      document.body.style.position = 'static';
      document.body.style.top = 'auto';
      document.body.style.width = 'auto';
      document.body.style.overflow = 'auto';
      document.body.style.overscrollBehavior = 'auto';
      document.removeEventListener('wheel', handleWheel);
    };
  }, [selectedCertId]);

  // Sort certificates by year (descending) — non-numeric years (e.g., 'Rewards') will be placed last
  const parseYearValue = (y: string) => {
    const n = parseInt(y);
    return isNaN(n) ? Number.MIN_SAFE_INTEGER : n;
  };
  const sortedCertificates = [...certificates].sort(
    (a, b) => parseYearValue(b.year) - parseYearValue(a.year)
  );

  // Group by year
  const certsByYear = sortedCertificates.reduce((acc: Record<string, Certificate[]>, cert) => {
    if (!acc[cert.year]) acc[cert.year] = [];
    acc[cert.year].push(cert);
    return acc;
  }, {});

  return (
    <section id="certificates" className="relative py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      <div className="section-container relative z-10" ref={containerRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10"
              animate={{ boxShadow: ['0 0 20px rgba(59, 130, 246, 0.3)', '0 0 40px rgba(59, 130, 246, 0.5)', '0 0 20px rgba(59, 130, 246, 0.3)'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles size={16} className="text-blue-400" />
              <p className="text-xs font-mono text-blue-400 uppercase tracking-wider font-bold">
                Achievements & Certifications
              </p>
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Certified
            </span>
            {' '}Skills
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto font-light"
          >
            Industry-recognized certifications showcasing expertise across design, development, security, and emerging technologies
          </motion.p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="max-w-5xl mx-auto">
          {Object.entries(certsByYear).map(([year, yearCerts], yearIndex) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: yearIndex * 0.2, duration: 0.6 }}
              className="mb-16"
            >
              {/* Year Label */}
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: yearIndex * 0.2 + 0.1 }}
              >
                <motion.div
                  className="text-3xl font-bold text-blue-400"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {year}
                </motion.div>
                <motion.div
                  className="flex-1 h-1 bg-gradient-to-r from-blue-500/50 to-transparent rounded-full"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>

              {/* Certificates Grid */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                {yearCerts.map((cert, index) => (
                  <EvidenceCard
                    key={cert.id}
                    cert={cert}
                    index={yearIndex * 3 + index}
                    isSelected={selectedCertId === cert.id}
                    onClick={() => setSelectedCertId(cert.id)}
                    isOtherUnlocked={false}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <CertificateDetailDrawer
        cert={selectedCert || null}
        isOpen={selectedCertId !== null}
        onClose={() => setSelectedCertId(null)}
      />
    </section>
  );
};

export default CertificatesShowcase;
