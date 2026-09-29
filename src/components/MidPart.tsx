'use client';

import React from 'react';

export const MidPart: React.FC = () => {
  return (
    <section className="py-16 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Original Site about.png Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img 
                src="/xelassets/xelgs/about.png" 
                alt="About DDH Impex" 
                className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Heading, Paragraph & Vision/Mission */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                About DDH Impex
              </h1>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Welcome to DDH Impex, where creativity and collaboration come together to produce exceptional quality products. Our innovative and motivated team is dedicated to the export and distribution of fast-moving consumer packaged food items across global markets. At DDH Impex, we prioritize international quality standards in the careful selection and manufacturing of our products, which are marketed under dynamic brands that cater to a wide range of consumer needs.
              </p>
            </div>

            {/* Vision & Mission Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              
              {/* Vision Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <img src="/xelassets/xelgs/vision.png" alt="Vision Icon" className="w-10 h-10 object-contain" />
                  <h2 className="text-xl font-bold text-slate-900">Vision</h2>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  To be a globally recognized leader in business consulting, supply chain management, and engineering services, driving innovation and excellence in every project we undertake.
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <img src="/xelassets/xelgs/mission.png" alt="Mission Icon" className="w-10 h-10 object-contain" />
                  <h2 className="text-xl font-bold text-slate-900">Mission</h2>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  To provide our clients with innovative and customized solutions that enhance their business performance and operational efficiency.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
