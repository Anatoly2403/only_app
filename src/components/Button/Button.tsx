import React, { FC, ReactNode } from "react";
import { StyledButton } from "./Styled";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  viewType?: "primary" | "default";
}

export const Button: FC<Props> = ({
  children,
  disabled,
  type,
  viewType = "default",
  onClick,
}) => {
  return (
    <StyledButton
      type={type}
      viewType={viewType}
      disabled={disabled}
      onClick={onClick && onClick}
    >
      {children}
    </StyledButton>
  );
};
