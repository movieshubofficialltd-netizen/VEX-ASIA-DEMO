import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionMarker {
  id: string;
  name: string;
  index: string;
}

const sections: SectionMarker[] = [
  { id: 'hero', name: 'Intro', index: '01' },
  { id: 'about', name: 'About', index: '02' },
  { id: 'services', name: 'Services', index: '03' },
  { id: 'work', name: 'Work', index: '04' },
  { id: 'ai-mascot', name: 'AI Mascot', index: '05' },
  { id: 'contact', name: 'Contact', index: '06' },
];

export const ScrollNavIndicator: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    // Track total scroll progress
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Set up ScrollTrigger listeners for each section
    sections.forEach((sec) => {
      let targetSelector = sec.id === 'hero' ? 'section:first-of-type' : `#${sec.id}`;
      const elem = document.querySelector(targetSelector);
      if (elem) {
        ScrollTrigger.create({
          trigger: elem,
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => setActiveSection(sec.id),
          onEnterBack: () => setActiveSection(sec.id),
        });
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    let target = id === 'hero' ? document.querySelector('section:first-of-type') : document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3.5 select-none pointer-events-auto"
    >
      {/* Background slim progress track */}
      <div className="absolute right-[5px] top-0 bottom-0 w-[2px] bg-white/10 rounded-full overflow-hidden -z-10">
        <div
          className="w-full bg-[#b6ff3b] transition-all duration-150 ease-out"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {sections.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <button
            key={sec.id}
            onClick={() => scrollTo(sec.id)}
            className="group flex items-center gap-3 py-1 cursor-pointer focus:outline-none"
            aria-label={`Scroll to ${sec.name}`}
          >
            {/* Label reveal on hover or active */}
            <span
              className={`text-[10px] font-mono-tech tracking-wider uppercase transition-all duration-300 ${
                isActive
                  ? 'text-[#b6ff3b] font-bold opacity-100 translate-x-0'
                  : 'text-neutral-500 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0'
              }`}
            >
              {sec.index} // {sec.name}
            </span>

            {/* Indicator Dot / Bar */}
            <div
              className={`transition-all duration-300 rounded-full flex items-center justify-center ${
                isActive
                  ? 'w-3 h-3 bg-[#b6ff3b] shadow-[0_0_12px_#b6ff3b]'
                  : 'w-2 h-2 bg-neutral-700 group-hover:bg-neutral-300 group-hover:scale-125'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
};
