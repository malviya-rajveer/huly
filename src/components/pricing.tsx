"use client";
import { cn } from "@/lib/utils";
import { IconCash } from "@tabler/icons-react";
import { BasePlane } from "./ui/pricing/basePlaneComponent";
import { ProPlan } from "./ui/pricing/ProPlanComponent";
import { UltimatePlane } from "./ui/pricing/UltimatePlanComponent";

export const Pricing = () => {
  return (
    <div className="font-inter flex h-full w-full flex-col items-center">
      <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.035) 0px 6px 24px 0px, rgba(0, 0, 0, 0.1) 0px 1px 1px 0px",
        }}
        className="mt-8 rounded-[20px] bg-linear-150 from-neutral-100 to-neutral-500 p-[1px]"
      >
        <div className="flex items-center gap-0.5 rounded-2xl bg-linear-150 from-white to-neutral-50 px-3 py-1 text-[12px] text-neutral-800">
          <IconCash className="size-5 stroke-neutral-800" strokeWidth={0.8} />{" "}
          Pricing
        </div>
      </div>
      <h2
        className={cn(
          "mt-4 bg-linear-150 from-stone-900 from-80% to-neutral-100 bg-clip-text text-3xl tracking-tight text-transparent xl:text-[34px]",
        )}
      >
        Choose your Plan
      </h2>
      <p className="mt-2 text-[14px] leading-snug text-neutral-500">
        Simple, Transparent Pricings.
      </p>
      <div className="my-8 grid h-full w-80 grid-cols-1 items-center gap-2 md:h-100 md:w-180 md:grid-cols-3 lg:h-100 lg:w-230 lg:gap-4">
        <BasePlane />
        <ProPlan />
        <UltimatePlane />
      </div>
    </div>
  );
};
