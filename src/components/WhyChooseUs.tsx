"use client";
import {
  IconClockBolt,
  IconLayersSelectedBottom,
  IconLocationSearch,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
export const WhyChooseUs = () => {
  const [CurrentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentNumber((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="font-inter flex h-full w-full flex-col items-center bg-white">
      <div className="mt-[10vh] rounded-[20px] bg-linear-150 from-neutral-100 to-neutral-400 p-[1px]">
        <div
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.03) 0px 6px 24px 0px, rgba(0, 0, 0, 0.1) 0px 1px 1px 0px",
          }}
          className="flex items-center gap-1 rounded-2xl bg-linear-150 from-white to-neutral-50 px-3 py-1 text-[12px] text-neutral-800"
        >
          <IconLayersSelectedBottom
            className="stroke-neutral-600"
            size={20}
            strokeWidth={1}
          />{" "}
          Key Benefits
        </div>
      </div>
      <h2
        className={cn(
          "font-inter mt-4 bg-linear-150 from-stone-800 from-80% to-neutral-100 bg-clip-text tracking-tight text-transparent",
          "text-3xl xl:text-[34px]",
        )}
      >
        Why Choose Huly?
      </h2>

      <div className="mt-16 mb-[15vh] grid w-[90%] grid-cols-1 justify-center gap-5 md:grid-cols-3 xl:w-270 xl:translate-x-5">
        <Card
          Icon={IconClockBolt}
          heading="Save hours of manual Intigrations."
          paragraph="text-pretty Save hours of manual integrations by automating repetitive workflows and
        connecting your tools seamlessly."
          CurrentNumber={CurrentNumber}
          CardNumber={0}
        />
        <Card
          CurrentNumber={CurrentNumber}
          CardNumber={1}
          Icon={IconLocationSearch}
          HeaderclassName="w-40 xl:w-50"
          heading="
            Close the Query Faster."
          paragraph="
            Close queries faster with smart automation and streamlined workflows
            that reduce response time and improve accuracy"
        />
        <Card
          CurrentNumber={CurrentNumber}
          CardNumber={2}
          Icon={IconLocationSearch}
          HeaderclassName="text-[19px] md:text-[15px]  lg:text-[19px] xl:text-[21px] w-full xl:w-90"
          paraclassName="lg:w-80"
          heading="AI Models which knows every answers to possible quetions."
          paragraph="Save hours of manual integrations by automating repetitive workflows and connecting your tools seamlessly."
        />
      </div>
    </div>
  );
};

const Card = ({
  CurrentNumber,
  heading,
  paragraph,
  HeaderclassName,
  paraclassName,
  Icon,
  CardNumber,
}: {
  CurrentNumber: number;
  heading: string;
  paragraph: string;
  Icon: React.ElementType;
  HeaderclassName?: string;
  CardNumber: number;
  paraclassName?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto h-55 lg:h-60",
        "w-75 md:w-55 lg:w-75 xl:w-80",
        "relative flex-col justify-center overflow-clip",
      )}
    >
      <div className="absolute top-0 flex items-center justify-center rounded-full">
        <Icon
          size={0}
          strokeWidth={1}
          className="size-7 stroke-neutral-500 lg:size-8 xl:size-8.5"
        ></Icon>
      </div>
      <h5
        className={cn(
          "text-xl md:text-lg lg:text-xl xl:text-2xl",
          "mt-12 w-70 bg-linear-150 from-neutral-900 from-20% to-transparent bg-clip-text text-transparent",
          HeaderclassName,
        )}
      >
        {heading}
      </h5>
      <p
        className={cn(
          "pretty text-[13px] md:text-[12.5px] lg:text-[13px] xl:text-[13.5px]",
          "md:w-80 lg:w-75 xl:w-80",
          "mt-2 text-black/50",
          paraclassName,
        )}
      >
        {paragraph}
      </p>
      <div className="mx-auto h-full w-40 opacity-50 blur-[25px] lg:ml-15 lg:w-60 lg:blur-[40px]">
        <motion.div
          initial={{
            opacity: 0,
            translateY: 40,
          }}
          animate={
            CurrentNumber === CardNumber ? { opacity: 1, translateY: 0 } : {}
          }
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="absolute bottom-2 h-40 w-[80%] rounded-full bg-linear-to-r from-blue-500 via-pink-500 to-orange-300"
        ></motion.div>
      </div>
      <div className="absolute bottom-0 h-px w-[100%] bg-neutral-400"></div>
    </div>
  );
};
