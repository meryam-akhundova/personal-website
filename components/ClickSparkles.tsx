"use client";

import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
}

export function useClickSparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const createSparkles = (x: number, y: number) => {
    const newSparkles: Sparkle[] = [];
    for (let i = 0; i < 12; i++) {
      const angle = (Math.PI * 2 * i) / 12;
      const speed = Math.random() * 3 + 2;
      newSparkles.push({
        id: Date.now() + i,
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
      });
    }
    setSparkles((prev) => [...prev, ...newSparkles]);
  };

  useEffect(() => {
    if (sparkles.length === 0) return;

    const interval = setInterval(() => {
      setSparkles((prev) =>
        prev
          .map((sparkle) => ({
            ...sparkle,
            x: sparkle.x + sparkle.vx,
            y: sparkle.y + sparkle.vy,
            vx: sparkle.vx * 0.95,
            vy: sparkle.vy * 0.95,
            life: sparkle.life - 0.02,
          }))
          .filter((sparkle) => sparkle.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, [sparkles.length]);

  return { sparkles, createSparkles };
}

export function ClickSparkles({ sparkles }: { sparkles: Sparkle[] }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-[10000]">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            width: "4px",
            height: "4px",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 0 6px 2px rgba(255, 255, 255, 0.8)",
            opacity: sparkle.life,
            transform: `translate(-50%, -50%) scale(${sparkle.life})`,
            transition: "opacity 0.1s ease-out",
          }}
        />
      ))}
    </div>
  );
}
