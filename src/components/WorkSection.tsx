import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles, Layers, Eye, Tv, Clapperboard, Video } from 'lucide-react';
import gsap from 'gsap';
import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'jagoron-insight-360',
    title: 'Insight 360: Digital Broadcast Portal',
    client: 'Jagoron TV • Online Media Cell',
    category: 'Jagoron TV',
    branch: 'Jagoron TV',
    year: '2025',
    description: 'Real-time 24/7 digital broadcasting hub, investigative reporting feeds, and interactive breaking news multi-streams.',
    metrics: '45M+ Monthly Media Views • Top Digital News Network',
    tags: ['Online Media Cell', 'Live Broadcasting', 'Investigative Journalism', 'Cloud Streaming'],
    image: 'linear-gradient(135deg, #131713 0%, #152213 50%, #0a110a 100%)',
    palette: ['#0a0a0a', '#b6ff3b', '#264e20', '#ffffff'],
    deliverables: ['Live Multi-Camera Broadcast Feed', 'Fast-Track News Article CMS', 'Automated Social Clip Syndication', 'High-Concurrency CDN Infrastructure'],
    overview: 'Jagoron TV needed an ultra-resilient, zero-buffering digital broadcast portal capable of handling tens of millions of viewers during breaking national and global news cycles.',
    challenge: 'Streaming low-latency HLS video to millions of concurrent mobile devices across varying bandwidth environments across Asia.',
    solution: 'Designed a high-throughput edge-cached streaming architecture paired with a dark-mode, high-legibility news interface with instant live notifications.'
  },
  {
    id: 'vox-neo-kyoto',
    title: 'Chronicles of Neo-Kyoto (Anime)',
    client: 'VOX ANIMATION • Anime & Manga Studio',
    category: 'VOX ANIMATION',
    branch: 'VOX ANIMATION',
    year: '2025',
    description: 'Original 12-episode cyberpunk action anime series featuring fluid sakuga fight choreography and bespoke electronic soundtrack.',
    metrics: '8.8/10 Rating • Global Streaming Deal Closed',
    tags: ['Anime Production', 'Sakuga Animation', 'Character Design', 'Original IP'],
    image: 'linear-gradient(135deg, #1a1622 0%, #1a2215 50%, #0d1209 100%)',
    palette: ['#0e0c14', '#b6ff3b', '#ff3366', '#ffffff'],
    deliverables: ['12-Episode Mastered Anime Series', 'Sakuga Keyframe & In-Between Pipeline', 'Full Character Bible & Turnarounds', 'Official OST & Japanese/English Dubs'],
    overview: 'VOX ANIMATION conceived, storyboarded, and produced an original cyberpunk sci-fi anime IP exploring augmented human consciousness in futuristic Neo-Kyoto.',
    challenge: 'Balancing intricate hand-drawn 2D aesthetic fidelity with 3D mechanical camera tracking on an independent production timeline.',
    solution: 'Developed a hybrid Blender 3D + Clip Studio pipeline that enabled cinematic camera sweeps while preserving handcrafted sakuga line weight.'
  },
  {
    id: 'vox-soul-bound',
    title: 'Soul Bound: Manga Serialization',
    client: 'VOX ANIMATION • Anime & Manga Studio',
    category: 'VOX ANIMATION',
    branch: 'VOX ANIMATION',
    year: '2024',
    description: 'Serialized dark-fantasy action manga series with high-detail digital inking, rich worldbuilding, and collector print anthologies.',
    metrics: '500K+ Chapter Reads • Top Shonen Independent Release',
    tags: ['Manga Creation', 'Digital Inking', 'Storyboarding', 'Narrative Artwork'],
    image: 'linear-gradient(135deg, #181914 0%, #1c2612 50%, #0d120a 100%)',
    palette: ['#12130e', '#b6ff3b', '#d2e8b2', '#f5f5f5'],
    deliverables: ['Weekly Digital Serialization Chapters', 'High-Resolution Print Volume Layout', 'Cover Art & Double-Page Spreads', 'Merchandise Character Sheets'],
    overview: 'A flagship serialized manga publication created by VOX ANIMATION writers and illustrators for international digital and physical distribution.',
    challenge: 'Delivering weekly 22-page high-detail chapters while upholding uncompromising panel composition and ink texture.',
    solution: 'Constructed an efficient studio team pipeline dividing rough thumbnailing, pencil layouts, background 3D drafting, and lead character finishing.'
  },
  {
    id: 'vortex-aura-apex',
    title: 'Aura Apex: Cinematic Brand Film',
    client: 'V-VORTEX • Creative Agency & IT',
    category: 'V-VORTEX',
    branch: 'V-VORTEX',
    year: '2025',
    description: 'Cinema-grade commercial videography shoot and high-octane video editing campaign for a luxury performance automotive brand.',
    metrics: '+380% ROAS • 14M Targeted Video Impressions',
    tags: ['Commercial Videography', 'Video Editing', 'DaVinci ACES Color', 'Motion VFX'],
    image: 'linear-gradient(135deg, #101211 0%, #172415 50%, #0b110c 100%)',
    palette: ['#0d0f0e', '#b6ff3b', '#3b5c32', '#ffffff'],
    deliverables: ['90s Cinematic Hero Brand Film', '60s / 30s / 15s Omnichannel Ad Cuts', 'DaVinci Resolve Color Grade', 'Custom Sound Design & 3D VFX'],
    overview: 'V-VORTEX was commissioned to direct, shoot, and edit a national campaign that positioned Aura Apex as the benchmark of electric hypercars.',
    challenge: 'Capturing dynamic 140mph track action shots and delivering 40+ personalized aspect ratio cutdowns for Meta, YouTube, and digital billboards in 10 days.',
    solution: 'Deployed dual RED V-Raptor 8K cameras on chase vehicles with high-speed editing suites working concurrently to deliver all final masters.'
  },
  {
    id: 'vortex-omnicloud',
    title: 'OmniCloud IT & Growth Architecture',
    client: 'V-VORTEX • Creative Agency & IT',
    category: 'V-VORTEX',
    branch: 'V-VORTEX',
    year: '2024',
    description: 'Interactive WebGL enterprise application, full-funnel digital marketing engine, and high-security cloud IT infrastructure.',
    metrics: '<1.2s Global Latency • 4.6x Pipeline Conversion',
    tags: ['IT Sector', 'WebGL / Three.js', 'Digital Marketing', 'Cloud Architecture'],
    image: 'linear-gradient(135deg, #0f130e 0%, #1a2910 50%, #090e07 100%)',
    palette: ['#0b0d0a', '#b6ff3b', '#73b31b', '#ffffff'],
    deliverables: ['Custom WebGL 3D Platform', 'Full-Funnel Ad Creative Engine', 'Enterprise Cloud & API Security', 'Real-Time Telemetry Dashboard'],
    overview: 'A complete IT sector and digital marketing overhaul for an enterprise cloud platform expanding across Southeast Asia.',
    challenge: 'Differentiating an enterprise software offering through a tactile, unforgettable 3D browser experience while maintaining sub-second load times.',
    solution: 'Built a custom Three.js shader-powered experience connected to automated CRM pipelines, dropping customer acquisition costs by 45%.'
  }
];

