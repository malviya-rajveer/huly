"use client";
import { cn } from "@/lib/utils";
import { Dither, ImageTexture, Liquify, Shader, SineWave } from "shaders/react";
import { motion } from "motion/react";
export const PurposeCard_1 = ({
  state,
  className,
}: {
  state: string;
  className: string;
}) => {
  return (
    <motion.div
      animate={
        state === "Purpose" || state === "All"
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
        "pointer-events-none absolute z-0 h-70 w-60 overflow-clip rounded-[16px] bg-white",
        className,
      )}
    >
      <div className="absolute z-100 ml-10 flex h-full w-full items-center justify-center">
        <h1
          className={cn(
            "bg-linear-to-br from-white to-white/90 bg-clip-text text-[40px] leading-11 font-medium text-transparent transition-colors duration-300",
            // state === "Purpose" ? "from-white" : "",
          )}
        >
          Clear the cloudes
        </h1>
        <p>with Our </p>
      </div>

      <Shader className="absolute inset-0 transition-all duration-300">
        <Dither id="mask" pixelSize={1.1}>
          <Liquify intensity={10} radius={3}>
            <SineWave
              speed={2}
              thickness={state === "Purpose" ? 0.85 : 0.55}
            ></SineWave>
          </Liquify>
        </Dither>
        <ImageTexture maskSource="mask" url="/clouds-bg.png" />
      </Shader>
    </motion.div>
  );
};
