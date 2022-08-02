import { observer } from "mobx-react-lite";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store";
import { Button } from "../Button";
import { BtnWrapper, StyledProfile, StyledText } from "./Styled";

export const Profile = observer(() => {
  const { user, logout } = useStore();
  const navigate = useNavigate();

  const onClick = () => {
    logout();
    navigate("login");
  };

  return (
    <>
      {!!user && (
        <StyledProfile>
          <StyledText>
            Здравствуйте, <span>{user.login}</span>
          </StyledText>
          <BtnWrapper>
            <Button onClick={onClick}>Выйти</Button>
          </BtnWrapper>
        </StyledProfile>
      )}
    </>
  );
});
