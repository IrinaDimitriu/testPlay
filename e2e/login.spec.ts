import { expect } from '@playwright/test'
import test from "../e2e/test";
import credential from "../resources/testData.json" with {type: "json"}

test.afterEach(async ({ app }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    console.log(
      `${
        testInfo.title
      } -did not run as expected, ended up at ${app.base.page.url()}`
    );
  }
  app.base.page.close();
});

test.describe("OVO Energy Cookie Overload and Size Test",  {
    tag: ["@first"],
  },() => {

test("login", async ({ page }) => {
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

test("Login Page - ValidCredentials", async ({ page, app }) => {
    await app.base.navigateTo('https://letcode.in');
  await page.getByRole("link", { name: "Log in" }).click();
  await app.login.completeForm();
  await expect(page.getByRole("link", { name: "Sign out" })).toBeEnabled();
});
  
});