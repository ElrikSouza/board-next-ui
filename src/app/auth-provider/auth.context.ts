import { createContext } from "react";

export interface UserSessionData {
  id: string;
  fullName: string;
  email: string;
}

export interface AuthCtxData {
  session: UserSessionData | null;
  isLoading: boolean;
}

export const AuthCtx = createContext<AuthCtxData>({
  session: null,
  isLoading: true,
});
