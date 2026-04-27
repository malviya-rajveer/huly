"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { IconFileText } from "@tabler/icons-react";
import { useState } from "react";
import { BenefitsSkeleton } from "./../BenefitsSkeleton";
import { BlackButton } from "../blackButton";

export const BasePlane = () => {
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
          className="flex size-10 items-center justify-center rounded-lg"
        >
          <IconFileText
            size={30}
            strokeWidth={0.6}
            className="stroke-black/40"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="text-[15px] font-medium text-zinc-800">
            Basic Plan{" "}
          </div>
          <p className="text-[11px] text-neutral-400">
            Perfect for starting out
          </p>
        </div>
      </div>
      <div className="mt-4 ml-6 bg-linear-145 from-neutral-700 from-40% to-neutral-50 to-60% bg-clip-text text-2xl font-semibold text-transparent">
        $16/month
      </div>
      <div className="mt-4 flex justify-center">
        <BlackButton />
      </div>
      <div className="mt-8 ml-6 flex flex-col gap-2">
        <BenefitsSkeleton text="Upto 5 Automated Nodes." />
        <BenefitsSkeleton text="Upto 7 members." />
        <BenefitsSkeleton text="Standard support." />
        <BenefitsSkeleton text="Contact templates." />
      </div>
    </div>
  );
};
