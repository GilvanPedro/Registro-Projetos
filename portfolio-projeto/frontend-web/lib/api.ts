const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080/api";

export interface Project {
  id: number;
  title: string;
  summary: string;
  fullContent: string;
  repoUrl: string;
  docsUrl: string;
  createdAt: string;
}

export type ProjectInput = Omit<Project, "id" | "createdAt">;

// GET /api/projects — usado na home via SSR
export async function getProjects(): Promise<Project[]> {
  const res = await fetch(`${API_URL}/projects`, {
    // sem cache pra sempre pegar a lista atualizada no SSR
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Falha ao buscar a lista de projetos");
  }

  return res.json();
}

// GET /api/projects/{id} — usado na pagina de detalhes
export async function getProjectById(id: string | number): Promise<Project | null> {
  const res = await fetch(`${API_URL}/projects/${id}`, { cache: "no-store" });

  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Falha ao buscar o projeto");

  return res.json();
}

// POST /api/projects — criar (area admin)
export async function createProject(data: ProjectInput): Promise<Project> {
  const res = await fetch(`${API_URL}/projects`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Falha ao criar o projeto");
  return res.json();
}

// PUT /api/projects/{id} — editar (area admin)
export async function updateProject(id: number, data: ProjectInput): Promise<Project> {
  const res = await fetch(`${API_URL}/projects/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Falha ao atualizar o projeto");
  return res.json();
}

// DELETE /api/projects/{id} — remover (area admin)
export async function deleteProject(id: number): Promise<void> {
  const res = await fetch(`${API_URL}/projects/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Falha ao remover o projeto");
}
