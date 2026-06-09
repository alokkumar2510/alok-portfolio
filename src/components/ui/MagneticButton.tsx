"use client";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";
import React from "react";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  primary?: boolean;
  children: React.ReactNode;
};

export function MagneticButton({ primary, className, children, ...rest }: Props) {
  const ref = useMagnetic<HTMLAnchorElement>(0.25);
  return (
    <a
      ref={ref}
      data-magnetic
      className={cn("btn-magnetic", primary && "btn-magnetic--primary", className)}
      {...rest}
    >
      {children}
    </a>
  );
}
