import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AmberButtonProps extends React.ComponentProps<typeof Button> {
  text: string;
}

export default function AmberButton({
  text,
  className,
  ...props
}: AmberButtonProps) {
  return (
    <Button
      type="submit"
      className={cn(
        "h-[52px] w-full max-w-[322px] rounded-[10px] bg-[var(--color-amber)] text-center text-[16px] font-semibold leading-[24px] text-[#F6F3EE] hover:border-[var(--color-amber)] hover:bg-[#9f7630] hover:text-white",
        className,
      )}
      {...props}
    >
      {text}
    </Button>
  );
}
