import { observer } from "mobx-react-lite";
import React, { FC, ReactNode } from "react";
import { useStore } from "../../store";
import { SpinnerWrapper, StyledLayout } from "./Styled";
import Spinner from "react-spinner-material";

interface Props {
  children?: ReactNode;
}

export const Layout: FC<Props> = observer(({ children }) => {
  const { isLoading } = useStore();

  return (
    <StyledLayout>
      <h1>ONLY.</h1>
      <div>{children}</div>
      {isLoading && (
        <SpinnerWrapper>
          <Spinner color='#fff' />
        </SpinnerWrapper>
      )}
    </StyledLayout>
  );
});
