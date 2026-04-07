// components/ThemeToggle.tsx
"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Usamos o setTimeout para empurrar a atualização de estado para o final
    // do Event Loop do JavaScript. Isso evita o aviso de "cascading render" síncrono
    // do React, mas ainda garante que o tema seja hidratado corretamente logo em seguida.
    const timer = setTimeout(() => setMounted(true), 0)
    
    // Boa prática: sempre limpe timeouts quando o componente for destruído
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    // Mantemos a div invisível do mesmo tamanho para evitar que o layout pule
    return <button className="p-2 w-[72px] h-9 invisible"></button>
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md text-sm font-medium transition-colors"
    >
      {theme === "dark" ? "☀️ Claro" : "🌙 Escuro"}
    </button>
  )
}