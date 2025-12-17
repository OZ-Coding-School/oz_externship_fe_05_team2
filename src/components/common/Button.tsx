import { buttonVariants, cn } from "@/lib";
import type { ComponentProps } from "react";
import { type VariantProps } from "class-variance-authority";

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
