"use client";
import { useRef } from "react";
import {
  motion,
  MotionValue,
  useInView,
  useMotionTemplate,
} from "motion/react";
import { Steps } from "../steps-demo";
import { cn } from "@/lib/utils";

export const AnimatedHeroModel = ({
  opacity,
  blur,
}: {
  opacity?: MotionValue<number>;
  blur: MotionValue<number>;
}) => {
  const ref = useRef(null);
  const Inview = useInView(ref, { amount: 0.7 });

  return (
    <motion.div
      style={{
        opacity,
        filter: useMotionTemplate`blur(${blur}px)`,
      }}
      ref={ref}
      className="xl:w-XL-device sticky top-[15vh] z-100 mx-auto -mt-[35vh] flex h-[75vh] w-[90%] justify-center overflow-hidden"
    >
      <div className="h-full w-2xl">
        <div className="absolute left-0">
          <motion.h2
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={
              Inview
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.7,
              delay: 0,
            }}
            className={cn(
              "tracking-tight text-white",
              "w-60 lg:w-70 xl:w-80",
              "text-xl text-pretty lg:text-2xl xl:text-3xl",
              "leading-8 xl:leading-10",
            )}
          >
            Build customer service like a product.
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={
              Inview
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.7,
              delay: 0,
            }}
            className={cn(
              "mt-2 hidden w-50 text-balance text-pretty text-white/95 md:block lg:mt-4 lg:w-78 xl:w-90",
              "text-[13px] lg:text-[14px] xl:text-[16px]",
            )}
          >
            Stop reacting to tickets. Design a structured system that evolves
            with your users.
          </motion.p>
        </div>

        <div className="pointer-events-none relative flex h-full w-full scale-60 items-center justify-center md:scale-75 lg:scale-85 xl:scale-100">
          <Steps></Steps>
          <motion.svg
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={
              Inview
                ? {
                    opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],

                    scale: 1,
                    rotate: 20,
                  }
                : {}
            }
            transition={{
              duration: 1.8,
              ease: [0.115, 0.749, 0.362, 0.987],
            }}
            width={500}
            height={500}
          >
            <circle
              r={180}
              cy={250}
              cx={250}
              fill="none"
              stroke="white"
              strokeWidth={1.2}
              strokeDasharray={5}
            ></circle>
          </motion.svg>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={
              Inview
                ? {
                    opacity: 1,
                  }
                : {}
            }
            className="absolute"
          >
            <motion.div
              className=""
              initial={{
                opacity: 0,
              }}
              animate={
                Inview
                  ? {
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                delay: 1.6,
              }}
            >
              <motion.svg
                initial={{
                  opacity: 1,
                }}
                animate={
                  Inview
                    ? {
                        opacity: 1,
                        rotate: [20, 20, 40, 40, 60, 60, 80, 80],
                      }
                    : {}
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 1.6,
                  ease: "easeInOut",
                }}
                width={500}
                height={500}
              >
                <circle
                  r={180}
                  cy={250}
                  cx={250}
                  fill="none"
                  stroke="white"
                  strokeWidth={1.2}
                  strokeDasharray={5}
                ></circle>
              </motion.svg>
            </motion.div>
          </motion.div>

          <div className="absolute">
            <motion.svg
              initial={{
                translateX: -79,
                translateY: -40,
                opacity: 0,
                rotate: 0,
              }}
              animate={
                Inview
                  ? {
                      rotate: -360,
                      translateX: -205,
                      translateY: -202,
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                duration: 1.1,
                ease: [0.115, 0.749, 0.362, 0.987],
              }}
              width="379"
              height="380"
              viewBox="0 0 379 380"
              fill="none"
              className="absolute size-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M189.5 0C189.5 0 187.709 114.503 229.34 158.66C272.866 204.827 379 190 379 190C379 190 272.866 191.492 229.34 237.66C187.709 281.817 189.5 380 189.5 380C189.5 380 195.47 281.817 153.84 237.66C110.314 191.492 0 190 0 190C0 190 110.314 204.827 153.84 158.66C195.47 114.503 189.5 0 189.5 0Z"
                fill="white"
              />
            </motion.svg>
            <motion.svg
              initial={{
                translateX: 79,
                translateY: -60,
                opacity: 0,
                rotate: 0,
              }}
              animate={
                Inview
                  ? {
                      rotate: 360,
                      translateX: 186,
                      translateY: -201,
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                duration: 1.1,
                ease: [0.115, 0.749, 0.362, 0.987],
              }}
              width="379"
              height="380"
              viewBox="0 0 379 380"
              fill="none"
              className="absolute size-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M189.5 0C189.5 0 187.709 114.503 229.34 158.66C272.866 204.827 379 190 379 190C379 190 272.866 191.492 229.34 237.66C187.709 281.817 189.5 380 189.5 380C189.5 380 195.47 281.817 153.84 237.66C110.314 191.492 0 190 0 190C0 190 110.314 204.827 153.84 158.66C195.47 114.503 189.5 0 189.5 0Z"
                fill="white"
              />
            </motion.svg>
            <motion.svg
              initial={{
                translateX: 79,
                translateY: 79,
                opacity: 0,
                rotate: 0,
              }}
              animate={
                Inview
                  ? {
                      rotate: 360,
                      translateX: 186,
                      translateY: 182,
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                duration: 1.1,
                ease: [0.115, 0.749, 0.362, 0.987],
              }}
              width="379"
              height="380"
              viewBox="0 0 379 380"
              fill="none"
              className="absolute size-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M189.5 0C189.5 0 187.709 114.503 229.34 158.66C272.866 204.827 379 190 379 190C379 190 272.866 191.492 229.34 237.66C187.709 281.817 189.5 380 189.5 380C189.5 380 195.47 281.817 153.84 237.66C110.314 191.492 0 190 0 190C0 190 110.314 204.827 153.84 158.66C195.47 114.503 189.5 0 189.5 0Z"
                fill="white"
              />
            </motion.svg>
            <motion.svg
              initial={{
                translateX: -80,
                translateY: 59,
                opacity: 0,
                rotate: 0,
              }}
              animate={
                Inview
                  ? {
                      rotate: -360,
                      translateX: -205,
                      translateY: 183,
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                duration: 1.1,
                ease: [0.115, 0.749, 0.362, 0.987],
              }}
              width="379"
              height="380"
              viewBox="0 0 379 380"
              fill="none"
              className="absolute size-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M189.5 0C189.5 0 187.709 114.503 229.34 158.66C272.866 204.827 379 190 379 190C379 190 272.866 191.492 229.34 237.66C187.709 281.817 189.5 380 189.5 380C189.5 380 195.47 281.817 153.84 237.66C110.314 191.492 0 190 0 190C0 190 110.314 204.827 153.84 158.66C195.47 114.503 189.5 0 189.5 0Z"
                fill="white"
              />
            </motion.svg>
            <motion.svg
              initial={{
                translateX: -85,
                translateY: -85,
                opacity: 0,
              }}
              animate={
                Inview
                  ? {
                      translateX: -133,
                      translateY: -133,
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                duration: 1.1,
                ease: [0.115, 0.749, 0.362, 0.987],
              }}
              height={20}
              width={20}
              className="absolute"
            >
              <circle r={4} fill="white" cx={5} cy={5}></circle>
            </motion.svg>
            <motion.svg
              initial={{
                translateX: 75,
                translateY: -85,
                opacity: 0,
              }}
              animate={
                Inview
                  ? {
                      translateX: 123,
                      translateY: -133,
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                duration: 1.1,
                ease: [0.115, 0.749, 0.362, 0.987],
              }}
              height={20}
              width={20}
              className="absolute"
            >
              <circle r={4} fill="white" cx={5} cy={5}></circle>
            </motion.svg>
            <motion.svg
              initial={{
                translateX: 75,
                translateY: 73,
                opacity: 0,
              }}
              animate={
                Inview
                  ? {
                      translateX: 123,
                      translateY: 122,
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                duration: 1.1,
                ease: [0.115, 0.749, 0.362, 0.987],
              }}
              height={20}
              width={20}
              className="absolute"
            >
              <circle r={4} fill="white" cx={5} cy={5}></circle>
            </motion.svg>
            <motion.svg
              initial={{
                translateX: -85,
                translateY: 73,
                opacity: 0,
              }}
              animate={
                Inview
                  ? {
                      translateX: -133,
                      translateY: 122,
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                duration: 1.8,
                ease: [0.115, 0.749, 0.362, 0.987],
              }}
              height={20}
              width={20}
              className="absolute"
            >
              <circle r={4} fill="white" cx={5} cy={5}></circle>
            </motion.svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

{
  /* <svg class="absolute inset-0 size-full" aria-hidden="true">
  <rect width="100%" height="100%" fill="url(#wave)"></rect>
</svg>; */
}
