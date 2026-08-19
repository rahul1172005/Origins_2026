"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import img5 from "@/public/images/5.png";
import img6 from "@/public/images/6.png";
import img7 from "@/public/images/7.png";

export default function Philosophy() {
  const containerRef = useRef<HTMLElement>(null);

  // Card 1 (NO SAAS CLONES) Image Attributes: Scale, X-axis, Y-axis
  const card1Scale = 1.0;
  const card1X = 0; // in px
  const card1Y = 0; // in px

  // Card 2 (NO EMPTY PITCHES) Image Attributes: Scale, X-axis, Y-axis
  const card2Scale = 1.0;
  const card2X = 0; // in px
  const card2Y = 0; // in px

  // Card 3 (NO ARTIFICIAL PROBLEMS) Image Attributes: Scale, X-axis, Y-axis
  const card3Scale = 1.0;
  const card3X = 0; // in px
  const card3Y = 0; // in px

  const pillars = [
    {
      title: "NO SAAS CLONES",
      headline: "We are not looking for another version of something that already exists.",
      detail:
        "No repackaged CRMs, generic wrappers, or superficial UI redesigns. We prioritize fresh, defensible architectural approaches.",
      image: img5,
      alt: "No SaaS Clones Visual",
      scale: card1Scale,
      x: card1X,
      y: card1Y,
    },
    {
      title: "NO EMPTY PITCHES",
      headline: "A polished presentation cannot replace a meaningful solution.",
      detail:
        "We look directly at the codebase, the technical logic, the hardware schematics, and the structural integrity of your build.",
      image: img6,
      alt: "No Empty Pitches Visual",
      scale: card2Scale,
      x: card2X,
      y: card2Y,
    },
    {
      title: "NO ARTIFICIAL PROBLEMS",
      headline: "Build for problems that actually matter.",
      detail:
        "Problems people experience daily. Problems worth solving with deep intellect, physical empathy, and engineering craft.",
      image: img7,
      alt: "No Artificial Problems Visual",
      scale: card3Scale,
      x: card3X,
      y: card3Y,
    },
  ];

  const criteria = [
    {
      title: "ORIGINALITY",
      headline: "Does the idea introduce a genuinely different approach?",
      detail: "Challenging standard assumptions and exploring unexplored architectural or operational angles.",
    },
    {
      title: "IMPACT",
      headline: "Can it improve the lives of a meaningful number of people?",
      detail: "Quantifiable improvement in public utility, accessibility, ecological health, or human capacity.",
    },
    {
      title: "ENGINEERING",
      headline: "Does the solution demonstrate real technical thinking?",
      detail: "Rigorous system design, robust implementation, algorithmic integrity, and functional depth.",
    },
    {
      title: "FEASIBILITY",
      headline: "Can the idea move beyond the prototype?",
      detail: "Realistic deployment constraints, resource viability, and practical path to real-world operation.",
    },
    {
      title: "SUSTAINABILITY",
      headline: "Does it create long-term value?",
      detail: "Enduring utility without extractive mechanics or fragile dependency structures.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="bg-white py-12 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 w-full overflow-hidden"
    >
      <div className="space-y-16 sm:space-y-24">
        {/* Hero Section Title with Reduced Mobile Size */}
        <div className="space-y-4 sm:space-y-8">
          <div className="select-none">
            <h1 className="text-5xl sm:text-7xl md:text-[15vw] lg:text-[180px] xl:text-[230px] leading-[0.9] sm:leading-[0.82] font-geist-thin tracking-[-0.04em] sm:tracking-[-0.07em] text-black uppercase break-words">
              PHILOSOPHY
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-2 sm:pt-4">
            <div className="lg:col-span-6 space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-geist-light tracking-tight leading-[1.05] text-black uppercase">
                NOT ANOTHER<br />HACKATHON.
              </h2>
            </div>
            <div className="lg:col-span-6 flex items-end">
              <p className="text-sm sm:text-lg lg:text-xl text-neutral-600 font-inter font-light max-w-2xl leading-relaxed">
                We reject the superficial cycle of toy projects and marketing decks. As an applied OUANTUM program, ORIGINS exists to cultivate substantive engineering aimed directly at consequential problems.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Large Editorial Columns with Images at TOP, Scale, X-axis, Y-axis, and No Hover Effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden p-6 sm:p-12 bg-[#F5F5F5] rounded-3xl min-h-[380px] sm:min-h-[420px] flex flex-col justify-between border border-neutral-100"
            >
              {/* Positioned Artwork at the TOP with Scale, X-axis, and Y-axis (No Hover Effect) */}
              <div className="relative w-full h-44 sm:h-52 mb-6 overflow-hidden flex items-center justify-center pointer-events-none select-none">
                <div
                  style={{
                    transform: `translate(${item.x}px, ${item.y}px) scale(${item.scale})`,
                    transformOrigin: "center center",
                  }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={90}
                    className="object-contain object-top"
                  />
                </div>
              </div>

              {/* Card Text Content */}
              <div className="space-y-4">
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-900 font-inter font-normal leading-snug">
                    {item.headline}
                  </p>
                </div>
                <p className="text-xs text-neutral-600 font-inter font-light leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* What We Look For Section with Responsive Grid */}
        <div className="pt-6 sm:pt-8 space-y-8 sm:space-y-12">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-geist-thin uppercase tracking-tight text-black">
              WHAT WE LOOK FOR
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {criteria.map((item, index) => (
              <div
                key={index}
                className="p-6 sm:p-12 bg-[#F5F5F5] rounded-3xl space-y-4 sm:space-y-6 flex flex-col justify-between border border-neutral-100"
              >
                <div className="space-y-2">
                  <h4 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
                    {item.title}
                  </h4>
                  <p className="text-sm sm:text-base text-neutral-900 font-inter font-normal leading-snug">
                    {item.headline}
                  </p>
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
              EXPLORE THE 10 FOCUS DOMAINS
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-inter font-light">
              Supported by the OUANTUM venture and engineering network.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full md:w-auto">
            <Link
              href="/"
              className="px-8 py-3.5 bg-neutral-200 text-black text-xs uppercase tracking-widest font-inter rounded-full hover:bg-neutral-300 transition-colors text-center"
            >
              ← HOME
            </Link>
            <Link
              href="/challenge"
              className="px-8 py-3.5 bg-black text-white text-xs uppercase tracking-widest font-inter rounded-full hover:bg-neutral-800 transition-colors text-center"
            >
              CHALLENGES →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
