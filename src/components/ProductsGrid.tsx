'use client';
import { useRFQ } from '@/context/RFQContext';

import React, { useState } from 'react';
import { PRODUCTS_DATA, ProductItem } from '@/data/productsData';
import { Package, Search, Filter, ArrowRight, ShieldCheck, Beaker, Sparkles, Tag } from 'lucide-react';

interface ProductsGridProps {
  
  limit?: number;
  showCategoryTabs?: boolean;
}

export const ProductsGrid: React.FC<ProductsGridProps> = ({ 
   
  limit,
  showCategoryTabs = true 
}) => {
  const { openRFQ } = useRFQ();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'industrial' | 'specialty' | 'food'>('all');

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.casNo && product.casNo.includes(searchQuery)) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const displayProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  return (
    <section className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-slate-800 pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Package className="w-3.5 h-3.5" />
              <span>SUPPLY CHAIN & PRODUCT CATALOG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Industrial Chemicals, Specialty Monomers & FMCG
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl">
              High purity chemical compounds with standard CAS numbers & international export quality FMCG items packaged to client specifications.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search product or CAS No..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Filters */}
        {showCategoryTabs && (
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              All Products ({PRODUCTS_DATA.length})
            </button>
            <button
              onClick={() => setSelectedCategory('industrial')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === 'industrial'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              Industrial Chemicals
            </button>
            <button
              onClick={() => setSelectedCategory('specialty')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === 'specialty'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              Specialty Chemicals
            </button>
            <button
              onClick={() => setSelectedCategory('food')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === 'food'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              FMCG Food Exports
            </button>
          </div>
        )}

        {/* Product Cards Grid */}
        {displayProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-950/60 rounded-2xl border border-slate-800">
            <Package className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-300 font-semibold">No matching products found</p>
            <p className="text-xs text-slate-500 mt-1">Try clearing your search query or switching categories.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProducts.map((product) => (
              <div 
                key={product.id}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md border ${
                      product.category === 'food'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : product.category === 'specialty'
                        ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                        : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                    }`}>
                      {product.subcategory}
                    </span>

                    {product.casNo && (
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        CAS: {product.casNo}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Packaging Type */}
                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80 mb-4 text-xs text-slate-300 flex items-center space-x-2">
                    <Tag className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span><strong>Packing:</strong> {product.packingType}</span>
                  </div>

                  {/* Key Applications */}
                  <div className="space-y-1.5 mb-6">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Applications & Uses:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {product.applications.map((app, idx) => (
                        <span key={idx} className="text-[10px] bg-slate-900 text-slate-300 px-2 py-1 rounded border border-slate-800">
                          • {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RFQ Trigger */}
                <button
                  onClick={() => openRFQ()}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-slate-200 font-bold text-xs uppercase tracking-wider border border-slate-800 hover:border-amber-500 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Request RFQ / Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
