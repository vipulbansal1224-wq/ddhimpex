'use client';
import { useRFQ } from '@/context/RFQContext';

import React from 'react';
import Link from 'next/link';
import { Cpu, CheckCircle2, ShieldCheck, FileText, ArrowRight, Layers, Settings, Wrench } from 'lucide-react';

interface PageProps {
  
}

export default function EngineeringPage({  }: PageProps) {  const { openRFQ } = useRFQ();

  return (
    <div className="pt-24 pb-20 bg-slate-950 text-white min-h-screen">
      
      {/* Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-b border-slate-800">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>ENGINEERING BUSINESS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Basic & Detailed Engineering Services
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            DDH Impex maintains a dedicated engineering team and office for handling complex EPC projects, using state-of-the-art engineering software for bespoke design and plant optimization.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        
        {/* Core Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Bespoke Engineering & 3D CAD Modeling
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Our engineering division handles complete plant layout, process flow design, piping isometric diagrams, electrical & instrumentation schematics, and structural stress analyses for industrial processing plants.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start space-x-3">
                <Layers className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-bold text-white">Basic Engineering Package (BEP)</h3>
                  <p className="text-xs text-slate-400 mt-1">Process Flow Diagrams (PFD), Piping & Instrumentation Diagrams (P&ID), mass & energy balances, and equipment sizing.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start space-x-3">
                <Settings className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-bold text-white">Detailed Engineering Package (DEP)</h3>
                  <p className="text-xs text-slate-400 mt-1">3D CAD plant modeling, piping stress analysis, civil structural layouts, single line electrical diagrams, and instrument datasheets.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start space-x-3">
                <Wrench className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-bold text-white">Lumpsum Turnkey (LSTK) Execution</h3>
                  <p className="text-xs text-slate-400 mt-1">Single-point responsibility from procurement and fabrication to site construction and trial runs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Action Card */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6">
            <h3 className="text-xl font-bold text-white">Engineering Specs Quick Desk</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Consult with DDH Impex lead design engineers regarding your project scope, site constraints, or plant capacity expansion.
            </p>

            <div className="space-y-3 border-t border-b border-slate-800 py-4 text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Dedicated EPC Project Office</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Implementation of latest 3D CAD software</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Compliance with global ASME / API standards</span>
              </div>
            </div>

            <button
              onClick={() => ('Basic & Detailed Engineering')}
              className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-2"
            >
              <FileText className="w-4 h-4" />
              <span>Request Engineering Proposal</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
