export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="border-t border-zinc-200 py-8">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <span>
          alaurentius &mdash; {year}
        </span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/alaurentius"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-link-github"
            className="hover:text-zinc-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/alaurentius"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-link-linkedin"
            className="hover:text-zinc-900 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
