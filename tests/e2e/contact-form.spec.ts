import { test, expect } from "@playwright/test";

test.describe("Contact form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/es");
    await page.getByTestId("section-contact").scrollIntoViewIfNeeded();
  });

  test("renders the contact form", async ({ page }) => {
    await expect(page.getByTestId("contact-form")).toBeVisible();
  });

  test("renders name, email and message fields", async ({ page }) => {
    await expect(page.getByTestId("input-name")).toBeVisible();
    await expect(page.getByTestId("input-email")).toBeVisible();
    await expect(page.getByTestId("textarea-message")).toBeVisible();
  });

  test("renders the submit button", async ({ page }) => {
    await expect(page.getByTestId("button-submit")).toBeVisible();
  });

  test("valid submission shows success message", async ({ page }) => {
    await page.getByTestId("input-name").fill("Test User");
    await page.getByTestId("input-email").fill("test@example.com");
    await page.getByTestId("textarea-message").fill("This is a test message from Playwright.");

    await page.getByTestId("button-submit").click();

    await expect(page.getByTestId("message-success")).toBeVisible({ timeout: 10000 });
    await expect(page.getByTestId("contact-form")).not.toBeVisible();
  });
});
