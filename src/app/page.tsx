"use client";
import Link from "next/link";
import useSWR from "swr";

// @ts-ignore
const fetcher = (...args: any[]) => fetch(...args).then((res) => res.text());

export default function Home() {
  const { data, error, isLoading } = useSWR("http://localhost:3000", fetcher);

  console.log(data, error);
  return (
    <main>
      teste
      {!isLoading && <div data-testid="result">{data as any}</div>}
      <Link href="/auth/login">Login</Link>
      <Link href="/auth/signup">Sign up</Link>
    </main>
  );
}
