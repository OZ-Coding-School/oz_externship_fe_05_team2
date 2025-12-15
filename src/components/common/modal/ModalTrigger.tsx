import { useModalContext } from "@/hooks";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

interface ModalTriggerProps extends ComponentProps<"div"> {
  children: ReactNode;
}

export default function ModalTrigger({
  children,
  className,
  ...props
}: ModalTriggerProps) {
  const { toggle } = useModalContext();
  return (
    <div
      onClick={toggle}
      {...props}
      className={cn("hover:cursor-pointer", className)}
    >
      {children}
    </div>
  );
}
