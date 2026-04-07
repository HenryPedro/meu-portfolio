# Pedro Portfolio | Software Engineering

Repositório central do meu portfólio profissional, desenvolvido com foco em performance, escalabilidade e arquitetura moderna. O projeto demonstra a aplicação prática de conceitos de Server-Side Rendering (SSR), Static Site Generation (SSG) e componentização modular.

## 🛠 Stack Tecnológica

* **Framework:** Next.js 15 (App Router)
* **Linguagem:** TypeScript
* **Estilização:** Tailwind CSS v4 (CSS-first architecture)
* **Gerenciamento de Tema:** Next Themes
* **Deployment:** Vercel

## 🏗 Arquitetura e Padrões

O projeto foi estruturado seguindo princípios de separação de responsabilidades (SoC) e modularidade para garantir fácil manutenção:

* **Camada de Dados:** Isolada em `/data`, permitindo a transição de objetos estáticos para consumo de APIs externas sem impactar a UI.
* **Componentização:** Divisão entre componentes de interface genérica (`/components/ui`) e componentes de lógica de negócio ou funcionalidades específicas (`/components/features`).
* **Provider Pattern:** Utilização de Context Providers para gerenciamento de estados globais, como o tema da aplicação.
* **Otimização:** Uso de fontes locais via `next/font` e estratégias de hidratação para evitar Layout Shifts.

## 🚀 Como Executar o Projeto

### Pré-requisitos
* Node.js (versão 18.x ou superior)
* Gerenciador de pacotes (npm, yarn ou pnpm)

### Instalação e Execução
1. Clone o repositório:
   ```bash
   git clone [https://github.com/seu-usuario/meu-portfolio.git](https://github.com/seu-usuario/meu-portfolio.git)
