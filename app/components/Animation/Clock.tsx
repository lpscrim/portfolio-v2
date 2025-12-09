"use client";
import { useRef, useEffect } from "react";
// @ts-ignore
import { createAnimatable, utils } from "animejs";

export default function Clock() {
  const clockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const $clock = clockRef.current;
    if (!$clock) return;

    let bounds = $clock.getBoundingClientRect();
    const refreshBounds = () => (bounds = $clock.getBoundingClientRect());

    // Create animejs animatable
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
  }, []);

  return (
    <div
      ref={clockRef}
      className="clock z-9999 text-white/50 cursor-pointer flex flex-col items-center"
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
        {/* Arrow shaft: from (12,16) to (12,8) (center is at 12,12) */}
        <line
          x1="12"
          y1="16"
          x2="12"
          y2="8"
          stroke="currentColor"
          strokeWidth="2"
        />
        {/* Arrowhead at the top */}
        <polygon points="12,5 10,9 14,9" fill="currentColor" />
      </svg>
    </div>
  );
}