'use client';
import { useRFQ } from '@/context/RFQContext';

import React from 'react';
import { PRODUCTS_DATA } from '@/data/productsData';
import { Sparkles, Beaker, ArrowRight } from 'lucide-react';

interface PageProps {
  
}

export default function AcrylatePage({  }: PageProps) {  const { openRFQ } = useRFQ();

  const acrylateProducts = PRODUCTS_DATA.filter(p => p.subcategory === 'Acrylate');

  return (
    <div className="pt-24 pb-20 bg-white text-slate-900 min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-slate-50 border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-[#0228d2] text-xs font-black uppercase tracking-wider">
            SPECIALITY CHEMICALS
          </span>
          <h1 className="text-4xl font-black text-slate-900 mt-2">
            Acrylate Monomers & Esters
          </h1>
          <p className="text-slate-600 text-sm max-w-2xl mt-2">
            2-Ethylhexyl Acrylate, Butyl Acrylate, Methyl Acrylate, Methacrylic Acid (MAA), and PMMA polymers for industrial resin synthesis and high performance adhesives.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm overflow-hidden">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Beaker className="w-5 h-5 text-[#0228d2]" />
            <span>Acrylate Monomers Specifications</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-bold uppercase text-slate-700 bg-slate-50">
                  <th className="py-3 px-4">Chemical Name</th>
                  <th className="py-3 px-4">CAS No.</th>
                  <th className="py-3 px-4">Packing Type</th>
                  <th className="py-3 px-4 text-right">Inquiry</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {acrylateProducts.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{p.name}</td>
                    <td className="py-3.5 px-4 font-mono text-xs text-[#0228d2]">{p.casNo}</td>
                    <td className="py-3.5 px-4 text-xs">{p.packingType}</td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => (p.name)}
                        className="px-3 py-1.5 rounded bg-[#0228d2] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider inline-flex items-center space-x-1"
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
