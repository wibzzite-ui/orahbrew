import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import MenuSection from './components/MenuSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import Highlights from './components/Highlights';
import LocationSection from './components/LocationSection';
import InstagramSection from './components/InstagramSection';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-warm-ivory text-espresso antialiased">
      {/* Top Navigation */}
      <Navbar onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero onOpenReservation={() => setIsReservationOpen(true)} />

        {/* Section 2: Story / Introduction */}
        <OurStory />

        {/* Section 3: Signature Menu */}
        <MenuSection />

        {/* Section 4: Ambience & Gallery */}
        <GallerySection />

        {/* Section 5: Testimonials & Reviews */}
        <TestimonialsSection />

        {/* Section 6: Experience Highlights */}
        <Highlights />

        {/* Section 6: Location & Visit */}
        <LocationSection onOpenReservation={() => setIsReservationOpen(true)} />

        {/* Section 7: Instagram / Social */}
        <InstagramSection />
      </main>

      {/* Footer */}
      <Footer onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Interactive Reservation / Visit Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}
