export type ExamStatus = "done" | "pending";

export type ExamCategory = "all" | ExamStatus;

export type ExamCategoryOption = { label: string; value: ExamCategory };
