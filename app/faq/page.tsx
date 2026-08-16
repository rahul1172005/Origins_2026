import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — ORIGINS 2026",
  description: "Frequently asked questions about ORIGINS 2026 hackathon.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white text-black font-inter">
      <Navbar />
      <FAQ />
      <Footer />
    </main>
  );
}
