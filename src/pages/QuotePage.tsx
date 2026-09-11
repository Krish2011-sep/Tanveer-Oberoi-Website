import React from 'react';
import { BuildPlanner } from '../components/BuildPlanner';
import { SectionHeader } from '../components/SectionHeader';
import { ShieldCheck, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

export const QuotePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#07090D] text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <SectionHeader 
          badge="Interactive Customization Calculator"
          title="Plan Your Signature Build & Get Instant Quote"
          subtitle="Select your vehicle model, current variant, and desired upgrades. Get a transparent budget range and send your customized build sheet directly to Tanveer Oberoi on WhatsApp."
        />

        {/* The Calculator Engine */}
        <BuildPlanner isStandalonePage={true} />

        {/* Guarantees & Transparency */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="card-luxury p-6 rounded-3xl border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <ShieldCheck className="w-5 h-5" />
              <span>100% Fixed-Price Transparency</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              No hidden surprise charges. All quotations include parts, custom wiring harnesses, and master installation.
            </p>
          </div>

          <div className="card-luxury p-6 rounded-3xl border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5" />
              <span>Dealership Warranty Safe</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every connection uses OEM-grade latching T-couplers. Zero wire stripping ensures full insurance compliance.
            </p>
          </div>

          <div className="card-luxury p-6 rounded-3xl border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
              <Clock className="w-5 h-5" />
              <span>Guaranteed Reserved Bay</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pre-booking secures your dedicated vehicle bay and ensures custom leathers and parts are prepped before arrival.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
