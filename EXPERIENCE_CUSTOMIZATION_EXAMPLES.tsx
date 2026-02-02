// CUSTOMIZATION EXAMPLES FOR EXPERIENCE SECTION

// ============================================
// 1. CUSTOM DATA WITH YOUR ACTUAL EXPERIENCE
// ============================================

const customExperienceData = [
  {
    year: '2024',
    title: 'Senior React Developer',
    company: 'Tech Startup XYZ',
    description: 'Led frontend architecture for multi-tenant SaaS platform. Implemented real-time features using WebSockets and optimized performance achieving 90+ Lighthouse score.',
    side: 'right' as const,
    type: 'work' as const,
    skills: ['React', 'TypeScript', 'WebSockets', 'Performance Optimization'],
  },
  {
    year: '2023',
    title: 'Full Stack Developer',
    company: 'Digital Agency',
    description: 'Built and deployed responsive web applications for e-commerce clients. Managed both frontend and backend development, ensuring seamless user experiences.',
    side: 'left' as const,
    type: 'work' as const,
    skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
  },
];


// ============================================
// 2. ALTERNATIVE COLOR SCHEMES
// ============================================

// DARK BLUE THEME
const darkBlueWorkGradient = 'from-slate-600 to-slate-800';
const darkBlueEducationGradient = 'from-indigo-600 to-indigo-800';

// VIBRANT NEON
const neonWorkGradient = 'from-cyan-500 to-blue-600';
const neonEducationGradient = 'from-pink-500 to-purple-600';

// WARM SUNSET
const warmWorkGradient = 'from-amber-500 to-orange-600';
const warmEducationGradient = 'from-rose-500 to-red-600';


// ============================================
// 3. CUSTOM CARD STYLING COMPONENT
// ============================================

import { motion } from 'framer-motion';

interface CustomTimelineCardProps {
  title: string;
  description: string;
  index: number;
  isInView: boolean;
  customGradient?: string;
  customBorderColor?: string;
}

const CustomTimelineCard = ({
  title,
  description,
  index,
  isInView,
  customGradient = 'from-blue-500/10 to-purple-500/10',
  customBorderColor = 'border-blue-500/30',
}: CustomTimelineCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`glass-card p-8 rounded-2xl backdrop-blur-md border ${customBorderColor} hover:border-white/40 transition-all duration-300 hover:shadow-2xl group`}
      style={{
        background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
      }}
    >
      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};


// ============================================
// 4. TIMELINE WITH CLICK EVENTS
// ============================================

