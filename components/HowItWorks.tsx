"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import img8 from "@/public/images/8.png";
import img9 from "@/public/images/9.png";
import img10 from "@/public/images/10.png";
import img11 from "@/public/images/11.png";
import img12 from "@/public/images/12.png";

export default function HowItWorks() {
  const containerRef = useRef<HTMLElement>(null);

  // Stage 01 (DISCOVER) Image Attributes: Scale, X-axis, Y-axis
  const card1Scale = 1.00;
  const card1X = 0; // in px
  const card1Y = 0; // in px

  // Stage 02 (DEFINE) Image Attributes: Scale, X-axis, Y-axis
  const card2Scale = 1.0;
  const card2X = 0; // in px
  const card2Y = 0; // in px

  // Stage 03 (BUILD) Image Attributes: Scale, X-axis, Y-axis
  const card3Scale = 2.0;
  const card3X = 0; // in px
  const card3Y = 0; // in px

  // Stage 04 (TEST) Image Attributes: Scale, X-axis, Y-axis
  const card4Scale = 1.0;
  const card4X = 0; // in px
  const card4Y = 0; // in px

  // Stage 05 (PRESENT) Image Attributes: Scale, X-axis, Y-axis
  const card5Scale = 1.0;
  const card5X = 0; // in px
  const card5Y = 0; // in px

  const steps = [
    {
      stage: "STAGE 01",
      title: "DISCOVER",
      headline: "Identify a problem that matters.",
      detail:
        "Observe real friction, structural failures, or underserved needs in physical or digital environments.",
      image: img8,
      alt: "Discover Stage Visual",
      scale: card1Scale,
      x: card1X,
      y: card1Y,
      colSpan: "lg:col-span-2",
    },
    {
      stage: "STAGE 02",
      title: "DEFINE",
      headline: "Understand the people and system affected by it.",
      detail:
        "Map stakeholder dynamics, architectural boundaries, edge conditions, and baseline failure points.",
      image: img9,
      alt: "Define Stage Visual",
      scale: card2Scale,
      x: card2X,
      y: card2Y,
      colSpan: "lg:col-span-2",
    },
    {
      stage: "STAGE 03",
      title: "BUILD",
      headline: "Turn your idea into a working prototype.",
      detail:
        "Implement functional logic, resilient system backends, hardware firmware, or intuitive user surfaces.",
      image: img10,
      alt: "Build Stage Visual",
      scale: card3Scale,
      x: card3X,
      y: card3Y,
      colSpan: "lg:col-span-2",
    },
    {
      stage: "STAGE 04",
      title: "TEST",
      headline: "Validate whether your solution actually addresses the problem.",
      detail:
        "Stress-test assumptions against real data, load variations, or representative domain end-users.",
      image: img11,
      alt: "Test Stage Visual",
      scale: card4Scale,
      x: card4X,
      y: card4Y,
      colSpan: "lg:col-span-3",
    },
    {
      stage: "STAGE 05",
      title: "PRESENT",
      headline: "Show the problem, your solution, your engineering and your impact.",
      detail:
        "Deliver a concise technical breakdown, proof of execution, and clear roadmap for deployment.",
      image: img12,
      alt: "Present Stage Visual",
      scale: card5Scale,
      x: card5X,
      y: card5Y,
      colSpan: "lg:col-span-3",
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
              PROCESS
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-2 sm:pt-4">
            <div className="lg:col-span-6 space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-geist-light tracking-tight leading-[1.05] text-black uppercase">
                FROM IDEA TO<br />WORKING BUILD.
              </h2>
            </div>
            <div className="lg:col-span-6 flex flex-col justify-end">
              <p className="text-sm sm:text-lg lg:text-xl text-neutral-600 font-inter font-light max-w-lg leading-relaxed">
                The standard 5-stage innovation lifecycle powering the OUANTUM ORIGINS 2026 engineering sprint.
              </p>
            </div>
          </div>
        </div>

        {/* 5 Steps Grid with 2nd row spanning full width (col-span-3 each) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-6 sm:p-12 bg-[#F5F5F5] rounded-3xl min-h-[380px] sm:min-h-[420px] flex flex-col justify-between border border-neutral-100 ${step.colSpan}`}
            >
              {/* Positioned Artwork at the TOP with Scale, X-axis, and Y-axis (No Hover Effect) */}
              <div className="relative w-full h-44 sm:h-52 mb-6 overflow-hidden flex items-center justify-center pointer-events-none select-none">
                <div
                  style={{
                    transform: `translate(${step.x}px, ${step.y}px) scale(${step.scale})`,
                    transformOrigin: "center center",
                  }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={90}
                    className="object-contain object-top"
                  />
                </div>
              </div>

              {/* Card Text Content */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-900 font-inter font-normal leading-snug">
                    {step.headline}
                  </p>
                </div>

                <p className="text-xs text-neutral-600 font-inter font-light leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Banner */}
        <div className="p-6 sm:p-14 bg-[#F5F5F5] rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 border border-neutral-100">
          <div className="space-y-2 text-left">
            <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
              EXPLORE WHAT TO SUBMIT & SCHEDULE
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-inter font-light">
              6 final deliverables and the hour-by-hour 24-hour sprint roadmap.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full md:w-auto">
            <Link
              href="/challenge"
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
              <span>CHALLENGES</span>
            </Link>
            <Link
              href="/schedule"
              className="px-8 py-3.5 bg-black text-white text-xs uppercase tracking-widest font-geist font-medium rounded-full hover:bg-neutral-800 transition-colors inline-flex items-center justify-center gap-2 group text-center"
            >
              <span>SCHEDULE</span>
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
