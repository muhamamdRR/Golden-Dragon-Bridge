import { ArrowUpRight, Check } from 'lucide-react';
import { useState } from 'react';
import { SERVICE_MODELS, ServiceModel } from '../data/goldenDragonData';

interface ServiceModelsSectionProps {
  selectedModelId: ServiceModel['id'] | null;
  onSelectForInquiry: (modelId: ServiceModel['id']) => void;
}

export default function ServiceModelsSection({
  selectedModelId,
  onSelectForInquiry,
}: ServiceModelsSectionProps) {
  const [filterMode, setFilterMode] = useState<'all' | ServiceModel['id']>('all');

  const visibleModels =
    filterMode === 'all'
      ? SERVICE_MODELS
      : SERVICE_MODELS.filter((model) => model.id === filterMode);

  return (
    <section id="services" className="bg-[#FAF9F6] border-b border-[#E2E6EC]">
      <div className="max-w-[1200px] mx-auto px-6 py-16 lg:py-24">
        {/* Header & Positioning */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-12 border-b border-[#E2E6EC]">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-[#A67317]">
              <span>Proposed Service Portfolio</span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span>China Sourcing for UAE &amp; GCC Business Buyers</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#081B33] text-balance">
              Sourcing &amp; Supply-Chain Services
            </h2>
            <p className="text-base leading-relaxed text-slate-600 max-w-[65ch]">
              A buyer-side sourcing and supply-chain office supporting importers, distributors,
              contractors and other professional purchasers—combining supplier identification,
              product verification, order coordination, consolidation and shipment support with clear
              accountability.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white border border-[#E2E6EC] rounded-lg p-6">
            <div className="text-xs font-semibold text-[#081B33] mb-1.5">Positioning</div>
            <p className="text-sm leading-relaxed text-slate-600">
              Rather than acting only as a market guide or product finder, Golden Dragon Bridge
              serves as a trusted local execution partner in China—helping you purchase to exact
              specification, reduce avoidable sourcing errors, and coordinate orders from factory to
              shipment.
            </p>
          </div>
        </div>

        {/* Interactive Service Model Filter Bar */}
        <div className="pt-10 pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="font-display text-2xl font-bold text-[#081B33]">Core Service Models</h3>

          <div
            role="tablist"
            aria-label="Filter core service models"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#EAECEF] rounded-lg self-start sm:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={filterMode === 'all'}
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                filterMode === 'all'
                  ? 'bg-white text-[#081B33] shadow-xs'
                  : 'text-slate-600 hover:text-[#081B33]'
              }`}
            >
              All Models
            </button>
            {SERVICE_MODELS.map((model) => (
              <button
                key={model.id}
                type="button"
                role="tab"
                aria-selected={filterMode === model.id}
                onClick={() => setFilterMode(model.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  filterMode === model.id
                    ? 'bg-white text-[#081B33] shadow-xs'
                    : 'text-slate-600 hover:text-[#081B33]'
                }`}
              >
                {model.code}
              </button>
            ))}
          </div>
        </div>

        {/* Service Model Cards — Asymmetric bento when All, Focused full-width when filtered */}
        <div
          className={`grid gap-6 ${
            filterMode === 'all' ? 'grid-cols-1 lg:grid-cols-12' : 'grid-cols-1'
          }`}
        >
          {visibleModels.map((model, idx) => {
            const isSelected = selectedModelId === model.id;
            const spanClass =
              filterMode === 'all'
                ? idx === 0
                  ? 'lg:col-span-6'
                  : idx === 1
                    ? 'lg:col-span-6'
                    : 'lg:col-span-12'
                : '';

            return (
              <article
                key={model.id}
                className={`${spanClass} bg-white border rounded-lg p-7 sm:p-8 flex flex-col justify-between transition-colors duration-150 ${
                  isSelected ? 'border-[#C68E23] ring-1 ring-[#C68E23]/30' : 'border-[#E2E6EC]'
                }`}
              >
                <div className={filterMode === 'all' && idx === 2 ? 'lg:grid lg:grid-cols-12 lg:gap-10' : ''}>
                  <div className={filterMode === 'all' && idx === 2 ? 'lg:col-span-6' : ''}>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="font-mono-tabular text-xs font-medium text-[#A67317]">
                        {model.code}
                      </span>
                      <span className="text-xs text-slate-500">{model.freightModes}</span>
                    </div>

                    <h4 className="font-display text-2xl font-bold text-[#081B33] leading-snug mb-2">
                      {model.title}
                    </h4>

                    <p className="text-xs font-medium text-slate-500 mb-4">{model.targetBuyers}</p>

                    <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6">
                      {model.summary}
                    </p>
                  </div>

                  <div className={filterMode === 'all' && idx === 2 ? 'lg:col-span-6 flex flex-col justify-between' : ''}>
                    <ul className="space-y-2.5 mb-6">
                      {model.scopePoints.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <Check
                            className="w-4 h-4 text-[#A67317] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-[#E2E6EC] mb-6">
                      <div className="text-xs font-semibold text-[#081B33] mb-1">
                        Customer Benefit
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {model.customerBenefit}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => onSelectForInquiry(model.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-[#C68E23] text-white hover:bg-[#A67317]'
                        : 'bg-[#081B33] text-white hover:bg-[#102B4D]'
                    }`}
                  >
                    <span>
                      {isSelected ? 'Selected in Sourcing Brief' : `Inquire About ${model.code}`}
                    </span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
