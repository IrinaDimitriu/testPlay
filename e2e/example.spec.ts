import { test, expect } from '@playwright/test'
import credential from "../resources/testData.json" with {type: "json"}

test(
  "has title",
  {
    tag: ["@smoke", "@regression"],
  },
  async ({ page }) => {
    await page.goto("https://playwright.dev/");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  }
);

test(
  "get started link",
  {
    tag: ["@smoke", "@regression"],
  },
  async ({ page }) => {
    await page.goto("https://playwright.dev/");

    // Click the get started link.
    await page.getByRole("link", { name: "Get started" }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(
      page.getByRole("heading", { name: "Installation" })
    ).toBeVisible();
  }
);

test("login",  {
    tag: ["@smoke", "@regression"],
  }, async ({ page }) => {
  await page.goto("https://letcode.in/signin");
  await page
    .getByRole("textbox", { name: "Enter registered email" })
    .fill(credential.customerDetails.username_default);
  await page
    .getByPlaceholder("Password")
    .fill(credential.customerDetails.password_default);
  await page.getByRole("button", { name: "LOGIN" }).click();
  await page.waitForURL("https://letcode.in/");
  await expect(page).toHaveTitle("LetCode with Koushik");
  await expect(page.getByRole('link', { name: 'Sign out' })).toBeVisible();
});
