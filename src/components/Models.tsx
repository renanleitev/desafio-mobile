import React, { useEffect, useState } from "react";

import { getModels } from "../services/brandApi";
import { Brand } from "../types/Brand";
import { Container, StyledList } from "../styles/global";
import { BrandCard, BrandText, Header, Title } from "../styles/brand";
import { ActivityIndicator } from "react-native";

const Models = ({ route }: any) => {
  const { brandId } = route.params;
  const [models, setModels] = useState<Brand[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        setIsLoading(true);
        const models = await getModels(brandId);
        setModels(models.modelos);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchModels();
  }, [brandId]);

  return (
    <Container>
      <Header>
        <Container>
          <Title>Lista de Modelos</Title>
        </Container>
      </Header>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <StyledList
          data={models}
          keyExtractor={(item: Brand) => item.codigo}
          renderItem={({ item }: { item: Brand }) => (
            <BrandCard>
              <BrandText>{item.nome}</BrandText>
            </BrandCard>
          )}
        />
      )}
    </Container>
  );
};

export default Models;
