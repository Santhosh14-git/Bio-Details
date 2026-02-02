import { motion } from 'framer-motion';

const planetColors = {
  'Design': { bg: 'from-rose-600 via-pink-500 to-rose-400', shadowClass: 'shadow-rose-500/50', shadowCss: '0 0 40px rgba(244, 63, 94, 0.5)', glow: 'bg-rose-500/50', accent: 'rose' },
  'Security': { bg: 'from-orange-700 via-orange-500 to-amber-400', shadowClass: 'shadow-orange-500/50', shadowCss: '0 0 40px rgba(234, 88, 12, 0.5)', glow: 'bg-orange-500/50', accent: 'orange' },
};

export const Test = () => {
  const colors = planetColors['Design'];
  return (
    <motion.div animate={{ boxShadow: [colors.shadowCss.replace('0.5', '0.3'), colors.shadowCss.replace('0.5', '0.6')] }} />
  );
};
