"use client";
import {
  Dither,
  ImageTexture,
  Liquify,
  Shader,
  SineWave,
  Twirl,
} from "shaders/react";
import { Logo } from "../logo";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
export const CompanyCard_3 = ({
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
        "pointer-events-none absolute z-0 flex h-27 w-45 items-center justify-center overflow-clip rounded-[16px] bg-white",
        className,
      )}
    >
      <Shader className="h-full w-full">
        <Dither id="wave-mask" visible={false} pixelSize={1.1} threshold={0.24}>
          <Liquify intensity={15} radius={2.5}>
            <Twirl intensity={5}>
              <SineWave
                amplitude={0.32}
                angle={309}
                frequency={1.1}
                softness={0.79}
                thickness={0.99}
              />
            </Twirl>
          </Liquify>
        </Dither>
        <ImageTexture maskSource="wave-mask" url="/clouds-bg.png" />
      </Shader>
      <Logo></Logo>{" "}
    </motion.div>
  );
};
