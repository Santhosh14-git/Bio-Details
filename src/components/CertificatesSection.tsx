import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';
import { Award, X } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  category: string;
  orbitIndex: number;
  angle: number;
  skills?: string[];
  credentialUrl?: string;
  imageUrl?: string;
}

const certificatesData: Certificate[] = [
  {
    id: 1,
    title: 'UI/UX Internship',
    issuer: 'SkillForge',
    year: 'May - Jun 2024',
    category: 'Design',
    orbitIndex: 0,
    angle: 0,
    skills: ['UI Design', 'UX Research', 'Figma', 'Prototyping'],
    credentialUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop',
  },
  {
    id: 2,
    title: 'Ethical Hacking Workshop',
    issuer: 'Nikistian Media Pvt Ltd',
    year: 'June 2024',
    category: 'Security',
    orbitIndex: 0,
    angle: 120,
    skills: ['Cybersecurity', 'Ethical Hacking', 'Security Testing'],
    credentialUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=500&fit=crop',
  },
  {
    id: 3,
    title: 'Microsoft Copilot',
    issuer: 'SkillNation',
    year: 'July 2024',
    category: 'AI/ML',
    orbitIndex: 0,
    angle: 240,
    skills: ['AI Tools', 'Copilot', 'Productivity'],
    credentialUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=500&fit=crop',
  },
  {
    id: 4,
    title: 'Building Alexa with Python',
    issuer: 'NoviTech R&D Pvt Ltd',
    year: 'June 2024',
    category: 'Development',
    orbitIndex: 1,
    angle: 45,
    skills: ['Python', 'Voice Assistant', 'AI Integration'],
    credentialUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f70504646?w=400&h=500&fit=crop',
  },
  {
    id: 5,
    title: 'UI/UX Course Completion',
    issuer: 'SkillForge',
    year: 'May - Jun 2024',
    category: 'Design',
    orbitIndex: 1,
    angle: 165,
    skills: ['UI Design', 'User Experience', 'Visual Design', 'Figma'],
    credentialUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=500&fit=crop',
  },
  {
    id: 6,
    title: 'Frontend Web Development Internship',
    issuer: 'Devskillhub',
    year: 'May - Jul 2024',
    category: 'Frontend',
    orbitIndex: 1,
    angle: 285,
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Responsive Design'],
    credentialUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=500&fit=crop',
  },
  {
    id: 7,
    title: 'UI/UX Internship',
    issuer: 'POSTULATE INFO TECH',
    year: 'Jul - Aug 2024',
    category: 'Design',
    orbitIndex: 2,
    angle: 90,
    skills: ['Figma', 'UI Design', 'User Interface', 'Advanced Design'],
    credentialUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop',
  },
  {
    id: 8,
    title: 'Frontend Web Development Internship',
    issuer: 'Devskillhub Training & Consultancy',
    year: 'May - Jul 2024',
    category: 'Frontend',
    orbitIndex: 2,
    angle: 270,
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Web Development'],
    credentialUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=500&fit=crop',
  },
];

// Orbit configuration
const ORBIT_RADIUS = [180, 300, 420];
const ROTATION_SPEEDS = [40, -35, 50]; // seconds per full rotation

