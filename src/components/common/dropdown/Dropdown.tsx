import { useState } from "react";
import {
  DropdownTrigger,
  DropdownContent,
  DropdownCustomInput,
} from "@/components/common/dropdown";
import { useOutsideInteraction } from "@/hooks";
import { cn } from "@/lib";
import type { DropdownOption, SelectedOption } from "@/types";
import {
  CUSTOM_OPTION,
  DEFAULT_PLACEHOLDER,
  MAX_CUSTOM_INPUT_LENGTH,
} from "@/constants";

interface DropdownProps {
  onChange: (newValue: string) => void;
  options: DropdownOption[];
  disabled?: boolean;
  allowCustomInput?: boolean;
  customInputHeight?: number;
  className?: string;
}

function Dropdown({
  onChange,
  options,
  disabled,
  allowCustomInput = false,
  customInputHeight = 120,
  className = "",
}: DropdownProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectedOption>(null);
  const [customInputValue, setCustomInputValue] = useState("");
  const [isCustomInputFocused, setIsCustomInputFocused] = useState(false);
  const isCustomOptionSelected =
    allowCustomInput && selectedOption?.label === CUSTOM_OPTION.label;
  const placeholder = selectedOption?.label ?? DEFAULT_PLACEHOLDER;

  // ------ menu ------
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  // ------ option ------
  const handleOptionSelect = (newOption: DropdownOption) => {
    setSelectedOption(newOption);
    onChange(newOption.value);
    closeMenu();
  };
  // ------ custom input ------
  const handleCustomInputValueChange = (newValue: string) => {
    if (newValue.length > MAX_CUSTOM_INPUT_LENGTH) return;
    setCustomInputValue(newValue);
    onChange(newValue);
  };
  const handleCustomInputFocus = () => setIsCustomInputFocused(true);
  const handleCustomInputBlur = () => setIsCustomInputFocused(false);
  // ------ key ------
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") closeMenu();
  };

  const dropdownRef = useOutsideInteraction<HTMLDivElement>([
    { type: "mousedown", handler: () => closeMenu() },
  ]);

  return (
    <div
      className={cn("relative flex flex-col gap-0.5", className)}
      onKeyDown={handleKeyDown}
      ref={dropdownRef}
    >
      <DropdownTrigger
        customInputValue={customInputValue}
        placeholder={placeholder}
        isMenuOpen={isMenuOpen}
        isCustomOptionSelected={isCustomOptionSelected}
        isCustomInputFocused={isCustomInputFocused}
        disabled={disabled}
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
      />
      <DropdownContent
        isMenuOpen={isMenuOpen}
        options={options}
        allowCustomInput={allowCustomInput}
        selectedOption={selectedOption}
        onSelectOption={handleOptionSelect}
      />
      {allowCustomInput && isCustomOptionSelected && (
        <DropdownCustomInput
          value={customInputValue}
          onChange={handleCustomInputValueChange}
          onFocus={handleCustomInputFocus}
          onBlur={handleCustomInputBlur}
          height={customInputHeight}
        />
      )}
    </div>
  );
}

export default Dropdown;
