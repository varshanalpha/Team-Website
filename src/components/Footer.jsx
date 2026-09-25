import React from 'react'
import { ShieldCheck } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { name: 'Team MindNova & Mentors', href: '#team' },
    { name: 'The Challenge & Problem', href: '#problem' },
    { name: 'One Connected Training Journey', href: '#solution' },
    { name: 'Technical Architecture & Stack', href: '#architecture' },
    { name: 'Case Study', href: '#case-study' },
  ]

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Left Column: Brand & SIH Badge */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white px-2.5 py-1.5 rounded-xl shadow-xs inline-flex items-center justify-center">
                <img
                  src="/images/mindnova-logo-transparent@2x.png"
                  alt="MindNova Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight">CapacityConnect</span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  Team MindNova
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Competency-driven training, evaluation, and credentialing portal engineered for the India
              Meteorological Department (IMD) and Ministry of Earth Sciences (MoES).
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-slate-800/80 border border-slate-700 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>SIH 2026 | Problem ID: SIH26075 | Team MindNova</span>
            </div>
          </div>

          {/* Right Column: Navigation */}
          <div className="md:col-span-5 space-y-3 md:pl-8">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-4">
              NAVIGATION
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Team ID */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© 2026 CapacityConnect • Team MindNova. Built for Smart India Hackathon.</p>
          <div className="flex items-center gap-2">
            <span>Smart India Hackathon 2026</span>
            <span>•</span>
            <span className="text-sky-400 font-bold">Team ID: 153706</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
