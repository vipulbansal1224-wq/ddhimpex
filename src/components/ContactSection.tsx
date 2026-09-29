'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Factory, Package, Clock, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'epc' | 'supply-chain'>('epc');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details & Headquarters Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>GLOBAL HEADQUARTERS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                Connect with DDH Impex Experts
              </h2>

              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                Whether you need basic engineering & turnkey plant execution or bulk chemical & food supply, our specialized teams in Ludhiana are ready to assist.
              </p>
            </div>

            {/* Address Cards */}
            <div className="space-y-4">
              
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Corporate Headquarters</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Ludhiana, Punjab, India
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Central hub for EPC Project Management & Global Commodity Exports.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Email Correspondence</h3>
                  <a href="mailto:info@ddhimpex.com" className="text-amber-400 font-semibold text-sm hover:underline block">
                    info@ddhimpex.com
                  </a>
                  <p className="text-[11px] text-slate-400 mt-1">
                    24/7 Monitored Inquiry Desk for RFQ & Project proposals.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Business Hours</h3>
                  <p className="text-xs text-slate-300">
                    Monday - Saturday: 9:00 AM - 7:00 PM (IST)
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    International desk available across time zones.
                  </p>
                </div>
              </div>

            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
              <span>Strict compliance with NDA & confidentiality agreements for custom engineering projects.</span>
            </div>

          </div>

          {/* Right Column: Contact Form with Division Switch */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            
            {/* Division Switch Tabs */}
            <div className="flex rounded-2xl bg-slate-950 p-1.5 border border-slate-800 mb-8">
              <button
                type="button"
                onClick={() => setActiveTab('epc')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 ${
                  activeTab === 'epc'
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Factory className="w-4 h-4" />
                <span>For EPC Business</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('supply-chain')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 ${
                  activeTab === 'supply-chain'
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Package className="w-4 h-4" />
                <span>For Supply Chain Business</span>
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out regarding <strong className="text-amber-400">{activeTab === 'epc' ? 'EPC Engineering' : 'Supply Chain & Products'}</strong>. Our representative will get back to you promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-amber-500 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors mt-4"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-2">
                  {activeTab === 'epc' ? 'Inquiry Type: Engineering, LSTK Projects & Tech Evaluation' : 'Inquiry Type: Chemicals, FMCG Food Products & Export Sourcing'}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name *</label>
                    <input 
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address *</label>
                    <input 
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Company Name</label>
                    <input 
                      type="text"
                      placeholder="Organization / Enterprise"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">City / Location *</label>
                    <input 
                      type="text"
                      required
                      placeholder="Provide valid city"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Message / Specifications *</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder={activeTab === 'epc' ? "Please outline your plant engineering requirements, technology evaluation needs, or project scope..." : "Please specify chemical name/CAS No., required packaging, volume, and target port..."}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button 
                  type="submit"
                  className={`w-full py-4 rounded-xl font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg flex items-center justify-center space-x-2 ${
                    activeTab === 'epc'
                      ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20'
                      : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/20'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to DDH Impex</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
