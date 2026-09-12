import { getProjects } from "@/lib/api";
import ProjectCard from "@/components/ProjectCard";

// Roda no servidor a cada request (SSR), consumindo o GET da API Java
export default async function HomePage() {
  const projects = await getProjects().catch(() => []);

  return (
    <main className="min-h-screen">
      {/* Banner de destaque */}
      <section className="border-b border-white/10 bg-gradient-to-b from-surface to-background">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Documentando meus projetos de{" "}
            <span className="text-accent">Engenharia de Software</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cada card abaixo é um projeto real, com código, decisões de
            arquitetura e aprendizados no caminho.
          </p>
        </div>
      </section>

      {/* Listagem de projetos */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        {projects.length === 0 ? (
          <p className="text-gray-500 text-center">
            Nenhum projeto publicado ainda.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
