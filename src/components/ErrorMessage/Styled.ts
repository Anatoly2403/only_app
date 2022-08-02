import styled from "styled-components";

export const StyledErrorMessage = styled.div`
  padding: 0 20px;
  width: 640px;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 14px;
  background: #f5e9e9;
  border: 1px solid #e26f6f;
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;

  & svg {
    color: #ee6565;
  }
`;

export const StyledIcon = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffc8c8;
`;
