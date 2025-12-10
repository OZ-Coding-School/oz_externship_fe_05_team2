import type { BigToast } from "@/types/toast-types";
import { BanIcon, CheckIcon } from "lucide-react";

interface BigToastProps {
  bigToast: BigToast;
}

export default function BigToast({ bigToast }: BigToastProps) {
  const { status, title, text } = bigToast;

  return (
    <div className="flex flex-col items-center justify-center gap-10 rounded-xl p-8">
      {status === "success" ? (
        <CheckIcon className="bg-success size-8 rounded-full p-1 text-white" />
      ) : (
        <BanIcon className="text-danger size-8" />
      )}

      <span className="text-xl font-bold">{title}</span>
      <span className="text-neutral-600">{text}</span>
    </div>
  );
}
