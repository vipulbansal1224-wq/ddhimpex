'use client';
import { useRFQ } from '@/context/RFQContext';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, ChevronDown, Menu, X, Search, FileText, Factory, Package, Sparkles } from 'lucide-react';

interface HeaderProps {
  
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch = () => {} }) => {
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
              <span>Search Database</span>
            </button>
            <button
              onClick={() => openRFQ()}
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

        {/* Desktop Navigation Links */}
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
              <div className="absolute top-full left-0 w-80 bg-white border border-slate-200 shadow-2xl rounded-b-xl py-3 animate-in fade-in duration-150 z-50">
                <div className="px-4 py-2 mt-1 mx-4 h-28 rounded-lg overflow-hidden relative"><img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400&h=200" alt="EPC Division" className="object-cover w-full h-full hover:scale-110 transition-transform duration-500 absolute inset-0 -z-10" /></div><div className="px-4 py-1.5 mt-2 text-xs font-black text-[#0228d2] uppercase border-b border-slate-100 flex items-center justify-between">
                  <span>Engineering Services</span>
                  <Factory className="w-3.5 h-3.5 text-[#0228d2]" />
                </div>
                <Link 
                  href="/epc/technology-process-evaluation" 
                  className="block px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#0228d2] transition-colors"
                >
                  <div>Technology & Process Evaluation</div>
                  <div className="text-[10px] text-slate-400 font-normal">Technical audit & ROI feasibility</div>
                </Link>
                <Link 
                  href="/epc/technology-know-how" 
                  className="block px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#0228d2] transition-colors"
                >
                  <div>Technology Know How</div>
                  <div className="text-[10px] text-slate-400 font-normal">IoT grids, cooling & master planning</div>
                </Link>

                <div className="px-4 py-1.5 text-xs font-black text-[#0228d2] uppercase border-b border-t border-slate-100 mt-2 flex items-center justify-between">
                  <span>Turnkey & EPC Projects</span>
                  <Factory className="w-3.5 h-3.5 text-[#0228d2]" />
                </div>
                <Link 
                  href="/epc/engineering" 
                  className="block px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#0228d2] transition-colors"
                >
                  <div>Engineering (LSTK Design)</div>
                  <div className="text-[10px] text-slate-400 font-normal">Basic & detailed 3D CAD design</div>
                </Link>
                <Link 
                  href="/epc/procurement" 
                  className="block px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#0228d2] transition-colors"
                >
                  <div>Procurement & Infrastructure</div>
                  <div className="text-[10px] text-slate-400 font-normal">Global machinery & mine logistics</div>
                </Link>
              </div>
            )}
          </div>

          {/* Supply Chain Business Dropdown - 100% ACTIVE LINKS */}
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
              <div className="absolute top-full -left-36 w-[680px] bg-white border border-slate-200 shadow-2xl rounded-b-xl p-5 grid grid-cols-2 gap-6 animate-in fade-in duration-150 z-50 max-h-[80vh] overflow-y-auto">
                
                {/* Col 1: Industrial Chemicals */}
                <div>
                  <div className="text-xs font-black text-[#0228d2] uppercase tracking-wider border-b border-slate-200 pb-2 mb-3 flex items-center justify-between">
                    <span>Industrial Chemicals</span>
                    <Package className="w-3.5 h-3.5 text-[#0228d2]" /></div><div className="mb-3 h-24 rounded-lg overflow-hidden relative border border-slate-200"><img src="https://images.unsplash.com/photo-1618055627670-381e4b855be7?auto=format&fit=crop&q=80&w=400&h=200" alt="Industrial Chemicals" className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
                  </div>
                  <ul className="space-y-1 text-xs text-slate-700 font-semibold">
                    <li><Link href="/products/mining-chemicals" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Mining Chemicals (MIBC, MEK)</Link></li>
                    <li><Link href="/products/fertilizers-chemicals" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Fertilizers Chemicals</Link></li>
                    <li><Link href="/products/pulp-and-paper-chemicals" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Pulp & Paper Chemicals</Link></li>
                    <li><Link href="/products/leather-chemicals" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Leather Chemicals</Link></li>
                    <li><Link href="/products/textile-chemicals" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Textile Chemicals</Link></li>
                    <li><Link href="/products/personal-care-chemicals" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Personal Care Chemicals</Link></li>
                    <li><Link href="/products/soaps-and-detergents-chemicals" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Soaps & Detergents Chemicals</Link></li>
                    <li><Link href="/products/rubber-and-plastics-chemicals" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Rubber & Plastics Chemicals</Link></li>
                    <li><Link href="/products/glass-and-ceramics-chemicals" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Glass & Ceramics Chemicals</Link></li>
                    <li><Link href="/products/paints-and-solvents-chemicals" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Paints & Solvents Chemicals</Link></li>
                    <li><Link href="/products/food-chemicals" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Food Chemicals</Link></li>
                    <li><Link href="/products/polyurethane-chemicals" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Polyurethane Chemicals</Link></li>
                  </ul>
                </div>

                {/* Col 2: Specialty Chemicals */}
                <div>
                  <div className="text-xs font-black text-[#0228d2] uppercase tracking-wider border-b border-slate-200 pb-2 mb-3 flex items-center justify-between">
                    <span>Speciality Chemicals</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#0228d2]" /></div><div className="mb-3 h-24 rounded-lg overflow-hidden relative border border-slate-200"><img src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=400&h=200" alt="Speciality Chemicals" className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
                  </div>
                  <ul className="space-y-1 text-xs text-slate-700 font-semibold">
                    <li><Link href="/products/acrylate" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Acrylate (2-EHA, MAA, PMMA)</Link></li>
                    <li><Link href="/products/glycols" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Glycols (MEG, DEG)</Link></li>
                    <li><Link href="/products/glycols-ether" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Glycols (Ether - Butyl Glycol)</Link></li>
                    <li><Link href="/products/plasticizer" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Plasticizer (DOP, DOTP)</Link></li>
                    <li><Link href="/products/solvents" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Solvents (IPA, Cyclohexanone)</Link></li>
                    <li><Link href="/products/other-speciality-items" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Other Speciality Items</Link></li>
                    <li><Link href="/products/phosphorous-derivatives" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Phosphorous Derivatives</Link></li>
                    <li><Link href="/products/phosphites-derivatives" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Phosphites Derivatives</Link></li>
                    <li><Link href="/products/phosphate-esters-transesters" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Phosphate Esters & Transesters</Link></li>
                    <li><Link href="/products/bitterants" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Bitterants (Denatonium Benzoate)</Link></li>
                    <li><Link href="/products/phosgene-derivatives" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Phosgene Derivatives</Link></li>
                    <li><Link href="/products/agrochemicals-intermediate" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Agrochemicals Intermediate</Link></li>
                    <li><Link href="/products/biocides" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Biocides (CMIT / MIT)</Link></li>
                    <li><Link href="/products/organic-chemicals" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Organic Chemicals</Link></li>
                    <li><Link href="/products/xanthate-chemicals" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Xanthate Chemicals (PIBX)</Link></li>
                    <li><Link href="/products/pharma-and-intermediates" className="block py-1 hover:text-[#0228d2] hover:bg-slate-50 px-1 rounded transition-colors">• Pharma & Intermediates (PAP)</Link></li>
                    <li>
                      <Link href="/products/food-products" className="block py-1.5 text-emerald-700 hover:text-emerald-900 transition-colors font-bold border-t border-slate-100 mt-2 bg-emerald-50 px-2 rounded">
                        • FMCG Food Products (Basmati Rice, Oils)
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
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-3 font-bold uppercase text-xs text-slate-800 max-h-[85vh] overflow-y-auto">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-slate-100">Home</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-slate-100">About Us</Link>

          <div className="py-2 space-y-1 pl-2 border-l-2 border-[#0228d2]">
            <div className="text-[#0228d2] font-black">EPC Ddh</div>
            <Link href="/epc/technology-process-evaluation" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-medium py-1">Technology & Process Evaluation</Link>
            <Link href="/epc/technology-know-how" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-medium py-1">Technology Know How</Link>
            <Link href="/epc/engineering" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-medium py-1">Engineering Services</Link>
            <Link href="/epc/procurement" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-medium py-1">Procurement & Infrastructure</Link>
          </div>

          <div className="py-2 space-y-1 pl-2 border-l-2 border-emerald-600">
            <div className="text-emerald-700 font-black">Industrial Chemicals</div>
            <Link href="/products/mining-chemicals" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-normal py-1">Mining Chemicals</Link>
            <Link href="/products/fertilizers-chemicals" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-normal py-1">Fertilizers Chemicals</Link>
            <Link href="/products/pulp-and-paper-chemicals" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-normal py-1">Pulp & Paper Chemicals</Link>
            <Link href="/products/leather-chemicals" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-normal py-1">Leather Chemicals</Link>
            <Link href="/products/textile-chemicals" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-normal py-1">Textile Chemicals</Link>
            <Link href="/products/personal-care-chemicals" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-normal py-1">Personal Care Chemicals</Link>
            <Link href="/products/soaps-and-detergents-chemicals" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-normal py-1">Soaps & Detergents Chemicals</Link>
          </div>

          <div className="py-2 space-y-1 pl-2 border-l-2 border-purple-600">
            <div className="text-purple-700 font-black">Speciality Chemicals</div>
            <Link href="/products/acrylate" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-normal py-1">Acrylate Monomers</Link>
            <Link href="/products/glycols" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-normal py-1">Glycols (MEG, DEG)</Link>
            <Link href="/products/glycols-ether" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-normal py-1">Glycols Ether</Link>
            <Link href="/products/plasticizer" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-normal py-1">Plasticizer (DOP, DOTP)</Link>
            <Link href="/products/solvents" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-normal py-1">Solvents (IPA)</Link>
            <Link href="/products/pharma-and-intermediates" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 font-normal py-1">Pharma & Intermediates</Link>
          </div>

          <Link href="/products/food-products" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-t border-slate-100 text-emerald-700 font-bold">FMCG Food Products</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-t border-slate-100">Contact Us</Link>
        </div>
      )}

    </header>
  );
};
