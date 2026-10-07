import React from 'react';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { INSTAGRAM_POSTS, BRAND_INFO } from '../data/cafeData';

export default function InstagramSection() {
  return (
    <section className="py-20 md:py-28 bg-warm-ivory relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-terracotta">
              <InstagramIcon className="w-4 h-4" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold">
                INSTAGRAM JOURNAL
              </span>
            </div>
            
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-espresso">
              Little moments from <span className="italic font-normal text-terracotta">Orah.</span>
            </h2>
          </div>

          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-soft-beige hover:bg-light-peach text-espresso px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border border-peach/60 self-start md:self-auto group"
          >
            <InstagramIcon className="w-4 h-4 text-terracotta" />
            <span>Follow Along {BRAND_INFO.instagramHandle}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* 6 Photo Instagram Editorial Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-soft-beige border border-peach/40 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img
                src={post.image}
                alt="Orah Brew Garden Instagram Moment"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-espresso/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <div className="flex items-center justify-end">
                  <InstagramIcon className="w-4 h-4 text-peach" />
                </div>

                <p className="text-[11px] leading-snug line-clamp-3 text-white/90 font-sans italic">
                  "{post.caption}"
                </p>

                <div className="flex items-center gap-3 text-xs text-peach font-medium pt-2 border-t border-white/20">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-current" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" /> {post.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Caption info note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-brown">
            Tag <span className="font-semibold text-terracotta">{BRAND_INFO.instagramHandle}</span> in your photos to be featured in our garden journal.
          </p>
        </div>

      </div>
    </section>
  );
}
