"use client";

import React, { useRef } from "react";
import Link from "next/link";

export default function Prizes() {
  const containerRef = useRef<HTMLElement>(null);

  const specialRecognitions = [
    {
      title: "VOUCHERS & CREDITS",
      headline: "Developer tooling & cloud passes.",
      detail: "All participating teams receive exclusive cloud infrastructure vouchers, partner API access, and developer platform credits.",
    },
    {
      title: "INTERNSHIP OPPORTUNITIES",
      headline: "Research & engineering fellowships.",
      detail: "Direct interview pipelines and specialized internship opportunities with the OUANTUM research network and partner organizations.",
    },
    {
      title: "MOST IMPACTFUL",
      headline: "Transformative civic potential.",
      detail: "Recognizing the build that demonstrates the highest measurable potential to transform lives and civic systems.",
    },
    {
      title: "BEST SUSTAINABLE SOLUTION",
      headline: "Closed-loop ecological breakthrough.",
      detail: "Awarded to the most durable, low-footprint, and closed-loop ecological or resource management breakthrough.",
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
          <div className="select-none">
            <h1 className="text-5xl sm:text-7xl md:text-[15vw] lg:text-[180px] xl:text-[230px] leading-[0.9] sm:leading-[0.82] font-geist-thin tracking-[-0.04em] sm:tracking-[-0.07em] text-black uppercase break-words">
              PRIZES
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-2 sm:pt-4">
            <div className="lg:col-span-6 space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-geist-light tracking-tight leading-[1.05] text-black uppercase">
                RECOGNITION<br />& GRANTS.
              </h2>
            </div>
            <div className="lg:col-span-6 flex items-end">
              <p className="text-sm sm:text-lg lg:text-xl text-neutral-600 font-inter font-light max-w-lg leading-relaxed">
                $50,000+ in AWS credits, developer vouchers, and fast-tracked internship opportunities powered by OUANTUM to transition prototypes into durable real-world entities.
              </p>
            </div>
          </div>
        </div>

        {/* Top 3 Prize Cards (1st, 2nd, 3rd) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* 1st Prize */}
          <div className="p-6 sm:p-10 bg-[#F5F5F5] rounded-3xl space-y-6 flex flex-col justify-between h-full border border-neutral-100">
            <div className="space-y-4">
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter">
                  1ST PLACE
                </span>
                <span className="text-xs uppercase tracking-widest text-neutral-500 font-inter font-medium">
                  AWS & OUANTUM
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-[10vw] sm:text-[6vw] lg:text-[64px] xl:text-[72px] leading-none font-geist-thin text-black tracking-tight">
                  $25,000
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block font-medium">
                  AWS CREDITS
                </span>
                <h3 className="text-xl sm:text-2xl font-geist-light uppercase tracking-tight text-black pt-2">
                  1ST PRIZE
                </h3>
              </div>
            </div>

            <p className="text-xs text-neutral-600 font-inter font-light leading-relaxed">
              For the top solution exhibiting the highest caliber of originality, technical execution, and transformative real-world impact.
            </p>
          </div>

          {/* 2nd Prize */}
          <div className="p-6 sm:p-10 bg-[#F5F5F5] rounded-3xl space-y-6 flex flex-col justify-between h-full border border-neutral-100">
            <div className="space-y-4">
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter">
                  2ND PLACE
                </span>
                <span className="text-xs uppercase tracking-widest text-neutral-500 font-inter font-medium">
                  AWS & OUANTUM
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-[10vw] sm:text-[6vw] lg:text-[64px] xl:text-[72px] leading-none font-geist-thin text-black tracking-tight">
                  $15,000
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block font-medium">
                  AWS CREDITS
                </span>
                <h3 className="text-xl sm:text-2xl font-geist-light uppercase tracking-tight text-black pt-2">
                  2ND PRIZE
                </h3>
              </div>
            </div>

            <p className="text-xs text-neutral-600 font-inter font-light leading-relaxed">
              For the runner-up build demonstrating outstanding system architecture, deep domain problem-solving, and deployment readiness.
            </p>
          </div>

          {/* 3rd Prize */}
          <div className="p-6 sm:p-10 bg-[#F5F5F5] rounded-3xl space-y-6 flex flex-col justify-between h-full border border-neutral-100">
            <div className="space-y-4">
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter">
                  3RD PLACE
                </span>
                <span className="text-xs uppercase tracking-widest text-neutral-500 font-inter font-medium">
                  AWS & OUANTUM
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-[10vw] sm:text-[6vw] lg:text-[64px] xl:text-[72px] leading-none font-geist-thin text-black tracking-tight">
                  $10,000
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block font-medium">
                  AWS CREDITS
                </span>
                <h3 className="text-xl sm:text-2xl font-geist-light uppercase tracking-tight text-black pt-2">
                  3RD PRIZE
                </h3>
              </div>
            </div>

            <p className="text-xs text-neutral-600 font-inter font-light leading-relaxed">
              For the build delivering exceptional technical ingenuity, fault tolerance, and clear roadmap for applied implementation.
            </p>
          </div>
        </div>

        {/* Special Recognition & Opportunities */}
        <div className="pt-6 sm:pt-8 space-y-8 sm:space-y-10">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-4xl font-geist-thin uppercase tracking-tight text-black">
              SPECIAL RECOGNITION & PERKS
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {specialRecognitions.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-10 bg-[#F5F5F5] rounded-3xl space-y-4 sm:space-y-6 flex flex-col justify-between border border-neutral-100"
              >
                <div className="space-y-3 sm:space-y-4">
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter block">
                    OPPORTUNITY & HONOR
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
        <div className="p-6 sm:p-14 bg-[#F5F5F5] rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 border border-neutral-100">
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
              <span>JUDGING</span>
            </Link>
            <Link
              href="/faq"
              className="px-8 py-3.5 bg-black text-white text-xs uppercase tracking-widest font-geist font-medium rounded-full hover:bg-neutral-800 transition-colors inline-flex items-center justify-center gap-2 group text-center"
            >
              <span>FAQ</span>
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
