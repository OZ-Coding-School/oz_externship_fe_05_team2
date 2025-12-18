import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/api/auth";
import { useAuthStore } from "@/store/useAuthStore";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";
import { type LoginSchemaType } from "@/schemas/authSchemas";

export interface LoginResponse {
  accessToken: string;
  // user?: {
  //   nickname: string;
  //   email: string;
  // };
}

interface ErrorResponse {
  message: string;
}

export const useLoginMutation = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  return useMutation<LoginResponse, AxiosError<ErrorResponse>, LoginSchemaType>(
    {
      mutationFn: loginUser,
      onSuccess: (data) => {
        console.log("로그인 성공!", data);
        login(data.accessToken);
        navigate("/");
      },
      onError: (error) => {
        console.log("로그인 실패...", error);
      },
    }
  );
};
