import { Modal, ModalContent } from "@/components/common/modal";
import type { ModalContextType } from "@/types";

interface AccountRestoreCompleteModalProps {
  externalModalControl: ModalContextType;
}

export default function AccountRestoreCompleteModal({
  externalModalControl,
}: AccountRestoreCompleteModalProps) {
  return (
    <Modal externalModalControl={externalModalControl}>
      <ModalContent hasCloseIcon={false}>
        <span>계정 복구 완료</span>
      </ModalContent>
    </Modal>
  );
}
