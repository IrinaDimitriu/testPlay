import { expect } from "@playwright/test";
import test from "./test";
import { beforeEach } from "node:test";

test.beforeEach(async ({ app }) => {
  await test.step("Complete successfully the customer-property for COS case", async () => {
      await app.base.navigateTo("https://letcode.in/test");
  });
});
    
test("Select tomorrow's and next month's date from calendar", async ({
  page,
}) => {
  await page.goto("https://letcode.in/calendar");

  // Gasim ziua de maine bazandune pe ziua curenta
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  // extragem doar ziua de maine - "1"
  const dayTomorrow = tomorrow.getDate();
  console.log("tomorrow is: ", tomorrow);

  // Click pe ziua de maine
  await page
    .getByRole("button", { name: `${dayTomorrow}`, exact: true })
    .nth(1)
    .click();
  // adauga verificarea necesara
});

test("Select next month's date from calendar", async ({
  page,
}) => {
  await page.goto("https://letcode.in/calendar");

  const today = new Date();
  
  const currentDayNextMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate()
  );
  const nextMonthDay = currentDayNextMonth.getDate();
  console.log("next month day is: ", nextMonthDay);

  await page.locator(".datepicker-nav-next").first().click();// dau click pe urmatoarea luna

  // Select the first day of the next month
  await page.getByRole("button", { name: `${nextMonthDay}`, exact: true })
    .nth(1)
    .click();

  // adauga verificarea necesara
});
