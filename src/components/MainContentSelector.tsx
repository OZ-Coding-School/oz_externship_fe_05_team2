import { cn } from "@/lib";
import type { mainContents } from "@/pages/Home";

const BUTTON_COMMON_STYLE =
  "rounded-full px-4 py-3 sm:px-7 sm:py-4 font-medium transition-colors ease-in-out cursor-pointer";

const BUTTON_SELECTED_STYLE = "text-primary-50 bg-primary-600";

const BUTTON_UNSELECTED_STYLE =
  "hover:bg-primary-400 hover:text-primary-50 bg-white text-neutral-400";

interface MainContentSelectorProps {
  content: mainContents;
  setContent: React.Dispatch<React.SetStateAction<mainContents>>;
}

export default function MainContentSelector({
  content,
  setContent,
}: MainContentSelectorProps) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2">
      <button
        onClick={() => {
          setContent("exam");
        }}
        className={cn(
          BUTTON_COMMON_STYLE,
          content === "exam" ? BUTTON_SELECTED_STYLE : BUTTON_UNSELECTED_STYLE
        )}
      >
        쪽지시험
      </button>
      <button
        onClick={() => {
          setContent("qna");
        }}
        className={cn(
          BUTTON_COMMON_STYLE,
          content === "qna" ? BUTTON_SELECTED_STYLE : BUTTON_UNSELECTED_STYLE
        )}
      >
        질의응답
      </button>
      <button
        onClick={() => {
          setContent("community");
        }}
        className={cn(
          BUTTON_COMMON_STYLE,
          content === "community"
            ? BUTTON_SELECTED_STYLE
            : BUTTON_UNSELECTED_STYLE
        )}
      >
        커뮤니티
      </button>
    </div>
  );
}
