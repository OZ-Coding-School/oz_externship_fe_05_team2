import { MODAL_ANIMATION_TIME_MS } from "@/constants";
import { useModalContext } from "@/hooks";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function ModalOverlay() {
  const { isOpen, close } = useModalContext();
  const [show, setShow] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      const timer = setTimeout(
        () => setIsAnimating(true),
        MODAL_ANIMATION_TIME_MS
      ); // For animation
      return () => clearTimeout(timer);
    }
    setIsAnimating(false);
    const timer = setTimeout(() => setShow(false), MODAL_ANIMATION_TIME_MS); // Delay unmount for animation
    return () => clearTimeout(timer);
  }, [isOpen]);

  // 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ESC 키 닫기
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  if (!show) return null;
  return (
    <div
      className={cn(
        "fixed inset-0 z-40 bg-black/50 transition-opacity",
        `duration-[${MODAL_ANIMATION_TIME_MS}]`,
        isAnimating ? "opacity-100" : "opacity-0"
      )}
      onClick={close}
    />
  );
}
