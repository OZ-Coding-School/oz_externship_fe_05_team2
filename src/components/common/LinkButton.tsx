import { cn, buttonVariants } from "@/lib";
import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { Link } from "react-router";

interface LinkButtonProps
  extends ComponentProps<typeof Link>,
    VariantProps<typeof buttonVariants> {}

export default function LinkButton({
  className,
  children,
  variant,
  ...props
}: LinkButtonProps) {
  return (
    <Link className={cn(buttonVariants({ variant }), className)} {...props}>
      {children}
    </Link>
  );
}
