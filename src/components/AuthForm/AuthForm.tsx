import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "./components/Input";
import { Checkbox } from "./components/Checkbox";
import { Button } from "./components/Button";
import { StyledForm } from "./Styled";
import { IUserData } from "../../shared/interfaces";

const validationSchema = yup.object().shape({
  login: yup.string().trim().required("Обязательное поле"),
  password: yup.string().trim().required("Обязательное поле"),
});

interface Props {
  onSubmit: (data: IUserData) => void;
}

export const AuthForm: FC<Props> = ({ onSubmit }) => {
  const formApi = useForm<IUserData>({
    resolver: yupResolver(validationSchema.required()),
  });

  return (
    <FormProvider {...formApi}>
      <StyledForm onSubmit={formApi.handleSubmit(onSubmit)}>
        <Input name='login' label='Логин' />
        <Input name='password' label='Пароль' />
        <Checkbox name='remember' label='Запомнить пароль' />
        <Button type='submit'>Войти</Button>
      </StyledForm>
    </FormProvider>
  );
};
