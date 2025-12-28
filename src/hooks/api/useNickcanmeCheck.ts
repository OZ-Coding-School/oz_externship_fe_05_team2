import { useMutation } from "@tanstack/react-query";
import { checkNickname } from "@/api/auth";
import { AxiosError } from "axios";

export const useNicknameCheck = () => {
  return useMutation<
    { available: boolean; detail?: string },
    AxiosError<{ error_detail: string }>,
    string
  >({
    mutationFn: (nickname: string) => checkNickname(nickname),
  });
};
