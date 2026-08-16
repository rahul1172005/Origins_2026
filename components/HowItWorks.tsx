"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HowItWorks() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const col1Y = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);
  const col2Y = useTransform(scrollYProgress, [0, 1], ["-15px", "15px"]);
  const bannerY = useTransform(scrollYProgress, [0, 1], ["25px", "-15px"]);

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
          <motion.div style={{ y: titleY }} className="select-none will-change-transform">
            <h1 className="text-5xl sm:text-7xl md:text-[15vw] lg:text-[180px] xl:text-[230px] leading-[0.9] sm:leading-[0.82] font-geist-thin tracking-[-0.04em] sm:tracking-[-0.07em] text-black uppercase break-words">
              PROCESS
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-2 sm:pt-4">
            <div className="lg:col-span-6 space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-geist-light tracking-tight leading-[1.05] text-black uppercase">
                HOW ORIGINS<br />WORKS.
              </h2>
            </div>
            <div className="lg:col-span-6 flex items-end">
              <p className="text-sm sm:text-lg lg:text-xl text-neutral-600 font-inter font-light max-w-2xl leading-relaxed">
                A structured progression designed by the OUANTUM program to transform genuine inquiry into demonstrable engineering reality over a high-velocity 24-hour sprint.
              </p>
            </div>
          </div>
        </div>

        {/* 5 Core Steps as Cards with Parallax Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((s, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                style={{ y: isEven ? col1Y : col2Y }}
                className="will-change-transform"
              >
                <div className="p-6 sm:p-12 bg-[#F5F5F5] rounded-3xl space-y-4 sm:space-y-6 flex flex-col justify-between h-full">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
                      {s.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-900 font-inter font-normal leading-snug">
                      {s.headline}
                    </p>
                  </div>
                  <p className="text-xs text-neutral-600 font-inter font-light leading-relaxed">
                    {s.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Complete Lifecycle Horizontal Progression */}
        <div className="pt-6 sm:pt-8 space-y-4 sm:space-y-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs uppercase tracking-widest font-inter text-black">
            {lifecycleStages.map((stage, idx) => (
              <React.Fragment key={idx}>
                <span className="px-4 sm:px-6 py-2 sm:py-3 bg-[#F5F5F5] rounded-full font-medium">
                  {stage}
                </span>
                {idx < lifecycleStages.length - 1 && (
                  <span className="text-neutral-400 select-none">↓</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Navigation Banner */}
        <motion.div
          style={{ y: bannerY }}
          className="p-6 sm:p-14 bg-[#F5F5F5] rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 will-change-transform"
        >
          <div className="space-y-2 text-left">
            <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
              CHECK THE 24-HOUR SPRINT SCHEDULE
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-inter font-light">
              Hour-by-hour milestones from 00:00 Kickoff to 24:00 Submission lock.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full md:w-auto">
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
        </motion.div>
      </div>
    </section>
  );
}
