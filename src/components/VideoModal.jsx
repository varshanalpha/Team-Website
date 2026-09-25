import React from 'react'
import { X, ExternalLink } from 'lucide-react'

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
              SIH 2026 PITCH VIDEO &bull; CAPACITYCONNECT
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://youtu.be/t2qQ9k7x84c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-slate-600 hover:text-red-600 transition flex items-center gap-1.5"
            >
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-200/60 transition cursor-pointer"
              aria-label="Close video modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Responsive YouTube Player Iframe */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src="https://www.youtube.com/embed/t2qQ9k7x84c?autoplay=1&rel=0"
            title="Capacity Connect Competency Driven Learning and Capacity Building Portal"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 bg-white flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
          <div className="text-xs text-slate-600 text-center sm:text-left">
            <p className="font-semibold text-slate-900 text-sm">
              Capacity Connect 💻 Competency Driven Learning &amp; Capacity Building Portal
            </p>
            <p className="text-slate-500 mt-0.5">
              Official video presentation by Team MindNova for Smart India Hackathon (SIH 2026).
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition cursor-pointer"
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
