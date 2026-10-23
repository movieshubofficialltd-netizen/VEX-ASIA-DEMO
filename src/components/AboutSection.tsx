import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Tv, Clapperboard, Video, Sparkles, Radio, Film, Code } from 'lucide-react';

interface ServicePillData {
  id: string;
  name: string;
  branch: 'Jagoron TV' | 'VOX ANIMATION' | 'V-VORTEX';
  category: string;
  description: string;
  deliverables: string[];
  metrics: string;
}

const servicePills: ServicePillData[] = [
  {
    id: 'jagoron-news',
    name: 'Digital News & Broadcasting',
    branch: 'Jagoron TV',
    category: 'Online Media Cell',
    description: 'High-frequency digital news gathering, real-time breaking broadcasts, and authoritative journalism formatted for modern digital and mobile audiences.',
    deliverables: ['Live 24/7 Digital Broadcast Stream', 'Fact-Checked Breaking News Desks', 'Studio Multi-Camera Live Feeds', 'Multi-Platform Video Distribution'],
    metrics: '45M+ Monthly Views',
  },
  {
    id: 'jagoron-investigative',
    name: 'Online Media Content & Documentaries',
    branch: 'Jagoron TV',
    category: 'Online Media Cell',
    description: 'Investigative documentary features, cultural deep-dives, and viral social journalism driving conversations across Asian diaspora communities.',
    deliverables: ['Mini-Documentary Production', 'Social Video Reels & Explainers', 'Exclusive Investigative Reports', 'Podcast & Audio Dispatch Network'],
    metrics: '8.4M Social Engagements',
  },
  {
    id: 'vox-anime',
    name: 'Original Anime Production',
    branch: 'VOX ANIMATION',
    category: 'Anime & Manga Studio',
    description: 'Full-pipeline 2D and 3D animated series production, cinematic fight choreography, background world-building, and high-frame-rate sakuga sequences.',
    deliverables: ['Original IP Anime Pilots & Seasons', 'Sakuga Keyframe & In-Between Animation', 'Original Soundtrack & Japanese/English Dubbing', 'Merchandise & Global Streaming Licensing'],
    metrics: '12 Original Global IPs',
  },
  {
    id: 'vox-manga',
    name: 'Manga Creation & Narrative Artwork',
    branch: 'VOX ANIMATION',
    category: 'Anime & Manga Studio',
    description: 'Serialization-ready manga creation, dynamic panelling, expressive character concept art, and high-detail digital ink illustrations.',
    deliverables: ['Serialized Manga Chapters & One-Shots', 'Character Bible & Turnaround Sheets', 'Digital Webtoon & Print Formatting', 'Collector Edition Artbooks'],
    metrics: '500K+ Readership',
  },
  {
    id: 'vortex-videography',
    name: 'Commercial Videography',
    branch: 'V-VORTEX',
    category: 'Creative Agency & IT',
    description: 'Cinematic brand films, high-speed camera rigging, commercial advertising shoots, and luxury product videography executed on RED and ARRI cameras.',
    deliverables: ['4K/8K Cinema Camera Shoots', 'Commercial Directors & Crew Rigging', 'Drone & Aerial Cinematography', 'Location Scouting & Production Design'],
    metrics: '99.4% Client Approval',
  },
  {
    id: 'vortex-editing',
    name: 'Video Editing & Post-Production',
    branch: 'V-VORTEX',
    category: 'Creative Agency & IT',
    description: 'Elite post-production, rapid turnaround short-form editing, Hollywood-grade color grading, sound design, and custom 3D VFX motion graphics.',
    deliverables: ['High-Velocity Commercial Editing', 'DaVinci Resolve ACES Color Grading', 'Kinetic Motion Graphics & VFX', 'Custom Audio Engineering & Mixing'],
    metrics: '48h Turnaround Available',
  },
  {
    id: 'vortex-marketing',
    name: 'Digital Marketing & Growth',
    branch: 'V-VORTEX',
    category: 'Creative Agency & IT',
    description: 'Performance advertising, algorithmic ad creative testing, high-converting funnel design, and full-scale brand positioning across APAC.',
    deliverables: ['Omnichannel Paid Media (Meta, Google, TikTok)', 'Conversion Rate Optimization (CRO)', 'Content Repurposing Engines', 'Influencer & KOL Syndication'],
    metrics: '4.2x Median ROAS',
  },
  {
    id: 'vortex-it',
    name: 'IT Sector & Digital Infrastructure',
    branch: 'V-VORTEX',
    category: 'Creative Agency & IT',
    description: 'High-performance web applications, WebGL experiential sites, custom CMS architecture, and enterprise cloud software solutions.',
    deliverables: ['WebGL & Three.js Web Platforms', 'Full-Stack React & Node Applications', 'Cloud Architecture & CDN Scaling', 'Custom API & Database Pipelines'],
    metrics: '<1.2s Global Load Latency',
  },
];

