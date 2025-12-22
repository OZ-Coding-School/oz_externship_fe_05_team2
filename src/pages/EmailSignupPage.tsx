import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HeaderLogo } from "@/assets/images/logo-images";
import { Button, Input, LinkButton, Password } from "@/components/common";
import { SignupSchema, type SignupSchemaType } from "@/schemas/authSchemas";
import { cn } from "@/lib";

export default function EmailSignupPage() {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isPhoneSent, setIsPhoneSent] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(SignupSchema),
    mode: "onChange",
    defaultValues: {
      gender: "M",
    },
  });

  const nicknameValue = watch("nickname");
  const emailValue = watch("email");
  const genderValue = watch("gender");

  const [phone, setPhone] = useState({ p1: "010", p2: "", p3: "" });
  const isPhoneFilled =
    phone.p1 && phone.p2.length >= 3 && phone.p3.length >= 4;

  const onSubmit = (data: SignupSchemaType) => {
    console.log("회원가입 데이터:", data);
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col items-center px-4 py-12">
      <div className="mb-2 text-center">
        <p className="text-lg font-bold text-gray-600">
          마법같이 빠르게 성장시켜줄
        </p>
        <img src={HeaderLogo} alt="오즈코딩스쿨" className="mx-auto my-2 h-6" />
      </div>

      <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <section className="space-y-4">
          <h1 className="mt-6 text-base font-bold text-gray-700">회원가입</h1>

          <div>
            <label className="mb-1 block text-sm">
              이름<span className="text-red-500">*</span>
            </label>
            <Input
              {...register("name")}
              errorMessage={errors.name?.message}
              placeholder="이름을 입력해주세요"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm">
              닉네임<span className="text-red-500">*</span>
            </label>
            <div className="flex items-start gap-2">
              <Input
                className="flex-1"
                {...register("nickname")}
                errorMessage={errors.nickname?.message}
                placeholder="닉네임을 입력해주세요"
              />
              <Button
                type="button"
                variant="outline"
                className="h-12 w-28 p-0"
                disabled={!nicknameValue}
              >
                중복확인
              </Button>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm">
              생년월일<span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              placeholder="8자리 숫자로 입력해주세요 (ex. 20001110)"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm">
              성별<span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                className={cn(
                  "h-10 w-18 rounded-4xl p-0 transition-colors",
                  genderValue !== "M" &&
                    "border-neutral-400 bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
                )}
                onClick={() => setValue("gender", "M")}
              >
                남
              </Button>

              <Button
                type="button"
                variant="outline"
                className={cn(
                  "ml-2 h-10 w-18 rounded-4xl p-0 transition-colors",
                  genderValue !== "F" &&
                    "border-neutral-400 bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
                )}
                onClick={() => setValue("gender", "F")}
              >
                여
              </Button>
            </div>
            {errors.gender && (
              <p className="mt-1 text-xs text-red-500">
                {errors.gender.message}
              </p>
            )}
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <label className="text-sm">
              이메일<span className="text-red-500">*</span>
              <span className="ml-2 text-xs font-bold text-violet-600">
                로그인 시 아이디로 사용합니다.
              </span>
            </label>
            <div className="flex items-start gap-2">
              <Input
                className="flex-1"
                {...register("email")}
                errorMessage={errors.email?.message}
                placeholder="ozcoding@naver.com"
              />
              <Button
                type="button"
                variant="outline"
                className="h-12 w-28 p-0"
                disabled={!!errors.email || !emailValue}
                onClick={() => setIsEmailSent(true)}
              >
                인증코드전송
              </Button>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Input className="flex-1" placeholder="인증코드를 입력해주세요" />
              <Button
                type="button"
                variant="outline"
                className="h-12 w-28 p-0"
                disabled={!isEmailSent}
              >
                인증코드확인
              </Button>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <label className="text-sm">
            휴대전화<span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-2">
            <Input
              className="w-20 text-center"
              value={phone.p1}
              onChange={(e) => setPhone({ ...phone, p1: e.target.value })}
            />
            <span>-</span>
            <Input
              className="flex-1 text-center"
              onChange={(e) => setPhone({ ...phone, p2: e.target.value })}
            />
            <span>-</span>
            <Input
              className="flex-1 text-center"
              onChange={(e) => setPhone({ ...phone, p3: e.target.value })}
            />
            <Button
              type="button"
              variant="outline"
              className="h-12 w-28 p-0"
              disabled={!isPhoneFilled}
              onClick={() => setIsPhoneSent(true)}
            >
              인증번호전송
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Input
              className="flex-1"
              placeholder="인증번호 6자리를 입력해주세요"
            />
            <Button
              type="button"
              variant="outline"
              className="h-12 w-28 p-0"
              disabled={!isPhoneSent}
            >
              인증번호확인
            </Button>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="mb-1 block text-sm">
              비밀번호<span className="text-red-500">*</span>
              <span className="ml-2 text-xs font-bold text-violet-600">
                8~15자의 영문 대소문자, 숫자, 특수문자 포함
              </span>
            </label>
            <Password placeholder="비밀번호를 입력해주세요" />
            <Password
              placeholder="비밀번호를 다시 입력해주세요"
              className="mt-2"
            />
          </div>
        </section>

        <Button type="button" className="mt-2 w-full">
          가입하기
        </Button>
      </form>
    </div>
  );
}
