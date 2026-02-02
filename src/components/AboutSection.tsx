import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Code, Palette, Zap, Cpu } from 'lucide-react';

const skills = [
  { icon: Code, label: 'Development', color: 'from-primary to-blue-400' },
  { icon: Palette, label: 'UI/UX Design', color: 'from-secondary to-purple-400' },
  { icon: Zap, label: 'Performance', color: 'from-accent to-cyan-300' },
  { icon: Cpu, label: 'IoT & AI', color: 'from-pink-500 to-rose-400' },
];

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const particles = Array.from({ length: 10 }).map((_, i) => {
    const sizes = [6, 8, 10, 12, 14];
    const size = sizes[i % sizes.length];
    const top = 38 + (i * 9) % 26; // percent
    const left = 38 + (i * 11) % 26; // percent
    const delay = (i * 0.5) % 3;
    const duration = 6 + (i % 5);
    const x = (i % 2 === 0 ? 8 : -8) + (i % 3);
    const y = -6 + (i % 5);
    return { id: i, size, top, left, delay, duration, x, y };
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-32 overflow-hidden"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            ref={imageRef}
            className="relative"
            style={{ y: imageY }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden"
            >
              {/* Gradient Background */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, hsl(217, 91%, 60%) 0%, hsl(262, 83%, 68%) 50%, hsl(192, 91%, 56%) 100%)',
                }}
              />
              
              {/* Morphing Shape */}
              <motion.div
                className="absolute inset-8 bg-white/20 backdrop-blur-sm"
                animate={{
                  borderRadius: [
                    '60% 40% 30% 70% / 60% 30% 70% 40%',
                    '30% 60% 70% 40% / 50% 60% 30% 60%',
                    '60% 40% 30% 70% / 60% 30% 70% 40%',
                  ],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Profile Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-center text-white relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                    {/* Layered decorative background */}
                <motion.div
                  aria-hidden="true"
                  className="absolute -inset-8 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={isInView ? { opacity: 0.95, scale: 1, rotate: [0, 5, -5, 0] } : {}}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {/* Large radial gradient blob */}
                  <div
                    className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full filter blur-3xl opacity-70"
                    style={{ background: 'radial-gradient(circle at 25% 30%, rgba(236,72,153,0.9), rgba(139,92,246,0.7) 35%, rgba(59,130,246,0.55) 75%)' }}
                  />

                  {/* Conic mid layer for color shifts */}
                  <div
                    className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full opacity-55 mix-blend-screen"
                    style={{ background: 'conic-gradient(from 180deg, rgba(56,189,248,0.45), rgba(168,85,247,0.45), rgba(236,72,153,0.45))', filter: 'blur(18px)' }}
                  />

                  {/* Rotating gradient ring */}
                  <motion.svg
                    className="absolute w-44 h-44 sm:w-52 sm:h-52"
                    viewBox="0 0 120 120"
                    initial={{ rotate: 0 }}
                    animate={isInView ? { rotate: [0, 45, -45, 0] } : {}}
                    transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="ringGrad" x1="0" x2="1">
                        <stop offset="0" stopColor="#a78bfa" stopOpacity="0.95" />
                        <stop offset="1" stopColor="#06b6d4" stopOpacity="0.75" />
                      </linearGradient>
                    </defs>
                    <circle cx="60" cy="60" r="48" stroke="url(#ringGrad)" strokeWidth="5" strokeLinecap="round" fill="none" strokeDasharray="7 18" opacity="0.85" />
                  </motion.svg>

                  {/* Subtle noise texture */}
                  <div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: '6px 6px', opacity: 0.06 }}
                  />
                </motion.div>

                <div className="relative z-10">
                  {/* Floating particles (decorative) */}
                  {particles.map((p) => (
                    <motion.div
                      key={p.id}
                      aria-hidden="true"
                      className="absolute pointer-events-none rounded-full"
                      style={{
                        width: p.size,
                        height: p.size,
                        top: `${p.top}%`,
                        left: `${p.left}%`,
                        transform: 'translate(-50%, -50%)',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 40%, transparent 70%)',
                        filter: 'blur(6px)',
                        opacity: 0.85,
                        mixBlendMode: 'screen',
                      }}
                      animate={prefersReducedMotion ? undefined : { x: [0, p.x, 0], y: [0, p.y, 0], opacity: [0.6, 1, 0.6], scale: [0.9, 1.05, 0.9] }}
                      transition={prefersReducedMotion ? {} : { duration: p.duration, delay: p.delay, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                    />
                  ))}

                  <div className="absolute -inset-2 rounded-[60%] bg-gradient-to-br from-white/30 to-transparent blur-sm opacity-60" />

                  {!imgError ? (
                    <div className="relative rounded-[60%] overflow-hidden w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-4">
                      {/* Image now fills the entire card */}
                      <img
                        src="/projects/santhosh.jpg"
                        alt="Santhosh"
                        onError={() => setImgError(true)}
                        className="w-full h-full object-cover block"
                      />

                      <div className="absolute inset-0 rounded-[60%] ring-2 ring-white/20 pointer-events-none" />
                    </div>
                  ) : (
                    <div className="text-8xl font-display font-bold mb-4 opacity-90">
                      S
                    </div>
                  )}
                  <div className="text-lg font-medium tracking-wide opacity-80">
                    Santhosh
                  </div>
                </div>
                </motion.div>
              </div>

              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            {/* Floating Elements */}
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                className="absolute glass-card p-3 shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1, type: 'spring' }}
                style={{
                  top: `${20 + index * 20}%`,
                  right: index % 2 === 0 ? '-10%' : 'auto',
                  left: index % 2 !== 0 ? '-10%' : 'auto',
                }}
                whileHover={{ scale: 1.1 }}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                  <skill.icon className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Text Column */}
          <motion.div style={{ y: textY }}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-primary font-medium mb-4"
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="heading-lg mb-6"
            >
              Crafting the{' '}
              <span className="text-gradient">future</span> of digital experiences
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-4 text-muted-foreground leading-relaxed"
            >
              <p>
  I'm a passionate UI/UX Designer and Full Stack Developer who enjoys creating 
  clean, user-friendly digital solutions. I have a strong interest in both 
  design and development, which helps me connect visual design with practical 
  functionality.
</p>
<p>
  I have worked on projects like Smart Online Test Systems, IoT-based Plant 
  Monitoring applications, and ERP-based solutions during my academic and early 
  professional journey. I focus on building experiences that are visually clear, 
  easy to use, and reliable.
</p>
<p>
  Currently, I am gaining hands-on experience in a startup environment, where I 
  continue to learn, explore new technologies, and improve my skills through 
  real-world projects.
</p>

            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-10"
            >
              {[
                { value: '0–1', label: 'Years Work Experience' },
                { value: '2', label: 'Years Freelancing Experience' },
                { value: '15+', label: 'Projects Completed' },
                { value: '10+', label: 'Technologies' },
                

              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl sm:text-4xl font-display font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
