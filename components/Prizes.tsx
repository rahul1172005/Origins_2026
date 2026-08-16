"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Prizes() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const col1Y = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);
  const col2Y = useTransform(scrollYProgress, [0, 1], ["-15px", "15px"]);
  const bannerY = useTransform(scrollYProgress, [0, 1], ["25px", "-15px"]);

  const specialRecognitions = [
    {
      title: "MOST IMPACTFUL",
      headline: "Transformative civic potential.",
      detail: "Recognizing the build that demonstrates the highest measurable potential to transform lives and civic systems.",
    },
    {
      title: "BEST ENGINEERING",
      headline: "Architectural elegance & resilience.",
      detail: "Honoring architectural elegance, structural resilience, fault tolerance, and computational ingenuity.",
    },
    {
      title: "BEST SUSTAINABLE SOLUTION",
      headline: "Closed-loop ecological breakthrough.",
      detail: "Awarded to the most durable, low-footprint, and closed-loop ecological or resource management breakthrough.",
    },
    {
      title: "BEST EMERGING IDEA",
      headline: "Audacious frontier research.",
      detail: "Celebrating radical paradigm shifts and audacious frontier research pushing existing boundaries.",
    },
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
              PRIZES
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-2 sm:pt-4">
            <div className="lg:col-span-6 space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-geist-light tracking-tight leading-[1.05] text-black uppercase">
                RECOGNITION<br />& GRANTS.
              </h2>
            </div>
            <div className="lg:col-span-6 flex items-end">
              <p className="text-sm sm:text-lg lg:text-xl text-neutral-600 font-inter font-light max-w-lg leading-relaxed">
                Substantial financial backing, direct deployment grants, and institutional mentorship by the OUANTUM program to transition winning projects into durable real-world entities.
              </p>
            </div>
          </div>
        </div>

        {/* Grand Prize & Runner Up Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Grand Prize */}
          <motion.div style={{ y: col1Y }} className="will-change-transform">
            <div className="p-6 sm:p-12 bg-[#F5F5F5] rounded-3xl space-y-6 sm:space-y-8 flex flex-col justify-between h-full">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter">
                    OUANTUM GRANT
                  </span>
                  <span className="text-xs uppercase tracking-widest text-neutral-500 font-inter font-medium">
                    PRIMARY HONOR
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="text-[12vw] sm:text-[10vw] lg:text-[100px] leading-none font-geist-thin text-black tracking-tight">
                    ₹1,00,000
                  </div>
                  <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
                    GRAND PRIZE
                  </h3>
                </div>
              </div>

              <p className="text-xs text-neutral-600 font-inter font-light leading-relaxed">
                For the solution with the strongest combination of originality, engineering rigor, and measurable real-world impact. Includes direct OUANTUM technical incubation and advisory deployment.
              </p>
            </div>
          </motion.div>

          {/* Runner Up */}
          <motion.div style={{ y: col2Y }} className="will-change-transform">
            <div className="p-6 sm:p-12 bg-[#F5F5F5] rounded-3xl space-y-6 sm:space-y-8 flex flex-col justify-between h-full">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter">
                    OUANTUM GRANT
                  </span>
                  <span className="text-xs uppercase tracking-widest text-neutral-500 font-inter font-medium">
                    SECONDARY HONOR
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="text-[11vw] sm:text-[8vw] lg:text-[80px] leading-none font-geist-thin text-black tracking-tight">
                    ₹50,000
                  </div>
                  <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
                    RUNNER UP
                  </h3>
                </div>
              </div>

              <p className="text-xs text-neutral-600 font-inter font-light leading-relaxed">
                For the team exhibiting exceptional technical execution, deep domain empathy, and immediate pilot feasibility within the OUANTUM ecosystem.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Special Recognition Categories */}
        <div className="pt-6 sm:pt-8 space-y-8 sm:space-y-10">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-4xl font-geist-thin uppercase tracking-tight text-black">
              SPECIAL RECOGNITION
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {specialRecognitions.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-10 bg-[#F5F5F5] rounded-3xl space-y-4 sm:space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-3 sm:space-y-4">
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter block">
                    HONOR
                  </span>

                  <div className="space-y-1">
                    <h4 className="text-lg sm:text-2xl font-geist-light uppercase tracking-tight text-black">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-900 font-inter font-normal leading-snug">
                      {item.headline}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-neutral-600 font-inter font-light leading-relaxed">
                  {item.detail}
                </p>
              </div>
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
              HAVE QUESTIONS ABOUT ORIGINS 2026?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-inter font-light">
              Read 11 comprehensive answers regarding eligibility, tools, and rules.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full md:w-auto">
            <Link
              href="/judging"
              className="px-8 py-3.5 bg-neutral-200 text-black text-xs uppercase tracking-widest font-inter rounded-full hover:bg-neutral-300 transition-colors text-center"
            >
              ← JUDGING
            </Link>
            <Link
              href="/faq"
              className="px-8 py-3.5 bg-black text-white text-xs uppercase tracking-widest font-inter rounded-full hover:bg-neutral-800 transition-colors text-center"
            >
              FAQ →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
