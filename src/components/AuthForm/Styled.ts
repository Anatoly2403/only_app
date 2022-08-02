import styled from "styled-components";

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 640px;
  width: 100%;

  & > button {
    margin-top: 20px;
  }
`;

export const ErrorWrapper = styled.div`
  position: absolute;
  top: -87px;
`;
