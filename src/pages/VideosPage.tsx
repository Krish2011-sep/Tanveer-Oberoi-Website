import React, { useState } from 'react';
import { Youtube, Play, Eye, Clock, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { youtubeVideosData } from '../data/youtubeVideosData';
import { SectionHeader } from '../components/SectionHeader';
import { VideoModal } from '../components/VideoModal';
import { YouTubeVideo } from '../types';

export const VideosPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeVideo, setActiveVideo] = useState<YouTubeVideo | null>(null);

  const categories = ['All', 'Full Walkaround', 'Technical Guide', 'VIP Recliners', 'Interior Craftsmanship', 'OEM Upgrades'];

  const filteredVideos = selectedCategory === 'All'
    ? youtubeVideosData
    : youtubeVideosData.filter(v => v.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#07090D] text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Page Header */}
        <SectionHeader 
          badge="YouTube Official Studio"
          title="Inside The VIG Auto Workshop"
          subtitle="Join 200,000+ car enthusiasts on India’s most transparent automotive upgrade channel. Watch detailed build walkthroughs, wiring technical guides, and client delivery reactions hosted by Tanveer Oberoi."
        />

        {/* YouTube Community Banner */}
        <div className="card-luxury p-8 rounded-3xl border border-red-600/30 bg-gradient-to-r from-red-950/30 via-[#0E131C] to-[#0A0D14] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-red-600/20 border border-red-600/40 flex items-center justify-center text-red-500 shrink-0">
              <Youtube className="w-8 h-8 fill-current" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-red-400">
                Official YouTube Channel
              </div>
              <h3 className="text-2xl font-black text-white">
                VIG AUTO ACCESSORIES • 200K+ SUBSCRIBERS
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                New build walkarounds released weekly covering Creta, Scorpio-N, Thar Roxx, Hycross & more.
              </p>
            </div>
          </div>

          <a
            href="https://www.youtube.com/channel/UCO6ZCUQ0t0FYFmdCX1_WyPw"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider shrink-0 flex items-center gap-2 shadow-xl shadow-red-600/20"
          >
            <span>Subscribe On YouTube</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${selectedCategory === cat ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="card-luxury rounded-3xl overflow-hidden border border-white/10 group cursor-pointer flex flex-col transition-all duration-300"
            >
              <div className="relative h-56 w-full overflow-hidden bg-black">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 font-mono text-[11px] text-white">
                  {video.duration}
                </span>
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-sm text-[10px] font-bold uppercase text-amber-400 border border-amber-500/20">
                  {video.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-[11px] text-amber-400 font-semibold mb-1">
                    {video.featuredCar}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-2 leading-relaxed">
                    {video.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-white/5">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{video.views}</span>
                  </span>
                  <span className="text-amber-400 font-bold flex items-center gap-1">
                    <span>Watch Now</span>
                    <Play className="w-3 h-3 fill-current" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />

    </div>
  );
};
