import { useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import { Container, RadioBox, TransactionTypeContainer } from "./styles";

import { transactionType, transactionModalProps } from "./types";

export function TransactionModal({
  isOpen,
  onRequestClose,
}: transactionModalProps) {
  const [type, setType] = useState<transactionType>("deposit");

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
          <RadioBox
            type="button"
            isActive={type === "deposit"}
            activeColor="green"
            onClick={() => {
              setType("deposit");
            }}
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </RadioBox>

          <RadioBox
            type="button"
            isActive={type === "withdraw"}
            activeColor="red"
            onClick={() => {
              setType("withdraw");
            }}
          >
            <img src={outcomeImg} alt="Expense" />
            <span>Expense</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Category" />

        <button type="submit">Create</button>
      </Container>
    </Modal>
  );
}
