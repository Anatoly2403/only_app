import styled from "styled-components";

interface Props {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  viewType: "primary" | "default";
}

export const StyledButton = styled.button.attrs((props) => ({
  type: props.type,
}))<Props>`
  width: 100%;
  height: 60px;
  background: ${(props) => {
    if (props.viewType === "primary") {
      return props.disabled ? "#99A9FF" : "#4a67ff";
    }
    return "#f5f5f5";
  }};

  border-radius: 8px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  color: ${(props) => (props.viewType === "primary" ? "#fff" : "#000")};
  cursor: pointer;

  &:active {
    transform: ${(props) => (!!props.disabled ? "scale(1)" : "scale(0.99)")};
  }
`;
