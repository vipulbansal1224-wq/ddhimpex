'use client';
import { useRFQ } from '@/context/RFQContext';

import React from 'react';
import { useParams } from 'next/navigation';
import { ALL_CATEGORIES_DATA } from '@/data/productsData';
import { CATEGORY_MEDIA } from '@/data/imagesData';
import { CategoryHeroSlider } from '@/components/CategoryHeroSlider';
import { Beaker, Tag, ArrowRight, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

interface CategoryPageProps {
  
}

export default function CategoryPage({  }: CategoryPageProps) {  const { openRFQ } = useRFQ();

  const params = useParams();
  const categorySlug = params?.category as string;

  const categoryDetail = ALL_CATEGORIES_DATA.find(c => c.slug === categorySlug) || ALL_CATEGORIES_DATA[0];
  const mediaData = CATEGORY_MEDIA[categorySlug] || CATEGORY_MEDIA['mining-chemicals'];

  return (
    <div className="w-full bg-white text-slate-900">
      
      {/* Category Specific Hero Slider Carousel */}
      <CategoryHeroSlider
        title={categoryDetail.name}
        subtitle={categoryDetail.heroSubtitle}
        categoryTag={`DDH IMPEX ${categoryDetail.category.toUpperCase()} DIVISION`}
        images={mediaData.sliderImages}
        
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        
        {/* Description & ISO Standards */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            About {categoryDetail.name} Supply & Export Capabilities
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {categoryDetail.description}
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-600 pt-2 border-t border-slate-200">
            <span className="flex items-center gap-1.5 text-[#0228d2]">
              <ShieldCheck className="w-4 h-4" /> ISO 9001:2015 International Purity Standards
            </span>
            <span>• Direct Dispatched Proposals to info@ddhimpex.com</span>
            <span>• Global Freight Logistics & Port Sourcing</span>
          </div>
        </div>

        {/* Product Cards with Dedicated High-Res Images */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-2">
              <Beaker className="w-6 h-6 text-[#0228d2]" />
              <span>{categoryDetail.name} Products Showcase</span>
            </h3>
            <span className="text-xs font-bold text-[#0228d2] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
              {categoryDetail.products.length} Products Listed
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryDetail.products.map((prod) => {
              const prodImg = mediaData.productImages[prod.id] || 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80';
              return (
                <div 
                  key={prod.id}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Product Image */}
                    <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                      <img 
                        src={prodImg} 
                        alt={prod.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 right-3 bg-[#0228d2] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded shadow">
                        {prod.subcategory}
                      </span>
                      {prod.casNo && (
                        <span className="absolute bottom-3 left-3 bg-black/75 text-amber-300 font-mono text-[10px] px-2 py-0.5 rounded backdrop-blur-sm">
                          CAS: {prod.casNo}
                        </span>
                      )}
                    </div>

                    <div className="p-6 space-y-3">
                      <h4 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0228d2] transition-colors">
                        {prod.name}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {prod.description}
                      </p>

                      <div className="p-2.5 rounded bg-slate-50 border border-slate-200 text-xs text-slate-700">
                        <strong>Packing:</strong> {prod.packingType}
                      </div>

                      <div className="space-y-1 pt-1">
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Applications:</span>
                        <div className="flex flex-wrap gap-1">
                          {prod.applications.map((app, i) => (
                            <span key={i} className="bg-blue-50 text-[#0228d2] text-[10px] font-semibold px-2 py-0.5 rounded">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quote Trigger */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => (prod.name)}
                      className="w-full py-3 rounded-xl bg-[#0228d2] hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow flex items-center justify-center space-x-2"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Request Proposal / Quote</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Specifications Table */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm overflow-hidden space-y-4">
          <h3 className="text-lg font-bold text-slate-900">
            {categoryDetail.name} Quick Technical Data Table
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-bold uppercase text-slate-700 bg-slate-50">
                  <th className="py-3 px-4">Chemical Name</th>
                  <th className="py-3 px-4">CAS Number</th>
                  <th className="py-3 px-4">Packing Type</th>
                  <th className="py-3 px-4 text-right">Proposal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 text-xs">
                {categoryDetail.products.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{item.name}</td>
                    <td className="py-3.5 px-4 font-mono text-[#0228d2]">{item.casNo || 'Varies'}</td>
                    <td className="py-3.5 px-4">{item.packingType}</td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => (item.name)}
                        className="px-3 py-1.5 rounded bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold uppercase text-[11px] inline-flex items-center space-x-1 shadow"
                      >
                        <span>RFQ</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Proposal Dispatched to info@ddhimpex.com Banner */}
        <div className="bg-[#0228d2] text-white rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold">Request Official Export Proposal for {categoryDetail.name}</h3>
            <p className="text-blue-100 text-xs sm:text-sm mt-1">
              Every request proposal generated is dispatched to <strong className="text-amber-300">info@ddhimpex.com</strong> for instant response.
            </p>
          </div>
          <button
            onClick={() => (categoryDetail.name)}
            className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-widest rounded shadow transition-colors shrink-0"
          >
            Generate Proposal Now
          </button>
        </div>

      </div>

    </div>
  );
}
