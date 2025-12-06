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

export function SecondaryButton({ onClick, className, children, size = "md", fullWidth = false }: SecondaryButtonProps) {
  const textPadClasses =
    size === "sm"
      ? "text-xl sm:text-2xl px-8 sm:px-10 py-4 sm:py-5"
      : size === "lg"
      ? "text-3xl sm:text-4xl px-14 sm:px-18 py-6 sm:py-7"
      : "text-2xl sm:text-3xl md:text-4xl px-10 sm:px-14 md:px-16 py-5 sm:py-6 md:py-7";

  const offsetClasses = size === "sm" ? { top: "top-2", left: "left-2" } : size === "lg" ? { top: "top-3", left: "left-3" } : { top: "top-2.5", left: "left-2.5" };

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative group inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e60000]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        fullWidth && "w-full",
        className
      )}
      aria-label={typeof children === "string" ? children : "Secondary action"}
    >
      {/* Shadow layer */}
      <div className={cn("absolute w-full h-full bg-black/70 rounded-full", offsetClasses.top, offsetClasses.left)}></div>
      {/* Middle layer */}
      <div className={cn("absolute w-full h-full bg-white rounded-full", size === "sm" ? "top-1 left-1" : "top-1.5 left-1.5")}></div>
      {/* Main button */}
      <div
        className={cn(
          "relative rounded-full font-bold bg-white text-[#e60000] border-2 border-[#e60000] transition-transform duration-200 will-change-transform",
          "group-hover:translate-x-1 group-hover:translate-y-1 motion-reduce:transform-none",
          textPadClasses,
          fullWidth && "text-center"
        )}
      >
        {children}
      </div>
    </button>
  );
}

export default SecondaryButton;
