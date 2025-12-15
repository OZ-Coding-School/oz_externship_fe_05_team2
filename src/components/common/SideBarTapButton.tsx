import { cn } from "@/lib";
import { Link } from "react-router";

interface SideBarTapButtonProps {
  to: string;
  isActive?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

function SideBarTapButton({
  to,
  isActive = false,
  disabled = false,
  children,
}: SideBarTapButtonProps) {
  return (
    <div className="relative">
      <div
        className={cn(
          "pointer-events-none absolute top-0 left-0 h-full w-0.5 bg-transparent select-none",
          { "bg-primary-500": isActive }
        )}
      ></div>
      <Link
        to={to}
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
      >
        {children}
      </Link>
    </div>
  );
}

export default SideBarTapButton;
