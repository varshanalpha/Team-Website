import React from 'react'
import {
  Code2,
  Server,
  Database,
  Layers,
  ShieldCheck,
  Sparkles,
  Boxes,
  Cloud,
  CheckCircle2
} from 'lucide-react'

export default function ArchitectureSection() {
  const stack = [
    {
      name: 'React 18 & Vite',
      category: 'Frontend Client',
      role: 'Responsive client interface built with React 18, Vite, Tailwind CSS, Lucide React icons, and Recharts telemetry visualization.',
      tags: ['React 18', 'Vite', 'Tailwind CSS', 'Recharts', 'Lucide React'],
      icon: Code2,
      color: 'text-sky-600 bg-sky-50 border-sky-100',
    },
    {
      name: 'Python & FastAPI',
      category: 'Backend REST APIs',
      role: 'Asynchronous microservices powering REST endpoints, Pydantic strict data validation, and role-based route guards.',
      tags: ['Python', 'FastAPI', 'Pydantic', 'AsyncIO'],
      icon: Server,
      color: 'text-blue-600 bg-blue-50 border-blue-100',
    },
    {
      name: 'PostgreSQL & SQLAlchemy',
      category: 'Relational Database',
      role: 'ACID-compliant relational database modeled with SQLAlchemy ORM for courses, enrollments, assessments, and user roles.',
      tags: ['PostgreSQL', 'SQLAlchemy', 'Relational ORM'],
      icon: Database,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
    {
      name: 'Alembic',
      category: 'Database Migrations',
      role: 'Version-controlled database schema migrations ensuring deterministic version tracking across development and deployment.',
      tags: ['Alembic', 'Version Control', 'Auto-Migrations'],
      icon: Layers,
      color: 'text-amber-600 bg-amber-50 border-amber-100',
    },
    {
      name: 'PyJWT & pwdlib',
      category: 'Auth & Security',
      role: 'Cryptographic JSON Web Token (JWT) session generation, password hashing via pwdlib, and role-guarded endpoint security.',
      tags: ['PyJWT', 'pwdlib', 'Password Hashing', 'RBAC Security'],
      icon: ShieldCheck,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
    {
      name: 'Sentence Transformers & pgvector',
      category: 'AI Matching Engine',
      role: 'Semantic competency matching using all-MiniLM-L6-v2 embeddings and pgvector cosine similarity to pair training programs with optimal trainers.',
      tags: ['Sentence Transformers', 'all-MiniLM-L6-v2', 'pgvector', 'Cosine Similarity'],
      icon: Sparkles,
      color: 'text-purple-600 bg-purple-50 border-purple-100',
    },
    {
      name: 'Docker',
      category: 'Containerization',
      role: 'Multi-stage Docker containerization packaging application runtimes, isolating system dependencies, and streamlining deployment.',
      tags: ['Docker', 'Multi-Stage Builds', 'Container Runtime'],
      icon: Boxes,
      color: 'text-cyan-600 bg-cyan-50 border-cyan-100',
    },
    {
      name: 'Vercel & Render',
      category: 'Cloud Deployment',
      role: 'Automated CI/CD pipelines deploying the static frontend SPA to Vercel Edge CDN and the FastAPI backend service to Render.',
      tags: ['Vercel Edge', 'Render Cloud', 'CI/CD Pipelines'],
      icon: Cloud,
      color: 'text-rose-600 bg-rose-50 border-rose-100',
    },
  ]

  return (
    <section id="architecture" className="py-24 bg-[#f5f5f7] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200/80 shadow-2xs text-slate-700 mb-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#1468D4]">
              HIGH-PERFORMANCE TECH STACK
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-3">
            Technical Architecture
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Clean architectural breakdown of the core technologies powering CapacityConnect's high-speed,
            AI-driven learning &amp; evaluation infrastructure.
          </p>
        </div>

        {/* 8 Tech Stack Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-2xl ${item.color} border flex items-center justify-center shrink-0 shadow-2xs`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full border border-slate-200/80">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                    {item.role}
                  </p>

                  {/* Micro Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 bg-slate-50 text-slate-600 border border-slate-200 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Stack 0{index + 1}</span>
                  <span className="text-emerald-600 font-semibold inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Active
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

