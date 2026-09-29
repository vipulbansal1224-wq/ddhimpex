'use client';
import { useRFQ } from '@/context/RFQContext';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PRODUCTS_DATA } from '@/data/productsData';
import { EPC_SERVICES } from '@/data/epcData';
import { Search, X, Package, Factory, ArrowRight, Tag } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle modal if trigger key pressed
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const matchedProducts = query.trim() === '' ? [] : PRODUCTS_DATA.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.subcategory.toLowerCase().includes(query.toLowerCase()) ||
    (p.casNo && p.casNo.includes(query))
  );

  const matchedServices = query.trim() === '' ? [] : EPC_SERVICES.filter(s =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.shortDesc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center space-x-3 bg-slate-950">
          <Search className="w-5 h-5 text-amber-400 shrink-0" />
          <input 
            type="text"
            autoFocus
            placeholder="Search products, CAS numbers (e.g. 108-11-2), or EPC services..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white text-base focus:outline-none placeholder-slate-500"
          />
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {query.trim() === '' ? (
            <div className="text-center py-10 text-slate-400 text-sm">
              <p className="font-semibold text-slate-300">Type to search DDH Impex database</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4 text-xs">
                <span onClick={() => setQuery('MIBC')} className="px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-amber-400 cursor-pointer">MIBC</span>
                <span onClick={() => setQuery('2-EHA')} className="px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-amber-400 cursor-pointer">2-EHA</span>
                <span onClick={() => setQuery('Basmati')} className="px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-emerald-400 cursor-pointer">Basmati Rice</span>
                <span onClick={() => setQuery('Engineering')} className="px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-blue-400 cursor-pointer">EPC Engineering</span>
              </div>
            </div>
          ) : (
            <>
              {/* Product Results */}
              {matchedProducts.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase text-amber-400 tracking-wider flex items-center space-x-1.5 px-2">
                    <Package className="w-3.5 h-3.5" />
                    <span>Products ({matchedProducts.length})</span>
                  </div>

                  <div className="grid gap-2">
                    {matchedProducts.map((product) => (
                      <div 
                        key={product.id}
                        className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 flex items-center justify-between transition-colors group"
                      >
                        <div>
                          <div className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                            {product.name}
                          </div>
                          <div className="text-xs text-slate-400 flex items-center space-x-2 mt-0.5">
                            <span>{product.subcategory}</span>
                            {product.casNo && <span className="font-mono text-[10px] text-amber-300">CAS: {product.casNo}</span>}
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            onClose();
                            (product.name);
                          }}
                          className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center space-x-1"
                        >
                          <span>Quote</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Service Results */}
              {matchedServices.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase text-blue-400 tracking-wider flex items-center space-x-1.5 px-2">
                    <Factory className="w-3.5 h-3.5" />
                    <span>EPC Services ({matchedServices.length})</span>
                  </div>

                  <div className="grid gap-2">
                    {matchedServices.map((service) => (
                      <Link 
                        key={service.id}
                        href={`/epc/${service.id}`}
                        onClick={onClose}
                        className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 flex items-center justify-between transition-colors group"
                      >
                        <div>
                          <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                            {service.title}
                          </div>
                          <div className="text-xs text-slate-400 line-clamp-1">
                            {service.shortDesc}
                          </div>
                        </div>

                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {matchedProducts.length === 0 && matchedServices.length === 0 && (
                <div className="text-center py-8 text-slate-400 text-sm">
                  No matches for &quot;<strong className="text-white">{query}</strong>&quot;. Try searching with broad keywords.
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  );
};
