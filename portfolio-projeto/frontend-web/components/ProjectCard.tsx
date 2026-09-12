import Link from "next/link";
import type { Project } from "@/lib/api";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projeto/${project.id}`}
      className="block bg-surface border border-white/10 rounded-xl p-6 hover:border-accent transition-colors duration-200"
    >
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-400 text-sm line-clamp-3">{project.summary}</p>
      <span className="inline-block mt-4 text-accent text-sm font-medium">
        Ver projeto →
      </span>
    </Link>
  );
}
