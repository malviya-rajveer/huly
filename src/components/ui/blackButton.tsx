"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";

export const BlackButton = () => {
  const [animatButtoneGradient, setAnimatButtoneGradient] = useState(false);
  return (
    <motion.button
      initial={{
        scale: 1,
      }}
      whileTap={{
        scale: [1, 0.97, 1],
      }}
      transition={{
        duration: 0.19,
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
  );
};
