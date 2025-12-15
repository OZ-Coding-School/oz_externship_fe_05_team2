import { cn } from "@/lib";
import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "text-base rounded px-7 py-4 focus:outline-none transition-colors ease-in-out",
  {
    variants: {
      variant: {
        fill: cn(
          "text-white bg-primary-500",
          "hover:bg-primary-600",
          "active:bg-primary-700",
          "disabled:text-neutral-400 disabled:bg-neutral-200"
        ),
        outline: cn(
          "text-primary-700 bg-primary-200 border border-primary-500",
          "hover:bg-primary-300 hover:border-primary-600",
          "active:bg-primary-400 active:border-primary-700 active:text-primary-800",
          "disabled:text-neutral-700 disabled:bg-neutral-200 disabled:border-neutral-400"
        ),
      },
    },
    defaultVariants: {
      variant: "fill",
    },
  }
);

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  className,
  children,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props}>
      {children}
    </button>
  );
}
