import React, { FC, ReactNode } from "react";
import Spinner from "react-spinner-material";
import { StyledButton } from "./Styled";

interface Props {
  children: ReactNode;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button: FC<Props> = ({ children, isLoading, type }) => {
  return (
    <StyledButton type={type} disabled={isLoading}>
      {isLoading ? <Spinner color='#fff' /> : children}
    </StyledButton>
  );
};
