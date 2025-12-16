import { API_PATHS, MSW_BASE_URL } from "@/constants";
import { http, HttpResponse } from "msw";
import { getExamListResponse } from "@/mocks/data/exam";

const getExamList = http.get(
  `${MSW_BASE_URL}${API_PATHS.exams.deployments.base}`,
  ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page"));

    return HttpResponse.json(getExamListResponse(page));
  }
);

export const examListHandlers = [getExamList];
