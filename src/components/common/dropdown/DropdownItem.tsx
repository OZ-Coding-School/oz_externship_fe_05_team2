import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { type DropdownOption } from "@/components/common/dropdown";

interface DropdownItemProps {
  option: DropdownOption;
  selectedOptionLabel: string | undefined;
  onSelect: (newOption: DropdownOption) => void;
}

function DropdownItem({
  option,
  selectedOptionLabel,
  onSelect,
}: DropdownItemProps) {
  const isSelected = selectedOptionLabel === option.label;

  return (
    <li
      className={cn(
        "flex h-12 items-center justify-between rounded-sm px-3 py-2.5 text-[14px] transition-colors ease-in-out",
        "hover:bg-primary-100",
        { "text-primary-500 font-semibold": isSelected }
      )}
      onClick={() => onSelect(option)}
    >
      {option.label}
      {isSelected && <CheckIcon size={16} strokeWidth={2.5} />}
    </li>
  );
}

export default DropdownItem;
