import React, { useState } from 'react';
import { Sparkles, ArrowRight, Info } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES } from '../data/cafeData';
import FullMenuModal from './FullMenuModal';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const displayedItems = MENU_ITEMS.filter((item) => {
    if (activeCategory === 'all') return item.isPopular;
    return item.category === activeCategory;
  });

  return (
    <section id="menu" className="py-20 md:py-28 bg-warm-ivory relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-[1px] w-8 bg-terracotta" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
                MADE FOR YOUR CRAVINGS
              </span>
            </div>
            
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-espresso">
              A little something for <span className="italic font-normal text-terracotta">every mood.</span>
            </h2>
          </div>

          {/* Sample Menu Notice Tag */}
          <div className="flex items-center gap-2 bg-light-peach text-terracotta px-4 py-2 rounded-full border border-peach/60 self-start md:self-auto">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Sample Menu Preview
            </span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-4 mb-10 border-b border-soft-beige">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-terracotta text-warm-ivory shadow-md'
                  : 'bg-soft-beige text-muted-brown hover:bg-sage/20 hover:text-olive'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {displayedItems.slice(0, 8).map((item) => (
            <div
              key={item.id}
              className="group bg-warm-ivory rounded-3xl overflow-hidden border border-soft-beige hover:border-sage/50 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-[4/3] overflow-hidden bg-soft-beige">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    <span className="bg-warm-ivory/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[11px] font-medium text-espresso">
                      {item.dietary}
                    </span>
                    {item.isRealPhoto && (
                      <span className="bg-terracotta text-white px-2 py-0.5 rounded-full text-[10px] font-medium shadow-sm">
                        Authentic Orah Photo
                      </span>
                    )}
                  </div>
                  {item.price && (
                    <div className="absolute bottom-3 right-3 bg-espresso/80 text-warm-ivory px-3 py-1 rounded-full text-xs font-serif font-semibold backdrop-blur-sm">
                      {item.price}*
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-serif text-xl font-semibold text-espresso group-hover:text-terracotta transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-muted-brown mt-2 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-5 pb-5 pt-2 border-t border-sage/20 flex items-center justify-between">
                <span className="text-[11px] text-olive/70 font-semibold uppercase tracking-wider">
                  Orah Specialty
                </span>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-xs font-semibold text-terracotta hover:text-olive transition-colors flex items-center gap-1"
                >
                  <span>Details</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer & View Full Menu Button */}
        <div className="mt-14 text-center space-y-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-3 bg-espresso hover:bg-terracotta text-warm-ivory px-8 py-4 rounded-full text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
          </button>

          <p className="text-xs text-muted-brown max-w-lg mx-auto flex items-center justify-center gap-1.5 pt-2">
            <Info className="w-3.5 h-3.5 text-terracotta" />
            <span>Sample menu preview. Actual items & prices are configurable for the café.</span>
          </p>
        </div>

      </div>

      {/* Full Menu Modal */}
      <FullMenuModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
