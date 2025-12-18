import { API_PATHS, MSW_BASE_URL } from "@/constants";
import { http, HttpResponse } from "msw";
import { getExamListResponse } from "@/mocks/data/exam";

const getExamList = http.get(
  `${MSW_BASE_URL}${API_PATHS.exams.deployments.base}`,
  ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page"));

    return HttpResponse.json(getExamListResponse(page));

    // 에러 테스트 코드
    // return HttpResponse.json(
    //   { error_detail: "자격 인증 데이터가 제공되지 않았습니다." },
    //   { status: 401 }
    // );
  }
);

export const examListHandlers = [getExamList];
