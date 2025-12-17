"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    _hsq?: Array<any>;
  }
}

export default function HubSpotTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize HubSpot queue if it doesn't exist
    if (typeof window !== "undefined") {
      window._hsq = window._hsq || [];
      
      // Track page view on route change
      window._hsq.push(["setPath", pathname]);
      window._hsq.push(["trackPageView"]);
    }
  }, [pathname]);

  return null;
}

