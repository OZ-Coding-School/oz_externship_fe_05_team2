import BannerImage from "@/assets/images/landing-images/main-banner.png";
import ExamImage from "@/assets/images/landing-images/main-exam.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-neutral-50 px-5 py-32">
      <div className="flex w-full max-w-5xl flex-col gap-16">
        <section className="flex w-full flex-col items-center justify-center gap-16">
          <h1 className="text-center text-3xl font-bold break-keep sm:text-5xl">
            쪽지시험으로 실력을 차곡차곡 쌓아보세요
          </h1>
          <div className="flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2">
            <button className="text-primary-50 bg-primary-600 rounded-full px-7 py-4 font-medium">
              쪽지시험
            </button>
            <button className="rounded-full bg-white px-7 py-4 font-medium text-neutral-400">
              질의응답
            </button>
            <button className="rounded-full bg-white px-7 py-4 font-medium text-neutral-400">
              커뮤니티
            </button>
          </div>
          <img src={ExamImage} className="w-full" alt="exam-image" />
        </section>
        <img src={BannerImage} className="w-full" alt="banner-image" />
      </div>
    </div>
  );
}
