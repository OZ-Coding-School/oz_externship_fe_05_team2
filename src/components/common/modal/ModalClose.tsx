import { useModalContext } from "@/hooks";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

interface ModalCloseProps extends ComponentProps<"div"> {
  children: ReactNode;
}

export default function ModalClose({
  children,
  className,
  ...props
}: ModalCloseProps) {
  const { close } = useModalContext();
  return (
    <div
      onClick={close}
      {...props}
      className={cn("hover:cursor-pointer", className)}
    >
      {children}
    </div>
  );
}
