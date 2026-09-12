import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meu Portfólio de Projetos",
  description: "Documentando meus projetos de Engenharia de Software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
