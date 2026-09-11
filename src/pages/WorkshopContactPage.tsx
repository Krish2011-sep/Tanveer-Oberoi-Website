import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  Send, 
  MessageCircle, 
  Navigation, 
  Train, 
  Plane, 
  CheckCircle2, 
  Calendar,
  ExternalLink,
  ShieldCheck,
  Sparkles
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppInquiry = () => {
    const text = `*STUDIO VISIT & APPOINTMENT REQUEST*%0A%0A` +
      `*Name:* ${formData.name || 'Automobile Owner'}%0A` +
      `*Mobile:* ${formData.phone || 'N/A'}%0A` +
      `*Car Model:* ${formData.carModel} (${formData.variant})%0A` +
      `*City / Location:* ${formData.city || 'Outstation Client'}%0A` +
      `*Services:* ${formData.servicesInterested}%0A` +
      `*Preferred Visit Date:* ${formData.preferredDate || 'Earliest Available Bay'}%0A` +
      `*Special Notes:* ${formData.notes || 'None'}%0A%0A` +
      `_I would like to confirm my studio slot with Tanveer Oberoi at Vashi Sector 17._`;
    return `https://wa.me/919820803155?text=${text}`;
  };

  return (
    <div className="min-h-screen bg-[#07090D] text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Page Header */}
        <SectionHeader 
          badge="Flagship Automotive Studio"
          title="Visit Our Vashi Studio or Connect With Tanveer"
          subtitle="Located in the premier automobile hub of Sector 17, Vashi, Navi Mumbai. Dedicated fitment bays, dark laser optical calibration room, and custom leather stitching atelier."
        />

        {/* Studio Info & Quick Action Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Location & Contact Info */}
          <div className="card-luxury p-8 rounded-3xl border border-white/10 space-y-6 lg:col-span-1">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Flagship Studio
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                VIG Auto Accessories
              </h3>
              <p className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">
                Directed by Tanveer Oberoi
              </p>
            </div>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Address:</strong>
                  Shop No. 3, Vardhman Market, Plot No. 75, Sector 17, Vashi, Navi Mumbai, Maharashtra 400703
                  <span className="text-slate-400 block mt-1">
                    (Opposite Vardhman Plaza / near Sector 17 automobile market)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-white/5">
                <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Direct Hotline:</strong>
                  <a href="tel:+919820803155" className="text-amber-400 font-bold block text-sm hover:underline">
                    +91 9820803155
                  </a>
                  <a href="tel:+917977493577" className="text-slate-300 hover:text-amber-400 block text-xs">
                    +91 7977493577
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-white/5">
                <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Operating Hours:</strong>
                  <span className="text-emerald-400 font-semibold block">
                    Mon – Sun: 10:30 AM – 8:30 PM
                  </span>
                  <span className="text-slate-400 text-[11px]">Open all 7 days of the week</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 space-y-2">
              <a
                href="https://maps.google.com/?q=Vig+Auto+accessories+Vashi+Navi+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions On Google Maps</span>
              </a>

              <a
                href="https://wa.me/919820803155?text=Hi%20Tanveer%20bhai%2C%20I%20want%20to%20visit%20the%20workshop%20today."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat On WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Booking / Consultation Form */}
          <div className="card-luxury p-8 rounded-3xl border border-white/10 lg:col-span-2">
            <div className="border-b border-white/10 pb-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Reserve Your Workshop Bay
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Book A Consultation Or Service Appointment
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Fill in your car details to reserve a bay or connect directly with our engineering team.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#121620] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">WhatsApp Mobile Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#121620] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Vehicle Make & Model</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Creta 2024 / Scorpio-N"
                      value={formData.carModel}
                      onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                      className="w-full bg-[#121620] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Current Variant</label>
                    <select
                      value={formData.variant}
                      onChange={(e) => setFormData({ ...formData, variant: e.target.value })}
                      className="w-full bg-[#121620] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Base Model">Base Model (E / EX / Sigma / Z2)</option>
                      <option value="Mid Variant">Mid Variant (S / SX / Delta / Z4)</option>
                      <option value="Top Variant">Top Variant (SX(O) / Alpha / Z8L)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Your City / State</label>
                    <input
                      type="text"
                      placeholder="e.g. Surat / Pune / Mumbai"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#121620] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Primary Services Desired</label>
                    <input
                      type="text"
                      placeholder="e.g. Nappa Seats, Recliners, Laser LEDs, Morel Audio"
                      value={formData.servicesInterested}
                      onChange={(e) => setFormData({ ...formData, servicesInterested: e.target.value })}
                      className="w-full bg-[#121620] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Preferred Visit Date</label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-[#121620] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Additional Notes or Special Requests</label>
                  <textarea
                    rows={2}
                    placeholder="Tell us about specific colors, deadlines, or outstation assistance needed..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#121620] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-amber-500/20"
                  >
                    Submit Booking Request
                  </button>

                  <a
                    href={generateWhatsAppInquiry()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Send Via WhatsApp Directly</span>
                  </a>
                </div>
              </form>
            ) : (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">
                  Appointment Request Received!
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you, {formData.name}. Tanveer Oberoi and the VIG Auto Accessories team have logged your request. We will reach out on WhatsApp (+91 {formData.phone}) within a few hours to confirm your studio slot.
                </p>
                <div className="pt-2">
                  <a
                    href={generateWhatsAppInquiry()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Instant Confirmation on WhatsApp</span>
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Travel Guide & Landmark Directions */}
        <div className="card-luxury p-8 rounded-3xl border border-white/10 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Travel Directions
            </span>
            <h3 className="text-2xl font-bold text-white">
              How To Reach Our Vashi Studio
            </h3>
            <p className="text-xs text-slate-400">
              Easy access for clients driving in from Mumbai, Pune, Gujarat, or arriving via public transit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Plane className="w-5 h-5" />
                <span>From Mumbai International Airport (BOM)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Approx 26 km (35-45 mins). Take the Santa Cruz-Chembur Link Road (SCLR) onto Eastern Express Highway, cross the Vashi Creek Bridge into Sector 17.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Navigation className="w-5 h-5" />
                <span>From Pune & Western Maharashtra</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Approx 115 km (90 mins). Drive via the Mumbai-Pune Expressway, take the exit toward Vashi/Sanpada, and follow signs to Sector 17 Market.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Train className="w-5 h-5" />
                <span>From Vashi Railway Station</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Just 1.8 km (5 minutes). Auto-rickshaws and cabs are readily available outside the station directly to Vardhman Market, Sector 17.
              </p>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Map */}
        <div className="rounded-3xl overflow-hidden border border-white/10 h-[450px] relative bg-zinc-900 shadow-2xl">
          <iframe
            title="VIG Auto Accessories Vashi Sector 17 Map"
            src="https://maps.google.com/maps?q=Shop%20No.%203%2C%20Vardhman%20Market%2C%20Sector%2017%2C%20Vashi%2C%20Navi%20Mumbai&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 filter brightness-90 contrast-110"
            loading="lazy"
          />
          <div className="absolute top-4 left-4 p-3 rounded-2xl bg-black/85 backdrop-blur-md border border-white/10 text-xs text-white">
            <div className="font-bold text-amber-400">VIG Auto Accessories Flagship Studio</div>
            <div className="text-[11px] text-slate-300 mt-0.5">Shop 3, Vardhman Market, Sector 17, Vashi</div>
          </div>
        </div>

      </div>
    </div>
  );
};
