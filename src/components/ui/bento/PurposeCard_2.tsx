"use client";
import { cn } from "@/lib/utils";
import { ProgressiveBlur } from "../progressiveBlur";
import { Triangle } from "../triangle";
import { motion } from "motion/react";
import Image from "next/image";
export const PurposeCard_2 = ({
  state,
  className,
}: {
  state: string;
  className: string;
}) => {
  return (
    <motion.div
      animate={
        state === "Purpose" || state === "All"
          ? {
              opacity: 1,
              filter: "blur(0px)",
            }
          : {
              filter: "blur(11px)",
            }
      }
      transition={{
        ease: "easeInOut",
      }}
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
      }}
      className={cn(
        "pointer-events-none absolute z-0 flex h-45 w-60 items-center justify-center overflow-clip rounded-[16px] bg-linear-150 from-white to-white",
        className,
      )}
    >
      <Image
        src="/clouds-bg.png"
        alt=""
        height={0}
        width={0}
        className="absolute h-full w-full object-cover opacity-90"
      />
      <ProgressiveBlur
        className="pointer-events-none absolute top-0 left-0 z-33 h-[60%] w-full"
        blurIntensity={0.1}
        direction="top"
      />
      <div className="z-100 mx-auto w-50 text-[21px] leading-7 font-medium text-white brightness-200">
        Of Customers with Support System that never let you down.
      </div>
    </motion.div>
  );
};
