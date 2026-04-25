"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
export const ProductCard_1 = ({
  state,
  className,
}: {
  state: string;
  className: string;
}) => {
  return (
    <motion.div
      animate={
        state === "All" || state === "Products"
          ? {
              filter: "blur(0px)",
            }
          : {
              filter: "blur(10px)",
            }
      }
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
      }}
      className={cn(
        "pointer-events-none absolute z-0 flex h-40 w-60 items-center justify-center overflow-clip rounded-[16px] bg-white",
        className,
      )}
    >
      <div className="mt-0 ml-10 bg-linear-to-b from-blue-700 to-zinc-300 bg-clip-text text-7xl text-transparent opacity-45">
        Huly
      </div>
      <div className="absolute inset-0 z-10 bg-white [mask-image:radial-gradient(75%_100%_at_50%_40%,transparent_0%,black_100%)]"></div>
      <div
        style={{
          boxShadow:
            "0 0 0 1px rgba(0, 0, 0, .06), 0 1px 0 0 rgba(0, 0, 0, .08), 0 2px 2px 0 rgba(0, 0, 0, .04), 0 3px 3px 0 rgba(0, 0, 0, .02), 0 4px 4px 0 rgba(0, 0, 0, .01)",
        }}
        className="absolute top-10 left-11 flex h-12 w-38 items-center gap-2 rounded-[12px] bg-linear-156 from-[#fff] to-[#f3f3f3]"
      >
        <div className="bg-gray-25 relative ml-3 flex size-8 flex-none items-center justify-center overflow-clip rounded-md px-1 py-1 [box-shadow:0_1px_0_0_#FFF_inset,0_2px_2px_-1px_rgba(0,0,0,0.20),0_0_0_0.5px_rgba(19,19,22,0.16)]">
          <div className="pointer-events-none absolute inset-0 rotate-90 bg-[conic-gradient(from_135deg,#7C3AED_0deg,rgba(100,48,247,0)_82.8deg,rgba(58,212,253,0)_183.6deg,#F22268_262.8deg,#7C3AED_356.4deg)] opacity-15"></div>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="size-full text-neutral-500 [filter:drop-shadow(0_0.5px_0_rgba(255,255,255,0.40))_drop-shadow(0_2px_1px_rgba(0,0,0,0.15))]"
            aria-hidden="true"
          >
            <path
              d="M20.3516 12C20.3516 7.38842 16.6135 3.65039 12.002 3.65039C7.39038 3.65039 3.65234 7.38842 3.65234 12C3.65234 14.1381 4.45593 16.0867 5.77832 17.5645C7.27438 15.891 9.43972 14.8496 12.002 14.8496C14.5639 14.8496 16.7286 15.8913 18.2246 17.5645C19.5473 16.0866 20.3516 14.1383 20.3516 12ZM12.002 16.6504C9.95948 16.6504 8.27633 17.4676 7.11523 18.7695C8.48939 19.7635 10.1761 20.3496 12.002 20.3496C13.8276 20.3496 15.5137 19.7632 16.8877 18.7695C15.7266 17.4679 14.0442 16.6504 12.002 16.6504ZM14.3516 10C14.3516 8.70213 13.2998 7.65039 12.002 7.65039C10.7041 7.65039 9.65234 8.70213 9.65234 10C9.65234 11.2979 10.7041 12.3496 12.002 12.3496C13.2998 12.3496 14.3516 11.2979 14.3516 10ZM22.1523 12C22.1523 15.0187 20.8333 17.731 18.7432 19.5889C16.9512 21.1818 14.5884 22.1504 12.002 22.1504C9.41549 22.1504 7.05275 21.1818 5.26074 19.5889C3.17064 17.731 1.85156 15.0187 1.85156 12C1.85156 6.39431 6.39626 1.84961 12.002 1.84961C17.6076 1.84961 22.1523 6.39431 22.1523 12ZM16.1523 10C16.1523 12.292 14.2939 14.1504 12.002 14.1504C9.70997 14.1504 7.85156 12.292 7.85156 10C7.85156 7.70802 9.70997 5.84961 12.002 5.84961C14.2939 5.84961 16.1523 7.70802 16.1523 10Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>

        <div className="text-[14px] text-neutral-600">User Support</div>
      </div>
      <div
        style={{
          boxShadow:
            "0 0 0 1px rgba(0, 0, 0, .06), 0 1px 0 0 rgba(0, 0, 0, .08), 0 2px 2px 0 rgba(0, 0, 0, .04), 0 3px 3px 0 rgba(0, 0, 0, .02), 0 4px 4px 0 rgba(0, 0, 0, .01)",
        }}
        className="absolute top-10 -left-30 flex h-12 w-38 items-center gap-3 rounded-[12px] bg-linear-156 from-[#fff] to-[#f3f3f3] text-[14px] text-neutral-600"
      >
        <div className="ml-1.5">Conversion token</div>
      </div>{" "}
      <div
        style={{
          boxShadow:
            "0 0 0 1px rgba(0, 0, 0, .06), 0 1px 0 0 rgba(0, 0, 0, .08), 0 2px 2px 0 rgba(0, 0, 0, .04), 0 3px 3px 0 rgba(0, 0, 0, .02), 0 4px 4px 0 rgba(0, 0, 0, .01)",
        }}
        className="absolute top-10 -right-30 flex h-12 w-38 items-center gap-3 rounded-[12px] bg-linear-156 from-[#fff] to-[#f3f3f3]"
      >
        <div className="bg-gray-25 relative ml-3 flex size-8 flex-none items-center justify-center overflow-clip rounded-md px-1 py-1 [box-shadow:0_1px_0_0_#FFF_inset,0_2px_2px_-1px_rgba(0,0,0,0.20),0_0_0_0.5px_rgba(19,19,22,0.16)]">
          <div className="pointer-events-none absolute inset-0 rotate-90 bg-[conic-gradient(from_135deg,#7C3AED_0deg,rgba(100,48,247,0)_82.8deg,rgba(58,212,253,0)_183.6deg,#F22268_262.8deg,#7C3AED_356.4deg)] opacity-15"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-full text-neutral-500 [filter:drop-shadow(0_0.5px_0_rgba(255,255,255,0.40))_drop-shadow(0_2px_1px_rgba(0,0,0,0.15))] transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow,background] duration-[450ms] ease-[cubic-bezier(0.33,1,0.68,1)] hover:duration-200 dark:[filter:drop-shadow(0_0.5px_0_rgba(194,194,195,0.2))_drop-shadow(0_2px_1px_rgba(194,194,195,0.15))]"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6" />
          </svg>
        </div>
      </div>
      <div
        style={{
          boxShadow:
            "0 0 0 1px rgba(0, 0, 0, .06), 0 1px 0 0 rgba(0, 0, 0, .08), 0 2px 2px 0 rgba(0, 0, 0, .04), 0 3px 3px 0 rgba(0, 0, 0, .02), 0 4px 4px 0 rgba(0, 0, 0, .01)",
        }}
        className="absolute top-25 -left-11 flex h-12 w-38 items-center justify-center gap-3 rounded-[12px] bg-linear-156 from-[#fff] to-[#f3f3f3] text-[14px] text-neutral-600"
      >
        Billing Support
      </div>
      <div
        style={{
          boxShadow:
            "0 0 0 1px rgba(0, 0, 0, .06), 0 1px 0 0 rgba(0, 0, 0, .08), 0 2px 2px 0 rgba(0, 0, 0, .04), 0 3px 3px 0 rgba(0, 0, 0, .02), 0 4px 4px 0 rgba(0, 0, 0, .01)",
        }}
        className="absolute top-25 -right-8 flex h-12 w-38 items-center gap-3 rounded-[12px] bg-linear-156 from-[#fff] to-[#f3f3f3]"
      >
        <div className="bg-gray-25 relative ml-3 flex size-8 flex-none items-center justify-center overflow-clip rounded-md px-1 py-1 [box-shadow:0_1px_0_0_#FFF_inset,0_2px_2px_-1px_rgba(0,0,0,0.20),0_0_0_0.5px_rgba(19,19,22,0.16)]">
          <div className="pointer-events-none absolute inset-0 rotate-90 bg-[conic-gradient(from_135deg,#7C3AED_0deg,rgba(100,48,247,0)_82.8deg,rgba(58,212,253,0)_183.6deg,#F22268_262.8deg,#7C3AED_356.4deg)] opacity-15"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-full text-neutral-500 [filter:drop-shadow(0_0.5px_0_rgba(255,255,255,0.40))_drop-shadow(0_2px_1px_rgba(0,0,0,0.15))] transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow,background] duration-[450ms] ease-[cubic-bezier(0.33,1,0.68,1)] hover:duration-200 dark:[filter:drop-shadow(0_0.5px_0_rgba(194,194,195,0.2))_drop-shadow(0_2px_1px_rgba(194,194,195,0.15))]"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -6" />
            <path d="M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -10" />
            <path d="M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -14" />
            <path d="M4 20h14" />
          </svg>
        </div>
        <div className="text-[14px] text-neutral-600">B2B Support</div>
      </div>
    </motion.div>
  );
};
