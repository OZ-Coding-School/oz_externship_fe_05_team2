import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Input, Button } from "@/components/common";
import { useNicknameCheck } from "@/hooks/api";
import { cn } from "@/lib";

export default function NicknameField() {
  const {
    register,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();
  const nicknameValue = watch("nickname");

  const [isVerified, setIsVerified] = useState(false);
  const { mutate: checkNickname, isPending } = useNicknameCheck();

  useEffect(() => {
    setIsVerified(false);
    if (nicknameValue) clearErrors("nickname");
  }, [nicknameValue, clearErrors]);

  const handleCheck = () => {
    if (!nicknameValue || errors.nickname) return;

    checkNickname(nicknameValue, {
      onSuccess: (data) => {
        if (data.available) {
          setIsVerified(true);
          clearErrors("nickname");
        } else {
          setError("nickname", {
            type: "manual",
            message: data.detail || "이미 사용 중인 닉네임입니다.",
          });
        }
      },
      onError: (error) => {
        const serverMessage =
          error.response?.data?.error_detail ||
          "중복 확인 중 오류가 발생했습니다.";

        setError("nickname", {
          type: "manual",
          message: serverMessage,
        });
      },
    });
  };

  const getInputVariant = () => {
    if (errors.nickname) return "danger";
    if (isVerified) return "success";
  };

  return (
    <section>
      <label className="mt-8 mb-1 block text-sm">
        닉네임<span className="text-red-500">*</span>
      </label>
      <div className="flex items-start gap-2">
        <Input
          className="flex-1"
          {...register("nickname")}
          variant={getInputVariant()}
          errorMessage={errors.nickname?.message as string}
          placeholder="닉네임을 입력해주세요"
        />
        <Button
          type="button"
          variant="outline"
          className={cn("h-12 w-28 p-0")}
          disabled={!nicknameValue || !!errors.nickname || isPending}
          onClick={handleCheck}
        >
          {isPending ? "확인 중..." : isVerified ? "사용가능" : "중복확인"}
        </Button>
      </div>
    </section>
  );
}
