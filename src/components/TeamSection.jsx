import React from 'react'
import { ShieldCheck, Award, BadgeCheck, Cpu } from 'lucide-react'

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Varshan R',
    role: 'Team Lead & System Architect',
    badge: 'LEAD',
    badgeType: 'lead',
    memberNo: 'Lead 01',
    initials: 'VR',
    image: '/images/varshan.jpg',
    avatarBg: 'bg-blue-600',
    description:
      'Overall system architecture, requirement analysis, module coordination, technology decisions, integration and project management.',
    skills: ['System Architecture', 'Requirement Analysis', 'Module Coordination', 'Project Management'],
    contributions:
      'Overall system architecture, requirement analysis, module coordination, technology decisions, integration and project management.',
  },
  {
    id: 2,
    name: 'Sheshagiri S',
    role: 'Frontend Developer & UI/UX Engineer',
    badge: 'CODE',
    badgeType: 'code',
    memberNo: 'Member 2',
    initials: 'SS',
    image: '/images/sheshagiri.jpg',
    avatarBg: 'bg-emerald-600',
    description:
      'Developed the responsive user interface using React, Vite, Tailwind CSS, Lucide React and Recharts, including Trainee, Trainer and Admin dashboards.',
    skills: ['React', 'Tailwind CSS', 'Vite', 'Lucide React', 'Recharts'],
    contributions:
      'Developed the responsive user interface using React, Vite, Tailwind CSS, Lucide React and Recharts, including Trainee, Trainer and Admin dashboards.',
  },
  {
    id: 3,
    name: 'Suganth R',
    role: 'Backend & API Developer',
    badge: 'CODE',
    badgeType: 'code',
    memberNo: 'Member 3',
    initials: 'SR',
    image: '/images/suganth.jpg?v=3',
    avatarBg: 'bg-sky-600',
    description:
      'Developed backend services and REST APIs using Python, FastAPI and Pydantic, including API validation, business logic and frontend-backend integration.',
    skills: ['Python', 'FastAPI', 'Pydantic', 'REST APIs', 'Frontend-Backend Integration'],
    contributions:
      'Developed backend services and REST APIs using Python, FastAPI and Pydantic, including API validation, business logic and frontend-backend integration.',
  },
  {
    id: 4,
    name: 'Jeevith LS',
    role: 'Database & Authentication Engineer',
    badge: 'DATA',
    badgeType: 'code',
    memberNo: 'Member 4',
    initials: 'JL',
    image: '/images/jeevith.jpg',
    avatarBg: 'bg-amber-600',
    description:
      'Designed and managed PostgreSQL using SQLAlchemy and Alembic, and implemented authentication using PyJWT and pwdlib.',
    skills: ['PostgreSQL', 'SQLAlchemy', 'Alembic', 'PyJWT', 'pwdlib'],
    contributions:
      'Designed and managed PostgreSQL using SQLAlchemy and Alembic, and implemented authentication using PyJWT and pwdlib.',
  },
  {
    id: 5,
    name: 'Subasri S',
    role: 'AI & Competency Matching Engineer',
    badge: 'AI',
    badgeType: 'code',
    memberNo: 'Member 5',
    initials: 'SS',
    image: '/images/subasri.jpg',
    avatarBg: 'bg-indigo-600',
    description:
      'Developed semantic competency matching using Sentence Transformers, all-MiniLM-L6-v2, pgvector and cosine similarity for competency and trainer matching.',
    skills: ['Sentence Transformers', 'all-MiniLM-L6-v2', 'pgvector', 'Cosine Similarity'],
    contributions:
      'Developed semantic competency matching using Sentence Transformers, all-MiniLM-L6-v2, pgvector and cosine similarity for competency and trainer matching.',
  },
  {
    id: 6,
    name: 'Srisha Radhakrishnan',
    role: 'DevOps, Testing & Documentation Engineer',
    badge: 'DEVOPS',
    badgeType: 'code',
    memberNo: 'Member 6',
    initials: 'SR',
    image: '/images/srisha.jpg?v=2',
    avatarBg: 'bg-purple-600',
    description:
      'Handled Docker containerization, Vercel/Render deployment, system testing, debugging, documentation, research and prototype demonstration.',
    skills: ['Docker', 'Vercel / Render', 'System Testing', 'Technical Documentation'],
    contributions:
      'Handled Docker containerization, Vercel/Render deployment, system testing, debugging, documentation, research and prototype demonstration.',
  },
]

export const MENTORS = [
  {
    name: 'Muthusamy K',
    role: 'Project Mentor',
    image: '/images/mentor1.jpg',
    initials: 'MK',
    avatarBg: 'bg-emerald-700',
    badge: 'SIH 26075 MindNova',
    hoverShadow: 'hover:shadow-[-14px_18px_35px_rgba(0,216,255,0.55)]',
  },
  {
    name: 'Manju Shanmugam',
    role: 'Technical Mentor',
    image: '/images/mentor2.jpg',
    initials: 'MS',
    avatarBg: 'bg-teal-700',
    badge: 'SIH 26075 MindNova',
    hoverShadow: 'hover:shadow-[14px_18px_35px_rgba(0,216,255,0.55)]',
  },
]

