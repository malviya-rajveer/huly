"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { IconChartCohort } from "@tabler/icons-react";
import { useState } from "react";
import { BenefitsSkeleton } from "../BenefitsSkeleton";

export const ProPlan = () => {
  const [animatButtoneGradient, setAnimatButtoneGradient] = useState(false);

  return (
    <div
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.045) 0px 6px 24px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;",
      }}
      className="flex h-95 flex-col rounded-2xl bg-linear-to-b from-[#fdfdfd] to-[#ffffff] lg:h-100"
    >
      {" "}
      <div className="mt-7 ml-6 flex gap-2.5">
        <div
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.065) 0px 6px 24px 0px, rgba(0, 0, 0, 0.09) 0px 0px 0px 1px",
          }}
          className="flex size-10 items-center justify-center rounded-lg"
        >
          <IconChartCohort
            size={30}
            strokeWidth={0.6}
            className="stroke-black/40"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="text-[16px] font-medium text-zinc-800">Pro Plan </div>
          <p className="text-[11px] text-neutral-400">Best for Growing teams</p>
        </div>
      </div>
      <div className="mt-4 ml-7 bg-linear-145 from-neutral-700 from-40% to-neutral-50 to-60% bg-clip-text text-2xl font-semibold text-transparent">
        $49/month
      </div>
      <div className="mt-4 flex justify-center">
        <motion.button
          initial={{
            scale: 1,
          }}
          whileTap={{
            scale: [1, 0.98, 1],
          }}
          onMouseEnter={() => {
            setAnimatButtoneGradient(false);
            setTimeout(() => setAnimatButtoneGradient(true), 50);
          }}
          className="w-[calc(100%-17%)] cursor-pointer rounded-md bg-neutral-800/95 bg-linear-to-b from-white/15 text-[15px] drop-shadow-sm"
        >
          <motion.div
            animate={
              animatButtoneGradient
                ? {
                    backgroundPosition: ["150% center", "0% center"],
                    opacity: 1,
                  }
                : {}
            }
            onMouseEnter={() => {
              setAnimatButtoneGradient(false);
              setTimeout(() => setAnimatButtoneGradient(true), 50);
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            style={{
              backgroundSize: "300% auto",
            }}
            className={cn(
              "mx-auto w-29 bg-clip-text py-[6px] font-medium text-transparent",
              "bg-[linear-gradient(90deg_in_oklch_longer_hue,var(--color-neutral-50)_23%,oklch(82.8%_0.111_230.318),oklch(87.9%_0.169_91.605),var(--color-neutral-50))]",
            )}
          >
            Get started
          </motion.div>
        </motion.button>
      </div>
      <div className="mt-8 ml-7 flex flex-col gap-2">
        <BenefitsSkeleton text="Upto 20 Automated Nodes." />
        <BenefitsSkeleton text="Upto 15 members." />
        <BenefitsSkeleton text="Direct support." />
        <BenefitsSkeleton text="All template Access." />
      </div>
    </div>
  );
};
