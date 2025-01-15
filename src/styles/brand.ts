import styled from "styled-components/native";

import { ThemeType } from "../config/theme";

export const Header = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }: { theme: ThemeType }) => theme.fontSizes.large};
  font-weight: bold;
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.text};
`;

export const SubTitle = styled.Text`
  font-size: ${({ theme }: { theme: ThemeType }) => theme.fontSizes.medium};
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.text};
  opacity: 0.7;
  margin-top: 5px;
`;

export const BrandCard = styled.TouchableOpacity`
  background-color: #ffffff;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }: { theme: ThemeType }) => theme.colors.border};
`;

export const BrandText = styled.Text`
  font-size: ${({ theme }: { theme: ThemeType }) => theme.fontSizes.medium};
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.text};
  font-weight: bold;
`;
