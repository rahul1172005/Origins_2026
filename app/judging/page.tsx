import Navbar from "@/components/Navbar";
import Judging from "@/components/Judging";
import Mentors from "@/components/Mentors";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JUDGING & JURY — ORIGINS 2026",
  description: "We don't judge the pitch. We judge the idea, the engineering, and the impact.",
};

export default function JudgingPage() {
  return (
    <main className="min-h-screen bg-white text-black font-inter">
      <Navbar />
      <Judging />
      <Mentors />
      <Footer />
    </main>
  );
}
