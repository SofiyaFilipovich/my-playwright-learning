import { test, expect } from '@playwright/test';

// ПОЗИТИВНЫЙ тест — проверяем что что-то ЕСТЬ
test('page has the correct title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

// НЕГАТИВНЫЙ тест — проверяем что чего-то НЕТ
test('page does not contain error text', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByText('404 Page Not Found')).not.toBeVisible();
});