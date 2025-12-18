import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/api/auth";
import { useAuthStore } from "@/store/useAuthStore";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";
import type { LoginRequest } from "@/types/api-request-type/auth-request-type";
import type {
  LoginResponse,
  ErrorResponse,
} from "@/types/api-response-type/auth-response-type";

export const useLoginMutation = () => {
  const navigate = useNavigate();
  const { setAccessToken } = useAuthStore();

  return useMutation<LoginResponse, AxiosError<ErrorResponse>, LoginRequest>({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log("로그인 성공!", data);
      setAccessToken(data.accessToken);
      navigate("/");
    },
    onError: (error) => {
      console.log("로그인 실패...", error);
    },
  });
};
