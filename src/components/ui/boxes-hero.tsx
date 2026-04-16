"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const BoxesHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.4, 0.5], [1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
      }}
      className="absolute top-[64vh] z-10 h-[38vh] w-full mask-b-from-40% mask-b-to-100%"
    >
      <motion.div
        initial={{
          clipPath: "inset(0% 100% 0% 0%)",
        }}
        animate={{
          clipPath: "inset(0% 0% 0% 0%)",
        }}
        transition={{
          duration: 1,
          delay: 1.5,
          ease: "easeOut",
        }}
        className="absolute top-0 h-px w-full bg-white"
      ></motion.div>
      <motion.div
        initial={{
          clipPath: "inset(0% 100% 0% 0%)",
        }}
        animate={{
          clipPath: "inset(0% 0% 0% 0%)",
        }}
        transition={{
          duration: 1,
          delay: 1.6,
          ease: "easeOut",
        }}
        className="absolute top-20 h-px w-full bg-white"
      ></motion.div>
      <motion.div
        initial={{
          clipPath: "inset(0% 100% 0% 0%)",
        }}
        animate={{
          clipPath: "inset(0% 0% 0% 0%)",
        }}
        transition={{
          duration: 1,
          delay: 1.7,
          ease: "easeOut",
        }}
        className="absolute top-40 h-px w-full bg-white"
      ></motion.div>
      <motion.div
        initial={{
          clipPath: "inset(0% 0% 100% 0%)",
        }}
        animate={{
          clipPath: "inset(0% 0% 0% 0%)",
        }}
        transition={{
          duration: 1,
          delay: 1.7,
          ease: "easeOut",
        }}
        className="absolute left-10 h-full w-px bg-neutral-200"
      ></motion.div>{" "}
      <motion.div
        initial={{
          clipPath: "inset(0% 0% 100% 0%)",
        }}
        animate={{
          clipPath: "inset(0% 0% 0% 0%)",
        }}
        transition={{
          duration: 1,
          delay: 1.8,
          ease: "easeOut",
        }}
        className="absolute left-70 h-full w-px bg-neutral-200"
      ></motion.div>
      <motion.div
        initial={{
          clipPath: "inset(0% 0% 100% 0%)",
        }}
        animate={{
          clipPath: "inset(0% 0% 0% 0%)",
        }}
        transition={{
          duration: 1,
          delay: 1.9,
          ease: "easeOut",
        }}
        className="absolute left-140 hidden h-full w-px bg-neutral-200 md:block"
      ></motion.div>
      <motion.div
        initial={{
          clipPath: "inset(0% 0% 100% 0%)",
        }}
        animate={{
          clipPath: "inset(0% 0% 0% 0%)",
        }}
        transition={{
          duration: 1,
          delay: 2,
          ease: "easeOut",
        }}
        className="absolute left-210 hidden h-full w-px bg-neutral-200 lg:block"
      ></motion.div>
      <motion.div
        initial={{
          clipPath: "inset(0% 0% 100% 0%)",
        }}
        animate={{
          clipPath: "inset(0% 0% 0% 0%)",
        }}
        transition={{
          duration: 1,
          delay: 2.2,
          ease: "easeOut",
        }}
        className={cn(
          "absolute right-10 h-full w-px bg-neutral-200",
          "hidden xl:block",
        )}
      ></motion.div>{" "}
      <motion.div
        initial={{
          clipPath: "inset(0% 0% 100% 0%)",
        }}
        animate={{
          clipPath: "inset(0% 0% 0% 0%)",
        }}
        transition={{
          duration: 1,
          delay: 2.3,
          ease: "easeOut",
        }}
        className={cn(
          "absolute right-70 h-full w-px bg-neutral-200",
          "hidden xl:block",
        )}
      ></motion.div>
    </motion.div>
  );
};
