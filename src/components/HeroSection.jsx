import React from 'react'
import { Play, Compass, ShieldCheck, ArrowRight } from 'lucide-react'

export default function HeroSection({ onOpenVideo }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#f5f5f7] border-b border-slate-200 overflow-hidden">
      {/* Subtle atmospheric backdrop decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-sky-200/40 via-blue-100/30 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Trio of Metadata Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-slate-900 text-white shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="tracking-wide">SIH 2026</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-white border border-slate-200 text-slate-700 shadow-2xs">
            <span className="text-slate-400">#</span>
            <span>Problem ID: SIH26075</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-medium bg-sky-50 border border-sky-200 text-sky-800 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            <span>Theme: Smart Education</span>
          </div>
        </div>

        {/* Main Hero Typography */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.15] mb-6">
          CapacityConnect: <br className="hidden sm:inline" />
          <span className="text-[#1468D4]">Weather-Ready Nation.</span>
        </h1>

        {/* Subtitle / Philosophical Quote */}
        <p className="text-slate-500 text-lg sm:text-xl md:text-2xl font-light italic mb-6">
          "Building people. Stronger weather services. A safer India."
        </p>

        {/* Descriptive Paragraph */}
        <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-10">
          A unified, competency-driven learning and credentialing ecosystem designed for the{' '}
          <strong className="text-slate-900 font-semibold">India Meteorological Department</strong>{' '}
          and{' '}
          <strong className="text-slate-900 font-semibold">Ministry of Earth Sciences</strong> to
          systematize training, track operational skills, and accelerate disaster preparedness.
        </p>

        {/* Dual Call-to-Action Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.youtube.com/watch?v=t2qQ9k7x84c"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-pill-btn w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-sm cursor-pointer group"
          >
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3 h-3 fill-white text-white ml-0.5" />
            </div>
            <span>Watch Pitch Video</span>
          </a>

          <a
            href="https://capacity-connect-lilac-five.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-pill-btn w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-900 font-semibold text-sm shadow-2xs group cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#1468D4] group-hover:rotate-45 transition-transform" />
            <span>Explore Prototype</span>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
