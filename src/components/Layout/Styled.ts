import styled from "styled-components";

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 200px;

  & > div {
    min-width: 100%;
    display: flex;
    justify-content: center;
  }

  & > h1 {
    font-size: 64px;
    margin: 40px;
  }
`;

export const SpinnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  opacity: 0.5;
  z-index: 999;
`;
