import styled from "styled-components";

interface Props {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const StyledButton = styled.button.attrs((props) => ({
  type: props.type,
}))<Props>`
  width: 100%;
  height: 60px;
  background: #4a67ff;
  border-radius: 8px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 18px;
  color: #fff;

  &:active {
    transform: ${(props) => (!!props.disabled ? "scale(1)" : "scale(0.99)")};
  }
`;
