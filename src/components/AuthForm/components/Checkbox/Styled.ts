import styled from "styled-components";

interface CheckboxProps {
  error?: boolean;
}

export const StyledCheckbox = styled.input.attrs({
  type: "checkbox",
})<CheckboxProps>`
  position: relative;
  width: 18px;
  height: 18px;
  visibility: hidden;
  cursor: pointer;

  &:after {
    position: absolute;
    content: "";
    display: block;
    width: 18px;
    height: 18px;
    border: 1px solid #000000;
    border-radius: 4px;
    visibility: visible;
  }

  &:checked {
    &:before {
      position: absolute;
      top: 3px;
      left: 3px;
      content: "";
      display: block;
      width: 14px;
      height: 14px;
      border-radius: 2px;
      background: #4a67ff;
      visibility: visible;
    }
  }
`;

export const StyledCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const StyledLabel = styled.label`
  font-weight: 400;
  font-size: 16px;
`;
