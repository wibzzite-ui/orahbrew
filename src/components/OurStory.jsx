import React from 'react';
import { ArrowRight, Wine, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND_INFO, REAL_CAFE_PHOTOS } from '../data/cafeData';

export default function OurStory() {
  return (
    <section id="story" className="py-20 md:py-28 bg-light-peach/40 relative overflow-hidden">
      {/* Soft background ambient gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-light-peach rounded-full blur-3xl opacity-50 -z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-soft-beige rounded-full blur-3xl opacity-50 -z-0" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Asymmetric Left Image Column featuring Authentic Café Photography */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative">
              {/* Decorative accent card */}
              <div className="absolute -inset-4 bg-sage/20 rounded-3xl transform -rotate-2 -z-10 border border-sage/40" />
              
              {/* Main Authentic Wine & Shadows Photo */}
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] sm:aspect-[4/3.5] img-hover-zoom border border-peach">
                <img
                  src={REAL_CAFE_PHOTOS.entranceVertical}
                  alt="Beautiful architectural entrance of Orah Brew Garden with greenery"
                  className="w-full h-full object-cover object-[center_30%]"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-espresso/80 text-warm-ivory px-3 py-1 rounded-full text-[11px] font-medium backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-peach" />
                  <span>Real Orah Craft Experience</span>
                </div>
              </div>

              {/* Floating Inset Photo (Ice-Stamped Cocktail) */}
              <div className="absolute -bottom-8 -right-6 sm:-bottom-10 sm:-right-8 w-44 sm:w-56 rounded-2xl overflow-hidden border-4 border-warm-ivory shadow-2xl hidden sm:block">
                <img
                  src={REAL_CAFE_PHOTOS.stampedCocktail}
                  alt="Signature Orah ice-stamped cocktail"
                  className="w-full h-32 sm:h-40 object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Verified Editorial About Us */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="h-[1px] w-8 bg-terracotta" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
                ABOUT ORAH BREW GARDEN
              </span>
            </div>

            {/* Official Heading */}
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-espresso leading-tight">
              Where Community, Craft <span className="italic text-terracotta block sm:inline">& Culture Meet.</span>
            </h2>

            {/* Official About Us Text */}
            <div className="p-6 rounded-3xl bg-sage/10 border border-sage/30 relative shadow-sm">
              <Sparkles className="w-5 h-5 text-sage absolute top-5 right-5 opacity-70" />
              <p className="text-base sm:text-lg text-espresso leading-relaxed font-serif italic">
                “{BRAND_INFO.officialAbout}”
              </p>
            </div>

            <p className="text-sm sm:text-base text-muted-brown leading-relaxed font-normal">
              Slow down, settle in, and savour the little things on our 4th-floor rooftop terrace in Yelahanka. Discover comforting artisanal flavours, thoughtful moments, and good company.
            </p>

            {/* Feature Highlights Grid */}
            <div className="py-2 border-t border-b border-peach/60 my-6">
              <div className="grid grid-cols-2 gap-4 py-2">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-light-peach text-terracotta mt-1">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-espresso text-base">Community Hub</h4>
                    <p className="text-xs text-muted-brown">Vibrant gathering spot for friends, family, & quiet breaks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-light-peach text-terracotta mt-1">
                    <Wine className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-espresso text-base">Craft Brews</h4>
                    <p className="text-xs text-muted-brown">Local & global craft influences for every taste.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 text-base font-serif font-semibold text-terracotta hover:text-espresso transition-colors group"
              >
                <span>Explore Signature Menu</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
