// components/Header.tsx
"use client"

import { ThemeToggle } from "./ThemeToggle"

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-zinc-50/70 dark:bg-zinc-950/70 border-b-4 border-zinc-950 dark:border-zinc-50 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-2xl font-bold uppercase tracking-tighter">
          Pedro.
        </span>

        <nav className="flex gap-6 items-center">
          <a href="#about" className="font-bold hover:underline underline-offset-8 decoration-4 hidden md:block">Sobre</a>
          <a href="#projects" className="font-bold hover:underline underline-offset-8 decoration-4 hidden md:block">Projetos</a>
          
          {/* O botão encapsulado injetado aqui. Separação de responsabilidades! */}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}