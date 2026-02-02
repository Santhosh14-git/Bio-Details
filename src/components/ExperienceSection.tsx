import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  description: string;
  side: 'left' | 'right';
  type: 'work' | 'education';
  skills?: string[];
}

const experienceData: ExperienceItem[] = [
  {
    year: 'MAY 2024 - JUL 2024',
    title: 'Frontend Web Development Intern',
    company: 'Devskillhub',
    description: 'Developed responsive web interfaces for e-commerce, car rental, and e-learning platforms using HTML, CSS, and JavaScript, collaborating with UI/UX designers to turn mockups into functional, visually appealing pages.',
    side: 'left',
    type: 'work',
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
  },
  {
    year: 'MAY 2024 - JUN 2024',
    title: 'User Experience Design Intern',
    company: 'Skillforge',
    description: 'Designed intuitive web interfaces, enhancing navigation, usability, and layouts for both desktop and mobile platforms.',
    side: 'right',
    type: 'work',
    skills: ['UI/UX Design', 'Wireframing', 'Prototyping', 'Mobile Design'],
  },
  {
    year: 'JUL 2024 - AUG 2024',
    title: 'User Experience Design Intern',
    company: 'POSTULATE',
    description: 'Designed and prototyped UIs for e-commerce, car rental, and e-learning platforms, using user research and competitive analysis to enhance usability and create engaging experiences.',
    side: 'left',
    type: 'work',
    skills: ['Figma', 'User Research', 'Prototyping', 'UI Design'],
  },
  {
    year: '2024 - TILL NOW',
    title: 'freelancing work',
    company: 'freelance',
    description: 'During my freelancing experience, I developed websites and web applications for clients and academic projects. I built two live client websites for Muthu Construction and Sakthi Travels, hosted on GitHub with Google Maps integration, and completed 4+ final-year projects including Hostel Management, Exam Seating, Bus Tracking, Outpass, and Mess Token systems. I also created two frontend websites—Vivaha Milan, a React-based matrimonial web app hosted on Netlify, and Pasumai Kalan, a client project under review—strengthening my UI/UX and frontend development skills.',
    side: 'right',
    type: 'work',
    skills: ['Web Development', 'UI/UX Design', 'Frontend Development', 'React', 'JavaScript','GitHub Pages', 'Usability & User-Centered Design','Problem Solving','Client Requirement Analysis','Google Maps Integration','Responsive Web Design'],
  },
  {
    year: 'DEC 2024 - TILL NOW',
    title: 'JUNIOR SOFTWARE DEVELOPER',
    company: 'Samudhra Tech Solutions',
    description: 'Currently working as a Junior Software Developer at Samudhra Tech Solutions, where I am gaining hands-on experience in building and maintaining web applications. In this role, I am working with React, Node.js, SQL, and .NET, contributing to frontend and backend development while improving my understanding of full-stack application workflows and real-world software development practices.',
    side: 'left',
    type: 'work',
    skills: ['React','PHP', 'SQL', '.NET', 'Database Design','Full-Stack Development','API Integration','Database Management','Debugging & Testing','Problem Solving'],
  },
];

const TimelineItem = ({ item, index }: { item: ExperienceItem; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isLeft = item.side === 'left';

  return (
    <motion.div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 items-start mb-12 lg:mb-20 ${isLeft ? '' : ''}`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* LEFT CARD - Column 1 */}
      {isLeft && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
          className="glass-card p-6 lg:p-8 rounded-2xl backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
        >
          {/* Header */}
          <div className="flex items-start gap-3 mb-4">
            <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${item.type === 'work' ? 'from-blue-500 to-cyan-500' : 'from-purple-500 to-pink-500'} flex items-center justify-center shadow-lg`}>
              {item.type === 'work' ? (
                <Briefcase className="w-5 h-5 text-white" />
              ) : (
                <GraduationCap className="w-5 h-5 text-white" />
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.company}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {item.description}
          </p>

          {/* Skills */}
          {item.skills && item.skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.3 + skillIndex * 0.05 }}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          )}
        </motion.div>
      )}

      {/* EMPTY SPACE FOR LEFT CARD ON RIGHT ITEMS */}
      {!isLeft && <div className="hidden lg:block"></div>}

      {/* CENTER TIMELINE DOT - Column 2 */}
      <div className="flex justify-center lg:justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.1, type: 'spring', stiffness: 100 }}
          className="relative flex flex-col items-center"
        >
          {/* Pulse Effect */}
          <motion.div
            className="absolute w-8 h-8 rounded-full bg-primary/20 -inset-1"
            animate={isInView ? { scale: [1, 1.2, 1], opacity: [0.8, 0.4, 0.8] } : {}}
            transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.1 }}
          />

          {/* Main Dot */}
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-blue-500 border-4 border-background shadow-lg shadow-primary/50 relative z-10" />

          {/* Year Label */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            className="text-sm font-bold text-primary mt-3 whitespace-nowrap"
          >
            {item.year}
          </motion.span>
        </motion.div>
      </div>

      {/* EMPTY SPACE FOR RIGHT CARD ON LEFT ITEMS */}
      {isLeft && <div className="hidden lg:block"></div>}

      {/* RIGHT CARD - Column 3 */}
      {!isLeft && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
          className="glass-card p-6 lg:p-8 rounded-2xl backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
        >
          {/* Header */}
          <div className="flex items-start gap-3 mb-4">
            <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${item.type === 'work' ? 'from-blue-500 to-cyan-500' : 'from-purple-500 to-pink-500'} flex items-center justify-center shadow-lg`}>
              {item.type === 'work' ? (
                <Briefcase className="w-5 h-5 text-white" />
              ) : (
                <GraduationCap className="w-5 h-5 text-white" />
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.company}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {item.description}
          </p>

          {/* Skills */}
          {item.skills && item.skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.3 + skillIndex * 0.05 }}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: '-50px' });
  const isTimelineInView = useInView(timelineRef, { once: true, margin: '0px' });

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });

  // Timeline line height animation
  const timelineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-32 overflow-hidden"
    >
      <div className="section-container">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary font-medium mb-4"
          >
            Work Experience
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="heading-lg mb-4"
          >
            Professional <span className="text-gradient">Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-muted-foreground"
          >
            UI/UX Designer & Full-Stack Developer skilled in building clean, responsive, and user-friendly web applications.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-6xl mx-auto">
          {/* Center Line - Background */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20">
            <motion.div
              className="w-full bg-gradient-to-b from-primary via-blue-500 to-cyan-500"
              style={{ height: timelineHeight }}
              initial={{ height: '0%' }}
              animate={isTimelineInView ? { height: '100%' } : { height: '0%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </div>

          {/* Timeline Items */}
          <div className="relative">
            {experienceData.map((item, index) => (
              <TimelineItem key={item.year} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom CTA - Optional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20 pt-12 border-t border-white/10"
        >
          <p className="text-muted-foreground mb-6">
            Skilled in UI/UX design, wireframing, and prototyping using Figma, with hands-on experience in frontend development using HTML, CSS, JavaScript, and React, along with backend development using PHP and .NET . Experienced in building responsive web applications, integrating real-world features like Google Maps, and collaborating with clients and teams to deliver intuitive, user-friendly digital solutions.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
