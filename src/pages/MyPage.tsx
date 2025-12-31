import { LinkButton } from "@/components/common";

import { ProfileSection } from "@/components/profile";

export default function MyPage() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">내 정보</h1>
        <LinkButton to={"/my-page/edit"}>수정하기</LinkButton>
      </div>

      <ProfileSection />
    </div>
  );
}
