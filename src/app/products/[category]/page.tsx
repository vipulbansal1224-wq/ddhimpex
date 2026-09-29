'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { ALL_CATEGORIES_DATA } from '@/data/productsData';
import { HeroSlider } from '@/components/HeroSlider';
import { Beaker, Tag, ArrowRight, ShieldCheck, CheckCircle2, Mail } from 'lucide-react';

interface CategoryPageProps {
  onOpenRFQ?: (productName?: string) => void;
}

export default function CategoryPage({ onOpenRFQ = () => {} }: CategoryPageProps) {
  const params = useParams();
  const categorySlug = params?.category as string;

  const categoryDetail = ALL_CATEGORIES_DATA.find(c => c.slug === categorySlug);

  if (!categoryDetail) {
    return (
      <div className="pt-24 pb-20 bg-white text-slate-900 min-h-screen max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold">Category Not Found</h1>
        <p className="text-slate-600 mt-2">The requested chemical or product division was not found.</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white text-slate-900">
      
      {/* Dedicated Banner Header for this Category */}
      <div 
        className="relative py-20 bg-slate-900 text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${categoryDetail.bannerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 space-y-3 z-10">
          <div className="inline-block bg-[#0228d2] text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded">
            DDH IMPEX {categoryDetail.category.toUpperCase()} DIVISION
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {categoryDetail.name}
          </h1>
          <p className="text-blue-200 text-base sm:text-lg max-w-2xl font-semibold">
            {categoryDetail.heroSubtitle}
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        
        {/* Description & ISO Note */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            About {categoryDetail.name} Supply Capabilities
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {categoryDetail.description}
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-600 pt-2 border-t border-slate-200">
            <span className="flex items-center gap-1.5 text-[#0228d2]">
              <ShieldCheck className="w-4 h-4" /> ISO 9001:2015 International Purity Standards
            </span>
            <span>• Global Freight Logistics</span>
            <span>• Custom Export Packaging</span>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm overflow-hidden space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Beaker className="w-5 h-5 text-[#0228d2]" />
              <span>{categoryDetail.name} Product Index</span>
            </h3>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              {categoryDetail.products.length} Items Listed
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-bold uppercase text-slate-700 bg-slate-50">
                  <th className="py-3 px-4">Item Name</th>
                  <th className="py-3 px-4">CAS Number</th>
                  <th className="py-3 px-4">Packaging Spec</th>
                  <th className="py-3 px-4">Primary Uses</th>
                  <th className="py-3 px-4 text-right">Inquiry</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {categoryDetail.products.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900">{item.name}</td>
                    <td className="py-4 px-4 font-mono text-xs text-[#0228d2] font-semibold">{item.casNo || 'Varies / N/A'}</td>
                    <td className="py-4 px-4 text-xs text-slate-600">{item.packingType}</td>
                    <td className="py-4 px-4 text-xs text-slate-600">
                      <div className="flex flex-wrap gap-1">
                        {item.applications.map((app, i) => (
                          <span key={i} className="bg-slate-100 px-2 py-0.5 rounded text-[11px] text-slate-700">
                            {app}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => onOpenRFQ(item.name)}
                        className="px-4 py-2 rounded bg-[#0228d2] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center space-x-1.5 shadow"
                      >
                        <span>Request Quote</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Direct RFQ CTA */}
        <div className="bg-[#0228d2] text-white rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold">Need Custom Sourcing for {categoryDetail.name}?</h3>
            <p className="text-blue-100 text-xs sm:text-sm mt-1">
              Contact our Ludhiana HQ sales desk for instant technical datasheets & export prices.
            </p>
          </div>
          <button
            onClick={() => onOpenRFQ(categoryDetail.name)}
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-widest rounded shadow transition-colors shrink-0"
          >
            Submit Direct Inquiry
          </button>
        </div>

      </div>

    </div>
  );
}
