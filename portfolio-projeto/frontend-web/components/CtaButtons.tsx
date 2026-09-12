export default function CtaButtons({
  repoUrl,
  docsUrl,
}: {
  repoUrl?: string;
  docsUrl?: string;
}) {
  if (!repoUrl && !docsUrl) return null;

  return (
    <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-white/10">
      {repoUrl && (
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-lg bg-accent text-white font-medium hover:opacity-90 transition"
        >
          Ver no GitHub
        </a>
      )}
      {docsUrl && (
        <a
          href={docsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/5 transition"
        >
          Ver documentação
        </a>
      )}
    </div>
  );
}
