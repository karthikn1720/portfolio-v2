import { ReactNode } from "react";

interface ButtonProps {
  onClick?: (e: any) => void;
  children: ReactNode;
  disabled?: boolean;
}

const Button = ({ children, onClick, disabled }: ButtonProps) => {
  return (
    <div className="button-container">
      <button disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
