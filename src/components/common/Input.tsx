import { cn } from "@/lib/utils";
import { type InputHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Check } from "lucide-react";

const inputVariants = cva(
  "w-full rounded-md border-2 px-4 py-3 text-sm placeholder:text-neutral-400 focus:outline-none transition-all duration-200 disabled:bg-neutral-100 disabled:text-neutral-400",
  {
    variants: {
      variant: {
        default: "border-neutral-300 bg-white focus:border-primary-500",
        danger:
          "border-danger focus:border-danger bg-white placeholder:text-danger",
        success: "border-success focus:border-success bg-white pr-10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  errorMessage?: string;
  inputClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, inputClassName, variant, errorMessage, ...props }, ref) => {
    const currentVariant = errorMessage ? "danger" : variant;

    return (
      <div className={cn("relative", className)}>
        <div className="relative flex items-center">
          <input
            ref={ref}
            className={cn(
              inputVariants({ variant: currentVariant }),
              inputClassName
            )}
            {...props}
          />

          {currentVariant === "success" && (
            <span className="text-success absolute top-1/2 right-3 -translate-y-1/2 text-lg font-bold">
              <Check />
            </span>
          )}
        </div>
        {errorMessage && (
          <p className="text-danger mt-1 text-xs">*{errorMessage}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
