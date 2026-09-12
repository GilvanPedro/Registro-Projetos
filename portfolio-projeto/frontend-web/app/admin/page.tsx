import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getProjects } from "@/lib/api";
import AdminPanel from "./AdminPanel";

export default async function AdminPage() {
  // Protege a rota: sem o cookie de sessao, volta pro login
  const isLogged = (await cookies()).get("admin_session")?.value === "true";
  if (!isLogged) {
    redirect("/admin/login");
  }

  const projects = await getProjects().catch(() => []);

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-8">Painel administrativo</h1>
      {/* Toda a interatividade (form, POST/PUT/DELETE) fica no client component abaixo */}
      <AdminPanel initialProjects={projects} />
    </main>
  );
}
