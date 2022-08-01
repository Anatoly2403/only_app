import styled from "styled-components";

interface Props {
  type?: "button" | "submit" | "reset";
}

export const StyledButton = styled.button.attrs((props) => ({
  type: props.type,
}))<Props>`
  width: 100%;
  height: 60px;
  background: #4a67ff;
  border-radius: 8px;
  border: none;

  font-weight: 700;
  font-size: 18px;
  color: #fff;

  &:active {
    transform: scale(0.99);
  }
`;
