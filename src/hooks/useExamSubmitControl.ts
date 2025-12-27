import { useCallback, useEffect, useRef } from "react";
import { useSubmitExam } from "@/hooks/api";
import type { Answer, QuestionType, QuestionTypeDto } from "@/types";
import type { ExamSubmitRequest } from "@/types/api-request-type/exam-request-types";
import { useNavigate } from "react-router";

function useExamSubmitControl(
  startedAt: number,
  cheatingCount: number,
  answers: Record<number, Answer>,
  shouldForceSubmit: boolean,
  deploymentId: number
) {
  const navigate = useNavigate();
  const { mutate: submitExam, isPending } = useSubmitExam({
    onSuccess: (data) => {
      const redirectUrl = `/exam/${deploymentId}/result/${data.submissionId}`;

      if (cheatingCount > 2) {
        setTimeout(() => navigate(redirectUrl), 3000);
        return;
      }
      navigate(redirectUrl);
    },
  });
  const hasSubmittedRef = useRef(false);

  const submit = useCallback(
    () => submitExam(buildSubmitPayload(startedAt, cheatingCount, answers)),
    [startedAt, cheatingCount, answers, submitExam]
  );

  useEffect(() => {
    if (!shouldForceSubmit) return;
    if (hasSubmittedRef.current) return;

    hasSubmittedRef.current = true;
    submit();
  }, [shouldForceSubmit, submit]);

  return { submit, isPending };
}

export default useExamSubmitControl;

const buildSubmitPayload = (
  startedAt: number,
  cheatingCount: number,
  localAnswers: Record<number, Answer>
): ExamSubmitRequest => ({
  started_at: new Date(startedAt).toISOString(),
  cheating_count: cheatingCount,
  answers: Object.entries(localAnswers).map(([questionId, answer]) => ({
    question_id: Number(questionId),
    type: QUESTION_TYPE_MAP[answer.type],
    submitted_answer: answer.submittedAnswer,
  })),
});

const QUESTION_TYPE_MAP: Record<QuestionType, QuestionTypeDto> = {
  fillBlank: "fill_blank",
  multipleChoice: "multiple_choice",
  ordering: "ordering",
  ox: "ox",
  shortAnswer: "short_answer",
  singleChoice: "single_choice",
};
