import {
  ExamImage,
  QnaImage,
  CommunityImage,
  BannerImage,
} from "@/assets/images/landing-images";
import { MainContentSelector } from "@/components";
import { useWindowSize } from "@/hooks";
import { useEffect, useRef, useState } from "react";

import api from "@/lib/axios";
import { API_PATHS, API_BASE_URL } from "@/constants/api-paths";
import { useAuthStore } from "@/store/useAuthStore";

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

const INITIAL_IMAGE_HEIGHT_PX = 500;

export default function Home() {
  const [content, setContent] = useState<mainContents>("exam");

  //아래 코드는 이미지 전환 시 레이아웃 시프트를 방지하는 코드
  const [imageHeight, setImageHeight] = useState(INITIAL_IMAGE_HEIGHT_PX);
  const imageRef = useRef<HTMLImageElement>(null);
  const { windowWidth } = useWindowSize();

  useEffect(() => {
    if (imageRef.current) {
      setImageHeight(imageRef.current.height);
    }
  }, [windowWidth]);

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

          <div className="w-full" style={{ height: `${imageHeight}px` }}>
            <img
              key={content + "-image"}
              src={MAIN_IMAGES[content]}
              className="animate-fade-in-blur w-full"
              alt={content + "-image"}
              onLoad={(image) => {
                setImageHeight(image.currentTarget.height);
              }}
              ref={imageRef}
            />
          </div>
        </section>
        <img src={BannerImage} className="w-full" alt="banner-image" />
      </div>
    </div>
  );
}
