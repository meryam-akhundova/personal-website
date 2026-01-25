"use client";

import { useEffect, useState, useRef } from "react";

interface SparklePoint {
  x: number;
  y: number;
  timestamp: number;
  size: number;
  rotation: number;
  twinkle: number;
}

export default function CursorTrail() {
  const [sparkles, setSparkles] = useState<SparklePoint[]>([]);
  const rafRef = useRef<number | undefined>(undefined);
  const sparkleIdRef = useRef(0);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const distance = Math.sqrt(
        Math.pow(e.clientX - lastX, 2) + Math.pow(e.clientY - lastY, 2)
      );
      const timeDiff = now - lastTime;

      // Only create sparkles if mouse moved enough and enough time passed
      if (distance > 5 && timeDiff > 20) {
        const sparkleCount = Math.min(3, Math.floor(distance / 15));
        
        for (let i = 0; i < sparkleCount; i++) {
          const offsetX = (Math.random() - 0.5) * 20;
          const offsetY = (Math.random() - 0.5) * 20;
          
          const newSparkle: SparklePoint = {
            x: e.clientX + offsetX,
            y: e.clientY + offsetY,
            timestamp: now + i * 10,
            size: Math.random() * 3 + 2,
            rotation: Math.random() * 360,
            twinkle: Math.random(),
          };

          setSparkles((prev) => {
            const filtered = prev.filter((p) => now - p.timestamp < 600);
            return [...filtered, newSparkle].slice(-30);
          });
        }

        lastX = e.clientX;
        lastY = e.clientY;
        lastTime = now;
      }
    };

    const animate = () => {
      const now = Date.now();
      setSparkles((prev) => prev.filter((p) => now - p.timestamp < 600));
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998]">
      {sparkles.map((sparkle, index) => {
        const age = Date.now() - sparkle.timestamp;
        const progress = age / 600; // 600ms fade duration
        const opacity = Math.max(0, 1 - progress);
        const twinkleOpacity = (Math.sin((age / 100) + sparkle.twinkle * Math.PI * 2) + 1) / 2;
        const finalOpacity = opacity * (0.5 + twinkleOpacity * 0.5);
        
        return (
          <div
            key={`${sparkle.x}-${sparkle.y}-${sparkle.timestamp}-${index}`}
            className="absolute"
            style={{
              left: `${sparkle.x}px`,
              top: `${sparkle.y}px`,
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              transform: `translate(-50%, -50%) rotate(${sparkle.rotation}deg)`,
              opacity: finalOpacity,
              willChange: "transform, opacity",
            }}
          >
            {/* Sparkle shape - cross/star */}
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 30%, transparent 70%)`,
                borderRadius: "50%",
                boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.size}px rgba(255, 255, 255, ${finalOpacity * 0.6})`,
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                width: "2px",
                height: "100%",
                left: "50%",
                top: "0",
                transform: "translateX(-50%)",
                boxShadow: `0 0 ${sparkle.size}px rgba(255, 255, 255, ${finalOpacity})`,
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                width: "100%",
                height: "2px",
                top: "50%",
                left: "0",
                transform: "translateY(-50%)",
                boxShadow: `0 0 ${sparkle.size}px rgba(255, 255, 255, ${finalOpacity})`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
