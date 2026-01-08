
import React from 'react';
import { PRACTICE_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <img 
              src="https://picsum.photos/id/1050/800/800" 
              alt="Office" 
              className="relative z-10 rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden sm:block">
              <p className="text-blue-600 font-bold text-3xl">100%</p>
              <p className="text-gray-600 text-sm">Patient Focused Care</p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Serving the Fort Myers Community with Trust</h2>
            <p className="text-lg text-gray-600 mb-6">
              Aspen Dental proudly serves the Fort Myers community with comprehensive family and cosmetic dentistry designed to support long-term oral health. Our practice is built on trust, clinical excellence, and patient comfort.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              From your first visit, our team takes the time to listen, educate, and develop a personalized treatment plan that aligns with your goals, budget, and lifestyle.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">✓</div>
                <div>
                  <h5 className="font-bold text-gray-900">Convenient Location</h5>
                  <p className="text-gray-600">Easily accessible on 6 Mile Cypress Pkwy with ample parking.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">✓</div>
                <div>
                  <h5 className="font-bold text-gray-900">Patient Comfort</h5>
                  <p className="text-gray-600">Modern environment designed to reduce dental anxiety.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="font-semibold text-gray-900 mb-2 italic">"{PRACTICE_INFO.tagline}"</p>
              <p className="text-gray-500">— Our Commitment to You</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
