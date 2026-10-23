import React, { useState } from 'react';
import { 
  Tv, 
  Clapperboard, 
  Video, 
  TrendingUp, 
  ArrowRight, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  Radio,
  Cpu
} from 'lucide-react';
import { ServiceItem } from '../types';

const servicesData: ServiceItem[] = [
  {
    id: 'jagoron-broadcast',
    title: 'Jagoron TV — Digital News & Broadcasting',
    branch: 'Jagoron TV',
    tagline: 'Online Media Cell: 24/7 digital news broadcasting, investigative journalism & viral online media.',
    iconName: 'Tv',
    metric: '45M+',
    metricLabel: 'Monthly Digital Viewership',
    summary: 'Jagoron TV is VEX ASIA’s premier online media cell. We operate modern digital newsrooms, multi-camera live broadcast streams, investigative documentary units, and high-engagement social media content engineered for viral retention.',
    deliverables: [
      '24/7 Live Digital Broadcast & Multi-Platform Syndication',
      'Investigative Video Documentaries & Feature Stories',
      'High-Frequency Short-Form News Reels (TikTok, Meta, YouTube)',
      'Digital Press Operations & Real-Time Editorial Desks',
    ],
    tools: ['Blackmagic ATEM Studio', 'OBS Enterprise', 'Premiere Pro', 'vMix Live'],
  },
  {
    id: 'vox-animation-studio',
    title: 'VOX ANIMATION — Anime & Manga Production',
    branch: 'VOX ANIMATION',
    tagline: 'Anime & Manga Studio: Original anime series, serialized manga & world-class narrative artwork.',
    iconName: 'Clapperboard',
    metric: '12 IPs',
    metricLabel: 'Original Series Developed',
    summary: 'VOX ANIMATION is VEX ASIA’s dedicated creative studio producing international anime and manga intellectual property. From sakuga keyframe animation to serialized digital and print manga chapters, we craft unforgettable visual universes.',
    deliverables: [
      'Original 2D & 3D Anime Pilot and Season Production',
      'Manga Storyboarding, Serialization & Panel Layout',
      'Character Bible, World Design & Key Visual Artwork',
      'Voice Acting, Sound Effects (Foley) & Global Localization',
    ],
    tools: ['Clip Studio Paint EX', 'Toon Boom Harmony', 'Blender 3D', 'Storyboard Pro'],
  },
  {
    id: 'vortex-videography-editing',
    title: 'V-VORTEX — Video Editing & Videography',
    branch: 'V-VORTEX',
    tagline: 'Creative Agency: Cinema-grade commercial videography, high-speed video editing & post-production.',
    iconName: 'Video',
    metric: '350+',
    metricLabel: 'Commercial Sprints Delivered',
    summary: 'V-VORTEX brings elite cinematic visual firepower to brands and enterprises. We deploy high-end cinema camera rigs, on-location commercial crews, rapid-turnaround post-production editing, DaVinci ACES color grading, and dynamic VFX motion design.',
    deliverables: [
      'Commercial Brand Films & Advertising Shoots (4K/8K)',
      'High-Speed Social & Campaign Video Editing',
      'Hollywood-Grade Color Grading & HDR Mastering',
      '3D Motion Graphics, Sound Engineering & VFX Composition',
    ],
    tools: ['DaVinci Resolve Studio', 'Adobe After Effects', 'RED Digital Cinema', 'ARRI Alexa'],
  },
  {
    id: 'vortex-marketing-it',
    title: 'V-VORTEX — Digital Marketing & IT Sector',
    branch: 'V-VORTEX',
    tagline: 'IT Sector & Agency: Performance marketing, CAC optimization, WebGL apps & digital systems.',
    iconName: 'Cpu',
    metric: '4.2x',
    metricLabel: 'Median Client ROAS in 2025',
    summary: 'The technology and performance arm of V-VORTEX merges algorithmic growth marketing with enterprise IT engineering. We build high-converting ad engines, custom WebGL/React platforms, and automated IT infrastructure that scales your digital footprint.',
    deliverables: [
      'Full-Funnel Performance Ad Marketing (Meta, Google, TikTok)',
      'Custom WebGL & Interactive Three.js Web Applications',
      'Conversion Rate Optimization (CRO) & Funnel Architecture',
      'Enterprise Cloud Infrastructure, APIs & Database Pipelines',
    ],
    tools: ['React & Next.js', 'Google Ads & Meta CAPI', 'Three.js / WebGL', 'PostHog & AWS'],
  },
];

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [expandedId, setExpandedId] = useState<string>('jagoron-broadcast');

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Tv':
        return <Tv className="w-6 h-6 text-[#b6ff3b]" />;
      case 'Clapperboard':
        return <Clapperboard className="w-6 h-6 text-[#b6ff3b]" />;
      case 'Video':
        return <Video className="w-6 h-6 text-[#b6ff3b]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#b6ff3b]" />;
      default:
        return <Layers className="w-6 h-6 text-[#b6ff3b]" />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 relative bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#b6ff3b] tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b6ff3b]" />
            <span>// 02. SERVICES & DIVISION CAPABILITIES</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight uppercase mb-4">
            Services
          </h2>
          <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed">
            Everything your brand needs across online broadcasting, anime and manga production, videography, marketing, and IT systems.
          </p>
        </div>

        {/* Stacked Horizontal Interactive Service Cards */}
        <div className="space-y-4">
          {servicesData.map((service, index) => {
            const isExpanded = expandedId === service.id;
            return (
              <div
                key={service.id}
                className={`group rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isExpanded
                    ? 'bg-neutral-900/90 border-[#b6ff3b]/60 shadow-[0_0_30px_rgba(182,255,59,0.15)]'
                    : 'bg-neutral-900/40 border-white/10 hover:border-white/20 hover:bg-neutral-900/60'
                }`}
              >
                {/* Clickable Header Bar */}
                <button
                  onClick={() => setExpandedId(isExpanded ? '' : service.id)}
                  className="w-full p-6 sm:p-8 text-left flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-5 sm:gap-7">
                    {/* Index Number */}
                    <span className="text-xs sm:text-sm font-mono-tech text-neutral-500 font-bold">
                      0{index + 1}
                    </span>

                    {/* Custom Icon in Block Frame */}
                    <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#b6ff3b]/50 transition-colors">
                      {renderIcon(service.iconName)}
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-[#b6ff3b]/10 text-[#b6ff3b] border border-[#b6ff3b]/30">
                          {service.branch}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-[#b6ff3b] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Right side stats & toggle arrow */}
                  <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-4 md:pt-0 border-white/5">
                    <div className="text-left md:text-right">
                      <span className="text-xs font-mono-tech text-[#b6ff3b] font-bold block">
                        {service.metric}
                      </span>
                      <span className="text-[11px] font-mono-tech text-neutral-500 uppercase tracking-wider">
                        {service.metricLabel}
                      </span>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white transition-colors">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-[#b6ff3b]" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded Drawer Details */}
                {isExpanded && (
                  <div className="px-6 pb-8 sm:px-8 border-t border-white/10 pt-6 animate-fadeIn">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                      {/* Summary & Deliverables */}
                      <div className="lg:col-span-8">
                        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                          {service.summary}
                        </p>

                        <div className="mb-6">
                          <span className="text-xs font-mono-tech text-neutral-400 uppercase tracking-widest block mb-3">
                            Key Division Deliverables:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.deliverables.map((item, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200"
                              >
                                <div className="w-4 h-4 rounded-full bg-[#b6ff3b]/10 flex items-center justify-center mt-0.5 shrink-0">
                                  <Check className="w-3 h-3 text-[#b6ff3b]" />
                                </div>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tool Ecosystem Pills */}
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[11px] font-mono-tech text-neutral-500 uppercase">
                            Division Tech & Suites:
                          </span>
                          {service.tools.map((tool) => (
                            <span
                              key={tool}
                              className="px-2.5 py-0.5 rounded text-[11px] font-mono-tech bg-white/5 border border-white/10 text-neutral-300"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Action Box */}
                      <div className="lg:col-span-4 p-6 rounded-xl bg-black/60 border border-white/10 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#b6ff3b] mb-2 uppercase">
                            <Radio className="w-3.5 h-3.5" />
                            <span>{service.branch} Direct Desk</span>
                          </div>
                          <h4 className="text-base font-bold text-white mb-2">
                            Deploy {service.branch}?
                          </h4>
                          <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                            Backed by VEX ASIA’s centralized project governance, dedicated sprint leads, and enterprise SLA guarantees.
                          </p>
                        </div>

                        <button
                          onClick={() => onSelectService(service.title)}
                          className="w-full py-3 rounded-xl bg-[#b6ff3b] text-black font-bold text-xs tracking-wide flex items-center justify-center gap-2 hover:bg-[#c6ff5c] shadow-[0_0_15px_rgba(182,255,59,0.3)] transition-all cursor-pointer"
                        >
                          <span>Request {service.branch} Engagement</span>
                          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
