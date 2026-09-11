import React, { useState } from 'react';
import { 
  MapPin, Phone, Clock, Send, MessageCircle, Navigation, Train, Plane,
  CheckCircle2, Calendar, ExternalLink, ShieldCheck, Sparkles
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';

export const WorkshopContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: 'Hyundai Creta',
    variant: 'Base Model',
    city: '',
    servicesInterested: 'Luxury Leather Interior & Ambient Lighting',
    preferredDate: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const generateWhatsAppInquiry = () => {
    const text = `*STUDIO VISIT & APPOINTMENT REQUEST*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name || 'Automobile Owner')}%0A` +
      `*Mobile:* ${encodeURIComponent(formData.phone || 'N/A')}%0A` +
      `*Car Model:* ${encodeURIComponent(`${formData.carModel} (${formData.variant})`)}%0A` +
      `*City / Location:* ${encodeURIComponent(formData.city || 'Outstation Client')}%0A` +
      `*Services:* ${encodeURIComponent(formData.servicesInterested)}%0A` +
      `*Preferred Visit Date:* ${encodeURIComponent(formData.preferredDate || 'Earliest Available Bay')}%0A` +
      `*Special Notes:* ${encodeURIComponent(formData.notes || 'None')}%0A%0A` +
      `_I would like to confirm my studio slot with Tanveer Oberoi at Vashi Sector 17._`;
    return `https://wa.me/919820803155?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.open(generateWhatsAppInquiry(), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#07090D] text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeader 
          badge="Flagship Automotive Studio"
          title="Visit Our Vashi Studio or Connect With Tanveer"
          subtitle="Located in the premier automobile hub of Sector 17, Vashi, Navi Mumbai. Dedicated fitment bays, dark laser optical calibration room, and custom leather stitching atelier."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="card-luxury p-8 rounded-3xl border border-white/10 space-y-6 lg:col-span-1">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Flagship Studio</span>
              <h3 className="text-2xl font-bold text-white mt-1">VIG Auto Accessories</h3>
              <p className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">Directed by Tanveer Oberoi</p>
            </div>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Address:</strong>
                  Shop No. 3, Vardhman Market, Plot No. 75, Sector 17, Vashi, Navi Mumbai, Maharashtra 400703
                  <span className="text-slate-400 block mt-1">(Opposite Vardhman Plaza / near Sector 17 automobile market)</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-white/5">
                <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Direct Hotline:</strong>
                  <a href="tel:+919820803155" className="text-amber-400 font-bold block text-sm hover:underline">+91 9820803155</a>
                  <a href="tel:+917977493577" className="text-slate-300 hover:text-amber-400 block text-xs">+91 7977493577</a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-white/5">
                <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Operating Hours:</strong>
                  <span className="text-emerald-400 font-semibold block">Mon – Sun: 10:30 AM – 8:30 PM</span>
                  <span className="text-slate-400 text-[11px]">Open all 7 days of the week</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 space-y-2">
              <a href="https://maps.google.com/?q=Vig+Auto+accessories+Vashi+Navi+Mumbai" target="_blank" rel="noopener noreferrer" className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors">
                <Navigation className="w-4 h-4" /><span>Get Directions On Google Maps</span>
              </a>
              <a href="https://wa.me/919820803155?text=Hi%20Tanveer%20bhai%2C%20I%20want%20to%20visit%20the%20workshop%20today." target="_blank" rel="noopener noreferrer" className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors">
                <MessageCircle className="w-4 h-4 fill-current" /><span>Chat On WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="card-luxury p-8 rounded-3xl border border-white/10 lg:col-span-2">
            <div className="border-b border-white/10 pb-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Reserve Your Workshop Bay</span>
              <h3 className="text-2xl font-bold text-white mt-1">Book A Consultation Or Service Appointment</h3>
              <p className="text-xs text-slate-400 mt-1">Fill in your car details and send the appointment request directly to WhatsApp.</p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Your Full Name</label>
                    <input type="text" required placeholder="e.g. Rahul Sharma" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-[#121620] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">WhatsApp Mobile Number</label>
                    <input type="tel" required minLength={10} placeholder="+91 98765 43210" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-[#121620] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Car Model</label>
                    <select value={formData.carModel} onChange={(e) => setFormData({ ...formData, carModel: e.target.value })} className="w-full bg-[#121620] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400">
                      {['Hyundai Creta','Mahindra Scorpio-N','Mahindra Thar / Thar Roxx','Toyota Innova Hycross / Crysta','Maruti Grand Vitara','Mahindra XUV700','Kia Seltos / Carens','Toyota Fortuner / Legender','Tata Safari / Harrier','Other'].map((item) => <option key={item}>{item}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Current Variant</label>
                    <select value={formData.variant} onChange={(e) => setFormData({ ...formData, variant: e.target.value })} className="w-full bg-[#121620] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400">
                      {['Base Model','Mid Variant','Top Spec','Not Sure'].map((item) => <option key={item}>{item}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">City / Location</label>
                    <input type="text" placeholder="e.g. Pune" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="w-full bg-[#121620] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Preferred Visit Date</label>
                    <input type="date" value={formData.preferredDate} onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })} className="w-full bg-[#121620] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Services Interested In</label>
                  <select value={formData.servicesInterested} onChange={(e) => setFormData({ ...formData, servicesInterested: e.target.value })} className="w-full bg-[#121620] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400">
                    {['Luxury Leather Interior & Ambient Lighting','VIP Recliner / Lounge Seats','Bi-LED / Lighting Upgrade','Audio / DSP & Soundproofing','Exterior Styling / Aero','OEM+ Feature Retrofit','Full Custom Build'].map((item) => <option key={item}>{item}</option>)}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Special Notes</label>
                  <textarea rows={4} placeholder="Tell us what you want to build..." value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} className="w-full bg-[#121620] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 resize-none" />
                </div>

                <button type="submit" className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl shadow-amber-500/20">
                  <Send className="w-4 h-4" /><span>Send Appointment Request On WhatsApp</span>
                </button>
                <p className="text-[11px] text-slate-500 text-center">Your details are placed into a WhatsApp message; this demo site does not store form submissions on a server.</p>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto"><CheckCircle2 className="w-8 h-8" /></div>
                <h4 className="text-2xl font-bold text-white">WhatsApp request prepared</h4>
                <p className="text-sm text-slate-400 max-w-md mx-auto">Your appointment details were opened in WhatsApp. Send the message there to complete the enquiry.</p>
                <a href={generateWhatsAppInquiry()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider"><MessageCircle className="w-4 h-4" />Open WhatsApp Again</a>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-luxury p-7 rounded-3xl border border-white/10">
            <div className="flex items-center gap-3 mb-3"><Train className="w-5 h-5 text-amber-400" /><h3 className="text-lg font-bold text-white">By Train</h3></div>
            <p className="text-xs text-slate-400 leading-relaxed">Vashi Railway Station is the nearest major rail connection. From the station, use a local cab/auto to reach Sector 17.</p>
          </div>
          <div className="card-luxury p-7 rounded-3xl border border-white/10">
            <div className="flex items-center gap-3 mb-3"><Plane className="w-5 h-5 text-amber-400" /><h3 className="text-lg font-bold text-white">From Mumbai Airport</h3></div>
            <p className="text-xs text-slate-400 leading-relaxed">Allow extra travel time for Navi Mumbai traffic and confirm the workshop slot before travelling from another city.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
