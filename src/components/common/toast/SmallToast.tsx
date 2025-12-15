import type { SmallToast } from "@/types";
import { BanIcon, CheckIcon } from "lucide-react";

interface SmallToastProps {
  smallToast: SmallToast;
}

export default function SmallToast({ smallToast }: SmallToastProps) {
  const { text, status } = smallToast;
  return (
    <div className="flex items-center justify-center gap-3 rounded-lg border border-neutral-400 bg-neutral-100 px-4 py-3 text-neutral-600 shadow-lg">
      {status === "success" ? (
        <CheckIcon className="bg-success size-8 rounded-full p-1 text-white" />
      ) : (
        <BanIcon className="text-danger size-8" />
      )}
      <span>{text}</span>
    </div>
  );
}
