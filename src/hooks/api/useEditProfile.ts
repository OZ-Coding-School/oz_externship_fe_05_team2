import { API_BASE_URL, API_PATHS } from "@/constants/api-paths";
import { api } from "@/lib";
import type { EditProfileSchemaType } from "@/schemas/authSchemas";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import type { AxiosError } from "axios";

type EditNicknameMutationOptions = Omit<
  UseMutationOptions<unknown, AxiosError, EditProfileSchemaType>,
  "mutationFn"
>;

export default function useEditProfile(options: EditNicknameMutationOptions) {
  return useMutation({
    mutationFn: async ({ name, nickname, gender, birthday }) => {
      await api.patch(`${API_BASE_URL}${API_PATHS.accounts.me}`, {
        name,
        nickname,
        gender,
        birthday,
      });
    },
    ...options,
  });
}
