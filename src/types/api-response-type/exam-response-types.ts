import type { Exam, Question } from "@/types";

export interface ExamListResponse {
  page: number;
  has_next: boolean;
  results: Exam[];
}

export interface ExamQuestionListResponse {
  exam_id: number;
  exam_name: string;
  duration_time: number;
  elapsed_time: number;
  cheating_count: number;
  questions: Question[];
}
