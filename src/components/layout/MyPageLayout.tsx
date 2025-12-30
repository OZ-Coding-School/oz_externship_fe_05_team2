import { SideBarTapButton } from "@/components/common";
import { Link, Outlet } from "react-router";

export default function MyPageLayout() {
  return (
    <div className="flex w-full items-start justify-center p-10">
      <div className="flex w-full max-w-6xl items-start justify-center gap-5">
        <aside className="w-45">
          <SideBarTapButton as={Link} to={"/my-page/exams"}>
            쪽지시험
          </SideBarTapButton>
          <SideBarTapButton as={Link} to={"/my-page"}>
            마이페이지
          </SideBarTapButton>
          <SideBarTapButton as={Link} to={"/my-page/change-password"}>
            비밀번호 변경
          </SideBarTapButton>
        </aside>

        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
