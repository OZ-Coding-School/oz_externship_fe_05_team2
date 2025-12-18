import { http, HttpResponse, type PathParams } from "msw";
import { MOCK_LOGIN_RESPONSE } from "@/mocks/data/auth";
import type { LoginRequest } from "@/types/api-response-type/auth-request-type";
import type {
  LoginResponse,
  ErrorResponse,
} from "@/types/api-response-type/auth-response-type";

const loginHandler = http.post<
  PathParams,
  LoginRequest,
  LoginResponse | ErrorResponse
>("/api/v1/auth/login", async ({ request }) => {
  const requestBody = await request.json();
  const { email, password } = requestBody;

  if (email === "test@gmail.com" && password === "1234") {
    return HttpResponse.json(MOCK_LOGIN_RESPONSE, { status: 200 });
  }

  return HttpResponse.json(
    { message: "아이디 또는 비밀번호가 일치하지 않습니다." },
    { status: 401 }
  );
});

export const authHandlers = [loginHandler];
