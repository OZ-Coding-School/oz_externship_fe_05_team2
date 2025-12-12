import { cn } from "@/lib/utils";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

interface DropdownTriggerProps {
  customInputValue: string;
  placeholder: string;
  isMenuOpen: boolean;
  isCustomOptionSelected: boolean;
  isCustomInputFocused: boolean;
  disabled?: boolean;
  onClick: () => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
}

function DropdownTrigger({
  customInputValue,
  placeholder,
  isMenuOpen,
  isCustomOptionSelected,
  isCustomInputFocused,
  disabled,
  onClick,
  onKeyDown,
}: DropdownTriggerProps) {
  return (
    <button
      className={cn(
        "mb-1 flex items-center justify-between rounded-sm border border-neutral-300 px-4 py-2.5 text-[14px] text-neutral-300 transition-colors ease-in-out",
        "hover:bg-neutral-50 hover:text-black",
        "focus:text-black focus:outline-none",
        "disabled:pointer-events-none disabled:bg-neutral-100 disabled:text-neutral-300 disabled:select-none",
        {
          "border-black text-black": isMenuOpen || isCustomOptionSelected,
          "border-neutral-300": customInputValue && !isCustomInputFocused,
        }
      )}
      disabled={disabled}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      <span>{placeholder}</span>
      {isMenuOpen || isCustomOptionSelected ? (
        <ChevronUpIcon size={20} />
      ) : (
        <ChevronDownIcon size={20} />
      )}
    </button>
  );
}

export default DropdownTrigger;
