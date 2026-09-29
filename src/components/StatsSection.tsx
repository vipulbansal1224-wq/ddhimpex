'use client';

import React from 'react';
import { Award, Globe2, Building2, ShieldCheck, CheckCircle, TrendingUp } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      value: "100+",
      label: "Industrial EPC Projects",
      subtext: "LSTK Turnkey Execution",
      icon: Building2,
      color: "text-amber-400"
    },
    {
      value: "50+",
      label: "Global Export Markets",
      subtext: "Americas, Europe, Asia & Africa",
      icon: Globe2,
      color: "text-emerald-400"
    },
    {
      value: "100%",
      label: "Quality Compliance",
      subtext: "ISO 9001:2015 International Standards",
      icon: ShieldCheck,
      color: "text-blue-400"
    },
    {
      value: "25+",
      label: "Years Combined Leadership",
      subtext: "Specialized Engineering & Supply Chain",
      icon: TrendingUp,
      color: "text-amber-400"
    }
  ];

  return (
    <section className="py-16 bg-slate-900 border-y border-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-slate-900 border border-slate-800 ${stat.color} group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800">
                    Verified
                  </span>
                </div>

                <div className="text-4xl font-black tracking-tight text-white mb-1">
                  {stat.value}
                </div>

                <div className="text-base font-bold text-slate-200 mb-1">
                  {stat.label}
                </div>

                <div className="text-xs text-slate-400">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Ludhiana Headquarters Banner strip */}
        <div className="mt-12 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 border border-amber-500/20 flex flex-col md:flex-row items-center justify-between text-sm text-slate-300 gap-4">
          <div className="flex items-center space-x-3">
            <Award className="w-5 h-5 text-amber-400 shrink-0" />
            <span>
              <strong className="text-white">DDH Impex Corporate HQ:</strong> Headquartered in Ludhiana, Punjab, India with specialized logistics hubs worldwide.
            </span>
          </div>
          <a 
            href="mailto:info@ddhimpex.com" 
            className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
          >
            Contact HQ Desk
          </a>
        </div>

      </div>
    </section>
  );
};
