// data/projects.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string; // Opcional: Link do projeto rodando
  iconCharacter: string; // Um caractere ou emoji que represente o projeto
  accentColor: string; // Uma cor Tailwind (ex: 'emerald', 'sky') para o hover
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "SaaS Tech Hub",
    description: "Centralizador de serviços e monitoramento de infraestrutura focado em profissionais de TI.",
    technologies: ["C#", ".NET 8", "Docker", "PostgreSQL"],
    githubUrl: "https://github.com/",
    iconCharacter: "🚀",
    accentColor: "sky"
  },
];