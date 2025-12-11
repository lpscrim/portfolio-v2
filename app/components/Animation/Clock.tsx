"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { createAnimatable } from "animejs";

export default function Clock() {
  const clockRef = useRef<HTMLDivElement>(null);
  const [showClock, setShowClock] = useState(false);

  useEffect(() => {
    if (!showClock) return;
    const $clock = clockRef.current;
    if (!$clock) return;

    let bounds = $clock.getBoundingClientRect();
    const refreshBounds = () => (bounds = $clock.getBoundingClientRect());

    const clock = createAnimatable($clock, {
      rotate: { unit: "rad" },
      duration: 400,
    });

    const PI = Math.PI;
    let lastAngle = 0;
    let angle = PI / 2;

    const onMouseMove = (e: MouseEvent) => {
      const { width, height, left, top } = bounds;
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;
      const currentAngle = Math.atan2(y, x);
      const diff = currentAngle - lastAngle;
      angle += diff > PI ? diff - 2 * PI : diff < -PI ? diff + 2 * PI : diff;
      lastAngle = currentAngle;
      clock.rotate(angle);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", refreshBounds);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", refreshBounds);
    };
  }, [showClock]);

  return (
    <div className="relative flex flex-col items-center">
      {/* Logo */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
          showClock ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        onClick={() => setShowClock(true)}
        style={{ zIndex: 10, cursor: "pointer" }}
      >
        <Image src="/logo1.svg" alt="Logo" width={80} height={80} />
      </div>
      {/* Clock */}
      <div
        ref={clockRef}
        className={`clock z-9999 text-white/50 flex flex-col items-center transition-opacity duration-700 cursor-pointer ${
          showClock ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShowClock(false)}
        style={{ willChange: "transform" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line
            x1="12"
            y1="16"
            x2="12"
            y2="8"
            stroke="currentColor"
            strokeWidth="2"
          />
          <polygon points="12,5 10,9 14,9" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}