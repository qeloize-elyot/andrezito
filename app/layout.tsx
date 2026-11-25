import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "André, em palavras.", description: "Uma coleção de cartas e lembranças dos alunos para o professor André." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }