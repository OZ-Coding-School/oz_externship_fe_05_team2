import ToastBox from "@/components/common/toast/ToastBox";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div>
      {/*TODO: 헤더 및 푸터 추가 */}
      <Outlet />
      <ToastBox />
    </div>
  );
}
