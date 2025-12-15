import { FooterLogoImage } from "@/assets/images/logo-images";
import { CAMP_LIST, INFO_LIST, SNS_LIST } from "@/constants";
import { cn } from "@/lib/utils";

interface FooterProps {
  contentContainerMaxWidth?: number;
  className?: string;
}

function Footer({
  contentContainerMaxWidth = 1200,
  className = "",
}: FooterProps) {
  return (
    <footer className={cn("w-full bg-neutral-800 py-20", className)}>
      <div style={{ maxWidth: contentContainerMaxWidth }} className="mx-auto">
        <img src={FooterLogoImage} alt="오즈코딩스쿨 로고" className="w-40" />
        <ul className="grid grid-cols-1 gap-3 pt-10 text-lg font-light text-neutral-300">
          {CAMP_LIST.map((item) => (
            <li key={item.link}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
        <hr className="my-10 border-neutral-500" />
        <div className="mb-5 flex items-center justify-between">
          <ul className="flex gap-7 font-light text-neutral-200 underline underline-offset-2">
            {INFO_LIST.map((item) => (
              <li key={item.link}>
                <a href={item.link}>{item.label}</a>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-3">
            {SNS_LIST.map((item) => (
              <li key={item.link}>
                <a href={item.link}>
                  <img src={item.icon} alt={item.altText} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="grid grid-rows-2 gap-0.5 font-light text-neutral-400">
          <span>
            대표자 : 이한별 | 사업자 등록번호 : 540-86-00384 | 통신판매업
            신고번호 : 2020-경기김포-3725호
          </span>
          <span>
            주소 : 경기도 김포시 사우중로 87 201호 | 이메일 :
            kdigital@nextrunners.co.kr | 전화 : 070-4099-8219
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
