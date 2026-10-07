import React from 'react';
import { Users, Sparkles, Sun } from 'lucide-react';
import { HIGHLIGHTS } from '../data/cafeData';

export default function Highlights() {
  const iconMap = {
    Users: Users,
    Sparkles: Sparkles,
    Sun: Sun,
  };

  return (
    <section className="py-16 md:py-24 bg-warm-ivory border-y border-soft-beige">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {HIGHLIGHTS.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.id}
                className="group relative p-8 rounded-3xl bg-soft-beige/40 hover:bg-light-peach/60 border border-peach/40 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Icon badge */}
                  <div className="w-12 h-12 rounded-2xl bg-terracotta text-warm-ivory flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-espresso mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-brown leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-peach/40 flex items-center justify-between text-xs text-terracotta font-medium">
                  <span>Pillar 0{index + 1}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">✦</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
