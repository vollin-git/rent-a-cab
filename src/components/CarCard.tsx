import React from 'react';
import { Car } from '../types/car';
import { Users, Fuel, Settings, Star, Phone, MessageCircle } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onClick: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onClick }) => {
  const handleBooking = (e: React.MouseEvent, type: 'call' | 'whatsapp') => {
    e.stopPropagation();
    if (type === 'call') {
      window.open(`tel:+919876543210`, '_self');
    } else {
      window.open(`https://wa.me/919876543210?text=Hi, I would like to book ${car.name} for rental in Goa`, '_blank');
    }
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            car.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {car.available ? 'Available' : 'Booked'}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{car.rating} ({car.reviews})</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-gray-600 text-sm mb-4">
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{car.seats} seats</span>
          </div>
          <div className="flex items-center">
            <Fuel className="w-4 h-4 mr-1" />
            <span className="capitalize">{car.fuel}</span>
          </div>
          <div className="flex items-center">
            <Settings className="w-4 h-4 mr-1" />
            <span className="capitalize">{car.transmission}</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {car.features.slice(0, 3).map((feature, index) => (
              <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {feature}
              </span>
            ))}
            {car.features.length > 3 && (
              <span className="text-xs text-gray-500">+{car.features.length - 3} more</span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-blue-600">₹{car.pricePerDay}</span>
            <span className="text-gray-600 text-sm">/day</span>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={(e) => handleBooking(e, 'call')}
              className="flex items-center space-x-1 bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call</span>
            </button>
            <button
              onClick={(e) => handleBooking(e, 'whatsapp')}
              className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;