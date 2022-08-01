import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "../components";
import { IUserData } from "../shared/interfaces";
import { useStore } from "../store";

export const AuthPage = () => {
  const store = useStore();
  const navigate = useNavigate();

  const onSubmit = async (data: IUserData) => {
    await store.login(data);
    navigate("profile", { replace: true });
  };

  return <AuthForm onSubmit={onSubmit} />;
};
