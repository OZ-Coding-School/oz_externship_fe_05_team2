import ModalOverlay from "@/components/common/modal/ModalOverlay";
import type { ModalContent, ModalTrigger } from "@/components/common/modal";
import { ModalContext } from "@/hooks";
import { useState, type ReactElement } from "react";

type ModalChildren =
  | ReactElement<typeof ModalTrigger>
  | ReactElement<typeof ModalContent>;

interface ModalProps {
  children: ModalChildren | ModalChildren[];
  isOverlay?: boolean;
}

export default function Modal({ children, isOverlay = true }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        open,
        close,
        toggle,
      }}
    >
      {isOverlay ? <ModalOverlay /> : null}
      <div>{children}</div>
    </ModalContext.Provider>
  );
}
