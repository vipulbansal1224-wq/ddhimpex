'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#161616] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Logo & Text */}
          <div className="space-y-4">
            <figure className="mb-4">
              <img 
                src="/xelassets/xelgs/logo.png" 
                alt="DDH Impex Logo" 
                className="h-16 w-auto bg-white p-2 rounded"
              />
            </figure>
            <p className="text-slate-400 text-sm leading-relaxed">
              Welcome to DDH Impex Group. DDH Impex has created a niche for being the fastest growing business group in the market.
            </p>
          </div>

          {/* Col 2: EPC Ddh Links */}
          <div className="space-y-4">
            <h2 className="text-white text-lg font-bold uppercase tracking-wider border-b border-slate-800 pb-2">
              EPC Ddh
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li>
                <Link href="/epc/technology-process-evaluation" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>Engineering Business</span>
                </Link>
              </li>
              <li>
                <Link href="/epc/engineering" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>Turnkey & EPC Projects Business</span>
                </Link>
              </li>
              <li>
                <Link href="/epc/technology-know-how" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>Technology Know-How</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Supply Chain Business Links */}
          <div className="space-y-4">
            <h2 className="text-white text-lg font-bold uppercase tracking-wider border-b border-slate-800 pb-2">
              Supply Chain Business
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li>
                <Link href="/products/mining-chemicals" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>Industrial Chemicals</span>
                </Link>
              </li>
              <li>
                <Link href="/products/acrylate" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>Speciality Chemicals</span>
                </Link>
              </li>
              <li>
                <Link href="/products/food-products" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>Food Products</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Get In Touch */}
          <div className="space-y-4">
            <h2 className="text-white text-lg font-bold uppercase tracking-wider border-b border-slate-800 pb-2">
              Get In Touch
            </h2>
            <div className="flex items-center space-x-3 text-slate-300 text-sm">
              <Mail className="w-5 h-5 text-blue-500 shrink-0" />
              <a href="mailto:info@ddhimpex.com" className="hover:text-white transition-colors font-semibold">
                info@ddhimpex.com
              </a>
            </div>
            <div className="text-xs text-slate-400 pt-2">
              Headquartered in Ludhiana, Punjab, India
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()}. DDH Impex. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};
