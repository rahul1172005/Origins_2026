import Navbar from "@/components/Navbar";
import Prizes from "@/components/Prizes";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RECOGNITION & PRIZES — ORIGINS 2026",
  description: "Grand Prize, Runner Up, and Special Recognition categories for ORIGINS 2026.",
};

export default function PrizesPage() {
  return (
    <main className="min-h-screen bg-white text-black font-inter">
      <Navbar />
      <Prizes />
      <Footer />
    </main>
  );
}
