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

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="flex items-center justify-center bg-[#FCF9F3] py-[20px] min-h-screen">
      <div className="flex w-full max-w-[420px] flex-col justify-center gap-[20px] rounded-[12px] border border-[#CBC6BC] bg-white text-center shadow-[0px_1px_2px_0px_#0000000D] px-[48px] py-[18px] lg:py-[38px]">
        <div className="flex flex-col items-center gap-[4px] w-full max-w-[322px] h-[98px]">
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 5.9V4.2C13.55 3.96667 14.1125 3.79167 14.6875 3.675C15.2625 3.55833 15.8667 3.5 16.5 3.5C16.9333 3.5 17.3583 3.53333 17.775 3.6C18.1917 3.66667 18.6 3.75 19 3.85V5.45C18.6 5.3 18.1958 5.1875 17.7875 5.1125C17.3792 5.0375 16.95 5 16.5 5C15.8667 5 15.2583 5.07917 14.675 5.2375C14.0917 5.39583 13.5333 5.61667 13 5.9ZM13 11.4V9.7C13.55 9.46667 14.1125 9.29167 14.6875 9.175C15.2625 9.05833 15.8667 9 16.5 9C16.9333 9 17.3583 9.03333 17.775 9.1C18.1917 9.16667 18.6 9.25 19 9.35V10.95C18.6 10.8 18.1958 10.6875 17.7875 10.6125C17.3792 10.5375 16.95 10.5 16.5 10.5C15.8667 10.5 15.2583 10.575 14.675 10.725C14.0917 10.875 13.5333 11.1 13 11.4ZM13 8.65V6.95C13.55 6.71667 14.1125 6.54167 14.6875 6.425C15.2625 6.30833 15.8667 6.25 16.5 6.25C16.9333 6.25 17.3583 6.28333 17.775 6.35C18.1917 6.41667 18.6 6.5 19 6.6V8.2C18.6 8.05 18.1958 7.9375 17.7875 7.8625C17.3792 7.7875 16.95 7.75 16.5 7.75C15.8667 7.75 15.2583 7.82917 14.675 7.9875C14.0917 8.14583 13.5333 8.36667 13 8.65ZM5.5 12C6.28333 12 7.04583 12.0875 7.7875 12.2625C8.52917 12.4375 9.26667 12.7 10 13.05V3.2C9.31667 2.8 8.59167 2.5 7.825 2.3C7.05833 2.1 6.28333 2 5.5 2C4.9 2 4.30417 2.05833 3.7125 2.175C3.12083 2.29167 2.55 2.46667 2 2.7V12.6C2.58333 12.4 3.1625 12.25 3.7375 12.15C4.3125 12.05 4.9 12 5.5 12ZM12 13.05C12.7333 12.7 13.4708 12.4375 14.2125 12.2625C14.9542 12.0875 15.7167 12 16.5 12C17.1 12 17.6875 12.05 18.2625 12.15C18.8375 12.25 19.4167 12.4 20 12.6V2.7C19.45 2.46667 18.8792 2.29167 18.2875 2.175C17.6958 2.05833 17.1 2 16.5 2C15.7167 2 14.9417 2.1 14.175 2.3C13.4083 2.5 12.6833 2.8 12 3.2V13.05ZM11 16C10.2 15.3667 9.33333 14.875 8.4 14.525C7.46667 14.175 6.5 14 5.5 14C4.8 14 4.1125 14.0917 3.4375 14.275C2.7625 14.4583 2.11667 14.7167 1.5 15.05C1.15 15.2333 0.8125 15.225 0.4875 15.025C0.1625 14.825 0 14.5333 0 14.15V2.1C0 1.91667 0.0458333 1.74167 0.1375 1.575C0.229167 1.40833 0.366667 1.28333 0.55 1.2C1.31667 0.8 2.11667 0.5 2.95 0.3C3.78333 0.1 4.63333 0 5.5 0C6.46667 0 7.4125 0.125 8.3375 0.375C9.2625 0.625 10.15 1 11 1.5C11.85 1 12.7375 0.625 13.6625 0.375C14.5875 0.125 15.5333 0 16.5 0C17.3667 0 18.2167 0.1 19.05 0.3C19.8833 0.5 20.6833 0.8 21.45 1.2C21.6333 1.28333 21.7708 1.40833 21.8625 1.575C21.9542 1.74167 22 1.91667 22 2.1V14.15C22 14.5333 21.8375 14.825 21.5125 15.025C21.1875 15.225 20.85 15.2333 20.5 15.05C19.8833 14.7167 19.2375 14.4583 18.5625 14.275C17.8875 14.0917 17.2 14 16.5 14C15.5 14 14.5333 14.175 13.6 14.525C12.6667 14.875 11.8 15.3667 11 16Z"
              fill="#B68A3E"
            />
          </svg>

          <div className="w-full max-w-[322px] h-[27px] pt-[7px]">
            <p className="font-semibold text-[#5F5E5B] text-[13px] leading-[19.5px]">
              مساحتك الأدبية
            </p>
          </div>

          <div className="w-full max-w-[322px] h-[47px]">
            <p className="font-bold text-[36px] leading-[46.8px] text-[var(--color-text-primary)]">
              أهلاً بك
            </p>
          </div>
        </div>

        <form className="flex w-full max-w-[322px] flex-col justify-center gap-[24px]">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="form-name">الأسم الكامل</FieldLabel>
              <Input
                id="form-name"
                type="text"
                placeholder="ادخل اسمك الكامل"
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="form-name">اسم المستخدم</FieldLabel>
              <Input
                id="form-name"
                type="text"
                placeholder="ادخل اسم مستخدم"
                required
              />
            </Field>

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
              <div className="flex items-center justify-between gap-4 w-full max-w-[318px] h-[19.5px]">
                <FieldLabel htmlFor="form-password">كلمة المرور</FieldLabel>
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

            <Field>
              <FieldLabel htmlFor="form-confirmpassword">
                تأكيد كلمة المرور
              </FieldLabel>
              <div className="relative">
                <Input
                  id="form-confirmpassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                />
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
              <AmberButton text="إنشاء الحساب" />
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

        <div className="flex justify-center gap-1 w-full max-w-[322px] h-[20.5px]">
          <p className="text-[#5F5E5B] text-[13px] leading-[19.5px]">
            لديك حساب بالفعل؟
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
  );
};

export default Page;