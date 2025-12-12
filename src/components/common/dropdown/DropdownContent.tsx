import {
  DropdownItem,
  CUSTOM_OPTION,
  type DropdownOption,
  type SelectedOption,
} from "@/components/common/dropdown";
import { cn } from "@/lib/utils";

interface DropdownContentProps {
  isMenuOpen: boolean;
  options: DropdownOption[];
  allowCustomInput?: boolean;
  selectedOption: SelectedOption;
  onSelectOption: (newOption: DropdownOption) => void;
}

function DropdownContent({
  isMenuOpen,
  options,
  allowCustomInput,
  selectedOption,
  onSelectOption,
}: DropdownContentProps) {
  const displayOptions = allowCustomInput
    ? [...options, CUSTOM_OPTION]
    : options;
  const isScrollable = displayOptions.length > 4;

  if (!isMenuOpen) return null;
  return (
    <div
      className={cn(
        "absolute top-12 left-0 z-10 w-full rounded-sm border bg-white p-1",
        { "py-1 pr-0 pl-1": isScrollable }
      )}
    >
      <div
        className={cn({
          "dropdown-menu-scroll h-[200px] overflow-y-scroll": isScrollable,
        })}
      >
        <ul>
          {displayOptions.map((option) => (
            <DropdownItem
              key={option.value}
              option={option}
              selectedOptionLabel={selectedOption?.label}
              onSelect={onSelectOption}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DropdownContent;
