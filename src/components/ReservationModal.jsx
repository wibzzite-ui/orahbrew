import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle, Sparkles, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/cafeData';

export default function ReservationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2 Guests',
    date: '2026-10-01',
    time: '18:30',
    seatingPreference: 'Rooftop Terrace',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-espresso/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-lg bg-warm-ivory rounded-3xl shadow-2xl overflow-hidden border border-peach">
        
        {/* Header */}
        <div className="p-6 bg-soft-beige border-b border-peach/60 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-warm-ivory text-xs font-semibold text-terracotta mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Plan Your Visit</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-espresso">
              Table & Event Enquiry
            </h2>
            <p className="text-xs text-muted-brown mt-1">
              4th Floor, Prestige Plaza, Yelahanka
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-warm-ivory text-espresso hover:bg-terracotta hover:text-white transition-colors"
            aria-label="Close reservation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-light-peach text-terracotta flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-espresso">
                Enquiry Request Sent!
              </h3>
              <p className="text-sm text-muted-brown max-w-xs mx-auto">
                Thank you for planning a visit to Orah Brew Garden! In a live website implementation, the team will confirm table availability via phone or WhatsApp.
              </p>

              <div className="p-4 rounded-2xl bg-soft-beige/60 border border-peach/40 text-xs text-left space-y-1 text-espresso">
                <p><strong>Name:</strong> {formData.name || 'Guest'}</p>
                <p><strong>Party Size:</strong> {formData.guests}</p>
                <p><strong>Date & Time:</strong> {formData.date} at {formData.time}</p>
                <p><strong>Seating Area:</strong> {formData.seatingPreference}</p>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3 bg-terracotta text-white rounded-full text-sm font-semibold hover:bg-muted-rose transition-colors"
              >
                Back to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-espresso mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-soft-beige/50 border border-peach rounded-xl text-sm text-espresso focus:outline-none focus:border-terracotta"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-espresso mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-soft-beige/50 border border-peach rounded-xl text-sm text-espresso focus:outline-none focus:border-terracotta"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-espresso mb-1">
                    Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-2.5 bg-soft-beige/50 border border-peach rounded-xl text-sm text-espresso focus:outline-none focus:border-terracotta"
                  >
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3-4 Guests</option>
                    <option>5-8 Guests</option>
                    <option>Large Party (8+)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-espresso mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 bg-soft-beige/50 border border-peach rounded-xl text-sm text-espresso focus:outline-none focus:border-terracotta"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-espresso mb-1">
                    Time
                  </label>
                  <input
                    type="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-2.5 bg-soft-beige/50 border border-peach rounded-xl text-sm text-espresso focus:outline-none focus:border-terracotta"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-espresso mb-1">
                  Seating Preference
                </label>
                <select
                  value={formData.seatingPreference}
                  onChange={(e) => setFormData({ ...formData, seatingPreference: e.target.value })}
                  className="w-full px-4 py-2.5 bg-soft-beige/50 border border-peach rounded-xl text-sm text-espresso focus:outline-none focus:border-terracotta"
                >
                  <option>Rooftop Terrace</option>
                  <option>Cozy Indoor Lounge</option>
                  <option>Garden Window Seat</option>
                  <option>No Preference</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-espresso mb-1">
                  Special Notes (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Birthday celebration, quiet corner request..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 bg-soft-beige/50 border border-peach rounded-xl text-sm text-espresso focus:outline-none focus:border-terracotta"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-terracotta hover:bg-muted-rose text-white rounded-full text-sm font-semibold shadow-md transition-all mt-2"
              >
                Submit Visit Request
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
