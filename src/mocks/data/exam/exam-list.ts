import type { Exam, ExamListResponse } from "@/types";

const PAGE_SIZE = 5;
const LAST_PAGE = 10;
const EXAM_LIST: Exam[] = [
  {
    id: 101,
    submission_id: 333,
    exam: {
      id: 1,
      title: "HTML 기초",
      thumbnail_img_url: "default_img_url",
      subject: {
        id: 10,
        title: "HTML",
        thumbnail_img_url: "https://cdn.ozcoding/html.png",
      },
    },
    question_count: 10,
    total_score: 100,
    exam_info: {
      status: "done",
      score: 80,
      correct_answer_count: 8,
    },
    is_done: true,
    duration_time: 20,
  },
  {
    id: 102,
    submission_id: null,
    exam: {
      id: 2,
      title: "AWS 심화",
      thumbnail_img_url: "default_img_url",
      subject: {
        id: 11,
        title: "AWS",
        thumbnail_img_url: "https://cdn.ozcoding/aws.png",
      },
    },
    question_count: 10,
    total_score: 100,
    exam_info: {
      status: "pending",
      score: null,
      correct_answer_count: null,
    },
    is_done: false,
    duration_time: 20,
  },
  {
    id: 103,
    submission_id: null,
    exam: {
      id: 3,
      title: "Github 응용",
      thumbnail_img_url: "default_img_url",
      subject: {
        id: 12,
        title: "github",
        thumbnail_img_url: "https://cdn.ozcoding/github.png",
      },
    },
    question_count: 10,
    total_score: 100,
    exam_info: {
      status: "pending",
      score: null,
      correct_answer_count: null,
    },
    is_done: false,
    duration_time: 20,
  },
  {
    id: 104,
    submission_id: null,
    exam: {
      id: 4,
      title: "React 심화",
      thumbnail_img_url: "default_img_url",
      subject: {
        id: 13,
        title: "React",
        thumbnail_img_url: "https://cdn.ozcoding/react.png",
      },
    },
    question_count: 10,
    total_score: 100,
    exam_info: {
      status: "pending",
      score: null,
      correct_answer_count: null,
    },
    is_done: false,
    duration_time: 20,
  },
  {
    id: 105,
    submission_id: null,
    exam: {
      id: 5,
      title: "JavaScript 응용",
      thumbnail_img_url: "default_img_url",
      subject: {
        id: 14,
        title: "Javascript",
        thumbnail_img_url: "https://cdn.ozcoding/js.png",
      },
    },
    question_count: 10,
    total_score: 100,
    exam_info: {
      status: "pending",
      score: null,
      correct_answer_count: null,
    },
    is_done: false,
    duration_time: 20,
  },
];

export const getExamListResponse = (page: number): ExamListResponse => {
  const results = Array.from({ length: PAGE_SIZE }, (_, index) => {
    const exam = EXAM_LIST[index % EXAM_LIST.length];

    return {
      ...exam,
      id: Date.now() + exam.id, // 유니크한 임의의 아이디 생성
    };
  });

  return {
    page,
    has_next: page < LAST_PAGE,
    results,
  };
};
