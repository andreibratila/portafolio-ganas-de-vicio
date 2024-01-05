import { cn } from "@/utils";

interface Props {
  color?: string;
  height?: string;
}

export const LineFooter = ({ color, height }: Props) => {
  return (
    <div
      className={cn(
        "bg-black h-[1.89062px] w-0 group-hover:w-full transition-all duration-200",
        color,
        height
      )}
    />
  );
};
