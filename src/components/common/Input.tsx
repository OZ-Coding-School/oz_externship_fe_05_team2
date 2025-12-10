import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "rounded-md border px-4 py-3 text-sm placeholder:text-neutral-400 focus:outline-none transition-all duration-200 disabled:bg-neutral-100 disabled:text-neutral-400",
  {
    variants: {
      variant: {
        default: "border-neutral-200 bg-white focus:border-primary-500",
        danger:
          "border-danger text-danger focus:border-danger bg-white placeholder:text-danger",
        success: "border-success text-success focus:border-success bg-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface InputProps
  extends ComponentProps<"input">,
    VariantProps<typeof inputVariants> {}

export default function Input({ className, variant, ...props }: InputProps) {
  return (
    <input className={cn(inputVariants({ variant }), className)} {...props} />
  );
}
