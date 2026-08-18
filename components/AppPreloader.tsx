"use client";

import React, { useState, useEffect } from "react";
import OriginsLoader from "./OriginsLoader";

export default function AppPreloader({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    try {
      const hasLoaded = sessionStorage.getItem("origins_preloaded");
      if (hasLoaded === "true") {
        setShowLoader(false);
      }
    } catch {
      // If sessionStorage is unavailable
    }
  }, []);

  const handleLoaderComplete = () => {
    try {
      sessionStorage.setItem("origins_preloaded", "true");
    } catch {
      // If sessionStorage is unavailable
    }
    setShowLoader(false);
  };

  return (
    <>
      {showLoader && (
        <OriginsLoader
          mode="fullscreen"
          autoDismiss={true}
          duration={2.2}
          onComplete={handleLoaderComplete}
        />
      )}
      {children}
    </>
  );
}
