'use client';

import React, { useState, useEffect } from 'react';

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fading out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Remove from DOM after 2.5 seconds (allowing 500ms for fade transition)
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="relative flex items-center justify-center w-24 h-24 mb-6">
        {/* Outer spinning rings */}
        <div className="absolute inset-0 rounded-2xl border-4 border-transparent border-t-[#0228d2] border-r-[#0228d2] animate-[spin_2s_linear_infinite]"></div>
        <div className="absolute inset-2 rounded-2xl border-4 border-transparent border-b-emerald-400 border-l-emerald-400 animate-[spin_3s_linear_infinite_reverse]"></div>
        
        {/* Core logo box */}
        <div className="relative w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(2,40,210,0.5)]">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite] skew-x-12"></div>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0228d2] to-blue-400 font-black text-4xl">D</span>
        </div>
      </div>
      
      <div className="flex flex-col items-center">
        <span className="font-black text-3xl tracking-tight text-white leading-none mb-2 animate-pulse">DDH <span className="text-[#0228d2]">IMPEX</span></span>
        <div className="h-1 w-32 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#0228d2] to-emerald-400 w-full animate-[shimmer_2s_infinite]"></div>
        </div>
      </div>
    </div>
  );
}
