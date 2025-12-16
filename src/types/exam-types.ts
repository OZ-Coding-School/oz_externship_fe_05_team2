export type ExamStatus = "done" | "pending";

export type ExamCategory = "all" | ExamStatus;

export type ExamCategoryOption = { label: string; value: ExamCategory };

export interface Exam {
  id: number;
  exam: {
    id: number;
    title: string;
    thumbnail_img_url: string;
    subject: {
      id: number;
      title: string;
      thumbnail_img_url: string | null;
    };
  };
  question_count: number;
  total_score: number;
  exam_info: {
    status: string;
    score: number | null;
    correct_answer_count: number | null;
  };
  is_done: boolean;
  duration_time: number;
}
