import React from "react";
import { Button } from "@/components/ui/button";

interface WhiteButtonProps {
  icon?: React.ReactNode;
  text: string;
}

export default function WhiteButton({ icon, text }: WhiteButtonProps) {
  return (
    <Button
      type="button"
      variant="outline"
      className="h-[52px] w-full max-w-[322px] gap-2 rounded-[10px] border border-[#CBC6BC] bg-white hover:bg-[var(--color-bg-secondary)]"
    >
      {icon}
      {text}
    </Button>
  );
}
