
import React, { useState } from 'react';
import { PRACTICE_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">A</div>
              <div>
                <span className="text-xl font-bold text-gray-900 block leading-tight">Aspen Dental</span>
                <span className="text-xs text-blue-600 font-semibold tracking-wider uppercase">Fort Myers</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Services</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="#emergency" className="text-red-600 hover:text-red-700 font-bold transition-colors">Emergency</a>
            <a href={`tel:${PRACTICE_INFO.phone}`} className="text-gray-900 font-semibold">{PRACTICE_INFO.phone}</a>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
              Book Appointment
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-fade-in">
          <div className="px-4 space-y-4">
            <a href="#services" className="block text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#about" className="block text-gray-600 font-medium" onClick={() => setIsOpen(false)}>About</a>
            <a href="#emergency" className="block text-red-600 font-bold" onClick={() => setIsOpen(false)}>Emergency</a>
            <a href={`tel:${PRACTICE_INFO.phone}`} className="block text-gray-900 font-semibold">{PRACTICE_INFO.phone}</a>
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold">
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
