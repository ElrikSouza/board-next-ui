import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeRegistry from "./ThemeRegistry";
import "./globals.css";

const inter = Inter({
  weight: ["500", "600", "700", "400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Board",
  description: "Board app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
