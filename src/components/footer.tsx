"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";
import { Logo } from "./ui/logo";
import { Mial_Logo } from "./ui/icons/mail";
import { X_Logo } from "./ui/icons/Xlogo";
import { LinkdIn_Logo } from "./ui/icons/linkdinlogo";
export const Footer = () => {
  const [animatButtoneGradient, setAnimatButtoneGradient] = useState(false);
  return (
    <div className="h-full w-[95%] md:w-[90%] xl:w-[57rem]">
      <div
        className={cn(
          "relative mx-auto mt-25 mb-25 flex h-80 flex-col overflow-hidden rounded-2xl bg-[#0f1118] drop-shadow-2xl",
        )}
      >
        {" "}
        <div className="absolute top-25 left-1/7 z-30 flex flex-col justify-center md:top-25 md:left-20 lg:left-30">
          {" "}
          <div
            style={{
              maskImage:
                "radial-gradient(10% 100% at 90% 50%,transparent 0% ,black 45%)",
            }}
            className="text-4xl text-neutral-50 md:text-5xl"
          >
            Join Huly today!
          </div>
          {/* <div className="mt-4 text-center text-[14px] text-neutral-300">
            Build trust of your customers
          </div> */}
          <motion.button
            initial={{
              scale: 1,
            }}
            whileTap={{
              scale: [1, 0.98, 1],
            }}
            className={cn(
              "mx-auto mt-4 w-35 cursor-pointer rounded-lg bg-white bg-linear-to-b from-taupe-300 font-medium text-neutral-700 drop-shadow-md md:mt-6",
              "text-[15px]",
            )}
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
                "mx-auto bg-clip-text py-1 font-medium text-transparent",
                "bg-[linear-gradient(90deg_in_oklch_longer_hue,var(--color-neutral-900)_23%,oklch(48.8%_0.243_264.376),oklch(64.6%_0.222_41.116),var(--color-neutral-900))]",
              )}
            >
              Join the Club
            </motion.div>
          </motion.button>
        </div>
        <div
          // style={{
          //   maskImage:
          //     "radial-gradient(ellipse at 30%,transparent 0% ,black 45%)",
          // }}
          className={cn(
            "absolute z-20 h-[310%] w-[140%] -translate-x-12 rotate-50 bg-[#0f1118]",
            "mask-[image:radial-gradient(ellipse_at_30%,transparent_0%_,black_35%)]",
            "lg:mask-[image:radial-gradient(ellipse_at_30%,transparent_0%_,black_45%)]",
            "-translate-y-86 md:-translate-y-56 lg:-translate-y-36",
            "-translate-x-20 md:-translate-x-10 lg:-translate-x-12",
          )}
        >
          <div className="absolute inset-0 h-full w-full"></div>
        </div>
        <div className="relative -top-10 ml-3 grid grid-cols-3 gap-2 mask-b-from-0% mask-b-to-90% blur-[0.5px] md:gap-1 md:gap-3">
          <Patternbox className="bg-neutral-300/12" />
          <Patternbox className="bg-neutral-300/12" />
          <Patternbox className="bg-neutral-300/12" />
          <Patternbox />
          <Patternbox />
          <Patternbox />
          <Patternbox />
          <Patternbox />
          <Patternbox />
          <Patternbox className="bg-neutral-500/12" />
          <Patternbox className="bg-neutral-500/12" />
          <Patternbox className="bg-neutral-500/12" />
        </div>
      </div>
      <div className="grid h-full min-h-40 w-full grid-cols-6 gap-4 md:grid-cols-8">
        <div className="col-span-2 md:col-span-4">
          <div className="flex items-center gap-2 text-[25px] font-medium text-neutral-700">
            <Logo className="relative size-8" />
            Huly
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-2 pl-8 md:col-span-1 md:pl-0">
          <div className="pointer-events-none text-[16px] text-neutral-900">
            Resources
          </div>
          <div className="flex flex-col gap-1.5 text-[14.5px] text-neutral-400">
            <div className="cursor-pointer">Docs</div>
            <div className="cursor-pointer">API</div>
            <div className="cursor-pointer">FAQs</div>
          </div>
        </div>{" "}
        <div className="col-span-2 flex flex-col gap-2 pl-4 md:col-span-1 md:pl-0">
          <div className="pointer-events-none text-[16px] text-neutral-900">
            About Us
          </div>
          <div className="flex flex-col gap-1.5 text-[14.5px] text-neutral-400">
            <div className="cursor-pointer">Who we are</div>
            <div className="cursor-pointer">API</div>
            <div className="cursor-pointer">FAQs</div>
          </div>
        </div>{" "}
        <div className="col-span-2 md:hidden"></div>
        <div className="col-span-2 flex flex-col gap-2 pl-8 md:col-span-1 md:items-start md:pl-0">
          <div className="pointer-events-none text-[16px] text-neutral-900">
            Resources
          </div>
          <div className="flex w-full flex-col gap-1.5 text-[14.5px] text-neutral-400">
            <div className="cursor-pointer">Docs</div>

            <div className="cursor-pointer">API</div>
            <div className="cursor-pointer">FAQs</div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col pl-2 md:col-span-1 md:pl-0">
          <div className="pointer-events-none text-[16px] text-neutral-900">
            Join Us At
          </div>
          <div className="mt-4 ml-1 flex items-center gap-2">
            <Mial_Logo className="size-5" />
            <X_Logo className="size-4" />
            <LinkdIn_Logo className="size-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Patternbox = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-19 w-30 rounded-xl bg-neutral-400/12 md:h-30 md:w-55 lg:h-35 lg:w-70",
        className,
      )}
    ></div>
  );
};
