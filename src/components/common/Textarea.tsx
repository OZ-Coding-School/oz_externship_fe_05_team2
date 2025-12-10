import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export default function Textarea({
  className,
  ...props
}: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "resize-none rounded-sm border border-neutral-300 bg-neutral-100 px-4 py-3 text-sm transition-all duration-200 placeholder:text-neutral-400",
        "focus:border-neutral-400 focus:outline-none",
        className
      )}
      {...props}
    />
  );
}
