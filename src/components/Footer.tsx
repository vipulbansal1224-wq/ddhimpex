'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, ArrowRight, ShieldCheck, Globe, Factory, Package } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-8 relative overflow-hidden">
      {/* Background Subtle Ambient Light */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center text-slate-950 font-bold text-xl shadow-lg shadow-amber-500/20">
                D
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white">
                  DDH <span className="text-amber-400">IMPEX</span>
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 uppercase font-medium">
                  Engineering & Commodities Group
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              DDH Impex is a globally recognized conglomerate specializing in LSTK EPC Projects, Basic & Detailed Engineering, Industrial Chemicals, Specialty Monomers, and FMCG Food Product distribution across international markets.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-sm text-slate-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:info@ddhimpex.com" className="hover:text-amber-400 transition-colors">
                  info@ddhimpex.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span>Headquartered in Ludhiana, Punjab, India (Global Logistics & EPC Hub)</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-2">
              <div className="flex items-center space-x-1.5 text-xs text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
                <ShieldCheck className="w-4 h-4" />
                <span>ISO 9001:2015 Registered</span>
              </div>
              <div className="flex items-center space-x-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                <Globe className="w-4 h-4" />
                <span>50+ Export Destinations</span>
              </div>
            </div>
          </div>

          {/* Col 2: EPC Division */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide flex items-center space-x-2">
              <Factory className="w-4 h-4 text-amber-400" />
              <span>EPC & Engineering</span>
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/epc/engineering" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Basic & Detailed Engineering
                </Link>
              </li>
              <li>
                <Link href="/epc/technology-process-evaluation" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Process Evaluation & ROI
                </Link>
              </li>
              <li>
                <Link href="/epc/technology-know-how" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Smart Infrastructure & IoT
                </Link>
              </li>
              <li>
                <Link href="/epc" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Turnkey LSTK Execution
                </Link>
              </li>
              <li>
                <Link href="/epc" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Heavy Machinery Procurement
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Supply Chain */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide flex items-center space-x-2">
              <Package className="w-4 h-4 text-amber-400" />
              <span>Chemicals & Supply</span>
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/products/industrial-chemicals" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Mining Chemicals (MIBC, MEK)
                </Link>
              </li>
              <li>
                <Link href="/products/industrial-chemicals" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Fertilizers (Calcium Nitrate)
                </Link>
              </li>
              <li>
                <Link href="/products/specialty-chemicals" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Acrylate Monomers (2-EHA, MAA)
                </Link>
              </li>
              <li>
                <Link href="/products/specialty-chemicals" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Glycols & Plasticizers
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Complete Chemical Directory
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: FMCG & Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide flex items-center space-x-2">
              <Globe className="w-4 h-4 text-emerald-400" />
              <span>FMCG & Quick Links</span>
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/products/food-products" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Premium Indian Basmati Rice
                </Link>
              </li>
              <li>
                <Link href="/products/food-products" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Spices & Edible Oils
                </Link>
              </li>
              <li>
                <Link href="/products/food-products" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Assam & Darjeeling Teas
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> About Our Company
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" /> Contact & Location
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} <span className="text-slate-300 font-semibold">DDH Impex</span>. All Rights Reserved. Headquartered in Ludhiana, Punjab, India.
          </div>
          <div className="flex items-center space-x-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">ISO Compliance</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
