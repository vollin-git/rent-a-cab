import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const handleCall = () => {
    window.open('tel:+919876543210', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210', '_blank');
  };

  const quickLinks = [
    { name: 'Car Rental Goa', href: '#cars' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Booking', href: '#cars' }
  ];

  const carTypes = [
    'Hatchback Rental Goa',
    'Sedan Rental Goa', 
    'SUV Rental Goa',
    'Luxury Car Rental Goa'
  ];

  const locations = [
    'Car Rental Panaji',
    'Car Rental Margao',
    'Car Rental Calangute',
    'Car Rental Baga',
    'Airport Car Rental',
    'Railway Station Pickup'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Fast Rental Goa</h3>
            <p className="text-gray-300 mb-4">
              Your trusted car rental partner in Goa. Explore the beautiful state with our premium 
              fleet of vehicles at the best prices. Available 24/7 for your convenience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Car Types */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Car Types</h4>
            <ul className="space-y-2">
              {carTypes.map((type, index) => (
                <li key={index}>
                  <a 
                    href="#cars" 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {type}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">info@fastrentalgoa.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                <span className="text-gray-300 text-sm">
                  Near Kadamba Bus Stand<br />
                  Panaji, Goa 403001
                </span>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <button
                onClick={handleCall}
                className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors text-sm"
              >
                Call Now
              </button>
              <button
                onClick={handleWhatsApp}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
              >
                WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Service Locations */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h4 className="text-lg font-semibold mb-4">Service Locations in Goa</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {locations.map((location, index) => (
              <a 
                key={index}
                href="#contact" 
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                {location}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Fast Rental Goa. All rights reserved. | Car Rental Services in Goa | Best Car Rental Goa
          </div>
          <div className="text-gray-400 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors mr-4">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* SEO Keywords */}
        <div className="mt-4 text-xs text-gray-500">
          Keywords: Car rental Goa, Rent a car Goa, Self drive cars Goa, Car hire Goa, 
          Goa car rental, Cheap car rental Goa, Airport car rental Goa, 
          Car rental North Goa, Car rental South Goa
        </div>
      </div>
    </footer>
  );
};

export default Footer;