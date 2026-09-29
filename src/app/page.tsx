'use client';

import React from 'react';
import Link from 'next/link';
import { HeroSlider } from '@/components/HeroSlider';
import { StatsSection } from '@/components/StatsSection';
import { EPCSection } from '@/components/EPCSection';
import { ProductsGrid } from '@/components/ProductsGrid';
import { ContactSection } from '@/components/ContactSection';
import { 
  Building2, Factory, Package, ArrowRight, ShieldCheck, 
  CheckCircle, Globe, Sparkles, Award, Target, Eye 
} from 'lucide-react';

interface PageProps {
  onOpenRFQ?: (productName?: string) => void;
}

export default function Home({ onOpenRFQ = () => {} }: PageProps) {
  return (
    <div className="w-full">
      {/* 1. Hero Banner Slider */}
      <HeroSlider onOpenRFQ={() => onOpenRFQ()} />

      {/* 2. Key Metrics & Ludhiana Banner */}
      <StatsSection />

      {/* 3. Executive About DDH Impex */}
      <section className="py-20 bg-slate-950 text-white relative border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                <span>ABOUT DDH IMPEX GROUP</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                Pioneering Industrial Engineering & Global Commodity Supply
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Welcome to <strong className="text-amber-400">DDH Impex</strong>, where creativity, engineering excellence, and international collaboration come together. Headquartered in <strong className="text-white">Ludhiana, Punjab, India</strong>, DDH Impex has created a distinct niche for being the fastest-growing business group in the industry.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Over the years, our group has strategically expanded across core industrial sectors, delivering end-to-end LSTK EPC projects for chemical manufacturing, basic and detailed CAD engineering, high-purity industrial chemical supply, and FMCG consumer-packaged food exports.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center space-x-2 text-amber-400 font-bold text-base mb-1">
                    <Eye className="w-4 h-4" />
                    <span>Our Vision</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    To be a globally recognized leader in EPC business consulting, supply chain management, and chemical engineering.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center space-x-2 text-emerald-400 font-bold text-base mb-1">
                    <Target className="w-4 h-4" />
                    <span>Our Mission</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    To provide customized engineering and chemical supply solutions that enhance operational performance & efficiency.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500 text-amber-400 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <span>Read Full Corporate Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Right Card / Visual Badge */}
            <div className="lg:col-span-6">
              <div className="relative p-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-black text-2xl border border-amber-500/20">
                  D
                </div>
                <h3 className="text-2xl font-bold text-white">
                  DDH Impex Division Matrix
                </h3>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start space-x-3">
                    <Factory className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">EPC & Engineering Division</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Basic & detailed engineering, LSTK chemical plant construction, and pre-commissioning test runs.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start space-x-3">
                    <Sparkles className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Specialty & Industrial Chemicals</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Mining chemicals (MIBC, MEK), fertilizers (Calcium Nitrate), Acrylates (2-EHA, MAA), and glycols.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start space-x-3">
                    <Globe className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">FMCG & Agricultural Exports</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Premium Indian Basmati & Non-Basmati rice, tea, coffee, tomato paste, sunflower oil, and aromatic spices.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                  <span>Head Office: Ludhiana, Punjab</span>
                  <span className="text-amber-400 font-semibold">ISO 9001:2015 Compliant</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. EPC & Engineering Showcase */}
      <EPCSection />

      {/* 5. Products Catalog Grid */}
      <ProductsGrid onOpenRFQ={onOpenRFQ} limit={6} />

      {/* 6. Contact Section */}
      <ContactSection />
    </div>
  );
}
