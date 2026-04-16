import { cn } from "@/lib/utils";

export const Triangle = ({ className }: { className?: string }) => {
  return (
    <svg
      width="222"
      height="230"
      viewBox="0 0 222 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute", className)}
    >
      <g filter="url(#filter0_n_770_315)">
        <path
          d="M34.2726 5.00027L214.676 138.839C217.208 140.718 216.673 144.65 213.731 145.784L112.321 184.866L58.2248 205.714L10.4426 224.128C7.60331 225.222 4.63046 222.872 5.04067 219.857L24.0989 79.7772"
          stroke="url(#paint0_radial_770_315)"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_n_770_315"
          x="0"
          y="0"
          width="221.295"
          height="229.408"
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
            baseFrequency="2.5 2.5"
            stitchTiles="stitch"
            numOctaves="3"
            result="noise"
            seed="7560"
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
            floodColor="rgba(255, 255, 255, 0.12)"
            result="color1Flood"
          />
          <feComposite
            operator="in"
            in2="noise1Clipped"
            in="color1Flood"
            result="color1"
          />
          <feMerge result="effect1_noise_770_315">
            <feMergeNode in="shape" />
            <feMergeNode in="color1" />
          </feMerge>
        </filter>
        <radialGradient
          id="paint0_radial_770_315"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(133.599 15.3558 -16.4654 147.095 83.9545 127.412)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D80FF" />
          <stop offset="1" stopColor="#FFF0D7" />
        </radialGradient>
      </defs>
    </svg>
  );
};
