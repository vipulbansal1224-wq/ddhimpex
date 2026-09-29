'use client';
import { useRFQ } from '@/context/RFQContext';

import React from 'react';
import { PRODUCTS_DATA } from '@/data/productsData';
import { Package, Globe, Tag, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PageProps {
  
}

export default function FoodProductsPage({  }: PageProps) {  const { openRFQ } = useRFQ();

  const foodProducts = PRODUCTS_DATA.filter(p => p.category === 'food');

  return (
    <div className="pt-24 pb-20 bg-slate-950 text-white min-h-screen">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-b border-slate-800">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Package className="w-3.5 h-3.5" />
            <span>FMCG & CONSUMER PACKAGED FOODS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Premium Indian Basmati Rice, Spices & Commodities
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Fast-moving consumer packaged food items carefully manufactured and selected to international quality standards under dynamic export brands.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodProducts.map((prod) => (
            <div 
              key={prod.id}
              className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3 inline-block">
                  {prod.subcategory}
                </span>

                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                  {prod.name}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {prod.description}
                </p>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 mb-6 space-y-1">
                  <div><strong>Export Packing Options:</strong></div>
                  <div className="text-slate-400">{prod.packingType}</div>
                </div>
              </div>

              <button
                onClick={() => openRFQ()}
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-2"
              >
                <span>Request Food Export Sample / Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
