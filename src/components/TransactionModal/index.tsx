import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import { Container, TransactionTypeContainer } from "./styles";

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

        <TransactionTypeContainer>
          <button
            type="button"
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </button>

          <button
            type="button"
          >
            <img src={outcomeImg} alt="Expense" />
            <span>Expense</span>
          </button>
        </TransactionTypeContainer>

        <input placeholder="Category" />

        <button type="submit">Create</button>
      </Container>
    </Modal>
  );
}
