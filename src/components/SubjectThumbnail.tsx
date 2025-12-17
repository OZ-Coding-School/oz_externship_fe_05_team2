import { EXAM_SUBJECT_ICON_MAP } from "@/constants";

interface SubjectThumbnailProps {
  thumbnailUrl: string | null;
  subjectTitle: string;
}

function SubjectThumbnail({
  thumbnailUrl,
  subjectTitle,
}: SubjectThumbnailProps) {
  const fallbackIconSrc = getSubjectIconSrc(subjectTitle);

  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const image = event.currentTarget;
    image.onerror = null;
    image.src = fallbackIconSrc;
  };

  return (
    <div className="bg-primary-100 flex size-12 items-center justify-center">
      <img
        src={thumbnailUrl ?? fallbackIconSrc}
        alt={`${subjectTitle} 로고`}
        onError={handleImageError}
        className="w-7"
      />
    </div>
  );
}

export default SubjectThumbnail;

/**
 * 과목 default 아이콘이 존재하지 않음
 * icon map에서도 아이콘을 찾지 못할 경우,
 * 이미지 onError 무한 루프 방지를 위해 빈 문자열 반환
 */
const getSubjectIconSrc = (title: string) =>
  EXAM_SUBJECT_ICON_MAP[title.replace(/\s/g, "").toLowerCase()] ?? "";
