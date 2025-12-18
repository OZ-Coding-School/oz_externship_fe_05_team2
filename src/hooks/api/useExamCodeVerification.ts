import { checkExamCode } from "@/api/exams";
import axios from "axios";
import { useState } from "react";

function useExamCodeVerification() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{ message: string } | null>(null);

  const verify = async (deploymentId: number, code: string) => {
    try {
      setIsLoading(true);
      setError(null);
      await checkExamCode(deploymentId, code);

      return true;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.error_detail ??
          error.message ??
          "인증번호 검증에 실패했습니다.";

        setError({ message });
        return false;
      }

      setError({ message: "알 수 없는 오류가 발생했습니다." });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, verify };
}

export default useExamCodeVerification;
