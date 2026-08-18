"use client";

import React, { useRef } from "react";
import Link from "next/link";
import DitherBg from "@/components/DitherBg";

export default function HowItWorks() {
  const containerRef = useRef<HTMLElement>(null);

  const steps = [
    {
      title: "DISCOVER",
      headline: "Identify a problem that matters.",
      detail: "Observe real friction, structural failures, or underserved needs in physical or digital environments.",
    },
    {
      title: "DEFINE",
      headline: "Understand the people and system affected by it.",
      detail: "Map stakeholder dynamics, architectural boundaries, edge conditions, and baseline failure points.",
    },
    {
      title: "BUILD",
      headline: "Turn your idea into a working prototype.",
      detail: "Implement functional logic, resilient system backends, hardware firmware, or intuitive user surfaces.",
    },
    {
      title: "TEST",
      headline: "Validate whether your solution actually addresses the problem.",
      detail: "Stress-test assumptions against real data, load variations, or representative domain end-users.",
    },
    {
      title: "PRESENT",
      headline: "Show the problem, your solution, your engineering and your impact.",
      detail: "Deliver a concise technical breakdown, proof of execution, and clear roadmap for deployment.",
    },
  ];

  const lifecycleStages = [
    "REGISTRATION",
    "SELECTION",
    "KICKOFF",
    "24 HOURS",
    "SUBMISSION",
    "JUDGING",
    "FINALISTS",
    "WINNERS",
  ];

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
              PROCESS
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-2 sm:pt-4">
            <div className="lg:col-span-6 space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-geist-light tracking-tight leading-[1.05] text-black uppercase">
                FROM IDEA TO<br />WORKING BUILD.
              </h2>
            </div>
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <p className="text-sm sm:text-lg lg:text-xl text-neutral-600 font-inter font-light max-w-lg leading-relaxed">
                The standard 5-stage innovation lifecycle powering the OUANTUM ORIGINS 2026 engineering sprint.
              </p>
              
              {/* Process Bar Flow */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-500">
                {lifecycleStages.map((st, i) => (
                  <React.Fragment key={i}>
                    <span className="text-black font-semibold bg-[#F5F5F5] px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">{st}</span>
                    {i < lifecycleStages.length - 1 && <span className="text-neutral-300">→</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 5 Steps Grid with Dither BG */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative overflow-hidden p-6 sm:p-12 bg-[#F5F5F5] rounded-3xl space-y-6 sm:space-y-8 flex flex-col justify-between border border-neutral-100"
            >
              <DitherBg opacity={0.25} />
              <div className="relative z-10 space-y-4 sm:space-y-6">
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter">
                  STAGE 0{index + 1}
                </span>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-900 font-inter font-normal leading-snug">
                    {step.headline}
                  </p>
                </div>
              </div>

              <p className="relative z-10 text-xs text-neutral-600 font-inter font-light leading-relaxed">
                {step.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Banner */}
        <div className="relative overflow-hidden p-6 sm:p-14 bg-[#F5F5F5] rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 border border-neutral-100">
          <DitherBg opacity={0.25} />
          <div className="relative z-10 space-y-2 text-left">
            <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
              EXPLORE WHAT TO SUBMIT & SCHEDULE
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-inter font-light">
              6 final deliverables and the hour-by-hour 24-hour sprint roadmap.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full md:w-auto">
            <Link
              href="/challenge"
              className="px-8 py-3.5 bg-neutral-200 text-black text-xs uppercase tracking-widest font-inter rounded-full hover:bg-neutral-300 transition-colors text-center"
            >
              ← CHALLENGES
            </Link>
            <Link
              href="/schedule"
              className="px-8 py-3.5 bg-black text-white text-xs uppercase tracking-widest font-inter rounded-full hover:bg-neutral-800 transition-colors text-center"
            >
              SCHEDULE →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
