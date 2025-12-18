import { API_PATHS, MSW_BASE_URL } from "@/constants";
import { api } from "@/lib";

export const checkExamCode = (
  deploymentId: number,
  code: string
): Promise<void> =>
  api.post(
    `${MSW_BASE_URL}${API_PATHS.exams.deployments.checkCode(deploymentId)}`,
    { code }
  );
