import React, { FC, ReactNode } from "react";
import { StyledLayout } from "./Styled";

interface Props {
  children?: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => (
  <StyledLayout>
    <h1>ONLY.</h1>
    <div>{children}</div>
  </StyledLayout>
);
