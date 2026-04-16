"use client";

import { cn } from "@/lib/utils";
import { IconCheck } from "@tabler/icons-react";
import { AnimationSequence, motion, useAnimate, useInView } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Steps_Progress: AnimationSequence = [
  [
    ".progress-1",
    { translateX: 0 },
    { duration: 1, delay: 0.8, ease: "easeOut" },
  ],
  [
    ".chekMark-1",
    {
      backgroundColor: "var(--color-neutral-900)",
      color: "#fff",
      opacity: [1, 0, 1],
      scale: [1, 0.97, 1],
      filter: ["blur(0px)", "blur(5px)", "blur(0px)"],
    },
    { duration: 0.3, ease: "linear" },
  ],

  [
    ".progress-2",
    { translateX: 0 },
    { duration: 0.9, delay: 0.2, ease: "easeOut" },
  ],
  [
    ".chekMark-2",
    {
      backgroundColor: "var(--color-neutral-900)",
      color: "#fff",
      opacity: [1, 0, 1],
      scale: [1, 0.97, 1],
      filter: ["blur(0px)", "blur(5px)", "blur(0px)"],
    },
    { duration: 0.3, ease: "linear" },
  ],
  [
    ".progress-3",
    { translateX: 0 },
    { duration: 0.8, delay: 0.2, ease: "easeOut" },
  ],
  [
    ".chekMark-3",
    {
      backgroundColor: "var(--color-neutral-900)",
      color: "#fff",
      opacity: [1, 0, 1],
      scale: [1, 0.97, 1],
      filter: ["blur(0px)", "blur(5px)", "blur(0px)"],
    },
    { duration: 0.3, ease: "linear" },
  ],
];

