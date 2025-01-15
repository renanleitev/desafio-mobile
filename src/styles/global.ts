import styled from "styled-components/native";

import { ThemeType } from "../config/theme";

export const VerticalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Input = styled.TextInput`
  width: 75%;
  padding: 10px;
  border: 1px solid ${({ theme }: { theme: ThemeType }) => theme.colors.border};
  border-radius: 5px;
  margin-top: 15px;
`;

export const Button = styled.TouchableOpacity`
  width: 75%;
  padding: 15px;
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.colors.primary};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const FloatButton = styled.TouchableOpacity`
  border-width: 1;
  border-color: ${({ theme }: { theme: ThemeType }) => theme.colors.border};
  align-items: center;
  justify-content: center;
  width: 70px;
  position: absolute;
  bottom: 150px;
  right: 10px;
  height: 70px;
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.colors.primary};
  border-radius: 100px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.white};
  font-size: ${({ theme }: { theme: ThemeType }) => theme.fontSizes.medium};
  font-weight: bold;
`;

export const HeaderText = styled.Text`
  font-size: ${({ theme }: { theme: ThemeType }) => theme.fontSizes.large};
`;

export const ErrorText = styled.Text`
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.error};
  font-size: ${({ theme }: { theme: ThemeType }) => theme.fontSizes.small};
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const StyledList = styled.FlatList`
  margin-bottom: 50px;
`;