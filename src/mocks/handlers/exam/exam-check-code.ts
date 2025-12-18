import { API_PATHS, MSW_BASE_URL } from "@/constants";
import { http, HttpResponse } from "msw";

const checkExamCode = http.post(
  `${MSW_BASE_URL}${API_PATHS.exams.deployments.base}/:deploymentId/check-code`,
  async ({ request }) => {
    const { code } = (await request.json()) as { code: string };

    if (code === "111111") return HttpResponse.json(null, { status: 204 });
    return HttpResponse.json(
      { error_detail: "응시 코드가 일치하지 않습니다. " },
      { status: 400 }
    );
  }
);

export const examCheckCodeHandlers = [checkExamCode];
