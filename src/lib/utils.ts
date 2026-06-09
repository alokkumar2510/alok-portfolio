import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const easing = {
  out: [0.16, 1, 0.3, 1] as const,
  inOut: [0.83, 0, 0.17, 1] as const,
  spring: { type: "spring" as const, damping: 18, stiffness: 140 },
};

export function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}
