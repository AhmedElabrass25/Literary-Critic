"use client";

import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import AmberButton from "@/components/ui/AmberButton";
import WhiteButton from "@/components/ui/WhiteButton";
import AuthTitle from "@/components/ui/AuthTitle";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex items-center justify-center py-[20px]">
      <div className="flex w-full max-w-[420px] flex-col justify-center gap-[7px] rounded-[12px] border border-[#CBC6BC] bg-white text-center shadow-[0px_1px_2px_0px_#0000000D] px-[48px] py-[18px] lg:py-[38px]">
        <AuthTitle text="أهلاً بعودتك"/>

        <form className="flex w-full max-w-[322px] h-[443px] flex-col justify-center gap-[24px]">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="form-email">البريد الإلكتروني</FieldLabel>
              <Input
                id="form-email"
                type="email"
                placeholder="name@example.com"
                required
              />
            </Field>

            <Field>
              <div className="flex items-center justify-between w-full max-w-[318px] h-[19.5px]">
                <FieldLabel htmlFor="form-password">كلمة المرور</FieldLabel>
                <Link
                  href="/forget-password"
                  className="hover:text-foreground text-[11px] leading-[15.4px] text-(--color-amber) w-full max-w-[84px]"
                >
                  نسيت كلمة المرور؟
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="form-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                />
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                  width="22"
                  height="15"
                  viewBox="0 0 22 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 12C12.25 12 13.3125 11.5625 14.1875 10.6875C15.0625 9.8125 15.5 8.75 15.5 7.5C15.5 6.25 15.0625 5.1875 14.1875 4.3125C13.3125 3.4375 12.25 3 11 3C9.75 3 8.6875 3.4375 7.8125 4.3125C6.9375 5.1875 6.5 6.25 6.5 7.5C6.5 8.75 6.9375 9.8125 7.8125 10.6875C8.6875 11.5625 9.75 12 11 12ZM11 10.2C10.25 10.2 9.6125 9.9375 9.0875 9.4125C8.5625 8.8875 8.3 8.25 8.3 7.5C8.3 6.75 8.5625 6.1125 9.0875 5.5875C9.6125 5.0625 10.25 4.8 11 4.8C11.75 4.8 12.3875 5.0625 12.9125 5.5875C13.4375 6.1125 13.7 6.75 13.7 7.5C13.7 8.25 13.4375 8.8875 12.9125 9.4125C12.3875 9.9375 11.75 10.2 11 10.2ZM11 15C8.56667 15 6.35 14.3208 4.35 12.9625C2.35 11.6042 0.9 9.78333 0 7.5C0.9 5.21667 2.35 3.39583 4.35 2.0375C6.35 0.679167 8.56667 0 11 0C13.4333 0 15.65 0.679167 17.65 2.0375C19.65 3.39583 21.1 5.21667 22 7.5C21.1 9.78333 19.65 11.6042 17.65 12.9625C15.65 14.3208 13.4333 15 11 15Z"
                    fill="#7A776E"
                  />
                </svg>
              </div>
            </Field>

            <FieldGroup className="w-full max-w-[318px] h-[19.5px] pl-[256.58px] gap-[8px] flex">
              <Field orientation="horizontal">
                <Checkbox id="terms-checkbox" name="terms-checkbox" />
                <Label
                  htmlFor="terms-checkbox"
                  className="w-full w-[37.42px] h-[20px] realtive -top-[1px]"
                >
                  تذكرني
                </Label>
              </Field>
            </FieldGroup>

            <Field orientation="horizontal" className="justify-center">
              <AmberButton text="تسجيل الدخول" />
            </Field>

            <div className="flex items-center py-[3px]">
              <Separator className="flex-1" orientation="horizontal" />
              <span className="px-[12px] text-[12px] leading-[16px] text-[#5F5E5B]">
                أو
              </span>
              <Separator className="flex-1" orientation="horizontal" />
            </div>

            <WhiteButton
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M18.8 10.208C18.8 9.55801 18.7417 8.93301 18.6333 8.33301H10V11.883H14.9333C14.7167 13.0247 14.0667 13.9913 13.0917 14.6413V16.9497H16.0667C17.8 15.3497 18.8 12.9997 18.8 10.208Z"
                    fill="#171610"
                  />
                  <path
                    d="M9.99974 19.1667C12.4747 19.1667 14.5497 18.35 16.0664 16.95L13.0914 14.6417C12.2747 15.1917 11.2331 15.525 9.99974 15.525C7.61641 15.525 5.59141 13.9167 4.86641 11.75H1.81641V14.1167C3.32474 17.1083 6.41641 19.1667 9.99974 19.1667Z"
                    fill="#171610"
                  />
                  <path
                    d="M4.86634 11.7416C4.68301 11.1916 4.57467 10.6083 4.57467 9.99993C4.57467 9.3916 4.68301 8.80827 4.86634 8.25827V5.8916H1.81634C1.19134 7.12493 0.833008 8.5166 0.833008 9.99993C0.833008 11.4833 1.19134 12.8749 1.81634 14.1083L4.86634 11.7416Z"
                    fill="#171610"
                  />
                  <path
                    d="M9.99974 4.48301C11.3497 4.48301 12.5497 4.94967 13.5081 5.84967L16.1331 3.22467C14.5414 1.74134 12.4747 0.833008 9.99974 0.833008C6.41641 0.833008 3.32474 2.89134 1.81641 5.89134L4.86641 8.25801C5.59141 6.09134 7.61641 4.48301 9.99974 4.48301Z"
                    fill="#171610"
                  />
                </svg>
              }
              text="المتابعة باستخدام Google"
            />
          </FieldGroup>
        </form>

        <div className="flex justify-center gap-1">
          <p className="text-[#5F5E5B] text-[13px] leading-[19.5px]">
            ليس لديك حساب؟
          </p>
          <Link
            href="/register"
            className=" text-(--color-amber) hover:text-[#9f7630] text-[13px] leading-[19.5px]"
          >
            إنشاء الحساب
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
