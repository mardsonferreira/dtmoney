import Modal from "react-modal";

interface transactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function TransactionModal({
  isOpen,
  onRequestClose,
}: transactionModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Create Transaction</h2>
    </Modal>
  );
}
