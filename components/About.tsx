"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import img2 from "@/public/images/2.png";
import img3 from "@/public/images/3.png";
import img4 from "@/public/images/4.png";

export default function About() {
  const ref = useRef<HTMLElement>(null);

  // Card 1 (REAL PROBLEMS) Image Attributes: Scale, X-axis, Y-axis
  const card1Scale = 1.0;
  const card1X = 0; // in px
  const card1Y = 0; // in px

  // Card 2 (REAL ENGINEERING) Image Attributes: Scale, X-axis, Y-axis
  const card2Scale = 1.0;
  const card2X = 0; // in px
  const card2Y = 0; // in px

  // Card 3 (REAL IMPACT) Image Attributes: Scale, X-axis, Y-axis
  const card3Scale = 1.0;
  const card3X = 0; // in px
  const card3Y = 0; // in px

  const pillars = [
    {
      title: "REAL PROBLEMS",
      description:
        "Grounded in tangible realities and lived human friction, not synthetic hype.",
      image: img2,
      alt: "Real Problems Visual",
      scale: card1Scale,
      x: card1X,
      y: card1Y,
    },
    {
      title: "REAL ENGINEERING",
      description:
        "Functional architectures, resilient software, hardware systems, and defensible logic.",
      image: img3,
      alt: "Real Engineering Visual",
      scale: card2Scale,
      x: card2X,
      y: card2Y,
    },
    {
      title: "REAL IMPACT",
      description:
        "Measurable value delivered to communities, ecosystems, and public infrastructure through the OUANTUM innovation network.",
      image: img4,
      alt: "Real Impact Visual",
      scale: card3Scale,
      x: card3X,
      y: card3Y,
    },
  ];

  return (
    <section
      id="overview"
      ref={ref}
      className="bg-white py-28 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 w-full overflow-hidden"
    >
      <div className="space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Section Heading */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-geist-thin uppercase tracking-tight text-black leading-tight">
              WHAT IS<br />ORIGINS?
            </h2>
          </div>

          {/* Narrative highlighting OUANTUM program */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6 text-lg sm:text-xl text-neutral-700 font-inter font-light leading-relaxed">
              <p>
                ORIGINS is the premier innovation and engineering sprint hosted under the{" "}
                <a
                  href="https://www.ouantum.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 text-black hover:opacity-75 font-medium"
                >
                  OUANTUM
                </a>{" "}
                program (<span className="font-mono text-xs sm:text-sm text-neutral-500">www.ouantum.com</span>). It is not another hackathon built around shipping another SaaS product, wrapping an API, or presenting an unrealistic business pitch.
              </p>
              <p className="text-neutral-500">
                It begins somewhere else.
              </p>
              <p className="text-2xl sm:text-3xl text-black font-geist-light tracking-tight">
                With a problem.
              </p>
              <p className="text-2xl sm:text-3xl text-black font-geist-light tracking-tight">
                With a question.
              </p>
              <p>
                With an idea that could make something meaningfully better for people
                and the world around them.
              </p>
            </div>

            {/* Large Core Statement */}
            <div className="py-6">
              <blockquote className="text-3xl sm:text-4xl md:text-5xl font-geist-light uppercase tracking-tight text-black leading-[1.15]">
                Start with the problem.<br />
                Build the solution.
              </blockquote>
            </div>
          </div>
        </div>

        {/* 3 Pillars Cards with Images at the TOP, Scale, X-axis, Y-axis, and No Hover Effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden p-8 sm:p-10 bg-[#F5F5F5] rounded-3xl min-h-[380px] sm:min-h-[420px] flex flex-col justify-between border border-neutral-100"
            >
              {/* Positioned Artwork at the TOP with Scale, X-axis, and Y-axis (No Hover Effect) */}
              <div className="relative w-full h-44 sm:h-52 mb-6 overflow-hidden flex items-center justify-center pointer-events-none select-none">
                <div
                  style={{
                    transform: `translate(${pillar.x}px, ${pillar.y}px) scale(${pillar.scale})`,
                    transformOrigin: "center center",
                  }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={90}
                    className="object-contain object-top"
                  />
                </div>
              </div>

              {/* Card Bottom Content */}
              <div className="relative z-10 space-y-3">
                <h3 className="text-2xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
                  {pillar.title}
                </h3>
                <p className="text-sm text-neutral-600 font-inter font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link to Philosophy */}
        <div className="pt-4 flex justify-end">
          <Link
            href="/philosophy"
            className="px-8 py-4 bg-black text-white text-xs uppercase tracking-widest font-geist font-medium rounded-full hover:bg-neutral-800 transition-colors inline-flex items-center gap-2 group"
          >
            <span>EXPLORE FULL PHILOSOPHY</span>
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
    </section>
  );
}