export default function TeamSection({ onSelectMember }) {
  return (
    <section id="team" className="py-24 bg-[#f5f5f7] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-mono uppercase tracking-wider shadow-xs">
            <img src="/images/sih-logo.png" alt="SIH 2026" className="w-4 h-4 object-contain shrink-0" />
            <span>Smart India Hackathon 2026</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="inline-flex p-1 bg-white rounded-xl border border-slate-200 shadow-2xs">
              <img src="/images/mindnova-logo-transparent@2x.png" alt="MindNova" className="h-8 sm:h-9 w-auto object-contain" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
              Team MindNova &amp; Mentors
            </h2>
          </div>
          <p className="text-slate-600 text-base sm:text-lg">
            Digital Identity Credentials for <strong className="text-slate-900 font-mono">Team ID: 153706</strong>
          </p>
        </div>

        {/* Team Subhead */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
            <div className="flex items-center space-x-3">
              <Cpu className="w-5 h-5 text-slate-800" />
              <h3 className="text-xl font-bold text-slate-900 font-sans tracking-wide">
                Team MindNova (Team ID 153706)
              </h3>
            </div>
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-2xs">
              <img src="/images/mindnova-logo-transparent@2x.png" alt="MindNova" className="h-4.5 w-auto object-contain" />
              <span className="text-xs font-mono text-slate-700 font-semibold">Team MindNova</span>
            </div>
          </div>

          {/* 6 Member Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member, index) => {
              const shadowHover =
                index % 3 === 0
                  ? 'hover:shadow-[-14px_18px_35px_rgba(0,216,255,0.55)]'
                  : index % 3 === 1
                  ? 'hover:shadow-[0_20px_35px_rgba(0,216,255,0.55)]'
                  : 'hover:shadow-[14px_18px_35px_rgba(0,216,255,0.55)]'

              return (
                <div
                  key={member.id}
                  onClick={() => onSelectMember && onSelectMember(member)}
                  className={`bg-white rounded-3xl overflow-hidden flex flex-col h-full shadow-sm ${shadowHover} hover:border-cyan-400 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer border border-slate-100 group`}
                >
                  <div className="p-6 bg-white">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <ShieldCheck className="w-4 h-4 text-sky-600" />
                        <span className="text-xs font-mono text-slate-500">SIH 26075 CapacityConnect</span>
                      </div>
                      <span
                        className={`text-[10px] font-mono px-2.5 py-0.5 rounded border ${
                          member.badgeType === 'lead'
                            ? 'bg-slate-900 text-white font-bold'
                            : 'bg-slate-100 text-slate-800 border-slate-300'
                        }`}
                      >
                        {member.badge}
                      </span>
                    </div>

                    <div className="flex items-start space-x-4 my-2">
                      {member.image ? (
                        <div className="w-16 h-16 bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shrink-0 shadow-xs">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              e.target.style.display = 'none'
                            }}
                          />
                        </div>
                      ) : (
                        <div
                          className={`w-16 h-16 ${member.avatarBg} text-white font-bold text-xl rounded-2xl flex items-center justify-center shrink-0 shadow-xs tracking-wider group-hover:scale-105 transition-transform duration-300`}
                        >
                          {member.initials}
                        </div>
                      )}
                      <div className="pt-1">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                          <span className="text-slate-400 text-xs font-mono font-normal mr-1.5">NAME:</span>
                          {member.name}
                        </h4>
                        <p className="text-[11px] font-mono text-sky-700 mt-1 mb-0.5 font-semibold">
                          <span className="text-slate-400 text-[10px] font-mono font-normal mr-1.5">ROLE:</span>
                          {member.role}
                        </p>
                        <p className="text-[10px] font-mono text-slate-400">{member.memberNo}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50 border-t border-slate-100 flex-1 flex flex-col justify-between">
                    <p className="text-[12px] text-slate-600 leading-relaxed mb-3">
                      {member.description}
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-200/50 text-[11px] font-mono text-slate-400">
                      <span>{member.memberNo}</span>
                      <span className="text-sky-600 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Details ↗
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Project & Technical Mentors - EXACT REFERENCE LAYOUT */}
        <div>
          <div className="flex items-center space-x-3 mb-8 pb-3 border-b border-slate-200">
            <Award className="w-5 h-5 text-emerald-700" />
            <h3 className="text-xl font-bold text-slate-900 font-sans tracking-wide">
              Project &amp; Technical Mentors
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6">
            {MENTORS.map((mentor, i) => (
              <div
                key={i}
                className={`bg-white rounded-3xl overflow-hidden flex flex-col h-full shadow-sm ${mentor.hoverShadow} hover:border-cyan-400 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer border border-slate-100`}
              >
                <div className="p-6 bg-white flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <BadgeCheck className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs font-mono text-slate-500">{mentor.badge}</span>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded border bg-emerald-50 text-emerald-900 border-emerald-200">
                      MENTOR
                    </span>
                  </div>
                  <div className="flex items-start space-x-4 my-2">
                    {mentor.image ? (
                      <div className="w-16 h-16 bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shrink-0 shadow-xs">
                        <img
                          src={mentor.image}
                          alt={mentor.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none'
                          }}
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-16 h-16 ${mentor.avatarBg} text-white font-bold text-xl rounded-2xl flex items-center justify-center shrink-0 shadow-xs tracking-wider`}
                      >
                        {mentor.initials}
                      </div>
                    )}
                    <div className="pt-1">
                      <h4 className="text-base font-bold text-slate-900">
                        <span className="text-slate-400 text-xs font-mono font-normal mr-1.5">NAME:</span>
                        {mentor.name}
                      </h4>
                      <p className="text-[11px] font-mono text-emerald-700 font-semibold mt-1 mb-0.5">
                        <span className="text-slate-400 text-[10px] font-mono font-normal mr-1.5">ROLE:</span>
                        {mentor.role}
                      </p>
                      <p className="text-[10px] font-mono text-slate-400" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
