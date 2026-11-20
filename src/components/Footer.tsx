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
