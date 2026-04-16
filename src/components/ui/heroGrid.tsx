"use client";
import { motion, useInView } from "motion/react";

import { useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { PurposeCard_1 } from "./bento/PurposeCard_1";
import { PurposeCard_2 } from "./bento/PurposeCard_2";
import { CompanyCard_3 } from "./bento/CompanyCard_3";
import { CompanyCard_2 } from "./bento/CompanyCard_2";
import { CompanyCard_1 } from "./bento/CompanyCard_1";
import { ProductCard_1 } from "./bento/ProductCard_1";
import { ProductCard_2 } from "./bento/ProductCard_2";
import { NeuroNoise } from "@paper-design/shaders-react";

export const HeroGrid = () => {
  // const stateVarient ={

  // }
  const [state, setstate] = useState<
    "All" | "Purpose" | "Company" | "Products"
  >("All");
  const ref = useRef(null);
  const InView = useInView(ref, { amount: 0.7 });
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
      }}
      animate={
        InView
          ? {
              opacity: 1,
            }
          : {}
      }
      transition={{
        duration: 0.3,
      }}
      className="font-inter sticky top-[15vh] z-500 mx-auto mt-[55vh] h-125 w-[90%] overflow-hidden xl:w-[75rem]"
    >
      <NeuroNoise />
      <div className="absolute inset-0"></div>
      <motion.h2
        initial={{
          opacity: 0,
          y: 3,
        }}
        animate={
          InView
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{
          duration: 0.4,
          ease: "easeOut",
          delay: 0,
        }}
        className={cn(
          "absolute tracking-tight text-white xl:left-0",
          "text-xl lg:text-2xl xl:text-3xl",
          "w-80 md:w-90 lg:w-110 xl:w-140",
        )}
      >
        buid your own system to automate, and improve support experiences.
      </motion.h2>
      <div className="absolute top-[25vh] hidden flex-col gap-3 md:flex lg:text-[17px] xl:left-0 xl:text-[18px]">
        <button
          className="cursor-pointer text-start text-white hover:text-neutral-200"
          onMouseEnter={() => {
            setstate("All");
          }}
          onClick={() => {
            setstate("All");
          }}
        >
          All
        </button>
        <button
          className={cn(
            "cursor-pointer text-start text-white hover:text-neutral-200",
            state === "Purpose" ? "text-neutral-300" : "",
          )}
          onMouseEnter={() => {
            setstate("Purpose");
          }}
          onClick={() => {
            setstate("Purpose");
          }}
        >
          Purpose
        </button>{" "}
        <button
          className={cn(
            "cursor-pointer text-start text-white hover:text-neutral-200",
            state === "Company" ? "text-neutral-300" : "",
          )}
          onMouseEnter={() => {
            setstate("Company");
          }}
          onClick={() => {
            setstate("Company");
          }}
        >
          Company
        </button>{" "}
        <button
          className="cursor-pointer text-start text-white"
          onMouseEnter={() => {
            setstate("Products");
          }}
          onClick={() => {
            setstate("Products");
          }}
        >
          Products
        </button>{" "}
      </div>
      <div className="mx-auto h-full w-[60rem] scale-50 md:w-[60rem] md:scale-50 lg:scale-100">
        <div className="relative -top-23 right-[140vw] scale-150 md:-top-43 md:right-[40vw] md:scale-140 lg:top-0 lg:right-0 lg:scale-80 xl:scale-100">
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)", scale: 0.97 }}
            animate={
              InView
                ? {
                    opacity: 1,
                    filter: "blur(0px)",
                    scale: 1,
                  }
                : {}
            }
            transition={{
              delay: 0.3,
              duration: 0.3,
              ease: "easeOut",
            }}
            className=""
          >
            <ProductCard_1 className="top-0 left-107" state={state} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={
              InView
                ? {
                    opacity: 1,
                    filter: "blur(0px)",
                  }
                : {}
            }
            transition={{
              delay: 0.3,
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <ProductCard_2 className="top-65 right-22" state={state} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={
              InView
                ? {
                    opacity: 1,
                    filter: "blur(0px)",
                  }
                : {}
            }
            transition={{
              delay: 0.6,
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <PurposeCard_1 className="top-25 left-40" state={state} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={
              InView
                ? {
                    opacity: 1,
                    filter: "blur(0px)",
                  }
                : {}
            }
            transition={{
              delay: 0.6,
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <PurposeCard_2 className="top-77 left-106" state={state} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={
              InView
                ? {
                    opacity: 1,
                    filter: "blur(0px)",
                  }
                : {}
            }
            transition={{
              delay: 0.5,
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <CompanyCard_1 className="top-15 -right-3" state={state} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={
              InView
                ? {
                    opacity: 1,
                    filter: "blur(0px)",
                  }
                : {}
            }
            transition={{
              delay: 0.5,
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <CompanyCard_2 className="left-60" state={state} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={
              InView
                ? {
                    opacity: 1,
                    filter: "blur(0px)",
                  }
                : {}
            }
            transition={{
              delay: 0.5,
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <CompanyCard_3 className="top-45 right-80" state={state} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
