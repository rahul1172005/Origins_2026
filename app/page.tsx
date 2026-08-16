"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);
  const col1Y = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);
  const col2Y = useTransform(scrollYProgress, [0, 1], ["-15px", "15px"]);
  const bannerY = useTransform(scrollYProgress, [0, 1], ["25px", "-15px"]);

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
      headline: "Weighted evaluation: Originality (25%), Impact (25%), Engineering (20%).",
      detail: "Meet the researchers, founders, and principal engineers from the OUANTUM network who inspect source code repositories directly.",
    },
    {
      href: "/prizes",
      title: "RECOGNITION & PRIZES",
      headline: "₹1,00,000 Grand Prize, ₹50,000 Runner Up, and 4 Special Recognitions.",
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
      headline: "Official entry portal for solo builders and collaborative teams.",
      detail: "Submit your team parameters and target problem statement to receive your unique verified Registration ID (ORI-XXXXXX).",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black font-inter selection:bg-black selection:text-white">
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
              <motion.h2
                style={{ y: headingY }}
                className="text-3xl sm:text-6xl lg:text-7xl font-geist-thin uppercase tracking-tight text-black leading-tight will-change-transform"
              >
                PLATFORM<br />MODULES
              </motion.h2>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <p className="text-sm sm:text-lg lg:text-xl text-neutral-600 font-inter font-light max-w-2xl leading-relaxed">
                ORIGINS 2026 is structured into dedicated operational dimensions powered by the OUANTUM program. Explore the full guidelines, challenge scopes, and sprint mechanics below.
              </p>
            </div>
          </div>

          {/* Module Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {portalModules.map((m, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  style={{ y: isEven ? col1Y : col2Y }}
                  className="will-change-transform"
                >
                  <Link
                    href={m.href}
                    className="p-6 sm:p-12 bg-[#F5F5F5] rounded-3xl space-y-6 sm:space-y-8 flex flex-col justify-between group cursor-pointer h-full"
                  >
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter">
                          MODULE
                        </span>
                        <span className="text-xs uppercase tracking-widest text-neutral-500 font-inter font-medium group-hover:text-black transition-colors">
                          EXPLORE PAGE →
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
                </motion.div>
              );
            })}
          </div>

          {/* Direct CTA Bar */}
          <motion.div
            style={{ y: bannerY }}
            className="p-6 sm:p-14 bg-[#F5F5F5] rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 will-change-transform"
          >
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
              className="w-full md:w-auto px-8 sm:px-10 py-4 bg-black text-white text-xs uppercase tracking-widest font-inter rounded-full hover:bg-neutral-800 active:scale-[0.98] transition-all cursor-pointer inline-block shrink-0 text-center"
            >
              REGISTER NOW →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 14 — FINAL CTA & FOOTER */}
      <Footer />
    </main>
  );
}
