'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Mail, ChevronDown, Menu, X, Phone, Search, FileText } from 'lucide-react';

interface HeaderProps {
  onOpenRFQ?: (productName?: string) => void;
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRFQ = () => {}, onOpenSearch = () => {} }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [epcOpen, setEpcOpen] = useState(false);
  const [supplyChainOpen, setSupplyChainOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      
      {/* Top Blue Bar - Exact DDH Impex style */}
      <div className="top_email bg-[#0228d2] text-white px-6 py-2.5 flex items-center justify-between text-sm">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center space-x-6 text-xs sm:text-sm">
            <a 
              href="mailto:info@ddhimpex.com" 
              className="flex items-center space-x-2 text-white hover:text-blue-100 transition-colors font-medium"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>info@ddhimpex.com</span>
            </a>
            <span className="hidden md:inline text-blue-200 text-xs">
              Headquartered in Ludhiana, Punjab, India | Global EPC & Chemical Suppliers
            </span>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            <button
              onClick={() => onOpenSearch()}
              className="hidden sm:flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 px-3 py-1 rounded text-white transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search</span>
            </button>
            <button
              onClick={() => onOpenRFQ()}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-3 py-1 rounded text-xs uppercase tracking-wider transition-colors shadow"
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 shrink-0">
          <img 
            src="/xelassets/xelgs/logo.png" 
            alt="DDH Impex Logo" 
            className="h-14 sm:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links matching original site */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-bold tracking-wider uppercase text-slate-800">
          
          <Link 
            href="/" 
            className={`hover:text-[#0228d2] transition-colors ${
              pathname === '/' ? 'text-[#0228d2] font-black border-b-2 border-[#0228d2] pb-1' : ''
            }`}
          >
            Home
          </Link>

          <Link 
            href="/about" 
            className={`hover:text-[#0228d2] transition-colors ${
              pathname === '/about' ? 'text-[#0228d2] font-black border-b-2 border-[#0228d2] pb-1' : ''
            }`}
          >
            About
          </Link>

          {/* EPC Ddh Multi-level Dropdown */}
          <div 
            className="relative py-2 group cursor-pointer"
            onMouseEnter={() => setEpcOpen(true)}
            onMouseLeave={() => setEpcOpen(false)}
          >
            <Link 
              href="/epc" 
              className={`flex items-center space-x-1 hover:text-[#0228d2] transition-colors ${
                pathname.startsWith('/epc') ? 'text-[#0228d2] font-black border-b-2 border-[#0228d2] pb-1' : ''
              }`}
            >
              <span>EPC Ddh</span>
              <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-[#0228d2]" />
            </Link>

            {epcOpen && (
              <div className="absolute top-full left-0 w-72 bg-white border border-slate-200 shadow-xl rounded-b-xl py-3 animate-in fade-in duration-150 z-50">
                <div className="px-4 py-1.5 text-xs font-black text-[#0228d2] uppercase border-b border-slate-100">
                  Engineering Services
                </div>
                <Link 
                  href="/epc/technology-process-evaluation" 
                  className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#0228d2] transition-colors"
                >
                  Technology & Process Evaluation
                </Link>
                <Link 
                  href="/epc/technology-know-how" 
                  className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#0228d2] transition-colors"
                >
                  Technology Know How
                </Link>

                <div className="px-4 py-1.5 text-xs font-black text-[#0228d2] uppercase border-b border-t border-slate-100 mt-2">
                  Turnkey & EPC Projects
                </div>
                <Link 
                  href="/epc/engineering" 
                  className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#0228d2] transition-colors"
                >
                  Engineering (LSTK Design)
                </Link>
                <Link 
                  href="/epc/procurement" 
                  className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#0228d2] transition-colors"
                >
                  Procurement & Infrastructure
                </Link>
              </div>
            )}
          </div>

          {/* Supply Chain Business Dropdown */}
          <div 
            className="relative py-2 group cursor-pointer"
            onMouseEnter={() => setSupplyChainOpen(true)}
            onMouseLeave={() => setSupplyChainOpen(false)}
          >
            <Link 
              href="/products" 
              className={`flex items-center space-x-1 hover:text-[#0228d2] transition-colors ${
                pathname.startsWith('/products') ? 'text-[#0228d2] font-black border-b-2 border-[#0228d2] pb-1' : ''
              }`}
            >
              <span>Supply Chain Business</span>
              <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-[#0228d2]" />
            </Link>

            {supplyChainOpen && (
              <div className="absolute top-full -left-20 w-[580px] bg-white border border-slate-200 shadow-2xl rounded-b-xl p-5 grid grid-cols-2 gap-6 animate-in fade-in duration-150 z-50">
                
                {/* Col 1: Industrial Chemicals */}
                <div>
                  <div className="text-xs font-black text-[#0228d2] uppercase tracking-wider border-b border-slate-200 pb-2 mb-3">
                    Industrial Chemicals
                  </div>
                  <ul className="space-y-1 text-xs text-slate-700 font-semibold">
                    <li>
                      <Link href="/products/mining-chemicals" className="block py-1 hover:text-[#0228d2] transition-colors">
                        • Mining Chemicals (MIBC, MEK)
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/fertilizers-chemicals" className="block py-1 hover:text-[#0228d2] transition-colors">
                        • Fertilizers Chemicals
                      </Link>
                    </li>
                    <li><span className="block py-1 text-slate-400 font-normal">• Pulp & Paper Chemicals</span></li>
                    <li><span className="block py-1 text-slate-400 font-normal">• Leather Chemicals</span></li>
                    <li><span className="block py-1 text-slate-400 font-normal">• Textile Chemicals</span></li>
                    <li><span className="block py-1 text-slate-400 font-normal">• Personal Care Chemicals</span></li>
                    <li><span className="block py-1 text-slate-400 font-normal">• Soaps & Detergents Chemicals</span></li>
                    <li><span className="block py-1 text-slate-400 font-normal">• Paints & Solvents</span></li>
                  </ul>
                </div>

                {/* Col 2: Specialty Chemicals */}
                <div>
                  <div className="text-xs font-black text-[#0228d2] uppercase tracking-wider border-b border-slate-200 pb-2 mb-3">
                    Speciality Chemicals
                  </div>
                  <ul className="space-y-1 text-xs text-slate-700 font-semibold">
                    <li>
                      <Link href="/products/acrylate" className="block py-1 hover:text-[#0228d2] transition-colors">
                        • Acrylate (2-EHA, MAA, PMMA)
                      </Link>
                    </li>
                    <li><span className="block py-1 text-slate-400 font-normal">• Glycols & Glycol Ethers</span></li>
                    <li><span className="block py-1 text-slate-400 font-normal">• Plasticizers & Solvents</span></li>
                    <li><span className="block py-1 text-slate-400 font-normal">• Phosphorous Derivatives</span></li>
                    <li><span className="block py-1 text-slate-400 font-normal">• Bitterants & Biocides</span></li>
                    <li><span className="block py-1 text-slate-400 font-normal">• Agrochemical Intermediates</span></li>
                    <li>
                      <Link href="/products/food-products" className="block py-1 text-emerald-700 hover:text-emerald-900 transition-colors font-bold border-t border-slate-100 pt-2 mt-2">
                        • FMCG Food Products
                      </Link>
                    </li>
                  </ul>
                </div>

              </div>
            )}
          </div>

          <Link 
            href="/products/food-products" 
            className={`hover:text-[#0228d2] transition-colors ${
              pathname === '/products/food-products' ? 'text-[#0228d2] font-black border-b-2 border-[#0228d2] pb-1' : ''
            }`}
          >
            Food Products
          </Link>

          <Link 
            href="/contact" 
            className={`hover:text-[#0228d2] transition-colors ${
              pathname === '/contact' ? 'text-[#0228d2] font-black border-b-2 border-[#0228d2] pb-1' : ''
            }`}
          >
            Contact Us
          </Link>

        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-[#0228d2]"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <img src="/xelassets/xelgs/menu-pic.png" alt="Menu" className="h-7 w-auto" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-3 font-bold uppercase text-xs text-slate-800">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-slate-100">Home</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-slate-100">About Us</Link>

          <div className="py-2 space-y-1 pl-2 border-l-2 border-[#0228d2]">
            <div className="text-[#0228d2] font-black">EPC Ddh</div>
            <Link href="/epc/technology-process-evaluation" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-medium py-1">Technology & Process Evaluation</Link>
            <Link href="/epc/technology-know-how" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-medium py-1">Technology Know How</Link>
            <Link href="/epc/engineering" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-medium py-1">Engineering Services</Link>
          </div>

          <div className="py-2 space-y-1 pl-2 border-l-2 border-emerald-600">
            <div className="text-emerald-700 font-black">Supply Chain Business</div>
            <Link href="/products/mining-chemicals" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-medium py-1">Mining Chemicals</Link>
            <Link href="/products/fertilizers-chemicals" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-medium py-1">Fertilizers Chemicals</Link>
            <Link href="/products/acrylate" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-medium py-1">Acrylate Monomers</Link>
            <Link href="/products/food-products" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-medium py-1">FMCG Food Exports</Link>
          </div>

          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-t border-slate-100">Contact Us</Link>
        </div>
      )}

    </header>
  );
};
