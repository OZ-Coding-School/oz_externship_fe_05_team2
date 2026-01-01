import { UserIcon } from "@/assets/icons/interface-icons";
import { Button, Input, LoadingUi } from "@/components/common";
import { useToast } from "@/hooks";
import { useUserInformation } from "@/hooks/api";
import { cn, creatProfileImageUrl } from "@/lib/utils";
import { CameraIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function MyPageEdit() {
  const { data: user, isPending } = useUserInformation();

  const [imageError, setImageError] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);

  const { triggerToast } = useToast();

  useEffect(() => {
    return () => {
      if (previewImage) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);

  if (isPending) {
    return (
      <div className="flex items-center justify-center">
        <LoadingUi />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center">
        유저 데이터를 불러오는데 문제가 발생했습니다. 잠시후 다시 시도해주세요.
      </div>
    );
  }

  const {
    nickname,
    email,
    name,
    phone_number: phoneNumber,
    gender,
    birthday,
    id: userId,
  } = user;

  const profileImageUrl = creatProfileImageUrl(userId);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
    const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png"];

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      triggerToast({
        variant: "small",
        text: "이미지 파일은 png, jpg 형식만 가능합니다.",
        status: "danger",
      });
      e.target.value = "";
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      triggerToast({
        variant: "small",
        text: "이미지 파일 크기는 5MB를 초과할 수 없습니다.",
        status: "danger",
      });
      e.target.value = "";
      return;
    }

    const newPreviewUrl = URL.createObjectURL(file);
    setPreviewImage(newPreviewUrl);
    setImage(file);
  };

  return (
    <form className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">내 정보</h1>
        <Button type="submit">저장하기</Button>
      </div>

      <section className="flex flex-col items-center gap-20 rounded-lg border p-11">
        {/* 프로필 */}
        <div className="flex w-full flex-col items-center gap-10">
          <div className="flex w-full flex-col items-center gap-2">
            <span className="text-primary-600 w-full text-xl font-semibold">
              프로필
            </span>
            <hr className="w-full" />
          </div>

          <div className="relative flex items-center justify-center">
            <img
              src={
                previewImage ||
                (imageError || !profileImageUrl ? UserIcon : profileImageUrl)
              }
              alt="프로필 이미지"
              width={184}
              height={184}
              className="aspect-square h-full max-h-44 w-full max-w-44 rounded-full object-cover object-center"
              onError={() => {
                if (!previewImage) {
                  setImageError(true);
                }
              }}
            />

            <label className="absolute right-2 bottom-2 flex cursor-pointer items-center justify-center rounded-full border-3 border-white bg-neutral-400 p-1.5 transition-colors hover:bg-neutral-500">
              <CameraIcon className="text-white" />
              <input
                type="file"
                className="hidden"
                accept="image/png, image/jpeg"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div className="flex w-full flex-col gap-5">
            <div className="flex w-full flex-col gap-2">
              <label>닉네임</label>
              <div className="flex w-full items-center gap-2">
                <Input defaultValue={nickname} className="flex-1" />
                <Button
                  className="flex h-11 items-center justify-center"
                  variant={"outline"}
                  type="button"
                >
                  중복확인
                </Button>
              </div>
            </div>

            <div className="flex w-full flex-col gap-2">
              <label>이메일</label>
              <Input defaultValue={email} disabled />
            </div>
          </div>
        </div>

        {/* 개인정보 */}
        <div className="flex w-full flex-col items-center gap-10">
          <div className="flex w-full flex-col items-center gap-2">
            <span className="text-primary-600 w-full text-xl font-semibold">
              개인정보
            </span>
            <hr className="w-full" />
          </div>

          <div className="flex w-full flex-col gap-5">
            <div className="flex w-full flex-col gap-2">
              <label>이름</label>
              <Input defaultValue={name} />
            </div>

            <div className="flex w-full flex-col gap-2">
              <label>휴대전화</label>
              <div className="flex w-full items-center gap-2">
                <Input
                  defaultValue={`${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7)}`}
                  className="flex-1"
                />
                <Button
                  className="flex h-11 items-center justify-center"
                  variant={"outline"}
                  type="button"
                >
                  인증번호 전송
                </Button>
              </div>
            </div>

            <div className="flex w-full flex-col gap-2">
              <label>성별</label>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className={cn(
                    "h-10 w-18 rounded-4xl p-0 transition-colors",
                    gender !== "M" &&
                      "border-neutral-400 bg-neutral-200 text-neutral-700"
                  )}
                >
                  남
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className={cn(
                    "ml-2 h-10 w-18 rounded-4xl p-0 transition-colors",
                    gender !== "F" &&
                      "border-neutral-400 bg-neutral-200 text-neutral-700"
                  )}
                >
                  여
                </Button>
              </div>
            </div>

            <div className="flex w-full flex-col gap-2">
              <label>생년월일</label>
              <Input defaultValue={birthday} />
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}
