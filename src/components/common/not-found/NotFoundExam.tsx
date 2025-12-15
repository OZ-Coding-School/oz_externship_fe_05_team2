import { cn } from "@/lib/utils";

type NotFoundExamProps = {
  className?: string;
  iconClassName?: string;
};

export default function NotFoundExam({
  className,
  iconClassName,
}: NotFoundExamProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center pt-72 text-center",
        className
      )}
    >
      <div className="flex w-full justify-center">
        <div className="flex flex-col items-center">
          <svg
            className={cn(
              "mb-10 h-40 w-40 stroke-gray-300 opacity-50",
              iconClassName
            )}
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect x="3" y="2" width="14" height="18" rx="2" />
            <line x1="7" y1="6" x2="13" y2="6" />
            <line x1="7" y1="10" x2="13" y2="10" />
            <circle cx="17" cy="17" r="3" />
            <line x1="19" y1="19" x2="21" y2="21" />
          </svg>
          <p className="mb-10 text-2xl text-gray-400">
            아직 응시할 시험이 없어요.
          </p>
        </div>
      </div>
    </div>
  );
}
