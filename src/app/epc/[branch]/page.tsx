'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { EPC_SERVICES } from '@/data/epcData';
import { EPC_MEDIA } from '@/data/imagesData';
import { CategoryHeroSlider } from '@/components/CategoryHeroSlider';
import { Factory, CheckCircle2, ShieldCheck, ArrowRight, FileText, Cpu, BarChart3 } from 'lucide-react';

interface EPCBranchPageProps {
  onOpenRFQ?: (productName?: string) => void;
}

export default function EPCBranchPage({ onOpenRFQ = () => {} }: EPCBranchPageProps) {
  const params = useParams();
  const branchSlug = params?.branch as string;

  const service = EPC_SERVICES.find(s => s.id === branchSlug) || EPC_SERVICES[0];
  const mediaData = EPC_MEDIA[branchSlug] || EPC_MEDIA['engineering-services'];

  return (
    <div className="w-full bg-white text-slate-900">
      
      {/* Category Specific Hero Slider */}
      <CategoryHeroSlider
        title={service.title}
        subtitle={service.shortDesc}
        categoryTag="DDH IMPEX EPC & ENGINEERING"
        images={mediaData.sliderImages}
        onOpenRFQ={() => onOpenRFQ(service.title)}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Technical Overview & Execution Scope
            </h2>
            <p className="text-slate-700 text-base leading-relaxed">
              {service.fullDesc}
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Factory className="w-5 h-5 text-[#0228d2]" />
                <span>Execution Standards & Deliverables:</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium text-slate-700">
                {service.highlights.map((h, i) => (
                  <div key={i} className="flex items-start space-x-2 bg-white p-3 rounded border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#0228d2] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-slate-900 text-white rounded-2xl p-6 space-y-6 shadow-xl">
            <h3 className="text-xl font-bold text-white">Consult Lead EPC Engineer</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Request a formal engineering proposal for {service.title}. Proposals are dispathed directly to <strong className="text-amber-400">info@ddhimpex.com</strong>.
            </p>

            <div className="space-y-3 text-xs text-slate-300 border-t border-b border-slate-800 py-4">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>ASME, API & ISO Standards</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>3D CAD Plant Modeling</span>
              </div>
            </div>

            <button
              onClick={() => onOpenRFQ(service.title)}
              className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-widest rounded shadow transition-colors flex items-center justify-center space-x-2"
            >
              <FileText className="w-4 h-4" />
              <span>Generate EPC Proposal</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
