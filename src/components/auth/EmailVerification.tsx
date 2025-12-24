import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Input, Button } from "@/components/common";
import type { SignupSchemaType } from "@/schemas/authSchemas";

export default function EmailVerification() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<SignupSchemaType>();

  const [isEmailSent, setIsEmailSent] = useState(false);

  const emailValue = watch("email");

  return (
    <section className="space-y-2">
      <div className="flex items-center">
        <label htmlFor="email" className="text-sm">
          이메일<span className="text-red-500">*</span>
        </label>
        <span className="ml-2 text-xs font-bold text-violet-600">
          로그인 시 아이디로 사용합니다.
        </span>
      </div>

      <div className="flex items-start gap-2">
        <Input
          id="email"
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
    </section>
  );
}
