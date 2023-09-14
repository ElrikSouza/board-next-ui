import { AuthApi } from "@/board-api";
import { useQuery } from "@tanstack/react-query";

export const SESSION_QUERY_KEY = ["me"];
export function useUserSessionData() {
  const { data, isLoading, error } = useQuery(SESSION_QUERY_KEY, AuthApi.me);

  return {
    data,
    isLoading,
    error,
  };
}
