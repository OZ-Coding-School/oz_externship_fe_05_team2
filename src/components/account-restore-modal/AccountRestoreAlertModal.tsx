import { Button } from "@/components/common";
import { Modal, ModalContent } from "@/components/common/modal";
import type { ModalContextType } from "@/types";

interface AccountRestoreAlertModalProps {
  externalModalControl: ModalContextType;
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
}

export default function AccountRestoreAlertModal({
  externalModalControl,
  setStep,
}: AccountRestoreAlertModalProps) {
  return (
    <Modal externalModalControl={externalModalControl}>
      <ModalContent>
        <Button
          onClick={() => {
            setStep(2);
          }}
        >
          계정 다시 사용하기
        </Button>
      </ModalContent>
    </Modal>
  );
}
