import React from 'react'
import {
  Layers,
  UserCheck,
  EyeOff,
  Target,
} from 'lucide-react'

export default function ProblemSection() {
  const challenges = [
    {
      id: '01',
      title: 'Fragmented Training',
      tag: 'Disconnected Platforms',
      icon: Layers,
      color: 'text-amber-600 bg-amber-50 border-amber-200/80',
      description:
        'Training sessions, resources, assignments and communication are spread across multiple platforms.',
      detail:
        'WhatsApp groups, Google Meet sessions, and email threads fragment critical course materials and documentation.',
    },
    {
      id: '02',
      title: 'Manual Trainer Selection',
      tag: 'Allocation Overhead',
      icon: UserCheck,
      color: 'text-rose-600 bg-rose-50 border-rose-200/80',
      description:
        'Finding the right trainer for a specific competency or training requirement involves manual effort.',
      detail:
        'No centralized, searchable registry of certified meteorological instructors mapped to specialized domains.',
    },
    {
      id: '03',
      title: 'Limited Progress Visibility',
      tag: 'Telemetry Deficit',
      icon: EyeOff,
      color: 'text-blue-600 bg-blue-50 border-blue-200/80',
      description:
        'Trainers and administrators have limited visibility into participation, assessment results and overall training progress.',
      detail:
        'Completion records and quiz results remain trapped in localized physical logs and disconnected spreadsheets.',
    },
    {
      id: '04',
      title: 'Unclear Competency Gaps',
      tag: 'Evaluation Gap',
      icon: Target,
      color: 'text-purple-600 bg-purple-50 border-purple-200/80',
      description:
        "The gap between an employee's required competency and current competency is not easily identified.",
      detail:
        'Annual APAR reports provide retrospective reviews rather than proactive, real-time diagnostic skill mapping.',
    },
  ]

  return (
    <section id="problem" className="py-24 bg-[#f5f5f7] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200/90 shadow-2xs text-slate-700 mb-4">
            <span className="font-mono text-xs uppercase tracking-wider text-rose-600 font-bold">
              PROBLEM STATEMENT
            </span>
            <span className="text-slate-300">•</span>
            <span className="font-mono text-xs text-slate-600 uppercase">SIH Problem ID: SIH26075</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-5">
            The Challenge
          </h2>

          {/* Key Callout Block Matching Field Spec */}
          <div className="relative inline-block text-left bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              {/* Vertical Accent Bar */}
              <div className="w-1.5 self-stretch bg-slate-900 rounded-full shrink-0" />
              <div>
                <p className="text-base sm:text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                  “Training is happening, but competency is difficult to track.”
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                  Despite continuous operational sessions across IMD centers, the absence of a unified digital
                  infrastructure makes verifying readiness, closing skill gaps, and mobilizing instructors an uphill task.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Problem Challenge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {challenges.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl ${item.color} border flex items-center justify-center shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                      {item.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-rose-500">{item.id}.</span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm font-semibold text-slate-700 leading-snug mb-3">
                    {item.description}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>IMD Operational Bottleneck</span>
                  <span className="text-rose-500 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Deficit #{item.id}
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
