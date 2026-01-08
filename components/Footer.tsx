
import React from 'react';
import { PRACTICE_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">A</div>
              <div>
                <span className="text-xl font-bold block leading-tight">Aspen Dental</span>
                <span className="text-xs text-blue-400 font-semibold tracking-wider uppercase">Fort Myers</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Comprehensive Dental Care You Can Trust. Serving Fort Myers and surrounding communities with excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">f</a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">in</a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">ig</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Patient Forms</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">New Patient Offer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-blue-400">📍</span>
                {PRACTICE_INFO.address}
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400">📞</span>
                {PRACTICE_INFO.phone}
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400">✉️</span>
                {PRACTICE_INFO.email}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Emergency</h4>
            <div className="p-4 bg-red-900/30 border border-red-800 rounded-xl">
              <p className="text-sm text-red-200 mb-2">Experiencing pain? We offer same-day appointments.</p>
              <a href={`tel:${PRACTICE_INFO.phone}`} className="text-lg font-bold text-white hover:text-red-400">Call Now</a>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {PRACTICE_INFO.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
