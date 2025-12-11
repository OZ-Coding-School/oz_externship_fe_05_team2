import { cn } from "@/lib/utils";
import { type InputHTMLAttributes, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const passwordContainerVariants = cva(
  "flex items-center w-full rounded-md border bg-white transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border-neutral-300 focus-within:border-black",
        danger: "border-danger focus-within:border-danger",
        success: "border-success focus-within:border-success",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface PasswordInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof passwordContainerVariants> {
  errorMessage?: string;
  successMessage?: string;
  inputClassName?: string;
  ref?: React.Ref<HTMLInputElement>;
}

const PasswordInput = ({
  className,
  inputClassName,
  variant,
  errorMessage,
  successMessage,
  ref,
  ...props
}: PasswordInputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  const currentVariant = errorMessage
    ? "danger"
    : successMessage
      ? "success"
      : "default";

  return (
    <div className={cn("flex flex-col", className)}>
      <div
        className={cn(passwordContainerVariants({ variant: currentVariant }))}
      >
        <input
          ref={ref}
          type={isVisible ? "text" : "password"}
          className={cn(
            "w-full border-none bg-transparent px-4 py-3 text-sm outline-none placeholder:text-neutral-400 disabled:cursor-not-allowed",
            currentVariant === "danger" && "placeholder:text-danger",
            inputClassName
          )}
          {...props}
        />

        <button
          type="button"
          onClick={toggleVisibility}
          className="pr-3 text-neutral-400 hover:text-neutral-600 focus:outline-none"
        >
          {isVisible ? (
            <EyeIcon className="h-5 w-5" />
          ) : (
            <EyeOffIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {errorMessage && (
        <p className="text-danger mt-1 text-xs font-medium">*{errorMessage}</p>
      )}
      {!errorMessage && successMessage && (
        <p className="text-success mt-1 text-xs font-medium">
          *{successMessage}
        </p>
      )}
    </div>
  );
};

export default PasswordInput;
