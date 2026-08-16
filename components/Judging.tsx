"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Judging() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const col1Y = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);
  const col2Y = useTransform(scrollYProgress, [0, 1], ["-15px", "15px"]);
  const bannerY = useTransform(scrollYProgress, [0, 1], ["25px", "-15px"]);

  const criteria = [
    {
      title: "ORIGINALITY",
      weight: "25%",
      headline: "How different is the idea?",
      detail:
        "Does the project take an unconventional approach to a stubborn challenge rather than re-implementing a known template?",
    },
    {
      title: "IMPACT",
      weight: "25%",
      headline: "How many people could meaningfully benefit?",
      detail:
        "Is the magnitude of real-world improvement tangible, measurable, and relevant to actual human or systemic well-being?",
    },
    {
      title: "ENGINEERING",
      weight: "20%",
      headline: "How technically strong is the solution?",
      detail:
        "Code quality, architectural clarity, latency, hardware design choices, error tolerance, and defensible technical rationale.",
    },
    {
      title: "FEASIBILITY",
      weight: "15%",
      headline: "Can this become something real?",
      detail:
        "Is the operational, financial, and regulatory assumption set grounded enough to transition from prototype to production deployment?",
    },
    {
      title: "PRESENTATION",
      weight: "15%",
      headline: "Can you clearly communicate the problem and the solution?",
      detail:
        "Clarity of problem articulation, demonstration of running code, and crisp distillation of technical insights without marketing hyperbole.",
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
              JUDGING
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-2 sm:pt-4">
            <div className="lg:col-span-6 space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-geist-light tracking-tight leading-[1.05] text-black uppercase">
                HOW YOU WILL<br />BE EVALUATED.
              </h2>
            </div>
            <div className="lg:col-span-6 flex items-end">
              <p className="text-sm sm:text-lg lg:text-xl text-neutral-600 font-inter font-light max-w-lg leading-relaxed">
                Transparent, weighted criteria calibrated by the OUANTUM technical jury to reward substantive technical execution and genuine human utility over presentation gloss.
              </p>
            </div>
          </div>
        </div>

        {/* 5 Criteria Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {criteria.map((c, idx) => {
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
                      <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter font-medium">
                        WEIGHT
                      </span>
                      <span className="text-xl sm:text-2xl font-geist-thin text-black font-mono">
                        {c.weight}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
                        {c.title}
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-900 font-inter font-normal leading-snug">
                        {c.headline}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-600 font-inter font-light leading-relaxed">
                    {c.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Concluding Statement Block */}
        <div className="p-6 sm:p-14 bg-[#F5F5F5] rounded-3xl space-y-3 sm:space-y-4">
          <p className="text-base sm:text-2xl text-neutral-600 font-inter font-light">
            WE DON&apos;T JUDGE THE PITCH.
          </p>
          <blockquote className="text-2xl sm:text-5xl md:text-6xl font-geist-light uppercase tracking-tight text-black leading-tight">
            WE JUDGE<br />
            THE IDEA,<br />
            THE ENGINEERING,<br />
            AND THE IMPACT.
          </blockquote>
        </div>

        {/* Navigation Banner */}
        <motion.div
          style={{ y: bannerY }}
          className="p-6 sm:p-14 bg-[#F5F5F5] rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 will-change-transform"
        >
          <div className="space-y-2 text-left">
            <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
              CHECK PRIZES & GRANTS
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-inter font-light">
              Grand Prize, Runner Up, and 4 Special Recognitions backed by OUANTUM.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full md:w-auto">
            <Link
              href="/schedule"
              className="px-8 py-3.5 bg-neutral-200 text-black text-xs uppercase tracking-widest font-inter rounded-full hover:bg-neutral-300 transition-colors text-center"
            >
              ← SCHEDULE
            </Link>
            <Link
              href="/prizes"
              className="px-8 py-3.5 bg-black text-white text-xs uppercase tracking-widest font-inter rounded-full hover:bg-neutral-800 transition-colors text-center"
            >
              PRIZES →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
