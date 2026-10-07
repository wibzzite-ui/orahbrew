import React from 'react';
import { MapPin, PhoneCall, Mail, Clock, ArrowUp, Heart, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { BRAND_INFO } from '../data/cafeData';

export default function Footer({ onOpenReservation }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-espresso text-warm-ivory pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-sage/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-olive text-warm-ivory flex items-center justify-center font-serif text-xl font-bold">
                O
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-semibold tracking-wider text-warm-ivory leading-none">
                  ORAH
                </span>
                <span className="text-[10px] tracking-[0.25em] text-peach font-medium uppercase mt-1">
                  BREW GARDEN
                </span>
              </div>
            </div>

            <p className="font-serif italic text-lg text-light-peach/90 max-w-sm pt-1">
              “{BRAND_INFO.tagline}”
            </p>

            {/* Official About Us Text Shortened */}
            <p className="text-xs text-white/70 leading-relaxed max-w-sm font-normal">
              {BRAND_INFO.officialAbout}
            </p>

            {/* Address & Hours badge */}
            <div className="pt-2 space-y-1.5 text-xs text-peach">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                <span>{BRAND_INFO.addressLine1}, {BRAND_INFO.addressLine2}</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/70">
                <Clock className="w-4 h-4 text-sage flex-shrink-0" />
                <span>Hours: {BRAND_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-semibold text-peach">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <a href="#hero" className="hover:text-peach transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-peach transition-colors">Menu</a>
              </li>
              <li>
                <a href="#story" className="hover:text-peach transition-colors">About Us</a>
              </li>
              <li>
                <a href="#location" className="hover:text-peach transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-peach transition-colors">Gallery</a>
              </li>
              <li className="pt-2">
                <a
                  href={BRAND_INFO.officialWebsiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-peach hover:underline"
                >
                  <span>Official Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Contact Details Col */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-lg font-semibold text-peach">
              Contact Details
            </h4>

            <div className="space-y-2 text-xs text-white/80">
              <a
                href={BRAND_INFO.phoneTel}
                className="flex items-center gap-2.5 hover:text-peach transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-sage" />
                <span>Phone: {BRAND_INFO.phone}</span>
              </a>

              <a
                href={BRAND_INFO.emailMailto}
                className="flex items-center gap-2.5 hover:text-peach transition-colors"
              >
                <Mail className="w-4 h-4 text-sage" />
                <span>Email: {BRAND_INFO.email}</span>
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.phoneTel}
                className="px-5 py-2.5 bg-olive hover:bg-[#3A4936] text-white rounded-full text-xs font-semibold shadow-sm transition-all"
              >
                Call Café
              </a>

              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-olive text-white transition-colors"
                aria-label="Instagram Page"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Disclaimer box */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-[11px] text-white/60 leading-normal">
              {BRAND_INFO.demoDisclaimer}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Orah Brew Garden. All rights reserved.
          </div>

          {/* WibzZite Concept Credit */}
          <div className="flex items-center gap-1.5">
            <span>Website concept by</span>
            <a
              href={BRAND_INFO.conceptAgencyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-peach hover:underline flex items-center gap-1"
            >
              <span>{BRAND_INFO.conceptBy}</span>
              <Heart className="w-3 h-3 fill-terracotta text-terracotta" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-peach transition-colors p-1"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
