import React from 'react';
import { Car } from '../types/car';
import { X, Users, Fuel, Settings, Star, Phone, MessageCircle, Check, MapPin, Shield, Clock } from 'lucide-react';

interface CarModalProps {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
}

const CarModal: React.FC<CarModalProps> = ({ car, isOpen, onClose }) => {
  if (!isOpen || !car) return null;

  const handleBooking = (type: 'call' | 'whatsapp') => {
    if (type === 'call') {
      window.open(`tel:+919876543210`, '_self');
    } else {
      window.open(`https://wa.me/919876543210?text=Hi, I would like to book ${car.name} for rental in Goa. Please provide me with availability and pricing details.`, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div 
          className="fixed inset-0 transition-opacity bg-black bg-opacity-50 backdrop-blur-sm" 
          onClick={onClose}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

        <div className="inline-block w-full max-w-4xl p-0 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl animate-modal-enter">
          {/* Header */}
          <div className="relative">
            <img 
              src={car.image} 
              alt={car.name}
              className="w-full h-64 md:h-80 object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
            <div className="absolute bottom-4 left-4">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                car.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {car.available ? 'Available Now' : 'Currently Booked'}
              </span>
            </div>
          </div>

          <div className="p-6 md:p-8">
            {/* Car Details */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-gray-800">{car.name}</h2>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-lg font-semibold ml-1">{car.rating}</span>
                  <span className="text-gray-600 ml-1">({car.reviews} reviews)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <div className="text-sm text-gray-600">Seating</div>
                  <div className="font-semibold">{car.seats} People</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Fuel className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <div className="text-sm text-gray-600">Fuel Type</div>
                  <div className="font-semibold capitalize">{car.fuel}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Settings className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <div className="text-sm text-gray-600">Transmission</div>
                  <div className="font-semibold capitalize">{car.transmission}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Shield className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <div className="text-sm text-gray-600">Category</div>
                  <div className="font-semibold capitalize">{car.type}</div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Car Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rental Information */}
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-blue-800">Rental Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-blue-600 mr-2" />
                  <span>Pickup: All Goa Locations</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-blue-600 mr-2" />
                  <span>Available: 24/7</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-blue-600 mr-2" />
                  <span>Fully Insured</span>
                </div>
              </div>
            </div>

            {/* Pricing and Booking */}
            <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-50 rounded-lg">
              <div className="mb-4 md:mb-0">
                <span className="text-3xl font-bold text-blue-600">₹{car.pricePerDay}</span>
                <span className="text-gray-600 text-lg">/day</span>
                <p className="text-sm text-gray-500 mt-1">*Inclusive of taxes and insurance</p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => handleBooking('call')}
                  className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </button>
                <button
                  onClick={() => handleBooking('whatsapp')}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Popular Destinations */}
            <div className="mt-6 p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Popular Destinations in Goa</h4>
              <p className="text-sm text-gray-600">
                Perfect for visiting: Baga Beach, Calangute Beach, Fort Aguada, Old Goa Churches, 
                Anjuna Market, Dudhsagar Falls, Spice Plantations, and more!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarModal;