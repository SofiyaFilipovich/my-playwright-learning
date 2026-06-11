// Week 5 practice - conflict-test branch
import { test, expect } from '@playwright/test';

test.describe('SauceDemo tests', () => {

test.beforeEach(async ({ page }) => {
await page.goto ('https://www.saucedemo.com'); 
  await page.getByPlaceholder ('Username'). fill ('standard_user'); 
  await page.getByPlaceholder ('Password'). fill ('secret_sauce'); 
 await page.getByRole ('button', {name: 'Login'}). click (); 
    });

test ('successful login', async ({ page }) => {
await expect(page.getByText('Products')).toBeVisible(); 
});

test ('unsuccessful login', async ({ page }) => {
await page.goto ('https://www.saucedemo.com'); 
await page.getByPlaceholder ('Username'). fill ('standard_user'); 
await page.getByPlaceholder ('Password'). fill ('wrong_password'); 
await page.getByRole ('button', { name: 'Login' }). click (); 
await expect (page.getByText('Epic sadface: Username and password do not match any user in this service')). toBeVisible(); 
});

test ('add to cart', async ({ page }) => {
await page.locator ('[data-test="add-to-cart-sauce-labs-backpack"]'). click (); 
await expect (page.locator('.shopping_cart_badge')). toHaveText('1'); 
});

test ('In Cart', async ({page}) => {
await page.locator ('[data-test="add-to-cart-sauce-labs-backpack"]'). click (); 
await page.locator ('.shopping_cart_link'). click (); 
await expect (page. getByText('Sauce Labs Backpack')). toBeVisible (); 
});

test ('Delete product',  async ({page}) => {
await page.locator ('[data-test="add-to-cart-sauce-labs-backpack"]'). click (); 
await page.locator (' .shopping_cart_link'). click (); 
await page.locator ('[data-test="remove-sauce-labs-backpack"]'). click (); 
await expect (page.locator ('.shopping_cart_badge')). not.toBeVisible() 
});

test ('Add Products', async ({page}) => {
await page.locator ('[data-test="add-to-cart-sauce-labs-backpack"]'). click (); 
await page.locator ('[data-test="add-to-cart-sauce-labs-bike-light"]'). click (); 
await expect (page.locator ('.shopping_cart_badge')). toHaveText ('2'); 
});

});





