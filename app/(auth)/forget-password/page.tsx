import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import AmberButton from "@/components/ui/AmberButton";
import AuthTitle from "@/components/ui/AuthTitle";
import AuthImage from "@/components/ui/AuthImage";

export default function page() {
  return (
    <div className="grid h-screen grid-cols-1 lg:grid-cols-2">
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex w-full max-w-[420px] flex-col gap-[24px] rounded-[12px] border border-[#CBC6BC] bg-white text-center shadow-[0px_1px_2px_0px_#0000000D] px-[48px] py-[18px] lg:py-[38px]">
          <AuthTitle text="نسيت كلمة المرور؟" textSize="26" />

          <form className="flex w-full max-w-[322px] flex-col">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="form-email">البريد الإلكتروني</FieldLabel>
                <Input
                  id="form-email"
                  type="email"
                  placeholder="name@example.com"
                  required
                />
                <FieldDescription>
                  ادخل بريدك الإلكتروني لإعادة تعيين كلمة المرور
                </FieldDescription>
              </Field>
              <Field orientation="horizontal" className="justify-center">
                <Link href="/verify-otp" className="w-full">
                  <AmberButton text="إعادة تعيين كلمة المرور" />
                </Link>
              </Field>
            </FieldGroup>
          </form>
          <div className="flex justify-center gap-1">
            <p className="text-[#5F5E5B] text-[13px] leading-[19.5px]">
              تذكرت كلمة المرور؟
            </p>
            <Link
              href="/login"
              className=" text-(--color-amber) hover:text-[#9f7630] text-[13px] leading-[19.5px]"
            >
              سجل الدخول
            </Link>
          </div>
        </div>
      </div>
      <AuthImage />
    </div>
  );
}
