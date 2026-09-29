'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Mail, MapPin, Phone, ChevronDown, Menu, X, Search, 
  FileText, Shield, Sparkles, Factory, Layers, Package, Globe 
} from 'lucide-react';

interface HeaderProps {
  onOpenRFQ: (productName?: string) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRFQ, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [epcDropdown, setEpcDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:info@ddhimpex.com" 
              className="flex items-center space-x-2 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>info@ddhimpex.com</span>
            </a>
            <div className="flex items-center space-x-2 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>HQ: Ludhiana, Punjab, India</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-amber-400 font-medium flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" /> ISO 9001:2015 Certified
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">Global EPC & Commodity Exporters</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-slate-800 py-3' 
            : 'bg-slate-900/90 backdrop-blur-sm py-4 border-b border-slate-800/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center text-slate-950 font-bold text-xl shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              D
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-white flex items-center gap-1">
                DDH <span className="text-amber-400">IMPEX</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase font-medium">
                Engineering & Commodities Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-200">
            <Link 
              href="/" 
              className={`hover:text-amber-400 transition-colors ${
                pathname === '/' ? 'text-amber-400 font-semibold' : ''
              }`}
            >
              Home
            </Link>

            <Link 
              href="/about" 
              className={`hover:text-amber-400 transition-colors ${
                pathname === '/about' ? 'text-amber-400 font-semibold' : ''
              }`}
            >
              About Us
            </Link>

            {/* EPC Dropdown */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setEpcDropdown(true)}
              onMouseLeave={() => setEpcDropdown(false)}
            >
              <button 
                className={`flex items-center space-x-1 hover:text-amber-400 transition-colors ${
                  pathname.startsWith('/epc') ? 'text-amber-400 font-semibold' : ''
                }`}
              >
                <span>EPC Division</span>
                <ChevronDown className="w-4 h-4 opacity-75" />
              </button>

              {epcDropdown && (
                <div className="absolute top-full left-0 w-72 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-3 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-1.5 text-xs font-semibold uppercase text-amber-400 border-b border-slate-800">
                    Engineering & Turnkey
                  </div>
                  <Link 
                    href="/epc" 
                    className="p-2.5 rounded-lg hover:bg-slate-800 flex items-start space-x-3 transition-colors text-slate-200 hover:text-white"
                  >
                    <Factory className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold">EPC Overview</div>
                      <div className="text-xs text-slate-400">End-to-end industrial plants</div>
                    </div>
                  </Link>
                  <Link 
                    href="/epc/engineering" 
                    className="p-2.5 rounded-lg hover:bg-slate-800 flex items-start space-x-3 transition-colors text-slate-200 hover:text-white"
                  >
                    <Layers className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold">Engineering Services</div>
                      <div className="text-xs text-slate-400">Basic & Detailed LSTK Design</div>
                    </div>
                  </Link>
                  <Link 
                    href="/epc/technology-process-evaluation" 
                    className="p-2.5 rounded-lg hover:bg-slate-800 flex items-start space-x-3 transition-colors text-slate-200 hover:text-white"
                  >
                    <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold">Process Evaluation</div>
                      <div className="text-xs text-slate-400">Technical audit & ROI analysis</div>
                    </div>
                  </Link>
                  <Link 
                    href="/epc/technology-know-how" 
                    className="p-2.5 rounded-lg hover:bg-slate-800 flex items-start space-x-3 transition-colors text-slate-200 hover:text-white"
                  >
                    <Globe className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold">Tech Know-How</div>
                      <div className="text-xs text-slate-400">Smart infrastructure & IoT</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setProductsDropdown(true)}
              onMouseLeave={() => setProductsDropdown(false)}
            >
              <button 
                className={`flex items-center space-x-1 hover:text-amber-400 transition-colors ${
                  pathname.startsWith('/products') ? 'text-amber-400 font-semibold' : ''
                }`}
              >
                <span>Supply Chain & Products</span>
                <ChevronDown className="w-4 h-4 opacity-75" />
              </button>

              {productsDropdown && (
                <div className="absolute top-full left-0 w-80 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-3 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-1.5 text-xs font-semibold uppercase text-amber-400 border-b border-slate-800">
                    Chemicals & FMCG
                  </div>
                  <Link 
                    href="/products" 
                    className="p-2.5 rounded-lg hover:bg-slate-800 flex items-start space-x-3 transition-colors text-slate-200 hover:text-white"
                  >
                    <Package className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold">All Products Catalog</div>
                      <div className="text-xs text-slate-400">Complete chemical & food index</div>
                    </div>
                  </Link>
                  <Link 
                    href="/products/industrial-chemicals" 
                    className="p-2.5 rounded-lg hover:bg-slate-800 flex items-start space-x-3 transition-colors text-slate-200 hover:text-white"
                  >
                    <Factory className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold">Industrial Chemicals</div>
                      <div className="text-xs text-slate-400">Mining, Fertilizers, Solvents</div>
                    </div>
                  </Link>
                  <Link 
                    href="/products/specialty-chemicals" 
                    className="p-2.5 rounded-lg hover:bg-slate-800 flex items-start space-x-3 transition-colors text-slate-200 hover:text-white"
                  >
                    <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold">Specialty Chemicals</div>
                      <div className="text-xs text-slate-400">Acrylates, Glycols & Monomers</div>
                    </div>
                  </Link>
                  <Link 
                    href="/products/food-products" 
                    className="p-2.5 rounded-lg hover:bg-slate-800 flex items-start space-x-3 transition-colors text-slate-200 hover:text-white"
                  >
                    <Package className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold">FMCG Food Products</div>
                      <div className="text-xs text-slate-400">Rice, Spices, Oils, Tea, Coffee</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/contact" 
              className={`hover:text-amber-400 transition-colors ${
                pathname === '/contact' ? 'text-amber-400 font-semibold' : ''
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Search Trigger */}
            <button 
              onClick={onOpenSearch}
              className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors flex items-center gap-2 text-xs font-medium"
              title="Search products or services (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">Search</span>
            </button>

            {/* Quick Quote Button */}
            <button 
              onClick={() => onOpenRFQ()}
              className="px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wide uppercase transition-all shadow-md hover:shadow-amber-500/25 flex items-center space-x-2"
            >
              <FileText className="w-4 h-4" />
              <span>Get Quote</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 font-medium hover:text-amber-400"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 font-medium hover:text-amber-400"
            >
              About Us
            </Link>
            
            <div className="space-y-2 pl-2 border-l-2 border-amber-500/40">
              <div className="text-xs font-semibold uppercase text-amber-400">EPC Division</div>
              <Link href="/epc" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-300 hover:text-white py-1">EPC Overview</Link>
              <Link href="/epc/engineering" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-300 hover:text-white py-1">Engineering Services</Link>
              <Link href="/epc/technology-process-evaluation" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-300 hover:text-white py-1">Process Evaluation</Link>
            </div>

            <div className="space-y-2 pl-2 border-l-2 border-emerald-500/40">
              <div className="text-xs font-semibold uppercase text-emerald-400">Supply Chain & Products</div>
              <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-300 hover:text-white py-1">All Products</Link>
              <Link href="/products/industrial-chemicals" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-300 hover:text-white py-1">Industrial Chemicals</Link>
              <Link href="/products/specialty-chemicals" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-300 hover:text-white py-1">Specialty Chemicals</Link>
              <Link href="/products/food-products" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-300 hover:text-white py-1">FMCG Food Products</Link>
            </div>

            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 font-medium hover:text-amber-400 pt-2 border-t border-slate-800"
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
