import { useToastStore } from "@/store";
import Toast from "@/components/common/toast/Toast";

export default function ToastBox() {
  const { toasts } = useToastStore();

  return (
    <div className="fixed top-18 right-1 z-100 flex flex-col items-end space-y-1">
      {toasts.map((toast) => (
        <Toast toast={toast} key={toast.id} />
      ))}
    </div>
  );
}
