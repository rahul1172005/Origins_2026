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
              {[
                {
                  role: "FOUNDING",
                  name: "Ouantum",
                  desc: "Applied AI & Ecosystem",
                  url: "https://www.ouantum.com",
                  linkedin: "https://www.linkedin.com/company/ouantum",
                },
                {
                  role: "PARTNER",
                  name: "Cybercom",
                  desc: "Computing Infrastructure",
                  url: "https://www.cybercomctf.com/",
                  linkedin: "https://www.linkedin.com/company/cybercom-ctf",
                },
                {
                  role: "PARTNER",
                  name: "Zapsters",
                  desc: "Product & Engineering",
                  url: "https://zapsters.in",
                  linkedin: "https://www.linkedin.com/company/zapsters-inc",
                },
                {
                  role: "PARTNER",
                  name: "Etherence",
                  desc: "Protocols & Research",
                  url: "https://etherence.com/",
                  linkedin: "https://www.linkedin.com/company/etherence/",
                },
                {
                  role: "PARTNER",
                  name: "Metasips",
                  desc: "Metasips Pvt Ltd",
                  url: "https://www.metasips.com",
                  linkedin: "https://www.linkedin.com/company/metasips-pvt-ltd",
                },
              ].map((p, idx) => (
                <div
                  key={idx}
                  className="group p-6 sm:p-8 bg-[#F5F5F5] rounded-3xl space-y-4 flex flex-col justify-between min-h-[140px] sm:min-h-[160px] border border-neutral-100 transition-all hover:bg-neutral-200/80 block relative"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-inter">
                      {p.role}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <a
                        href={p.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 rounded-full bg-neutral-200/80 hover:bg-black hover:text-white text-neutral-500 flex items-center justify-center transition-colors"
                        title={`${p.name} on LinkedIn`}
                        aria-label={`${p.name} LinkedIn`}
                      >
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                        </svg>
                      </a>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 rounded-full bg-neutral-200/80 hover:bg-black hover:text-white text-neutral-500 flex items-center justify-center transition-colors text-xs"
                        title={`Visit ${p.name}`}
                        aria-label={`Visit ${p.name}`}
                      >
                        ↗
                      </a>
                    </div>
                  </div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="space-y-1 block"
                  >
                    <h4 className="text-lg sm:text-xl font-geist-light uppercase tracking-tight text-black group-hover:opacity-80 transition-opacity">
                      {p.name}
                    </h4>
                    <p className="text-xs text-neutral-500 font-inter font-light">
                      {p.desc}
                    </p>
                  </a>
                </div>
              ))}
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
