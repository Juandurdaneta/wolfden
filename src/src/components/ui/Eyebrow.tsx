import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function Eyebrow({ children, className, dark = true }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-bold uppercase tracking-[0.2em] md:text-sm",
        dark ? "text-wolfden-blue" : "text-wolfden-blue",
        className
      )}
    >
      {children}
    </span>
  );
}
