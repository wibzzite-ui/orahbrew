import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/cafeData';

export default function LightboxModal({ isOpen, currentIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || currentIndex === null) return null;

  const currentImage = GALLERY_IMAGES[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-espresso/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 transition-opacity duration-300">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between text-warm-ivory">
        <div className="flex items-center gap-2">
          <Camera className="w-5 h-5 text-peach" />
          <span className="font-serif text-lg font-semibold tracking-wide">
            Orah Gallery ({currentIndex + 1} / {GALLERY_IMAGES.length})
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-warm-ivory transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-6 z-10 p-3 rounded-full bg-black/40 hover:bg-terracotta text-white backdrop-blur-md transition-all duration-300"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Display Image */}
        <div className="max-w-5xl max-h-[75vh] p-2 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <img
            src={currentImage.url}
            alt={currentImage.title}
            className="w-full h-full max-h-[72vh] object-contain rounded-xl"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-6 z-10 p-3 rounded-full bg-black/40 hover:bg-terracotta text-white backdrop-blur-md transition-all duration-300"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption Overlay */}
      <div className="max-w-2xl mx-auto text-center space-y-1 text-warm-ivory bg-black/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
        <h3 className="font-serif text-xl font-semibold text-peach">
          {currentImage.title}
        </h3>
        <p className="text-xs sm:text-sm text-white/80 font-normal">
          {currentImage.caption}
        </p>
        <span className="inline-block text-[11px] uppercase tracking-widest text-muted-rose font-semibold mt-1">
          {currentImage.category}
        </span>
      </div>

    </div>
  );
}
