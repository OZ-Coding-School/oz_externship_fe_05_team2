import { API_PATHS } from "@/constants";
import { API_BASE_URL } from "@/constants/api-paths";
import { api } from "@/lib";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import type { AxiosError } from "axios";

type RestoreAccountMutationOptions = Omit<
  UseMutationOptions<unknown, AxiosError, { code: string; email: string }>,
  "mutateFn"
>;

export default function useRestoreAccount(
  options?: RestoreAccountMutationOptions
) {
  return useMutation({
    mutationFn: async ({ code, email }) => {
      await api.patch(`${API_BASE_URL}${API_PATHS.accounts.restore}`, {
        code,
        email,
      });
    },
    ...options,
  });
}
