import Navbar from "@/components/Navbar";
import Prizes from "@/components/Prizes";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RECOGNITION & PRIZES — ORIGINS 2026",
  description: "$25,000 1st Prize, $15,000 2nd Prize, $10,000 3rd Prize (AWS Credits), plus vouchers and internship opportunities for builders.",
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
