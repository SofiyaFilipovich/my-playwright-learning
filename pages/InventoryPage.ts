import {Page} from '@playwright/test' 
export class InventoryPage {
    readonly page: Page; 
constructor (page: Page) {
this.page = page; 
}
async addToCart() {
    await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }
  getCartBadge() {
    return this.page.locator('.shopping_cart_badge');
  }
  async removeFromCart() { 
    await this.page.locator('[data-test="remove-sauce-labs-backpack"]').click(); }

    async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
}
getCartItem() {
  return this.page.getByText('Sauce Labs Backpack');
}
}
