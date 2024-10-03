import test from "./test";

test.beforeEach(async ({ app }) => {
  await test.step("Navigate to calendar", async () => {
    await app.base.navigateTo("https://letcode.in/calendar");
  });
});

test.afterEach(async ({ app }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    console.log(
      `${
        testInfo.title
      } - did not run as expected, ended up at ${app.base.page.url()}`,
    );
  }
  app.base.page.close();
});

test("Select tomorrow's and next month's date from calendar", async ({
  page,
}) => {
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

test("Select next month's date from calendar", async ({ page }) => {
  const today = new Date();

  const currentDayNextMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate(),
  );
  const nextMonthDay = currentDayNextMonth.getDate();
  console.log("next month day is: ", nextMonthDay);

  await page.locator(".datepicker-nav-next").first().click(); // dau click pe urmatoarea luna

  // Select the first day of the next month
  await page
    .getByRole("button", { name: `${nextMonthDay}`, exact: true })
    .nth(1)
    .click();

  // adauga verificarea necesara
});
