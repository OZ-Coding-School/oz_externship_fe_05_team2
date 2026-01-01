import { Button, Input, LoadingUi } from "@/components/common";
import EditNickname from "@/components/profile/EditNickname";
import ImageInput from "@/components/profile/ImageInput";
import { useUserInformation } from "@/hooks/api";
import { cn, creatProfileImageUrl } from "@/lib/utils";
import {
  EditProfileSchema,
  type EditProfileSchemaType,
} from "@/schemas/authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function MyPageEdit() {
  const { data: user, isPending } = useUserInformation();

  const methods = useForm<EditProfileSchemaType>({
    resolver: zodResolver(EditProfileSchema),
  });

  const [, setImage] = useState<File | null>(null);

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

  return (
    <FormProvider {...methods}>
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

            <ImageInput setImage={setImage} defaultImageUrl={profileImageUrl} />

            <div className="flex w-full flex-col gap-5">
              <EditNickname defaultValue={nickname} />

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
    </FormProvider>
  );
}
