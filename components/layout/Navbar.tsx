"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

const NAV_SECTIONS = ["about", "experience", "projects", "skills", "contact"] as const;

export default function Navbar() {
  const t = useTranslations("nav");

  return (
    <header data-testid="navbar" className="sticky top-0 z-50 bg-white border-b border-zinc-200">
      <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="#" className="font-semibold text-lg text-zinc-900">
          alaurentius
        </Link>

        <ul className="hidden sm:flex items-center gap-6">
          {NAV_SECTIONS.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                data-testid={`nav-link-${section}`}
                className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                {t(section)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile: nav links apilados (hamburger en Fase 4 si se decide) */}
        <ul className="flex sm:hidden items-center gap-4">
          {NAV_SECTIONS.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                data-testid={`nav-link-${section}`}
                className="text-xs text-zinc-600 hover:text-zinc-900"
              >
                {t(section)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
