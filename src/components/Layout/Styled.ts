import styled from "styled-components";

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 240px;

  & > div {
    min-width: 100%;
    display: flex;
    justify-content: center;
  }
`;
