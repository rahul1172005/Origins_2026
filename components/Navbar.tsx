"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "About", href: "/" },
    { label: "Philosophy", href: "/philosophy" },
    { label: "Challenge", href: "/challenge" },
    { label: "Process", href: "/process" },
    { label: "Schedule", href: "/schedule" },
    { label: "Judging", href: "/judging" },
    { label: "Prizes", href: "/prizes" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm w-full">
      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-20 py-6 flex items-center justify-between">
        {/* Brand & Program Link */}
        <div className="flex items-baseline gap-3 sm:gap-4">
          <Link
            href="/"
            className="text-left group cursor-pointer"
          >
            <span className="block text-xl tracking-tighter font-geist-light text-black group-hover:opacity-70 transition-opacity">
              ORIGINS 2026
            </span>
          </Link>
          <a
            href="https://www.ouantum.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block text-[11px] font-mono text-neutral-400 hover:text-black transition-colors"
          >
            www.ouantum.com ↗
          </a>
        </div>

        {/* Desktop Navigation (Title case, not all caps) */}
        <nav className="hidden lg:flex items-center gap-8 text-xs tracking-wider font-inter">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors cursor-pointer ${
                  isActive
                    ? "text-black font-semibold"
                    : "text-neutral-500 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Cylinder Register Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/register"
            className="px-8 py-3 bg-black text-white text-xs tracking-wider font-inter rounded-full hover:bg-neutral-800 active:scale-[0.98] transition-all cursor-pointer inline-block"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-xs tracking-wider text-black py-2.5 px-6 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors cursor-pointer font-medium"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white px-6 sm:px-10 py-8 space-y-6">
          <div className="flex flex-col space-y-4 text-sm tracking-wider font-inter">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-left py-2 transition-colors ${
                    isActive ? "text-black font-semibold" : "text-neutral-500 hover:text-black"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-2">
            <a
              href="https://www.ouantum.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-neutral-500 hover:text-black transition-colors block py-2"
            >
              OUANTUM Program — www.ouantum.com ↗
            </a>
          </div>

          <Link
            href="/register"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-4 bg-black text-white text-xs tracking-wider font-inter text-center block rounded-full hover:bg-neutral-800"
          >
            Register Now
          </Link>
        </div>
      )}
    </header>
  );
}
