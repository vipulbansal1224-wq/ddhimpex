'use client';

import React, { useState, useEffect } from 'react';

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [textVisible, setTextVisible] = useState(true);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    // 1. Fade out the text after 1 second
    const textTimer = setTimeout(() => {
      setTextVisible(false);
    }, 1200);

    // 2. Slide the whole curtain up after 1.8 seconds
    const slideTimer = setTimeout(() => {
      setSlideUp(true);
    }, 1800);

    // 3. Unmount completely after 2.8 seconds
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(slideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-[#0f172a] flex items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        slideUp ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div 
        className={`flex items-center space-x-3 transition-opacity duration-500 ${
          textVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-12 h-12 bg-[#0228d2] flex items-center justify-center rounded">
          <span className="text-white font-black text-3xl">D</span>
        </div>
        <div className="flex flex-col">
          <span className="font-black text-3xl tracking-tight text-white leading-none">DDH <span className="text-[#0228d2]">IMPEX</span></span>
          <span className="text-[10px] font-bold text-slate-400 tracking-[0.3em] uppercase mt-1">Global Supply Chain</span>
        </div>
      </div>
    </div>
  );
}
