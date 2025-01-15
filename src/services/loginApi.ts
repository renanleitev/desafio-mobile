import axios from "axios";
import { LoginBody, LoginRes } from "../types/Login";

const API_LOGIN = "https://test-api-y04b.onrender.com";

export const loginUser = async (login: LoginBody): Promise<LoginRes> => {
  const response = await axios.post(`${API_LOGIN}/signIn`, { ...login });
  return response.data as LoginRes;
};
