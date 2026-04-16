"use client";
import { motion } from "motion/react";
import { Arc } from "../arc";
import { ProgressiveBlur } from "../progressiveBlur";
import { cn } from "@/lib/utils";

export const CompanyCard_1 = ({
  state,
  className,
}: {
  state: string;
  className: string;
}) => {
  return (
    <motion.div
      animate={
        state === "Company" || state === "All"
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
        "pointer-events-none absolute z-0 flex h-45 w-70 items-center justify-center overflow-clip rounded-[16px] bg-white",
        className,
      )}
    >
      <h2 className="z-35 ml-5 w-60 text-[21px] font-medium text-balance text-stone-500">
        We help companies build customer service from idea to structured
        product.
      </h2>
      <ProgressiveBlur
        className="pointer-events-none absolute bottom-0 left-0 z-33 h-[60%] w-full"
        blurIntensity={0.2}
      />
      <Arc className="bottom-30 -left-3 z-30 rotate-170"></Arc>
      <Arc className="bottom-5 -left-4 z-0 rotate-110 mask-l-from-0%"></Arc>
      <Arc className="-bottom-29 left-25 z-30 -rotate-30 rotate-y-180 mask-t-from-80%"></Arc>{" "}
      <Arc className="-bottom-21 left-33 z-30 rotate-0"></Arc>
      <Arc className="-bottom-29 left-47 z-30 rotate-15 mask-t-from-80%"></Arc>
      <Arc className="bottom-10 left-60 z-30 -rotate-140 rotate-y-180"></Arc>
      <Arc className="bottom-25 left-30 z-30 rotate-150 mask-l-from-0%"></Arc>
      <Arc className="bottom-25 left-70 z-30 -rotate-90 mask-l-from-0%"></Arc>
      <Arc className="-bottom-20 -left-15 z-30 rotate-70 mask-t-from-80%"></Arc>
    </motion.div>
  );
};
