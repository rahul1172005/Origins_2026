import Navbar from "@/components/Navbar";
import Challenge from "@/components/Challenge";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CHALLENGE — ORIGINS 2026",
  description: "What will you build? Explore the 10 challenge domains of ORIGINS 2026.",
};

export default function ChallengePage() {
  return (
    <main className="min-h-screen bg-white text-black font-inter">
      <Navbar />
      <Challenge />
      <Footer />
    </main>
  );
}
