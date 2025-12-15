type NotFoundExamProps = {
  className?: string;
  iconClassName?: string;
};
export default function NotFoundExam({
  className = "",
  iconClassName = "",
}: NotFoundExamProps) {
  return (
    <div
      className={`w-full flex flex-col items-center pt-72 text-center ${className}`}
    >
      <div className="flex justify-center w-full">
        <div className="flex flex-col items-center">
          <svg
            className={`w-40 h-40 stroke-gray-300 opacity-50 mb-10 ${iconClassName}`}
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect x="3" y="2" width="14" height="18" rx="2" />
            <line x1="7" y1="6" x2="13" y2="6" />
            <line x1="7" y1="10" x2="13" y2="10" />
            <circle cx="17" cy="17" r="3" />
            <line x1="19" y1="19" x2="21" y2="21" />
          </svg>
            <p className="text-gray-400 text-2xl mb-10">
               아직 올라온 글이 없어요 <br />
               첫 글을 남겨보세요!
            </p>
        </div>
      </div>
    </div>
  );
}