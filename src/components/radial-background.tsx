"use client";

import { useCursorPosition } from "@/hooks/use-cursor-position";

const RadialGradientBackground = () => {
  const position = useCursorPosition();

  return (
    <div
      className="fixed inset-0 z-30 transition duration-300 pointer-events-none"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    ></div>
  );
};

export { RadialGradientBackground };
