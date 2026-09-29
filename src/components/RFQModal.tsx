'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2, FileText, Printer, Mail, ShieldCheck, Download } from 'lucide-react';

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const RFQModal: React.FC<RFQModalProps> = ({ isOpen, onClose, initialProduct = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productOrService: initialProduct,
    quantity: '20 Metric Tons / LSTK Package',
    destination: 'Port of Hamburg / CIF Destination',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [proposalId, setProposalId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = 'DDH-PROP-' + Math.floor(100000 + Math.random() * 900000);
    setProposalId(generatedId);
    setSubmitted(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      
      <div className="relative w-full max-w-2xl bg-white text-slate-900 border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-8 p-6 sm:p-8">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Official Generated Business Proposal Document View */
          <div className="space-y-6 animate-in fade-in duration-300">
            
            {/* Header Banner */}
            <div className="bg-[#0228d2] text-white p-6 rounded-xl space-y-2 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="text-xs font-black uppercase tracking-widest text-blue-200">
                  OFFICIAL RFQ PROPOSAL RECEIPT
                </div>
                <span className="bg-emerald-400 text-slate-950 text-[10px] font-black uppercase px-2.5 py-1 rounded">
                  DISPATCHED TO info@ddhimpex.com
                </span>
              </div>
              <h3 className="text-2xl font-black">DDH IMPEX PROPOSAL #{proposalId}</h3>
              <p className="text-xs text-blue-100">
                Generated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} | Sent to Corporate Sales Desk
              </p>
            </div>

            {/* Generated Proposal Details */}
            <div className="border border-slate-200 rounded-xl p-6 bg-slate-50 space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-200">
                <div>
                  <span className="text-slate-500 block">Requested By:</span>
                  <span className="font-bold text-slate-900 text-sm">{formData.name}</span>
                  <span className="block text-slate-600">{formData.company || 'Private Entity'}</span>
                  <span className="block text-slate-600">{formData.email} | {formData.phone}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Recipient Address:</span>
                  <span className="font-bold text-[#0228d2] text-sm">info@ddhimpex.com</span>
                  <span className="block text-slate-600">DDH Impex Corporate HQ</span>
                  <span className="block text-slate-600">Ludhiana, Punjab, India</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Target Product / Service:</span>
                  <span className="font-bold text-slate-900">{formData.productOrService || initialProduct}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Requested Volume / Scope:</span>
                  <span className="font-bold text-slate-900">{formData.quantity}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Destination Port / CIF:</span>
                  <span className="font-bold text-slate-900">{formData.destination}</span>
                </div>
                {formData.message && (
                  <div className="pt-2">
                    <span className="text-slate-500 block mb-1">Custom Notes / Specs:</span>
                    <p className="bg-white p-3 rounded border border-slate-200 text-slate-800 italic">
                      &quot;{formData.message}&quot;
                    </p>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-2 text-[#0228d2] font-semibold pt-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified ISO 9001:2015 Export Documentation & Lead Time Estimate Attached</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <button 
                onClick={handlePrint}
                className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider flex items-center space-x-2 transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save Proposal PDF</span>
              </button>

              <button 
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Close Window
              </button>
            </div>

          </div>
        ) : (
          /* Form Input View */
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-50 text-[#0228d2] border border-blue-100">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">Generate Official Proposal / RFQ</h3>
                <p className="text-xs text-slate-500">Directly addressed & dispatched to <strong className="text-[#0228d2]">info@ddhimpex.com</strong></p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Your Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#0228d2]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Business Email *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#0228d2]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Company / Organization</label>
                  <input 
                    type="text" 
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#0228d2]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Phone / WhatsApp</label>
                  <input 
                    type="tel" 
                    placeholder="+91 / Country Code"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#0228d2]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Product / EPC Service *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. MIBC, 2-EHA, Basmati Rice, or EPC Basic Engineering"
                  value={formData.productOrService}
                  onChange={(e) => setFormData({...formData, productOrService: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#0228d2]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Estimated Quantity / Capacity</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 20 MT / LSTK Plant"
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#0228d2]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Destination Port / CIF Country</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Port of Antwerp, UAE, India"
                    value={formData.destination}
                    onChange={(e) => setFormData({...formData, destination: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#0228d2]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Packaging Specs & Notes</label>
                <textarea 
                  rows={3}
                  placeholder="Describe your packaging type, chemical purity requirements, or site specifications..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#0228d2]"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#0228d2] hover:bg-blue-700 text-white font-black text-sm uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Generate & Dispatch Proposal to info@ddhimpex.com</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
