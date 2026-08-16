"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Footer() {
  const [modalContent, setModalContent] = useState<{ title: string; content: string } | null>(null);
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const originsY = useTransform(scrollYProgress, [0, 1], ["30px", "0px"]);
  const ctaY = useTransform(scrollYProgress, [0, 1], ["20px", "0px"]);

  const openModal = (title: string, content: string) => {
    setModalContent({ title, content });
  };

  return (
    <footer
      ref={footerRef}
      className="bg-white px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pt-12 sm:pt-20 pb-12 sm:pb-16 w-full space-y-12 sm:space-y-20 relative z-10 overflow-hidden"
    >
      {/* 1. MASSIVE ARCHITECTURAL "ORIGINS" AT THE VERY TOP OF THE FOOTER */}
      <div className="w-full select-none text-center pt-2 sm:pt-4 pb-2">
        <motion.div
          style={{ y: originsY }}
          className="text-6xl sm:text-[21vw] lg:text-[22vw] leading-none font-geist-thin tracking-[-0.05em] sm:tracking-[-0.06em] text-black uppercase w-full block will-change-transform break-words"
        >
          ORIGINS
        </motion.div>
      </div>

      {/* 2. HEROIC CLOSING QUESTION & CTA BLOCK */}
      <motion.div
        style={{ y: ctaY }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 items-end pt-2 sm:pt-4 will-change-transform"
      >
        <div className="lg:col-span-8 space-y-2 sm:space-y-4">
          <h2 className="text-2xl sm:text-6xl md:text-7xl lg:text-8xl font-geist-thin uppercase tracking-tight text-black leading-none">
            EVERYTHING<br />
            STARTS WITH<br />
            A QUESTION.
          </h2>
          <h3 className="text-xl sm:text-5xl md:text-6xl lg:text-7xl font-geist-light uppercase tracking-tight text-black leading-none pt-1 sm:pt-2">
            WHAT IF<br />
            WE BUILT<br />
            SOMETHING<br />
            BETTER?
          </h3>
        </div>

        <div className="lg:col-span-4 flex lg:justify-end">
          <Link
            href="/register"
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-5 bg-black text-white text-xs uppercase tracking-[0.2em] font-inter rounded-full hover:bg-neutral-800 active:scale-[0.98] transition-all cursor-pointer inline-block text-center"
          >
            REGISTER NOW
          </Link>
        </div>
      </motion.div>

      {/* 3. CLEAN TYPOGRAPHICAL FOOTER COLUMNS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 pt-4 sm:pt-8">
        {/* Col 1: OUANTUM Program */}
        <div className="space-y-2 sm:space-y-4">
          <h4 className="text-xl sm:text-2xl font-geist-light tracking-tight text-black">
            OUANTUM
          </h4>
          <p className="text-xs text-neutral-600 font-inter font-light leading-relaxed max-w-xs">
            ORIGINS 2026 is the flagship engineering and innovation program by OUANTUM. Advancing human systems through consequential technology, open research, and disciplined problem solving.
          </p>
          <a
            href="https://www.ouantum.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs font-mono text-black hover:opacity-75 underline underline-offset-4 pt-1"
          >
            www.ouantum.com ↗
          </a>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="space-y-2 sm:space-y-4">
          <h5 className="text-xs tracking-wider text-neutral-400 font-inter font-medium">
            Pages
          </h5>
          <ul className="space-y-2 text-xs tracking-wide text-neutral-700 font-inter">
            <li>
              <Link href="/" className="hover:text-black transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/philosophy" className="hover:text-black transition-colors">
                Philosophy
              </Link>
            </li>
            <li>
              <Link href="/challenge" className="hover:text-black transition-colors">
                Challenge
              </Link>
            </li>
            <li>
              <Link href="/process" className="hover:text-black transition-colors">
                Process
              </Link>
            </li>
            <li>
              <Link href="/schedule" className="hover:text-black transition-colors">
                Schedule
              </Link>
            </li>
            <li>
              <Link href="/judging" className="hover:text-black transition-colors">
                Judging
              </Link>
            </li>
            <li>
              <Link href="/prizes" className="hover:text-black transition-colors">
                Prizes
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-black transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Resources & Channels */}
        <div className="space-y-2 sm:space-y-4">
          <h5 className="text-xs tracking-wider text-neutral-400 font-inter font-medium">
            Resources & Channels
          </h5>
          <ul className="space-y-2 text-xs tracking-wide text-neutral-700 font-inter">
            <li>
              <a
                href="https://www.ouantum.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors font-medium text-black block"
              >
                OUANTUM Portal
              </a>
            </li>
            <li>
              <button
                onClick={() =>
                  openModal(
                    "ORIGINS 2026 RULES & OUANTUM INTEGRITY CHARTER",
                    "1. Original Code: All primary architecture and software logic must be developed within the 24-hour sprint.\n2. Genuine Problems: Projects must address authentic real-world challenges.\n3. Open Source / Public Repository: Submissions must include public source code for jury auditing.\n4. No Commercial Wrappers: Applications that merely repackage existing third-party SaaS APIs without original logic are disqualified.\n5. Zero Tolerance for Plagiarism: Direct duplication of existing GitHub repositories leads to immediate disqualification.\n\nLearn more at www.ouantum.com"
                  )
                }
                className="hover:text-black transition-colors cursor-pointer text-left"
              >
                Rules Charter
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  openModal(
                    "CONTACT OUANTUM ORIGINS",
                    "Official Portal: www.ouantum.com\nDirect Inquiries: origins@ouantum.org\nPress & Institutional Partnerships: press@ouantum.org\nEmergency Builder Support: +1 (555) 202-6000\nOUANTUM Innovation Campus, Global Engineering Network."
                  )
                }
                className="hover:text-black transition-colors cursor-pointer text-left"
              >
                Contact
              </button>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors block"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors block"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors block"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Edition / Copyright */}
        <div className="space-y-2 sm:space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <h5 className="text-xs tracking-wider text-neutral-400 font-inter font-medium">
              Edition 2026
            </h5>
            <p className="text-xs text-neutral-600 font-inter font-light leading-relaxed">
              ORIGINS 2026 is an independent initiative developed by the OUANTUM program. All participant intellectual property remains 100% owned by the builders.
            </p>
          </div>
          <div className="space-y-1 pt-2 sm:pt-4">
            <p className="text-xs tracking-wider text-neutral-400 font-inter">
              © 2026 OUANTUM
            </p>
            <a
              href="https://www.ouantum.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono text-neutral-500 hover:text-black transition-colors block"
            >
              www.ouantum.com
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm">
          <div className="bg-white max-w-xl w-full p-6 sm:p-12 space-y-4 sm:space-y-6 rounded-3xl shadow-2xl animate-fadeIn">
            <h3 className="text-xl sm:text-2xl font-geist-light uppercase tracking-tight text-black">
              {modalContent.title}
            </h3>
            <div className="text-xs sm:text-sm text-neutral-700 font-inter leading-relaxed whitespace-pre-line">
              {modalContent.content}
            </div>
            <div className="pt-2 sm:pt-4 flex justify-end">
              <button
                onClick={() => setModalContent(null)}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white text-xs uppercase tracking-widest font-inter rounded-full hover:bg-neutral-800 cursor-pointer"
              >
                CLOSE NOTICE
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
