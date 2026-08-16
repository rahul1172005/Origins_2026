"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);
  const statementY = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);
  const card1Y = useTransform(scrollYProgress, [0, 1], ["25px", "-25px"]);
  const card2Y = useTransform(scrollYProgress, [0, 1], ["0px", "0px"]);
  const card3Y = useTransform(scrollYProgress, [0, 1], ["-25px", "25px"]);

  return (
    <section
      id="overview"
      ref={ref}
      className="bg-white py-28 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 w-full overflow-hidden"
    >
      <div className="space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Section Heading with Parallax */}
          <div className="lg:col-span-5 space-y-4">
            <motion.h2
              style={{ y: headingY }}
              className="text-5xl sm:text-6xl lg:text-7xl font-geist-thin uppercase tracking-tight text-black leading-tight will-change-transform"
            >
              WHAT IS<br />ORIGINS?
            </motion.h2>
          </div>

          {/* Narrative highlighting OUANTUM program */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6 text-lg sm:text-xl text-neutral-700 font-inter font-light leading-relaxed">
              <p>
                ORIGINS is the premier innovation and engineering sprint hosted under the <strong>OUANTUM</strong> program. It is not another hackathon built around shipping another SaaS product, wrapping an API, or presenting an unrealistic business pitch.
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

            {/* Large Core Statement with smooth Parallax */}
            <motion.div style={{ y: statementY }} className="py-6 will-change-transform">
              <blockquote className="text-3xl sm:text-4xl md:text-5xl font-geist-light uppercase tracking-tight text-black leading-[1.15]">
                Start with the problem.<br />
                Build the solution.
              </blockquote>
            </motion.div>
          </div>
        </div>

        {/* 3 Pillars with Staggered Parallax Wave */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <motion.div
            style={{ y: card1Y }}
            className="p-8 sm:p-10 bg-[#F5F5F5] rounded-3xl space-y-4 will-change-transform"
          >
            <h3 className="text-2xl font-geist-light uppercase tracking-tight text-black">
              REAL PROBLEMS
            </h3>
            <p className="text-sm text-neutral-600 font-inter font-light leading-relaxed">
              Grounded in tangible realities and lived human friction, not synthetic hype.
            </p>
          </motion.div>

          <motion.div
            style={{ y: card2Y }}
            className="p-8 sm:p-10 bg-[#F5F5F5] rounded-3xl space-y-4 will-change-transform"
          >
            <h3 className="text-2xl font-geist-light uppercase tracking-tight text-black">
              REAL ENGINEERING
            </h3>
            <p className="text-sm text-neutral-600 font-inter font-light leading-relaxed">
              Functional architectures, resilient software, hardware systems, and defensible logic.
            </p>
          </motion.div>

          <motion.div
            style={{ y: card3Y }}
            className="p-8 sm:p-10 bg-[#F5F5F5] rounded-3xl space-y-4 will-change-transform"
          >
            <h3 className="text-2xl font-geist-light uppercase tracking-tight text-black">
              REAL IMPACT
            </h3>
            <p className="text-sm text-neutral-600 font-inter font-light leading-relaxed">
              Measurable value delivered to communities, ecosystems, and public infrastructure through the OUANTUM innovation network.
            </p>
          </motion.div>
        </div>

        {/* Action Link to Philosophy */}
        <div className="pt-4 flex justify-end">
          <Link
            href="/philosophy"
            className="px-8 py-4 bg-black text-white text-xs uppercase tracking-widest font-inter rounded-full hover:bg-neutral-800 transition-colors"
          >
            EXPLORE FULL PHILOSOPHY →
          </Link>
        </div>
      </div>
    </section>
  );
}
