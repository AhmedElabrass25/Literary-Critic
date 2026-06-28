import AuthImage from "@/components/ui/AuthImage";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-screen grid-cols-1 lg:grid-cols-2">
      <div>{children}</div>
      <AuthImage />
    </div>
  );
}