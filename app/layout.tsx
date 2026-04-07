// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Importando nossos componentes
import { ThemeProvider } from "../components/ThemeProvider";
import { ThemeToggle } from "../components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pedro | Portfólio",
  description: "Portfólio de Engenharia de Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning é necessário aqui porque o next-themes vai injetar atributos na tag html
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col transition-colors duration-300`}>
        
        {/* Envolvendo a aplicação no ThemeProvider */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
            <h1 className="font-bold text-xl">Pedro.dev</h1>
            <ThemeToggle />
          </header>

          <main className="grow container mx-auto p-4">
            {children}
          </main>
          
        </ThemeProvider>
      </body>
    </html>
  );
}