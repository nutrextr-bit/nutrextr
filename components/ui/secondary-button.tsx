"use client";

import React from "react";
import { cn } from "@/lib/utils";

type SecondaryButtonProps = {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
};

export function SecondaryButton({
  onClick,
  className,
  children,
  size = "md",
  fullWidth = false,
}: SecondaryButtonProps) {
  const sizeClasses =
    size === "sm"
      ? "text-xl sm:text-2xl px-8 sm:px-10 py-3 sm:py-4"
      : size === "lg"
      ? "text-3xl sm:text-4xl px-14 sm:px-18 py-5 sm:py-6"
      : "text-2xl sm:text-3xl md:text-4xl px-10 sm:px-14 md:px-16 py-4 sm:py-5 md:py-6";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={typeof children === "string" ? children : "Secondary action"}
      className={cn(
        "inline-block rounded-full border-2 border-[#e60000] bg-white font-bold text-[#e60000]",
        "transition-colors duration-200 hover:bg-[#ffeaea]", // optional light hover
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e60000]/80 focus-visible:ring-offset-2",
        sizeClasses,
        fullWidth && "w-full text-center",
        className
      )}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
