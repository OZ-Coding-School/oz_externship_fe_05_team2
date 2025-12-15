import { MODAL_ANIMATION_TIME_MS } from "@/constants";
import { useModalContext } from "@/hooks";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import {
  useEffect,
  useState,
  type ComponentProps,
  type ReactNode,
} from "react";

interface ModalContentProps extends ComponentProps<"div"> {
  children: ReactNode;
  isPositionCenter?: boolean;
  hasCloseIcon?: boolean;
}

export default function ModalContent({
  children,
  className,
  isPositionCenter = true,
  hasCloseIcon = true,
  ...props
}: ModalContentProps) {
  const { isOpen, close } = useModalContext();
  const [show, setShow] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      const timer = setTimeout(
        () => setIsAnimating(true),
        MODAL_ANIMATION_TIME_MS
      );
      return () => clearTimeout(timer);
    }
    setIsAnimating(false);
    const timer = setTimeout(() => setShow(false), MODAL_ANIMATION_TIME_MS);
    return () => clearTimeout(timer);
  }, [isOpen]);

  if (!show) return null;

  return (
    <div
      className={cn(
        "fixed z-50 flex min-w-64 transform flex-col rounded-xl bg-white transition-all",
        isPositionCenter
          ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          : "",
        `duration-[${MODAL_ANIMATION_TIME_MS}]`,
        isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0",
        className
      )}
      {...props}
    >
      {hasCloseIcon && (
        <div className="flex items-center justify-end">
          <button
            onClick={() => {
              close();
            }}
          >
            <XIcon />
          </button>
        </div>
      )}
      {children}
    </div>
  );
}
