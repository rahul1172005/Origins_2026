"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is the OUANTUM program?",
    answer:
      "OUANTUM is an applied research and engineering ecosystem empowering builders, scientists, and developers to solve foundational physical and digital problems. ORIGINS 2026 is OUANTUM's flagship 24-hour sprint providing incubation, advisory, and non-dilutive deployment grants.",
  },
  {
    question: "Who can participate?",
    answer:
      "ORIGINS 2026 is open globally to all students, software developers, hardware engineers, researchers, product designers, domain specialists, and independent founders who want to build solutions for meaningful problems.",
  },
  {
    question: "Can I participate individually?",
    answer:
      "Yes. You can participate either as a solo builder (Individual track) or as part of a collaborative team of 2 to 4 members (Team track). Both tracks are evaluated with equal rigor under the same judging criteria.",
  },
  {
    question: "How large can a team be?",
    answer:
      "Teams can comprise between 2 and 4 members. We encourage multidisciplinary teams that unite backend systems, user interface craft, hardware design, and specific domain knowledge.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "No. ORIGINS 2026 is completely free to enter. The OUANTUM program and partner institutions cover all operational, infrastructure, mentorship, and platform expenses.",
  },
  {
    question: "Do I need prior hackathon experience?",
    answer:
      "No. We prioritize clarity of problem selection, defensible reasoning, and genuine engineering effort over competitive hackathon experience. First-time builders with deep subject curiosity are warmly welcomed.",
  },
  {
    question: "What technologies can I use?",
    answer:
      "You may use any programming language, framework, database, embedded runtime, or hardware architecture suited to your chosen problem. From low-level C/Rust firmware to Python machine learning models and modern web platforms, your technical stack is unrestricted.",
  },
  {
    question: "Can I use AI?",
    answer:
      "Yes, AI can be integrated as an applied capability within your system (e.g. predictive modeling, signal processing, adaptive interfaces). However, projects that merely wrap third-party API endpoints without original engineering logic or domain substance will not pass evaluation.",
  },
  {
    question: "What can I build?",
    answer:
      "You can build across any of the 10 core domains (Climate, Infrastructure, Health, Education, Accessibility, Public Systems, Safety, Humanity, Technology, Open Innovation). The only requirement is that it tackles a real problem and demonstrates functional execution.",
  },
  {
    question: "What happens after registration?",
    answer:
      "Upon submitting registration, you will receive a unique Registration ID (e.g. ORI-XXXXXX). You will receive technical briefings, sprint guidelines, and workspace invitations prior to the opening kickoff.",
  },
  {
    question: "How does judging work?",
    answer:
      "Evaluation is conducted by our OUANTUM jury across five strict weighted dimensions: Originality (25%), Impact (25%), Engineering Rigor (20%), Feasibility (15%), and Presentation Clarity (15%). Codebases and prototypes are inspected directly.",
  },
  {
    question: "What do I need to submit?",
    answer:
      "At the 24-hour mark, each team submits an integrated package: Problem Statement, Solution Overview, Working Prototype link or demo, Public Code Repository, Impact Metric Analysis, and Post-Origins Roadmap.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const col1Y = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);
  const col2Y = useTransform(scrollYProgress, [0, 1], ["-15px", "15px"]);
  const bannerY = useTransform(scrollYProgress, [0, 1], ["25px", "-15px"]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={containerRef}
      className="bg-white py-12 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 w-full overflow-hidden"
    >
      <div className="space-y-16 sm:space-y-24">
        {/* Massive Hero Section Title with Reduced Mobile Size */}
        <div className="space-y-4 sm:space-y-8">
          <motion.div style={{ y: titleY }} className="select-none will-change-transform">
            <h1 className="text-5xl sm:text-7xl md:text-[15vw] lg:text-[180px] xl:text-[230px] leading-[0.9] sm:leading-[0.82] font-geist-thin tracking-[-0.04em] sm:tracking-[-0.07em] text-black uppercase break-words">
              FAQ
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-2 sm:pt-4">
            <div className="lg:col-span-6 space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-geist-light tracking-tight leading-[1.05] text-black uppercase">
                FREQUENTLY<br />ASKED QUESTIONS.
              </h2>
            </div>
            <div className="lg:col-span-6 flex items-end">
              <p className="text-sm sm:text-lg lg:text-xl text-neutral-600 font-inter font-light max-w-lg leading-relaxed">
                Essential specifics regarding the OUANTUM program, participation structure, technical freedom, judging philosophy, and deliverables.
              </p>
            </div>
          </div>
        </div>

        {/* 12 FAQ Cards in Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                style={{ y: isEven ? col1Y : col2Y }}
                className="will-change-transform"
              >
                <div
                  onClick={() => toggleFAQ(index)}
                  className="p-6 sm:p-12 bg-[#F5F5F5] rounded-3xl space-y-4 sm:space-y-6 flex flex-col justify-between cursor-pointer h-full"
                >
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter">
                        QUESTION
                      </span>
                      <span className="text-xs uppercase tracking-widest text-neutral-500 font-inter font-medium">
                        {isOpen ? "COLLAPSE" : "READ ANSWER"}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="pt-1 sm:pt-2">
                    <p
                      className={`text-xs sm:text-sm text-neutral-700 font-inter font-light leading-relaxed ${
                        isOpen ? "block animate-fadeIn" : "line-clamp-2 text-neutral-500"
                      }`}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Banner */}
        <motion.div
          style={{ y: bannerY }}
          className="p-6 sm:p-14 bg-[#F5F5F5] rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 will-change-transform"
        >
          <div className="space-y-2 text-left">
            <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
              READY TO REGISTER FOR ORIGINS 2026?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-inter font-light">
              Individual and team registration is open globally under the OUANTUM program.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full md:w-auto">
            <Link
              href="/prizes"
              className="px-8 py-3.5 bg-neutral-200 text-black text-xs uppercase tracking-widest font-inter rounded-full hover:bg-neutral-300 transition-colors text-center"
            >
              ← PRIZES
            </Link>
            <Link
              href="/register"
              className="px-8 py-3.5 bg-black text-white text-xs uppercase tracking-widest font-inter rounded-full hover:bg-neutral-800 transition-colors text-center"
            >
              REGISTER →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
