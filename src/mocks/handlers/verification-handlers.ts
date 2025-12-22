import { API_PATHS, MSW_BASE_URL } from "@/constants";
import { http, HttpResponse } from "msw";

const postSendEmail = http.post(
  `${MSW_BASE_URL}${API_PATHS.accounts.verification.sendEmail}`,
  async ({ request }) => {
    const { email } = (await request.clone().json()) as { email: string };

    if (!email) {
      return HttpResponse.json(
        {
          error_detail: {
            email: ["이 필드는 필수 항목입니다."],
          },
        },
        { status: 400 }
      );
    }

    return HttpResponse.json(
      { detail: "이메일 인증 코드가 전송되었습니다." },
      { status: 200 }
    );
  }
);

export const verificationHandlers = [postSendEmail];