const TimelineItemWithClick = ({ item, index }: any) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div
      onClick={() => setIsExpanded(!isExpanded)}
      className="cursor-pointer"
    >
      {/* Basic card content */}
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="p-6 rounded-xl glass-card"
      >
        <h3 className="font-semibold">{item.title}</h3>

        {/* Expandable content */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={isExpanded ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="mt-4 text-sm text-muted-foreground">
            {item.description}
          </p>

          {item.skills && (
            <div className="flex flex-wrap gap-2 mt-4">
              {item.skills.map((skill: string) => (
                <span key={skill} className="px-3 py-1 rounded-full bg-primary/20 text-xs">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};


// ============================================
// 5. TIMELINE WITH FILTER BY TYPE
// ============================================

import React from 'react';

const FilterableTimeline = ({ experienceData }: any) => {
  const [filter, setFilter] = React.useState<'all' | 'work' | 'education'>('all');

  const filtered = experienceData.filter((item: any) =>
    filter === 'all' ? true : item.type === filter
  );

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex gap-4 mb-12 justify-center">
        {['all', 'work', 'education'].map((f) => (
          <motion.button
            key={f}
            onClick={() => setFilter(f as any)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              filter === f
                ? 'bg-primary text-white'
                : 'bg-white/10 text-muted-foreground hover:bg-white/20'
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Timeline Items */}
      {filtered.map((item: any, index: number) => (
        <TimelineItemWithClick key={item.year} item={item} index={index} />
      ))}
    </div>
  );
};


// ============================================
// 6. TIMELINE WITH HORIZONTAL VARIANT
// ============================================

const HorizontalTimeline = ({ experienceData }: any) => {
  return (
    <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory">
      {experienceData.map((item: any, index: number) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex-shrink-0 w-80 snap-center"
        >
          {/* Horizontal card */}
          <div className="glass-card p-6 rounded-xl h-full">
            <div className="text-primary font-bold mb-2">{item.year}</div>
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {item.company}
            </p>
            <p className="text-xs text-muted-foreground line-clamp-3">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};


// ============================================
// 7. ADVANCED: TIMELINE WITH TOOLTIPS
// ============================================

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const TimelineWithTooltips = ({ item, index }: any) => {
  return (
    <div className="relative">
      {/* Timeline Dot */}
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="w-6 h-6 rounded-full bg-primary border-4 border-background cursor-help"
          />
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-semibold">{item.title}</p>
          <p className="text-sm text-muted-foreground">{item.company}</p>
          <p className="text-xs text-muted-foreground mt-1">{item.year}</p>
        </TooltipContent>
      </Tooltip>

      {/* Card */}
      <motion.div className="glass-card p-6 rounded-xl ml-8">
        {/* Content */}
      </motion.div>
    </div>
  );
};


// ============================================
// 8. TIMELINE WITH STATS
// ============================================

const TimelineWithStats = ({ experienceData }: any) => {
  const totalYears = new Date().getFullYear() - 2022;
  const projectsCount = experienceData.length;
  const skillsSet = new Set(
    experienceData.flatMap((item: any) => item.skills || [])
  );

  return (
    <div>
      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mb-12">
        <motion.div
          whileHover={{ y: -5 }}
          className="glass-card p-6 rounded-xl text-center"
        >
          <div className="text-3xl font-bold text-primary">{totalYears}+</div>
          <div className="text-sm text-muted-foreground">Years in Tech</div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="glass-card p-6 rounded-xl text-center"
        >
          <div className="text-3xl font-bold text-primary">{projectsCount}</div>
          <div className="text-sm text-muted-foreground">Experiences</div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="glass-card p-6 rounded-xl text-center"
        >
          <div className="text-3xl font-bold text-primary">{skillsSet.size}</div>
          <div className="text-sm text-muted-foreground">Technologies</div>
        </motion.div>
      </div>

      {/* Timeline */}
      {/* ... timeline items ... */}
    </div>
  );
};


// ============================================
// 9. TIMELINE WITH MODAL DETAILS
// ============================================

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const TimelineWithModal = ({ item, index }: any) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          className="glass-card p-6 rounded-xl cursor-pointer hover:border-primary/50 transition-all"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.company}</p>
          <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
            {item.description}
          </p>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="max-w-2xl">
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <p className="text-lg text-muted-foreground">{item.company}</p>
            <p className="text-primary font-semibold">{item.year}</p>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {item.description}
          </p>

          {item.skills && (
            <div>
              <p className="font-semibold mb-2">Technologies Used</p>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill: string) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};


// ============================================
// 10. QUICK SWAP: DARK MODE VARIANTS
// ============================================

// If you want to support dark/light mode toggling:

const timelineColorsDark = {
  cardBg: 'from-slate-900/50 to-slate-800/50',
  cardBorder: 'border-slate-700/50',
  textPrimary: 'text-white',
  textSecondary: 'text-slate-300',
};

const timelineColorsLight = {
  cardBg: 'from-blue-50/50 to-purple-50/50',
  cardBorder: 'border-slate-200/50',
  textPrimary: 'text-slate-900',
  textSecondary: 'text-slate-600',
};


// Export for use in other files
export {
  CustomTimelineCard,
  TimelineItemWithClick,
  FilterableTimeline,
  HorizontalTimeline,
  TimelineWithTooltips,
  TimelineWithStats,
  TimelineWithModal,
  customExperienceData,
};
