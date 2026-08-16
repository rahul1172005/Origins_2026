"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const col1Y = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);
  const col2Y = useTransform(scrollYProgress, [0, 1], ["-15px", "15px"]);
  const bannerY = useTransform(scrollYProgress, [0, 1], ["25px", "-15px"]);

  return (
    <section
      ref={containerRef}
      className="bg-white py-12 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 w-full overflow-hidden"
    >
      <div className="space-y-16 sm:space-y-24">
        {/* Massive Hero Section Title with Reduced Mobile Size */}
        <div className="space-y-4 sm:space-y-8">
          <motion.div style={{ y: titleY }} className="select-none will-change-transform">
            <h1 className="text-5xl sm:text-7xl md:text-[15vw] lg:text-[180px] xl:text-[230px] leading-[0.9] sm:leading-[0.82] font-geist-thin tracking-[-0.04em] sm:tracking-[-0.07em] text-black uppercase break-words">
              SCHEDULE
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-2 sm:pt-4">
            <div className="lg:col-span-6 space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-geist-light tracking-tight leading-[1.05] text-black uppercase">
                THE 24 HOURS.
              </h2>
            </div>
            <div className="lg:col-span-6 flex items-end">
              <p className="text-sm sm:text-lg text-neutral-600 font-inter font-light leading-relaxed max-w-xl">
                A continuous, focused cycle under the OUANTUM innovation sprint designed to remove distractions and direct uninterrupted engineering power toward a singular solution.
              </p>
            </div>
          </div>
        </div>

        {/* Phase Schedule with Responsive Asymmetric Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {phases.map((p, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                style={{ y: isEven ? col1Y : col2Y }}
                className="will-change-transform"
              >
                <div className="p-6 sm:p-12 bg-[#F5F5F5] rounded-3xl space-y-6 sm:space-y-8 flex flex-col justify-between h-full">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs sm:text-sm font-geist-thin text-neutral-400 font-mono">
                        {p.time}
                      </span>
                      <span className="text-xs uppercase tracking-widest text-neutral-500 font-inter font-medium">
                        MILESTONE
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
                        {p.phase}
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-900 font-inter font-normal leading-snug">
                        {p.headline}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-600 font-inter font-light leading-relaxed">
                    {p.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Banner */}
        <motion.div
          style={{ y: bannerY }}
          className="p-6 sm:p-14 bg-[#F5F5F5] rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 will-change-transform"
        >
          <div className="space-y-2 text-left">
            <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
              EXPLORE JUDGING & EVALUATION
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-inter font-light">
              5 weighted evaluation dimensions and technical jury inspection criteria.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full md:w-auto">
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
        </motion.div>
      </div>
    </section>
  );
}
