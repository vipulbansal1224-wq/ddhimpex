'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Factory, Beaker, Globe, ChevronLeft, ChevronRight, Award, CheckCircle2 } from 'lucide-react';

interface HeroSliderProps {
  onOpenRFQ: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenRFQ }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Welcome to DDH Impex Group",
      subtitle: "Global EPC Engineering, Chemical Supply Chain & FMCG Exports",
      desc: "Fastest growing industrial business conglomerate delivering basic & detailed engineering, LSTK turnkey projects, mining chemicals, specialty monomers, and premium agricultural commodities worldwide.",
      bgGradient: "from-slate-950 via-slate-900 to-amber-950/40",
      tag: "GLOBAL INDUSTRIAL LEADER",
      ctaText: "Explore EPC Services",
      ctaLink: "/epc",
      secondaryText: "Browse Chemical Catalog",
      secondaryLink: "/products"
    },
    {
      title: "EPC & Turnkey Engineering Services",
      subtitle: "Basic & Detailed Engineering to Commissioning",
      desc: "In-house certified experts using cutting-edge 3D CAD modeling to design, procure, construct, and commission complex chemical and process manufacturing plants with performance guarantees.",
      bgGradient: "from-slate-950 via-blue-950/80 to-slate-900",
      tag: "LSTK TURNKEY SOLUTIONS",
      ctaText: "Engineering Capabilities",
      ctaLink: "/epc/engineering",
      secondaryText: "Technology Evaluation",
      secondaryLink: "/epc/technology-process-evaluation"
    },
    {
      title: "Specialty & Industrial Chemicals",
      subtitle: "Acrylates, Mining Chemicals & Fertilizers",
      desc: "Trusted international distributor of Activated Carbon, Caustic Soda, MIBC, MIBK, MEK, 2-EHA, Butyl Acrylate, Glycols, and specialty formulations compliant with global purity standards.",
      bgGradient: "from-slate-950 via-slate-900 to-emerald-950/40",
      tag: "ISO CERTIFIED CHEMICAL DISTRIBUTOR",
      ctaText: "View Chemical Index",
      ctaLink: "/products/industrial-chemicals",
      secondaryText: "Request Chemical Quote",
      secondaryLink: "#",
      onSecondaryClick: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full min-h-[90vh] bg-slate-950 text-white flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Layer with Animated Gradient */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r ${slides[activeSlide].bgGradient} transition-all duration-1000 ease-in-out`}
      />

      {/* Decorative Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Glow Orbs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Slide Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
              <Award className="w-3.5 h-3.5" />
              <span>{slides[activeSlide].tag}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              {slides[activeSlide].title.split(' ').map((word, i) => (
                <span key={i} className={word.toLowerCase().includes('ddh') || word.toLowerCase().includes('impex') ? 'text-amber-400' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-medium text-amber-200/90">
              {slides[activeSlide].subtitle}
            </p>

            {/* Description */}
            <p className="text-slate-300 text-base leading-relaxed max-w-2xl">
              {slides[activeSlide].desc}
            </p>

            {/* Key Features Pill Bar */}
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-medium text-slate-300">
              <div className="flex items-center space-x-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Headquartered in Ludhiana, Punjab</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>LSTK Project Execution</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Global Export Logistics</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link 
                href={slides[activeSlide].ctaLink}
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-amber-500/25 flex items-center space-x-2 group"
              >
                <span>{slides[activeSlide].ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {slides[activeSlide].onSecondaryClick ? (
                <button
                  onClick={onOpenRFQ}
                  className="px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all duration-200 flex items-center space-x-2 backdrop-blur-sm"
                >
                  <span>{slides[activeSlide].secondaryText}</span>
                </button>
              ) : (
                <Link
                  href={slides[activeSlide].secondaryLink}
                  className="px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all duration-200 flex items-center space-x-2 backdrop-blur-sm"
                >
                  <span>{slides[activeSlide].secondaryText}</span>
                </Link>
              )}
            </div>

          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 rounded-2xl p-6 shadow-2xl backdrop-blur-xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                    DDH
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Business Verticals</div>
                    <div className="text-xs text-slate-400">Integrated Excellence</div>
                  </div>
                </div>
                <ShieldCheck className="w-6 h-6 text-amber-400" />
              </div>

              {/* Vertical Badges */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-between hover:border-amber-500/40 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Factory className="w-5 h-5 text-amber-400" />
                    <div>
                      <div className="text-sm font-semibold text-white">EPC & Engineering</div>
                      <div className="text-xs text-slate-400">LSTK Projects, 3D CAD Design</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full">Active</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-between hover:border-blue-500/40 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Beaker className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-sm font-semibold text-white">Industrial Chemicals</div>
                      <div className="text-xs text-slate-400">Acrylates, Mining & Fertilizers</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-400 bg-blue-400/10 px-2.5 py-1 rounded-full">Global</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-between hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-emerald-400" />
                    <div>
                      <div className="text-sm font-semibold text-white">FMCG & Food Products</div>
                      <div className="text-xs text-slate-400">Basmati Rice, Spices & Oils</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full">Exports</span>
                </div>
              </div>

              {/* Quick Contact Line */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Direct Inquiry Desk:</span>
                <a href="mailto:info@ddhimpex.com" className="text-amber-400 font-semibold hover:underline">
                  info@ddhimpex.com
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Slide Pagination Controls */}
        <div className="mt-12 flex items-center justify-between border-t border-slate-800/80 pt-6">
          <div className="flex items-center space-x-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === idx ? 'w-8 bg-amber-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
