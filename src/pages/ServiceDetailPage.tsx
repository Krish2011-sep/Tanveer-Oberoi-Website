import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Phone, 
  MessageCircle, 
  ChevronRight, 
  Car, 
  HelpCircle,
  FileCheck
} from 'lucide-react';

import { servicesData } from '../data/servicesData';
import { SectionHeader } from '../components/SectionHeader';

export const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const service = servicesData.find(
    (s) => s.slug === serviceId || s.id === serviceId
  );

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = servicesData.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#07090D] text-slate-100">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-[#0B0F15] border-b border-white/5 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/services" className="hover:text-white transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-amber-400 font-semibold">{service.title}</span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.heroImage} 
            alt={service.title}
            className="w-full h-full object-cover filter brightness-[0.28] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-[#07090D]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{service.category} DIVISION • VIG AUTO ACCESSORIES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            {service.tagline}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-2xl">
            <div className="p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Starting Investment</span>
              <div className="text-xl font-bold text-amber-400 font-mono-tech mt-1">
                {service.priceStartingFrom}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Typical Turnaround</span>
              <div className="text-xl font-bold text-white font-mono-tech mt-1 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>{service.timeRequired}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Warranty Coverage</span>
              <div className="text-xl font-bold text-emerald-400 font-mono-tech mt-1 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Certified</span>
              </div>
            </div>
          </div>

          {/* Direct CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={`https://wa.me/919820803155?text=Hi%20Tanveer%20bhai%2C%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}%20for%20my%20car.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-emerald-500/20 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Enquire On WhatsApp</span>
            </a>

            <Link
              to="/calculator"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider transition-all"
            >
              <span>Add to Customization Planner</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:+919820803155"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/15"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call: +91 9820803155</span>
            </a>
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Deep Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Engineering Overview & Craftsmanship Philosophy
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              {service.fullDescription}
            </p>

            {/* Highlights Grid */}
            <div className="pt-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4">
                Signature Distinctives
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.highlights.map((highlight, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200 leading-snug">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Feature Capabilities */}
            <div className="pt-6 space-y-4">
              <h3 className="text-xl font-bold text-white">
                Key Engineering Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                    <h4 className="text-sm font-bold text-amber-400">{feat.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{feat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Specs & Compatibility */}
          <div className="space-y-6">
            <div className="card-luxury p-6 rounded-3xl border border-white/10 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <Car className="w-4 h-4" />
                <span>Compatible Vehicles</span>
              </h3>
              <div className="space-y-2 text-xs text-slate-300">
                {service.compatibleCars.map((car, idx) => (
                  <div key={idx} className="flex items-center gap-2 py-1 border-b border-white/5 last:border-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>{car}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-luxury p-6 rounded-3xl border border-white/10 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <FileCheck className="w-4 h-4" />
                <span>Materials & Technology</span>
              </h3>
              <div className="space-y-2 text-xs text-slate-300">
                {service.materialsAndTech.map((mat, idx) => (
                  <div key={idx} className="flex items-center gap-2 py-1 border-b border-white/5 last:border-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{mat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-luxury p-6 rounded-3xl border border-white/10 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Warranty & Guarantee
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {service.warrantyInfo}
              </p>
              <div className="text-[11px] text-emerald-400 flex items-center gap-1.5 pt-1">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Plug-and-Play Coupler Fitment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Execution Workflow (Brotomotiv-benchmark depth) */}
        <div className="pt-8 border-t border-white/10">
          <SectionHeader 
            badge="The 4-Stage Workflow"
            title="How We Execute This Customization"
            subtitle="Obsessive attention to detail at each stage ensures factory fitment and zero compromises."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div 
                key={step.step}
                className="card-luxury p-6 rounded-3xl border border-white/10 relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono-tech font-bold text-sm flex items-center justify-center mb-4">
                    0{step.step}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Addons */}
        <div className="card-luxury p-8 rounded-3xl border border-white/10">
          <h3 className="text-lg font-bold text-white mb-4">
            Popular Add-On Customizations Frequently Paired With This Service
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {service.popularAddons.map((addon, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{addon}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Service Specific FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="space-y-6 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white">
              Frequently Asked Questions About {service.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="card-luxury p-6 rounded-2xl border border-white/10 space-y-2">
                  <h4 className="text-sm font-bold text-white flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span>{faq.question}</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed pl-3.5">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Navigation to other services */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">
              Explore Other Specialized Divisions
            </h3>
            <Link to="/services" className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1">
              <span>View All Services</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherServices.map((other) => (
              <Link
                key={other.id}
                to={`/services/${other.slug}`}
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-500/40 hover:bg-white/[0.06] transition-all group flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">
                    {other.title}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    From {other.priceStartingFrom}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
