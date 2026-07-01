import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WhiteButtonProps {
  icon?: React.ReactNode;
  text: string;
  className?: string;
}

export default function WhiteButton({
  icon,
  text,
  className,
}: WhiteButtonProps) {
  return (
    <Button
      type="button"
      variant="outline"
      className={cn(
        "h-[52px] w-full max-w-[322px] gap-2 rounded-[10px] border border-[#CBC6BC] bg-white hover:bg-[var(--color-bg-secondary)]",
        className
      )}
    >
      {icon}
      {text}
    </Button>
  );
}