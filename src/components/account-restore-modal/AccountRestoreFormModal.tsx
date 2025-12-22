import { Button } from "@/components/common";
import { Modal, ModalContent } from "@/components/common/modal";
import type { ModalContextType } from "@/types";

interface AccountRestoreFormModalProps {
  externalModalControl: ModalContextType;
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
}

export default function AccountRestoreFormModal({
  externalModalControl,
  setStep,
}: AccountRestoreFormModalProps) {
  return (
    <Modal externalModalControl={externalModalControl}>
      <ModalContent>
        <Button
          onClick={() => {
            setStep(3);
          }}
        >
          확인
        </Button>
      </ModalContent>
    </Modal>
  );
}
