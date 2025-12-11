export default function NotFound() {
  return (
    <div className="w-full flex flex-col items-center py-70  text-center">
      <div className="text-xl font-bold bg-purple-100 text-purple-700 px-6 py-2 rounded-md mb-6">
        404
      </div>
      <div className="flex flex-col items-center">
        <div className="w-72 h-72 opacity-40 ">
            <svg
              className="w-full h-full stroke-gray-300"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M5 16a4 4 0 0 1 0-8 5 5 0 0 1 9.9-1.2A4.5 4.5 0 1 1 17 16H5z" />
              <line x1="21" y1="3" x2="3" y2="21" />
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
      