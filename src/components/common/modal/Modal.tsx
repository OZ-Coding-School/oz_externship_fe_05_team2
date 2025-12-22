import ModalOverlay from "@/components/common/modal/ModalOverlay";
import { ModalContent, ModalTrigger } from "@/components/common/modal";
import { ModalContext } from "@/hooks";
import React, { useState, type ReactElement } from "react";
import { createPortal } from "react-dom";

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

  const modalRoot = document.getElementById("modal-root")!;

  const trigger = React.Children.map(children, (child) =>
    child.type === ModalTrigger ? child : null
  );

  const content = React.Children.map(children, (child) =>
    child.type === ModalContent ? child : null
  );

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        open,
        close,
        toggle,
      }}
    >
      {trigger}
      {isOpen &&
        createPortal(
          <>
            {isOverlay ? <ModalOverlay /> : null}
            {content}
          </>,
          modalRoot
        )}
    </ModalContext.Provider>
  );
}
