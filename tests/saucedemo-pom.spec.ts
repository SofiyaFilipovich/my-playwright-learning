import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';

test('successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);
});

test('login with wrong password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'wrong_password');
  await expect(loginPage.getErrorMessage()).toBeVisible();
});

test('Add goods', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.addToCart();
  await expect(inventoryPage.getCartBadge()).toHaveText('1');
});

test('Remove goods', async ({ page }) => { 
const loginPage = new LoginPage(page); 
const inventoryPage = new InventoryPage(page); 
await loginPage.goto(); 
await loginPage.login('standard_user', 'secret_sauce'); 
await inventoryPage.addToCart(); 
await inventoryPage.removeFromCart();
await expect(inventoryPage.getCartBadge()).not.toBeVisible();
 });

 test('Empty login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('', '');
  await expect(loginPage.getEmptyFormError()).toBeVisible();
});

test ('Check shopping cart', async ({page}) => {
const loginPage = new LoginPage(page); 
const inventoryPage = new InventoryPage(page); 
await loginPage.goto(); 
await loginPage.login('standard_user', 'secret_sauce'); 
await inventoryPage.addToCart(); 
await inventoryPage.goToCart(); 
await expect (inventoryPage.getCartItem()).toBeVisible (); 
})