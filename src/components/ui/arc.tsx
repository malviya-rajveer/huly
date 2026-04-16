import { cn } from "@/lib/utils";

export const Arc = ({ className }: { className?: string }) => {
  return (
    <svg
      width="63"
      height="161"
      viewBox="0 0 63 161"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute", className)}
    >
      <g filter="url(#filter0_nf_741_290)">
        <path
          d="M23.3029 156.444C86.7179 93.0878 48.6142 23.1731 2.17225 5.33429"
          stroke="url(#paint0_linear_741_290)"
          strokeWidth="11"
        />
      </g>
      <defs>
        <filter
          id="filter0_nf_741_290"
          x="-0.000781253"
          y="1.22041e-05"
          width="62.4352"
          height="160.534"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="2 2"
            stitchTiles="stitch"
            numOctaves="3"
            result="noise"
            seed="1399"
          />
          <feColorMatrix
            in="noise"
            type="luminanceToAlpha"
            result="alphaNoise"
          />
          <feComponentTransfer in="alphaNoise" result="coloredNoise1">
            <feFuncA
              type="discrete"
              tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
            />
          </feComponentTransfer>
          <feComposite
            operator="in"
            in2="shape"
            in="coloredNoise1"
            result="noise1Clipped"
          />
          <feFlood
            floodColor="rgba(255, 255, 255, 0.25)"
            result="color1Flood"
          />
          <feComposite
            operator="in"
            in2="noise1Clipped"
            in="color1Flood"
            result="color1"
          />
          <feMerge result="effect1_noise_741_290">
            <feMergeNode in="shape" />
            <feMergeNode in="color1" />
          </feMerge>
          <feGaussianBlur
            stdDeviation="0.1"
            result="effect2_foregroundBlur_741_290"
          />
        </filter>
        <linearGradient
          id="paint0_linear_741_290"
          x1="-31.2677"
          y1="47.1892"
          x2="58.2422"
          y2="114.623"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5964FF" stopOpacity="0.71" />
          <stop offset="0.112729" stopColor="#925BFF" stopOpacity="0.451523" />
          <stop offset="0.218352" stopColor="#A459FF" stopOpacity="0.37" />
          <stop offset="1" stopColor="#0B1CFF" stopOpacity="0.65" />
        </linearGradient>
      </defs>
    </svg>
  );
};
