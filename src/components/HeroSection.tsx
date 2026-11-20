import { ArrowRight, Compass } from 'lucide-react';
import { useState } from 'react';
import { HERO_FACTS } from '../data/goldenDragonData';

interface HeroSectionProps {
  onStartBrief: () => void;
  onExploreServices: () => void;
}

export default function HeroSection({ onStartBrief, onExploreServices }: HeroSectionProps) {
  const [logoError, setLogoError] = useState(false);

  return (
    <section id="top" className="bg-[#FAF9F6] border-b border-[#E2E6EC]">
      <div className="max-w-[1200px] mx-auto px-6 pt-12 pb-14 lg:pt-20 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left editorial proposition column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-[#A67317] mb-5">
              <span>China Purchasing Execution</span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span>UAE &amp; GCC Wholesale &amp; Project Buyers</span>
            </div>

            <h1 className="font-display text-[clamp(2.25rem,4.1vw,3.65rem)] leading-[1.08] font-bold tracking-tight text-[#081B33] text-balance mb-6">
              Experience That Connects China With Your Market
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-[62ch] mb-8">
              Golden Dragon Bridge brings together firsthand China purchasing experience and decades
              of UAE importing, wholesale, and distribution knowledge to support confident
              international buying.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onStartBrief}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-[#081B33] hover:bg-[#102B4D] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C68E23]"
              >
                <span>Build Your Supply Opportunity</span>
                <ArrowRight className="w-4 h-4 text-[#D9A944]" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center px-5 py-3 text-sm font-semibold text-[#081B33] bg-white border border-[#E2E6EC] hover:border-[#081B33] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C68E23]"
              >
                Explore Service Models
              </button>
            </div>
          </div>

          {/* Right focal brand emblem showcase */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full bg-white border border-[#E2E6EC] rounded-lg p-6 sm:p-8 flex flex-col justify-between">
              <div className="flex-1 flex items-center justify-center py-2">
                {!logoError ? (
                  <img
                    src="/assets/aistudio/logo_6ca4b740.jpg"
                    alt="Golden Dragon Bridge — Trusted China Sourcing Partner emblem connecting China manufacturing with UAE and GCC infrastructure"
                    referrerPolicy="no-referrer"
                    onError={() => setLogoError(true)}
                    className="w-full max-w-[360px] h-auto object-contain mx-auto select-none"
                  />
                ) : (
                  <div className="w-full max-w-[340px] aspect-square rounded-lg bg-[#081B33] text-white flex flex-col items-center justify-center p-8 text-center">
                    <Compass className="w-12 h-12 text-[#D9A944] mb-4" aria-hidden="true" />
                    <span className="font-display text-2xl font-bold tracking-tight">
                      Golden Dragon Bridge
                    </span>
                    <span className="text-sm text-[#D9A944] mt-2">
                      Trusted China Sourcing Partner
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-5 mt-5 border-t border-[#E2E6EC] grid grid-cols-2 gap-4 text-left">
                <div>
                  <div className="text-xs font-medium text-slate-500">Origin Execution</div>
                  <div className="text-sm font-semibold text-[#081B33] mt-0.5">
                    Supplier Verification &amp; Consolidation
                  </div>
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500">Destination Reality</div>
                  <div className="text-sm font-semibold text-[#081B33] mt-0.5">
                    UAE &amp; GCC Commercial Readiness
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-column grounding strip directly below Hero split */}
        <div className="mt-12 pt-8 border-t border-[#E2E6EC] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {HERO_FACTS.map((item) => (
            <div key={item.value} className="space-y-1.5">
              <div className="font-display text-2xl sm:text-[1.75rem] font-bold text-[#081B33] font-mono-tabular">
                {item.value}
              </div>
              <p className="text-sm leading-snug text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
