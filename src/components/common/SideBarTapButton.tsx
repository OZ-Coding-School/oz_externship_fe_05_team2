import { cn } from "@/lib";
import type { ComponentProps, ElementType } from "react";

type SideBarTapButtonProps<T extends ElementType = "button"> = {
  as?: T;
  isActive?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
} & ComponentProps<T>;

function SideBarTapButton<T extends ElementType = "button">({
  as,
  isActive = false,
  disabled = false,
  children,
  ...props
}: SideBarTapButtonProps<T>) {
  const Component = as ?? "button";

  return (
    <div className="relative">
      <div
        className={cn(
          "pointer-events-none absolute top-0 left-0 h-full w-0.5 bg-transparent select-none",
          { "bg-primary-500": isActive }
        )}
      ></div>
      <Component
        className={cn(
          "block w-full py-1 pl-5 text-left font-semibold text-neutral-400 transition-colors ease-in-out focus:outline-none",
          "hover:text-primary-500 hover:bg-primary-100 hover:rounded-sm",
          {
            "text-primary-500": isActive,
            "pointer-events-none rounded-sm bg-neutral-200 font-normal text-neutral-400 select-none":
              disabled,
          }
        )}
        tabIndex={disabled ? -1 : 0}
        {...props}
      >
        {children}
      </Component>
    </div>
  );
}

export default SideBarTapButton;
