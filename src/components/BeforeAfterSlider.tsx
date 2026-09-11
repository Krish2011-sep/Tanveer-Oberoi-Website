import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';
import { BeforeAfterPair } from '../types';

interface BeforeAfterSliderProps {
  item: BeforeAfterPair;
  compact?: boolean;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ item, compact = false }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="card-luxury rounded-3xl overflow-hidden shadow-2xl transition-all duration-300">
      {/* Header Info */}
      <div className="p-5 sm:p-6 border-b border-white/5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20">
              {item.category}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              {item.vehicle}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            {item.title}
          </h3>
        </div>

        {/* Quick Position Controls */}
        <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/10 text-xs">
          <button
            onClick={() => setSliderPosition(10)}
            className={`px-2.5 py-1 rounded-lg transition-colors font-medium ${sliderPosition < 25 ? 'bg-zinc-700 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            Show Before
          </button>
          <button
            onClick={() => setSliderPosition(50)}
            className={`px-2.5 py-1 rounded-lg transition-colors font-medium ${sliderPosition >= 40 && sliderPosition <= 60 ? 'bg-amber-500 text-black font-bold' : 'text-slate-400 hover:text-white'}`}
          >
            50/50
          </button>
          <button
            onClick={() => setSliderPosition(90)}
            className={`px-2.5 py-1 rounded-lg transition-colors font-medium ${sliderPosition > 75 ? 'bg-amber-500 text-black font-bold' : 'text-slate-400 hover:text-white'}`}
          >
            Show After
          </button>
        </div>
      </div>

      {/* Interactive Slider Area */}
      <div
        ref={containerRef}
        className="relative select-none cursor-ew-resize h-72 sm:h-96 md:h-[460px] w-full overflow-hidden bg-black"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER Image (Full background) */}
        <img
          src={item.afterImage}
          alt={`After: ${item.title}`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* AFTER Badge */}
        <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-amber-500/40 text-amber-400 text-xs font-bold flex items-center gap-1.5 shadow-lg">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{item.afterLabel}</span>
        </div>

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={item.beforeImage}
            alt={`Before: ${item.title}`}
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              height: '100%'
            }}
          />
        </div>

        {/* BEFORE Badge */}
        <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-slate-300 text-xs font-bold shadow-lg">
          <span>{item.beforeLabel}</span>
        </div>

        {/* Divider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-amber-400 z-30 shadow-[0_0_15px_rgba(245,158,11,0.8)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-amber-400 border-2 border-black text-black shadow-2xl flex items-center justify-center cursor-ew-resize transition-transform hover:scale-110 active:scale-95">
            <MoveHorizontal className="w-4 h-4 font-bold" />
          </div>
        </div>

        {/* Interactive Helper Overlay hint */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] text-slate-300 pointer-events-none flex items-center gap-1.5">
          <MoveHorizontal className="w-3 h-3 text-amber-400" />
          <span>Drag or tap to inspect difference</span>
        </div>
      </div>

      {/* Description & Included Upgrades */}
      {!compact && (
        <div className="p-5 sm:p-6 bg-[#0B0F15] border-t border-white/5 space-y-4">
          <p className="text-sm text-slate-300 leading-relaxed">
            {item.description}
          </p>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2.5">
              Transformation Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {item.upgradesIncluded.map((upgrade, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span>{upgrade}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
