import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Send, 
  MessageCircle, 
  Phone, 
  Car, 
  ChevronRight, 
  DollarSign, 
  HelpCircle,
  MapPin,
  Calendar
} from 'lucide-react';

interface UpgradeOption {
  id: string;
  name: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  timeHours: number;
  description: string;
  recommendedForBase?: boolean;
}

const UPGRADE_OPTIONS: UpgradeOption[] = [
  {
    id: 'nappa-leather',
    name: 'Luxury German Nappa Interior & Leather Wrap',
    category: 'Interiors',
    minPrice: 28000,
    maxPrice: 42000,
    timeHours: 16,
    description: 'Tailored Nappa leather seats, door pad wraps, center console, and soft-touch dashboard inserts.',
    recommendedForBase: true
  },
  {
    id: 'vip-recliners',
    name: 'VIP Motorized Captain Recliner Lounge Seats',
    category: 'Comfort',
    minPrice: 65000,
    maxPrice: 115000,
    timeHours: 24,
    description: 'Twin first-class power recliners with leg ottomans, massage, and wireless charging center console.'
  },
  {
    id: 'biled-lighting',
    name: 'Bi-LED Laser Projectors & Triple Fog Modules',
    category: 'Lighting',
    minPrice: 16500,
    maxPrice: 28000,
    timeHours: 6,
    description: 'Military-grade 6000K daylight beam throwing 400m+ with razor-sharp anti-glare cutoffs.',
    recommendedForBase: true
  },
  {
    id: 'symphony-ambient',
    name: 'German Symphony K4 Multi-Zone Ambient Lighting',
    category: 'Lighting',
    minPrice: 8500,
    maxPrice: 13500,
    timeHours: 4,
    description: '64-color flowing fiber-optic ribbons with app control and OEM switch integration.'
  },
  {
    id: 'audiophile-dsp',
    name: 'Hi-End Audio Stage (Morel / Audison + DSP)',
    category: 'Sound',
    minPrice: 26000,
    maxPrice: 58000,
    timeHours: 8,
    description: '3-way active components, digital sound processor time-alignment, and stealth amplifier.'
  },
  {
    id: 'acoustic-damping',
    name: 'Full Cabin 3-Layer Acoustic Sound Damping',
    category: 'Acoustics',
    minPrice: 14000,
    maxPrice: 26000,
    timeHours: 8,
    description: 'Multi-layer butyl deadening across 4 doors, floor, and roof. Drops cabin noise by 8-12 dB.'
  },
  {
    id: 'camera-360',
    name: '360° Sony HD Bird’s-Eye Camera & Screen',
    category: 'Vehicle Upgrades',
    minPrice: 22000,
    maxPrice: 36000,
    timeHours: 6,
    description: '4-camera Sony Starvis surround view with dynamic steering guidelines and 2K touch display.',
    recommendedForBase: true
  },
  {
    id: 'exterior-styling',
    name: 'Stealth De-Chrome, Grille & Aero Diffusers',
    category: 'Exteriors',
    minPrice: 15000,
    maxPrice: 34000,
    timeHours: 6,
    description: 'Knight Edition black-out styling, custom front sports grille, and rear quad exhaust diffuser.'
  },
  {
    id: 'oem-cruise-steering',
    name: 'OEM Genuine Steering Controls & Cruise Activation',
    category: 'Vehicle Upgrades',
    minPrice: 12500,
    maxPrice: 18500,
    timeHours: 4,
    description: 'Original factory Mobis/Mahindra switches plugged via 100% coupler-to-coupler loom.',
    recommendedForBase: true
  }
];

const CAR_MODELS = [
  'Hyundai Creta (2020 - 2024 / Facelift)',
  'Mahindra Scorpio-N',
  'Mahindra Thar / Thar Roxx (3-Door & 5-Door)',
  'Toyota Innova Hycross / Crysta',
  'Maruti Suzuki Grand Vitara',
  'Mahindra XUV700',
  'Kia Seltos / Carens',
  'Toyota Fortuner / Legender',
  'Tata Safari / Harrier',
  'Maruti Brezza / Fronx / Jimny',
  'Other Luxury SUV or Sedan'
];

