import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://letcode.in/elements');
  await page.getByPlaceholder('Enter your git user name eg').click();
  await page.getByPlaceholder('Enter your git user name eg').fill('test');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('img', { name: 'Placeholder image' }).click();
  await page.getByText('5', { exact: true }).click();
  await page.getByText('Public Repos').click();
  await page.getByText('Public Gist').click();
  await page.getByText('0', { exact: true }).click();
  await page.getByText('Followers').click();
  await page.getByText('52').click();
});