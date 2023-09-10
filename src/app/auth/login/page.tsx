import { AuthCard } from "../components/AuthCard";
import { LoginForm } from "./components/LoginForm";

export default function LoginPage() {
  return (
    <AuthCard
      title="Welcome back!"
      subtitle="Enter your credentials or reset your password"
    >
      <LoginForm />
    </AuthCard>
  );
}
