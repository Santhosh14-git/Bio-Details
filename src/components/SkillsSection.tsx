import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Zap, Cpu, Sparkles } from 'lucide-react';

type SkillStatus = 'INTERMEDIATE' | 'PRACTICING' | 'LEARNING' ;

interface Skill {
  name: string;
  level: number;
  category: string;
  status: SkillStatus;
}

interface SkillModuleProps {
  skill: Skill;
  index: number;
}

interface TechPillProps {
  tech: string;
  index: number;
}

const skills: Skill[] = [
  { name: 'React', level: 70, category: 'Frontend', status: 'PRACTICING' },
  { name: 'JavaScript', level: 60, category: 'Frontend', status: 'LEARNING' },
  { name: 'TypeScript', level: 60, category: 'Frontend', status: 'PRACTICING' },
  { name: 'UI/UX Design', level: 88, category: 'Design', status: 'INTERMEDIATE' },
  { name: 'PHP', level: 85, category: 'Backend', status: 'INTERMEDIATE' },
  { name: 'Python', level: 76, category: 'Backend', status: 'PRACTICING' },
  { name: 'SQL', level: 80, category: 'Database', status: 'INTERMEDIATE' },
  { name: 'Node.js', level: 40, category: 'Backend', status: 'LEARNING' },
  { name: 'Arduino IDE', level: 75, category: 'Hardware', status: 'INTERMEDIATE' },
  { name: 'HTML,CSS,JS', level: 80, category: 'Hardware', status: 'INTERMEDIATE' },
];

const technologies: string[] = [
  'Figma','Adobe XD','sketch','photoshop','canva','User Research','Prototyping','Wireframing',
  'canva','HTML5','CSS3','JavaScript','MySQL', 'PHP', '.NET', 'Bootstrap',
  'React', 'TypeScript', 'Node.js', 'Python', 'TailwindCSS','.NET Core', 
   'Firebase',  'RESTful APIs', 'Power BI', 'Tableau',
   'Arduino',   'Redux', 'Git',
];

const statusColors: Record<SkillStatus, string> = {
  INTERMEDIATE: 'from-cyan-500 to-blue-500',
  PRACTICING: 'from-blue-500 to-purple-500',
  LEARNING: 'from-purple-500 to-pink-500',

};

const statusBgColors: Record<SkillStatus, string> = {
  INTERMEDIATE: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300',
  PRACTICING: 'bg-blue-500/10 border-blue-500/30 text-blue-300',
  LEARNING: 'bg-purple-500/10 border-purple-500/30 text-purple-300',
  
};

