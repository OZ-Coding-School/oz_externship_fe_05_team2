import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Input, Button } from "@/components/common";
import type { SignupSchemaType } from "@/schemas/authSchemas";

export default function PhoneVerification() {
  const { register, watch, setFocus } = useFormContext<SignupSchemaType>();

  const [isPhoneSent, setIsPhoneSent] = useState(false);

  const values = watch();

  const handlePhoneAutoAfter = (
    e: React.ChangeEvent<HTMLInputElement>,
    nextField?: keyof SignupSchemaType,
    length: number = 4
  ) => {
    const { value } = e.target;
    if (value.length >= length && nextField) {
      setFocus(nextField);
    }
  };

  return (
    <section className="space-y-2">
      <label className="text-sm font-semibold">
        휴대전화<span className="text-red-500">*</span>
      </label>

      <div className="flex items-center gap-2">
        <Input
          className="w-20"
          maxLength={3}
          {...register("phone1")}
          onChange={(e) => {
            register("phone1").onChange(e);
            handlePhoneAutoAfter(e, "phone2", 3);
          }}
          placeholder="010"
        />
        <span>-</span>
        <Input
          className="flex-1"
          maxLength={4}
          {...register("phone2")}
          onChange={(e) => {
            register("phone2").onChange(e);
            handlePhoneAutoAfter(e, "phone3", 4);
          }}
        />
        <span>-</span>
        <Input className="flex-1" maxLength={4} {...register("phone3")} />

        <Button
          type="button"
          variant="outline"
          className="h-12 w-28 p-0"
          disabled={!values.phone1 || !values.phone2 || !values.phone3}
          onClick={() => setIsPhoneSent(true)}
        >
          인증번호전송
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Input className="flex-1" placeholder="인증번호 6자리를 입력해주세요" />
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
  );
}
