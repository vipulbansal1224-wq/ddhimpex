'use client';
import { useRFQ } from '@/context/RFQContext';

import React from 'react';
import { Zap, Wifi, Sun, Droplets, Snowflake, Sprout, ShieldCheck, FileText } from 'lucide-react';

interface PageProps {
  
}

export default function TechKnowHowPage({  }: PageProps) {  const { openRFQ } = useRFQ();

  return (
    <div className="pt-24 pb-20 bg-slate-950 text-white min-h-screen">
      
      {/* Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-b border-slate-800">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>INFRASTRUCTURE MASTER PLANNING</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Technology Know-How & Smart Infrastructure
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Delivering master planning for international finance tech-cities, smart IoT grids, high-capacity district cooling systems, and sustainable water distribution networks.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        
        {/* Tech City Overview */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <h2 className="text-2xl font-bold text-white">
            International Tech-City & Financial Infrastructure
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            In groundbreaking initiatives, DDH Impex delivers master infrastructure planning for tech-cities and financial hubs. Our extensive experience enables us to address complex urban power grids, district cooling networks, and smart IoT connectivity.
          </p>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <Wifi className="w-8 h-8 text-amber-400" />
            <h3 className="text-lg font-bold text-white">Internet of Things (IoT) Grids</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Real-time data collection via connected sensors for automated energy management, traffic control, and smart grid electricity distribution.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <Sun className="w-8 h-8 text-amber-400" />
            <h3 className="text-lg font-bold text-white">Sustainable Building Tech</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Energy-efficient HVAC systems, solar integrations, green roofs, and vertical gardens minimizing carbon footprint in modern complexes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <Zap className="w-8 h-8 text-amber-400" />
            <h3 className="text-lg font-bold text-white">Power Supply Generation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Reliable high-voltage transmission, sub-station generation, and grid distribution ensuring uninterrupted power for industrial plants.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <Droplets className="w-8 h-8 text-blue-400" />
            <h3 className="text-lg font-bold text-white">Water Supply Distribution</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Raw water pumping stations, pipelines, water treatment plants, and master distribution networks for sustainable water usage.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <Snowflake className="w-8 h-8 text-blue-400" />
            <h3 className="text-lg font-bold text-white">District Cooling Systems</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Designing and implementing large-scale, environmentally friendly district cooling plants for optimal climate control.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <Sprout className="w-8 h-8 text-emerald-400" />
            <h3 className="text-lg font-bold text-white">Smart Irrigation Systems</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Optimized water usage systems for agricultural master planning and landscaping, reducing wastage through precision drip networks.
            </p>
          </div>

        </div>

        <div className="text-center pt-8">
          <button
            onClick={() => openRFQ()}
            className="px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm uppercase tracking-wider transition-colors shadow-lg shadow-amber-500/20"
          >
            Consult Infrastructure Master Planner
          </button>
        </div>

      </div>
    </div>
  );
}
