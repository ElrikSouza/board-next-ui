import { UserSessionData } from "@/app/auth-provider/auth.context";
import { LoginDTO, SignUpDTO } from "@/dtos";
import { api } from "./api";

const login = (loginDto: LoginDTO) => {
  api.post("/auth/login", loginDto);
};

const signUp = (signUp: SignUpDTO) =>
  api.post("/auth/signup", signUp, {
    withCredentials: false,
  });

const me = (cookies = {}) => {
  return api
    .get<UserSessionData>("/auth/me", { headers: cookies })
    .then((res) => res.data);
};

export const AuthApi = {
  login,
  signUp,
  me,
};
