'use client';

import React from 'react';
import Link from 'next/link';
import { EPC_SERVICES, EPC_PROCESS_STEPS } from '@/data/epcData';
import { ArrowRight, Factory, Cpu, BarChart3, Zap, Truck, CheckCircle } from 'lucide-react';

export const EPCSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu': return Cpu;
      case 'BarChart3': return BarChart3;
      case 'Zap': return Zap;
      case 'Factory': return Factory;
      case 'Truck': return Truck;
      default: return Factory;
    }
  };

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-amber-500/5 rounded-full filter blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Factory className="w-3.5 h-3.5" />
            <span>EPC & TURNKEY ENGINEERING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            End-to-End Industrial Project Solutions
          </h2>

          <p className="text-slate-400 text-base leading-relaxed">
            DDH Impex specializes in complex industrial projects, offering seamless execution from initial technology evaluation and 3D CAD engineering to procurement, construction, commissioning, and final facility handover.
          </p>
        </div>

        {/* EPC Process 4-Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {EPC_PROCESS_STEPS.map((step, idx) => (
            <div 
              key={idx}
              className="relative p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group"
            >
              <div className="text-4xl font-black text-amber-400/20 group-hover:text-amber-400/40 transition-colors mb-3">
                {step.step}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EPC_SERVICES.map((service) => {
            const IconComp = getIcon(service.iconName);
            return (
              <div 
                key={service.id}
                className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 border-t border-slate-800/80 pt-4 mb-6">
                    {service.highlights.map((item, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/epc/${service.id}`}
                  className="inline-flex items-center space-x-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider group-hover:translate-x-1 transition-all"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
