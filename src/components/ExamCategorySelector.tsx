import { EXAM_CATEGORY_OPTIONS } from "@/constants";
import { cn } from "@/lib";
import type { ExamCategory } from "@/types";

interface ExamCategorySelectorProps {
  category: ExamCategory;
  onChange: (category: ExamCategory) => void;
}

function ExamCategorySelector({
  category,
  onChange,
}: ExamCategorySelectorProps) {
  return (
    <ul className="flex gap-7 border-b-2 border-b-neutral-300 text-xl font-semibold text-neutral-400 transition-colors ease-in-out">
      {EXAM_CATEGORY_OPTIONS.map((item) => (
        <li key={item.value}>
          <button
            type="button"
            className={cn(
              "pb-2",
              "hover:text-primary-700",
              "focus:outline-none",
              {
                "text-primary-700": item.value === category,
              }
            )}
            onClick={() => onChange(item.value)}
          >
            {item.label}
          </button>
          <div
            className={cn("h-0.5 w-full", {
              "bg-primary-700": item.value === category,
            })}
          ></div>
        </li>
      ))}
    </ul>
  );
}

export default ExamCategorySelector;
