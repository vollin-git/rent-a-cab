import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CarCard from './components/CarCard';
import CarModal from './components/CarModal';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import { cars } from './data/cars';
import { Car } from './types/car';

function App() {
  const [filteredCars, setFilteredCars] = useState<Car[]>(cars);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    let filtered = cars;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(car => 
        car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(car => car.type === selectedType);
    }

    setFilteredCars(filtered);
  }, [searchQuery, selectedType]);

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  const carTypes = [
    { value: 'all', label: 'All Cars' },
    { value: 'hatchback', label: 'Hatchback' },
    { value: 'sedan', label: 'Sedan' },
    { value: 'suv', label: 'SUV' },
    { value: 'luxury', label: 'Luxury' },
    { value: 'compact', label: 'Compact' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header onSearchChange={setSearchQuery} onTypeFilter={setSelectedType} />

      {/* Hero Section */}
      <Hero onSearchChange={setSearchQuery} />

      {/* Car Type Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">Choose Your Car Type</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {carTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => setSelectedType(type.value)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedType === type.value
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Car Listings */}
      <section id="cars" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Premium Car Rental Service in Goa
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover Goa's beautiful beaches, historic churches, and vibrant nightlife with our premium car rental fleet. 
              From budget-friendly hatchbacks to luxury sedans, we have the perfect vehicle for your Goa adventure.
            </p>
          </div>

          {filteredCars.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No cars found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedType('all');
                }}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredCars.map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
                  onClick={() => handleCarClick(car)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Car Modal */}
      <CarModal
        car={selectedCar}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;