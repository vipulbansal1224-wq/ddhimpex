'use client';
import { useRFQ } from '@/context/RFQContext';

import React from 'react';
import { BarChart3, CheckCircle2, ShieldCheck, FileText, ArrowRight, Activity, DollarSign, Lock, RefreshCw } from 'lucide-react';

interface PageProps {
  
}

export default function ProcessEvaluationPage({  }: PageProps) {  const { openRFQ } = useRFQ();

  return (
    <div className="pt-24 pb-20 bg-slate-950 text-white min-h-screen">
      
      {/* Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-b border-slate-800">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>TECHNOLOGY AUDIT DIVISION</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Technology & Process Evaluation
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            A systematic assessment of operational processes and technical tools within an organization to optimize throughput, reduce bottlenecks, and maximize ROI.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        
        {/* Technology Evaluation Breakdown */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl font-bold text-white">Technology Evaluation Framework</h2>
            <p className="text-xs text-slate-400">Assessing effectiveness, suitability, and benefits of technological tools.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Functionality & Performance</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Determining whether technology meets functional requirements, analyzing reliability, speed, accuracy, and scalability under peak load.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Cost-Benefit & ROI Analysis</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Evaluating economic feasibility and return on investment (ROI), comparing capital expenditure with potential efficiency gains and energy savings.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Security & Regulatory Compliance</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ensuring compliance with international safety standards, evaluating vulnerabilities, and assessing vendor support reliability.
              </p>
            </div>
          </div>
        </div>

        {/* Process Evaluation Breakdown */}
        <div className="space-y-8 border-t border-slate-800 pt-16">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl font-bold text-white">Process Evaluation & Workflow Mapping</h2>
            <p className="text-xs text-slate-400">Streamlining operational workflows and removing manufacturing bottlenecks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-amber-400" />
                <span>Process Mapping & KPIs</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Mapping current workflows, inputs, outputs, and stakeholders. Defining key performance indicators (KPIs) to measure cycle time, throughput, error rates, and resource utilization.
              </p>
              <div className="space-y-2 pt-2 text-xs text-slate-400">
                <div className="flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /><span>Cycle time & throughput benchmarking</span></div>
                <div className="flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /><span>Bottleneck & waste elimination</span></div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Change Management & Alignment</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Assessing stakeholder readiness for operational changes. Aligning technological investments with strategic organizational goals to foster continuous improvement.
              </p>
              <div className="space-y-2 pt-2 text-xs text-slate-400">
                <div className="flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /><span>Continuous improvement culture</span></div>
                <div className="flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /><span>Seamless adoption & stakeholder training</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/30 border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Schedule a Technology & Process Audit</h3>
            <p className="text-xs text-slate-400 mt-1">Our expert consultants evaluate your chemical processing plant or manufacturing workflows.</p>
          </div>
          <button
            onClick={() => openRFQ()}
            className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
          >
            Request Technical Audit
          </button>
        </div>

      </div>
    </div>
  );
}
