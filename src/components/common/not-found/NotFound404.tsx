import { cn } from "@/lib/utils";

type NotFoundProps = {
  className?: string;
  statusCode?: number | string;
};

export default function NotFound({
  className,
  statusCode = 404,
}: NotFoundProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center py-70 text-center",
        className
      )}
    >
      <div className="mb-6 rounded-md bg-purple-100 px-6 py-2 text-xl font-bold text-purple-700">
        {statusCode}
      </div>
      <div className="flex flex-col items-center">
        <div className="h-72 w-72 opacity-40">
          <svg
            className="h-full w-full stroke-gray-300"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M5 16a4 4 0 0 1 0-8 5 5 0 0 1 9.9-1.2A4.5 4.5 0 1 1 17 16H5z" />
            <line x1="21" y1="3" x2="3" y2="21" />
          </svg>
        </div>
        <p className="text-lg leading-relaxed font-medium text-gray-500">
          페이지를 불러올 수 없어요
          <br />
          잠시 뒤 다시 시도해보세요!
        </p>
      </div>
    </div>
  );
}
