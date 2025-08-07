import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar"; // ✅ Importação da Navbar

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gabriel Caixeta | Portfólio",
  description: "Portfólio pessoal de Gabriel Caixeta Romero",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-black dark:bg-black dark:text-white transition-colors`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar /> {/* ✅ Adiciona a Navbar no layout */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}