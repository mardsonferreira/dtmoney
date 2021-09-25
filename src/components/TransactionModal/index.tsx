import Modal from "react-modal";
import closeImg from "../../assets/close.svg";

import { Container } from "./styles";

interface transactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function TransactionModal({
  isOpen,
  onRequestClose,
}: transactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close" />
      </button>

      <Container>
        <h2>Create Transaction</h2>

        <input placeholder="Title" />
        <input type="number" placeholder="Value" />
        <input placeholder="Category" />

        <button type="submit">Create</button>
      </Container>
    </Modal>
  );
}
