import NotFound from "@/app/not-found";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — PAGE NOT FOUND | ORIGINS 2026",
  description: "The requested page could not be found.",
};

export default function Custom404Page() {
  return <NotFound />;
}
