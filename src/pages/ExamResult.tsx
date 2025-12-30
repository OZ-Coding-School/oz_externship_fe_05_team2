import { ExamHeaderContainer, ExamHeaderTitle } from "@/components";

function ExamResult() {
  return (
    <ExamHeaderContainer>
      <ExamHeaderTitle
        title="TypeScript 쪽지시험"
        subText="총 문항 수: 7ㆍ부정행위: 1회ㆍ응시시간: 30분ㆍ응시 결과 점수: 80점/100점"
      />
    </ExamHeaderContainer>
  );
}

export default ExamResult;
