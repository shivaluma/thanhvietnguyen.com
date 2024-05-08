"use client";

import { useCursorPosition } from "@/hooks/use-cursor-position";
import { PropsWithChildren } from "react";

interface RadialGradientBackgroundProps extends PropsWithChildren {}

const RadialGradientBackground = ({
  children,
}: RadialGradientBackgroundProps) => {
  const position = useCursorPosition();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    >
      {children}
    </div>
  );
};

export { RadialGradientBackground };
