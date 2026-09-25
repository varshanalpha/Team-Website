import React, { useState } from 'react'
import {
  CheckCircle2,
  Building2,
  Calendar,
  ShieldCheck,
  X,
  ZoomIn,
  Quote,
  ArrowRight,
  Layers,
  FileSpreadsheet,
  AlertTriangle,
  Lightbulb,
  Workflow,
  Sparkles,
  Users,
  Target,
  Compass
} from 'lucide-react'

export default function ValidationSection() {
  const [activePhoto, setActivePhoto] = useState(null)

  const photos = [
    {
      id: 'group',
      src: '/images/imd-group-visit.jpg',
      alt: 'Field consultation at Airport Meteorological Station Coimbatore with IMD Officers',
      title: 'Field Consultation with IMD Officials',
      subtitle: 'Airport Meteorological Station, Coimbatore',
    },
    {
      id: 'board',
      src: '/images/imd-station-board.png',
      alt: 'Airport Meteorological Station Coimbatore official entrance signage',
      title: 'Official Station Board',
      subtitle: 'MoES • IMD Coimbatore',
    },
    {
      id: 'review',
      src: '/images/imd-consultation.jpg',
      alt: 'Technical dossier review and operational discussion with IMD officer',
      title: 'SOP & Register Review',
      subtitle: 'Analyzing existing training logs',
    },
  ]

  const observations = [
    {
      num: '01',
      title: 'Fragmented Training',
      desc: 'Training sessions are conducted through multiple digital platforms, including Google Meet and other communication platforms.',
      icon: Layers,
      accent: 'text-amber-600 bg-amber-50 border-amber-200/60',
    },
    {
      num: '02',
      title: 'Scattered Learning Resources',
      desc: 'Notes and assignments are shared separately through platforms such as WhatsApp and Gmail.',
      icon: FileSpreadsheet,
      accent: 'text-rose-600 bg-rose-50 border-rose-200/60',
    },
    {
      num: '03',
      title: 'No Unified Training Workflow',
      desc: 'Training, learning materials, assignments and progress are managed separately rather than through a unified system.',
      icon: AlertTriangle,
      accent: 'text-purple-600 bg-purple-50 border-purple-200/60',
    },
    {
      num: '04',
      title: 'Limited Competency Assessment',
      desc: 'The case study identified no dedicated and structured mechanism for assessing the competency gained by employees after training.',
      icon: Target,
      accent: 'text-blue-600 bg-blue-50 border-blue-200/60',
    },
  ]

  const pipeline = [
    { step: '01', title: 'IMD Field Study', detail: 'On-ground operational visit at AMS Coimbatore' },
    { step: '02', title: 'Identify Existing Gaps', detail: 'Documented fragmented tools & scattered communication' },
    { step: '03', title: 'Validate Requirements', detail: 'Consulted official personnel on institutional needs' },
    { step: '04', title: 'Design CAPACITY CONNECT', detail: 'Centralized competency & training architecture' },
    { step: '05', title: 'Develop & Demonstrate', detail: 'Built prototype aligned with IMD requirements' },
  ]

  const statBadges = [
    { label: 'Ground Study', val: 'IMD Coimbatore', sub: 'Airport Meteorological Station', icon: Building2 },
    { label: 'Methodology Flow', val: '5-Stage Pipeline', sub: 'Observation to verified prototype', icon: Workflow },
    { label: 'Stakeholder Feedback', val: 'Officials Validated', sub: 'Approach endorsed for prototype dev', icon: ShieldCheck },
  ]

  return (
    <section id="case-study" className="py-24 bg-[#f5f5f7] relative border-b border-slate-200">
      <span id="validation" className="sr-only" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-mono uppercase tracking-wider shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>CASE STUDY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Built from Real-World Insights
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            To understand the practical challenges behind the problem statement, <strong className="text-slate-900 font-semibold">Team MindNova conducted a field study and official interaction at the India Meteorological Department (IMD), Coimbatore.</strong>
          </p>
        </div>

        {/* 2-Column Grid: Context Dossier + Right Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left Column: Field Visit Overview Dossier Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm hover:shadow-[-14px_18px_35px_rgba(0,216,255,0.4)] hover:border-cyan-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Header Strip */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 gap-4">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#1468D4] shrink-0 shadow-2xs">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                      Airport Meteorological Station, Coimbatore
                    </h3>
                    <p className="text-xs text-[#1468D4] font-mono mt-0.5 font-semibold">
                      India Meteorological Department | Ministry of Earth Sciences
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#f5f5f7] border border-slate-200/60 text-xs font-mono text-slate-500 shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>September 2026</span>
                </div>
              </div>

              {/* Core Interaction Narrative */}
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                The team interacted with IMD officials to understand how training sessions, learning materials, assignments, assessments and employee progress are currently managed across meteorological duty shifts.
              </p>

              {/* Quote Block */}
              <div className="relative pl-6 border-l-2 border-sky-500 my-4 space-y-2">
                <Quote className="absolute -top-3 -left-3 w-6 h-6 text-sky-200 fill-sky-100" />
                <blockquote className="text-slate-700 text-sm leading-relaxed italic">
                  &ldquo;Training materials and assignments are fragmented across WhatsApp and Google Meet, with no dedicated mechanism to evaluate employee competency beyond annual APAR reports. A unified, structured competency framework addresses the core operational need.&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Bottom Verification Badges */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="flex items-center space-x-2 text-emerald-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Identified Scattered WhatsApp/Meet Channels</span>
              </div>
              <div className="flex items-center space-x-2 text-emerald-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Validated Unified Portal Need</span>
              </div>
              <div className="flex items-center space-x-2 text-emerald-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Approved Competency Rubrics</span>
              </div>
              <div className="flex items-center space-x-2 text-emerald-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>APAR-Aligned Skill Telemetry</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Interactive Field Photos */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {/* Top Featured Photo: Group Consultation */}
            <div
              onClick={() => setActivePhoto(photos[0])}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm relative group cursor-pointer flex-1 min-h-[200px]"
            >
              <img
                src={photos[0].src}
                alt={photos[0].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-900/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400 block mb-0.5">
                  OFFICIAL FIELD VISIT
                </span>
                <h4 className="text-white text-sm font-bold leading-tight">{photos[0].title}</h4>
                <p className="text-white/80 text-[11px] mt-0.5">{photos[0].subtitle}</p>
              </div>
            </div>

            {/* Bottom Row: 2 Photos Grid */}
            <div className="grid grid-cols-2 gap-4 h-36 sm:h-40">
              {/* Photo 2: Board */}
              <div
                onClick={() => setActivePhoto(photos[1])}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm relative group cursor-pointer h-full"
              >
                <img
                  src={photos[1].src}
                  alt={photos[1].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                <div className="absolute top-2 right-2 p-1 rounded-md bg-slate-900/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>

                <div className="absolute bottom-2.5 left-3 right-3">
                  <span className="block text-[11px] font-bold text-white leading-tight">
                    {photos[1].title}
                  </span>
                  <span className="text-[10px] font-mono text-white/70 block truncate mt-0.5">
                    Coimbatore
                  </span>
                </div>
              </div>

              {/* Photo 3: Consultation Review */}
              <div
                onClick={() => setActivePhoto(photos[2])}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm relative group cursor-pointer h-full"
              >
                <img
                  src={photos[2].src}
                  alt={photos[2].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                <div className="absolute top-2 right-2 p-1 rounded-md bg-slate-900/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>

                <div className="absolute bottom-2.5 left-3 right-3">
                  <span className="block text-[11px] font-bold text-white leading-tight">
                    {photos[2].title}
                  </span>
                  <span className="text-[10px] font-mono text-white/70 block truncate mt-0.5">
                    SOP &amp; Logs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* "What We Observed" — 4 Core Ground Bottlenecks */}
        <div className="max-w-6xl mx-auto space-y-8 pt-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-[#1468D4] uppercase tracking-wider">
              GROUND REALITY ANALYSIS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              What We Observed
            </h3>
            <p className="text-slate-600 text-sm">
              Key operational gaps identified during direct interaction with personnel at IMD Coimbatore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {observations.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex items-start gap-5 group"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${item.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {item.num} &mdash;
                      </span>
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-[#1468D4] transition">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* "The Key Insight" Callout Banner */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden border border-slate-800">
            {/* Background ambient decorative shapes */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-6 max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-mono uppercase tracking-wider border border-white/10">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>The Key Insight</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-snug">
                &ldquo;The challenge is not simply delivering training &mdash; it is connecting training with measurable competency development.&rdquo;
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
                The field study highlighted the need for a unified platform to manage training materials, assessments, projects and employee learning progress, while also providing a structured approach to tracking competency development.
              </p>
            </div>
          </div>
        </div>

        {/* "From Observation to Solution" Pipeline & Official Endorsement */}
        <div className="max-w-6xl mx-auto space-y-8 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-[#1468D4] uppercase tracking-wider">
              METHODOLOGY PIPELINE
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              From Observation to Solution
            </h3>
            <p className="text-slate-600 text-sm">
              The systematic research-backed progression transforming real-world feedback into the CapacityConnect platform.
            </p>
          </div>

          {/* Stepper Flow Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {pipeline.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs relative flex flex-col justify-between hover:border-sky-400 hover:shadow-sm transition"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#1468D4] bg-sky-50 px-2 py-0.5 rounded-md">
                      Step {item.step}
                    </span>
                    {idx < pipeline.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-slate-300 hidden lg:block" />
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Solution Presentation & Endorsement Card */}
          <div className="bg-sky-50/70 rounded-3xl p-6 sm:p-8 border border-sky-100 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-white border border-sky-200 text-[#1468D4] flex items-center justify-center shrink-0 shadow-xs">
              <Sparkles className="w-7 h-7" />
            </div>
            <div className="space-y-2 flex-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-slate-900">
                Official Feedback &amp; Prototype Refinement
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                The proposed solution was presented to IMD officials for initial validation. According to the documentation, the officials acknowledged the relevance of the approach and encouraged the team to proceed with prototype development; their feedback was used to refine the proposed solution around organizational needs.
              </p>
            </div>
          </div>
        </div>

        {/* Small Stat / Badge Cards for the Website */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {statBadges.map((badge, idx) => {
            const Icon = badge.icon
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs hover:shadow-xs transition"
              >
                <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-mono uppercase text-slate-400 block font-bold">
                  {badge.label}
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 block mt-0.5 leading-snug">
                  {badge.val}
                </span>
                <span className="text-[11px] text-slate-500 block mt-1">
                  {badge.sub}
                </span>
              </div>
            )
          })}
        </div>

      </div>

      {/* Lightbox Modal for Full-Resolution Field Photos */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden cursor-default"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1468D4]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                  {activePhoto.title}
                </span>
              </div>
              <button
                onClick={() => setActivePhoto(null)}
                className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-200/60 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-3 bg-slate-950 flex items-center justify-center max-h-[75vh] overflow-hidden">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>
            <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>{activePhoto.subtitle || activePhoto.alt}</span>
              <button
                onClick={() => setActivePhoto(null)}
                className="apple-pill-btn px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wider uppercase transition shadow-2xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
