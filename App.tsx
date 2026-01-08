
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import About from './components/About';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <About />
        
        {/* Insurance Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[40px] shadow-xl overflow-hidden flex flex-col lg:flex-row">
              <div className="p-12 lg:w-3/5">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Insurance & Payment Options</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We work with many major dental insurance plans and offer flexible payment options for patients without insurance. Our team is happy to help you understand your benefits and maximize your coverage.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3 text-gray-700 font-semibold">
                    <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">✓</span>
                    Most PPO plans accepted
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 font-semibold">
                    <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">✓</span>
                    Transparent pricing
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 font-semibold">
                    <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">✓</span>
                    Financing options available
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 font-semibold">
                    <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">✓</span>
                    Affordable care
                  </div>
                </div>
              </div>
              <div className="bg-blue-600 p-12 lg:w-2/5 text-white flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">New Patients Welcome</h3>
                <p className="mb-6 opacity-90">What to expect: Comprehensive exam, digital imaging, personalized treatment plan, and clear cost discussions.</p>
                <button className="bg-white text-blue-600 font-bold py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
                  Learn About First Visit
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Us in Fort Myers</h2>
            <p className="text-lg text-gray-600 mb-12">9330 Ben Pratt / 6 Mile Cypress Pkwy, Fort Myers, FL 33966</p>
            <div className="rounded-3xl overflow-hidden shadow-2xl h-96 relative group">
              <img 
                src="https://picsum.photos/id/1053/1600/600" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold shadow-2xl hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110">
                  Open in Google Maps
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl font-bold mb-6 text-white">Your smile deserves expert care.</h2>
            <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">Join the Aspen Dental family today and experience the difference of personalized, modern dentistry.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl">
                Book Online Now
              </button>
              <button className="bg-blue-700 text-white border-2 border-blue-500 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-800 transition-all shadow-xl">
                Call for Appointment
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <Chatbot />

      {/* Animation Keyframes */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out forwards;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
