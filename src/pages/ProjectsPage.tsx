import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  ArrowRight, 
  Clock, 
  MapPin, 
  Play, 
  CheckCircle2, 
  X, 
  Sliders, 
  ChevronRight,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

import { projectsData } from '../data/projectsData';
import { youtubeVideosData } from '../data/youtubeVideosData';
import { SectionHeader } from '../components/SectionHeader';
import { VideoModal } from '../components/VideoModal';
import { ProjectBuild, YouTubeVideo } from '../types';

export const ProjectsPage: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBuild, setSelectedBuild] = useState<ProjectBuild | null>(null);
  const [activeVideo, setActiveVideo] = useState<YouTubeVideo | null>(null);

  const brands = ['All', 'Hyundai', 'Mahindra', 'Toyota', 'Maruti Suzuki'];

  const filteredProjects = projectsData.filter((project) => {
    const matchesBrand = selectedBrand === 'All' || project.brand === selectedBrand;
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.vehicleModel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBrand && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#07090D] text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Page Header */}
        <SectionHeader 
          badge="Completed Vehicles Portfolio"
          title="Masterpieces Crafted in Sector 17, Vashi"
          subtitle="Explore our flagship automotive builds. Every project represents dozens of hours of master craftsmanship, custom leather tailoring, and zero-compromise electrical engineering."
        />

        {/* Search & Brand Filter Bar */}
        <div className="card-luxury p-4 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Brand Filter Buttons */}
          <div className="flex items-center flex-wrap gap-2 w-full md:w-auto">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${selectedBrand === brand ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'}`}
              >
                {brand}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Creta, Thar, Scorpio..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121620] border border-white/15 rounded-xl pl-10 pr-4 py-2 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-luxury rounded-3xl overflow-hidden border border-white/10 flex flex-col group transition-all duration-300"
            >
              <div className="relative h-60 w-full overflow-hidden bg-black">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E131B] via-transparent to-transparent opacity-90" />
                
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-amber-400 border border-amber-500/40">
                    {project.brand}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-slate-300 border border-white/20">
                    {project.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                  <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] text-amber-300 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{project.clientOrigin.split(' ')[project.clientOrigin.split(' ').length - 1]}</span>
                  </span>
                  <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{project.timeframe}</span>
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 space-y-1.5 text-xs">
                  {project.detailedScope.slice(0, 3).map((scope, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span className="line-clamp-1">{scope}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedBuild(project)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-black text-xs font-bold transition-all text-white text-center"
                  >
                    View Build Spec Sheet
                  </button>

                  {project.youtubeId && (
                    <button
                      onClick={() => {
                        const matched = youtubeVideosData.find(v => v.youtubeId === project.youtubeId) || youtubeVideosData[0];
                        setActiveVideo(matched);
                      }}
                      className="p-2.5 rounded-xl bg-red-600/10 text-red-400 hover:bg-red-600 hover:text-white transition-colors"
                      title="Watch Walkaround Video"
                    >
                      <Play className="w-4 h-4 fill-current" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Build Detail Modal */}
      {selectedBuild && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#0C1017] border border-amber-500/30 rounded-3xl overflow-y-auto shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedBuild(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-10 border-b border-white/10 pb-6">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  {selectedBuild.brand}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {selectedBuild.vehicleModel}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedBuild.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1">
                <span className="flex items-center gap-1 text-amber-400">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selectedBuild.clientOrigin}</span>
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{selectedBuild.timeframe}</span>
                </span>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-6">
              {selectedBuild.gallery.map((img, idx) => (
                <div key={idx} className="h-28 rounded-2xl overflow-hidden bg-black border border-white/10">
                  <img src={img} alt="Build gallery" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedBuild.summary}
              </p>

              {/* Categorized Upgrades Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                  <h4 className="text-xs font-bold uppercase text-amber-400">
                    Interior Craftsmanship
                  </h4>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    {selectedBuild.interiorUpgrades.map((u, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1 shrink-0" />
                        <span>{u}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                  <h4 className="text-xs font-bold uppercase text-amber-400">
                    Lighting & Sound
                  </h4>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    {selectedBuild.audioLightingUpgrades.map((u, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1 shrink-0" />
                        <span>{u}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                  <h4 className="text-xs font-bold uppercase text-amber-400">
                    Exterior Styling
                  </h4>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    {selectedBuild.exteriorUpgrades.map((u, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1 shrink-0" />
                        <span>{u}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Client Review Quote if exists */}
              {selectedBuild.clientQuote && (
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs italic text-amber-200">
                  "{selectedBuild.clientQuote.text}" — <strong className="not-italic text-white">{selectedBuild.clientQuote.clientName} ({selectedBuild.clientQuote.location})</strong>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={`https://wa.me/919820803155?text=Hi%20Tanveer%20bhai%2C%20I%20saw%20the%20${encodeURIComponent(selectedBuild.title)}%20on%20your%20website%20and%20want%20the%20exact%20same%20spec%20for%20my%20car.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Enquire For This Exact Build</span>
                </a>

                {selectedBuild.youtubeId && (
                  <button
                    onClick={() => {
                      const matched = youtubeVideosData.find(v => v.youtubeId === selectedBuild.youtubeId) || youtubeVideosData[0];
                      setActiveVideo(matched);
                    }}
                    className="text-xs text-red-400 hover:text-red-300 font-semibold flex items-center gap-1.5"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Watch Tanveer’s Walkaround</span>
                  </button>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />

    </div>
  );
};
