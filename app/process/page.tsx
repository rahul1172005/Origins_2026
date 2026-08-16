import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/HowItWorks";
import WhoCanParticipate from "@/components/WhoCanParticipate";
import WhatToSubmit from "@/components/WhatToSubmit";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PROCESS & TIMELINE — ORIGINS 2026",
  description: "How ORIGINS works, eligibility tracks, and final submission expectations.",
};

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-white text-black font-inter">
      <Navbar />
      <HowItWorks />
      <WhoCanParticipate />
      <WhatToSubmit />
      <Footer />
    </main>
  );
}
