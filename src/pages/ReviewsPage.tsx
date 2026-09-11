import React from 'react';
import { Star, MapPin, CheckCircle2, MessageCircle, ArrowRight, ThumbsUp, ShieldCheck } from 'lucide-react';
import { reviewsData } from '../data/reviewsData';
import { SectionHeader } from '../components/SectionHeader';

export const ReviewsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#07090D] text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <SectionHeader 
          badge="Verified Client Testimonials"
          title="The Nationwide Wall of Trust"
          subtitle="Owners drive hundreds of kilometers to entrust their brand-new automobiles to Tanveer Oberoi in Sector 17, Vashi. Here is what they have to say about the experience."
        />

        {/* Rating Summary Bar */}
        <div className="card-luxury p-8 rounded-3xl border border-white/10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center items-center">
          <div className="space-y-1">
            <div className="text-4xl sm:text-5xl font-black text-amber-400 font-mono-tech">4.9 / 5</div>
            <div className="flex justify-center text-amber-400 gap-1 pt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-xs text-slate-400">Based on 1,200+ Verified Client Builds</div>
          </div>

          <div className="border-y md:border-y-0 md:border-x border-white/10 py-4 md:py-0 space-y-1">
            <div className="text-3xl font-bold text-white font-mono-tech">60%+</div>
            <div className="text-xs font-semibold text-amber-400">Outstation Clientele</div>
            <p className="text-[11px] text-slate-400">Clients regularly drive from Gujarat, Pune, Goa, Hyderabad & MP.</p>
          </div>

          <div className="space-y-1">
            <div className="text-3xl font-bold text-emerald-400 font-mono-tech">100%</div>
            <div className="text-xs font-semibold text-emerald-400">Coupler Warranty Guarantee</div>
            <p className="text-[11px] text-slate-400">Zero insurance claims rejected, zero factory harnesses damaged.</p>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.map((rev) => (
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

                <h3 className="text-base font-bold text-white">
                  "{rev.reviewTitle}"
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center border border-amber-500/30">
                      {rev.avatarInitials}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{rev.clientName}</div>
                      <div className="text-[10px] text-amber-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{rev.originCity}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">
                    {rev.carModel}
                  </span>
                </div>

                <div className="text-[11px] text-emerald-400 flex items-center gap-1 pt-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Build: {rev.verifiedBuild}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Handover Photo Featurette */}
        <div className="card-luxury p-8 rounded-3xl border border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400">
              <ThumbsUp className="w-3.5 h-3.5" />
              <span>Red-Carpet Handover</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Every Vehicle Delivery Is A Celebration
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We know how much your vehicle means to you. That’s why Tanveer Oberoi personally conducts the final delivery walkthrough, demonstrating every ambient light mode, tuning your DSP preset to your favorite song, and inspecting every millimeter of leather seam.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/919820803155?text=Hi%20Tanveer%20bhai%2C%20I%20would%20like%20to%20discuss%20modifying%20my%20vehicle%20at%20VIG%20Auto."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider"
              >
                <span>Book Your Build With Tanveer</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 h-72 sm:h-80 bg-black">
            <img 
              src="/images/customer-handover.jpg" 
              alt="Delighted Customer Handover" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};
