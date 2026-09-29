'use client';

import React from 'react';
import Link from 'next/link';
import { Building2, ShieldCheck, Factory, Globe, Award, CheckCircle2, Target, Eye, Users, FileText } from 'lucide-react';

interface PageProps {
  onOpenRFQ?: (productName?: string) => void;
}

export default function AboutPage({ onOpenRFQ = () => {} }: PageProps) {
  return (
    <div className="pt-24 pb-20 bg-slate-950 text-white min-h-screen">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-b border-slate-800">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>CORPORATE PROFILE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            About DDH Impex Group
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Headquartered in <strong className="text-amber-400">Ludhiana, Punjab, India</strong>, DDH Impex has established itself as one of the fastest growing industrial business groups, delivering world-class EPC engineering and chemical supply chain solutions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        
        {/* Company Overview & Ludhiana Origin */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Excellence Driven by Creativity & Precision
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Welcome to DDH Impex! Over the years, the group has strategically expanded its presence across diverse business segments including EPC Engineering, Technology & Process Evaluation, Specialty Chemical Monomers, Mining Solvents, and FMCG Packaged Food Exports.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              At DDH Impex, we prioritize international quality standards in the careful selection and manufacturing of our products. Our dedicated team of certified engineers, chemical experts, and supply chain logistics professionals ensure seamless execution from initial design to final delivery.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>LSTK Turnkey Projects:</strong> Basic & detailed engineering, procurement, construction, and commissioning of chemical processing units.</span>
              </div>
              <div className="flex items-start space-x-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>High-Purity Chemicals:</strong> Acrylates, Glycols, Mining Chemicals, Fertilizers, and Specialty Resins.</span>
              </div>
              <div className="flex items-start space-x-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>FMCG Food Products:</strong> Aromatic Indian Basmati Rice, Spices, Teas, Coffee, and Edible Oils exported worldwide.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg">
                  DDH
                </div>
                <div>
                  <div className="text-base font-bold text-white">Global Headquarters</div>
                  <div className="text-xs text-slate-400">Ludhiana, Punjab, India</div>
                </div>
              </div>
              <ShieldCheck className="w-6 h-6 text-amber-400" />
            </div>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex justify-between py-2 border-b border-slate-800/80">
                <span className="text-slate-400">Corporate Status:</span>
                <span className="font-semibold text-white">Registered Impex Conglomerate</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800/80">
                <span className="text-slate-400">Quality Certificate:</span>
                <span className="font-semibold text-amber-400">ISO 9001:2015</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800/80">
                <span className="text-slate-400">Core Contact:</span>
                <a href="mailto:info@ddhimpex.com" className="font-semibold text-amber-400 hover:underline">info@ddhimpex.com</a>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-400">Export Scope:</span>
                <span className="font-semibold text-white">Worldwide Logistics</span>
              </div>
            </div>

            <button
              onClick={() => onOpenRFQ()}
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-2"
            >
              <FileText className="w-4 h-4" />
              <span>Get Corporate Profile Quote</span>
            </button>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              To be a globally recognized leader in business consulting, supply chain management, and engineering services, driving innovation and excellence in every project we undertake.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              To provide our clients with innovative and customized solutions that enhance their business performance, operational efficiency, and global supply chain resilience.
            </p>
          </div>
        </div>

        {/* EPC Methodology Execution Lifecycle */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              End-to-End Industrial Execution Methodology
            </h3>
            <p className="text-xs text-slate-400">
              DDH Impex specializes in the seamless execution of complex industrial projects from initiation to handover.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-widest">Stage 01</div>
              <h4 className="text-base font-bold text-white">Technology & Engineering</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Expert technology selection, comprehensive basic and detailed CAD engineering, and efficient project management.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-widest">Stage 02</div>
              <h4 className="text-base font-bold text-white">Procurement & Manufacturing</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Strategic procurement, high-quality fabrication, factory acceptance testing, and streamlined logistics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-widest">Stage 03</div>
              <h4 className="text-base font-bold text-white">Construction & Commissioning</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Site mobilization, civil & steel works, precision erection, and thorough pre-commissioning checks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Stage 04</div>
              <h4 className="text-base font-bold text-white">Final Handover</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Performance guarantee test runs and a seamless facility transition for maximum operational reliability.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
