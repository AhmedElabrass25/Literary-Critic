"use client";

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import Link from "next/link";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import AmberButton from "@/components/ui/AmberButton";
import AuthTitle from "@/components/ui/AuthTitle";

export default function page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-full max-w-[420px] flex-col gap-[24px] rounded-[12px] border border-[#CBC6BC] bg-white text-center shadow-[0px_1px_2px_0px_#0000000D] px-[48px] py-[18px] lg:py-[38px]">
        <AuthTitle text="التحقق من البريد الإلكتروني" textSize="26" />

        <form className="flex w-full max-w-[322px] flex-col">
          <FieldGroup>
            <Field className="w-full">
              <FieldLabel htmlFor="input-otp-rtl">
                ادخل رمز التحقق الذي ارسناه إلي example@email.com
              </FieldLabel>

              <InputOTP
                id="input-otp-rtl"
                maxLength={6}
                pattern={REGEXP_ONLY_DIGITS}
              >
                <InputOTPGroup className="flex-row-reverse *:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl mt-2">
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </Field>

            <Field orientation="horizontal" className="justify-center">
              <Link href="/reset-password" className="w-full">
                <AmberButton text="تأكيد الرمز" />
              </Link>
            </Field>
          </FieldGroup>
        </form>

        <div className="flex justify-center gap-1">
          <p className="text-[#5F5E5B] text-[13px] leading-[19.5px]">
            لم تستلم الرمز؟
          </p>
          <Link
            href="/"
            className=" text-(--color-amber) hover:text-[#9f7630] text-[13px] leading-[19.5px]"
          >
            إعادة الإرسال
          </Link>
        </div>
      </div>
    </div>
  );
}
