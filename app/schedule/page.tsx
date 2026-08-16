import Navbar from "@/components/Navbar";
import The24Hours from "@/components/The24Hours";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "24-HOUR SPRINT SCHEDULE — ORIGINS 2026",
  description: "One problem. One team. One opportunity. The complete 24-hour timeline from Kickoff to Submission.",
};

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-white text-black font-inter">
      <Navbar />
      <The24Hours />
      <Footer />
    </main>
  );
}
