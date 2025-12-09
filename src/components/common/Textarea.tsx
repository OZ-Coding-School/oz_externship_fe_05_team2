import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export default function Textarea({
  className,
  ...props
}: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-[120px] w-full resize-none rounded-sm border border-neutral-300 px-4 py-3 text-sm transition-all duration-200 placeholder:text-neutral-400",
        "focus:border-neutral-300 focus:ring-1 focus:ring-neutral-300 focus:outline-none",
        "disabled:bg-neutral-100 disabled:text-neutral-400",
        className
      )}
      {...props}
    />
  );
}
