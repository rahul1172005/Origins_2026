"use client";

import React from "react";
import DitherBg from "@/components/DitherBg";

export default function WhatToSubmit() {
  const deliverables = [
    {
      title: "PROBLEM",
      headline: "What problem are you solving?",
      detail: "Define the specific systemic friction, target demographics, and why previous solutions failed or fell short.",
    },
    {
      title: "SOLUTION",
      headline: "What did you build?",
      detail: "Articulate your conceptual thesis and how your system directly eliminates the identified bottleneck.",
    },
    {
      title: "PROTOTYPE",
      headline: "Show us the working product.",
      detail: "Provide a working demo link, hardware demonstration video, interactive CLI, or deployed web application.",
    },
    {
      title: "ENGINEERING",
      headline: "Explain how it works.",
      detail: "Public code repository with clean commit history, architectural block diagrams, and technical dependency audit.",
    },
    {
      title: "IMPACT",
      headline: "Explain who benefits and why.",
      detail: "Provide quantifiable metrics, simulated outcomes, cost reductions, or direct feedback from representative users.",
    },
    {
      title: "FUTURE",
      headline: "What happens after ORIGINS?",
      detail: "Outline the roadmap for real-world pilot deployments, regulatory compliance, open-source governance, or hardware fabrication through the OUANTUM network.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 w-full">
      <div className="space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-6xl lg:text-7xl font-geist-thin uppercase tracking-tight text-black leading-tight">
              YOUR FINAL<br />SUBMISSION
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="text-sm sm:text-lg lg:text-xl text-neutral-600 font-inter font-light max-w-lg leading-relaxed">
              Explicit expectations. Every submission is evaluated by OUANTUM reviewers as an integrated engineering package consisting of six concrete modules.
            </p>
          </div>
        </div>

        {/* 6 Grid Modules with Dither BG */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {deliverables.map((item, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden p-6 sm:p-12 bg-[#F5F5F5] rounded-3xl space-y-4 sm:space-y-6 flex flex-col justify-between border border-neutral-100"
            >
              <DitherBg opacity={0.25} />
              <div className="relative z-10 space-y-2">
                <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-900 font-inter font-normal leading-snug">
                  {item.headline}
                </p>
              </div>
              <p className="relative z-10 text-xs text-neutral-600 font-inter font-light leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