export const BuildPlanner: React.FC<{ isStandalonePage?: boolean }> = ({ isStandalonePage = false }) => {
  const [selectedCar, setSelectedCar] = useState<string>('Hyundai Creta (2020 - 2024 / Facelift)');
  const [selectedTrim, setSelectedTrim] = useState<'base' | 'mid' | 'top'>('base');
  const [selectedUpgrades, setSelectedUpgrades] = useState<string[]>([
    'nappa-leather',
    'biled-lighting',
    'symphony-ambient',
    'oem-cruise-steering'
  ]);
  const [isOutstation, setIsOutstation] = useState<boolean>(true);
  const [clientCity, setClientCity] = useState<string>('Surat / Pune / Hyderabad');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const toggleUpgrade = (id: string) => {
    setSelectedUpgrades(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const selectAllRecommended = () => {
    const recommended = UPGRADE_OPTIONS.filter(opt => opt.recommendedForBase).map(opt => opt.id);
    setSelectedUpgrades(Array.from(new Set([...selectedUpgrades, ...recommended])));
  };

  // Calculations
  const chosenOptions = UPGRADE_OPTIONS.filter(opt => selectedUpgrades.includes(opt.id));
  const totalMinPrice = chosenOptions.reduce((sum, opt) => sum + opt.minPrice, 0);
  const totalMaxPrice = chosenOptions.reduce((sum, opt) => sum + opt.maxPrice, 0);
  const totalHours = chosenOptions.reduce((sum, opt) => sum + opt.timeHours, 0);
  
  let estimatedDays = '1 Working Day';
  if (totalHours > 20) {
    estimatedDays = '3 - 4 Working Days';
  } else if (totalHours > 10) {
    estimatedDays = '2 Working Days';
  }

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const generateWhatsAppMessage = () => {
    const itemsList = chosenOptions.map(opt => `• ${opt.name}`).join('%0A');
    const msg = `*NEW BUILD ENQUIRY - VIG AUTO ACCESSORIES*%0A%0A` +
      `*Client:* ${clientName || 'Automotive Enthusiast'}%0A` +
      `*Contact:* ${clientPhone || 'WhatsApp User'}%0A` +
      `*Vehicle:* ${selectedCar}%0A` +
      `*Current Trim:* ${selectedTrim.toUpperCase()} Variant%0A` +
      `*Client Location:* ${isOutstation ? `Outstation (${clientCity})` : 'Mumbai / Navi Mumbai'}%0A` +
      `*Preferred Date:* ${preferredDate || 'Earliest Available Bay'}%0A%0A` +
      `*Selected Customizations:*%0A${itemsList}%0A%0A` +
      `*Estimated Range:* ${formatPrice(totalMinPrice)} - ${formatPrice(totalMaxPrice)}%0A` +
      `*Estimated Turnaround:* ${estimatedDays}%0A%0A` +
      `_I would like to discuss booking an appointment and reserving a workshop bay at Vashi Sector 17._`;
    return `https://wa.me/919820803155?text=${msg}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`w-full ${isStandalonePage ? 'py-6' : 'py-12'}`}>
      <div className="card-luxury rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="relative z-10 mb-8 border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Customization Planner</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Design Your VIG Signature Build
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Select your vehicle and desired upgrades for an instant realistic budget and turnaround estimate.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center">
            <span className="text-xs text-slate-400">100% Plug & Play Couplers Guarantee</span>
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>
        </div>

        {/* Step 1 & 2: Vehicle & Trim Selection */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Car Model Dropdown */}
          <div className="md:col-span-2 space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Car className="w-4 h-4 text-amber-400" />
              <span>1. Select Your Vehicle Model</span>
            </label>
            <select
              value={selectedCar}
              onChange={(e) => setSelectedCar(e.target.value)}
              className="w-full bg-[#121620] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
            >
              {CAR_MODELS.map((car) => (
                <option key={car} value={car} className="bg-zinc-900 text-white">
                  {car}
                </option>
              ))}
            </select>
          </div>

          {/* Current Variant / Trim */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
              2. Current Vehicle Variant
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setSelectedTrim('base')}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold uppercase transition-all ${selectedTrim === 'base' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
              >
                Base Model
              </button>
              <button
                type="button"
                onClick={() => setSelectedTrim('mid')}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold uppercase transition-all ${selectedTrim === 'mid' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
              >
                Mid Variant
              </button>
              <button
                type="button"
                onClick={() => setSelectedTrim('top')}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold uppercase transition-all ${selectedTrim === 'top' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
              >
                Top Spec
              </button>
            </div>
          </div>

        </div>

        {/* Step 3: Upgrades Selection Grid */}
        <div className="relative z-10 mb-8">
          <div className="flex items-center justify-between mb-4">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
              3. Choose Customization Modules ({selectedUpgrades.length} selected)
            </label>
            {selectedTrim === 'base' && (
              <button
                type="button"
                onClick={selectAllRecommended}
                className="text-xs text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4"
              >
                Select Base-to-Top Recommended Pack
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {UPGRADE_OPTIONS.map((opt) => {
              const isSelected = selectedUpgrades.includes(opt.id);
              return (
                <div
                  key={opt.id}
                  onClick={() => toggleUpgrade(opt.id)}
                  className={`p-4 rounded-2xl cursor-pointer border transition-all duration-200 select-none relative ${isSelected ? 'bg-amber-500/10 border-amber-500/50 shadow-md' : 'bg-white/[0.03] border-white/5 hover:border-white/20 hover:bg-white/[0.06]'}`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-slate-400">
                      {opt.category}
                    </span>
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${isSelected ? 'bg-amber-500 text-black' : 'border border-white/20 text-transparent'}`}>
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1">
                    {opt.name}
                  </h4>
                  <p className="text-xs text-slate-400 leading-snug mb-3 line-clamp-2">
                    {opt.description}
                  </p>

                  <div className="flex items-center justify-between text-xs pt-2 border-t border-white/5 font-mono-tech">
                    <span className="text-amber-400 font-semibold">
                      {formatPrice(opt.minPrice)} – {formatPrice(opt.maxPrice)}
                    </span>
                    <span className="text-slate-400 text-[11px] flex items-center gap-1 font-sans">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>~{opt.timeHours}h</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 4: Outstation Assistance */}
        <div className="relative z-10 mb-8 p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Traveling from outside Mumbai / Navi Mumbai?
              </div>
              <p className="text-xs text-slate-400">
                Over 60% of our clients travel from Gujarat, Pune, Goa, Hyderabad & across India. We offer express bay reservation & stay assistance in Vashi.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
            <button
              type="button"
              onClick={() => setIsOutstation(true)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${isOutstation ? 'bg-amber-500 text-black' : 'bg-white/5 text-slate-300'}`}
            >
              Yes, Outstation Client
            </button>
            <button
              type="button"
              onClick={() => setIsOutstation(false)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${!isOutstation ? 'bg-zinc-700 text-white' : 'bg-white/5 text-slate-300'}`}
            >
              Mumbai Local
            </button>
          </div>
        </div>

        {/* Estimation Summary & CTA Section */}
        <div className="relative z-10 bg-gradient-to-br from-[#121722] via-[#0E131C] to-[#0A0D14] border border-amber-500/30 rounded-2xl p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            
            {/* Price & Turnaround Specs */}
            <div className="lg:col-span-1 space-y-4 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Estimated Investment Range
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono-tech mt-1">
                  {chosenOptions.length > 0 ? (
                    `${formatPrice(totalMinPrice)} – ${formatPrice(totalMaxPrice)}`
                  ) : (
                    'Select modules above'
                  )}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  *Includes genuine parts, harness & master fitment. Exact quote verified on vehicle inspection.
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Turnaround</div>
                  <div className="text-xs font-bold text-white flex items-center gap-1 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{estimatedDays}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Wiring Safety</div>
                  <div className="text-xs font-bold text-emerald-400 flex items-center gap-1 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Zero Slicing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Instant Action: WhatsApp Build Sheet & Direct Call */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-sm shadow-xl shadow-emerald-500/10 transition-all transform hover:-translate-y-0.5 text-center"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Send Build Sheet to Tanveer Oberoi</span>
                </a>

                <a
                  href="tel:+919820803155"
                  className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/15 transition-all text-center"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call: +91 9820803155</span>
                </a>
              </div>

              {/* Quick Callback Request Form */}
              {!submitted ? (
                <form onSubmit={handleFormSubmit} className="pt-3 border-t border-white/10">
                  <div className="text-xs text-slate-300 font-semibold mb-2">
                    Or leave your contact details for an official quotation & bay reservation:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      required
                      className="bg-black/50 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                    <input
                      type="tel"
                      placeholder="WhatsApp Mobile Number"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      required
                      className="bg-black/50 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                    <button
                      type="submit"
                      className="py-2 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition-colors"
                    >
                      Request Callback
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Thank you! Your customization build sheet has been logged. Tanveer and the VIG engineering team will connect with you on WhatsApp shortly.</span>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
