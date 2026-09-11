import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  Youtube, 
  Instagram, 
  ShieldCheck, 
  ArrowUpRight,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05070A] border-t border-white/10 text-slate-400 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Feature Banner */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 mb-12 border-b border-white/10">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">100% Coupler-to-Coupler</h4>
              <p className="text-xs text-slate-400 mt-0.5">Zero wire slicing. Protects factory car electricals & warranty.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <span className="font-mono font-black text-amber-400 text-sm">200K</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">200K+ YouTube Family</h4>
              <p className="text-xs text-slate-400 mt-0.5">India’s most trusted automotive modification channel.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <span className="font-mono font-black text-amber-400 text-sm">12K+</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">12,000+ Completed Builds</h4>
              <p className="text-xs text-slate-400 mt-0.5">Over a decade of master automotive engineering in Vashi.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Nationwide Clientele</h4>
              <p className="text-xs text-slate-400 mt-0.5">Owners travel from Gujarat, Pune, Goa, Hyderabad & across India.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 via-zinc-900 to-black border border-amber-500/40 flex items-center justify-center p-2">
                <span className="font-black text-amber-400 text-base tracking-tighter">VIG</span>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">
                  VIG <span className="text-amber-400 font-light">AUTO ACCESSORIES</span>
                </span>
                <p className="text-[10px] tracking-widest uppercase text-slate-400 font-semibold">
                  FOUNDED & DIRECTED BY TANVEER OBEROI
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400 pr-4">
              VIG Auto Accessories is India’s premier destination for bespoke luxury automotive styling, first-class VIP recliner lounge seats, precision Bi-LED laser optics, concert-hall DSP acoustics, and OEM+ feature retrofits. Every build is executed with obsessive precision, zero wire tampering, and genuine automotive craftsmanship.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.youtube.com/channel/UCO6ZCUQ0t0FYFmdCX1_WyPw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500 hover:bg-red-600 hover:text-white transition-all"
                title="VIG Auto Accessories on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/919820803155?text=Hi%20Tanveer%20bhai%2C%20I%20want%20to%20customize%20my%20car." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all"
                title="Direct WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a 
                href="https://maps.google.com/?q=Vig+Auto+accessories+Vashi+Navi+Mumbai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 hover:bg-amber-500 hover:text-black transition-all"
                title="Google Maps Location"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Custom Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/services/luxury-interiors" className="hover:text-amber-400 transition-colors">
                  Luxury Nappa Interiors
                </Link>
              </li>
              <li>
                <Link to="/services/recliner-seats" className="hover:text-amber-400 transition-colors">
                  VIP Recliner Lounge Seats
                </Link>
              </li>
              <li>
                <Link to="/services/lighting-upgrades" className="hover:text-amber-400 transition-colors">
                  Bi-LED & Laser Projectors
                </Link>
              </li>
              <li>
                <Link to="/services/sound-entertainment" className="hover:text-amber-400 transition-colors">
                  Hi-End Audio & DSP Tuning
                </Link>
              </li>
              <li>
                <Link to="/services/exterior-styling" className="hover:text-amber-400 transition-colors">
                  Exterior Kits & Alloys
                </Link>
              </li>
              <li>
                <Link to="/services/oem-upgrades" className="hover:text-amber-400 transition-colors">
                  OEM+ Feature Retrofits
                </Link>
              </li>
              <li>
                <Link to="/services/soundproofing-damping" className="hover:text-amber-400 transition-colors">
                  Acoustic Damping & NVH
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Car Models */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Signature Builds
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/projects" className="hover:text-amber-400 transition-colors">
                  Hyundai Creta (Base to Knight)
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-amber-400 transition-colors">
                  Mahindra Scorpio-N (Stealth)
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-amber-400 transition-colors">
                  Mahindra Thar & Thar Roxx
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-amber-400 transition-colors">
                  Toyota Innova Hycross VIP
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-amber-400 transition-colors">
                  Maruti Grand Vitara Obsidian
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-amber-400 transition-colors">
                  Mahindra XUV700 Apex
                </Link>
              </li>
              <li>
                <Link to="/before-after" className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 mt-2">
                  <span>View All Before & After</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Flagship Studio & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Studio Location
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-slate-300 leading-relaxed">
                  Shop No. 3, Vardhman Market, Plot No. 75, Sector 17, Vashi, Navi Mumbai, Maharashtra 400703
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919820803155" className="text-slate-200 hover:text-amber-400 font-medium">
                    +91 9820803155
                  </a>
                  <a href="tel:+917977493577" className="text-slate-400 hover:text-amber-400">
                    +91 7977493577
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-slate-300">Open Everyday: 10:30 AM – 8:30 PM</span>
              </div>

              <div className="pt-2">
                <a 
                  href="https://maps.google.com/?q=Vig+Auto+accessories+Vashi+Navi+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} VIG Auto Accessories & Tanveer Oberoi. All rights reserved. Vashi, Navi Mumbai.
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/faq" className="hover:text-slate-300 transition-colors">FAQs & Warranty Policy</Link>
            <Link to="/about" className="hover:text-slate-300 transition-colors">Philosophy & Team</Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Studio Directions</Link>
            <Link to="/calculator" className="text-amber-400 hover:text-amber-300">Quote Engine</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
