import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onRequestBrief: () => void;
}

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Specialist Support', href: '#specialist' },
];

export default function Navbar({ onRequestBrief }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#E2E6EC]">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line brand wordmark */}
        <a
          href="#top"
          className="font-display text-xl font-bold tracking-tight text-[#081B33] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C68E23]"
        >
          Golden Dragon Bridge
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="hover:text-[#081B33] border-b border-transparent hover:border-[#C68E23] py-1 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C68E23]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary CTA + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onRequestBrief}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#081B33] hover:bg-[#102B4D] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C68E23]"
          >
            Start Sourcing Brief
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-[#081B33] hover:bg-[#F2F4F7] transition-colors duration-150 cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-[#E2E6EC] px-6 py-4 space-y-2">
          <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="py-2.5 text-sm font-medium text-slate-700 hover:text-[#081B33] border-b border-[#F2F4F7] last:border-b-0"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onRequestBrief();
              }}
              className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-[#081B33] hover:bg-[#102B4D] rounded-md transition-colors duration-150 cursor-pointer"
            >
              Start Sourcing Brief
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