// Particle stars background
const ParticleBackground = () => {
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      
      {/* Animated Glow Orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Twinkling Stars */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

// Central Knowledge Core
interface KnowledgeCoreProps {
  isInView: boolean;
}

const KnowledgeCore = ({ isInView }: KnowledgeCoreProps) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={isInView ? { scale: 1 } : {}}
      transition={{ delay: 0.3, type: 'spring', stiffness: 80 }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
    >
      {/* Outer Glow Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-border"
        style={{ width: '120px', height: '120px' }}
      />

      {/* Main Core */}
      <motion.div
        animate={{ 
          boxShadow: [
            '0 0 30px rgba(59, 130, 246, 0.5)',
            '0 0 60px rgba(59, 130, 246, 0.8)',
            '0 0 30px rgba(59, 130, 246, 0.5)',
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="relative w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center shadow-2xl"
      >
        {/* Inner Core */}
        <div className="absolute inset-1 rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 opacity-30 bg-gradient-conic from-blue-500 to-transparent"
          />
          <div className="relative z-10 text-center">
            <Award className="w-10 h-10 text-blue-400 mx-auto mb-1" />
            <p className="text-xs font-bold text-white">Knowledge</p>
            <p className="text-xs text-blue-200">Core</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Orbit Ring
interface OrbitRingProps {
  radius: number;
  index: number;
}

const OrbitRing = ({ radius, index }: OrbitRingProps) => {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 + index * 0.1 }}
    >
      {/* Orbit circle */}
      <div
        className="rounded-full border border-white/5"
        style={{
          width: radius * 2,
          height: radius * 2,
        }}
      />
      {/* Gradient accent */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-30"
        style={{
          width: radius * 2,
          height: radius * 2,
          background: `conic-gradient(from ${index * 60}deg, rgba(59, 130, 246, 0.4) 0%, transparent 50%)`,
        }}
      />
    </motion.div>
  );
};

// Planet Card (Certificate)
interface PlanetCardProps {
  cert: Certificate;
  radius: number;
  isSelected: boolean;
  onSelect: (cert: Certificate) => void;
  isOtherSelected: boolean;
}

const PlanetCard = ({ 
  cert, 
  radius, 
  isSelected, 
  onSelect,
  isOtherSelected 
}: PlanetCardProps) => {
  const angle = (cert.angle * Math.PI) / 180;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);

  // Color mapping by category
  const categoryColors: Record<string, { bg: string; border: string; shadow: string }> = {
    'Frontend': { bg: 'from-blue-500 to-cyan-500', border: 'border-blue-400', shadow: 'shadow-blue-500/20' },
    'Design': { bg: 'from-pink-500 to-red-500', border: 'border-pink-400', shadow: 'shadow-pink-500/20' },
    'Development': { bg: 'from-purple-500 to-pink-500', border: 'border-purple-400', shadow: 'shadow-purple-500/20' },
    'Security': { bg: 'from-red-500 to-orange-500', border: 'border-red-400', shadow: 'shadow-red-500/20' },
    'AI/ML': { bg: 'from-green-500 to-emerald-500', border: 'border-green-400', shadow: 'shadow-green-500/20' },
  };

  const colors = categoryColors[cert.category] || categoryColors['Frontend'];

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
      style={{ x, y }}
      animate={{
        z: isSelected ? 100 : 0,
        opacity: isOtherSelected && !isSelected ? 0.4 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onClick={() => onSelect(cert)}
    >
      {/* Planet Sphere */}
      <motion.div
        className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${colors.bg} flex items-center justify-center border-2 ${colors.border} group cursor-pointer transform transition-all`}
        animate={{
          scale: isSelected ? 1.3 : 1,
          rotateZ: isSelected ? 0 : 0,
        }}
        whileHover={!isSelected ? { scale: 1.1 } : {}}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {/* Planet Inner Light */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-40"
          animate={{
            background: isSelected 
              ? `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), transparent)`
              : `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2), transparent)`,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Glow Effect */}
        <motion.div
          className={`absolute inset-0 rounded-full blur-lg opacity-0 ${colors.shadow}`}
          animate={{
            opacity: isSelected ? 1 : 0.3,
            boxShadow: isSelected 
              ? `0 0 30px var(--tw-shadow-color)`
              : `0 0 10px var(--tw-shadow-color)`,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Certificate Icon */}
        <div className="relative z-10 text-white text-xl">
          <Award className="w-7 h-7" />
        </div>

        {/* Hover Label */}
        <motion.div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-white"
          animate={{ opacity: isSelected ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {cert.year}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Certificate Image Reveal Card
interface CertificateImageCardProps {
  cert: Certificate;
  isVisible: boolean;
  onClose: () => void;
}

const CertificateImageCard = ({ cert, isVisible, onClose }: CertificateImageCardProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="pointer-events-auto relative"
            initial={{ opacity: 0, y: 50, blur: 10 }}
            animate={{ opacity: 1, y: 0, blur: 0 }}
            exit={{ opacity: 0, y: 50, blur: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Glass Card Container */}
            <div className="relative bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-6 shadow-2xl max-w-sm">
              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors z-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>

              {/* Certificate Image */}
              <motion.div
                className="relative w-full h-80 rounded-xl overflow-hidden mb-4"
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <img
                  src={cert.imageUrl || 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=500&fit=crop'}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
              </motion.div>

              {/* Certificate Details */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-sm text-blue-300 font-medium mb-3">{cert.issuer}</p>
                <div className="flex items-center justify-between text-xs text-white/70">
                  <span>{cert.year}</span>
                  <span className="px-2 py-1 rounded-full bg-blue-500/30 border border-blue-400/50 text-blue-300">
                    {cert.category}
                  </span>
                </div>

                {/* Skills */}
                {cert.skills && cert.skills.length > 0 && (
                  <motion.div
                    className="mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="text-xs font-semibold text-white/70 mb-2 uppercase tracking-wider">Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.35 + idx * 0.05 }}
                          className="px-2 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-white"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Main Component
const CertificatesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  const isHeadingInView = useInView(headingRef, { once: true, margin: '-50px' });
  const isOrbitInView = useInView(orbitRef, { once: true, margin: '-100px' });

  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const categories = Array.from(new Set(certificatesData.map(c => c.category)));

  // Handle outside click
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <section
      id="certificates"
      ref={containerRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Cosmic Background */}
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>

      <div className="relative z-20 section-container">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-blue-400 font-medium mb-4"
          >
            Professional Credentials
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-blue-400 to-cyan-400">Certifications</span> & Achievements
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/60 text-lg"
          >
            Hands-on training and certifications from leading institutions in UI/UX design, web development, and emerging technologies
          </motion.p>
        </motion.div>

        {/* Orbital System */}
        <motion.div
          ref={orbitRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isOrbitInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative h-screen max-h-[800px] md:max-h-[900px] flex items-center justify-center my-12"
        >
          {/* Orbit Rings */}
          {ORBIT_RADIUS.map((radius, idx) => (
            <OrbitRing key={idx} radius={radius} index={idx} />
          ))}

          {/* Knowledge Core */}
          <KnowledgeCore isInView={isOrbitInView} />

          {/* Orbiting Planets */}
          {certificatesData.map(cert => {
            const radius = ORBIT_RADIUS[cert.orbitIndex];
            return (
              <motion.div
                key={cert.id}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{
                  rotate: selectedCert?.id === cert.id ? 0 : 360,
                }}
                transition={{
                  duration: ROTATION_SPEEDS[cert.orbitIndex],
                  repeat: selectedCert?.id === cert.id ? 0 : Infinity,
                  ease: 'linear',
                }}
              >
                <PlanetCard
                  cert={cert}
                  radius={radius}
                  isSelected={selectedCert?.id === cert.id}
                  onSelect={setSelectedCert}
                  isOtherSelected={selectedCert !== null && selectedCert?.id !== cert.id}
                />
              </motion.div>
            );
          })}

          {/* Click outside handler */}
          <motion.div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setSelectedCert(null)}
          />
        </motion.div>

        {/* Certificate Image Reveal */}
        <CertificateImageCard
          cert={selectedCert!}
          isVisible={selectedCert !== null}
          onClose={() => setSelectedCert(null)}
        />

        {/* Category Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          {categories.map((category, index) => {
            const categoryEmojis: Record<string, string> = {
              'Frontend': '🎨',
              'Design': '🖌️',
              'Development': '💻',
              'Security': '🔒',
              'AI/ML': '🤖',
            };
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white font-medium hover:bg-white/20 transition-colors"
              >
                <span className="mr-2">{categoryEmojis[category as string] || '✨'}</span>
                {category}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export { CertificatesSection };
export default CertificatesSection;
