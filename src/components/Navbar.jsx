import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/cafeData';

export default function Navbar({ onOpenReservation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Menu', href: '#menu' },
    { name: 'About Us', href: '#story' },
    { name: 'Contact Us', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-warm-ivory/95 backdrop-blur-md shadow-sm py-3.5 border-b border-soft-beige'
            : 'bg-transparent py-5 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo & Wordmark */}
          <a
            href="#hero"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Orah Brew Garden Home"
          >
            <div className="w-10 h-10 rounded-full bg-terracotta text-warm-ivory flex items-center justify-center font-serif text-xl font-bold shadow-sm transition-transform duration-300 group-hover:scale-105">
              O
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-semibold tracking-wider text-espresso leading-none">
                ORAH
              </span>
              <span className="text-[10px] tracking-[0.25em] text-muted-brown font-medium uppercase mt-1">
                BREW GARDEN
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-espresso hover:text-terracotta transition-colors py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-terracotta transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action CTA Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={BRAND_INFO.phoneTel}
              className="text-xs uppercase tracking-wider font-semibold text-muted-brown hover:text-terracotta transition-colors flex items-center gap-1.5 px-3 py-2"
            >
              <Phone className="w-3.5 h-3.5 text-terracotta" />
              <span>{BRAND_INFO.phone}</span>
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 bg-terracotta hover:bg-muted-rose text-warm-ivory px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow group"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-espresso hover:text-terracotta transition-colors rounded-lg focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-espresso/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Content */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-warm-ivory shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Header inside drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-soft-beige">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-terracotta text-warm-ivory flex items-center justify-center font-serif text-lg font-bold">
                O
              </div>
              <span className="font-serif text-xl font-semibold text-espresso">
                ORAH <span className="text-xs font-sans font-normal text-muted-brown tracking-widest block">BREW GARDEN</span>
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-muted-brown hover:text-espresso rounded-full"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav links mobile */}
          <nav className="flex flex-col gap-4 mt-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif font-medium text-espresso hover:text-terracotta transition-colors py-2 border-b border-light-peach/50 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-muted-brown">→</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Drawer Actions */}
        <div className="space-y-4 pt-6 border-t border-soft-beige">
          <a
            href={BRAND_INFO.phoneTel}
            className="w-full flex items-center justify-center gap-2 bg-soft-beige text-espresso py-3 rounded-full text-sm font-semibold border border-peach"
          >
            <Phone className="w-4 h-4 text-terracotta" />
            <span>Call: {BRAND_INFO.phone}</span>
          </a>
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 bg-terracotta text-warm-ivory py-3 rounded-full text-sm font-medium shadow"
          >
            <span>Explore Our Menu</span>
          </a>
          <div className="text-center pt-2">
            <p className="text-xs text-muted-brown flex items-center justify-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-terracotta" />
              Prestige Plaza, Yelahanka, Bengaluru
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
