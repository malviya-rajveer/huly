import { cn } from "@/lib/utils";
import { IconMessages } from "@tabler/icons-react";
import Image from "next/image";

interface testimonial_Card {
  review: string;
  profile: string;
  Name: string;
  acc: string;
  profileClassName: string;
  className: string;
}

const testimonial = [
  {
    review:
      "This platform has completely transformd our payment support system. No more manual erorrs or late feedbacks.",
    profile: "/profiles/profile-1.avif",
    Name: "Sara L.",
    acc: "@Saraliy",
    profileClassName: "",
    className: "h-48",
  },
  {
    review:
      "Customer support has never been smoother. Everything is faster, clearer, and more reliable",
    profile: "/profiles/profile-2.png",
    Name: "thomas R",
    acc: "@thomasray",
    profileClassName: "rounded-full  ",
    className: "h-42",
  },
  {
    review:
      "We’ve seen a huge improvement in efficiency and accuracy since switching. It saves us hours every week.",
    profile: "/profiles/profile-3.png",
    Name: "james",
    acc: "@james ",
    profileClassName: "rounded-full",
    className: "h-48",
  },
  {
    review:
      "Customer support has never been smoother. Everything is faster, clearer, and more reliable",
    profile: "/profiles/profile-2.png",
    Name: "thomas R",
    acc: "@thomasray",
    profileClassName: "rounded-full  ",
    className: "h-42",
  },
  {
    review:
      "We’ve seen a huge improvement in efficiency and accuracy since switching. It saves us hours every week.",
    profile: "/profiles/profile-3.png",
    Name: "james",
    acc: "@james ",
    profileClassName: "rounded-full",
    className: "mask-b-from-0%  lg:mask-none  lg:-translate-y-6 h-48",
  },
  {
    review:
      "This platform has completely transformd our payment support system. No more manual erorrs or late feedbacks.",
    profile: "/profiles/profile-1.avif",
    Name: "Sara L.",
    acc: "@Saraliy",
    profileClassName: "",
    className: "mask-b-from-0%  lg:mask-none h-48",
  },
  {
    review:
      "We’ve seen a huge improvement in efficiency and accuracy since switching. It saves us hours every week.",
    profile: "/profiles/profile-3.png",
    Name: "james",
    acc: "@james ",
    profileClassName: "rounded-full",
    className: "hidden lg:block lg:-translate-y-6  h-48",
  },
  {
    review:
      "Customer support has never been smoother. Everything is faster, clearer, and more reliable",
    profile: "/profiles/profile-2.png",
    Name: "thomas R",
    acc: "@thomasray",
    profileClassName: "rounded-full  ",
    className: "hidden lg:block lg:-translate-y-6  h-42",
  },
  {
    review:
      "This platform has completely transformd our payment support system. No more manual erorrs or late feedbacks.",
    profile: "/profiles/profile-1.avif",
    Name: "Sara L.",
    acc: "@Saraliy",
    profileClassName: "",
    className: "hidden lg:block h-48 mask-b-from-0%",
  },
];

export const Testimonials = () => {
  return (
    <div className="font-inter relative flex h-full w-full flex-col items-center bg-white">
      <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.03) 0px 6px 24px 0px, rgba(0, 0, 0, 0.1) 0px 1px 1px 0px",
        }}
        className="mt-[10vh] rounded-[20px] bg-linear-150 from-neutral-100 to-neutral-500 p-[1px]"
      >
        <div className="flex items-center gap-1 rounded-2xl bg-linear-150 from-white to-neutral-50 px-3 py-1 text-[12px] text-neutral-800">
          <IconMessages
            className="stroke-neutral-600"
            size={18}
            strokeWidth={1}
          />{" "}
          Reviews
        </div>
      </div>
      <h2 className="mt-4 bg-linear-150 from-stone-800 from-81% to-neutral-100 bg-clip-text text-3xl tracking-tight text-transparent xl:text-[34px]">
        Real Customer Reviews.
      </h2>
      <div className="absolute inset-0 bottom-0 z-10 h-full w-full bg-white mask-t-from-10% mask-t-to-50%"></div>
      <div className="relative z-0 mt-8 grid h-full grid-cols-1 grid-rows-3 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonial.map((data, idx) => {
          return (
            <Card
              key={idx}
              Name={data.Name}
              acc={data.acc}
              className={data.className}
              profile={data.profile}
              profileClassName={data.profileClassName}
              review={data.review}
            />
          );
        })}
      </div>
    </div>
  );
};

const Card = ({
  className,
  review,
  acc,
  Name,
  profile,
  profileClassName,
}: testimonial_Card) => {
  return (
    <div
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.04) 0px 6px 24px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;",
      }}
      className={cn(
        "flex h-40 w-80 flex-col items-center rounded-2xl font-sans",
        "bg-linear-to-b from-[#fdfdfd] to-[#ffffff]",
        className,
      )}
    >
      <div className="relative mt-6 w-66">
        <span className="absolute text-[16px] font-medium text-stone-900">
          &ldquo;
        </span>
        <p className="ml-2 text-[16px] font-medium text-balance text-stone-900">
          {review} &rdquo;
        </p>
        <div className="font-inter mt-4 flex w-full gap-2">
          <Image
            src={profile}
            alt=""
            height={30}
            width={0}
            className={cn("size-10 rounded-full", profileClassName)}
          ></Image>
          <div className="flex flex-col">
            <div className="mb-0.5 text-[14px] font-semibold text-neutral-700">
              {Name}
            </div>
            <div className="text-[12px] font-medium text-stone-400">{acc}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
