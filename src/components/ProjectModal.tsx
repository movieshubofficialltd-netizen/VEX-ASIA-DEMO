import React from 'react';
import { X, ExternalLink, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onBriefService: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onBriefService }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-neutral-900 border border-white/15 rounded-3xl overflow-hidden flex flex-col shadow-2xl">
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#b6ff3b] tracking-widest uppercase mb-1">
              <span>{project.category}</span>
              <span>•</span>
              <span className="text-neutral-400">{project.year}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
              {project.title}
            </h3>
            <span className="text-xs font-mono-tech text-neutral-400">
              {project.client}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors"
            aria-label="Close case study dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 no-scrollbar">
          {/* Visual Showcase Banner */}
          <div
            className="h-64 sm:h-80 rounded-2xl p-6 flex flex-col justify-between border border-white/10 relative overflow-hidden"
            style={{ background: project.image }}
          >
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#b6ff3b_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 flex items-center justify-between text-xs font-mono-tech text-neutral-400">
              <span>CLIENT BRIEF ARCHIVE</span>
              <span className="px-3 py-1 rounded-full bg-black/80 border border-[#b6ff3b]/40 text-[#b6ff3b]">
                {project.metrics}
              </span>
            </div>
            <div className="relative z-10">
              <h4 className="text-3xl sm:text-4xl font-display font-black text-white uppercase mb-2">
                {project.title}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
                {project.description}
              </p>
            </div>
          </div>

          {/* Overview, Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-black/50 border border-white/10 space-y-2">
              <span className="text-xs font-mono-tech text-[#b6ff3b] uppercase tracking-wider block">
                The Core Challenge
              </span>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/50 border border-white/10 space-y-2">
              <span className="text-xs font-mono-tech text-[#b6ff3b] uppercase tracking-wider block">
                The VEX Solution
              </span>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Deliverables & Tags */}
          <div className="space-y-4">
            <span className="text-xs font-mono-tech text-neutral-400 uppercase tracking-widest block">
              Execution Deliverables:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((del, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#b6ff3b] shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <span className="text-xs font-mono-tech text-neutral-400 uppercase tracking-widest block mb-2">
              Technologies & Methodologies Deployed:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono-tech text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 border-t border-white/10 bg-black/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono-tech text-neutral-400">
            Interested in comparable outcomes for your company?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full bg-neutral-800 text-xs font-mono-tech text-white hover:bg-neutral-700 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBriefService();
              }}
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded-full bg-[#b6ff3b] text-black font-bold text-xs tracking-wide flex items-center justify-center gap-2 hover:bg-[#c6ff5c] shadow-[0_0_20px_rgba(182,255,59,0.35)] transition-all"
            >
              <span>Brief This Capability</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
