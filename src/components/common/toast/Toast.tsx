import type { Toast } from "@/types";
import BigToast from "@/components/common/toast/BigToast";
import SmallToast from "@/components/common/toast/SmallToast";

interface ToastProps {
  toast: Toast;
}

export default function Toast({ toast }: ToastProps) {
  const { variant } = toast;
  return (
    <div className="animate-fade-in-out-toast">
      {variant === "big" ? (
        <BigToast bigToast={toast} />
      ) : (
        <SmallToast smallToast={toast} />
      )}
    </div>
  );
}