interface WorkSectionProps {
  onSelectProject: (project: Project) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All Divisions');
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filters = ['All Divisions', 'Jagoron TV', 'VOX ANIMATION', 'V-VORTEX'];

  const filteredProjects = activeFilter === 'All Divisions'
    ? projectsData
    : projectsData.filter((p) => p.branch === activeFilter);

  // GSAP Smooth Scroll Navigation
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.clientWidth * 0.75;
    const targetScroll = direction === 'left'
      ? carouselRef.current.scrollLeft - scrollAmount
      : carouselRef.current.scrollLeft + scrollAmount;

    gsap.to(carouselRef.current, {
      scrollLeft: targetScroll,
      duration: 0.65,
      ease: 'power2.out',
    });
  };

  // Entrance animation with GSAP on mount/filter change
  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll('.project-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' }
    );
  }, [activeFilter]);

  const renderBranchIcon = (branch: string) => {
    switch (branch) {
      case 'Jagoron TV':
        return <Tv className="w-8 h-8 text-[#b6ff3b]" />;
      case 'VOX ANIMATION':
        return <Clapperboard className="w-8 h-8 text-[#b6ff3b]" />;
      case 'V-VORTEX':
        return <Video className="w-8 h-8 text-[#b6ff3b]" />;
      default:
        return <Layers className="w-8 h-8 text-[#b6ff3b]" />;
    }
  };

  return (
    <section id="work" className="py-24 sm:py-32 relative bg-[#0a0a0a] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#b6ff3b] tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b6ff3b]" />
              <span>// 03. DIVISION PORTFOLIO</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight uppercase mb-3">
              Our work
            </h2>
            <p className="text-lg sm:text-xl text-neutral-300 font-normal max-w-xl">
              Curated productions from Jagoron TV, VOX ANIMATION, and V-VORTEX.
            </p>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollCarousel('left')}
              className="w-12 h-12 rounded-full bg-neutral-900 border border-white/15 text-white flex items-center justify-center hover:bg-[#b6ff3b] hover:text-black hover:border-[#b6ff3b] transition-all duration-300 active:scale-95 cursor-pointer"
              aria-label="Previous projects"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollCarousel('right')}
              className="w-12 h-12 rounded-full bg-neutral-900 border border-white/15 text-white flex items-center justify-center hover:bg-[#b6ff3b] hover:text-black hover:border-[#b6ff3b] transition-all duration-300 active:scale-95 cursor-pointer"
              aria-label="Next projects"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Division Filters */}
        <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar">
          {filters.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-xs font-mono-tech tracking-wider uppercase transition-all duration-200 shrink-0 cursor-pointer ${
                activeFilter === category
                  ? 'bg-[#b6ff3b] text-black font-bold shadow-[0_0_15px_rgba(182,255,59,0.35)]'
                  : 'bg-neutral-900/60 text-neutral-400 border border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal Scrolling Showcase / Carousel */}
      <div
        ref={containerRef}
        className="w-full relative"
      >
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-8 pt-2 scroll-smooth cursor-grab active:cursor-grabbing no-scrollbar"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="project-card flex-none w-[88vw] sm:w-[480px] lg:w-[560px] rounded-3xl bg-neutral-900/60 border border-white/10 hover:border-[#b6ff3b]/50 transition-all duration-300 group overflow-hidden flex flex-col justify-between"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Card Header & Division Tag */}
              <div className="p-6 sm:p-7 border-b border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono-tech text-[#b6ff3b] tracking-widest uppercase block">
                    0{idx + 1} // {project.branch}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono-tech mt-0.5 block">
                    {project.client}
                  </span>
                </div>
                <span className="text-xs font-mono-tech text-neutral-500 px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                  {project.year}
                </span>
              </div>

              {/* Website Mockup Preview Frame */}
              <div
                className="relative h-64 sm:h-72 w-full p-6 flex flex-col justify-between overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ background: project.image }}
              >
                {/* Tech grid texture overlay */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#b6ff3b_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Simulated browser header bar */}
                <div className="relative z-10 flex items-center justify-between bg-black/70 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#b6ff3b]/70" />
                  </div>
                  <span className="text-[10px] font-mono-tech text-neutral-400 truncate max-w-[200px]">
                    https://{project.branch.toLowerCase().replace(/\s+/g, '-')}.vex.asia
                  </span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </div>

                {/* Center visual emblem */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center">
                  <div className="w-16 h-16 rounded-2xl bg-black/60 border border-[#b6ff3b]/40 backdrop-blur-md flex items-center justify-center mb-3 group-hover:border-[#b6ff3b] group-hover:shadow-[0_0_25px_rgba(182,255,59,0.4)] transition-all">
                    {renderBranchIcon(project.branch)}
                  </div>
                  <h4 className="text-2xl font-display font-black text-white uppercase tracking-tight">
                    {project.title}
                  </h4>
                </div>

                {/* Bottom live metric pill inside preview */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#b6ff3b]/30 text-[11px] font-mono-tech text-[#b6ff3b] flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>{project.metrics}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-6 sm:p-7 space-y-4">
                <p className="text-sm text-neutral-300 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[10px] font-mono-tech text-neutral-400 bg-white/5 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action button */}
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech uppercase tracking-wider text-neutral-200 group-hover:text-[#b6ff3b] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[#b6ff3b]" />
                    <span>Inspect Division Production File</span>
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
