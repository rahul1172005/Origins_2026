"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

interface ChallengeDomain {
  id: string;
  title: string;
  headline: string;
  scope: string;
  examples: string[];
}

const domains: ChallengeDomain[] = [
  {
    id: "climate-environment",
    title: "CLIMATE & ENVIRONMENT",
    headline: "Scalable ecological intelligence, clean grid balance, and closed-loop resource systems.",
    scope: "Develop technical systems addressing carbon visibility, biodiversity preservation, decentralized water restoration, or industrial waste telemetry.",
    examples: [
      "Real-time grid load balancing for distributed micro-renewables",
      "Low-cost particulate matter & hyper-local air quality sensor firmware",
      "Soil nutrient degradation prediction using open satellite telemetry",
    ],
  },
  {
    id: "infrastructure",
    title: "INFRASTRUCTURE",
    headline: "Resilience in physical and digital civic backbones under extreme structural stress.",
    scope: "Design tools for civil engineering oversight, municipal pipeline integrity, bridge telemetry, and decentralized logistics pathways.",
    examples: [
      "Acoustic structural vibration analysis for aging bridges",
      "Municipal water leakage localization via flow differential models",
      "Decentralized offline-first dispatch for emergency service vehicles",
    ],
  },
  {
    id: "health-wellbeing",
    title: "HEALTH & WELLBEING",
    headline: "Diagnostic accessibility, decentralized triage, and clinical efficacy tools.",
    scope: "Build systems that reduce clinical bottlenecks, empower primary caregivers, or extend medical precision to underserved geographies.",
    examples: [
      "Offline audio-based respiratory screening algorithms",
      "Cryptographically verified cold-chain vaccine monitor",
      "Open-source hardware interface for neonatal vital monitors",
    ],
  },
  {
    id: "education",
    title: "EDUCATION",
    headline: "Universal mastery, adaptive learning architectures, and vocational capability.",
    scope: "Reconstruct pedagogical delivery for bandwidth-constrained environments, dynamic cognitive calibration, and applied skill acquisition.",
    examples: [
      "Ultra-low bandwidth multimodal tutoring without continuous connectivity",
      "Interactive technical simulator for vocational electrical trade mastery",
      "Peer-reviewed open syllabus verification network",
    ],
  },
  {
    id: "accessibility",
    title: "ACCESSIBILITY",
    headline: "Eliminating sensory, physical, and cognitive barriers across digital and physical domains.",
    scope: "Engineered hardware interfaces, tactile feedback mechanisms, and multimodal neural translation for persons with disabilities.",
    examples: [
      "Spatial obstacle sonar translation to haptic feedback bands",
      "Screen-reader spatial DOM re-architecting for complex web applications",
      "Real-time sign language syntactical transcription on edge microcontrollers",
    ],
  },
  {
    id: "public-systems",
    title: "PUBLIC SYSTEMS",
    headline: "Transparency, verification, and non-corruptible civic administration.",
    scope: "Construct trustworthy mechanisms for disaster relief allocation, municipal budget tracking, public procurement, and fair resource queuing.",
    examples: [
      "Public procurement audit trail with verifiable cryptographic proofs",
      "Decentralized relief supply routing during regional power outages",
      "Transparent municipal grievance routing with strict SLA timeouts",
    ],
  },
  {
    id: "safety",
    title: "SAFETY",
    headline: "Hazard mitigation, physical workplace defense, and digital identity integrity.",
    scope: "Create proactive detection engines for industrial occupational risks, maritime safety, emergency response coordination, and identity security.",
    examples: [
      "Thermal runway detection for high-density battery energy storage",
      "Early flash flood alerting from distributed acoustic river monitors",
      "Zero-knowledge credentials for humanitarian refugee verification",
    ],
  },
  {
    id: "humanity-society",
    title: "HUMANITY & SOCIETY",
    headline: "Strengthening community sovereignty, ethical governance, and social cohesion.",
    scope: "Build digital foundations that protect independent cultural heritage, counter predatory disinformation, and ensure fair economic inclusion.",
    examples: [
      "Verifiable origin lineage for independent archival journalism",
      "Cooperative farmer credit scoring based on verifiable crop yield telemetry",
      "Decentralized local barter clearinghouse for regional food banks",
    ],
  },
  {
    id: "technology",
    title: "TECHNOLOGY",
    headline: "Applied intelligence, resilient compute, and low-power distributed networks.",
    scope: "Foundational software protocols, edge runtime optimizations, fault-tolerant consensus mechanisms, and localized AI computing engines.",
    examples: [
      "Sub-watt neural inference for micro-satellite sensor payloads",
      "Mesh-network routing protocol resistant to wide-area jamming",
      "Zero-dependency deterministic database engine for embedded nodes",
    ],
  },
  {
    id: "open-innovation",
    title: "OPEN INNOVATION",
    headline: "Frontier exploration tackling problems outside conventional taxonomy.",
    scope: "Radical multidisciplinary breakthroughs that redefine human capability, energy harvesting, space exploration, or scientific discovery.",
    examples: [
      "Bio-inspired passive cooling materials manufacturing recipe generator",
      "Open scientific instrument calibration via distributed optical benches",
      "Atmospheric moisture harvesting telemetry and optimization engine",
    ],
  },
];

