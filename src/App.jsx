import React, { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TeamSection from './components/TeamSection'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import ArchitectureSection from './components/ArchitectureSection'
import ValidationSection from './components/ValidationSection'
import Footer from './components/Footer'
import VideoModal from './components/VideoModal'
import MemberModal from './components/MemberModal'

export default function App() {
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [selectedMember, setSelectedMember] = useState(null)

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-slate-900 selection:bg-sky-100 selection:text-sky-900">
      {/* 1. Sticky Frosted Header */}
      <Navbar />

      {/* 2. Hero Section */}
      <HeroSection onOpenVideo={() => setVideoModalOpen(true)} />

      {/* 3. Team & Mentors Section */}
      <TeamSection onSelectMember={(member) => setSelectedMember(member)} />

      {/* 4. The Problem Statement Section */}
      <ProblemSection />

      {/* 5. The Solution & Key Features Section (with Simulated Mac Viewport) */}
      <SolutionSection />

      {/* 6. Technical Architecture Section */}
      <ArchitectureSection />

      {/* 7. Expert Validation Case Study Section */}
      <ValidationSection />

      {/* 9. Institutional Deep Slate Footer */}
      <Footer />

      {/* Interactive Modals */}
      <VideoModal isOpen={videoModalOpen} onClose={() => setVideoModalOpen(false)} />
      <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </div>
  )
}
