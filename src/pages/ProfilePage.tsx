export default function ProfilePage() {
  return (
    <div className="w-full flex justify-center bg-white px-4 py-8"> 
      <div className="w-full max-w-[640px] space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold text-gray-900">내 정보</h2>
        </div>
        <section className="border border-gray-300 rounded-lg bg-white p-6">
          <h3 className="text-purple-700 font-semibold mb-4 border-b border-purple-300 pb-2">
            프로필
          </h3>

          <div className="flex flex-col items-center gap-5">
            <div className="w-28 h-28 rounded-full bg-purple-200 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-purple-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-2a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
            </div>
            <div className="text-sm text-gray-800 space-y-1 text-center">
              <p>
                <span className="font-semibold">닉네임</span> &nbsp; 오즈코즈
              </p>
              <p>
                <span className="font-semibold">이메일</span> &nbsp; ozschool1234@gmail.com
              </p>
            </div>
          </div>
        </section>
        </div>
    </div>
  );
}