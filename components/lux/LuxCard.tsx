"use client";

import { useRef } from "react";
import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { LUX_ACCENTS, type LuxAccent } from "./accents";

const MAX_TILT_DEG = 3.5;

export default function LuxCard({
  as: Tag = "div",
  accent = LUX_ACCENTS.gold,
  featured = false,
  id,
  className = "",
  style,
  children,
}: {
  as?: "div" | "article" | "figure" | "li";
  accent?: LuxAccent;
  featured?: boolean;
  id?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    const node = ref.current;
    if (!node || event.pointerType !== "mouse") return;
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    node.style.setProperty("--mx", `${x * 100}%`);
    node.style.setProperty("--my", `${y * 100}%`);
    node.style.setProperty("--rx", `${(0.5 - y) * MAX_TILT_DEG}deg`);
    node.style.setProperty("--ry", `${(x - 0.5) * MAX_TILT_DEG}deg`);
  };

  const onPointerLeave = () => {
    ref.current?.style.setProperty("--rx", "0deg");
    ref.current?.style.setProperty("--ry", "0deg");
  };

  const vars = {
    "--accent-from": accent.from,
    "--accent-to": accent.to,
    "--accent-glow": accent.glow,
    ...style,
  } as CSSProperties;

  return (
    <Tag
      ref={ref as never}
      id={id}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={vars}
      className={`lux-card ${featured ? "lux-card-featured" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
