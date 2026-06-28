import { Button } from "@/components/ui/button";

interface AmberButtonProps {
  text: string;
}

export default function AmberButton({ text }: AmberButtonProps) {
  return (
    <Button
      type="submit"
      className="h-[52px] w-full max-w-[322px] rounded-[10px] bg-[var(--color-amber)] text-center text-[16px] font-semibold leading-[24px] text-[#F6F3EE] hover:border-[var(--color-amber)] hover:bg-[#9f7630] hover:text-white"
    >
       {text}
    </Button>
  );
}