const telegram_dropdown: AnimationSequence = [
  [
    ".telegram",
    { translateY: 0, opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
    { duration: 0.3, delay: 1, ease: "easeOut" },
  ],
  [
    ".telegram",
    { translateY: 50 },
    { duration: 0.4, delay: 0.9, ease: "easeInOut" },
  ],
  [
    ".telegram",
    { translateY: 100 },
    { duration: 0.4, delay: 0.9, ease: "easeInOut" },
  ],
];

const discord_dropdown: AnimationSequence = [
  [
    ".discord",
    { translateY: 0, opacity: 1, scale: 1, y: 0, filter: "blur(0px)" },
    { duration: 0.3, delay: 2.4, ease: "easeOut" },
  ],
  [
    ".discord",
    { translateY: 50 },
    { duration: 0.4, delay: 0.9, ease: "easeInOut" },
  ],
];

const slack_dropdown: AnimationSequence = [
  [
    ".slack",
    { translateY: 0, opacity: 1, scale: 1, y: 0, filter: "blur(0px)" },
    { duration: 0.2, delay: 3.9, ease: "easeOut" },
  ],
];

export const Steps = () => {
  const [scope, ProgressAnimate] = useAnimate();

  const [scope2, DropdownAnimate] = useAnimate();

  const ref = useRef(null);

  const [show, setShow] = useState(false);

  const Inview = useInView(ref, {
    amount: 0.8,
  });

  const AnimateSteps = () => {
    (ProgressAnimate(Steps_Progress),
      DropdownAnimate(telegram_dropdown),
      DropdownAnimate(discord_dropdown),
      DropdownAnimate(slack_dropdown));
  };
  useEffect(() => {
    if (Inview) {
      setShow(true); // mount
    } else {
      setShow(false); // unmount
    }
  }, [Inview]);

  useEffect(() => {
    if (show) {
      const timeout = setTimeout(() => {
        AnimateSteps();
      }, 50); // 👈 small delay ensures DOM is ready

      return () => clearTimeout(timeout);
    }
  }, [show]);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={Inview ? { opacity: 1 } : {}}
      ref={ref}
      className="absolute flex size-90 flex-col items-center"
    >
      <motion.div
        ref={scope}
        initial={{
          opacity: 0,
          filter: "blur(3px)",
          y: 5,
        }}
        animate={Inview ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{
          duration: 0.3,
          delay: 0.8,
          ease: "easeOut",
        }}
        style={{
          boxShadow:
            "0 0 0 1px rgba(0, 0, 0, .06), 0 1px 0 0 rgba(0, 0, 0, .08), 0 2px 2px 0 rgba(0, 0, 0, .04), 0 3px 3px 0 rgba(0, 0, 0, .02), 0 4px 4px 0 rgba(0, 0, 0, .01)",
        }}
        className="mt-20 h-16 w-50 flex-col rounded-[16px] bg-linear-156 from-[#fff] to-[#f3f3f3]"
      >
        <div className="mt-2 text-center text-neutral-700">
          Communication stack
        </div>
        {show && (
          <motion.div className="mx-auto mt-2 flex w-40 justify-center gap-0.5">
            <Progress_bar className="progress-1"></Progress_bar>
            <CheckMark className="chekMark-1"></CheckMark>

            <Progress_bar className="progress-2"></Progress_bar>

            <CheckMark className="chekMark-2" bgColor="#F6F6F6"></CheckMark>

            <Progress_bar className="progress-3"></Progress_bar>
            <CheckMark className="chekMark-3" bgColor="#F4F4F4"></CheckMark>
          </motion.div>
        )}
      </motion.div>
      <motion.div
        ref={scope2}
        initial={{ opacity: 0 }}
        animate={Inview ? { opacity: 1 } : {}}
        className="relative flex flex-col items-center"
      >
        {show && (
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(3px)",
              y: 10,
              scale: 0.9,
            }}
            style={{
              boxShadow:
                "0 0 0 1px rgba(0, 0, 0, .06), 0 1px 0 0 rgba(0, 0, 0, .08), 0 2px 2px 0 rgba(0, 0, 0, .04), 0 3px 3px 0 rgba(0, 0, 0, .02), 0 4px 4px 0 rgba(0, 0, 0, .01)",
            }}
            className="slack absolute mt-2 flex h-10 w-50 items-center rounded-[14px] bg-linear-156 from-[#fff] to-[#f0f0f0]"
          >
            <Image
              src={"/slack-logo.svg"}
              alt=""
              height={45}
              width={45}
              className="ml-2"
            ></Image>{" "}
            <div className="text-sm text-neutral-800">Slack Channel</div>
          </motion.div>
        )}
        {show && (
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(5px)",
              y: 5,
              scale: 0.97,
            }}
            transition={{
              duration: 0.3,
              delay: 0.8,
              ease: "easeOut",
            }}
            style={{
              boxShadow:
                "0 0 0 1px rgba(0, 0, 0, .06), 0 1px 0 0 rgba(0, 0, 0, .08), 0 2px 2px 0 rgba(0, 0, 0, .04), 0 3px 3px 0 rgba(0, 0, 0, .02), 0 4px 4px 0 rgba(0, 0, 0, .01)",
            }}
            className="discord absolute mt-2 flex h-10 w-50 items-center gap-3.5 rounded-[14px] bg-linear-156 from-[#fff] to-[#f0f0f0]"
          >
            <Image
              src={"/discord-logo.svg"}
              alt=""
              height={35}
              width={20}
              className="ml-5"
            ></Image>{" "}
            <div className="text-sm text-neutral-800">Discord Channel</div>
          </motion.div>
        )}
        {show && (
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(5px)",
              y: 5,
              scale: 0.97,
            }}
            style={{
              boxShadow:
                "0 0 0 1px rgba(0, 0, 0, .06), 0 1px 0 0 rgba(0, 0, 0, .08), 0 2px 2px 0 rgba(0, 0, 0, .04), 0 3px 3px 0 rgba(0, 0, 0, .02), 0 4px 4px 0 rgba(0, 0, 0, .01)",
            }}
            className="telegram mt-2 flex h-10 w-50 items-center gap-3.5 rounded-[14px] bg-linear-156 from-[#fff] to-[#f0f0f0]"
          >
            <Image
              src={"/telegram-logo.svg"}
              alt=""
              height={35}
              width={20}
              className="ml-5"
            ></Image>{" "}
            <div className="text-sm text-neutral-800">Telegram Channel</div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

const Progress_bar = ({ className }: { className: string }) => {
  return (
    <div className="relative h-3 w-10 overflow-clip rounded-full inset-shadow-2xs">
      <motion.div
        initial={{
          translateX: -100,
        }}
        className={cn(
          "absolute inset-0 rounded-full bg-green-400 blur-[px]",
          className,
        )}
      ></motion.div>
    </div>
  );
};

const CheckMark = ({
  className,
  bgColor,
}: {
  className?: string;
  bgColor?: string;
}) => {
  return (
    <motion.div
      initial={{
        backgroundColor: bgColor || "#F9F9F9",
        color: "var(--color-neutral-800)",
        // opacity: 0,
      }}
      // }
      // transition={{
      //   duration: 4,
      // }}
      className={cn(
        "flex size-3 items-center justify-center rounded-full",
        className,
      )}
    >
      <IconCheck size={10} className=""></IconCheck>
    </motion.div>
  );
};
