import { Page } from '@playwright/test';
export class BasePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async closeCoockiesTab() {
    await this.page.locator('.cookie-consent__button').click();
  }
}
