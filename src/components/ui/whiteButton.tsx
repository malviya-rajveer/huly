import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const WhiteButton = ({
  title,
  buttonClassName,
  textClassName,
  href,
}: {
  href?: string;
  title: string;
  buttonClassName?: string;
  textClassName?: string;
}) => {
  const [animatButtoneGradient, setAnimatButtoneGradient] = useState(false);
  return (
    <motion.a
      initial={{
        scale: 1,
      }}
      whileTap={{
        scale: [1, 0.98, 1],
      }}
      transition={{
        duration: 0.19,
        ease: "easeInOut",
      }}
      className={cn(
        "mx-auto inline-block cursor-pointer rounded-lg bg-white bg-linear-to-b from-taupe-200 font-medium text-neutral-700 drop-shadow-md",
        "text-[12px] md:text-[15px]",
        buttonClassName,
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
          "mx-auto bg-clip-text px-3 py-4 font-medium text-transparent",
          "bg-[linear-gradient(90deg_in_oklch_longer_hue,var(--color-neutral-900)_23%,oklch(48.8%_0.243_264.376),oklch(64.6%_0.222_41.116),var(--color-neutral-900))]",
          textClassName,
        )}
      >
        {title}
      </motion.div>
    </motion.a>
  );
};