export default function Challenge() {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      className="bg-white py-12 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 w-full overflow-hidden"
    >
      <div className="space-y-16 sm:space-y-24">
        {/* Massive Hero Section Title with Reduced Mobile Size */}
        <div className="space-y-4 sm:space-y-8">
          <div className="select-none">
            <h1 className="text-5xl sm:text-7xl md:text-[15vw] lg:text-[180px] xl:text-[230px] leading-[0.9] sm:leading-[0.82] font-geist-thin tracking-[-0.04em] sm:tracking-[-0.07em] text-black uppercase break-words">
              CHALLENGES
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-2 sm:pt-4">
            <div className="lg:col-span-5 space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-geist-light tracking-tight leading-[1.05] text-black uppercase">
                WHAT WILL<br />YOU BUILD?
              </h2>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-end">
              <p className="text-sm sm:text-lg lg:text-xl text-neutral-800 font-inter font-light leading-relaxed">
                Take a real-world problem and turn it into something that shouldn&apos;t have remained unsolved. Supported by the OUANTUM innovation network.
              </p>
            </div>
          </div>
        </div>

        {/* 10 Challenge Domains: Responsive Grid with Independent Card Expansion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
          {domains.map((domain) => {
            const isSelected = activeDomain === domain.id;

            return (
              <div key={domain.id} className="w-full">
                <div
                  onClick={() => setActiveDomain(isSelected ? null : domain.id)}
                  className="p-6 sm:p-10 bg-[#F5F5F5] rounded-3xl space-y-4 sm:space-y-6 cursor-pointer border border-neutral-100 transition-all hover:bg-neutral-200/70 select-none"
                >
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1.5 sm:space-y-2">
                        <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
                          {domain.title}
                        </h3>
                        <p className="text-sm sm:text-base text-neutral-900 font-inter font-normal leading-snug">
                          {domain.headline}
                        </p>
                      </div>
                      <span className="text-xs uppercase tracking-widest text-neutral-500 font-geist font-medium shrink-0 pt-1">
                        {isSelected ? "COLLAPSE" : "EXPLORE SCOPE"}
                      </span>
                    </div>
                  </div>

                  <p className="relative z-10 text-xs text-neutral-600 font-inter font-light leading-relaxed">
                    {domain.scope}
                  </p>

                  {/* Expanded Problem Archetypes */}
                  {isSelected && (
                    <div className="relative z-10 pt-2 space-y-3 animate-fadeIn">
                      <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter block">
                        EXEMPLARY PROBLEM ARCHETYPES
                      </span>
                      <ul className="space-y-2">
                        {domain.examples.map((eg, i) => (
                          <li
                            key={i}
                            className="text-xs text-neutral-800 font-inter flex items-start gap-2"
                          >
                            <span className="text-black font-semibold">•</span>
                            <span>{eg}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Banner */}
        <div className="p-6 sm:p-14 bg-[#F5F5F5] rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 border border-neutral-100">
          <div className="relative z-10 space-y-2 text-left">
            <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
              READY TO EXPLORE THE SPRINT PROCESS?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-inter font-light">
              5 sprint stages, builder eligibility tracks, and 6 final deliverables.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full md:w-auto">
            <Link
              href="/philosophy"
              className="px-8 py-3.5 bg-neutral-200 text-black text-xs uppercase tracking-widest font-geist font-medium rounded-full hover:bg-neutral-300 transition-colors inline-flex items-center justify-center gap-2 group text-center"
            >
              <svg
                className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 8H3M7 12l-4-4 4-4" />
              </svg>
              <span>PHILOSOPHY</span>
            </Link>
            <Link
              href="/process"
              className="px-8 py-3.5 bg-black text-white text-xs uppercase tracking-widest font-geist font-medium rounded-full hover:bg-neutral-800 transition-colors inline-flex items-center justify-center gap-2 group text-center"
            >
              <span>PROCESS</span>
              <svg
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
