"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { BookmarkMinus, EllipsisVertical, Pencil, Trash2 } from "lucide-react";
interface Props {
  type: "saved" | "analysis" | "notes";
}

function LibraryCardActions({ type }: Props) {
  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <EllipsisVertical size={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-52">
        <DropdownMenuItem>
          <BookmarkMinus className="ml-2 h-4 w-4" />
          إزالة من المكتبة
        </DropdownMenuItem>
        {type === "notes" && (
          <DropdownMenuItem>
            <Pencil className="ml-2 h-4 w-4" />
            تعديل الملاحظة
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default LibraryCardActions;
