import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MySite",
  description: "Next.js + Tailwind Starter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-dvh bg-neutral-950 text-neutral-100">
        {children}
      </body>
    </html>
  );
}
