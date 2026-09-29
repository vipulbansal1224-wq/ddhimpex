'use client';
import { useRFQ } from '@/context/RFQContext';

import React from 'react';
import { PRODUCTS_DATA } from '@/data/productsData';
import { Factory, ShieldCheck, Tag, ArrowRight, Beaker } from 'lucide-react';

interface PageProps {
  
}

export default function IndustrialChemicalsPage({  }: PageProps) {  const { openRFQ } = useRFQ();

  const industrialProducts = PRODUCTS_DATA.filter(p => p.category === 'industrial');

  return (
    <div className="pt-24 pb-20 bg-slate-950 text-white min-h-screen">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-b border-slate-800">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Factory className="w-3.5 h-3.5" />
            <span>INDUSTRIAL & MINING CHEMICALS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Mining Solvents & Fertilizer Compounds
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            High purity chemical reagents for ore flotation, mineral extraction, water treatment, and agricultural enrichment. Compliant with international CAS & safety standards.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-12">
        
        {/* Table View for Heavy Industrial Buyers */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 overflow-hidden">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Beaker className="w-6 h-6 text-amber-400" />
            <span>Industrial Reagent Specifications Table</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-xs font-bold uppercase text-amber-400">
                  <th className="py-3 px-4">Chemical Name</th>
                  <th className="py-3 px-4">CAS Number</th>
                  <th className="py-3 px-4">Subcategory</th>
                  <th className="py-3 px-4">Packaging Specification</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {industrialProducts.map((prod) => (
                  <tr key={prod.id} className="hover:bg-slate-950/60 transition-colors">
                    <td className="py-4 px-4 font-bold text-white">{prod.name}</td>
                    <td className="py-4 px-4 font-mono text-xs text-amber-400">{prod.casNo || 'N/A'}</td>
                    <td className="py-4 px-4 text-xs">
                      <span className="bg-slate-950 px-2.5 py-1 rounded border border-slate-800 text-slate-300">
                        {prod.subcategory}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-xs text-slate-400">{prod.packingType}</td>
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => (prod.name)}
                        className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center space-x-1"
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

      </div>
    </div>
  );
}
