"use client";

import { useState } from "react";
import {
  createProject,
  updateProject,
  deleteProject,
  type Project,
  type ProjectInput,
} from "@/lib/api";

const EMPTY_FORM: ProjectInput = {
  title: "",
  summary: "",
  fullContent: "",
  repoUrl: "",
  docsUrl: "",
};

export default function AdminPanel({ initialProjects }: { initialProjects: Project[] }) {
  const [projects, setProjects] = useState(initialProjects);
  const [form, setForm] = useState<ProjectInput>(EMPTY_FORM);
  const [editingId, setEditingId] = useState<number | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (editingId) {
      const updated = await updateProject(editingId, form);
      setProjects(projects.map((p) => (p.id === editingId ? updated : p)));
    } else {
      const created = await createProject(form);
      setProjects([created, ...projects]);
    }

    setForm(EMPTY_FORM);
    setEditingId(null);
  }

  function handleEdit(project: Project) {
    setEditingId(project.id);
    setForm({
      title: project.title,
      summary: project.summary,
      fullContent: project.fullContent,
      repoUrl: project.repoUrl,
      docsUrl: project.docsUrl,
    });
  }

  async function handleDelete(id: number) {
    if (!confirm("Remover este projeto?")) return;
    await deleteProject(id);
    setProjects(projects.filter((p) => p.id !== id));
  }

  return (
    <div className="space-y-10">
      {/* Formulario de criacao/edicao */}
      <form onSubmit={handleSubmit} className="bg-surface p-6 rounded-xl border border-white/10 space-y-4">
        <h2 className="font-semibold text-lg">
          {editingId ? "Editar projeto" : "Novo projeto"}
        </h2>

        <input
          name="title"
          placeholder="Título"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 rounded-lg bg-background border border-white/10"
        />

        <textarea
          name="summary"
          placeholder="Resumo (aparece no card)"
          value={form.summary}
          onChange={handleChange}
          required
          rows={2}
          className="w-full px-3 py-2 rounded-lg bg-background border border-white/10"
        />

        <textarea
          name="fullContent"
          placeholder="Conteúdo completo (HTML)"
          value={form.fullContent}
          onChange={handleChange}
          rows={8}
          className="w-full px-3 py-2 rounded-lg bg-background border border-white/10 font-mono text-sm"
        />

        <input
          name="repoUrl"
          placeholder="URL do repositório (GitHub)"
          value={form.repoUrl}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg bg-background border border-white/10"
        />

        <input
          name="docsUrl"
          placeholder="URL da documentação"
          value={form.docsUrl}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg bg-background border border-white/10"
        />

        <div className="flex gap-3">
          <button type="submit" className="px-5 py-2 rounded-lg bg-accent font-medium">
            {editingId ? "Salvar alterações" : "Publicar"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={() => { setEditingId(null); setForm(EMPTY_FORM); }}
              className="px-5 py-2 rounded-lg border border-white/20"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      {/* Lista de projetos existentes */}
      <div className="space-y-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex items-center justify-between bg-surface px-5 py-3 rounded-lg border border-white/10"
          >
            <span>{project.title}</span>
            <div className="flex gap-3 text-sm">
              <button onClick={() => handleEdit(project)} className="text-accent">
                Editar
              </button>
              <button onClick={() => handleDelete(project.id)} className="text-red-400">
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