export const AboutSection: React.FC = () => {
  const [activePill, setActivePill] = useState<ServicePillData>(servicePills[0]);

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#0a0a0a] border-t border-white/10">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#b6ff3b]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#b6ff3b] tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b6ff3b]" />
              <span>// 01. ABOUT VEX ASIA</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight uppercase">
              About us
            </h2>
          </div>
          <div className="max-w-xl">
            <p className="text-lg sm:text-2xl text-neutral-200 font-medium leading-snug">
              Headquartered in Dhaka, Bangladesh, VEX ASIA creates a clear direction for brands, strong digital positioning, and a growth strategy that unites idea, system, and result across our 3 specialized enterprise divisions: Jagoron TV, VOX ANIMATION, and V-VORTEX.
            </p>
          </div>
        </div>

        {/* 3 Specialized Branches Pillars */}
        <div id="branches" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 scroll-mt-24">
          {/* Branch 1: Jagoron TV */}
          <div className="p-8 rounded-2xl bg-neutral-900/40 border border-white/10 hover:border-[#b6ff3b]/50 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="text-[10px] font-mono-tech px-2.5 py-1 rounded bg-[#b6ff3b]/10 text-[#b6ff3b] border border-[#b6ff3b]/30">
                MEDIA CELL
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center text-[#b6ff3b] mb-6 group-hover:scale-110 group-hover:border-[#b6ff3b] transition-all">
              <Tv className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono-tech text-[#b6ff3b] tracking-wider mb-2">
              DIVISION 01
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">
              Jagoron TV
            </h3>
            <span className="text-xs font-mono-tech text-neutral-400 block mb-3">
              Online Media Cell • Digital News & Broadcasting
            </span>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Spearheading digital journalism, 24/7 online broadcasting, investigative reporting, and high-impact media content for modern digital audiences.
            </p>
          </div>

          {/* Branch 2: VOX ANIMATION */}
          <div className="p-8 rounded-2xl bg-neutral-900/40 border border-white/10 hover:border-[#b6ff3b]/50 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="text-[10px] font-mono-tech px-2.5 py-1 rounded bg-[#b6ff3b]/10 text-[#b6ff3b] border border-[#b6ff3b]/30">
                CREATIVE STUDIO
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center text-[#b6ff3b] mb-6 group-hover:scale-110 group-hover:border-[#b6ff3b] transition-all">
              <Clapperboard className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono-tech text-[#b6ff3b] tracking-wider mb-2">
              DIVISION 02
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">
              VOX ANIMATION
            </h3>
            <span className="text-xs font-mono-tech text-neutral-400 block mb-3">
              Anime & Manga Studio • Original IP & Artwork
            </span>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Crafting original anime productions, serialized manga publishing, dynamic concept art, and narrative artwork that captivates global fandoms.
            </p>
          </div>

          {/* Branch 3: V-VORTEX */}
          <div className="p-8 rounded-2xl bg-neutral-900/40 border border-white/10 hover:border-[#b6ff3b]/50 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="text-[10px] font-mono-tech px-2.5 py-1 rounded bg-[#b6ff3b]/10 text-[#b6ff3b] border border-[#b6ff3b]/30">
                AGENCY & IT
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center text-[#b6ff3b] mb-6 group-hover:scale-110 group-hover:border-[#b6ff3b] transition-all">
              <Video className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono-tech text-[#b6ff3b] tracking-wider mb-2">
              DIVISION 03
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">
              V-VORTEX
            </h3>
            <span className="text-xs font-mono-tech text-neutral-400 block mb-3">
              Creative Agency & IT Sector • Video & Marketing
            </span>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Full-service agency powerhouse delivering commercial videography, high-end video editing, digital performance marketing, and scalable IT platforms.
            </p>
          </div>
        </div>

        {/* Interactive Service Pills Across the 3 Divisions */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <div className="text-xs font-mono-tech text-neutral-400 uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#b6ff3b]" />
              <span>Division Capabilities (Click any capability to inspect division dossier)</span>
            </div>
            <span className="text-xs font-mono-tech text-[#b6ff3b]">
              3 Divisions Active
            </span>
          </div>

          {/* Lime Green Pills Cluster */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3.5 mb-10">
            {servicePills.map((pill) => {
              const isActive = activePill.id === pill.id;
              return (
                <button
                  key={pill.id}
                  onClick={() => setActivePill(pill)}
                  className={`group px-5 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#b6ff3b] text-black shadow-[0_0_20px_rgba(182,255,59,0.5)] scale-105'
                      : 'bg-neutral-900/80 text-neutral-300 border border-white/10 hover:border-[#b6ff3b]/60 hover:text-[#b6ff3b]'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full transition-colors ${
                      isActive ? 'bg-black' : 'bg-[#b6ff3b]'
                    }`}
                  />
                  <span>{pill.name}</span>
                  <span className={`text-[10px] font-mono-tech px-1.5 py-0.5 rounded ${isActive ? 'bg-black/20 text-black' : 'bg-white/5 text-neutral-400'}`}>
                    {pill.branch}
                  </span>
                  <ArrowUpRight
                    className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      isActive ? 'text-black' : 'text-neutral-500 group-hover:text-[#b6ff3b]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Detailed Active Dossier Card */}
          <div className="rounded-2xl bg-gradient-to-br from-neutral-900/90 via-neutral-900/50 to-neutral-950 p-6 sm:p-10 border border-[#b6ff3b]/30 relative overflow-hidden backdrop-blur-xl">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#b6ff3b]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-md bg-[#b6ff3b] text-black font-bold font-mono-tech text-xs uppercase">
                    {activePill.branch}
                  </span>
                  <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[#b6ff3b] font-mono-tech text-xs uppercase">
                    {activePill.category}
                  </span>
                </div>
                <h4 className="text-2xl sm:text-4xl font-display font-black text-white mb-4">
                  {activePill.name}
                </h4>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                  {activePill.description}
                </p>

                <div className="space-y-2.5">
                  <span className="text-xs font-mono-tech text-neutral-400 uppercase tracking-wider block">
                    Core Operational Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activePill.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#b6ff3b] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between h-full p-6 rounded-xl bg-black/60 border border-white/10">
                <div>
                  <span className="text-xs font-mono-tech text-neutral-400 block mb-1 uppercase tracking-widest">
                    Division Benchmark
                  </span>
                  <div className="text-3xl sm:text-4xl font-display font-black text-[#b6ff3b] mb-2">
                    {activePill.metrics}
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Operated under the centralized quality control and governance of VEX ASIA.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono-tech text-neutral-500 uppercase block">
                      Lead Division
                    </span>
                    <span className="text-xs font-semibold text-white">{activePill.branch}</span>
                  </div>
                  <a
                    href="#contact"
                    className="px-4 py-2 rounded-lg bg-[#b6ff3b] text-black font-bold text-xs tracking-wide hover:bg-[#c6ff5c] transition-all"
                  >
                    Brief {activePill.branch}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
