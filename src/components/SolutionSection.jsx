import React from 'react'
import {
  BookOpen,
  Target,
  Sparkles,
  BarChart3,
  LayoutDashboard,
} from 'lucide-react'

export default function SolutionSection() {
  const solutions = [
    {
      id: '01',
      title: 'Centralized Learning',
      badge: 'Unified Platform',
      icon: BookOpen,
      color: 'text-blue-600 bg-blue-50 border-blue-200/80',
      description:
        'Manage training sessions, resources, assignments, assessments and communication in one place.',
      benefit: 'Eliminates scattered WhatsApp groups and disconnected Google Drive folders.',
    },
    {
      id: '02',
      title: 'Competency Gap Analysis',
      badge: 'Precision Mapping',
      icon: Target,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200/80',
      description:
        'Compare required competencies with existing competency levels to identify areas that need development.',
      benefit: 'Pinpoints specific radar, satellite, and forecasting skills requiring reinforcement.',
    },
    {
      id: '03',
      title: 'Smart Trainer Matching',
      badge: 'Expert Allocation',
      icon: Sparkles,
      color: 'text-purple-600 bg-purple-50 border-purple-200/80',
      description:
        'Match training requirements with suitable trainers based on competency, qualification, experience and availability.',
      benefit: 'Instant instructor discovery across all IMD Regional Meteorological Centers.',
    },
    {
      id: '04',
      title: 'Unified Progress Tracking',
      badge: 'Real-Time Telemetry',
      icon: BarChart3,
      color: 'text-amber-600 bg-amber-50 border-amber-200/80',
      description:
        'Track participation, assessments, feedback and training progress through a centralized system.',
      benefit: 'Live completion metrics replacing slow, manual physical register reviews.',
    },
    {
      id: '05',
      title: 'Data-Driven Administration',
      badge: 'Executive Governance',
      icon: LayoutDashboard,
      color: 'text-cyan-600 bg-cyan-50 border-cyan-200/80',
      description:
        'Give administrators dashboards and insights to manage training programmes and make informed capacity-building decisions.',
      benefit: 'High-level MoES analytics for workforce readiness and emergency deployment.',
    },
  ]

  return (
    <section id="solution" className="py-24 bg-[#f5f5f7] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200/90 shadow-2xs text-slate-700 mb-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[#1468D4] font-bold">
              THE SOLUTION
            </span>
            <span className="text-slate-300">•</span>
            <span className="font-mono text-xs text-slate-600 uppercase">UNIFIED ARCHITECTURE</span>
          </div>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-6">
            A unified ecosystem designed to eliminate disconnected platforms, standardize training delivery, and automate competency credentialing.
          </p>

          {/* Solution Highlight Quote Pill */}
          <div className="relative inline-block text-left bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              {/* Vertical Accent Bar */}
              <div className="w-1.5 self-stretch bg-[#1468D4] rounded-full shrink-0" />
              <div>
                <p className="text-base sm:text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                  “CAPACITY CONNECT brings training, competency and career development together in one centralized platform.”
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                  Engineered specifically for IMD and MoES to systematize training, close skill gaps, and certify meteorological personnel with audit-ready credentials.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Core Solution Pillars Grid (3 on top row, 2 symmetric on bottom row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {solutions.map((item, idx) => {
            const Icon = item.icon
            // Row 1: 3 items (2 cols each). Row 2: 2 items (3 cols each).
            const spanClass =
              idx < 3
                ? 'lg:col-span-2'
                : idx === 4
                ? 'md:col-span-2 lg:col-span-3'
                : 'lg:col-span-3'

            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group ${spanClass}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl ${item.color} border flex items-center justify-center shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold bg-slate-100 border border-slate-200 text-slate-600 px-2.5 py-1 rounded-md uppercase">
                      {item.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-[#1468D4]">{item.id}.</span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm font-semibold text-slate-700 leading-snug mb-3">
                    {item.description}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.benefit}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Capability #{item.id}</span>
                  <span className="text-[#1468D4] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Integrated ↗
                  </span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
