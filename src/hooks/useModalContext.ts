import { useContext, createContext } from "react";
import type { ModalContextType } from "@/types";

export const ModalContext = createContext<ModalContextType | null>(null);

export default function useModalContext() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("Modal components must be used within <Modal>");
  return ctx;
}
