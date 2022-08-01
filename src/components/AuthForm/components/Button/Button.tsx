import React, { FC, ReactNode } from "react";
import { StyledButton } from "./Styled";

interface Props {
  children: ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button: FC<Props> = ({ children, disabled, type }) => {
  return (
    <StyledButton type={type} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
