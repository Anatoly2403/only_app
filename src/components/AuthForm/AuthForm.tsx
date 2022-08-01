import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "./components/Input";
import { Checkbox } from "./components/Checkbox";
import { Button } from "./components/Button";
import { StyledForm } from "./Styled";
import { IUserData } from "../../shared/interfaces";
import { useStore } from "../../store";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

const validationSchema = yup.object().shape({
  login: yup.string().trim().required("Обязательное поле"),
  password: yup.string().trim().required("Обязательное поле"),
});

export const AuthForm: FC = observer(() => {
  const { login, isLoading } = useStore();
  const navigate = useNavigate();

  const formApi = useForm<IUserData>({
    resolver: yupResolver(validationSchema.required()),
  });

  const onSubmit = async (data: IUserData) => {
    console.log(data);
    await login(data);
    navigate("profile", { replace: true });
  };

  return (
    <FormProvider {...formApi}>
      <StyledForm onSubmit={formApi.handleSubmit(onSubmit)}>
        <Input name='login' label='Логин' />
        <Input name='password' label='Пароль' />
        <Checkbox name='remember' label='Запомнить пароль' />
        <Button isLoading={isLoading} type='submit'>
          Войти
        </Button>
      </StyledForm>
    </FormProvider>
  );
});
