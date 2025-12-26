import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { loginUser, getUserMe } from "@/api/auth";
import { useAuthStore } from "@/store/useAuthStore";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";
import type { LoginRequest } from "@/types/api-request-type/auth-request-type";
import type {
  LoginResponse,
  ErrorResponse,
  ExpiredAccountErrorResponse,
} from "@/types/api-response-type/auth-response-type";

type LoginMutationOptions = UseMutationOptions<
  LoginResponse,
  AxiosError<ErrorResponse | ExpiredAccountErrorResponse>,
  LoginRequest
>;

export const useLoginMutation = (options?: LoginMutationOptions) => {
  const navigate = useNavigate();
  const { setAccessToken, setUserInfo } = useAuthStore();

  return useMutation({
    mutationFn: loginUser,
    ...options,
    onSuccess: async (data, variables, context) => {
      const { access_token: accessToken } = data;
      console.log("로그인 성공!", data);

      setAccessToken(accessToken);

      try {
        const userInfo = await getUserMe();
        setUserInfo(userInfo);

        console.log("유저 정보 저장 완료:", userInfo);
        navigate("/");
      } catch (error) {
        console.error("유저 정보를 가져오는 중 에러 발생:", error);
      }

      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
  });
};
