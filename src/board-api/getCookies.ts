import { cookies } from "next/headers";

export const getCookiesForServer = () => {
  const headers = {
    Cookie: cookies().toString(),
    //     Origin: "http://localhost:5173",
  };
  return headers;
};
