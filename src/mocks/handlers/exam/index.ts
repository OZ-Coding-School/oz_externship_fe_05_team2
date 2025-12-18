import { examListHandlers } from "@/mocks/handlers/exam/exam-list";
import { examCheckCodeHandlers } from "@/mocks/handlers/exam/exam-check-code";

export const examHandlers = [...examListHandlers, ...examCheckCodeHandlers];
