import React, { useState, useEffect } from 'react';
import { ArrowUp, Instagram, Twitter, Linkedin, Youtube, Globe, Check, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const [dhakaTime, setDhakaTime] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setDhakaTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Dhaka',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };

    updateClocks();
    const timer = setInterval(updateClocks, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
  };

  return (
    <footer className="bg-[#070807] border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Brand & Global Network */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Logo & Tagline */}
          <div className="lg:col-span-5 space-y-6">
            {/* Custom Block Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-neutral-900 border border-[#b6ff3b]/40 rounded-lg flex items-center justify-center relative overflow-hidden">
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
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#b6ff3b]" />
              </div>
              <div className="flex items-center gap-1.5 font-display font-black tracking-tight text-2xl text-white">
                <span>VEX</span>
                <span className="text-[#b6ff3b] font-display font-black text-xl px-1.5 py-0.5 rounded bg-[#b6ff3b]/10 border border-[#b6ff3b]/30">
                  ASIA
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-sm sm:text-base text-neutral-300 max-w-sm leading-relaxed">
              Parent Conglomerate. Uniting Jagoron TV, VOX ANIMATION, and V-VORTEX under one unified vision. Headquartered in Dhaka, Bangladesh.
            </p>

            {/* Live Dhaka Clock & Headquarters badge */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="px-3.5 py-2 rounded-xl bg-neutral-900/80 border border-white/10 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#b6ff3b] animate-pulse" />
                <span className="text-xs font-mono-tech text-neutral-400">DHAKA HQ:</span>
                <span className="text-xs font-mono-tech font-bold text-white">
                  {dhakaTime || '18:00:00'} (BST / GMT+6)
                </span>
              </div>

              <div className="px-3.5 py-2 rounded-xl bg-neutral-900/80 border border-white/10 flex items-center gap-2.5">
                <Globe className="w-3.5 h-3.5 text-[#b6ff3b]" />
                <span className="text-xs font-mono-tech text-neutral-300">
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>
          </div>

          {/* Quick Directory Links: 3 Divisions */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono-tech text-[#b6ff3b] uppercase tracking-widest block">
              Enterprise Divisions
            </span>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Jagoron TV</span>
                  <span className="text-[10px] font-mono-tech text-[#b6ff3b] opacity-0 group-hover:opacity-100 transition-opacity">Online Media</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>VOX ANIMATION</span>
                  <span className="text-[10px] font-mono-tech text-[#b6ff3b] opacity-0 group-hover:opacity-100 transition-opacity">Anime & Manga</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>V-VORTEX</span>
                  <span className="text-[10px] font-mono-tech text-[#b6ff3b] opacity-0 group-hover:opacity-100 transition-opacity">Agency & IT</span>
                </a>
              </li>
              <li className="pt-2 border-t border-white/10">
                <a href="#services" className="hover:text-white transition-colors">
                  All Division Services
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Portfolio & Showcases
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Engage Divisions
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Direct Inquiries */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono-tech text-[#b6ff3b] uppercase tracking-widest block">
              The VEX Dispatch
            </span>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Curated perspectives on generative AI agents, WebGL architecture, and growth strategies for modern brands.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3.5 rounded-xl bg-[#b6ff3b]/10 border border-[#b6ff3b]/30 flex items-center gap-2 text-xs text-[#b6ff3b]">
                <Check className="w-4 h-4 shrink-0" />
                <span>Subscribed. Welcome to the inner circle.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="partner@firm.com"
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#b6ff3b]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-[#b6ff3b] text-black font-bold text-xs hover:bg-[#c6ff5c] transition-colors"
                >
                  Join
                </button>
              </form>
            )}

            <div className="pt-2">
              <span className="text-[11px] font-mono-tech text-neutral-500 block">
                Official Agency Domain:
              </span>
              <a
                href="https://vex.asia"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono-tech text-neutral-300 hover:text-[#b6ff3b] transition-colors"
              >
                https://vex.asia
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Social Handle Placeholders & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs font-mono-tech text-neutral-500 text-center sm:text-left">
            © {new Date().getFullYear()} VEX ASIA Ltd. All rights reserved. Built with precision for market leaders.
          </div>

          {/* Social Handles */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-[#b6ff3b] hover:border-[#b6ff3b]/40 transition-colors"
              aria-label="VEX ASIA on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-[#b6ff3b] hover:border-[#b6ff3b]/40 transition-colors"
              aria-label="VEX ASIA on X"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-[#b6ff3b] hover:border-[#b6ff3b]/40 transition-colors"
              aria-label="VEX ASIA on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-[#b6ff3b] hover:border-[#b6ff3b]/40 transition-colors"
              aria-label="VEX ASIA on YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="p-2 ml-2 rounded-full bg-neutral-800 text-neutral-300 hover:text-black hover:bg-[#b6ff3b] transition-all"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
