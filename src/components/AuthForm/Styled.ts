import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 640px;
  width: 100%;

  & > button {
    margin-top: 20px;
  }
`;
