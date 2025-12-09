import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

function SideBarTapButton({
  className,
  children,
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "w-[152px] py-0.5 pl-5 text-left text-base font-bold text-neutral-400 transition-colors ease-in-out focus:outline-none",
        "hover:text-primary-500 hover:bg-primary-100 hover:rounded-sm",
        "active:order-l-primary-500 active:rounded-none active:border-l-2 active:bg-white active:pl-4",
        "disabled:pointer-events-none disabled:rounded-sm disabled:bg-neutral-200 disabled:font-normal disabled:text-neutral-400",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default SideBarTapButton;
