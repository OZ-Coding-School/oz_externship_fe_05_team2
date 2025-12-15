import { useToastStore } from "@/store";
import type { BigToast, SmallToast } from "@/types";

const TIMEOUT = 3000;

type ToastWithoutId = Omit<BigToast, "id"> | Omit<SmallToast, "id">;

export default function useToast() {
  const { addToast, removeToast } = useToastStore();

  function triggerToast(toast: ToastWithoutId) {
    const id = Date.now() + Math.random();

    addToast({ id, ...toast });

    setTimeout(() => {
      removeToast(id);
    }, TIMEOUT);
  }

  return { triggerToast };
}
