import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Sliders, MapPin } from 'lucide-react';

export const FloatingQuickBar: React.FC = () => {
  return (
    <>
      {/* Desktop floating WhatsApp button */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-3">
        <a
          href="https://wa.me/919820803155?text=Hi%20Tanveer%20bhai%2C%20I%20want%20to%20customize%20my%20car%20at%20VIG%20Auto%20Accessories%20Vashi."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm shadow-2xl hover:bg-[#20bd5a] hover:scale-105 transition-all group"
          aria-label="Direct WhatsApp Chat with Tanveer Oberoi"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="group-hover:inline">Chat with Tanveer</span>
        </a>
      </div>

      {/* Mobile persistent bottom CTA navigation bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090C12]/95 backdrop-blur-lg border-t border-white/10 px-3 py-2.5 shadow-2xl">
        <div className="grid grid-cols-4 gap-2">
          <a
            href="tel:+919820803155"
            className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/5 border border-white/10 text-white active:bg-white/10 transition-colors"
          >
            <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
            <span className="text-[10px] font-semibold">Call Now</span>
          </a>

          <a
            href="https://wa.me/919820803155?text=Hi%20Tanveer%20bhai%2C%20I%20want%20to%20customize%20my%20car%20at%20VIG%20Auto%20Accessories."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-2 rounded-xl bg-emerald-600/90 text-white active:bg-emerald-500 transition-colors"
          >
            <MessageCircle className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] font-semibold">WhatsApp</span>
          </a>

          <Link
            to="/calculator"
            className="flex flex-col items-center justify-center p-2 rounded-xl bg-amber-500 text-black active:bg-amber-400 transition-colors"
          >
            <Sliders className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] font-bold">Get Quote</span>
          </Link>

          <a
            href="https://maps.google.com/?q=Vig+Auto+accessories+Vashi+Navi+Mumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 active:bg-white/10 transition-colors"
          >
            <MapPin className="w-4 h-4 text-amber-400 mb-0.5" />
            <span className="text-[10px] font-semibold">Studio Map</span>
          </a>
        </div>
      </div>
    </>
  );
};
