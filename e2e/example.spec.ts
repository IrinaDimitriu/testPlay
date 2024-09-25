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

test(
  "click link",
  {
    tag: ["@smoke", "@regression"],
  },
  async ({ page }) => {
    await page.goto("https://letcode.in/test");

    // Click the get started link.
    await page.getByRole("link", { name: "Edit" }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(
      page.getByRole("heading", { name: "Input" })
    ).toBeVisible();
  }
);

test("login", {
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

test("drag and drop", {
  tag: ["@smoke", "@regression"],
}, async ({ page }) => {
  await page.goto("https://letcode.in/sortable");

  // Localizam elementul ce dorim sa il mutam
  const itemCeDorimSalMutam = page.getByText('Go home');

  // Localizam unde vrem sa il mutam
  let listaUndeDorimSaMutam = page.locator('div#cdk-drop-list-1');
  await expect(listaUndeDorimSaMutam).toBeVisible();

  // Actiunea de drag
  await itemCeDorimSalMutam.dragTo(listaUndeDorimSaMutam);

  // Wait for some time to ensure drag and drop is complete
  await page.waitForTimeout(3000); // You can experiment with different timeouts here

  // Optionally, get all text contents of the list at once
  const allTexts = await listaUndeDorimSaMutam.allTextContents();
  console.log('List contents after drag and drop:', allTexts);

  // Verifying that 'Go home' is present in the list
  expect(allTexts.join()).toContain('Go home');
});


test('Verificam tab/window-ul deschis', async ({ page }) => {
  // Navigam catre pagina necesara
  await page.goto('https://letcode.in/windows');

  // asteptam sa se incarce tab/window-ul dupa o actiune, trebuie sa dam si actiune aici
  const [tabulNou] = await Promise.all([
    page.waitForEvent('popup'), // asteptam sa se deschida tab/window-ul
    page.click('#home'), // aici definim in urma la ce actiune se va deschide tab/window-ul
  ]);

  await tabulNou.waitForLoadState(); // asteptam tabul sa se incarce
  expect(tabulNou.url()).toContain('https://letcode.in/test'); // ne asiguram ca tabul necesar s-a incarcat

  const pageTitle = await tabulNou.title(); // definim titlul
  expect(pageTitle).toBe('LetCode - Testing Hub'); // Verificam titlul

  // Inchidem tabul daca dorim
  // await newPage.close();
});

test('verificam search resultul', async ({ page }) => {
  await page.goto('https://letcode.in/elements');
  await page.getByPlaceholder('Enter your git user name eg').fill('test');
  await page.getByRole('button', { name: 'Search' }).click();

  const repos = page.locator('.is-grouped > div:nth-of-type(1) .is-primary');
  const repoCount = page.locator('.is-grouped > div:nth-of-type(1) .is-info');
  await expect(repos).toBeVisible();
  await expect(repoCount).toBeVisible();
  await expect(repos).toHaveText('Public Repos');
  await expect(repoCount).toHaveText('5');

  const gist = page.locator('.is-grouped > div:nth-of-type(2) .is-primary');
  const gistCounter = page.locator('.is-grouped > div:nth-of-type(2) .is-info')
  await expect(gist).toBeVisible();
  await expect(repoCount).toBeVisible();
  await expect(gist).toHaveText('Public Gist');
  await expect(gistCounter).toHaveText('0');

  const followers = page.locator('.is-grouped > div:nth-of-type(3) .is-primary');
  const followersCount = page.locator('.is-grouped > div:nth-of-type(3) .is-info')
  await expect(followers).toBeVisible();
  await expect(followersCount).toBeVisible();
  await expect(followers).toHaveText('Followers');
  await expect(followersCount).toHaveText('52');
});

test('Verify new dropdown', async ({ page }) => {
  // Navigam catre pagina necesara
  await page.goto('https://letcode.in/dropdowns');

  const dropdown = await page.locator('select#fruits');
  const dropdownMenu = await page.locator('select#fruits>option:nth-of-type(0)');

  // Check if the dropdown is collapsed (hidden)
  const isDropdownHidden = await dropdownMenu.isHidden();

  // Assert that the dropdown is collapsed
  await expect(isDropdownHidden).toBe(true);  // Dropdown should be hidden (collapsed)

  // Optionally: You can check for visibility using other methods:
  // 1. CSS property
  const displayValue = await dropdown.evaluate(el => getComputedStyle(el).display);
  expect(displayValue).toBe('Select Fruit');  // The display should be "none"

  // 2. Visibility check (if it uses visibility hidden)
  const visibilityValue = await dropdown.evaluate(el => getComputedStyle(el).visibility);
  expect(visibilityValue).not.toBe('visible');  // Sho
});


test('Select date from calendar widget', async ({ page }) => {
  // Navigate to the page with the date picker
  await page.goto('https://letcode.in/calendar');
  await page.locator('.is-danger.datetimepicker > .datetimepicker-container').isVisible();

  // Click the desired day in the calendar
  await page.click(`xpath = //div[@class='datetimepicker is-danger is-active']//button[.='19']`); // Example for selecting day 18

  // Optionally, verify that the correct date has been selected
  const dateValue = await page.locator('.card-content[_ngcontent-serverapp-c60] > .has-text-centered > [_ngcontent-serverapp-c60]'); // Or another input type
  expect(dateValue).toContainText('/19/'); // Example: confirm day 18 is selected
});
