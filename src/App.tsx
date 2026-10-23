/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WorkSection } from './components/WorkSection';
import { AiMascotSection } from './components/AiMascotSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ScrollNavIndicator } from './components/ScrollNavIndicator';
import { useSectionTransitions } from './hooks/useSectionTransitions';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [prefilledService, setPrefilledService] = useState<string>('');

  // Initialize GSAP scroll-triggered entry/exit animations
  useSectionTransitions();

  const scrollToContact = (service?: string) => {
    if (service) {
      setPrefilledService(service);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 flex flex-col font-sans selection:bg-[#b6ff3b] selection:text-black">
      {/* 1. Fixed Navigation Bar */}
      <Navbar onOpenContact={() => scrollToContact()} />

      {/* Floating Section Progress Indicator & Quick Nav */}
      <ScrollNavIndicator />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 2. Hero Section with Interactive WebGL Fluid Metallic Shader */}
        <HeroSection
          onOpenContact={() => scrollToContact()}
          onExploreWork={scrollToWork}
        />

        {/* 3. About Us Section with Interactive Lime Green Pills */}
        <AboutSection />

        {/* 4. Services Section with Stacked Horizontal Interactive Cards */}
        <ServicesSection onSelectService={(service) => scrollToContact(service)} />

        {/* 5. Our Work Section with GSAP Horizontal Scrolling Showcase */}
        <WorkSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 6. AI Chatbot Integration Section with 3D Robotic Mascot */}
        <AiMascotSection />

        {/* 7. Contact / "Let's talk" Section */}
        <ContactSection initialService={prefilledService} />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Interactive Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onBriefService={() => {
          if (selectedProject) {
            scrollToContact(selectedProject.category);
          }
        }}
      />
    </div>
  );
}
