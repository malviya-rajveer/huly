"use client";
import { motion } from "motion/react";
import { Logo } from "./ui/logo";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { WhiteButton } from "./ui/whiteButton";
export const Navbar = () => {
  const [animatButtoneGradient, setAnimatButtoneGradient] = useState(false);
  const [animatButtoneGradient2, setAnimatButtoneGradient2] = useState(false);
  return (
    <motion.header
      initial={{
        opacity: 0,
        filter: "blur(10px)",
        y: 5,
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      }}
      transition={{
        delay: 0.6,
        duration: 0.4,
        ease: "easeOut",
      }}
      className="xl:w-XL-device fixed top-2.5 z-200 h-[6%] w-full backdrop-blur-[3px] md:w-[90%]"
    >
      <div className="relative z-220 w-full bg-[#fafafaef] [box-shadow:0_0_0_0.5px_rgba(255,255,255,0.9)_inset,0_0_0_0.5px_rgba(19,19,22,0.15),0_2px_3px_0_rgba(0,0,0,0.04),0_4px_6px_0_rgba(34,42,53,0.04),0_1px_1px_0_rgba(0,0,0,0.05)] backdrop-blur-sm md:rounded-lg">
        <div className="flex h-full w-full items-center justify-between px-4">
          <div className="flex items-center justify-center gap-1 py-[5px]">
            <div className="">
              <Logo className="relative size-6" />
            </div>
            <div className="text-[20px] font-medium text-neutral-800">Huly</div>
            <div className="mx-2 h-[70%] w-px bg-white/97"></div>
            <div className="mr-4 hidden items-center gap-3 text-[14px] font-medium text-neutral-700 md:flex">
              <div className="cursor-pointer">Docs</div>
              <div className="cursor-pointer">About Us</div>
              <div className="cursor-pointer">Resourses</div>
              <div className="cursor-pointer">Products</div>
            </div>
          </div>
          <div>
            <motion.button
              initial={{
                scale: 1,
              }}
              whileTap={{
                scale: [1, 0.98, 1],
              }}
              className={cn(
                "mr-2 h-6.5 cursor-pointer rounded-lg border border-dashed border-neutral-700 bg-white/0 bg-linear-to-b from-taupe-100/0 font-medium text-neutral-700 drop-shadow-sm",
                "text-[12px] tracking-wide",
              )}
            >
              <motion.div
                animate={
                  animatButtoneGradient2
                    ? {
                        backgroundPosition: ["150% center", "0% center"],
                        opacity: 1,
                      }
                    : {}
                }
                onMouseEnter={() => {
                  setAnimatButtoneGradient2(false);
                  setTimeout(() => setAnimatButtoneGradient2(true), 50);
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                style={{
                  backgroundSize: "300% auto",
                }}
                className={cn(
                  "mx-auto bg-clip-text px-3 py-0.5 font-medium text-transparent",
                  "bg-[linear-gradient(90deg_in_oklch_longer_hue,var(--color-neutral-900)_23%,oklch(48.8%_0.243_264.376),oklch(64.6%_0.222_41.116),var(--color-neutral-900))]",
                )}
              >
                SignIn
              </motion.div>
            </motion.button>

            <WhiteButton
              buttonClassName="md:text-[12px] from-taupe-100"
              textClassName="py-1 "
              title="Start Building"
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
};
