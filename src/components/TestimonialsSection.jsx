import React from 'react';
import { Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "Sneha Rao",
    text: "Perfect ambience and awesome food combo. Quick service with friendly staff. Overall a good experience with family. We ordered chicken and lemon soup, pesto chicken, chicken and leek risotto. Everything we tried was new. It was great. The only drawback was that the music played was a bit loud."
  },
  {
    id: 2,
    name: "Vishal Gupta",
    text: "Okay, let me start.. Still confused from where to start.. Firstly, the place where you feel like all the stress is released.. There is no stress left in your life.. Ofcourse, I am talking about the ambience. Its so lovely and scenic.. Now secondly, the food... Ofcourse, without good food the point of ambience is of no use.. So the food was ultimately delicious."
  },
  {
    id: 3,
    name: "Anoop Kumar",
    text: "Food was good. We ordered for vegetable garden pizza which was really good. Dessert was yummy, the rose trees leches Ambiance is excellent. Overall it's good but bit pricy."
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-warm-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-8 bg-terracotta" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
              TESTIMONIALS & REVIEWS
            </span>
            <span className="h-[1px] w-8 bg-terracotta" />
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-espresso">
            Words From <span className="italic font-normal text-terracotta">Our Guests</span>
          </h2>
          
          <p className="text-sm sm:text-base text-muted-brown">
            A glimpse into the experiences shared by people who have visited Orah Brew Garden.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((review) => (
            <div 
              key={review.id}
              className="bg-sage/10 border border-sage/30 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <Quote className="w-8 h-8 text-terracotta mb-6 opacity-80" />
                <p className="font-serif text-espresso text-lg sm:text-xl leading-relaxed italic mb-8">
                  "{review.text}"
                </p>
              </div>
              
              <div>
                <div className="h-[1px] w-12 bg-peach mb-4" />
                <p className="font-sans font-semibold text-espresso text-sm uppercase tracking-wider">
                  {review.name}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
