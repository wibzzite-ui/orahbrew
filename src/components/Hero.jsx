import React from 'react';
import { MapPin, ArrowRight, Sparkles, Coffee, ShieldCheck, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';
import { BRAND_INFO, REAL_CAFE_PHOTOS } from '../data/cafeData';

export default function Hero({ onOpenReservation }) {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-28 overflow-hidden bg-grain">
      {/* Ambient background glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-96 h-96 bg-light-peach rounded-full blur-3xl opacity-60 -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-peach rounded-full blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 text-left">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-soft-beige border border-peach/60">
              <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-muted-brown">
                YOUR LITTLE ESCAPE IN YELAHANKA
              </span>
            </div>

            {/* Main Headline */}
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.15, delayChildren: 0.1 }
                }
              }}
              className="font-serif text-5xl sm:text-6xl xl:text-7xl font-semibold text-espresso leading-[1.1] tracking-tight"
            >
              <motion.span className="inline-block" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}>
                Good
              </motion.span>{' '}
              <motion.span className="inline-block" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}>
                Food.
              </motion.span>{' '}
              <motion.span className="italic font-normal text-terracotta block sm:inline-block mt-2 sm:mt-0" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}>
                Beautiful Moments.
              </motion.span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg text-muted-brown leading-relaxed max-w-xl font-normal"
            >
              Slow down, settle in, and savour the little things. Discover a welcoming space for culinary delights, comforting flavours, and good company.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#menu"
                className="inline-flex items-center gap-3 bg-terracotta hover:bg-muted-rose text-warm-ivory px-7 py-3.5 rounded-full text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#story"
                className="inline-flex items-center gap-2 border border-terracotta hover:bg-light-peach/40 text-terracotta px-7 py-3.5 rounded-full text-base font-medium transition-all duration-300"
              >
                <span>Discover Orah</span>
              </a>
            </motion.div>

            {/* Location Label Badge */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="pt-4 flex items-center gap-3 text-xs sm:text-sm text-muted-brown border-t border-soft-beige max-w-md"
            >
              <div className="p-2 rounded-full bg-light-peach text-terracotta">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-medium text-espresso block">{BRAND_INFO.addressLine1}</span>
                <span className="text-muted-brown">{BRAND_INFO.eyebrowLocation}</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Editorial Hero Imagery featuring Authentic Café Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-warm-ivory bg-light-peach aspect-[4/5] sm:aspect-[4/4.8]">
                <img
                  src={REAL_CAFE_PHOTOS.interiorSeating}
                  alt="Authentic Orah Brew Garden architectural seating area with warm lighting and plants"
                  className="w-full h-full object-cover object-[center_60%] transition-transform duration-1000 hover:scale-105"
                  loading="eager"
                />
                
                {/* Soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent" />
                
                {/* Bottom caption overlay inside image */}
                <div className="absolute bottom-5 left-5 right-5 text-white bg-espresso/70 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-medium text-peach">
                        <ShieldCheck className="w-3.5 h-3.5 text-peach" />
                        <span>Authentic Orah Venue Photo</span>
                      </div>
                      <p className="text-sm font-serif italic text-warm-ivory mt-0.5">Rooftop Terrace & Signature Drinks</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2.5 py-1 bg-terracotta text-xs text-white rounded-full font-sans font-medium">
                        Prestige Plaza
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Circular Badge: GOOD FOOD • GOOD MOOD */}
              <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-28 h-28 sm:w-32 sm:h-32 bg-warm-ivory rounded-full p-2 shadow-xl border border-peach/60 hidden sm:flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[8px] font-medium tracking-[0.2em] fill-espresso uppercase">
                      <textPath href="#circlePath">
                        ORAH • GOOD FOOD • GOOD MOOD • 
                      </textPath>
                    </text>
                  </svg>
                  <Utensils className="w-6 h-6 text-terracotta absolute" />
                </div>
              </div>

              {/* Floating Bottom Right Tagline Note */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-sage/10 backdrop-blur-sm border border-sage/30 p-4 rounded-2xl shadow-xl max-w-[220px]">
                <div className="flex items-center gap-2 text-xs font-semibold text-olive mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Tagline</span>
                </div>
                <p className="font-serif italic text-sm text-espresso leading-snug">
                  “{BRAND_INFO.tagline}”
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
