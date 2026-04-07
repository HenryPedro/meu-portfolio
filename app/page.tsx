// app/page.tsx
import { projectsData, Project } from "../data/projects";

// Componente isolado para o Card do Projeto (Separação de Responsabilidade)
function ProjectCard({ project }: { project: Project }) {
  // Mapeamento dinâmico de cores baseadas nos dados
  const accentVariants = {
    emerald: "hover:border-emerald-500/50 hover:shadow-emerald-500/10 dark:hover:border-emerald-700/50",
    sky: "hover:border-sky-500/50 hover:shadow-sky-500/10 dark:hover:border-sky-700/50",
    amber: "hover:border-amber-500/50 hover:shadow-amber-500/10 dark:hover:border-amber-700/50",
  };

  const textAccentVariants = {
    emerald: "text-emerald-600 dark:text-emerald-400",
    sky: "text-sky-600 dark:text-sky-400",
    amber: "text-amber-600 dark:text-amber-400",
  };

  const selectedAccent = accentVariants[project.accentColor as keyof typeof accentVariants] || accentVariants.emerald;
  const selectedTextAccent = textAccentVariants[project.accentColor as keyof typeof textAccentVariants] || textAccentVariants.emerald;

  return (
    <div 
      className={`group border border-zinc-200 dark:border-zinc-800 rounded-3xl p-7 bg-white dark:bg-zinc-900 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl ${selectedAccent}`}
    >
      <div className="flex items-center gap-4 mb-5">
        <div className="text-4xl w-16 h-16 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-700">
          {project.iconCharacter}
        </div>
        <h3 className={`text-2xl font-extrabold tracking-tighter ${selectedTextAccent}`}>
          {project.title}
        </h3>
      </div>
      
      <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-base leading-relaxed h-20 overflow-hidden text-ellipsis">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2.5 mb-8">
        {project.technologies.map((tech) => (
          <span 
            key={tech} 
            className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs px-3.5 py-1.5 rounded-full font-semibold tracking-wide border border-zinc-200 dark:border-zinc-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 pt-6 border-t border-zinc-100 dark:border-zinc-800">
        <a 
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-zinc-900 hover:bg-zinc-700 dark:bg-zinc-100 dark:hover:bg-zinc-300 text-white dark:text-zinc-950 font-bold py-3 px-5 rounded-xl transition-colors text-sm"
        >
          Código no GitHub
        </a>
        {project.liveUrl && (
          <a 
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 text-center font-bold py-3 px-5 rounded-xl transition-colors text-sm border-2 ${selectedTextAccent.replace('text', 'border')} ${selectedTextAccent} hover:bg-zinc-100 dark:hover:bg-zinc-800`}
          >
            Demonstração Live
          </a>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="py-12 md:py-20 space-y-24">
      
      {/* 1. HERO SECTION: Comunicação de Valor Imediata */}
      <section className="text-center max-w-4xl mx-auto px-4">
        <span className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-900/50 px-4 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 mb-6">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Disponível para novos desafios arquiteturais
        </span>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-balance leading-[0.95] mb-6">
          Engenharia de Software <br/>
          <span className="text-emerald-600 dark:text-emerald-500">Robusta e Escalável.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed text-balance">
          Especialista em C# .NET e Ecossistema JavaScript moderno, traduzindo requisitos de negócio complexos em arquiteturas limpas, performáticas e de fácil manutenção.
        </p>
      </section>

      {/* 2. PROJECTS SECTION: Grid Interativo */}
      <section>
        <div className="flex items-center justify-between mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-6">
          <h2 className="text-4xl font-extrabold tracking-tighter">Projetos em Destaque</h2>
          <p className="text-zinc-500 dark:text-zinc-500 font-medium">Resultados tangíveis e código limpo.</p>
        </div>
        
        {/* Grid Profissional com Gap Maior */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

    </div>
  );
}