"use client";

import React, { useRef } from "react";
import Link from "next/link";

export default function AWSActivate() {
  const containerRef = useRef<HTMLElement>(null);

  const criteriaList = [
    {
      num: "01",
      title: "FUNCTIONAL WEB PRESENCE",
      desc: "A fully functional website representing the actual product/business.",
    },
    {
      num: "02",
      title: "PUBLIC & SOCIAL VERIFICATION",
      desc: "A strong public presence, such as an active LinkedIn company profile.",
    },
    {
      num: "03",
      title: "SAAS / AI & ML FOCUS",
      desc: "A SaaS-based product or solution; AI/ML-based products are particularly relevant.",
    },
    {
      num: "04",
      title: "CORPORATE STRUCTURE",
      desc: "A privately held company, such as a Private Limited company in India.",
    },
    {
      num: "05",
      title: "VINTAGE & INCORPORATION",
      desc: "Been incorporated less than 10 years ago.",
    },
    {
      num: "06",
      title: "FUNDING DOCUMENTATION",
      desc: "For the higher credit tier, $250K+ in institutional funding and the required funding documentation.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="bg-white py-12 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 w-full overflow-hidden"
    >
      <div className="space-y-16 sm:space-y-24">
        {/* Massive Hero Section Title */}
        <div className="space-y-4 sm:space-y-8">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 font-inter">
            <Link href="/prizes" className="hover:text-black transition-colors">
              Prizes
            </Link>
            <span>/</span>
            <span className="text-black font-medium">AWS Activate Credits</span>
          </div>

          <div className="select-none">
            <h1 className="text-5xl sm:text-7xl md:text-[14vw] lg:text-[170px] xl:text-[210px] leading-[0.9] sm:leading-[0.82] font-geist-thin tracking-[-0.04em] sm:tracking-[-0.07em] text-black uppercase break-words">
              AWS ACTIVATE
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-2 sm:pt-4">
            <div className="lg:col-span-6 space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-geist-light tracking-tight leading-[1.05] text-black uppercase">
                CLOUD CREDITS<br />& ACCELERATION.
              </h2>
            </div>
            <div className="lg:col-span-6 flex items-end">
              <p className="text-sm sm:text-lg lg:text-xl text-neutral-600 font-inter font-light max-w-lg leading-relaxed">
                AWS Activate is a startup program that provides AWS Cloud Credits to eligible early stage startups to help them build, test, and scale their products on AWS.
              </p>
            </div>
          </div>
        </div>

        {/* Credit Tiers (Bootstrapped vs Funded) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Tier 1: Bootstrapped */}
          <div className="p-6 sm:p-12 bg-[#F5F5F5] rounded-3xl space-y-6 flex flex-col justify-between h-full border border-neutral-100">
            <div className="space-y-4">
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter">
                  TIER 01
                </span>
                <span className="text-xs uppercase tracking-widest text-neutral-500 font-inter font-medium">
                  BOOTSTRAPPED STARTUPS
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-[9vw] sm:text-[5vw] lg:text-[54px] xl:text-[62px] leading-none font-geist-thin text-black tracking-tight">
                  Up to $25,000 USD
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block font-medium">
                  AWS CLOUD CREDITS
                </span>
                <h3 className="text-xl sm:text-2xl font-geist-light uppercase tracking-tight text-black pt-2">
                  BOOTSTRAPPED BUILDERS
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-600 font-inter font-light leading-relaxed">
              Designed for eligible early-stage startups building without institutional funding to accelerate infrastructure deployment, API testing, and initial product launch.
            </p>
          </div>

          {/* Tier 2: Institutional Funded */}
          <div className="p-6 sm:p-12 bg-[#F5F5F5] rounded-3xl space-y-6 flex flex-col justify-between h-full border border-neutral-100">
            <div className="space-y-4">
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter">
                  TIER 02
                </span>
                <span className="text-xs uppercase tracking-widest text-neutral-500 font-inter font-medium">
                  VENTURE & INSTITUTIONAL
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-[9vw] sm:text-[5vw] lg:text-[54px] xl:text-[62px] leading-none font-geist-thin text-black tracking-tight">
                  Up to $100,000 USD
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block font-medium">
                  AWS CLOUD CREDITS
                </span>
                <h3 className="text-xl sm:text-2xl font-geist-light uppercase tracking-tight text-black pt-2">
                  FUNDED STARTUPS
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-600 font-inter font-light leading-relaxed">
              Tailored for eligible startups that have raised $250K+ in institutional funding to support large-scale GPU workloads, multi-region redundancy, and enterprise throughput.
            </p>
          </div>
        </div>

        {/* Qualification Criteria */}
        <div className="space-y-8 sm:space-y-10">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter block">
              ELIGIBILITY & STANDARDS
            </span>
            <h3 className="text-2xl sm:text-4xl font-geist-thin uppercase tracking-tight text-black">
              QUALIFICATION CRITERIA
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-inter font-light">
              To qualify for AWS Activate Cloud Credits, participating startups should generally meet the following criteria:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {criteriaList.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-10 bg-[#F5F5F5] rounded-3xl space-y-4 flex flex-col justify-between border border-neutral-100"
              >
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
                    CRITERION {item.num}
                  </span>
                  <h4 className="text-lg sm:text-xl font-geist-light uppercase tracking-tight text-black">
                    {item.title}
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 font-inter font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Guidelines Notice Card */}
        <div className="p-6 sm:p-12 bg-[#F5F5F5] rounded-3xl border border-neutral-100 space-y-4">
          <h3 className="text-2xl sm:text-4xl font-geist-thin uppercase tracking-tight text-black">
            IMPORTANT APPLICATION GUIDELINES
          </h3>

          <p className="text-xs sm:text-sm text-neutral-600 font-inter font-light leading-relaxed max-w-3xl">
            These are practical qualification guidelines, not a guarantee of approval. AWS reviews the application and supporting company information before awarding credits. Credit issuance, validation, and tier allocations remain solely at the discretion of Amazon Web Services.
          </p>
        </div>

        {/* Navigation Banner */}
        <div className="p-6 sm:p-14 bg-[#F5F5F5] rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 border border-neutral-100">
          <div className="space-y-2 text-left">
            <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
              RETURN TO PRIZES & GRANTS
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-inter font-light">
              Explore 1st, 2nd, and 3rd prize breakdowns, research fellowships, and partner perks.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full md:w-auto">
            <Link
              href="/prizes"
              className="px-8 py-3.5 bg-black text-white text-xs uppercase tracking-widest font-geist font-medium rounded-full hover:bg-neutral-800 transition-colors inline-flex items-center justify-center gap-2 group text-center"
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
              <span>BACK TO PRIZES</span>
            </Link>
            <Link
              href="/register"
              className="px-8 py-3.5 bg-neutral-200 text-black text-xs uppercase tracking-widest font-geist font-medium rounded-full hover:bg-neutral-300 transition-colors inline-flex items-center justify-center gap-2 group text-center"
            >
              <span>REGISTER FOR SPRINT</span>
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
