// components/ThemeProvider.tsx
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Replicando a tipagem oficial do next-themes para manter o padrão
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // O NextThemesProvider injeta as classes "dark" ou "light" na tag <html> do seu projeto
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}