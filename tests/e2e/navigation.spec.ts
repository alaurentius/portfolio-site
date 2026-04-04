import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("page loads and shows navbar", async ({ page }) => {
    await page.goto("/es");
    await expect(page.getByTestId("navbar")).toBeVisible();
  });

  test("all nav links are rendered", async ({ page }) => {
    await page.goto("/es");
    const sections = ["about", "experience", "projects", "skills", "contact"];
    for (const section of sections) {
      await expect(page.getByTestId(`nav-link-${section}`).first()).toBeVisible();
    }
  });

  test("nav links point to correct anchors", async ({ page }) => {
    await page.goto("/es");
    const sections = ["about", "experience", "projects", "skills", "contact"];
    for (const section of sections) {
      const link = page.getByTestId(`nav-link-${section}`).first();
      await expect(link).toHaveAttribute("href", `#${section}`);
    }
  });

  test("each section is present in the page", async ({ page }) => {
    await page.goto("/es");
    const sections = ["about", "experience", "projects", "skills", "contact"];
    for (const section of sections) {
      await expect(page.getByTestId(`section-${section}`)).toBeVisible();
    }
  });

  test("language switcher switches from ES to EN", async ({ page }) => {
    await page.goto("/es");
    await expect(page.getByTestId("section-about")).toContainText("Sobre");

    await page.getByTestId("lang-switcher").first().click();
    await page.waitForURL("**/en");

    await expect(page.getByTestId("section-about")).toContainText("About");
  });

  test("language switcher switches back from EN to ES", async ({ page }) => {
    await page.goto("/en");
    await page.getByTestId("lang-switcher").first().click();
    await page.waitForURL("**/es");

    await expect(page.getByTestId("section-about")).toContainText("Sobre");
  });
});
