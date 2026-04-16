"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Shader, Strands } from "shaders/react";
export const CompanyCard_2 = ({
  state,
  className,
}: {
  state: string;
  className: string;
}) => {
  return (
    <motion.div
      animate={
        state === "Company" || state === "All"
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
        "pointer-events-none absolute top-100 left-99 z-0 flex h-20 w-40 items-center justify-center overflow-clip rounded-[16px] bg-white",
        className,
      )}
    >
      <Shader className="absolute inset-0 z-40 h-full w-full">
        {/* <SineWave thickness={0.01} softness={0}></SineWave> */}
        <Strands
          lineCount={5}
          lineWidth={0.35}
          amplitude={5}
          waveColor="#ffff"
        ></Strands>
      </Shader>
      <div className="font-logo z-30 mt-1 bg-linear-to-b from-blue-800 to-zinc-200 bg-clip-text pb-1 text-[52px] font-medium text-transparent">
        huly
      </div>
    </motion.div>
  );
};
