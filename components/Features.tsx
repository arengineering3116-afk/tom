
import React from 'react';

const Features: React.FC = () => {
  const highlights = [
    { title: "Experienced Team", desc: "Compassionate dental professionals.", icon: "👩‍⚕️" },
    { title: "Modern Tech", desc: "State-of-the-art dental equipment.", icon: "🔬" },
    { title: "Transparent Pricing", desc: "Flexible payment options available.", icon: "💳" },
    { title: "Gentle Approach", desc: "Patient comfort is our top priority.", icon: "🧘" }
  ];

  return (
    <section className="py-20 bg-blue-900 text-white rounded-t-[50px] lg:rounded-t-[100px] -mt-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {highlights.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4 opacity-90">{item.icon}</div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-blue-200">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
