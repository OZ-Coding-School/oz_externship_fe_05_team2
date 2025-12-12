import {
  InstagramIcon,
  NaverBlogIcon,
  SnsDefaultIcon,
  YoutubeIcon,
} from "@/assets/icons/sns-icons";
import type {
  FooterLinkItem,
  FooterSnsLinkItem,
} from "@/components/layout/footer";

export const CAMP_LIST: FooterLinkItem[] = [
  { label: "초격차캠프", link: "" },
  { label: "사업개발캠프", link: "" },
  { label: "프로덕트 디자이너 캠프", link: "" },
];

export const INFO_LIST: FooterLinkItem[] = [
  { label: "개인정보처리방침", link: "" },
  { label: "이용약관", link: "" },
  { label: "멘토링&강사지원", link: "" },
];

export const SNS_LIST: FooterSnsLinkItem[] = [
  { icon: SnsDefaultIcon, altText: "외부 sns 링크", link: "" },
  { icon: NaverBlogIcon, altText: "네이버 블로그 링크", link: "" },
  { icon: YoutubeIcon, altText: "유튜브 링크", link: "" },
  { icon: InstagramIcon, altText: "인스타그램 링크", link: "" },
];
