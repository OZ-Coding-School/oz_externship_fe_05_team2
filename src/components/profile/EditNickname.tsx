import { Button, Input } from "@/components/common";
import { useToast } from "@/hooks";
import { useNicknameCheck } from "@/hooks/api";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

interface EditNicknameProps {
  defaultValue: string;
}

export default function EditNickname({ defaultValue }: EditNicknameProps) {
  const { register, getValues } = useFormContext();
  const { triggerToast } = useToast();
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);

  const { mutate: checkNickname, isPending: isCheckingNickname } =
    useNicknameCheck({
      onSuccess: () => {
        triggerToast({
          variant: "small",
          status: "success",
          text: "사용가능한 닉네임입니다.",
        });
        setIsNicknameChecked(true);
      },
      onError: (error) => {
        if (error.status === 409) {
          triggerToast({
            variant: "small",
            status: "danger",
            text: "이미 사용중인 닉네임입니다.",
          });
        } else {
          triggerToast({
            variant: "small",
            status: "danger",
            text: "알 수 없는 에러가 발생했습니다. 잠시후 다시 시도해주세요.",
          });
        }
      },
    });

  return (
    <div className="flex w-full flex-col gap-2">
      <label>닉네임</label>
      <div className="flex w-full items-center gap-2">
        <Input
          defaultValue={defaultValue}
          className="flex-1"
          disabled={isNicknameChecked}
          {...register("name")}
        />
        <Button
          className="flex h-11 items-center justify-center"
          variant={"outline"}
          type="button"
          disabled={isNicknameChecked || isCheckingNickname}
          onClick={() => {
            checkNickname(getValues("name"));
          }}
        >
          {isCheckingNickname ? "로딩중" : "중복확인"}
        </Button>
      </div>
    </div>
  );
}
