import { User } from "./User";

export type LoginBody = {
  user: string;
  password: string;
};

export type LoginRes = {
  error: boolean;
  user?: User;
  message?: string;
};
