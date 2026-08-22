import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-black font-inter flex flex-col justify-between">
      <Navbar />

      <section className="py-16 sm:py-28 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 w-full">
        <div className="max-w-4xl space-y-8 sm:space-y-12">
          {/* Breadcrumb / Tag */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 font-inter">
            <span>ORIGINS 2026</span>
            <span>/</span>
            <span className="text-black font-medium">404 Error</span>
          </div>

          {/* Massive 404 Header */}
          <div className="select-none">
            <h1 className="text-7xl sm:text-9xl md:text-[18vw] lg:text-[220px] leading-[0.85] font-geist-thin tracking-[-0.05em] text-black uppercase">
              404
            </h1>
          </div>

          <div className="space-y-4 max-w-2xl">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-geist-light tracking-tight leading-[1.05] text-black uppercase">
              PAGE NOT FOUND.
            </h2>
            <p className="text-sm sm:text-lg text-neutral-600 font-inter font-light leading-relaxed">
              The requested build endpoint or specification does not exist within the ORIGINS 2026 registry.
            </p>
          </div>

          {/* Action Links */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/"
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
              <span>RETURN TO HOMEPAGE</span>
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
      </section>

      <Footer />
    </main>
  );
}
