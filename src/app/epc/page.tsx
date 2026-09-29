'use client';
import { useRFQ } from '@/context/RFQContext';

import React from 'react';
import Link from 'next/link';
import { EPCSection } from '@/components/EPCSection';
import { Factory, Cpu, BarChart3, Zap, Truck, ArrowRight, ShieldCheck, FileText } from 'lucide-react';

interface PageProps {
  
}

export default function EPCPage({  }: PageProps) {  const { openRFQ } = useRFQ();

  return (
    <div className="pt-24 pb-20 bg-slate-950 text-white min-h-screen">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-b border-slate-800">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Factory className="w-3.5 h-3.5" />
            <span>EPC & ENGINEERING DIVISION</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Turnkey Industrial Engineering & EPC Solutions
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            DDH Impex delivers basic & detailed engineering, strategic procurement, construction management, and turnkey commissioning for chemical, specialty chemical, and commodity manufacturing facilities worldwide.
          </p>
        </div>
      </div>

      <EPCSection />

      {/* Deep Dive Subpage Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
          Explore EPC Division Specializations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <Link href="/epc/engineering" className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group">
            <Cpu className="w-10 h-10 text-amber-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
              Basic & Detailed Engineering
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Bespoke CAD design, process flow diagrams, 3D piping layouts, structural calculations, and LSTK engineering packages.
            </p>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center space-x-1">
              <span>View Engineering Services</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          <Link href="/epc/technology-process-evaluation" className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group">
            <BarChart3 className="w-10 h-10 text-amber-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
              Technology & Process Evaluation
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Systematic technical audit, functionality assessment, ROI analysis, KPI metrics, security & compliance review.
            </p>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center space-x-1">
              <span>Read Audit Details</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          <Link href="/epc/technology-know-how" className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group">
            <Zap className="w-10 h-10 text-amber-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
              Technology Know-How & Infrastructure
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Smart IoT infrastructure, power distribution grids, district cooling networks, and sustainable green building tech.
            </p>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center space-x-1">
              <span>Explore Tech Know-How</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

        </div>
      </div>

    </div>
  );
}
