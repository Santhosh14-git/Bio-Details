import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Globe, ExternalLink } from 'lucide-react';
import ProjectModal from './ProjectModal';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image?: string;
  deploymentUrl?: string;
  externalUrl?: string;
  gradient: string;
  year: string;
};

const projects: Project[] = [
  {
     id: 1,
    title: 'Smart Online Test System',
    category: 'Web Application',
    description:
      'A comprehensive web-based examination platform designed to conduct online tests with automated evaluation, instant results, and role-based access.',
    tech: ['Html', 'CSS', 'JavaScript', 'PHP', 'MYSQL'],
    image: '/projects/online-test.png',
    deploymentUrl: 'http://exam.byethost4.com',
    externalUrl: '/project-details',
    gradient: 'from-blue-500 via-indigo-500 to-purple-500',
    year: '2025',
  },
  {
    id: 2,
    title: 'Exam Seating Arrangement',
    category: 'Web Application',
    description:
      'A role-based web application that manages exam hall details and automatically generates seating arrangements for students in a secure and organized manner.',
    tech: ['Html', 'CSS', 'JavaScript', 'PHP', 'MYSQL'],
    image: '/projects/exam hall seat.png',
    deploymentUrl: 'https://exam.byethost12.com/index.php',
    externalUrl: '/project-details-iot',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    year: '2024',
  },
  {
    id: 3,
    title: 'Biometric Attendance',
    category: 'IoT-Enabled Biometric Attendance Management System',
    description:
      'Developed a secure attendance system using fingerprint sensors and IoT integration, enabling automatic student attendance tracking with staff-only access and real-time report generation.',
    tech: ['IOT', 'html', 'css', 'javascript' , 'php', 'mysql', 'JSON'],
    image: '/projects/biometric.png',
    deploymentUrl: ' http://104.237.3.44/CSE',
    externalUrl: '/project-details-biometric',
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    year: '2023',
  },
  {
    id: 4,
    title: 'Water Level Monitoring System',
    category: 'IoT-Based Water Level Monitoring System',
    description:
      'Designed and implemented an ESP8266-based IoT solution to monitor water levels in real time using conductive sensors, providing local LED indication and wireless monitoring for efficient water management.',
    tech: ['IOT', 'Html', 'CSS', 'JavaScript', 'PHP', 'JSON'],
    image: '/projects/water level.png',
    deploymentUrl: '',
    externalUrl: '/project-details-water',
    gradient: 'from-cyan-500 via-teal-500 to-green-500',
    year: '2023',
  },
  {
    id: 5,
    title: 'Water Motor Controller',
    category: 'IoT-Based Water Motor Controller',
    description:
      'Designed and implemented a GSM-based remote motor control system that allows users to turn a water motor ON or OFF through a phone call, improving water usage efficiency and operational convenience.',
    tech: ['GSM Module', 'Microcontroller', 'Relay Module'],
    image: '/projects/motor control.png',
    deploymentUrl: '',
    externalUrl: '/project-details-water-level',
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    year: '2023',
  },
  {
    id: 6,
    title: 'Bus Tracking System',
    category: 'IoT-Based Web Application',
    description:
      'Developed a web-based application to track real-time bus location and status using PHP and JSON, improving transport efficiency and student convenience',
    tech: ['GPS Device', 'HTML', 'CSS', 'JavaScript', 'PHP', 'JSON'],
    image: '/projects/gps.png',
    deploymentUrl: '',
    externalUrl: '/project-details-bus',
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    year: '2023',
  },
  {
    id: 7,
    title: 'College Outpass Management System',
    category: 'Digital Permission System',
    description:
      'Developed a web-based application to digitize student outpass requests and approvals. Features role-based access control, automated workflows, and comprehensive reporting using HTML, CSS, JavaScript, PHP, and MySQL.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    image: '/projects/outpass.png',
    deploymentUrl: '',
    externalUrl: '/project-details-outpass',
    gradient: 'from-slate-500 via-slate-600 to-slate-700',
    year: '2023',
  },
  {
    id: 8,
    title: 'Sakthi Travels Website',
    category: 'Travel Blog & Services',
    description:
      'Designed and hosted a static travel blog and service website for a freelance client using HTML, CSS, and JavaScript, with Google Maps integration. Improved customer reach and booking inquiries with fast-loading, mobile-friendly design.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Google Maps'],
    image: '/projects/travels.png',
    deploymentUrl: 'https://sakthitravels.github.io/info/',
    externalUrl: '/project-details-travels',
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
    year: '2023',
  },
  {
    id: 9,
    title: 'Muthu Construction Website',
    category: 'Construction Services',
    description:
      'Designed and hosted a static professional website for a construction company to showcase services and completed projects. Features project gallery, contact options, and service showcase to improve online presence and customer engagement.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/muthu construction.png',
    deploymentUrl: 'https://immuthuconstruction.github.io/info/',
    externalUrl: '/project-details-construction',
    gradient: 'from-yellow-500 via-amber-500 to-orange-500',
    year: '2023',
  },
  {
    id: 10,
    title: 'ERP Web Application',
    category: 'Enterprise Resource Planning',
    description:
      'Developed a full-stack ERP system using React + TypeScript frontend, .NET Core backend, and SQL Server database. Integrated HR, Finance, Inventory, and Project modules with real-time reporting, role-based access, and comprehensive analytics.',
    tech: ['React', 'TypeScript', '.NET Core', 'SQL Server'],
    image: '/projects/erp.png',
    deploymentUrl: 'https://sparkling-souffle-74c657.netlify.app/',
    externalUrl: '/project-details-erp',
    gradient: 'from-teal-500 via-cyan-500 to-blue-500',
    year: '2024',
  },
  {
    id: 11,
    title: 'Mail Send Module',
    category: 'Email Communication System',
    description:
      'Developed a web-based email sending system using PHP, MySQL, HTML, CSS, and JavaScript. Features multi-recipient support, real-time delivery tracking, centralized email logging, and retry functionality for failed emails.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    image: '/projects/mail.png',
    deploymentUrl: 'http://send.byethost22.com',
    externalUrl: '/project-details-mail',
    gradient: 'from-green-500 via-emerald-500 to-lime-500',
    year: '2023',
  },
  {
    id: 12,
    title: 'Billing Software',
    category: 'Invoice Management System',
    description:
      'Developed an automated invoicing system using PHP, MySQL, HTML, CSS, and JavaScript. Features automatic calculation, customer/product management, PDF invoice generation, payment tracking, and comprehensive sales analytics.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    image: '/projects/billing.png',
    deploymentUrl: 'http://www.billmanagement.byethost3.com',
    externalUrl: '/project-details-billing',
    gradient: 'from-indigo-500 via-violet-500 to-purple-500',
    year: '2024',
  },
  {
    id: 13,
    title: 'Vivaha Milan',
    category: 'Matrimony & Compatibility Platform',
    description:
      'Designed and deployed a responsive matrimonial matchmaking web app hosted on Netlify using React, HTML, CSS, and JavaScript. Features user registration, profile creation, intelligent matching, and partner browsing with traditional compatibility checks.',
    tech: ['React', 'Netlify', 'HTML', 'CSS', 'JavaScript'],
    image: '/projects/matrimony.png',
    deploymentUrl: 'https://vivahamilan.netlify.app/',
    externalUrl: '/project-details-vivaha-milan',
    gradient: 'from-red-500 via-rose-500 to-pink-500',
    year: '2024',
  },
  {
    id: 14,
    title: 'Hostel Room Management System',
    category: 'Hostel Administration Platform',
    description:
      'Developed a web-based hostel management system using PHP, MySQL, HTML, CSS, and JavaScript. Features room allocation, occupancy tracking, student records management, and admin/student portals with role-based access control.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    image: '/projects/hostel.png',
    deploymentUrl: 'http://hostel.byethost5.com/',
    externalUrl: '/project-details-hostel',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    year: '2024',
  },
];

