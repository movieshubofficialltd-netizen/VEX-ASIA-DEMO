import React, { useState } from 'react';
import { Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [selectedBranch, setSelectedBranch] = useState<string>('V-VORTEX (Creative Agency & IT)');
  const [message, setMessage] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialService ? [initialService] : ['Commercial Videography (V-VORTEX)']
  );
  const [selectedBudget, setSelectedBudget] = useState<string>('$25k - $50k');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const branches = [
    'Jagoron TV (Online Media Cell)',
    'VOX ANIMATION (Anime & Manga Studio)',
    'V-VORTEX (Creative Agency & IT)',
    'VEX ASIA (Parent Group / Joint Division Partnership)',
  ];

  const serviceOptions = [
    'Digital News & Broadcasting (Jagoron TV)',
    'Online Media & Documentaries (Jagoron TV)',
    'Original Anime Production (VOX ANIMATION)',
    'Manga Creation & Narrative Art (VOX ANIMATION)',
    'Commercial Videography (V-VORTEX)',
    'Video Editing & Post-Production (V-VORTEX)',
    'Digital Marketing & Growth (V-VORTEX)',
    'IT Sector & Web Engineering (V-VORTEX)',
  ];

  const budgetTiers = ['$10k - $25k', '$25k - $50k', '$50k - $100k', '$100k+'];

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#0a0a0a] border-t border-white/10">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#b6ff3b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Context, Philosophy & Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#b6ff3b] tracking-widest uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b6ff3b]" />
                <span>// 05. INITIATE ENGAGEMENT</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight uppercase mb-6">
                Let's talk
              </h2>
              <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed mb-8">
                Ready to collaborate with Jagoron TV, VOX ANIMATION, or V-VORTEX? Submit your project brief and our dedicated division directors will respond within 2 hours.
              </p>

              {/* Guarantees Box */}
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-sm text-neutral-200">
                  <div className="w-5 h-5 rounded-full bg-[#b6ff3b]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5 text-[#b6ff3b]" />
                  </div>
                  <span>Direct division lead dispatch time: <strong>&lt; 2 hours</strong></span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-200">
                  <div className="w-5 h-5 rounded-full bg-[#b6ff3b]/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-[#b6ff3b]" />
                  </div>
                  <span>Cross-division synergy: Combine media, anime IP & IT agency</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-200">
                  <div className="w-5 h-5 rounded-full bg-[#b6ff3b]/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b6ff3b]" />
                  </div>
                  <span>Full confidentiality & production scoping call included</span>
                </div>
              </div>
            </div>

            {/* Dhaka Headquarters & Division Hubs */}
            <div className="border-t border-white/10 pt-8 space-y-4">
              <span className="text-xs font-mono-tech text-neutral-400 uppercase tracking-widest block">
                Headquarters & Division Facilities // Dhaka, Bangladesh
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-neutral-900/50 border border-white/10">
                  <span className="text-[#b6ff3b] font-bold block mb-0.5">VEX ASIA HQ</span>
                  <span className="text-neutral-400">Gulshan-2, Dhaka, Bangladesh</span>
                </div>
                <div className="p-3 rounded-xl bg-neutral-900/50 border border-white/10">
                  <span className="text-[#b6ff3b] font-bold block mb-0.5">JAGORON TV</span>
                  <span className="text-neutral-400">Broadcast Cell, Tejgaon, Dhaka</span>
                </div>
                <div className="p-3 rounded-xl bg-neutral-900/50 border border-white/10">
                  <span className="text-[#b6ff3b] font-bold block mb-0.5">VOX & V-VORTEX</span>
                  <span className="text-neutral-400">Studios & IT, Banani, Dhaka</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form Fields with Division Dropdown & Prominent Send Button */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-neutral-900/60 border border-white/10 p-6 sm:p-10 backdrop-blur-xl">
              {isSuccess ? (
                <div className="text-center py-12 space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#b6ff3b]/10 border border-[#b6ff3b] text-[#b6ff3b] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(182,255,59,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    Brief Received by VEX ASIA
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, {name}. Your inquiry has been routed to the leadership of <span className="text-[#b6ff3b] font-bold">{selectedBranch}</span>. Our partners will contact you at <span className="text-[#b6ff3b] font-mono-tech">{email}</span> within 2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 rounded-full bg-neutral-800 text-xs font-mono-tech text-neutral-300 hover:text-white transition-colors cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Division Selection Dropdown */}
                  <div>
                    <label className="text-xs font-mono-tech text-neutral-300 uppercase tracking-wider block mb-2">
                      Target Division / Branch *
                    </label>
                    <select
                      value={selectedBranch}
                      onChange={(e) => setSelectedBranch(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 text-white focus:outline-none focus:border-[#b6ff3b] text-sm"
                    >
                      {branches.map((b) => (
                        <option key={b} value={b} className="bg-neutral-900 text-white">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Services Multi-Select Pills */}
                  <div>
                    <label className="text-xs font-mono-tech text-neutral-300 uppercase tracking-wider block mb-3">
                      Services of Interest
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((srv) => {
                        const isSelected = selectedServices.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#b6ff3b] text-black font-semibold shadow-[0_0_12px_rgba(182,255,59,0.3)]'
                                : 'bg-neutral-950 text-neutral-300 border border-white/10 hover:border-white/30'
                            }`}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono-tech text-neutral-300 uppercase tracking-wider block mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alexander Vance"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-[#b6ff3b] text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono-tech text-neutral-300 uppercase tracking-wider block mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alexander@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-[#b6ff3b] text-sm"
                      />
                    </div>
                  </div>

                  {/* Company & Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono-tech text-neutral-300 uppercase tracking-wider block mb-2">
                        Company / Brand / Project
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Omni Global Media"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-[#b6ff3b] text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono-tech text-neutral-300 uppercase tracking-wider block mb-2">
                        Estimated Budget
                      </label>
                      <select
                        value={selectedBudget}
                        onChange={(e) => setSelectedBudget(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 text-white focus:outline-none focus:border-[#b6ff3b] text-sm"
                      >
                        {budgetTiers.map((tier) => (
                          <option key={tier} value={tier} className="bg-neutral-900 text-white">
                            {tier}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="text-xs font-mono-tech text-neutral-300 uppercase tracking-wider block mb-2">
                      Brief Description of Your Production or Scope *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="We would like to partner with V-VORTEX on commercial videography and IT web architecture, and explore manga co-publishing with VOX ANIMATION..."
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-[#b6ff3b] text-sm resize-none"
                    />
                  </div>

                  {/* Prominent Send Message Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#b6ff3b] text-black font-extrabold text-base tracking-wide flex items-center justify-center gap-3 transition-all duration-300 hover:bg-[#c6ff5c] hover:shadow-[0_0_30px_rgba(182,255,59,0.5)] active:scale-98 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Routing to {selectedBranch}...
                      </span>
                    ) : (
                      <>
                        <span>Send message</span>
                        <Send className="w-4 h-4 stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
