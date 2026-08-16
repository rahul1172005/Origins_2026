import Navbar from "@/components/Navbar";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "REGISTER — ORIGINS 2026",
  description: "Official registration portal for ORIGINS 2026. Individual and team tracks.",
};

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-white text-black font-inter">
      <Navbar />
      <Registration />
      <Footer />
    </main>
  );
}
