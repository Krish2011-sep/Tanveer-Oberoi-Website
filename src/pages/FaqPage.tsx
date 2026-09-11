import React, { useState } from 'react';
import { Search, HelpCircle, MessageCircle, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { faqData } from '../data/faqData';
import { SectionHeader } from '../components/SectionHeader';

export const FaqPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const categories = ['All', 'Wiring & Safety', 'Outstation Clients', 'Booking & Turnaround', 'Materials & Warranty', 'Pricing'];

  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#07090D] text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <SectionHeader 
          badge="Knowledge Base & Policies"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our coupler-to-coupler wiring guarantee, outstation vehicle assistance, warranties, and turnaround times."
        />

        {/* Search & Category Filter */}
        <div className="card-luxury p-4 rounded-3xl border border-white/10 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. warranty, airbag, outstation, amplifier, wiring)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121620] border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          <div className="flex items-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${selectedCategory === cat ? 'bg-amber-500 text-black' : 'bg-white/5 text-slate-400 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="card-luxury rounded-2xl border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {faq.category}
                    </span>
                    <h3 className="text-base font-bold text-white pt-1">
                      {faq.question}
                    </h3>
                  </div>
                  <span className={`text-xl font-mono text-amber-400 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-white/5 text-xs sm:text-sm text-slate-300 leading-relaxed animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions? Banner */}
        <div className="card-luxury p-8 rounded-3xl border border-amber-500/30 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">
            Have A Specific Question About Your Car Not Listed Here?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Tanveer Oberoi and our senior engineering consultants are always available to review your car setup and answer technical queries.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/919820803155?text=Hi%20Tanveer%20bhai%2C%20I%20have%20a%20question%20regarding%20modifying%20my%20car."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Ask Tanveer On WhatsApp</span>
            </a>
            <a
              href="tel:+919820803155"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider border border-white/10 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call +91 9820803155</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
