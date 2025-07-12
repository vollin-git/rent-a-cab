import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, Users } from 'lucide-react';

const Contact: React.FC = () => {
  const handleCall = () => {
    window.open('tel:+919876543210', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi, I would like to inquire about car rental services in Goa', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:info@fastrentalgoa.com?subject=Car Rental Inquiry', '_self');
  };

  const locations = [
    'Panaji (Capital City)',
    'Margao (South Goa)',
    'Mapusa (North Goa)',
    'Vasco da Gama',
    'Ponda',
    'Bicholim'
  ];

  const services = [
    'Airport Pickup & Drop',
    'Hotel Doorstep Delivery',
    'Railway Station Service',
    'Long Distance Travel',
    'Wedding Car Rental',
    'Corporate Bookings'
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Contact Fast Rental Goa
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to explore Goa? Get in touch with us for instant car rental bookings, 
            pricing information, or any questions about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-sm text-gray-500">Available 24/7 for bookings and support</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MessageCircle className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">WhatsApp</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-sm text-gray-500">Quick responses and instant booking confirmation</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">info@fastrentalgoa.com</p>
                  <p className="text-sm text-gray-500">For detailed inquiries and special requests</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Head Office</h4>
                  <p className="text-gray-600">Shop No. 15, Near Kadamba Bus Stand<br />Panaji, Goa 403001</p>
                  <p className="text-sm text-gray-500">Mon-Sun: 24 hours open</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Operating Hours</h4>
                  <p className="text-gray-600">24/7 Service Available</p>
                  <p className="text-sm text-gray-500">Office: 9 AM - 10 PM daily</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={handleCall}
                className="flex items-center justify-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </button>
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </button>
              <button
                onClick={handleEmail}
                className="flex items-center justify-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </button>
            </div>
          </div>

          {/* Service Areas & Services */}
          <div className="space-y-8">
            {/* Service Areas */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                Service Areas in Goa
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {locations.map((location, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="text-gray-700">{location}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-3">
                *Free pickup and drop service available within city limits
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-600" />
                Our Services
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow-sm flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Offers */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Special Offers</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• 10% discount on bookings above 7 days</li>
                <li>• Free airport pickup for weekly rentals</li>
                <li>• Group booking discounts available</li>
                <li>• Student and senior citizen discounts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold mb-4">Why Trust Fast Rental Goa?</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="font-semibold text-blue-600">Licensed</div>
                <div className="text-gray-600">Govt. Approved Service</div>
              </div>
              <div>
                <div className="font-semibold text-blue-600">Insured</div>
                <div className="text-gray-600">Full Vehicle Insurance</div>
              </div>
              <div>
                <div className="font-semibold text-blue-600">Verified</div>
                <div className="text-gray-600">All Documents Valid</div>
              </div>
              <div>
                <div className="font-semibold text-blue-600">Experienced</div>
                <div className="text-gray-600">10+ Years in Business</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;