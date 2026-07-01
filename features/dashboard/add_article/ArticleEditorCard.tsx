import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";

export default function ArticleEditorCard() {
  return (
    <div className="w-full max-w-[924px] h-[900px] min-h-[900px] rounded-[24px] border bg-[#FFFEFC] border-[#CBC6BC4D]">
      {" "}
      <div className="w-full max-w-[924px] h-[57px] mt-[72px] border-b flex justify-between px-[24px] py-[8px] bg-[#F6F3EE] border-[#CBC6BC4D]">
        {" "}
        <SimpleEditor />{" "}
      </div>{" "}
    </div>
  );
}
