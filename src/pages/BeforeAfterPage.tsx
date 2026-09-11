import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Sliders, ShieldCheck } from 'lucide-react';
import { beforeAfterData } from '../data/beforeAfterData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { SectionHeader } from '../components/SectionHeader';

export const BeforeAfterPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#07090D] text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <SectionHeader 
          badge="Transformation Gallery"
          title="Interactive Before & After Comparisons"
          subtitle="Experience the dramatic contrast between factory stock dealership delivery and our completed VIG luxury customizations. Drag each slider horizontally to inspect."
        />

        {/* Sliders List */}
        <div className="space-y-16 max-w-5xl mx-auto">
          {beforeAfterData.map((item) => (
            <div key={item.id} className="space-y-4">
              <BeforeAfterSlider item={item} />
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="card-luxury p-8 rounded-3xl border border-amber-500/30 max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready To Transform Your Vehicle?</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Give Your Car The VIG Signature Masterpiece Treatment
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Book an appointment at our Vashi flagship studio or customize your build online with our instant quote planner.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/calculator"
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider"
            >
              Open Customization Planner
            </Link>
            <a
              href="https://wa.me/919820803155?text=Hi%20Tanveer%20bhai%2C%20I%20saw%20the%20Before%20and%20After%20transformations%20on%20your%20website%20and%20want%20to%20upgrade%20my%20car."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider"
            >
              Chat with Tanveer on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
