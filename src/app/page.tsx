import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/auth/login">Login</Link>
      <Link href="/auth/signup">Sign up</Link>
    </main>
  );
}
