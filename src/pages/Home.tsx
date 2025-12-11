import {
  ExamImage,
  QnaImage,
  CommunityImage,
  BannerImage,
} from "@/assets/images/landing-images";
import { cn } from "@/lib/utils";
import { useState } from "react";

type mainContents = "exam" | "qna" | "community";

const MAIN_TEXTS: Record<mainContents, string> = {
  exam: "쪽지시험으로 실력을 차곡차곡 쌓아보세요",
  qna: "질문하고 배우고, 동료 수강생과 함께 성장해요",
  community: "정보 공유부터 팀원 모집까지 커뮤니티에서 함께해요",
} as const;

const MAIN_IMAGES: Record<mainContents, string> = {
  exam: ExamImage,
  qna: QnaImage,
  community: CommunityImage,
} as const;

const BUTTON_COMMON_STYLE =
  "rounded-full px-4 py-3 sm:px-7 sm:py-4 font-medium";

export default function Home() {
  const [content, setContent] = useState<mainContents>("exam");

  return (
    <div className="flex flex-col items-center bg-neutral-50 px-5 py-32">
      <div className="flex w-full max-w-5xl flex-col gap-16">
        <section className="flex w-full flex-col items-center justify-center gap-16">
          <h1 className="text-center text-3xl font-bold break-keep sm:text-5xl">
            {MAIN_TEXTS[content]}
          </h1>
          <div className="flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2">
            <button
              onClick={() => {
                setContent("exam");
              }}
              className={cn(
                BUTTON_COMMON_STYLE,
                "text-primary-50 bg-primary-600"
              )}
            >
              쪽지시험
            </button>
            <button
              onClick={() => {
                setContent("qna");
              }}
              className={cn(BUTTON_COMMON_STYLE, "bg-white text-neutral-400")}
            >
              질의응답
            </button>
            <button
              onClick={() => {
                setContent("community");
              }}
              className={cn(BUTTON_COMMON_STYLE, "bg-white text-neutral-400")}
            >
              커뮤니티
            </button>
          </div>
          <img src={MAIN_IMAGES[content]} className="w-full" alt="main-image" />
        </section>
        <img src={BannerImage} className="w-full" alt="banner-image" />
      </div>
    </div>
  );
}
