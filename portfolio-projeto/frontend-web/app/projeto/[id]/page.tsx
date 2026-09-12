import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectById } from "@/lib/api";
import CtaButtons from "@/components/CtaButtons";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/" className="text-accent text-sm">
        ← Voltar
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
        {project.title}
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        Publicado em{" "}
        {new Date(project.createdAt).toLocaleDateString("pt-BR")}
      </p>

      {/*
        fullContent vem como HTML do banco (rich text).
        dangerouslySetInnerHTML e o jeito padrao do React de renderizar isso.
        Se um dia o conteudo vier de usuarios nao confiaveis, sanitize antes
        (ex: com a lib "sanitize-html") pra evitar XSS.
      */}
      <article
        className="article-content"
        dangerouslySetInnerHTML={{ __html: project.fullContent }}
      />

      <CtaButtons repoUrl={project.repoUrl} docsUrl={project.docsUrl} />
    </main>
  );
}
