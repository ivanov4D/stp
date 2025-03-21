import { expect, Locator, Page } from '@playwright/test';
export class BasePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async closeCoockiesTab() {
    await this.page.locator('.cookie-consent__button').click();
    // await this.page.locator('button[type="button"]', { hasText: 'Ok' }).click();
  }
  protected async checkAriaSnapshot(locator: Locator, ariaName: string) {
    await expect(locator).toMatchAriaSnapshot({ name: ariaName });
  }
}
