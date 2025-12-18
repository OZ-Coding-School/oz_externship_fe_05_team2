import { API_PATHS, MSW_BASE_URL } from "@/constants";
import { http, HttpResponse } from "msw";
import { examList } from "@/mocks/data/exam-data";
import type { ExamListResponse } from "@/types";

const PAGE_SIZE = 5;
const LAST_PAGE = 10;
const getExamListResponse = (page: number): ExamListResponse => {
  const results = Array.from({ length: PAGE_SIZE }, (_, index) => {
    const exam = examList[index % examList.length];

    return {
      ...exam,
      id: Date.now() + exam.id, // 유니크한 임의의 아이디 생성
    };
  });

  return {
    page,
    has_next: page < LAST_PAGE,
    results,
  };
};

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

export const examHandlers = [getExamList, checkExamCode];
