import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Clock, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Wrench, 
  MapPin, 
  Phone, 
  MessageCircle,
  Car
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#07090D] text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Page Header */}
        <SectionHeader 
          badge="The Vision Behind The Craft"
          title="About Tanveer Oberoi & VIG Auto Accessories"
          subtitle="Redefining India’s automotive customization landscape from Sector 17, Vashi, Navi Mumbai through unyielding standards of craftsmanship, genuine parts, and zero-compromise electrical engineering."
        />

        {/* Hero Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Journey From Passion to National Benchmark</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              "We Don’t Just Modify Cars. We Engineer Experiences."
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Founded by <strong>Tanveer Oberoi</strong>, VIG Auto Accessories started with a single focused ambition: to challenge the prevailing Indian car accessories culture of cheap imitation parts, sloppy wiring, and generic seat covers.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              Tanveer observed that car buyers were forced to choose between paying exorbitant dealership markups for top-tier features or entrusting their brand-new cars to uncertified local shops that butchered factory wiring harnesses with insulation tape. He pioneered the <strong>"Coupler-to-Coupler" philosophy</strong>—proving that high-end luxury interiors, concert-grade audio, and OEM top-spec features could be integrated seamlessly without voiding warranties or compromising safety.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div>
                <div className="text-2xl font-black text-amber-400 font-mono-tech">15+ Years</div>
                <div className="text-xs text-slate-400 mt-0.5">Automotive Experience</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white font-mono-tech">200K+</div>
                <div className="text-xs text-slate-400 mt-0.5">YouTube Enthusiasts</div>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl group">
            <img 
              src="/images/craftsman-working.jpg" 
              alt="Craftsmanship in VIG Auto Studio"
              className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10">
              <div className="text-white font-bold text-sm">
                Master Craftsmen at Vashi Studio Bay
              </div>
              <div className="text-slate-400 text-xs mt-1">
                Every vehicle is inspected and supervised personally by Tanveer Oberoi.
              </div>
            </div>
          </div>
        </div>

        {/* The 4 Core Credos of VIG */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              The 4 Uncompromising Principles of VIG
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Every build that enters our Sector 17 studio is governed by strict technical guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-luxury p-6 rounded-3xl border border-white/10 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white">Zero Wire Slicing</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We design and manufacture vehicle-specific male-female T-harnesses with automotive latching pins. Factory warranty stays 100% compliant.
              </p>
            </div>

            <div className="card-luxury p-6 rounded-3xl border border-white/10 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white">Master Saddler Tailoring</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                German Nappa leather cut to CNC precision, paired with anatomical contour memory foam and certified airbag break-away seams.
              </p>
            </div>

            <div className="card-luxury p-6 rounded-3xl border border-white/10 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Wrench className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white">Genuine OEM Sourcing</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Factory Mobis, Mahindra, and Toyota genuine parts sourced directly through authorized OEM channels for flawless fit and finish.
              </p>
            </div>

            <div className="card-luxury p-6 rounded-3xl border border-white/10 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white">Outstation Hospitality</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dedicated concierge services for clients traveling from across India: bay pre-booking, express 2-day delivery, and local stay support.
              </p>
            </div>
          </div>
        </div>

        {/* The Client Journey (Brotomotiv-level information depth) */}
        <div className="card-luxury p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              The VIG Experience
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              The 5-Step Customer Journey
            </h3>
            <p className="text-xs text-slate-400">
              How we take your vision from initial WhatsApp consultation to red-carpet vehicle handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="text-amber-400 font-mono-tech text-xs font-bold">STAGE 01</div>
              <h4 className="text-sm font-bold text-white">Consultation & Build Sheet</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We review your car model, current trim, and aspirations via phone or WhatsApp, creating a fixed-price itemized build sheet.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="text-amber-400 font-mono-tech text-xs font-bold">STAGE 02</div>
              <h4 className="text-sm font-bold text-white">Pre-Arrival Kit Assembly</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Before your car rolls into Vashi, your custom leather colors, genuine OEM harnesses, and optical modules are pre-assembled.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="text-amber-400 font-mono-tech text-xs font-bold">STAGE 03</div>
              <h4 className="text-sm font-bold text-white">Surgical Execution</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dedicated teams of upholsterers, audio acoustic techs, and electrical specialists work simultaneously on your vehicle.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="text-amber-400 font-mono-tech text-xs font-bold">STAGE 04</div>
              <h4 className="text-sm font-bold text-white">20-Point Quality Audit</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                OBD scan, laser beam wall alignment, decibel sound check, and steam forming are completed to verify zero defects.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="text-amber-400 font-mono-tech text-xs font-bold">STAGE 05</div>
              <h4 className="text-sm font-bold text-white">Delivery & Walkaround</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Red-carpet handover with Tanveer Oberoi, complete walkthrough of all features, warranty cards, and video documentation.
              </p>
            </div>
          </div>
        </div>

        {/* Direct Location & CTA */}
        <div className="card-luxury p-8 rounded-3xl border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Ready To Consult With Tanveer Oberoi?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Visit our Sector 17 studio in Vashi or get a direct recommendation for your car model.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/919820803155?text=Hi%20Tanveer%20bhai%2C%20I%20read%20about%20VIG%20Auto%20on%20your%20website%20and%20would%20like%20to%20discuss%20customizing%20my%20car."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Connect On WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider border border-white/10"
            >
              Studio Directions
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
