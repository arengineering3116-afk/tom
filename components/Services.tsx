
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Dental Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From routine checkups to complex restorations, we offer a full suite of services to keep your smile healthy and bright.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className={`p-8 rounded-3xl transition-all duration-300 ${
                service.category === 'Emergency' 
                  ? 'bg-red-50 border-2 border-red-100 hover:shadow-red-100' 
                  : 'bg-gray-50 hover:bg-white hover:shadow-xl border border-transparent'
              } group`}
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
                {service.icon}
              </div>
              <h3 className={`text-2xl font-bold mb-3 ${service.category === 'Emergency' ? 'text-red-700' : 'text-gray-900'}`}>
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <svg className={`h-4 w-4 mr-2 ${service.category === 'Emergency' ? 'text-red-500' : 'text-blue-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              {service.category === 'Emergency' && (
                <button className="mt-8 w-full bg-red-600 text-white font-bold py-3 rounded-xl hover:bg-red-700 transition-colors">
                  Get Immediate Help
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
