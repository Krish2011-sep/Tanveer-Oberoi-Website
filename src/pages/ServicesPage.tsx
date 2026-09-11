import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Layers, 
  Sliders, 
  HelpCircle,
  Armchair,
  Volume2,
  Sun,
  Wrench
} from 'lucide-react';

import { servicesData } from '../data/servicesData';
import { SectionHeader } from '../components/SectionHeader';

export const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Interiors', 'Comfort', 'Lighting', 'Sound', 'Exteriors', 'Vehicle Upgrades', 'Acoustics'];

  const filteredServices = selectedCategory === 'All' 
    ? servicesData 
    : servicesData.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#07090D] text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <SectionHeader 
          badge="Signature Automotive Engineering"
          title="Master Services & Customization Divisions"
          subtitle="From bespoke German Nappa leather interiors and motorized VIP lounge recliners to laser Bi-LED headlights and concert-hall DSP acoustics. Engineered with 100% plug & play couplers."
        />

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="card-luxury rounded-3xl overflow-hidden border border-white/10 flex flex-col group transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative h-60 w-full overflow-hidden bg-black">
                <img
                  src={service.cardImage}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E131B] via-transparent to-transparent opacity-90" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-amber-400 border border-amber-500/30">
                  {service.category}
                </span>
                <span className="absolute bottom-3 right-4 text-xs font-mono-tech text-amber-300 bg-black/70 px-2.5 py-1 rounded-md border border-white/10">
                  From {service.priceStartingFrom}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-2 pt-3 border-t border-white/5 text-xs">
                  {service.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Turnaround & Warranty Badge */}
                <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 font-mono-tech text-slate-400">
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5">
                    <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{service.timeRequired}</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{service.warrantyInfo.split(' ')[0]} Warranty</span>
                  </div>
                </div>

                {/* CTA Link */}
                <div className="pt-2">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-black text-xs font-bold uppercase tracking-wider transition-all text-white"
                  >
                    <span>View Specifications & Process</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Banner: Design Your Custom Build */}
        <div className="mt-16 card-luxury p-8 rounded-3xl border border-amber-500/30 bg-gradient-to-r from-[#111622] via-[#0E131C] to-[#0A0D14] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">
              Looking For A Customized Package For Your Specific Car?
            </h3>
            <p className="text-sm text-slate-400 max-w-xl">
              Use our interactive quote engine to select multiple services and receive an immediate ballpark calculation and WhatsApp build sheet for Tanveer Oberoi.
            </p>
          </div>

          <Link
            to="/calculator"
            className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider shrink-0 shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
          >
            Launch Customization Planner
          </Link>
        </div>

      </div>
    </div>
  );
};
