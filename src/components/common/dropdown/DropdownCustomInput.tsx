import { cn } from "@/lib/utils";
import { MAX_CUSTOM_INPUT_LENGTH } from "@/components/common/dropdown";

interface DropdownCustomInputProps {
  value: string;
  onChange: (newValue: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  height: number;
}

function DropdownCustomInput({
  value,
  onChange,
  onFocus,
  onBlur,
  height,
}: DropdownCustomInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    onChange(event.target.value);

  return (
    <div className="flex flex-col gap-1">
      <textarea
        style={{ height: height }}
        className={cn(
          "scrollbar-none resize-none rounded-sm border border-neutral-300 px-4 py-3 text-sm transition-colors ease-in-out",
          "focus:border-black focus:outline-none",
          "placeholder:text-[14px] placeholder:text-neutral-300"
        )}
        placeholder="탈퇴 사유를 입력해주세요."
        value={value}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
      ></textarea>
      <span
        className={cn("self-end text-xs", {
          "text-neutral-300": value.length === 0,
          "text-neutral-500": value.length > 0,
        })}
      >{`${value.length}/${MAX_CUSTOM_INPUT_LENGTH}`}</span>
    </div>
  );
}

export default DropdownCustomInput;
