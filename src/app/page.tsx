'use client';
import { useRFQ } from '@/context/RFQContext';

import React from 'react';
import Link from 'next/link';
import { HeroSlider } from '@/components/HeroSlider';
import { MidPart } from '@/components/MidPart';
import { ProductsGrid } from '@/components/ProductsGrid';
import { ContactSection } from '@/components/ContactSection';
import { Factory, Sparkles, Package, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PageProps {
  
}

export default function Home({  }: PageProps) {  const { openRFQ } = useRFQ();

  return (
    <div className="w-full bg-white text-slate-900">
      
      {/* 1. Hero Slider with 5 Authentic Banners & Swiper Thumbnails */}
      <HeroSlider />

      {/* 2. Mid Part: About DDH Impex, Vision & Mission with Original Assets */}
      <MidPart />

      {/* 3. Original Business Divisions Showcase */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[#0228d2] text-xs font-black tracking-widest uppercase">
              Core Divisions
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              DDH Impex Business Verticals
            </h2>
            <p className="text-slate-600 text-sm">
              Explore our specialized engineering and commodity supply chain divisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Div 1 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0228d2] flex items-center justify-center font-bold">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0228d2] transition-colors">
                  EPC Ddh Engineering
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Basic & detailed engineering, turnkey execution of industrial plants on a Lumpsum Turnkey (LSTK) basis.
                </p>
              </div>

              <Link 
                href="/epc/technology-process-evaluation" 
                className="mt-6 text-xs font-bold text-[#0228d2] hover:underline flex items-center space-x-1"
              >
                <span>Engineering Business</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Div 2 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  Mining Chemicals
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Activated Carbon, Caustic Soda Liquid & Pearls, MIBC, MIBK, and MEK frothers for ore processing.
                </p>
              </div>

              <Link 
                href="/products/mining-chemicals" 
                className="mt-6 text-xs font-bold text-amber-600 hover:underline flex items-center space-x-1"
              >
                <span>Mining Chemicals</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Div 3 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                  Acrylate & Monomers
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  2-Ethylhexyl Acrylate, Butyl Acrylate, Methyl Acrylate, MAA, PMMA, and Glycols for resins & coatings.
                </p>
              </div>

              <Link 
                href="/products/acrylate" 
                className="mt-6 text-xs font-bold text-purple-600 hover:underline flex items-center space-x-1"
              >
                <span>Speciality Chemicals</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Div 4 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <Package className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  FMCG Food Products
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Premium Indian Basmati & Non-Basmati Rice, Teas, Coffee, Tomato Paste, Sunflower Oil, and Spices.
                </p>
              </div>

              <Link 
                href="/products/food-products" 
                className="mt-6 text-xs font-bold text-emerald-600 hover:underline flex items-center space-x-1"
              >
                <span>Food Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Products Grid */}
      <ProductsGrid limit={6} />

      {/* 5. Contact Section */}
      <ContactSection />

    </div>
  );
}
