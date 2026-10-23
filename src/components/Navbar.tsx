import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sparkles, Globe } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Branches', href: '#branches' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#work' },
    { name: 'AI System', href: '#ai-mascot' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0a0a]/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Custom Block Logo: VEX ASIA */}
            <a
              href="#"
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="VEX ASIA Home"
            >
              {/* Geometric Block Mark */}
              <div className="relative w-10 h-10 bg-neutral-900 border border-white/15 rounded-lg flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:border-[#b6ff3b]/60">
                <div className="absolute inset-0 bg-gradient-to-br from-[#b6ff3b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <svg
                  viewBox="0 0 512 512"
                  className="w-7 h-7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="46,108 196,108 256,318 316,108 466,108 316,404 196,404" fill="#FFFFFF" />
                  <polygon points="110,108 196,108 402,404 316,404" fill="#b6ff3b" />
                  <polygon points="316,108 402,108 196,404 110,404" fill="#b6ff3b" />
                  <polygon points="256,193 299,256 256,318 213,256" fill="#84cc23" />
                </svg>
                {/* Micro corner accent */}
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#b6ff3b]" />
              </div>

              {/* Logo Typography */}
              <div className="flex flex-col leading-none">
                <div className="flex items-center gap-1.5 font-display font-black tracking-tight text-xl text-white">
                  <span>VEX</span>
                  <span className="text-[#b6ff3b] font-display font-black tracking-wider text-lg px-1.5 py-0.5 rounded bg-[#b6ff3b]/10 border border-[#b6ff3b]/30">
                    ASIA
                  </span>
                </div>
                <span className="text-[9px] font-mono-tech tracking-widest text-neutral-400 uppercase mt-0.5">
                  Parent Conglomerate
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-neutral-900/60 border border-white/10 rounded-full px-5 py-1.5 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-1.5 text-xs lg:text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action: CTA & Hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenContact}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#b6ff3b] text-black font-semibold text-xs lg:text-sm tracking-wide transition-all duration-300 hover:bg-[#c6ff5c] hover:shadow-[0_0_25px_rgba(182,255,59,0.5)] active:scale-95"
              >
                <span>Partner with us</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              {/* Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg bg-neutral-900/90 border border-white/10 text-neutral-200 hover:text-[#b6ff3b] hover:border-[#b6ff3b]/40 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 md:px-12 transition-all">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#b6ff3b] tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VEX ASIA Ecosystem</span>
            </div>

            {/* Quick 3 Branch Tags */}
            <div className="grid grid-cols-1 gap-2 p-3 rounded-xl bg-neutral-900/80 border border-white/10 text-xs">
              <div className="flex items-center justify-between text-neutral-300">
                <span className="font-bold text-white">Jagoron TV</span>
                <span className="text-[10px] font-mono-tech text-[#b6ff3b]">Online Media Cell</span>
              </div>
              <div className="flex items-center justify-between text-neutral-300">
                <span className="font-bold text-white">VOX ANIMATION</span>
                <span className="text-[10px] font-mono-tech text-[#b6ff3b]">Anime & Manga Studio</span>
              </div>
              <div className="flex items-center justify-between text-neutral-300">
                <span className="font-bold text-white">V-VORTEX</span>
                <span className="text-[10px] font-mono-tech text-[#b6ff3b]">Creative Agency & IT</span>
              </div>
            </div>

            <ul className="space-y-4">
              {navLinks.map((link, idx) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-baseline gap-4 group py-2 border-b border-neutral-800 text-2xl sm:text-3xl font-display font-bold text-neutral-300 hover:text-[#b6ff3b] transition-colors"
                  >
                    <span className="text-xs font-mono-tech text-neutral-600 group-hover:text-[#b6ff3b]">
                      0{idx + 1}
                    </span>
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#b6ff3b]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8 border-t border-white/10 space-y-6">
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-neutral-500 font-mono-tech block mb-1">Central Concierge</span>
                <a
                  href="mailto:contact@vex.asia"
                  className="text-neutral-200 hover:text-[#b6ff3b] transition-colors font-medium"
                >
                  contact@vex.asia
                </a>
              </div>
              <div>
                <span className="text-neutral-500 font-mono-tech block mb-1">Headquarters</span>
                <span className="text-neutral-300 flex items-center gap-1">
                  <Globe className="w-3 h-3 text-[#b6ff3b]" /> Dhaka, Bangladesh
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3.5 rounded-xl bg-[#b6ff3b] text-black font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-[#c6ff5c] shadow-[0_0_20px_rgba(182,255,59,0.35)]"
            >
              <span>Connect with our branches</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
