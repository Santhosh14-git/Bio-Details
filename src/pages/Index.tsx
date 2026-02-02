import CustomCursor from '@/components/CustomCursor';
import NeuralBackground from '@/components/NeuralBackground';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';

import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import CertificatesShowcase from '@/components/CertificatesShowcase';

import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import useSmoothScroll from '@/hooks/useSmoothScroll';

const Index = () => {
  useSmoothScroll();

  return (
    <div className="dark relative">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Neural Network Background */}
      <NeuralBackground />
      
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <CertificatesShowcase />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
