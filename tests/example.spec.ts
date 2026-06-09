// запрашиваем test & expect из файла playright/test (объявляем, что будем создаватьтесты и проверять резалты)
import { test, expect } from '@playwright/test';
// тестируем, что страничка есть и у нее есть название 
test('has title', async ({ page }) => {
  // ждем, что страничка прогрузилась 
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  // ждем, что появился ожидаемый результат - прогрузился тайтл странички Playright 
  await expect(page).toHaveTitle(/Playwright/);
});
// тестируем, что страничка запустилась 
test('get started link', async ({ page }) => {
  // ждем, пока страница Get started прогрузится
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  // кликаем (проверяем, что кликается) 
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  // проверяем что на странице виден заголовок с текстом 'Installation
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
