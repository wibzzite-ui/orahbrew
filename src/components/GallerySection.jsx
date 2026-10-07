import React, { useState } from 'react';
import { Camera, Maximize2 } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/cafeData';
import LightboxModal from './LightboxModal';

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-soft-beige/30 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-8 bg-terracotta" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
              STEP INTO ORAH
            </span>
            <span className="h-[1px] w-8 bg-terracotta" />
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-espresso">
            Good spaces create <span className="italic font-normal text-terracotta">good memories.</span>
          </h2>
          
          <p className="text-sm sm:text-base text-muted-brown">
            An asymmetric glimpse into our rooftop garden, warm lighting, crafted dishes, and quiet coffee corners in Yelahanka.
          </p>
        </div>

        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => openLightbox(idx)}
              className={`${img.span} relative group cursor-pointer rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 bg-light-peach min-h-[260px] sm:min-h-[320px] border border-transparent hover:border-sage/40`}
            >
              {/* Image */}
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6" />

              {/* Hover Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-semibold tracking-widest text-peach uppercase">
                      {img.category}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-warm-ivory mt-0.5">
                      {img.title}
                    </h3>
                  </div>
                  <div className="p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-sage transition-colors">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Subtle top right icon */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-sage/10 backdrop-blur-md border border-sage/20 opacity-80 group-hover:opacity-0 transition-opacity">
                <Camera className="w-4 h-4 text-olive" />
              </div>
            </div>
          ))}
        </div>

        {/* Interactive hint */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-brown italic">
            Click any photograph to view in full-screen editorial lightbox
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
