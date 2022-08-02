import styled from "styled-components";

export const StyledProfile = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledText = styled.p`
  font-weight: 400;
  font-size: 40px;

  & > span {
    font-weight: 700;
  }
`;

export const BtnWrapper = styled.div`
  width: 200px;
`;
