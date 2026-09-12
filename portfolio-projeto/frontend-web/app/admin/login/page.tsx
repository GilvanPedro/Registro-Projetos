import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function login(formData: FormData) {
  "use server";

  const user = formData.get("user");
  const password = formData.get("password");

  // Comparacao simples com variaveis de ambiente.
  // Serve pra um projeto pessoal — em produção de verdade, troque por
  // hash de senha + uma tabela de usuários.
  if (user === process.env.ADMIN_USER && password === process.env.ADMIN_PASSWORD) {
    (await cookies()).set("admin_session", "true", {
      httpOnly: true,
      maxAge: 60 * 60 * 8, // 8 horas
      path: "/",
    });
    redirect("/admin");
  }

  redirect("/admin/login?erro=1");
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ erro?: string }>;
}) {
  const { erro } = await searchParams;

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <form action={login} className="w-full max-w-sm bg-surface p-8 rounded-xl border border-white/10">
        <h1 className="text-2xl font-bold mb-6">Login administrativo</h1>

        {erro && (
          <p className="text-red-400 text-sm mb-4">Usuário ou senha inválidos.</p>
        )}

        <label className="block text-sm text-gray-400 mb-1">Usuário</label>
        <input
          name="user"
          type="text"
          required
          className="w-full mb-4 px-3 py-2 rounded-lg bg-background border border-white/10 focus:border-accent outline-none"
        />

        <label className="block text-sm text-gray-400 mb-1">Senha</label>
        <input
          name="password"
          type="password"
          required
          className="w-full mb-6 px-3 py-2 rounded-lg bg-background border border-white/10 focus:border-accent outline-none"
        />

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-accent font-medium hover:opacity-90 transition"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}
