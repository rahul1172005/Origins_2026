import Navbar from "@/components/Navbar";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PHILOSOPHY — ORIGINS 2026",
  description: "Not another hackathon. The engineering philosophy and evaluation principles behind ORIGINS 2026.",
};

export default function PhilosophyPage() {
  return (
    <main className="min-h-screen bg-white text-black font-inter">
      <Navbar />
      <Philosophy />
      <Footer />
    </main>
  );
}
