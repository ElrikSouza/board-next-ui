import { AuthCard } from "../components/AuthCard";
import { SignUpForm } from "./components/SignUpForm";

export default function SignUpPage() {
  return (
    <AuthCard title="Welcome!" subtitle="Create your account today!">
      <SignUpForm />
    </AuthCard>
  );
}
