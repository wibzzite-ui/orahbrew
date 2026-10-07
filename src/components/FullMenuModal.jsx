import React, { useState } from 'react';
import { X, Search, Filter, Sparkles, AlertCircle } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES, BRAND_INFO } from '../data/cafeData';

export default function FullMenuModal({ isOpen, onClose }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all');

  if (!isOpen) return null;

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDietary =
      dietaryFilter === 'all' || item.dietary.toLowerCase() === dietaryFilter.toLowerCase();
    return matchesCategory && matchesSearch && matchesDietary;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-espresso/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-warm-ivory rounded-3xl shadow-2xl overflow-hidden border border-peach flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 sm:p-8 bg-soft-beige border-b border-peach/60 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warm-ivory text-xs font-semibold text-terracotta mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sample Menu Preview</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-espresso">
              Orah Brew Garden Menu
            </h2>
            <p className="text-xs sm:text-sm text-muted-brown mt-1">
              Crafted pizzas, handmade pastas, specialty coffee & café treats in Yelahanka.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-warm-ivory text-espresso hover:bg-terracotta hover:text-warm-ivory transition-colors"
            aria-label="Close menu modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-4 sm:p-6 bg-warm-ivory border-b border-light-peach space-y-4">
          
          {/* Search bar & Dietary pills */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-muted-brown absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dishes or drinks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-soft-beige/60 border border-peach rounded-full text-sm text-espresso placeholder-muted-brown focus:outline-none focus:border-terracotta"
              />
            </div>

            {/* Dietary Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              <span className="text-xs text-muted-brown font-medium flex items-center gap-1">
                <Filter className="w-3 h-3" /> Filter:
              </span>
              {['all', 'Vegetarian', 'Vegan', 'Non-Veg'].map((diet) => (
                <button
                  key={diet}
                  onClick={() => setDietaryFilter(diet)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    dietaryFilter === diet
                      ? 'bg-terracotta text-white shadow-sm'
                      : 'bg-soft-beige text-muted-brown hover:bg-light-peach'
                  }`}
                >
                  {diet === 'all' ? 'All Diets' : diet}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar border-t border-light-peach pt-3">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-espresso text-warm-ivory shadow-sm'
                    : 'bg-transparent text-muted-brown hover:text-espresso hover:bg-soft-beige'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Items List */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 text-muted-brown">
              <p className="font-serif text-xl">No dishes match your filter.</p>
              <p className="text-xs mt-1">Try resetting search query or dietary filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 rounded-2xl bg-warm-ivory border border-light-peach hover:border-peach hover:shadow-md transition-all group"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-xl object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-lg font-semibold text-espresso leading-snug">
                          {item.name}
                        </h4>
                        <span className="text-sm font-semibold text-terracotta whitespace-nowrap">
                          {item.price}*
                        </span>
                      </div>
                      <p className="text-xs text-muted-brown mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[11px]">
                      <span className="px-2 py-0.5 rounded-md bg-soft-beige text-muted-brown">
                        {item.dietary}
                      </span>
                      {item.isPopular && (
                        <span className="text-terracotta font-medium italic">★ Chef Favorite</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer Note */}
        <div className="p-4 bg-soft-beige/80 border-t border-peach/60 text-center flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-brown">
          <span className="flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-terracotta" />
            *Prices and items shown are sample previews for layout illustration.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-terracotta text-white rounded-full font-medium hover:bg-muted-rose transition-colors"
          >
            Close Menu Preview
          </button>
        </div>

      </div>
    </div>
  );
}
