"use client";

import { useEffect } from "react";

export default function DisableZoom() {
  useEffect(() => {
    const preventDefault = (event: Event) => {
      event.preventDefault();
    };

    const gestureEvents = [
      "gesturestart",
      "gesturechange",
      "gestureend",
    ];

    gestureEvents.forEach((eventName) => {
      document.addEventListener(eventName, preventDefault, {
        passive: false,
      });
    });

    let lastTouchEnd = 0;
    const handleTouchEnd = (event: TouchEvent) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    };

    document.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      gestureEvents.forEach((eventName) => {
        document.removeEventListener(eventName, preventDefault);
      });
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return null;
}

