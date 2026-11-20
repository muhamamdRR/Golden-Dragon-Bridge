import { SPECIALIST_SUPPORT } from '../data/goldenDragonData';

export default function SpecialistSupportSection() {
  return (
    <section id="specialist" className="bg-[#FAF9F6] border-b border-[#E2E6EC]">
      <div className="max-w-[1200px] mx-auto px-6 py-16 lg:py-24">
        <div className="max-w-2xl mb-12 space-y-2.5">
          <div className="text-sm font-semibold text-[#A67317]">
            Additional &amp; Specialist Support
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#081B33] text-balance">
            Extended Market, Brand &amp; On-the-Ground Capabilities
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            Beyond core sourcing and consolidation, Golden Dragon Bridge supports marketplace
            readiness, accompanied China factory itineraries, private-label packaging, and custom
            product development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SPECIALIST_SUPPORT.map((block) => (
            <article
              key={block.index}
              className="bg-white border border-[#E2E6EC] rounded-lg p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-[#E2E6EC]">
                  <span className="font-mono-tabular text-xs font-medium text-[#A67317]">
                    {block.index}
                  </span>
                  <span className="text-xs text-slate-500 text-right">{block.subtitle}</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#081B33] leading-snug mb-4">
                  {block.title}
                </h3>

                <ul className="space-y-3">
                  {block.points.map((point) => (
                    <li
                      key={point}
                      className="text-sm sm:text-base leading-relaxed text-slate-600 flex items-start gap-3"
                    >
                      <span
                        aria-hidden="true"
                        className="text-[#C68E23] font-semibold select-none mt-0.5"
                      >
                        —
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
