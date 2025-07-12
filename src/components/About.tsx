import React from 'react';
import { MapPin, Users, Clock, Shield, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: MapPin,
      title: 'All Goa Locations',
      description: 'Pick up and drop off anywhere in North and South Goa including airports, hotels, and railway stations.'
    },
    {
      icon: Clock,
      title: '24/7 Service',
      description: 'Round the clock customer support and roadside assistance. Emergency services available anytime.'
    },
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'All our vehicles are comprehensively insured for your safety and peace of mind.'
    },
    {
      icon: Award,
      title: 'Best Rates',
      description: 'Competitive pricing with no hidden charges. Get the best value for your money in Goa.'
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Our team has over 10 years of experience in car rental services across Goa.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We go the extra mile to ensure a memorable trip.'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why Choose Fast Rental Goa?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are Goa's leading car rental service with a commitment to providing safe, reliable, 
            and affordable transportation solutions for tourists and locals alike. Explore the beauty 
            of Goa with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* About Goa Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Discover the Magic of Goa
              </h3>
              <p className="text-gray-600 mb-4">
                Goa, India's smallest state, is a tropical paradise known for its pristine beaches, 
                Portuguese colonial architecture, vibrant nightlife, and rich cultural heritage. 
                With our reliable car rental service, you can explore:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Beautiful beaches like Baga, Calangute, and Palolem</li>
                <li>• Historic churches and forts in Old Goa</li>
                <li>• Spice plantations and wildlife sanctuaries</li>
                <li>• Vibrant markets and local festivals</li>
                <li>• Adventure sports and water activities</li>
                <li>• Authentic Goan cuisine and seafood</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Goa Beach"
                className="rounded-lg shadow-md"
              />
              <img 
                src="https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Goa Church"
                className="rounded-lg shadow-md mt-8"
              />
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Cars Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;