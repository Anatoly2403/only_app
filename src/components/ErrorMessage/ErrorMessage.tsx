import React, { FC } from "react";
import { ReactComponent as Exclamation } from "../../assets/icons/exclamation.svg";
import { StyledErrorMessage, StyledIcon } from "./Styled";

interface Props {
  message: string;
}

export const ErrorMessage: FC<Props> = ({ message }) => {
  return (
    <StyledErrorMessage>
      <StyledIcon>
        <Exclamation />
      </StyledIcon>
      {message}
    </StyledErrorMessage>
  );
};
