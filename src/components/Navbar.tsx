import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Youtube, 
  Menu, 
  X, 
  ChevronDown, 
  Sliders, 
  Sparkles, 
  Layers, 
  Volume2, 
  Sun, 
  Armchair, 
  Wrench, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const serviceCategories = [
    { name: 'Luxury Bespoke Interiors', path: '/services/luxury-interiors', icon: Sparkles, desc: 'Nappa leather & contour sculpting' },
    { name: 'VIP Recliner Lounge Seats', path: '/services/recliner-seats', icon: Armchair, desc: 'Powered ottomans & massage' },
    { name: 'Bi-LED & Laser Lighting', path: '/services/lighting-upgrades', icon: Sun, desc: 'Projectors & Symphony ambient' },
    { name: 'Hi-End Audio & DSP Tuning', path: '/services/sound-entertainment', icon: Volume2, desc: 'Morel, Audison & soundstage' },
    { name: 'Exterior Styling & Aero Kits', path: '/services/exterior-styling', icon: Layers, desc: 'De-chroming, grilles & alloys' },
    { name: 'OEM+ Feature Retrofits', path: '/services/oem-upgrades', icon: Wrench, desc: 'Cruise, 360 cam & steering' },
    { name: 'Acoustic Soundproofing', path: '/services/soundproofing-damping', icon: ShieldCheck, desc: '3-layer butyl & NVH reduction' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-[#0A0D14] border-b border-white/5 text-xs text-slate-300 py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-1.5 text-amber-400 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Shop No. 3, Vardhman Market, Sector 17, Vashi, Navi Mumbai</span>
            </div>
            <div className="flex items-center gap-1 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Workshop Open Mon-Sun: 10:30 AM - 8:30 PM</span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href="https://www.youtube.com/channel/UCO6ZCUQ0t0FYFmdCX1_WyPw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-red-400 transition-colors"
            >
              <Youtube className="w-3.5 h-3.5 text-red-500" />
              <span className="font-semibold text-slate-200">200K+ YouTube Family</span>
            </a>
            <div className="h-3 w-px bg-white/10" />
            <a href="tel:+919820803155" className="flex items-center gap-1 text-slate-200 hover:text-amber-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>+91 9820803155</span>
            </a>
            <a href="tel:+917977493577" className="text-slate-400 hover:text-amber-400 transition-colors">
              +91 7977493577
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`w-full transition-all duration-300 ${isScrolled ? 'bg-[#07090D]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl' : 'bg-[#07090D]/80 backdrop-blur-sm border-b border-white/5 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Identity / Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500/20 via-zinc-900 to-black border border-amber-500/40 flex items-center justify-center p-2 shadow-lg group-hover:border-amber-400 transition-all">
              <span className="font-black text-amber-400 text-lg tracking-tighter">VIG</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  VIG <span className="text-amber-400 font-light">AUTO</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  STUDIO
                </span>
              </div>
              <span className="text-[10px] tracking-widest uppercase text-slate-400 font-medium">
                TANVEER OBEROI • VASHI NAVI MUMBAI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-amber-400 bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link 
                to="/services" 
                className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors ${location.pathname.startsWith('/services') ? 'text-amber-400 bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-amber-400' : ''}`} />
              </Link>

              {/* Mega Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-[#0E131B] border border-amber-500/20 rounded-2xl shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 px-3 py-1.5 border-b border-white/5 mb-1">
                    Signature Customizations
                  </div>
                  <div className="space-y-1">
                    {serviceCategories.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all group/item"
                        >
                          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover/item:bg-amber-500 group-hover/item:text-black transition-colors shrink-0 mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white group-hover/item:text-amber-400 transition-colors">
                              {item.name}
                            </div>
                            <div className="text-[11px] text-slate-400">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-2 pt-2 border-t border-white/5 px-2">
                    <Link 
                      to="/services" 
                      className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center justify-between p-1.5"
                    >
                      <span>Explore Complete Services Catalog</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/projects" 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === '/projects' ? 'text-amber-400 bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
            >
              Builds Portfolio
            </Link>

            <Link 
              to="/before-after" 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === '/before-after' ? 'text-amber-400 bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
            >
              Before & After
            </Link>

            <Link 
              to="/videos" 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === '/videos' ? 'text-amber-400 bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
            >
              YouTube
            </Link>

            <Link 
              to="/reviews" 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === '/reviews' ? 'text-amber-400 bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
            >
              Reviews
            </Link>

            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === '/about' ? 'text-amber-400 bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
            >
              About Tanveer
            </Link>

            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === '/contact' ? 'text-amber-400 bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
            >
              Workshop
            </Link>
          </div>

          {/* Quick CTA Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://wa.me/919820803155?text=Hi%20Tanveer%20bhai%2C%20I%20visited%20the%20VIG%20Auto%20Accessories%20website%20and%20want%20to%20discuss%20customizing%20my%20car."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all"
              title="Chat directly on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <Link
              to="/calculator"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Get a Quote</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/calculator"
              className="px-3 py-1.5 rounded-lg text-xs font-bold uppercase bg-amber-500 text-black"
            >
              Quote
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A0D14] border-b border-white/10 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-2 gap-2 text-sm font-medium">
              <Link 
                to="/" 
                className={`p-2.5 rounded-lg ${location.pathname === '/' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-white/5 text-slate-200'}`}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`p-2.5 rounded-lg ${location.pathname.startsWith('/services') ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-white/5 text-slate-200'}`}
              >
                All Services
              </Link>
              <Link 
                to="/projects" 
                className={`p-2.5 rounded-lg ${location.pathname === '/projects' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-white/5 text-slate-200'}`}
              >
                Builds Portfolio
              </Link>
              <Link 
                to="/before-after" 
                className={`p-2.5 rounded-lg ${location.pathname === '/before-after' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-white/5 text-slate-200'}`}
              >
                Before & After
              </Link>
              <Link 
                to="/videos" 
                className={`p-2.5 rounded-lg ${location.pathname === '/videos' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-white/5 text-slate-200'}`}
              >
                YouTube (200K+)
              </Link>
              <Link 
                to="/reviews" 
                className={`p-2.5 rounded-lg ${location.pathname === '/reviews' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-white/5 text-slate-200'}`}
              >
                Client Reviews
              </Link>
              <Link 
                to="/about" 
                className={`p-2.5 rounded-lg ${location.pathname === '/about' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-white/5 text-slate-200'}`}
              >
                About Tanveer
              </Link>
              <Link 
                to="/contact" 
                className={`p-2.5 rounded-lg ${location.pathname === '/contact' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-white/5 text-slate-200'}`}
              >
                Studio & Map
              </Link>
            </div>

            {/* Quick Service Category Links */}
            <div className="pt-2 border-t border-white/5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-2">
                Core Specialities
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-300">
                <Link to="/services/luxury-interiors" className="py-1 hover:text-amber-400">• Luxury Interiors</Link>
                <Link to="/services/recliner-seats" className="py-1 hover:text-amber-400">• VIP Recliner Seats</Link>
                <Link to="/services/lighting-upgrades" className="py-1 hover:text-amber-400">• Laser & Bi-LED Lighting</Link>
                <Link to="/services/sound-entertainment" className="py-1 hover:text-amber-400">• High-End Audio & DSP</Link>
                <Link to="/services/oem-upgrades" className="py-1 hover:text-amber-400">• OEM+ Feature Upgrades</Link>
                <Link to="/services/soundproofing-damping" className="py-1 hover:text-amber-400">• Acoustic Damping</Link>
              </div>
            </div>

            {/* Direct Contact Bar in Mobile Drawer */}
            <div className="pt-3 border-t border-white/5 space-y-2">
              <a 
                href="tel:+919820803155" 
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-xs"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Tanveer: +91 9820803155</span>
              </a>
              <a 
                href="https://wa.me/919820803155?text=Hi%20Tanveer%20bhai%2C%20I%20want%20to%20customize%20my%20car."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <Link 
                to="/calculator" 
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-amber-500 text-black font-bold text-xs uppercase tracking-wider"
              >
                <Sliders className="w-4 h-4" />
                <span>Customization Planner & Quote</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
