'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { EPC_SERVICES } from '@/data/epcData';
import { Factory, CheckCircle2, ShieldCheck, ArrowRight, FileText } from 'lucide-react';

interface EPCBranchPageProps {
  onOpenRFQ?: (productName?: string) => void;
}

export default function EPCBranchPage({ onOpenRFQ = () => {} }: EPCBranchPageProps) {
  const params = useParams();
  const branchSlug = params?.branch as string;

  const service = EPC_SERVICES.find(s => s.id === branchSlug) || EPC_SERVICES[0];

  return (
    <div className="w-full bg-white text-slate-900">
      
      {/* Banner */}
      <div 
        className="relative py-20 bg-slate-900 text-white bg-cover bg-center"
        style={{ backgroundImage: `url(/xelassets/xelgs/banner-2.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 space-y-3 z-10">
          <div className="inline-block bg-[#0228d2] text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded">
            DDH IMPEX EPC DIVISION
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {service.title}
          </h1>
          <p className="text-blue-200 text-base sm:text-lg max-w-2xl font-semibold">
            {service.shortDesc}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        
        {/* Main Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Overview & Scope of Services
            </h2>
            <p className="text-slate-700 text-base leading-relaxed">
              {service.fullDesc}
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Key Execution Highlights:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                {service.highlights.map((h, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0228d2] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Consult EPC Lead Engineer</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Have specific plant capacity, layout, or technology requirements? Request a technical proposal directly from DDH Impex.
            </p>

            <div className="space-y-3 text-xs text-slate-600 border-t border-b border-slate-200 py-4">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#0228d2]" />
                <span>ASME & ISO Standard Compliance</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#0228d2]" />
                <span>Single-Point LSTK Responsibility</span>
              </div>
            </div>

            <button
              onClick={() => onOpenRFQ(service.title)}
              className="w-full py-3.5 bg-[#0228d2] hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-widest rounded shadow transition-colors flex items-center justify-center space-x-2"
            >
              <FileText className="w-4 h-4" />
              <span>Request Technical Proposal</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
