import { API_PATHS, MSW_BASE_URL } from "@/constants";
import { api } from "@/lib";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import type { AxiosError } from "axios";

type ChangePassordOptions = Omit<
  UseMutationOptions<
    unknown,
    AxiosError,
    { oldPassword: string; newPassword: string }
  >,
  "mutationFn"
>;

export default function useChangePassord(options: ChangePassordOptions) {
  return useMutation({
    mutationFn: async ({ newPassword, oldPassword }) => {
      await api.post(`${MSW_BASE_URL}${API_PATHS.accounts.changePassword}`, {
        old_password: oldPassword,
        new_password: newPassword,
      });
    },
    ...options,
  });
}
