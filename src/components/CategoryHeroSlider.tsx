'use client';
import { useRFQ } from '@/context/RFQContext';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CategoryHeroSliderProps {
  title: string;
  subtitle: string;
  categoryTag: string;
  images: string[];
  
}

export const CategoryHeroSlider: React.FC<CategoryHeroSliderProps> = ({
  title,
  subtitle,
  categoryTag,
  images }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const slideImages = images && images.length > 0 ? images : [
    '/xelassets/xelgs/banner-1.png',
    '/xelassets/xelgs/banner-2.png',
    '/xelassets/xelgs/banner-3.png'
  ];

  useEffect(() => {
    if (slideImages.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % slideImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slideImages.length]);

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] bg-slate-950 overflow-hidden">
      {slideImages.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeIdx === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 flex items-center">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full text-white space-y-4">
              <div className="inline-block bg-[#0228d2] text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded">
                {categoryTag}
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow">
                {title}
              </h1>
              <p className="text-blue-100 text-base sm:text-xl max-w-2xl font-semibold drop-shadow">
                {subtitle}
              </p>

              <div className="pt-3 flex items-center space-x-4">
                <button
                  onClick={openRFQ}
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-6 py-3 rounded text-xs uppercase tracking-widest transition-all shadow-lg"
                >
                  Request Official Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {slideImages.length > 1 && (
        <>
          <button
            onClick={() => setActiveIdx((prev) => (prev === 0 ? slideImages.length - 1 : prev - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/50 hover:bg-[#0228d2] text-white transition-all border border-white/20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveIdx((prev) => (prev + 1) % slideImages.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/50 hover:bg-[#0228d2] text-white transition-all border border-white/20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
            {slideImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`h-2 rounded-full transition-all ${
                  activeIdx === i ? 'w-8 bg-amber-400' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
