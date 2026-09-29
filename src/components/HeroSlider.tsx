'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface HeroSliderProps {
  onOpenRFQ?: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenRFQ = () => {} }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const bannerSlides = [
    {
      id: 1,
      image: '/xelassets/xelgs/banner-1.png',
      title: 'Welcome to Ddh Impex',
      subtitle: 'Global Business Consulting, EPC & Chemical Solutions',
      link: '/about'
    },
    {
      id: 2,
      image: '/xelassets/xelgs/banner-2.png',
      title: 'Welcome to Ddh Impex',
      subtitle: 'Basic & Detailed LSTK Plant Engineering',
      link: '/epc/engineering'
    },
    {
      id: 3,
      image: '/xelassets/xelgs/banner-3.png',
      title: 'Welcome to Ddh Impex',
      subtitle: 'Industrial Chemicals & Mining Solvents',
      link: '/products/industrial-chemicals'
    },
    {
      id: 4,
      image: '/xelassets/xelgs/banner-4.png',
      title: 'Welcome to Ddh Impex',
      subtitle: 'Speciality Acrylates, Monomers & Glycols',
      link: '/products/acrylate'
    },
    {
      id: 5,
      image: '/xelassets/xelgs/banner-5.png',
      title: 'Welcome to Ddh Impex',
      subtitle: 'FMCG & Consumer Packaged Food Exports',
      link: '/products/food-products'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [bannerSlides.length]);

  return (
    <section className="relative w-full overflow-hidden bg-slate-950">
      
      {/* Main Banner Slider Container */}
      <div className="relative w-full h-[520px] sm:h-[600px]">
        {bannerSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Dark Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent flex items-center">
              <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full text-white space-y-4">
                
                <div className="inline-block bg-[#0228d2] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
                  DDH IMPEX GROUP
                </div>

                <h2 className="text-4xl sm:text-6xl font-black tracking-tight drop-shadow-md">
                  {slide.title}
                </h2>

                <p className="text-lg sm:text-2xl text-blue-200 font-semibold max-w-xl drop-shadow">
                  {slide.subtitle}
                </p>

                <div className="pt-4 flex items-center space-x-4">
                  <Link
                    href={slide.link}
                    className="inline-flex items-center space-x-2 bg-[#0228d2] hover:bg-blue-700 text-white text-sm font-extrabold uppercase tracking-widest px-8 py-3.5 rounded shadow-lg transition-all"
                  >
                    <span>View More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={onOpenRFQ}
                    className="inline-flex items-center space-x-2 bg-white hover:bg-slate-100 text-slate-950 text-sm font-extrabold uppercase tracking-widest px-6 py-3.5 rounded shadow transition-all"
                  >
                    <span>Get Quote</span>
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}

        {/* Prev / Next Swiper Arrows */}
        <button
          onClick={() => setActiveSlide((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-[#0228d2] text-white flex items-center justify-center transition-all border border-white/20"
          aria-label="Previous banner"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => setActiveSlide((prev) => (prev + 1) % bannerSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-[#0228d2] text-white flex items-center justify-center transition-all border border-white/20"
          aria-label="Next banner"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Swiper Thumbs Preview Bar - Exact DDH Impex design */}
      <div className="bg-slate-900 border-t border-slate-800 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-3 sm:space-x-6 overflow-x-auto py-1">
          {bannerSlides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setActiveSlide(idx)}
              className={`relative rounded-lg overflow-hidden border-2 transition-all duration-300 shrink-0 ${
                activeSlide === idx ? 'border-amber-400 scale-105 shadow-md shadow-amber-400/20' : 'border-slate-700 opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={slide.image}
                alt={`Thumbnail ${slide.id}`}
                className="w-24 sm:w-36 h-14 sm:h-20 object-cover"
              />
              <span className="absolute bottom-1 left-1 bg-black/80 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                Banner 0{slide.id}
              </span>
            </button>
          ))}
        </div>
      </div>

    </section>
  );
};
