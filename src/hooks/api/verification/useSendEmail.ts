import { API_PATHS, MSW_BASE_URL } from "@/constants";
import { API_BASE_URL } from "@/constants/api-paths";
import { api } from "@/lib";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import type { AxiosError } from "axios";

type SendEmailMutationOptons = Omit<
  UseMutationOptions<unknown, AxiosError, { email: string }>,
  "mutateFn"
>;

export default function useSendEmail(options?: SendEmailMutationOptons) {
  return useMutation({
    mutationFn: async ({ email }) => {
      await api.post(
        `${API_BASE_URL}${API_PATHS.accounts.verification.sendEmail}`,
        {
          email,
        }
      );
    },
    ...options,
  });
}
