import React from 'react';
import { ArrowRight, Sparkles, Tv, Clapperboard, Video, Compass, Play, Radio, Film } from 'lucide-react';
import { HeroShader } from './HeroShader';

interface HeroSectionProps {
  onOpenContact: () => void;
  onExploreWork: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact, onExploreWork }) => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 overflow-hidden">
      {/* Interactive WebGL / Three.js Fluid Metallic Green Liquid Shader Canvas */}
      <HeroShader />

      {/* Atmospheric gradient overlay for optimal text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a] pointer-events-none z-10" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        {/* Top conglomerate status badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-white/10 backdrop-blur-md mb-6 w-fit">
          <span className="w-2 h-2 rounded-full bg-[#b6ff3b] shadow-[0_0_8px_#b6ff3b]" />
          <span className="text-xs font-mono-tech tracking-wider uppercase text-neutral-300">
            HEADQUARTERED IN DHAKA, BANGLADESH
          </span>
          <span className="text-neutral-600">/</span>
          <span className="text-xs font-mono-tech text-[#b6ff3b] font-medium">3 Specialized Enterprise Divisions</span>
        </div>

        {/* Main Headline */}
        <div className="max-w-5xl">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-display font-black tracking-tight leading-[0.92] uppercase text-white mb-6">
            IDEAS BUILT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-neutral-400">
              TO{' '}
            </span>
            <span className="text-[#b6ff3b] relative inline-block">
              MOVE.
              {/* Subtle underline bar */}
              <span className="absolute -bottom-2 left-0 right-0 h-2 bg-[#b6ff3b] opacity-80 rounded-full" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl text-neutral-300 max-w-3xl font-normal leading-relaxed mb-10">
            From digital broadcasting and original anime production to high-impact videography, marketing, and IT infrastructure—VEX ASIA unites three specialized industry leaders.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <button
              onClick={onOpenContact}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#b6ff3b] text-black font-bold text-base sm:text-lg tracking-wide transition-all duration-300 hover:bg-[#c6ff5c] hover:shadow-[0_0_35px_rgba(182,255,59,0.55)] active:scale-95"
            >
              <span>Connect with our divisions</span>
              <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </button>

            <button
              onClick={onExploreWork}
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white font-medium text-sm sm:text-base border border-white/10 hover:border-white/20 transition-all backdrop-blur-md"
            >
              <Play className="w-4 h-4 fill-white text-white" />
              <span>Explore division showcase</span>
            </button>
          </div>
        </div>

        {/* Row of 3 Styled Image Cards: 3 Specific Branches */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mt-4">
          {/* Branch 1: Jagoron TV (Online Media Cell) */}
          <div className="group relative rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-[#b6ff3b]/50 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#b6ff3b]/5 rounded-full blur-2xl group-hover:bg-[#b6ff3b]/15 transition-all" />
            
            {/* Visual art canvas simulation */}
            <div className="w-full h-44 rounded-xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 border border-white/5 relative overflow-hidden flex items-center justify-center mb-4">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#b6ff3b_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="relative z-10 flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 rounded-xl bg-black/60 border border-[#b6ff3b]/30 flex items-center justify-center mb-3 group-hover:border-[#b6ff3b] transition-colors">
                  <Tv className="w-6 h-6 text-[#b6ff3b]" />
                </div>
                <div className="font-display font-bold text-white text-base tracking-wide">
                  JAGORON TV
                </div>
                <span className="text-[11px] font-mono-tech text-neutral-400 mt-1">
                  Digital News • Live Broadcasting • Online Media
                </span>
              </div>
              <div className="absolute bottom-2 left-3 text-[10px] font-mono-tech text-[#b6ff3b]/80 tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span>ONLINE MEDIA CELL</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="font-mono-tech text-neutral-400">DIVISION 01</span>
              <span className="text-[#b6ff3b] font-medium flex items-center gap-1">
                <Radio className="w-3 h-3" /> Live Reach
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mt-1 group-hover:text-[#b6ff3b] transition-colors">
              Jagoron TV
            </h3>
            <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
              Next-generation digital news broadcasting, investigative reporting, and high-engagement online media feeds.
            </p>
          </div>

          {/* Branch 2: VOX ANIMATION (Anime & Manga Studio) */}
          <div className="group relative rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-[#b6ff3b]/50 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#b6ff3b]/5 rounded-full blur-2xl group-hover:bg-[#b6ff3b]/15 transition-all" />

            {/* Visual art canvas simulation */}
            <div className="w-full h-44 rounded-xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 border border-white/5 relative overflow-hidden flex items-center justify-center mb-4">
              <div className="absolute inset-0 opacity-25">
                <svg className="w-full h-full" viewBox="0 0 200 120" fill="none">
                  <path d="M20 100L70 30L120 75L180 20" stroke="#b6ff3b" strokeWidth="1" strokeDasharray="4 2" />
                  <rect x="30" y="25" width="140" height="70" rx="8" stroke="white" strokeWidth="0.5" />
                  <circle cx="100" cy="60" r="14" fill="#b6ff3b" fillOpacity="0.3" stroke="#b6ff3b" />
                </svg>
              </div>
              <div className="relative z-10 flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 rounded-xl bg-black/60 border border-[#b6ff3b]/30 flex items-center justify-center mb-3 group-hover:border-[#b6ff3b] transition-colors">
                  <Clapperboard className="w-6 h-6 text-[#b6ff3b]" />
                </div>
                <div className="font-display font-bold text-white text-base tracking-wide">
                  VOX ANIMATION
                </div>
                <span className="text-[11px] font-mono-tech text-neutral-400 mt-1">
                  Original Anime • Manga Creation • Narrative Art
                </span>
              </div>
              <div className="absolute bottom-2 left-3 text-[10px] font-mono-tech text-[#b6ff3b]/80 tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#b6ff3b]" />
                <span>ANIME & MANGA STUDIO</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="font-mono-tech text-neutral-400">DIVISION 02</span>
              <span className="text-[#b6ff3b] font-medium flex items-center gap-1">
                <Film className="w-3 h-3" /> Original IP
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mt-1 group-hover:text-[#b6ff3b] transition-colors">
              VOX ANIMATION
            </h3>
            <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
              Premier anime studio crafting serialized manga, world-class character design, and original narrative animation.
            </p>
          </div>

          {/* Branch 3: V-VORTEX (Creative Agency & IT Sector) */}
          <div className="group relative rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-[#b6ff3b]/50 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#b6ff3b]/5 rounded-full blur-2xl group-hover:bg-[#b6ff3b]/15 transition-all" />

            {/* Visual art canvas simulation */}
            <div className="w-full h-44 rounded-xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 border border-white/5 relative overflow-hidden flex items-center justify-center mb-4">
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#b6ff3b_1px,transparent_1px),linear-gradient(to_bottom,#b6ff3b_1px,transparent_1px)] [background-size:20px_20px]" />
              <div className="relative z-10 flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 rounded-xl bg-black/60 border border-[#b6ff3b]/30 flex items-center justify-center mb-3 group-hover:border-[#b6ff3b] transition-colors">
                  <Video className="w-6 h-6 text-[#b6ff3b]" />
                </div>
                <div className="font-display font-bold text-white text-base tracking-wide">
                  V-VORTEX
                </div>
                <span className="text-[11px] font-mono-tech text-neutral-400 mt-1">
                  Video Editing • Videography • Digital Marketing & IT
                </span>
              </div>
              <div className="absolute bottom-2 left-3 text-[10px] font-mono-tech text-[#b6ff3b]/80 tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#b6ff3b]" />
                <span>CREATIVE AGENCY & IT</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="font-mono-tech text-neutral-400">DIVISION 03</span>
              <span className="text-[#b6ff3b] font-medium flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Agency & IT
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mt-1 group-hover:text-[#b6ff3b] transition-colors">
              V-VORTEX
            </h3>
            <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
              Full-service creative agency delivering commercial videography, high-speed video editing, performance marketing, and IT systems.
            </p>
          </div>
        </div>
      </div>

      {/* Metrics Strip for VEX ASIA & 3 Branches */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-14 pt-8 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div>
            <div className="text-2xl sm:text-3xl font-display font-black text-white">
              45M<span className="text-[#b6ff3b]">+</span>
            </div>
            <div className="text-xs font-mono-tech text-neutral-400 mt-0.5">
              Monthly Media Views (Jagoron TV)
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-display font-black text-white">
              12<span className="text-[#b6ff3b]"> IPs</span>
            </div>
            <div className="text-xs font-mono-tech text-neutral-400 mt-0.5">
              Original Anime & Manga (VOX)
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-display font-black text-[#b6ff3b]">
              350+
            </div>
            <div className="text-xs font-mono-tech text-neutral-400 mt-0.5">
              Commercial & IT Sprints (V-VORTEX)
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-display font-black text-white">
              1<span className="text-[#b6ff3b]"> Ecosystem</span>
            </div>
            <div className="text-xs font-mono-tech text-neutral-400 mt-0.5">
              Unified Asian Conglomerate (VEX ASIA)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
