"use client";

import { ChildrenProps } from "../util.types";
import { AuthCtx } from "./auth.context";
import { useUserSessionData } from "./useUserSessionData";

export function AuthProvider({ children }: ChildrenProps) {
  const { data, isLoading, error } = useUserSessionData();

  if (isLoading) return <span>Loading</span>;
  if (error) return <span>Error</span>;

  return (
    <AuthCtx.Provider value={{ session: data ?? null, isLoading }}>
      {children}
    </AuthCtx.Provider>
  );
}
