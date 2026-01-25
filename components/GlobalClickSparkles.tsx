"use client";

import { useEffect, useRef } from "react";
import { useClickSparkles, ClickSparkles } from "./ClickSparkles";

export default function GlobalClickSparkles() {
  const { sparkles, createSparkles } = useClickSparkles();
  const createSparklesRef = useRef(createSparkles);

  useEffect(() => {
    createSparklesRef.current = createSparkles;
  }, [createSparkles]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      createSparklesRef.current(e.clientX, e.clientY);
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return <ClickSparkles sparkles={sparkles} />;
}
