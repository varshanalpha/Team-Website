import React from 'react'
import { X, ShieldCheck, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react'

export default function MemberModal({ member, onClose }) {
  if (!member) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Modal Header Strip */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#1468D4]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
              TEAM DOSSIER &bull; {member.memberNo}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-200/60 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Member Profile Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-5">
            {member.image ? (
              <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 shadow-md border border-slate-200">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
            ) : (
              <div
                className={`w-16 h-16 rounded-2xl ${member.avatarBg} text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-md`}
              >
                {member.initials}
              </div>
            )}
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                TEAM MEMBER
              </span>
              <h3 className="text-xl font-black text-slate-900 leading-tight">{member.name}</h3>
              <div className="inline-flex items-center gap-2 mt-1.5">
                <span className="text-xs font-bold text-[#1468D4]">{member.role}</span>
                <span className="text-slate-300">&bull;</span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                  {member.badge}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              PROJECT CONTRIBUTIONS
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal bg-slate-50 p-4 rounded-xl border border-slate-100">
              {member.contributions}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              CORE COMPETENCIES &amp; SKILLS
            </h4>
            <div className="flex flex-wrap gap-2">
              {member.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 border border-blue-200 text-[#082B5C]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">Team ID: 153706</span>
          <button
            onClick={onClose}
            className="apple-pill-btn px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wider uppercase transition shadow-2xs"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  )
}
