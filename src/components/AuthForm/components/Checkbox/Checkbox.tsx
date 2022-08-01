import React, { FC } from "react";
import { StyledCheckbox, StyledCheckboxWrapper, StyledLabel } from "./Styled";

export const Checkbox: FC<any> = ({ label, name }) => {
  return (
    <StyledCheckboxWrapper>
      <StyledCheckbox id={name} />
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
    </StyledCheckboxWrapper>
  );
};
