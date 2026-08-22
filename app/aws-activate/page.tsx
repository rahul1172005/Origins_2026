import Navbar from "@/components/Navbar";
import AWSActivate from "@/components/AWSActivate";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AWS ACTIVATE CREDITS — ORIGINS 2026",
  description: "AWS Activate startup program providing AWS Cloud Credits for eligible bootstrapped and funded startups at ORIGINS 2026.",
};

export default function AWSActivateDirectPage() {
  return (
    <main className="min-h-screen bg-white text-black font-inter">
      <Navbar />
      <AWSActivate />
      <Footer />
    </main>
  );
}
