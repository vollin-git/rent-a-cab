import React from 'react';
import { Search, MapPin } from 'lucide-react';

interface HeroProps {
  onSearchChange: (query: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearchChange }) => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Best Car Rental Service in Goa
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up">
            Explore the beautiful beaches and attractions of Goa with our premium car rental service
          </p>
          
          <div className="flex items-center justify-center text-lg mb-12 animate-slide-up">
            <MapPin className="w-6 h-6 mr-2" />
            <span>Serving all major locations in Goa</span>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for cars (e.g., Swift, SUV, Luxury)"
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-700 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="opacity-90">Round the clock customer support for all your queries</p>
              </div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
                <p className="opacity-90">Competitive rates with no hidden charges</p>
              </div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
                <p className="opacity-90">From budget cars to luxury vehicles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;