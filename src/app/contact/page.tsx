'use client';

import React from 'react';
import { ContactSection } from '@/components/ContactSection';
import { MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-slate-950 text-white min-h-screen">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-b border-slate-800">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>CONTACT & LOCATION</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Get In Touch with DDH Impex
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Please feel free to write to us in case of any queries or suggestions regarding our EPC Business or Supply Chain & Chemical products.
          </p>
        </div>
      </div>

      <ContactSection />
    </div>
  );
}
