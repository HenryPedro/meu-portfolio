// components/Projects.tsx

import { projectsData } from '../data/projects'

export default function Projects() {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold mb-6">Meus Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Agora sim o .map está dentro do retorno do componente */}
        {projectsData.map((project, i) => (
          <div key={project.id || i} className="p-4 border rounded-md dark:border-gray-800">
            <h3 className="font-bold text-xl">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{project.description}</p>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noreferrer"
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              Ver repositório
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}