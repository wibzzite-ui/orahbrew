import React from 'react';
import { MapPin, Navigation, Clock, PhoneCall, Mail, ExternalLink } from 'lucide-react';
import { BRAND_INFO } from '../data/cafeData';

export default function LocationSection({ onOpenReservation }) {
  return (
    <section id="location" className="py-20 md:py-28 bg-warm-ivory text-espresso relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage rounded-full blur-3xl opacity-20 -z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-peach rounded-full blur-3xl opacity-20 -z-0" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text & Contact Info */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-soft-beige border border-peach/30 text-xs font-semibold uppercase tracking-widest text-terracotta">
              <MapPin className="w-3.5 h-3.5" />
              <span>Visit Orah Brew Garden</span>
            </div>

            {/* Official Heading */}
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold leading-tight text-espresso">
              Come Find <span className="italic font-normal text-sage">Your Corner.</span>
            </h2>

            <p className="text-base sm:text-lg text-muted-brown leading-relaxed font-normal">
              Located on the 4th Floor of Prestige Plaza in Yelahanka, Bengaluru. Come slow down, savor handcrafted flavors, and enjoy our rooftop garden setting.
            </p>

            {/* Verified Address & Contact Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-sage/10 border border-sage/30 space-y-6">
              {/* Address Header */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-warm-ivory text-olive font-bold shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-espresso">
                    {BRAND_INFO.name}
                  </h3>
                  <p className="text-sm sm:text-base text-olive mt-1 font-medium leading-snug">
                    {BRAND_INFO.addressLine1}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-brown">
                    {BRAND_INFO.addressLine2}
                  </p>
                </div>
              </div>

              {/* Verified Contact Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-sage/20 text-xs sm:text-sm text-espresso">
                {/* Phone Link */}
                <a
                  href={BRAND_INFO.phoneTel}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/50 hover:bg-white transition-colors border border-white/60 group"
                >
                  <PhoneCall className="w-4 h-4 text-olive group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-[10px] text-muted-brown uppercase tracking-wider block">Phone Number</span>
                    <span className="font-medium text-espresso group-hover:text-olive transition-colors">{BRAND_INFO.phone}</span>
                  </div>
                </a>

                {/* Email Link */}
                <a
                  href={BRAND_INFO.emailMailto}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/50 hover:bg-white transition-colors border border-white/60 group"
                >
                  <Mail className="w-4 h-4 text-olive group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-[10px] text-muted-brown uppercase tracking-wider block">Email Address</span>
                    <span className="font-medium text-espresso group-hover:text-olive transition-colors truncate block max-w-[170px]">{BRAND_INFO.email}</span>
                  </div>
                </a>
              </div>

              {/* Verified Opening Hours */}
              <div className="flex items-center gap-3 pt-2 text-xs sm:text-sm text-espresso">
                <Clock className="w-4 h-4 text-olive flex-shrink-0" />
                <div>
                  <span className="font-semibold text-olive">Opening Hours: </span>
                  <span>{BRAND_INFO.hours}</span>
                </div>
              </div>
            </div>

            {/* Functional Contact Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.phoneTel}
                className="inline-flex items-center gap-2 bg-olive hover:bg-[#3A4936] text-warm-ivory px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-md group"
              >
                <PhoneCall className="w-4 h-4 text-sage" />
                <span>Call the Café</span>
              </a>

              <a
                href={BRAND_INFO.emailMailto}
                className="inline-flex items-center gap-2 bg-sage/20 hover:bg-sage/30 text-olive px-6 py-3 rounded-full text-sm font-medium transition-colors border border-sage/30"
              >
                <Mail className="w-4 h-4 text-olive" />
                <span>Email Us</span>
              </a>

              <a
                href={BRAND_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-sage hover:bg-sage/10 text-olive px-6 py-3 rounded-full text-sm font-medium transition-colors"
              >
                <Navigation className="w-4 h-4 text-olive" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

          </div>

          {/* Right Map Preview Container */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-warm-ivory bg-light-peach aspect-[4/3] sm:aspect-[16/11]">
              
              {/* Embedded Google Map iframe using location query */}
              <iframe
                title="Orah Brew Garden Location Map"
                src="https://maps.google.com/maps?q=Prestige+Plaza+Yelahanka+Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter saturate-90 contrast-105"
                loading="lazy"
                allowFullScreen
              />

              {/* Overlay Badge */}
              <div className="absolute top-4 left-4 bg-warm-ivory/95 backdrop-blur-md text-espresso p-3.5 rounded-2xl border border-sage/30 text-xs space-y-0.5 shadow-lg">
                <p className="font-serif font-semibold text-terracotta text-sm">Prestige Plaza, 4th Floor</p>
                <p className="text-espresso/90">Yelahanka, Bengaluru, KA</p>
                <p className="text-muted-brown text-[11px] pt-1">Open 11:00 AM – 1:00 AM Daily</p>
              </div>

              {/* Bottom Right Pin Link */}
              <a
                href={BRAND_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-olive hover:bg-espresso text-warm-ivory p-3 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-medium transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Open Google Maps</span>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
