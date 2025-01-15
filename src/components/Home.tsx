import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

import { useAuth } from "../hooks/useAuth";
import { getBrands } from "../services/brandApi";
import { Brand } from "../types/Brand";
import {
  ButtonText,
  Container,
  FloatButton,
  StyledList,
} from "../styles/global";
import { Header, Title, BrandCard, BrandText, SubTitle } from "../styles/brand";

const Home = ({ navigation }: any) => {
  const { user, signOut } = useAuth();
  const [brands, setBrands] = useState<Brand[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        setIsLoading(true);
        const brands = await getBrands();
        setBrands(brands);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBrands();
  }, []);

  return (
    <Container>
      <Header>
        <Container>
          <Title>Bem-vindo, {user?.name}!</Title>
          <SubTitle>Lista de Marcas</SubTitle>
        </Container>
      </Header>
      <FloatButton onPress={signOut}>
        <ButtonText>Sair</ButtonText>
      </FloatButton>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <StyledList
          data={brands}
          keyExtractor={(item: Brand) => item.codigo}
          renderItem={({ item }: { item: Brand }) => (
            <BrandCard
              onPress={() =>
                navigation.navigate("Models", { brandId: item.codigo })
              }
            >
              <BrandText>{item.nome}</BrandText>
            </BrandCard>
          )}
        />
      )}
    </Container>
  );
};

export default Home;
