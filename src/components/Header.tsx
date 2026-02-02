import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificates', href: '#certificates' },
  
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>, label: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const navRect = navRef.current?.getBoundingClientRect();
    if (navRect) {
      setHoverPosition({
        x: rect.left - navRect.left,
        width: rect.width,
      });
    }
    setActiveItem(label);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Glassmorphism Background with gradient */}
      <motion.div
        className="absolute inset-0 backdrop-blur-xl border-b border-white/10"
        style={{
          background: isScrolled
            ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.1) 100%)'
            : 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.03) 100%)',
          boxShadow: isScrolled 
            ? '0 8px 32px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            : 'none',
        }}
      />

      {/* Content */}
      <div className="relative px-6 py-4 section-container flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="font-display text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Santhosh
          </span>
          <motion.div
            className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-secondary"
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>

        {/* Center Navigation with Glassmorphism */}
        <nav 
          ref={navRef}
          className="hidden md:flex items-center gap-2 relative px-8 py-3 rounded-full backdrop-blur-xl border border-white/20 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-blue-500/15 shadow-2xl hover:bg-white/15 transition-all duration-300"
          onMouseLeave={handleMouseLeave}
        >
          {/* Hover Background */}
          <AnimatePresence>
            {activeItem && (
              <motion.div
                className="absolute h-8 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: hoverPosition.x - 2,
                  width: hoverPosition.width + 4,
                }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', damping: 25, stiffness: 400 }}
                style={{ top: '50%', translateY: '-50%' }}
              />
            )}
          </AnimatePresence>

          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              onMouseEnter={(e) => handleMouseEnter(e, item.label)}
              className="relative px-5 py-2 font-body text-sm font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-300 hover:to-purple-300 transition-all duration-300 z-10 uppercase tracking-widest"
              style={{
                textShadow: '0 2px 8px rgba(59, 130, 246, 0.4)',
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index, duration: 0.5 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button with Glassmorphism */}
        <motion.button
          className="relative px-6 py-2.5 rounded-full font-semibold text-sm text-white overflow-hidden group hidden sm:block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          onClick={() => scrollToSection('#contact')}
        >
          {/* Glassmorphism background */}
          <motion.div
            className="absolute inset-0 backdrop-blur-md border border-white/20 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30"
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(59, 130, 246, 0.5)',
                '0 0 40px rgba(139, 92, 246, 0.5)',
                '0 0 20px rgba(59, 130, 246, 0.5)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <span className="relative flex items-center gap-2">
            Let's Talk
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 relative z-10"
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span 
              className="w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" 
              whileHover={{ scaleX: 1.1 }}
            />
            <motion.span 
              className="w-4 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full ml-auto" 
              whileHover={{ scaleX: 1.1 }}
            />
            <motion.span 
              className="w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" 
              whileHover={{ scaleX: 1.1 }}
            />
          </div>
        </motion.button>
      </div>

      {/* Animated Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
        style={{
          scaleX: useTransform(scrollY, [0, document.body.scrollHeight - window.innerHeight], [0, 1]),
          transformOrigin: 'left',
          opacity: useTransform(scrollY, [0, 100], [0.3, 1]),
        }}
      />
    </motion.header>
  );
};

export default Header;
