import { API_PATHS, MSW_BASE_URL } from "@/constants";
import { api } from "@/lib";
import type {
  ExamListResponse,
  ExamQuestionListResponse,
} from "@/types/api-response-type/exam-response-types";

export const checkExamCode = (
  deploymentId: number,
  code: string
): Promise<void> =>
  api.post(
    `${MSW_BASE_URL}${API_PATHS.exams.deployments.checkCode(deploymentId)}`,
    { code }
  );

export const getExamList = async (
  page: number = 1
): Promise<ExamListResponse> => {
  const response = await api.get(
    `${MSW_BASE_URL}${API_PATHS.exams.deployments.list(page)}`
  );

  return response.data;
};

export const getExamQuestionList = async (
  deploymentId: number
): Promise<ExamQuestionListResponse> => {
  const response = await api.get(
    `${MSW_BASE_URL}${API_PATHS.exams.deployments.questionList(deploymentId)}`
  );

  return response.data;
};
