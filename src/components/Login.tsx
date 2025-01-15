import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextInputChangeEventData } from "react-native";
import axios, { AxiosError } from "axios";

import { useAuth } from "../hooks/useAuth";
import { loginUser } from "../services/loginApi";
import { LoginBody, LoginRes } from "../types/Login";
import {
  VerticalContainer,
  Container,
  Input,
  HeaderText,
  Button,
  ButtonText,
  ErrorText,
} from "../styles/global";

const Login = () => {
  const { control, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const { signIn } = useAuth();

  const onSubmit = async ({ user, password }: LoginBody) => {
    if (!user && !password) {
      setError("Usuário e senha não podem ser vazios.");
      return;
    }
    if (!user) {
      setError("Usuário não pode ser vazio.");
      return;
    }
    if (!password) {
      setError("Senha não pode ser vazia.");
      return;
    }
    try {
      const loginResponse = await loginUser({ user, password });
      if (loginResponse.user) {
        signIn(loginResponse.user);
      }
    } catch (error: AxiosError | unknown) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data as LoginRes;
        if (errorMessage.message) {
          setError(errorMessage.message);
        }
      } else {
        console.log(error);
      }
    }
  };

  return (
    <VerticalContainer>
      <Container>
        <HeaderText>Login</HeaderText>
        <Controller
          name="user"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Container>
              <Input
                placeholder="Username"
                value={value}
                onChangeText={(e: TextInputChangeEventData) => {
                  setError("");
                  onChange(e);
                }}
              />
            </Container>
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Container>
              <Input
                placeholder="Password"
                value={value}
                onChangeText={(e: TextInputChangeEventData) => {
                  setError("");
                  onChange(e);
                }}
                secureTextEntry
              />
            </Container>
          )}
        />
        {error && <ErrorText>{error}</ErrorText>}
        <Button
          onPress={handleSubmit((values) => onSubmit(values as LoginBody))}
        >
          <ButtonText>Login</ButtonText>
        </Button>
      </Container>
    </VerticalContainer>
  );
};

export default Login;
