import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import { StyledCheckbox, StyledCheckboxWrapper, StyledLabel } from "./Styled";

export const Checkbox: FC<any> = ({ label, name }) => {
  const { control } = useFormContext();
  return (
    <StyledCheckboxWrapper>
      <StyledCheckbox id={name} {...control.register(name)} />
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
    </StyledCheckboxWrapper>
  );
};
