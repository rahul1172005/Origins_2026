"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import OriginsLoader from "@/components/OriginsLoader";

export default function LoaderPage() {
  const router = useRouter();

  const handleComplete = () => {
    // Smoothly route to home upon stroke animation completion
    setTimeout(() => {
      router.push("/");
    }, 400);
  };

  return (
    <main className="fixed inset-0 w-screen h-screen bg-white text-black flex flex-col justify-center items-center select-none overflow-hidden">
      <OriginsLoader
        mode="fullscreen"
        autoDismiss={false}
        duration={3.4}
        onComplete={handleComplete}
      />
    </main>
  );
}
