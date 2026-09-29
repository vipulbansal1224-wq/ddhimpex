'use client';
import { useRFQ } from '@/context/RFQContext';

import React from 'react';
import { PRODUCTS_DATA } from '@/data/productsData';
import { Sparkles, ShieldCheck, Tag, ArrowRight, Beaker } from 'lucide-react';

interface PageProps {
  
}

export default function SpecialtyChemicalsPage({  }: PageProps) {  const { openRFQ } = useRFQ();

  const specialtyProducts = PRODUCTS_DATA.filter(p => p.category === 'specialty');

  return (
    <div className="pt-24 pb-20 bg-slate-950 text-white min-h-screen">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-b border-slate-800">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SPECIALTY CHEMICALS & ACRYLATES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Acrylate Monomers & Glycol Derivatives
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Essential acrylic monomers, ester derivatives, plasticizers, and high-performance polymer additives for adhesives, coatings, resins, and optical synthetics.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-12">
        
        {/* Table View */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 overflow-hidden">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Beaker className="w-6 h-6 text-blue-400" />
            <span>Specialty Acrylate & Monomer Directory</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-xs font-bold uppercase text-blue-400">
                  <th className="py-3 px-4">Chemical Name</th>
                  <th className="py-3 px-4">CAS Number</th>
                  <th className="py-3 px-4">Packaging Type</th>
                  <th className="py-3 px-4">Key Application</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {specialtyProducts.map((prod) => (
                  <tr key={prod.id} className="hover:bg-slate-950/60 transition-colors">
                    <td className="py-4 px-4 font-bold text-white">{prod.name}</td>
                    <td className="py-4 px-4 font-mono text-xs text-blue-400">{prod.casNo || 'N/A'}</td>
                    <td className="py-4 px-4 text-xs text-slate-400">{prod.packingType}</td>
                    <td className="py-4 px-4 text-xs text-slate-300">{prod.applications[0]}</td>
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => openRFQ()}
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
