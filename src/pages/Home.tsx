import {
  ExamImage,
  QnaImage,
  CommunityImage,
  BannerImage,
} from "@/assets/images/landing-images";
import MainContentSelector from "@/components/MainContentSelector";
import { useState } from "react";

export type mainContents = "exam" | "qna" | "community";

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

export default function Home() {
  const [content, setContent] = useState<mainContents>("exam");

  return (
    <div className="flex flex-col items-center bg-neutral-50 px-5 py-32">
      <div className="flex w-full max-w-5xl flex-col gap-16">
        <section className="flex w-full flex-col items-center justify-center gap-16">
          <h1
            key={content + "-text"}
            className="animate-fade-in-blur text-center text-3xl font-bold break-keep not-odd:sm:text-5xl"
          >
            {MAIN_TEXTS[content]}
          </h1>

          <MainContentSelector content={content} setContent={setContent} />

          <img
            key={content + "-image"}
            src={MAIN_IMAGES[content]}
            className="animate-fade-in-blur w-full"
            alt={content + "-image"}
          />
        </section>
        <img src={BannerImage} className="w-full" alt="banner-image" />
      </div>
    </div>
  );
}
