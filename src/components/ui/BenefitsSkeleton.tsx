import { IconSquareRoundedCheck } from "@tabler/icons-react";

export const BenefitsSkeleton = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center gap-1 text-[12.5px] font-medium text-neutral-800/75">
      <IconSquareRoundedCheck
        stroke={1.3}
        size={21}
        className="stroke-neutral-800/75"
      />
      {text}
    </div>
  );
};
