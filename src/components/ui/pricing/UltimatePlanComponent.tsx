"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { IconInfinity } from "@tabler/icons-react";
import { useState } from "react";
import { BenefitsSkeleton } from "../BenefitsSkeleton";
import { BlackButton } from "../blackButton";
export const UltimatePlane = () => {
  const [animatButtoneGradient, setAnimatButtoneGradient] = useState(false);
  return (
    <div
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.035) 0px 6px 24px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;",
      }}
      className={cn(
        "h-85 rounded-2xl bg-linear-to-b from-[#fdfdfd] to-[#ffffff] lg:h-90",
      )}
    >
      <div className="mt-6 ml-5 flex gap-2.5">
        <div
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.065) 0px 6px 24px 0px, rgba(0, 0, 0, 0.09) 0px 0px 0px 1px",
          }}
          className="rounded-lg"
        >
          <IconInfinity
            size={42}
            strokeWidth={0.6}
            className="stroke-black/40"
          ></IconInfinity>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="text-[15px] font-medium text-zinc-800">
            Ultimate Plan
          </div>
          <p className="text-[10px] text-neutral-400">
            Everything you need, unlimited
          </p>
        </div>
      </div>
      <div className="mt-4 ml-6 bg-linear-145 from-neutral-700 from-40% to-neutral-50 to-60% bg-clip-text text-2xl font-semibold text-transparent">
        $99/month
      </div>
      <div className="mt-4 flex justify-center">
        <BlackButton />
      </div>

      <div className="mt-8 ml-6 flex flex-col gap-2">
        <BenefitsSkeleton text="Unlimited Automated Nodes." />
        <BenefitsSkeleton text="Upto 50 members." />
        <BenefitsSkeleton text="Direct support." />
        <BenefitsSkeleton text="Dedicated-success manager." />
      </div>
    </div>
  );
};
