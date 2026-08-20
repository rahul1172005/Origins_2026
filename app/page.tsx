"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import OriginsLoader from "@/components/OriginsLoader";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);

  const portalModules = [
    {
      href: "/philosophy",
      title: "THE PHILOSOPHY",
      headline: "No SaaS clones. No empty pitches. No artificial problems.",
      detail: "Explore our fundamental rejection of superficial pitch competitions and our strict evaluation standard for original engineering.",
    },
    {
      href: "/challenge",
      title: "CHALLENGE DOMAINS",
      headline: "10 systemic focus areas from climate grid balance to universal accessibility.",
      detail: "Dive into the verified problem archetypes, telemetry vectors, and technical scopes across all 10 challenge categories.",
    },
    {
      href: "/process",
      title: "PROCESS & DELIVERABLES",
      headline: "5 sprint stages, individual/team tracks, and 6 final deliverables.",
      detail: "Learn how teams move from initial discovery to validated working prototypes and technical architecture defense papers.",
    },
    {
      href: "/schedule",
      title: "THE 24 HOURS",
      headline: "One problem. One team. One continuous sprint from 00:00 to 24:00.",
      detail: "Inspect the hourly breakdown from kickoff, mentor checkpoints, midpoint build validation, to submission feature freeze.",
    },
    {
      href: "/judging",
      title: "JUDGING & JURY",
      headline: "Originality (25%), Impact (25%), Engineering (20%), Execution & Clarity.",
      detail: "Meet the researchers, founders, and principal engineers from the OUANTUM network who inspect source code repositories directly.",
    },
    {
      href: "/prizes",
      title: "RECOGNITION & PRIZES",
      headline: "$25,000 1st, $15,000 2nd, $10,000 3rd (AWS Credits), plus vouchers & internships.",
      detail: "Substantial acceleration grants, institutional pilot support, and technical incubation to transition prototypes to production.",
    },
    {
      href: "/faq",
      title: "FREQUENTLY ASKED",
      headline: "12 comprehensive answers regarding the OUANTUM program, tools, and rules.",
      detail: "Clear guidelines ensuring complete transparency and zero ambiguity before you begin your build sprint.",
    },
    {
      href: "/register",
      title: "REGISTRATION PORTAL",
      headline: "100% free official entry portal for solo builders and collaborative teams.",
      detail: "Submit your team parameters and target problem statement to receive your unique verified Registration ID (ORI-XXXXXX).",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black font-inter selection:bg-black selection:text-white">
      {/* Intro Stroke Formation Loader */}
      <OriginsLoader autoDismiss={true} duration={0.8} />

      {/* Sticky Top Navigation */}
      <Navbar />

      {/* 01 — HERO */}
      <Hero />

      {/* 02 — WHAT IS ORIGINS? */}
      <About />

      {/* SECTION DIRECTORY */}
      <section
        ref={containerRef}
        className="bg-white py-12 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 w-full overflow-hidden"
      >
        <div className="space-y-16 sm:space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
            <div className="lg:col-span-5 space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-6xl lg:text-7xl font-geist-thin uppercase tracking-tight text-black leading-tight">
                PLATFORM<br />DIRECTORY
              </h2>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <p className="text-sm sm:text-lg lg:text-xl text-neutral-600 font-inter font-light max-w-2xl leading-relaxed">
                ORIGINS 2026 is structured into dedicated operational dimensions powered by the OUANTUM program. Explore the full guidelines, challenge scopes, and sprint mechanics below.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {portalModules.map((m, idx) => (
              <div key={idx}>
                <Link
                  href={m.href}
                  className="relative overflow-hidden p-6 sm:p-12 bg-[#F5F5F5] rounded-3xl space-y-6 sm:space-y-8 flex flex-col justify-between group cursor-pointer h-full border border-neutral-100 transition-all hover:bg-neutral-200/80"
                >
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-baseline justify-end">
                      <span className="text-xs uppercase tracking-widest text-neutral-500 font-geist font-medium group-hover:text-black transition-colors inline-flex items-center gap-1.5">
                        <span>EXPLORE PAGE</span>
                        <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black group-hover:opacity-80 transition-opacity">
                        {m.title}
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-900 font-inter font-normal leading-snug">
                        {m.headline}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-600 font-inter font-light leading-relaxed">
                    {m.detail}
                  </p>
                </Link>
              </div>
            ))}
          </div>

          {/* Backed By / Ecosystem Section */}
          <div className="space-y-6 sm:space-y-8 pt-4 sm:pt-8">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
                BACKED BY
              </h3>
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter">
                ECOSYSTEM & PARTNERS
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {/* Card 1: Ouantum */}
              <a
                href="https://www.ouantum.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 sm:p-8 bg-[#F5F5F5] rounded-3xl space-y-4 flex flex-col justify-between min-h-[140px] sm:min-h-[160px] border border-neutral-100 transition-all hover:bg-neutral-200/80 cursor-pointer block"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-inter">
                    FOUNDING
                  </span>
                  <span className="text-xs text-neutral-400 group-hover:text-black transition-colors">
                    ↗
                  </span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg sm:text-xl font-geist-light uppercase tracking-tight text-black group-hover:opacity-80 transition-opacity">
                    Ouantum
                  </h4>
                  <p className="text-xs text-neutral-500 font-inter font-light">
                    Applied AI & Ecosystem
                  </p>
                </div>
              </a>

              {/* Card 2: Cybercom */}
              <a
                href="https://www.cybercomctf.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 sm:p-8 bg-[#F5F5F5] rounded-3xl space-y-4 flex flex-col justify-between min-h-[140px] sm:min-h-[160px] border border-neutral-100 transition-all hover:bg-neutral-200/80 cursor-pointer block"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-inter">
                    PARTNER
                  </span>
                  <span className="text-xs text-neutral-400 group-hover:text-black transition-colors">
                    ↗
                  </span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg sm:text-xl font-geist-light uppercase tracking-tight text-black group-hover:opacity-80 transition-opacity">
                    Cybercom
                  </h4>
                  <p className="text-xs text-neutral-500 font-inter font-light">
                    Computing Infrastructure
                  </p>
                </div>
              </a>

              {/* Card 3: Zapsters */}
              <a
                href="https://zapsters.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 sm:p-8 bg-[#F5F5F5] rounded-3xl space-y-4 flex flex-col justify-between min-h-[140px] sm:min-h-[160px] border border-neutral-100 transition-all hover:bg-neutral-200/80 cursor-pointer block"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-inter">
                    PARTNER
                  </span>
                  <span className="text-xs text-neutral-400 group-hover:text-black transition-colors">
                    ↗
                  </span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg sm:text-xl font-geist-light uppercase tracking-tight text-black group-hover:opacity-80 transition-opacity">
                    Zapsters
                  </h4>
                  <p className="text-xs text-neutral-500 font-inter font-light">
                    Product & Engineering
                  </p>
                </div>
              </a>

              {/* Card 4: Etherence */}
              <a
                href="https://etherence.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 sm:p-8 bg-[#F5F5F5] rounded-3xl space-y-4 flex flex-col justify-between min-h-[140px] sm:min-h-[160px] border border-neutral-100 transition-all hover:bg-neutral-200/80 cursor-pointer block"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-inter">
                    PARTNER
                  </span>
                  <span className="text-xs text-neutral-400 group-hover:text-black transition-colors">
                    ↗
                  </span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg sm:text-xl font-geist-light uppercase tracking-tight text-black group-hover:opacity-80 transition-opacity">
                    Etherence
                  </h4>
                  <p className="text-xs text-neutral-500 font-inter font-light">
                    Protocols & Research
                  </p>
                </div>
              </a>

              {/* Card 5: Empty Card */}
              <div className="p-6 sm:p-8 bg-neutral-50/60 rounded-3xl flex flex-col justify-between min-h-[140px] sm:min-h-[160px] border border-dashed border-neutral-200">
                <span className="text-[10px] uppercase tracking-widest text-neutral-300 font-inter">
                  &nbsp;
                </span>
                <div>
                  <div className="w-8 h-8 rounded-full border border-dashed border-neutral-300 flex items-center justify-center text-neutral-300 text-sm font-light">
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Direct CTA Bar */}
          <div className="relative overflow-hidden p-6 sm:p-14 bg-[#F5F5F5] rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 border border-neutral-100">
            <div className="space-y-2 text-left">
              <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
                READY TO ENTER OUANTUM ORIGINS 2026?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-inter font-light">
                Registration is open for solo architects and multidisciplinary teams.
              </p>
            </div>

            <Link
              href="/register"
              className="w-full md:w-auto px-8 sm:px-10 py-4 bg-black text-white text-xs uppercase tracking-widest font-geist font-medium rounded-full hover:bg-neutral-800 active:scale-[0.98] transition-all cursor-pointer inline-flex items-center justify-center gap-2.5 shrink-0 text-center group"
            >
              <span>REGISTER NOW</span>
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

      {/* 14 — FINAL CTA & FOOTER */}
      <Footer />
    </main>
  );
}
