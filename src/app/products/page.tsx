'use client';

import React from 'react';
import { ProductsGrid } from '@/components/ProductsGrid';
import { Package } from 'lucide-react';

interface PageProps {
  onOpenRFQ?: (productName?: string) => void;
}

export default function ProductsPage({ onOpenRFQ = () => {} }: PageProps) {
  return (
    <div className="pt-24 pb-20 bg-slate-950 text-white min-h-screen">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-b border-slate-800">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Package className="w-3.5 h-3.5" />
            <span>GLOBAL SUPPLY CHAIN DIRECTORY</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Chemicals & FMCG Product Index
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Browse our full catalog of high-purity industrial chemicals, specialty acrylates, fertilizers, mining solvents, and international standard FMCG agricultural food products.
          </p>
        </div>
      </div>

      <ProductsGrid onOpenRFQ={onOpenRFQ} showCategoryTabs={true} />
    </div>
  );
}
