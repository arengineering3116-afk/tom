
import React from 'react';
import { PRACTICE_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="relative z-10 lg:w-1/2">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
            Accepting New Patients
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 font-bold leading-tight mb-6">
            Your Trusted Dentist in <span className="text-blue-600">Fort Myers</span>, Florida
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            At Aspen Dental in Fort Myers, we provide high-quality, affordable dental care in a comfortable, modern environment. Personalized care for every smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Schedule Appointment
            </button>
            <a 
              href={`tel:${PRACTICE_INFO.phone}`}
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.47 5.47l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call {PRACTICE_INFO.phone}
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500 italic">
            👉 New patients welcome | Same-day appointments available
          </p>
        </div>
      </div>
      
      {/* Background Graphic Decor */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-blue-50 to-transparent"></div>
        <img 
          src="https://picsum.photos/id/1012/1200/800" 
          alt="Dental Patient Smiling" 
          className="w-full h-full object-cover opacity-60 rounded-bl-[100px]"
        />
      </div>
    </div>
  );
};

export default Hero;
