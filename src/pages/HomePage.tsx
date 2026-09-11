import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Play, 
  Phone, 
  MessageCircle, 
  Star, 
  MapPin, 
  Clock, 
  Sliders, 
  CheckCircle2, 
  ChevronRight,
  Layers,
  Sun,
  Volume2,
  Armchair,
  Wrench,
  Award,
  Zap,
  Users
} from 'lucide-react';

import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import { beforeAfterData } from '../data/beforeAfterData';
import { youtubeVideosData } from '../data/youtubeVideosData';
import { reviewsData } from '../data/reviewsData';
import { faqData } from '../data/faqData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { BuildPlanner } from '../components/BuildPlanner';
import { VideoModal } from '../components/VideoModal';
import { SectionHeader } from '../components/SectionHeader';
import { YouTubeVideo } from '../types';

export const HomePage: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<YouTubeVideo | null>(null);
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<string>('Wiring & Safety');

  const featuredBeforeAfter = beforeAfterData[0];
  const featuredProjects = projectsData.slice(0, 4);
  const featuredVideos = youtubeVideosData.slice(0, 3);
  const featuredReviews = reviewsData.slice(0, 3);

  const vehicleShortcuts = [
    { name: 'Hyundai Creta', tag: 'Base to Knight Edition', img: '/images/creta-suv.jpg' },
    { name: 'Mahindra Scorpio-N', tag: 'VIP Recliners & Stealth', img: '/images/black-suv-profile.jpg' },
    { name: 'Mahindra Thar / Roxx', tag: 'Sahara Overland Luxury', img: '/images/thar-offroad.jpg' },
    { name: 'Toyota Innova Hycross', tag: 'Presidential Jet Lounge', img: '/images/hycross-interior.jpg' },
    { name: 'Maruti Grand Vitara', tag: 'Obsidian Black Top Trim', img: '/images/hero-suv.jpg' },
  ];

  return (
    <div className="min-h-screen bg-[#07090D] text-slate-100 overflow-x-hidden">
      
      {/* ========================================================= */}
      {/* 1. CINEMATIC LUXURY HERO SECTION */}
      {/* ========================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Cinematic Backdrop Image with Dark Gradients */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-interior.jpg" 
            alt="VIG Auto Accessories Luxury Car Cockpit"
            className="w-full h-full object-cover object-center filter brightness-[0.32] scale-105 transform motion-safe:animate-pulse duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-[#07090D]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090D] via-transparent to-[#07090D]/80" />
          {/* Subtle gold radial glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          
          {/* Top Elite Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-amber-500/40 bg-black/60 backdrop-blur-md shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span className="text-xs font-bold tracking-widest uppercase text-amber-400 font-mono-tech">
              TANVEER OBEROI’S FLAGSHIP STUDIO • VASHI, NAVI MUMBAI
            </span>
          </div>

          {/* Master Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              WHERE AUTOMOTIVE CRAFT <br />
              <span className="text-gold-gradient">BECOMES BESPOKE LUXURY.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-300 font-normal leading-relaxed">
              India’s premier automotive customization house. Famous for Maybach-level bespoke leather interiors, first-class VIP recliner lounges, concert-hall DSP acoustics, and <strong className="text-amber-300">100% plug & play coupler wiring</strong> with zero factory wire slicing.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-sm uppercase tracking-wider shadow-2xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <Sliders className="w-4 h-4" />
              <span>Plan Your Custom Build</span>
            </Link>

            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm backdrop-blur-md transition-all"
            >
              <span>Explore 12,000+ Completed Builds</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>

          {/* Trust Stat Badges */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center max-w-4xl mx-auto">
            <div className="p-3 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/5">
              <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono-tech">200K+</div>
              <div className="text-xs text-slate-400 mt-0.5">YouTube Community</div>
            </div>
            <div className="p-3 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/5">
              <div className="text-2xl sm:text-3xl font-black text-white font-mono-tech">100%</div>
              <div className="text-xs text-emerald-400 mt-0.5 font-medium">Coupler-to-Coupler Wiring</div>
            </div>
            <div className="p-3 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/5">
              <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono-tech">15+ Yrs</div>
              <div className="text-xs text-slate-400 mt-0.5">Master Automotive Legacy</div>
            </div>
            <div className="p-3 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/5">
              <div className="text-2xl sm:text-3xl font-black text-white font-mono-tech">12,000+</div>
              <div className="text-xs text-slate-400 mt-0.5">Vehicles Upgraded</div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. POPULAR CAR MODEL FAST-TRACK FINDER */}
      {/* ========================================================= */}
      <section className="py-12 bg-[#090C12] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                Vehicle-Specific Packages
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Select Your Vehicle To View Custom Packages
              </h3>
            </div>
            <Link 
              to="/projects" 
              className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
            >
              <span>View all supported vehicles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {vehicleShortcuts.map((car, idx) => (
              <Link
                key={idx}
                to={`/projects`}
                className="group p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-500/40 hover:bg-white/[0.06] transition-all flex flex-col items-center text-center overflow-hidden"
              >
                <div className="w-full h-24 rounded-xl overflow-hidden mb-2.5 bg-black">
                  <img 
                    src={car.img} 
                    alt={car.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">
                  {car.name}
                </h4>
                <span className="text-[10px] text-slate-400 mt-0.5">
                  {car.tag}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. CORE PILLARS: THE VIG ENGINEERING STANDARD */}
      {/* ========================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          badge="The VIG Engineering Standard"
          title="Why Connoisseurs Across India Choose Tanveer Oberoi"
          subtitle="Car customization should never compromise manufacturer engineering or vehicle safety. We have spent over a decade perfecting methods that elevate your car while protecting its integrity."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-luxury p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white">100% Coupler-to-Coupler Wiring</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              We never strip, slice, or tape into factory wiring harnesses. We engineer vehicle-specific male-to-female latching T-couplers and dedicated fused relays. Your original factory warranty and insurance stay 100% protected.
            </p>
            <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 pt-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Dealership & Insurance Compliant</span>
            </div>
          </div>

          <div className="card-luxury p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white">Master Saddler Upholstery</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              We do not slap loose covers over seats. We strip seats to their metal skeletal frame, re-sculpt ergonomic contour memory foam, and tailor genuine German Nappa leather with certified computer-calibrated airbag break-away seams.
            </p>
            <div className="text-xs font-semibold text-amber-400 flex items-center gap-1.5 pt-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>3-Year Warranty & Airbag Certified</span>
            </div>
          </div>

          <div className="card-luxury p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <Volume2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white">Acoustic & Optical Calibration</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Headlights are aimed on our laser optical wall to give 400m visibility without blinding traffic. Sound systems are calibrated using pink noise and RTA microphones for a 32-band DSP live-concert soundstage.
            </p>
            <div className="text-xs font-semibold text-sky-400 flex items-center gap-1.5 pt-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>RTA Tuned & Laser Aligned</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. SIGNATURE SERVICES HUB */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#0A0D14] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border border-amber-500/30 bg-amber-500/10 text-amber-400">
                <Sparkles className="w-3 h-3" />
                <span>Our Customization Divisions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Craftsmanship Across Every Dimension
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 group"
            >
              <span>Explore All 7 Service Divisions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="card-luxury rounded-3xl overflow-hidden border border-white/10 flex flex-col group transition-all duration-300"
              >
                <div className="relative h-56 w-full overflow-hidden bg-black">
                  <img
                    src={service.cardImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E131B] via-transparent to-transparent opacity-90" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-amber-400 border border-amber-500/30">
                    {service.category}
                  </span>
                  <span className="absolute bottom-3 right-4 text-xs font-mono-tech text-amber-300 bg-black/70 px-2.5 py-1 rounded-md border border-white/10">
                    From {service.priceStartingFrom}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-2 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {service.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="line-clamp-1">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center justify-between w-full p-2.5 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-black text-xs font-bold transition-all text-white"
                    >
                      <span>View Specifications & Process</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. INTERACTIVE BEFORE & AFTER COMPARISON SLIDER */}
      {/* ========================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          badge="Interactive Transformation Slider"
          title="See The Reality: Stock Dealership vs VIG Bespoke"
          subtitle="Drag the slider below to inspect the transformation of a base-variant cabin into a handcrafted luxury lounge."
        />

        <div className="max-w-4xl mx-auto">
          <BeforeAfterSlider item={featuredBeforeAfter} />
          
          <div className="text-center mt-6">
            <Link
              to="/before-after"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-wider text-amber-400 transition-colors"
            >
              <span>Explore All Before & After Build Comparisons</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. FEATURED PROJECT BUILDS PORTFOLIO */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#090C12] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Portfolio Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                Iconic Vehicles Reimagined by VIG
              </h2>
            </div>
            <Link
              to="/projects"
              className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
            >
              <span>Browse Full Vehicle Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="card-luxury rounded-3xl overflow-hidden border border-white/10 flex flex-col group"
              >
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
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
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                    <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] text-amber-300">
                      {project.clientOrigin}
                    </span>
                    <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px]">
                      {project.timeframe}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="text-[11px] font-bold uppercase text-amber-400 mb-2">
                      Key Highlights:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {project.detailedScope.slice(0, 4).map((scope, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          <span className="truncate">{scope}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between gap-3">
                    <Link
                      to={`/projects`}
                      className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold transition-colors"
                    >
                      View Full Build Details
                    </Link>

                    {project.videoUrl && (
                      <button
                        onClick={() => {
                          const matchedVideo = youtubeVideosData.find(v => v.youtubeId === project.youtubeId) || youtubeVideosData[0];
                          setActiveVideo(matchedVideo);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 font-semibold"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Watch Walkaround</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. SPOTLIGHT: VIP RECLINER SEATS EXPERIENCE */}
      {/* ========================================================= */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#07090D] via-[#0E131C] to-[#07090D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Visual */}
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl group">
              <img
                src="/images/hycross-interior.jpg"
                alt="VIP Recliner Lounge Seats"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-amber-500 text-black text-xs font-black uppercase tracking-wider">
                VIG Signature Specialty
              </div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10">
                <div className="text-white font-bold text-sm">
                  Toyota Innova Hycross & Scorpio-N VIP Conversions
                </div>
                <div className="text-slate-400 text-xs mt-1">
                  140° Full Motorized Recline • Calf Ottomans • Independent Center Console • Zero Chassis Alteration
                </div>
              </div>
            </div>

            {/* Content & Specs */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
                <Armchair className="w-3.5 h-3.5" />
                <span>The Private Jet Cabin Revolution</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Turn Your SUV or MPV Into A <br />
                <span className="text-gold-gradient">Rolling Presidential Suite.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Why endure rigid factory bench seats? VIG Auto Accessories transforms vehicles like the Toyota Innova Hycross, Mahindra Scorpio-N, Thar Roxx, and Kia Carnival into bespoke first-class cabins. Featuring German electric actuators, pneumatic lumbar massage, wireless device chargers, and retractable aircraft worktables.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs font-bold text-white mb-1">100% Bolt-On Fitment</div>
                  <p className="text-[11px] text-slate-400">Installs directly onto original factory chassis bolt points. Zero drilling or chassis welding.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs font-bold text-white mb-1">Motorized Ottomans</div>
                  <p className="text-[11px] text-slate-400">Electric extending calf supports paired with 140° zero-gravity sleep recline.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs font-bold text-white mb-1">Pneumatic Massage</div>
                  <p className="text-[11px] text-slate-400">Multi-chamber air massage bladders relieve lumbar tension on cross-country trips.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs font-bold text-white mb-1">2-Year Direct Warranty</div>
                  <p className="text-[11px] text-slate-400">Comprehensive warranty on all electric motors, switches, and internal frames.</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/services/recliner-seats"
                  className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider transition-all"
                >
                  Explore Recliner Lounge Models
                </Link>
                <a
                  href="https://wa.me/919820803155?text=Hi%20Tanveer%20bhai%2C%20I%20am%20interested%20in%20the%20VIP%20Recliner%20Lounge%20Seats%20for%20my%20car."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/15 transition-all"
                >
                  WhatsApp Tanveer Directly
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. YOUTUBE VIDEO WALKTHROUGHS & 200K+ COMMUNITY */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#07090D] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600/10 text-red-500 border border-red-600/30 mb-2">
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>200,000+ Automotive Enthusiasts</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Watch Tanveer Oberoi’s Video Walkarounds
              </h2>
              <p className="text-sm text-slate-400 mt-1 max-w-xl">
                Transparent breakdowns of every car we touch. See the parts, hear the sound systems, and inspect the stitch lines in 4K resolution.
              </p>
            </div>
            <a
              href="https://www.youtube.com/channel/UCO6ZCUQ0t0FYFmdCX1_WyPw"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 self-start md:self-auto shadow-lg shadow-red-600/20"
            >
              <span>Subscribe to YouTube Channel</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className="card-luxury rounded-3xl overflow-hidden border border-white/10 group cursor-pointer flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden bg-black">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 font-mono text-[11px] text-white">
                    {video.duration}
                  </span>
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-sm text-[10px] font-bold uppercase text-amber-400 border border-amber-500/20">
                    {video.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-1.5 leading-relaxed">
                      {video.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/5">
                    <span>{video.views}</span>
                    <span className="text-amber-400 font-medium">Click to Play</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/videos"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white uppercase tracking-wider"
            >
              <span>View All Build Walkthroughs & Technical Guides</span>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. NATIONWIDE REVIEWS & WALL OF TRUST */}
      {/* ========================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          badge="Verified Client Testimonials"
          title="They Drove From Gujarat, Pune, Goa & Hyderabad"
          subtitle="Real reviews from real automobile owners who trusted Tanveer Oberoi with their brand new vehicles."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredReviews.map((rev) => (
            <div
              key={rev.id}
              className="card-luxury p-6 sm:p-7 rounded-3xl border border-white/10 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {rev.date}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white">
                  "{rev.reviewTitle}"
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">{rev.clientName}</div>
                  <div className="text-[11px] text-amber-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    <span>{rev.originCity}</span>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                  {rev.carModel}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/reviews"
            className="text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider inline-flex items-center gap-1.5"
          >
            <span>Read 100+ Verified Customer Stories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. INTERACTIVE BUILD PLANNER & QUOTE ENGINE */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#090C12] border-y border-white/5" id="quote-calculator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BuildPlanner />
        </div>
      </section>

      {/* ========================================================= */}
      {/* 11. WORKSHOP STUDIO & LOCATION MAP */}
      {/* ========================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          badge="Flagship Vashi Studio"
          title="Visit Our Studio In Sector 17, Vashi"
          subtitle="Conveniently situated in the heart of Navi Mumbai, easily accessible via the Mumbai-Pune Expressway, Eastern Freeway, and Vashi Railway Station."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Workshop Details Card */}
          <div className="card-luxury p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                Studio Address
              </div>
              <h3 className="text-xl font-bold text-white">
                VIG Auto Accessories
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Shop No. 3, Vardhman Market, Plot No. 75, Sector 17, Vashi, Navi Mumbai, Maharashtra 400703
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Landmark: Near Sector 17 Automobile Hub, Opp. Vardhman Plaza.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/10">
              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-slate-400 uppercase">Direct Booking</span>
                <div className="text-sm font-bold text-white">
                  <a href="tel:+919820803155" className="hover:text-amber-400">+91 9820803155</a>
                </div>
                <div className="text-xs text-slate-400">
                  <a href="tel:+917977493577" className="hover:text-amber-400">+91 7977493577</a>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-slate-400 uppercase">Operational Hours</span>
                <div className="text-sm font-bold text-emerald-400">
                  Mon – Sun: 10:30 AM – 8:30 PM
                </div>
                <div className="text-xs text-slate-400">Open 7 days a week</div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Vig+Auto+accessories+Vashi+Navi+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href="https://wa.me/919820803155?text=Hi%20Tanveer%20bhai%2C%20I%20am%20planning%20to%20visit%20the%20Vashi%20studio%20for%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center gap-2 border border-white/10"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Book Appointment</span>
              </a>
            </div>
          </div>

          {/* Embedded Map Representation */}
          <div className="rounded-3xl overflow-hidden border border-white/10 h-[380px] relative bg-zinc-900 shadow-2xl">
            <iframe
              title="VIG Auto Accessories Vashi Location"
              src="https://maps.google.com/maps?q=Shop%20No.%203%2C%20Vardhman%20Market%2C%20Sector%2017%2C%20Vashi%2C%20Navi%20Mumbai&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter brightness-90 contrast-110"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-xs text-white font-semibold">
              📍 Vashi Sector 17 Hub
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 12. FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#090C12] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            badge="Got Questions?"
            title="Everything You Need To Know Before Customizing"
            subtitle="Transparent answers regarding wiring safety, outstation logistics, warranty, and lead times."
          />

          <div className="space-y-4">
            {faqData.slice(0, 5).map((faq) => (
              <div 
                key={faq.id}
                className="card-luxury p-6 rounded-2xl border border-white/10 space-y-2"
              >
                <h3 className="text-base font-bold text-white flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-2" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/faq"
              className="text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider inline-flex items-center gap-1.5"
            >
              <span>View Complete Knowledge Base & FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* VIDEO MODAL COMPONENT */}
      {/* ========================================================= */}
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />

    </div>
  );
};
