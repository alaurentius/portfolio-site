"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useTranslations } from "next-intl";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Contact() {
  const t = useTranslations("contact");
  const tSections = useTranslations("sections");
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "placeholder"
  );

  return (
    <SectionWrapper id="contact" title={tSections("contact")}>
      {state.succeeded ? (
        <p
          data-testid="message-success"
          className="text-green-600 dark:text-green-400 text-center py-8"
        >
          {t("success")}
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          data-testid="contact-form"
          className="max-w-lg mx-auto flex flex-col gap-5"
        >
          {/* Name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {t("name")}
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder={t("namePlaceholder")}
              required
              data-testid="input-name"
              className="rounded-md border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ValidationError
              field="name"
              prefix={t("name")}
              errors={state.errors}
              className="text-xs text-red-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {t("email")}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder={t("emailPlaceholder")}
              required
              data-testid="input-email"
              className="rounded-md border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ValidationError
              field="email"
              prefix={t("email")}
              errors={state.errors}
              className="text-xs text-red-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {t("message")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder={t("messagePlaceholder")}
              required
              data-testid="textarea-message"
              className="rounded-md border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
            <ValidationError
              field="message"
              prefix={t("message")}
              errors={state.errors}
              className="text-xs text-red-500"
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            data-testid="button-submit"
            className="self-end rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {state.submitting ? t("sending") : t("submit")}
          </button>
        </form>
      )}
    </SectionWrapper>
  );
}
