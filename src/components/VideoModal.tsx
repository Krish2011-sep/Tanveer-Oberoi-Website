import React from 'react';
import { X, Youtube, ExternalLink, Calendar, Eye, Clock } from 'lucide-react';
import { YouTubeVideo } from '../types';

interface VideoModalProps {
  video: YouTubeVideo | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#0C1017] border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-4 px-6 border-b border-white/10 bg-[#080B10]">
          <div className="flex items-center gap-2">
            <Youtube className="w-5 h-5 text-red-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              VIG Auto Accessories Official Channel
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
            aria-label="Close video modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Video Info */}
        <div className="p-6 space-y-3 bg-[#0A0E15]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-lg font-bold text-white leading-snug">
              {video.title}
            </h3>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
              {video.featuredCar}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              <span>{video.views}</span>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{video.duration}</span>
            </span>
            <span className="text-amber-400 font-medium">
              Category: {video.category}
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed pt-1">
            {video.description}
          </p>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between">
            <a
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-red-400 hover:text-red-300 font-semibold flex items-center gap-1.5"
            >
              <span>Watch on YouTube App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://wa.me/919820803155?text=Hi%20Tanveer%20bhai%2C%20I%20saw%20your%20video%20about%20the%20customization%20and%20want%20to%20do%20the%20same%20for%20my%20car."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1"
            >
              <span>Enquire About This Exact Build</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
