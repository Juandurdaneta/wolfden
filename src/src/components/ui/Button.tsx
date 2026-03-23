"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonTap, buttonHover } from "@/lib/animations";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  size?: "default" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
  showArrow?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  className,
  onClick,
  showArrow = true,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 will-change-transform rounded-full cursor-pointer";

  const variants = {
    primary:
      "bg-wolfden-blue text-white hover:shadow-[0_0_30px_rgba(12,123,220,0.4)] active:shadow-[0_0_15px_rgba(12,123,220,0.3)]",
    ghost:
      "border-2 border-wolfden-blue text-wolfden-blue hover:bg-wolfden-blue hover:text-white",
  };

  const sizes = {
    default: "px-6 py-3 text-sm md:px-8 md:py-3.5 md:text-base",
    lg: "px-8 py-4 text-base md:px-10 md:py-5 md:text-lg",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const MotionTag = href ? motion.a : motion.button;

  return (
    <MotionTag
      href={href}
      onClick={onClick}
      className={classes}
      whileHover={buttonHover}
      whileTap={buttonTap}
    >
      <span>{children}</span>
      {showArrow && (
        <motion.span
          className="inline-flex"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
        </motion.span>
      )}
    </MotionTag>
  );
}
