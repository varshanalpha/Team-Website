import React from 'react'
import { X, Play, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react'

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
              SIH 2026 PITCH VIDEO &bull; CAPACITYCONNECT
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-200/60 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-video bg-slate-900 flex flex-col items-center justify-center text-center p-8 overflow-hidden">
          {/* Subtle weather animation / radar background lines */}
          <div className="absolute inset-0 bg-radial from-sky-950/40 via-slate-900 to-slate-950 opacity-90" />
          
          <div className="relative z-10 space-y-4 max-w-lg">
            <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center mx-auto text-white shadow-xl hover:scale-110 transition cursor-pointer">
              <Play className="w-7 h-7 fill-white ml-1" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white tracking-tight">
                CapacityConnect: Official Jury Presentation
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Duration: 04:30 • Full System Architecture &amp; Live Evaluation Run
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300 font-mono">
                1. Problem: Disconnected Systems
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300 font-mono">
                2. Solution: 3 Role Portals
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300 font-mono">
                3. Live Demo
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-600">
            <p className="font-semibold text-slate-900">Ready to test the live system?</p>
            <p className="text-slate-500">Explore the interactive live prototype with preloaded meteorological modules.</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition"
            >
              Close
            </button>
            <a
              href="https://capacityconnect-imd.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-pill-btn inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm"
            >
              <span>OPEN LIVE PROTOTYPE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
