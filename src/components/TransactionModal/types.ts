export interface transactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export type transactionType = "deposit" | "withdraw";

export interface RadioBoxProps {
    isActive: boolean;
    activeColor: "green" | "red";
}