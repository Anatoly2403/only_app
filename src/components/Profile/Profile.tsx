import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store";
import { Button } from "../Button";
import { BtnWrapper, StyledProfile, StyledText } from "./Styled";

export const Profile = observer(() => {
  const { user, logout, service, getUserByToken } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && service.token) getUserByToken(service.token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClick = () => {
    logout();
    navigate("login");
  };

  if (!user) return null;

  return (
    <StyledProfile>
      <StyledText>
        Здравствуйте, <span>{user.login}</span>
      </StyledText>
      <BtnWrapper>
        <Button onClick={onClick}>Выйти</Button>
      </BtnWrapper>
    </StyledProfile>
  );
});
