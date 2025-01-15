import axios from "axios";

const API_BRAND = "https://parallelum.com.br/fipe/api/v1/carros/marcas";

export const getBrands = async () => {
  const response = await axios.get(API_BRAND);
  return response.data;
};

export const getModels = async (id: string) => {
  const response = await axios.get(`${API_BRAND}/${id}/modelos`);
  return response.data;
};
