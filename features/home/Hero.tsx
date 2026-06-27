"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { motion, Variants } from "framer-motion";

const Hero = () => {
  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "circOut",
      },
    },
  };
  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "circOut",
      },
    },
  };
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="py-24 lg:py-30"
    >
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between"
      >
        {/* hero text section */}
        <motion.div className="w-full lg:w-1/2 flex flex-col items-start text-right">
          <span className="mb-6 rounded-full bg-(--color-warning-bg) px-4 py-2 text-sm font-medium text-(--color-warning)">
            نقد أدبي
          </span>

          <h1 className="mb-6 leading-tight">
            الحرب والسلام: حين يصبح الزمن شخصية
          </h1>

          <p className="mb-5 text-[15px] text-(--color-text-muted)">
            اسم الناقد · 8 دقائق · 15 مايو 2025
          </p>

          <p className="mb-10 max-w-xl leading-9 text-(--color-text-secondary)">
            في هذه المراجعة العميقة نستكشف كيف استطاع تولستوي تطويع مفهوم الزمن
            ليتحول من مجرد إطار للأحداث إلى بطل فاعل يحرك مصائر الشخصيات.
          </p>

          <Link
            href="/articles/1"
            className="btn-primary flex items-center gap-3"
          >
            اقرأ المقالة
            <BsArrowLeft size={18} />
          </Link>
        </motion.div>
        {/* hero image section */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 relative flex justify-end"
        >
          <Image
            src="/images/heroImage.svg"
            alt="Book"
            width={700}
            height={600}
            priority
            className="h-auto w-full max-w-147.5 object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
