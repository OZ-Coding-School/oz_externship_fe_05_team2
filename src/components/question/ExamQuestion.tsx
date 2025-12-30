import type { Question } from "@/types";
import { EXAM_QUESTION_CONTENT_MAP } from "@/components/question/exam-question-content-map";
import { QuestionHeader } from "@/components";

interface ExamQuestionProps {
  question: Question;
  value: string | string[] | null;
  onChange: (
    questionId: number,
    submittedAnswer: string | string[] | null
  ) => void;
}

function ExamQuestion({ question, value, onChange }: ExamQuestionProps) {
  const ContentComponent = EXAM_QUESTION_CONTENT_MAP[question.type];

  return (
    <li>
      <QuestionHeader
        questionNumber={question.number}
        question={question.question}
        point={question.point}
        type={question.type}
      />
      <div className="pt-5 pl-7">
        <ContentComponent
          question={question}
          value={value}
          onChange={onChange}
        />
      </div>
    </li>
  );
}

export default ExamQuestion;
