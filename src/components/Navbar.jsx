import React, { useState } from 'react'
import { ExternalLink, Menu, X, CloudSun, ShieldCheck } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Team', href: '#team' },
    { name: 'Problem', href: '#problem' },
    { name: 'Solution', href: '#solution' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Case Study', href: '#case-study' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5f7]/80 backdrop-blur-xl border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-10 px-2 py-1 rounded-xl bg-white/90 border border-slate-200/90 shadow-2xs flex items-center justify-center group-hover:scale-105 transition">
            <img
              src="/images/mindnova-logo-transparent@2x.png"
              alt="MindNova"
              className="h-8 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight text-slate-900 flex items-center gap-1.5">
              CapacityConnect
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1468D4]" />
            </span>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest -mt-0.5">
              Team MindNova • SIH 2026
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-slate-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://capacityconnect-imd.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-pill-btn inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider shadow-2xs group cursor-pointer"
          >
            <span>VIEW PROTOTYPE</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#f5f5f7]/95 backdrop-blur-2xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200/60 rounded-xl transition"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-200">
            <a
              href="https://capacityconnect-imd.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-pill-btn w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-900 text-white font-semibold text-xs uppercase tracking-wider shadow-sm"
            >
              <span>VIEW PROTOTYPE</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
