"use client";

import React, { useRef } from "react";
import Link from "next/link";
import DitherBg from "@/components/DitherBg";

interface SchedulePhase {
  time: string;
  phase: string;
  headline: string;
  detail: string;
}

const phases: SchedulePhase[] = [
  {
    time: "00:00",
    phase: "KICKOFF",
    headline: "Sprint commencement & challenge briefing.",
    detail: "Official keynote, domain challenge parameters released, and technical repository environments verified.",
  },
  {
    time: "02:00",
    phase: "PROBLEM DEFINITION",
    headline: "Hypothesis lock-in & boundary framing.",
    detail: "Domain boundary clarity, stakeholder constraint mapping, and technical feasibility checkpoints with OUANTUM mentors.",
  },
  {
    time: "06:00",
    phase: "RESEARCH & ARCHITECTURE",
    headline: "Algorithmic design & system blueprint.",
    detail: "Data pipeline readiness, firmware schematics finalized, and core engineering architecture established.",
  },
  {
    time: "12:00",
    phase: "PROTOTYPE SPRINT",
    headline: "Core MVP build & midpoint validation.",
    detail: "Midpoint checkpoint demo with domain jury; hardware MVP assembled and core software backend running.",
  },
  {
    time: "18:00",
    phase: "VALIDATION & LOAD TEST",
    headline: "Stress-testing against authentic constraints.",
    detail: "Real-world dataset verification, error handling audits, and fault tolerance benchmarking under edge loads.",
  },
  {
    time: "22:00",
    phase: "FINAL BUILD & FREEZE",
    headline: "Feature freeze & package assembly.",
    detail: "Zero-new-commits policy after freeze; test suites executed, documentation finalized, and demo recording completed.",
  },
  {
    time: "24:00",
    phase: "SUBMISSION & JURY AUDIT",
    headline: "Repository lock & technical evaluation.",
    detail: "Final code lock, architecture defense upload, and technical evaluation sequence begins immediately.",
  },
];

export default function The24Hours() {
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
              SCHEDULE
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-2 sm:pt-4">
            <div className="lg:col-span-6 space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-geist-light tracking-tight leading-[1.05] text-black uppercase">
                THE 24 HOURS<br />TIMELINE.
              </h2>
            </div>
            <div className="lg:col-span-6 flex items-end">
              <p className="text-sm sm:text-lg lg:text-xl text-neutral-600 font-inter font-light max-w-lg leading-relaxed">
                One continuous 24-hour sprint. Direct access to OUANTUM research staff, technical mentors, and hardware diagnostic benches throughout the night.
              </p>
            </div>
          </div>
        </div>

        {/* 7 Schedule Cards in Responsive Grid with Dither BG */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {phases.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden p-6 sm:p-12 bg-[#F5F5F5] rounded-3xl space-y-6 sm:space-y-8 flex flex-col justify-between border border-neutral-100"
            >
              <DitherBg opacity={0.25} />
              <div className="relative z-10 space-y-4 sm:space-y-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter">
                    MILESTONE {index + 1}
                  </span>
                  <span className="text-2xl sm:text-4xl font-geist-thin text-black font-mono">
                    {item.time}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
                    {item.phase}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-900 font-inter font-normal leading-snug">
                    {item.headline}
                  </p>
                </div>
              </div>

              <p className="relative z-10 text-xs text-neutral-600 font-inter font-light leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Banner */}
        <div className="relative overflow-hidden p-6 sm:p-14 bg-[#F5F5F5] rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 border border-neutral-100">
          <DitherBg opacity={0.25} />
          <div className="relative z-10 space-y-2 text-left">
            <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
              EXPLORE JUDGING CRITERIA & JURY
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-inter font-light">
              Understand our weighted scoring model and meet the evaluating jury.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full md:w-auto">
            <Link
              href="/process"
              className="px-8 py-3.5 bg-neutral-200 text-black text-xs uppercase tracking-widest font-inter rounded-full hover:bg-neutral-300 transition-colors text-center"
            >
              ← PROCESS
            </Link>
            <Link
              href="/judging"
              className="px-8 py-3.5 bg-black text-white text-xs uppercase tracking-widest font-inter rounded-full hover:bg-neutral-800 transition-colors text-center"
            >
              JUDGING →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
