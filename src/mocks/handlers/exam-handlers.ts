import { API_PATHS, MSW_BASE_URL } from "@/constants";
import { http, HttpResponse } from "msw";
import { examList, questionList } from "@/mocks/data/exam-data";
import type {
  ExamListResponse,
  ExamQuestionListResponse,
} from "@/types/api-response-type/exam-response-types";

const PAGE_SIZE = 5;
const LAST_PAGE = 10;
const getExamListResponse = (page: number): ExamListResponse => {
  const results = Array.from({ length: PAGE_SIZE }, (_, index) => {
    const exam = examList[index % examList.length];
    const id = page === 1 ? index : index + PAGE_SIZE * page;

    return {
      ...exam,
      id,
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

const getExamQuestionList = http.get(
  `${MSW_BASE_URL}${API_PATHS.exams.deployments.base}/:deploymentId`,
  ({ params }) => {
    const { deploymentId } = params;

    if (deploymentId === "1")
      return HttpResponse.json<ExamQuestionListResponse>({
        exam_id: 1,
        exam_name: "TypeScript 기본 문법 테스트",
        duration_time: 30,
        elapsed_time: 0,
        cheating_count: 0,
        questions: questionList,
      });
    return HttpResponse.json(
      { error_detail: "해당 시험 정보를 찾을 수 없습니다." },
      { status: 404 }
    );
  }
);

export const examHandlers = [getExamList, checkExamCode, getExamQuestionList];
