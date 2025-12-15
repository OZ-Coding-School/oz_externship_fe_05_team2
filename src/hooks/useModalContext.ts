import { useContext, createContext } from "react";
import type { ModalContextType } from "@/types";

export const ModalContext = createContext<ModalContextType | null>(null);

export default function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Modal components must be used within <Modal>");
  return context;
}
