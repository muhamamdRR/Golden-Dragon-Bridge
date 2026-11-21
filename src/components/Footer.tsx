export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#081B33] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-12 lg:py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-white/15">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white rounded-md p-1 shrink-0 overflow-hidden flex items-center justify-center">
              <img
                src="/assets/aistudio/logo_6ca4b740.jpg"
                alt="Golden Dragon Bridge emblem"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="font-display text-xl font-bold tracking-tight text-white">
                Golden Dragon Bridge
              </div>
              <div className="text-sm text-[#D9A944]">Trusted China Sourcing Partner</div>
            </div>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-300"
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#about');
              }}
              className="hover:text-white transition-colors duration-150"
            >
              About Us
            </a>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#experience');
              }}
              className="hover:text-white transition-colors duration-150"
            >
              Buyer-Side Experience
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#services');
              }}
              className="hover:text-white transition-colors duration-150"
            >
              Service Models
            </a>
            <a
              href="#workflow"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#workflow');
              }}
              className="hover:text-white transition-colors duration-150"
            >
              Operating Workflow
            </a>
            <a
              href="#specialist"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#specialist');
              }}
              className="hover:text-white transition-colors duration-150"
            >
              Specialist Support
            </a>
          </nav>
        </div>

        {/* Office Contact Details */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10 border-b border-white/15">
          {/* UAE Office */}
          <div className="space-y-4">
            <div>
              <div className="text-xs font-medium text-[#D9A944]">UAE Office</div>
              <h3 className="font-display text-lg font-bold text-white mt-0.5">
                Dubai, United Arab Emirates
              </h3>
            </div>

            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-xs text-slate-400">Office Address</dt>
                <dd className="text-slate-200 leading-relaxed mt-0.5">
                  Office No. 5, Street 24A, Latifa Bint Hamdan Street, opposite Al Khail Mall, Al
                  Quoz, Dubai, UAE
                </dd>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <dt className="text-xs text-slate-400">Map Reference</dt>
                  <dd className="font-mono-tabular text-slate-200 mt-0.5">
                    46XV+6J · Al Quoz, Dubai
                  </dd>
                </div>

                <div>
                  <dt className="text-xs text-slate-400">Mobile &amp; WhatsApp</dt>
                  <dd className="mt-0.5">
                    <a
                      href="tel:+971503436751"
                      className="font-mono-tabular text-slate-200 hover:text-[#D9A944] transition-colors duration-150"
                    >
                      +971-50-34 36 751
                    </a>
                  </dd>
                </div>
              </div>

              <div>
                <dt className="text-xs text-slate-400">Email</dt>
                <dd className="mt-0.5">
                  <a
                    href="mailto:ali110akbar@gmail.com"
                    className="text-slate-200 hover:text-[#D9A944] transition-colors duration-150"
                  >
                    ali110akbar@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Shenzhen Office */}
          <div className="space-y-4">
            <div>
              <div className="text-xs font-medium text-[#D9A944]">Shenzhen Office</div>
              <h3 className="font-display text-lg font-bold text-white mt-0.5">Shenzhen, China</h3>
            </div>

            <dl className="space-y-3 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <dt className="text-xs text-slate-400">Mobile</dt>
                  <dd className="mt-0.5">
                    <a
                      href="tel:+86130476974649"
                      className="font-mono-tabular text-slate-200 hover:text-[#D9A944] transition-colors duration-150"
                    >
                      +86-130-47 69 7 46 49
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-xs text-slate-400">WeChat ID</dt>
                  <dd className="font-mono-tabular text-slate-200 mt-0.5">ali-bara</dd>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10">
                <p className="text-sm text-slate-300 leading-relaxed">
                  For visits or meetings, please contact us in advance to arrange an appointment.
                </p>
              </div>
            </dl>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            China Sourcing &amp; Consolidation Operations · Serving Importers, Wholesalers,
            Distributors &amp; Contractors in the UAE, GCC &amp; Beyond
          </p>
          <p>© {new Date().getFullYear()} Golden Dragon Bridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
