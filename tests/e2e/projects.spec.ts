import { test, expect } from "@playwright/test";

test.describe("Projects section", () => {
  test("renders at least one project card", async ({ page }) => {
    await page.goto("/es");
    const cards = page.getByTestId("project-card");
    await expect(cards.first()).toBeVisible();
  });

  test("each project card has a non-empty repo link", async ({ page }) => {
    await page.goto("/es");
    const repoLinks = page.getByTestId("project-card-repo-link");
    const count = await repoLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const href = await repoLinks.nth(i).getAttribute("href");
      expect(href).toBeTruthy();
    }
  });

  test("project cards render in both locales", async ({ page }) => {
    await page.goto("/en");
    const cards = page.getByTestId("project-card");
    await expect(cards.first()).toBeVisible();
  });
});
