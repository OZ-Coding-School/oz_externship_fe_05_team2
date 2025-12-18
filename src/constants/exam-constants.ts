import {
  AwsIcon,
  CssIcon,
  DatabaseIcon,
  DjangoIcon,
  FastapiIcon,
  FlaskIcon,
  GithubIcon,
  HtmlIcon,
  JavascriptIcon,
  NodejsIcon,
  PythonIcon,
  ReactIcon,
  ReactNativeIcon,
  TypescriptIcon,
} from "@/assets/icons/subject-icons";
import type { ExamCategoryOption } from "@/types";

export const EXAM_CATEGORY_OPTIONS: ExamCategoryOption[] = [
  { label: "전체보기", value: "all" },
  { label: "응시완료", value: "done" },
  { label: "미응시", value: "pending" },
];

export const EXAM_SUBJECT_ICON_MAP: Record<string, string> = {
  html: HtmlIcon,
  css: CssIcon,
  javascript: JavascriptIcon,
  github: GithubIcon,
  react: ReactIcon,
  nodejs: NodejsIcon,
  database: DatabaseIcon,
  typescript: TypescriptIcon,
  aws: AwsIcon,
  reactnative: ReactNativeIcon,
  python: PythonIcon,
  django: DjangoIcon,
  fastapi: FastapiIcon,
  flask: FlaskIcon,
};
