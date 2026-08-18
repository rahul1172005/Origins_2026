"use client";

import React from "react";
import DitherBg from "@/components/DitherBg";

export default function WhoCanParticipate() {
  const roles = [
    "Students.",
    "Developers.",
    "Designers.",
    "Researchers.",
    "Engineers.",
    "Founders.",
    "Problem solvers.",
  ];

  return (
    <section className="bg-white py-12 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 w-full">
      <div className="space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-6xl lg:text-7xl font-geist-thin uppercase tracking-tight text-black leading-tight">
              WHO IS<br />ORIGINS FOR?
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Roles Stream */}
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xl sm:text-3xl lg:text-4xl font-geist-light text-black tracking-tight">
              {roles.map((role, idx) => (
                <span key={idx}>
                  {role}
                </span>
              ))}
            </div>

            <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
              <p className="text-base sm:text-2xl text-neutral-600 font-inter font-light leading-relaxed">
                You don&apos;t need to fit into a particular category.
              </p>
              <p className="text-xl sm:text-3xl lg:text-4xl font-geist-light text-black uppercase tracking-tight">
                You need a problem worth solving.
              </p>
            </div>
          </div>
        </div>

        {/* Individual vs Team Cards with Dither BG */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-2 sm:pt-4">
          <div className="relative overflow-hidden p-6 sm:p-12 bg-[#F5F5F5] rounded-3xl space-y-4 sm:space-y-6 flex flex-col justify-between border border-neutral-100">
            <DitherBg opacity={0.25} />
            <div className="relative z-10 space-y-2 sm:space-y-3">
              <h3 className="text-2xl sm:text-4xl font-geist-light uppercase tracking-tight text-black">
                INDIVIDUAL
              </h3>
              <p className="text-base sm:text-lg text-black font-inter font-light">
                Build alone.
              </p>
            </div>
            <p className="relative z-10 text-xs sm:text-sm text-neutral-600 font-inter leading-relaxed">
              For solo architects, specialized researchers, and full-stack builders who prefer autonomous speed, direct end-to-end execution, and singular clarity of vision.
            </p>
          </div>

          <div className="relative overflow-hidden p-6 sm:p-12 bg-[#F5F5F5] rounded-3xl space-y-4 sm:space-y-6 flex flex-col justify-between border border-neutral-100">
            <DitherBg opacity={0.25} />
            <div className="relative z-10 space-y-2 sm:space-y-3">
              <h3 className="text-2xl sm:text-4xl font-geist-light uppercase tracking-tight text-black">
                TEAM
              </h3>
              <p className="text-base sm:text-lg text-black font-inter font-light">
                Bring people with different skills and build together.
              </p>
            </div>
            <p className="relative z-10 text-xs sm:text-sm text-neutral-600 font-inter leading-relaxed">
              Teams of 2 to 4 collaborators. Cross-pollinate technical engineering, interface craft, domain science, and rigorous system validation to compound impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
