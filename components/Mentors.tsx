"use client";

import React from "react";
import DitherBg from "@/components/DitherBg";

interface Mentor {
  name: string;
  role: string;
  organization: string;
  domain: string;
  bio: string;
}

const mentors: Mentor[] = [
  {
    name: "Dr. Elena Vance",
    role: "Head of Systems Architecture",
    organization: "OUANTUM Labs",
    domain: "Distributed Infrastructure & Fault Tolerance",
    bio: "Former Principal Architect at CERN, leading research into self-healing computing backbones and low-latency physical systems.",
  },
  {
    name: "Marcus Chen",
    role: "Principal Systems Engineer",
    organization: "OpenEarth Institute",
    domain: "Climate Telemetry & Grid Balance",
    bio: "Specializing in microgrid balancing, ecological sensor networks, and edge firmware for remote environmental telemetry.",
  },
  {
    name: "Priya Sharma",
    role: "Founder & Lead Architect",
    organization: "Archetype Dynamics",
    domain: "Applied Intelligence & Public Utilities",
    bio: "Pioneer in zero-knowledge public audits and decentralized identity structures deployed across civic utilities.",
  },
  {
    name: "David Thorne",
    role: "Director of Research",
    organization: "Cognitive Systems Group",
    domain: "Autonomous Robotics & Edge Inference",
    bio: "Published author and engineer focusing on deterministic edge machine learning and low-power sensory processing.",
  },
  {
    name: "Sarah Al-Mansoor",
    role: "VP of Engineering",
    organization: "Global Health Protocols",
    domain: "Diagnostic Tools & Clinical Hardware",
    bio: "Directing engineering of offline diagnostic algorithms and cryptographic verification pipelines for global vaccines.",
  },
  {
    name: "Liam O'Connor",
    role: "Lead Hardware Engineer",
    organization: "Tactile Technologies",
    domain: "Assistive Hardware & Universal Accessibility",
    bio: "Designing haptic feedback matrices, multimodal interfaces, and sensory conversion microcontrollers for persons with disabilities.",
  },
];

export default function Mentors() {
  return (
    <section className="bg-white py-12 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 w-full">
      <div className="space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-6xl lg:text-7xl font-geist-thin uppercase tracking-tight text-black leading-tight">
              PEOPLE BEHIND<br />THE JUDGING
            </h2>
          </div>
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4 sm:space-y-6">
            <div className="text-lg sm:text-2xl text-black font-geist-light space-y-1">
              <p>Industry experts.</p>
              <p>Engineers.</p>
              <p>Researchers.</p>
              <p>Founders.</p>
            </div>
            <p className="text-sm sm:text-lg text-neutral-600 font-inter font-light leading-relaxed max-w-md">
              People who understand what it takes to turn an idea into reality. Providing technical office hours during the sprint and rigorous code evaluation across the OUANTUM network.
            </p>
          </div>
        </div>

        {/* Profile Cards with Dither BG */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {mentors.map((m, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden p-6 sm:p-12 bg-[#F5F5F5] rounded-3xl space-y-6 sm:space-y-8 flex flex-col justify-between border border-neutral-100"
            >
              <DitherBg opacity={0.25} />
              <div className="relative z-10 space-y-4 sm:space-y-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter">
                    JURY & MENTOR
                  </span>
                  <span className="text-xs uppercase tracking-widest text-neutral-500 font-inter font-medium">
                    OUANTUM JURY
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
                    {m.name}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-900 font-inter font-normal leading-snug">
                    {m.role} — {m.organization}
                  </p>
                </div>
              </div>

              <div className="relative z-10 space-y-2 pt-2">
                <span className="text-xs font-medium text-black uppercase tracking-wider block">
                  FOCUS: {m.domain}
                </span>
                <p className="text-xs text-neutral-600 font-inter font-light leading-relaxed">
                  {m.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
