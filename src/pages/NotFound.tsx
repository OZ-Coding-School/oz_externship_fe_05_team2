export default function NotFound() {
  return (
    <div className="w-full flex flex-col items-center py-20 text-center">
      <div className="text-sm font-semibold bg-purple-100 text-purple-700 px-4 py-1 rounded-md mb-6">
        404
      </div>
      <div className="flex flex-col items-center mb-16">
        <div className="w-28 h-28 opacity-40 mb-4">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C2C2C2"
          >
            <path d="M5 16a4 4 0 0 1 0-8 5 5 0 0 1 9.9-1.2A4.5 4.5 0 1 1 17 16H5z" />
          </svg>
        </div>

        <p className="text-gray-500 text-lg font-medium leading-relaxed">
          페이지를 불러올 수 없어요
          <br />
          잠시 뒤 다시 시도해보세요!
        </p>
      </div>
     </div>
  );
}
      