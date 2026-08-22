"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import t1 from "@/public/images/t1.png";
import t2 from "@/public/images/t2.png";
import t3 from "@/public/images/t3.png";

export default function Prizes() {
  const containerRef = useRef<HTMLElement>(null);

  // =========================================================================
  // DESKTOP MASCOT / TROPHY CONTROLS (Scale, X-axis in px, Y-axis in px) - Screen >= 640px
  // =========================================================================
  // Card 1 (1ST PRIZE - $25,000) Desktop Attributes
  const card1Scale = 1.0;
  const card1X = 0; // in px
  const card1Y = 0; // in px

  // Card 2 (2ND PRIZE - $15,000) Desktop Attributes
  const card2Scale = 0.9;
  const card2X = 0; // in px
  const card2Y = 10; // in px

  // Card 3 (3RD PRIZE - $10,000) Desktop Attributes
  const card3Scale = 0.85;
  const card3X = 0; // in px
  const card3Y = 15; // in px

  // =========================================================================
  // MOBILE MASCOT / TROPHY CONTROLS (Scale, X-axis in px, Y-axis in px) - Screen < 640px
  // =========================================================================
  // Card 1 (1ST PRIZE - $25,000) Mobile Attributes
  const card1MobileScale = 1.0;
  const card1MobileX = 0; // in px
  const card1MobileY = 0; // in px

  // Card 2 (2ND PRIZE - $15,000) Mobile Attributes
  const card2MobileScale = 1.0;
  const card2MobileX = 0; // in px
  const card2MobileY = 0; // in px

  // Card 3 (3RD PRIZE - $10,000) Mobile Attributes
  const card3MobileScale = 1.0;
  const card3MobileX = 0; // in px
  const card3MobileY = 0; // in px

  const topPrizes = [
    {
      place: "1ST PLACE",
      sponsor: "AWS & OUANTUM",
      amount: "$25,000",
      credits: "AWS CREDITS",
      title: "1ST PRIZE",
      description:
        "For the top solution exhibiting the highest caliber of originality, technical execution, and transformative real-world impact.",
      image: t1,
      alt: "1st Place Trophy Visual",
      scale: card1Scale,
      x: card1X,
      y: card1Y,
      mobileScale: card1MobileScale,
      mobileX: card1MobileX,
      mobileY: card1MobileY,
    },
    {
      place: "2ND PLACE",
      sponsor: "AWS & OUANTUM",
      amount: "$15,000",
      credits: "AWS CREDITS",
      title: "2ND PRIZE",
      description:
        "For the runner-up build demonstrating outstanding system architecture, deep domain problem-solving, and deployment readiness.",
      image: t2,
      alt: "2nd Place Trophy Visual",
      scale: card2Scale,
      x: card2X,
      y: card2Y,
      mobileScale: card2MobileScale,
      mobileX: card2MobileX,
      mobileY: card2MobileY,
    },
    {
      place: "3RD PLACE",
      sponsor: "AWS & OUANTUM",
      amount: "$10,000",
      credits: "AWS CREDITS",
      title: "3RD PRIZE",
      description:
        "For the build delivering exceptional technical ingenuity, fault tolerance, and clear roadmap for applied implementation.",
      image: t3,
      alt: "3rd Place Trophy Visual",
      scale: card3Scale,
      x: card3X,
      y: card3Y,
      mobileScale: card3MobileScale,
      mobileX: card3MobileX,
      mobileY: card3MobileY,
    },
  ];

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
                $50,000+ in AWS credits, developer vouchers, and fast-tracked internship opportunities powered by OUANTUM to transition prototypes into durable real-world entities.{" "}
                <Link
                  href="/prizes/aws-activate"
                  className="inline-flex items-center gap-1 text-black font-normal underline underline-offset-4 hover:opacity-75 transition-opacity"
                >
                  <span>More info</span>
                  <svg
                    className="w-3.5 h-3.5 inline-block -translate-y-px"
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
              </p>
            </div>
          </div>
        </div>

        {/* Top 3 Prize Cards (1st, 2nd, 3rd) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {topPrizes.map((prize, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden p-6 sm:p-10 bg-[#F5F5F5] rounded-3xl space-y-6 flex flex-col justify-between h-full border border-neutral-100"
            >
              <div>
                <div className="space-y-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter">
                      {prize.place}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-neutral-500 font-inter font-medium">
                      {prize.sponsor}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-[10vw] sm:text-[6vw] lg:text-[64px] xl:text-[72px] leading-none font-geist-thin text-black tracking-tight">
                      {prize.amount}
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block font-medium">
                      {prize.credits}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-geist-light uppercase tracking-tight text-black pt-2">
                      {prize.title}
                    </h3>
                  </div>
                </div>

                {/* Positioned Trophy Artwork below the wording */}
                <div className="relative w-full h-44 sm:h-52 my-6 overflow-hidden flex items-center justify-center pointer-events-none select-none">
                  <div
                    style={
                      {
                        "--scale-desktop": prize.scale,
                        "--x-desktop": `${prize.x}px`,
                        "--y-desktop": `${prize.y}px`,
                        "--scale-mobile": prize.mobileScale,
                        "--x-mobile": `${prize.mobileX}px`,
                        "--y-mobile": `${prize.mobileY}px`,
                        transformOrigin: "center center",
                      } as React.CSSProperties
                    }
                    className="w-full h-full relative [transform:translate(var(--x-mobile),var(--y-mobile))_scale(var(--scale-mobile))] sm:[transform:translate(var(--x-desktop),var(--y-desktop))_scale(var(--scale-desktop))]"
                  >
                    <Image
                      src={prize.image}
                      alt={prize.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={90}
                      className="object-contain object-center"
                    />
                  </div>
                </div>
              </div>

              <p className="text-xs text-neutral-600 font-inter font-light leading-relaxed">
                {prize.description}
              </p>
            </div>
          ))}
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
