import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import {
  StyledErrorText,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
} from "./Styled";

interface Props {
  name: string;
  placeholder?: string;
  label: string;
  type?: string;
}

export const Input: FC<Props> = ({ name, placeholder = "", label, type }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message;

  return (
    <StyledInputWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        id={name}
        type={type}
        error={!!errors[name]}
        placeholder={placeholder}
        {...control.register(name)}
      />
      <StyledErrorText>{`${error || ""}`}</StyledErrorText>
    </StyledInputWrapper>
  );
};
