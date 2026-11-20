import { EXPERIENCE_PILLARS } from '../data/goldenDragonData';

export default function AboutExperienceSection() {
  return (
    <section id="about" className="bg-white border-b border-[#E2E6EC]">
      <div className="max-w-[1200px] mx-auto px-6 py-16 lg:py-24">
        {/* Narrative Intro & Target Audience / Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-16 border-b border-[#E2E6EC]">
          <div className="lg:col-span-7 space-y-6">
            <div className="text-sm font-semibold text-[#A67317]">
              About Golden Dragon Bridge
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#081B33] text-balance">
              Built on Practical Importing Experience
            </h2>
            <div className="space-y-4 text-base leading-[1.7] text-slate-600 max-w-[68ch]">
              <p>
                Golden Dragon Bridge is founded on the understanding that successful sourcing does
                not end when a supplier sends a quotation. The true measure of a purchase is what
                happens after the order is placed: whether the product meets the required
                specification, arrives as expected, and performs commercially in the destination
                market.
              </p>
              <p>
                Our leadership brings more than 15 years of direct experience travelling to China to
                identify products, meet suppliers, negotiate purchases, and coordinate goods
                imported into the UAE. This experience was developed alongside an established UAE
                importing and wholesale distribution business with a trading background spanning
                approximately four decades.
              </p>
              <p>
                Working within this trading environment provided exposure to the complete product
                journey—from understanding demand and selecting merchandise to managing inbound
                shipments, handling inventory, marketing products, and selling through wholesale and
                retail channels. That is the foundation of Golden Dragon Bridge: practical knowledge
                gained by purchasing, importing, handling, and selling products—not simply
                introducing buyers to factories.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between bg-[#FAF9F6] border border-[#E2E6EC] rounded-lg p-8 space-y-8">
            <div className="space-y-3">
              <h3 className="font-display text-xl font-bold text-[#081B33]">
                Who we aim to support
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                Golden Dragon Bridge is built for importers, wholesalers, distributors, retailers,
                contractors, and professional procurement teams that want a knowledgeable and
                responsive point of contact for purchasing in China. Our goal is to make the
                sourcing journey clearer, more coordinated, and more commercially informed.
              </p>
            </div>

            <div className="pt-8 border-t border-[#E2E6EC] space-y-3">
              <h3 className="font-display text-xl font-bold text-[#081B33]">Our vision</h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                To become a trusted China sourcing and consolidation partner for businesses in the
                UAE, GCC, and beyond—recognized for practical purchasing knowledge, transparent
                communication, and an understanding of what successful importing requires.
              </p>
            </div>
          </div>
        </div>

        {/* Why Our Experience Matters to Buyers */}
        <div id="experience" className="pt-16">
          <div className="max-w-2xl mb-10">
            <div className="text-sm font-semibold text-[#A67317] mb-2">
              Buyer-Side Perspective
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#081B33] text-balance">
              Why Our Experience Matters to Buyers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERIENCE_PILLARS.map((pillar) => (
              <article
                key={pillar.index}
                className="bg-[#FAF9F6] border border-[#E2E6EC] rounded-lg p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono-tabular text-xs font-medium text-[#A67317] mb-3">
                    {pillar.index}
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#081B33] leading-snug mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">{pillar.description}</p>
                </div>
              </article>
            ))}

            {/* Closing dual-perspective anchor card */}
            <article className="bg-[#081B33] text-white rounded-lg p-7 flex flex-col justify-between">
              <div>
                <div className="font-mono-tabular text-xs font-medium text-[#D9A944] mb-3">
                  Dual-Side Alignment
                </div>
                <h3 className="font-display text-xl font-bold text-white leading-snug mb-3">
                  Understanding both sides of the transaction
                </h3>
                <p className="text-sm leading-relaxed text-slate-200">
                  China offers extraordinary manufacturing breadth, while importers must manage
                  suitability, technical specifications, reliability, delivery costs, and market
                  expectations. We understand supplier discussions in China and buyer realities in
                  the UAE and wider GCC.
                </p>
              </div>
              <div className="pt-5 mt-6 border-t border-white/15">
                <p className="font-display italic text-base text-[#D9A944]">
                  “We have been in our customers’ shoes.”
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