const ProjectCard = ({
  project,
  index,
  onModalOpen,
}: {
  project: Project;
  index: number;
  onModalOpen: (url: string) => void;
}): JSX.Element => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        delay: index * 0.15,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative"
    >
      <motion.div
        className="relative overflow-hidden rounded-3xl aspect-[4/3]"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
      >
        {/* IMAGE */}
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* GRADIENT */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
        ></div>

        {/* DARK OVERLAY */}
        <motion.div
          className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/65"
        ></motion.div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col justify-between h-full p-8">
          {/* TOP */}
          <div className="flex justify-between items-start">
            <span className="px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium">
              {project.category}
            </span>

            <div className="flex gap-2 opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
              {project.deploymentUrl && (
                <a
                  href={project.deploymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
                >
                  <Globe className="w-5 h-5 text-white" />
                </a>
              )}

              {project.externalUrl && (
                <button
                  onClick={() => onModalOpen(project.externalUrl!)}
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </button>
              )}
            </div>
          </div>

          {/* BOTTOM */}
          <div>
            <div className="text-white/60 text-sm mb-2">{project.year}</div>

            <h3 className="text-2xl font-bold text-white mb-3">
              {project.title}
            </h3>

            <p className="text-white/70 text-sm leading-relaxed mb-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  const handleModalOpen = (url: string) => {
    setSelectedUrl(url);
    setModalOpen(true);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  return (
    <section id="projects" ref={containerRef} className="py-32">
      <div className="section-container">
        <motion.div
          ref={headingRef}
          className="text-center mb-20"
          style={{ y: headerY }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium mb-4 inline-block"
          >
            Selected Works
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg"
          >
            Projects that <span className="text-gradient">define</span> my craft
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onModalOpen={handleModalOpen} />
          ))}
        </div>

        <ProjectModal url={selectedUrl} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </section>
  );
};

export default ProjectsSection;
