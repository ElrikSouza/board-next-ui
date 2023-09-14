import { AuthProvider } from "../auth-provider/AuthProvider";
import { ChildrenProps } from "../util.types";

export default function ProtectedLayout({ children }: ChildrenProps) {
  return <AuthProvider>{children}</AuthProvider>;
}
