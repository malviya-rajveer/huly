"use client";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import { BoxesHero } from "./ui/boxes-hero";
import { useRef, useState } from "react";
import { AnimatedHeroModel } from "./ui/animated-hero";
import { HeroGrid } from "./ui/heroGrid";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  const [animatButtoneGradient, setAnimatButtoneGradient] = useState(false);
  const ref = useRef(null);

  const ref2 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scrollvalue2 = useScroll({
    target: ref2,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.67, 0.75], [1, 0]);

  const opacityAnimatedModel = useTransform(
    scrollvalue2.scrollYProgress,
    [0.6, 0.63],
    [1, 0],
  );
  const blurAnimatedModel = useTransform(
    scrollvalue2.scrollYProgress,
    [0.5, 0.6],
    [0, 10],
  );
  const blur = useTransform(scrollYProgress, [0.67, 0.85], [0, 10]);
  return (
    <div ref={ref2} className="font-inter relative z-0 h-[380vh] w-full">
      <motion.div
        ref={ref}
        style={{
          opacity: opacity,
          filter: useMotionTemplate`blur(${blur}px)`,
        }}
        className="absolute top-[25vh] z-20 w-full text-center leading-0"
      >
        <motion.h1
          initial={{
            opacity: 0,
            y: 5,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: "easeOut",
          }}
          className={cn(
            "mx-auto tracking-tighter text-balance text-white",
            "md:w-xl lg:w-3xl xl:w-7xl",
            "text-4xl md:text-[45px] lg:text-5xl xl:text-6xl",
            "md:leading-12 lg:leading-14 xl:leading-16",
          )}
        >
          The product development system for customer service
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            y: 5,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.75,
            duration: 0.5,
            ease: "easeOut",
          }}
          className={cn(
            "mx-auto mt-4 w-[95%] text-white/95 md:w-full",
            "md:text-[15px] lg:text-[16px] xl:text-[17px]",
            "leading-snug",
          )}
        >
          Purpose-built for planning and building products. Designed for the AI
          era.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            y: 5,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 1.1,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="mt-8 flex w-full justify-center"
        >
          <motion.button
            initial={{
              scale: 1,
            }}
            whileTap={{
              scale: [1, 0.98, 1],
            }}
            className={cn(
              "mx-auto cursor-pointer rounded-lg bg-white bg-linear-to-b from-taupe-200 font-medium text-neutral-700 drop-shadow-md",
              "text-[12px] md:text-[15px]",
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
              )}
            >
              New Agent beta version.
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
      <BoxesHero></BoxesHero>
      <motion.div
        initial={{
          scale: 0.3,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="sticky top-2 z-0 mx-auto flex h-[97.5vh] w-[98vw] items-center justify-center overflow-hidden rounded-2xl bg-[#FF5FF2]"
      >
        <svg className="pointer-events-none absolute inset-0 h-full w-full">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="4"
              stitchTiles="stitch"
            />

            {/* control opacity */}
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.6" />
            </feComponentTransfer>
          </filter>

          {/* apply white color */}
          <rect
            width="100%"
            height="100%"
            filter="url(#noiseFilter)"
            fill="#ffff"
          />
        </svg>
        <div className="absolute z-10 h-full w-full blur-[66px]">
          <div
            className="relative inset-x-15 -inset-y-10 h-full w-full bg-[#fa9127]"
            style={{
              clipPath:
                "polygon(24% 0, 70% 0, 100% 0, 100% 56%, 84% 69%, 57% 52%, 46% 39%, 30% 25%)",
            }}
          ></div>
        </div>
        <div className="absolute h-full w-full blur-[60px]">
          <div
            className="relative -inset-x-20 inset-y-25 h-full w-full bg-[#759bee]"
            style={{
              clipPath:
                "polygon(19% 41%, 38% 50%, 58% 55%, 69% 77%, 68% 100%, 0 100%, 0 78%, 0 48%)",
            }}
          ></div>
        </div>
        <div className="absolute h-full w-full blur-[66px]">
          <div
            className="relative -inset-x-20 -inset-y-20 h-full w-full bg-[#ff4343]"
            style={{
              clipPath:
                "polygon(0 0, 55% 0, 68% 15%, 77% 41%, 67% 57%, 29% 53%, 11% 41%, 1% 24%)",
            }}
          ></div>
        </div>
        <div className="absolute h-full w-full blur-[66px]">
          <div
            className="relative inset-x-40 inset-y-25 h-full w-full bg-[#fdf6b8b9]"
            style={{
              clipPath:
                "polygon(63% 68%, 77% 53%, 100% 49%, 100% 100%, 70% 100%, 61% 98%, 57% 89%, 55% 83%)",
            }}
          ></div>
        </div>
      </motion.div>

      <AnimatedHeroModel
        blur={blurAnimatedModel}
        opacity={opacityAnimatedModel}
      />
      <HeroGrid></HeroGrid>
    </div>
  );
};
