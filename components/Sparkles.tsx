"use client";

import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface SparklesProps {
  count?: number;
  color?: string;
}

export default function Sparkles({ count = 20, color = "#FFFFFF" }: SparklesProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    // Initialize sparkles
    const initialSparkles: Sparkle[] = [];
    for (let i = 0; i < count; i++) {
      initialSparkles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 2 + 1.5,
        delay: Math.random() * 2,
      });
    }
    setSparkles(initialSparkles);
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: color,
            boxShadow: `0 0 ${sparkle.size * 1.5}px ${sparkle.size * 0.5}px ${color}`,
            animation: `sparkle ${sparkle.duration}s ease-in-out infinite`,
            animationDelay: `${sparkle.delay}s`,
            opacity: 0,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
