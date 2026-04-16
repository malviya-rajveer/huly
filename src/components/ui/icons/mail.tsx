import { cn } from "@/lib/utils";

export const Mial_Logo = ({ className }: { className: string }) => {
  return (
    <svg
      width="62"
      height="52"
      viewBox="0 0 62 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <g clipPath="url(#clip0_313_353)">
        <rect width="62" height="52" rx="10" fill="#4A4A4A" />
        <rect x="-5" y="-10" width="77" height="64" fill="#4E4E4E" />
        <path
          d="M-0.5 13C23.5 23.8 32.5 27 32.5 27L64 13"
          stroke="#232323"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_313_353">
          <rect width="62" height="52" rx="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
