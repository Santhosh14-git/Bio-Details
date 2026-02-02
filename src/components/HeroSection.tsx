import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const titleWords =
    'I design digital experiences that feel simple and powerful'.split(' ');

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <motion.div
        className="section-container relative z-10 text-center"
        style={{ y, opacity, scale }}
      >
       

        {/* Main Statement */}
        <h1 className="heading-xl max-w-5xl mx-auto mb-0.1">
          {titleWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 40, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: 0.25 + index * 0.08,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`inline-block mr-[0.3em] ${
                ['digital', 'experiences', 'simple', 'powerful'].includes(word)
                  ? 'text-gradient-animated'
                  : ''
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Personal Identity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mb-4"
        >
          <p className="text-2xl font-semibold tracking-tight text-foreground mb-0.1">
            Santhosh
          </p>
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-0.1">
            UI/UX Designer · Frontend Developer
          </p>
        </motion.div>

        {/* Short Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.6 }}
          className="body-lg max-w-4xl mx-auto mb-200"
        >
          Design Clean, User-Friendly Interfaces and Build Websites using HTML, CSS, JavaScript, PHP, React and Dotnet
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className=" relative y-5 flex flex-wrap items-center justify-center gap-10 mt-4"
        >
          <motion.button
            className="btn-primary group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .querySelector('#projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <span className="relative z-0.1 flex items-center mt-2">
              View My Work
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>

          <motion.button
            className="btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .querySelector('#contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Ambient Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-10 w-64 h-64 rounded-full opacity-20"
        style={{
          background:
            'radial-gradient(circle, hsl(217, 91%, 60%) 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full opacity-15"
        style={{
          background:
            'radial-gradient(circle, hsl(262, 83%, 68%) 0%, transparent 70%)',
        }}
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </section>
  );
};

export default HeroSection;
