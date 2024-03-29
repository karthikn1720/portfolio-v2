import React, { ReactNode } from "react";
interface CardProps {
  children: ReactNode;
}
const Card = ({ children }: CardProps) => {
  return <div className="card-container">{children}</div>;
};

export default Card;