const SkillModule = ({ skill, index }: SkillModuleProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, rotateX: -20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.7, type: 'spring', stiffness: 80 }}
      whileHover={{ y: -8, boxShadow: '0 25px 60px rgba(59, 130, 246, 0.4)' }}
      className="relative p-4 rounded-2xl border border-blue-400/40 backdrop-blur-xl bg-gradient-to-br from-blue-950/40 via-blue-900/30 to-purple-950/40 hover:border-blue-300/60 transition-all duration-300 group overflow-hidden shadow-xl hover:shadow-blue-500/20"
    >
      {/* Gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/8 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

      {/* Header: Name + Category */}
      <div className="relative z-10 flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-base font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:to-cyan-200 transition-all mb-2">
            {skill.name}
          </h3>
          <p className="text-sm text-blue-300 font-semibold">{skill.category}</p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
          className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold border-2 backdrop-blur-md ${statusBgColors[skill.status]}`}
          whileHover={{ scale: 1.1 }}
        >
          {skill.status}
        </motion.div>
      </div>

      {/* Level percentage display */}
      <motion.div 
        className="relative z-10 text-right mb-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.15 }}
      >
        <span className="text-base font-bold bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
          {skill.level}%
        </span>
      </motion.div>

      {/* Activity Bar with glow */}
      <div className="relative z-10 space-y-3">
        <div className="h-2 bg-blue-900/30 rounded-full overflow-hidden backdrop-blur-sm border border-blue-500/20">
          <motion.div
            className={`h-full rounded-full bg-gradient-to-r ${statusColors[skill.status]} shadow-lg`}
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: `${skill.level}%`, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              boxShadow: `0 0 20px rgba(59, 130, 246, 0.7), inset 0 0 10px rgba(255, 255, 255, 0.1)`,
            }}
          />
        </div>
        
        {/* Idle pulse animation */}
        <motion.div
          className="h-0.5 bg-gradient-to-r from-blue-400/30 via-cyan-400/20 to-transparent rounded-full"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
        />
      </div>
    </motion.div>
  );
};

const TechPill = ({ tech, index }: TechPillProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, type: 'spring', stiffness: 120, damping: 15 }}
      whileHover={{ 
        y: -4,
        scale: 1.1,
        boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)',
      }}
      className="relative px-6 py-3 rounded-full backdrop-blur-xl border border-blue-400/50 bg-gradient-to-r from-blue-500/25 via-blue-400/20 to-cyan-500/25 text-base font-bold text-blue-100 cursor-default group overflow-hidden transition-all duration-300 shadow-lg hover:shadow-blue-500/40 hover:border-blue-300/70 hover:text-white"
    >
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
      
      <span className="relative flex items-center gap-2">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.1, 0.8] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.05 }}
          className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
        />
        {tech}
      </span>
    </motion.div>
  );
};

const SkillsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const journeyPoints: string[] = [
    'Started with UI/UX design — learned user research, wireframing, and basic usability principles',
    'Designed clean interfaces using Figma for web applications',
    'Learned HTML to structure web pages and CSS for layouts, colors, spacing, and responsive design',
    'Learned JavaScript to add interactivity and dynamic behavior',
    'Built responsive websites and fixed layout issues across screen sizes',
    'In third year, focused on real-world problem solving through academic projects',
    'Worked on an IoT-based web app — connected hardware data to a web interface (PHP, JSON, SQL)',
    'Started freelancing, creating static business websites and hosting via Git & GitHub',
    'Integrated Google Maps for client projects and delivered final-year full-stack solutions as freelance work',
    'Explored digital marketing basics and used Canva for promotional designs',
    'Expanded into data analytics with Power BI and Tableau using SQL datasets',
    'Joined a startup to gain industry experience working on React, API integration, .NET and PHP',
    'Continued part-time freelancing while learning Node.js and strengthening Python skills for full workflows'
  ];

  const journeyColors: string[] = [
    'from-blue-400 to-cyan-400 shadow-blue-400/50',
    'from-cyan-400 to-blue-400 shadow-cyan-400/50',
    'from-purple-400 to-pink-400 shadow-purple-400/50',
    'from-green-400 to-lime-400 shadow-green-400/50',
    'from-yellow-400 to-orange-400 shadow-yellow-400/50',
    'from-teal-400 to-emerald-400 shadow-teal-400/50'
  ];

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-72 h-72 bg-blue-400/15 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/60 bg-blue-500/15 backdrop-blur-md mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-bold text-blue-300">Technical Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Skills & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Technology</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto font-light"
          >
            Comprehensive tech stack across frontend, backend, design, and emerging technologies
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-stretch">
          {/* Skill Modules - Left Column */}
          <div className="lg:col-span-1 h-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <Cpu className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold text-white">
                System Modules
              </h3>
            </motion.div>

            <div className="space-y-3 h-full overflow-y-auto pr-2">
              {skills.map((skill, index) => (
                <SkillModule key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Tech Stack Pills - Right Column */}
          <div className="lg:col-span-2 h-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <Zap className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-bold text-white">
                Active Tools & Frameworks
              </h3>
            </motion.div>

            <div className="flex flex-wrap gap-2.5 mb-12">
              {technologies.map((tech, index) => (
                <TechPill key={tech} tech={tech} index={index} />
              ))}
            </div>

            {/* System Summary Card - Matching glass-card style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative p-6 lg:p-8 rounded-2xl backdrop-blur-xl border border-blue-400/50 hover:border-blue-300/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/40 group overflow-hidden bg-gradient-to-br from-blue-950/50 via-blue-900/40 to-purple-950/50"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-400/50">
                  <Cpu className="w-6 h-6 text-blue-950 font-bold" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">
                    My Tech Journey
                  </h4>
                  <p className="text-sm text-blue-200 font-semibold">
                    Learning Through Projects & Freelancing
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {journeyPoints.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.06 }}
                    className="flex items-center gap-3 text-base text-white font-bold group-hover:text-blue-100 transition-colors"
                  >
                    <div className={`flex-shrink-0 w-2.5 h-2.5 rounded-full bg-gradient-to-r ${journeyColors[idx % journeyColors.length]} shadow-lg`} />
                    <span>{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
