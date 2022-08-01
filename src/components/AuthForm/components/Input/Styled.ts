import styled from "styled-components";

interface InputProps {
  error?: boolean;
}

export const StyledInputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > label {
    margin-bottom: 2px;
  }
`;

export const StyledLabel = styled.label`
  font-weight: 400;
  font-size: 16px;
`;

export const StyledInput = styled.input<InputProps>`
  width: 100%;
  height: 60px;
  outline: none;
  padding: 21px 20px;
  border: ${(props: any) =>
    props.error ? "#E26F6F solid 1px" : "transparent solid 1px"};
  color: ${(props) => (props.error ? "#E26F6F" : "#1F1F1F")};
  background: #f5f5f5;
  border-radius: 8px;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

export const StyledErrorText = styled.p`
  position: absolute;
  bottom: -18px;
  font-weight: 200;
  font-size: 14px;
  color: #e26f6f;
  margin: 0;
`;
