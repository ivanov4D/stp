import { test, expect } from '@playwright/test';
import path from 'path';
import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

chromium.use(stealth());

test('authTest', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const closeBtnAfterAuth = page.getByRole('button', { name: 'Закрыть' });
  const profileLinkBtn = page.locator('a').filter({ hasText: 'Профиль' });

  await page.goto('https://rutube.ru/');
  await page
    .locator('div')
    .filter({ hasText: /^Вход и регистрация$/ })
    .locator('button')
    .click();
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('textbox', { name: 'Введите телефон или электронную почту' })
    .fill(process.env.LOGIN!);
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('button', { name: 'Продолжить' })
    .click();
  //   await page.locator('iframe[title="Multipass"]').contentFrame().locator('#login-password').click();
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .locator('#login-password')
    .fill(process.env.PASSWORD!);
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('button', { name: 'Войти', exact: true })
    .click();
  if (await closeBtnAfterAuth.isVisible()) {
    await closeBtnAfterAuth.click();
  }
  await page.locator('.wdp-header-user-avatar-module__wrapper').click();
  await expect(profileLinkBtn).toBeVisible();
  await profileLinkBtn.click();
  //   await page.locator('a').filter({ hasText: 'Профиль' }).click();
  await page.context().storageState({ path: authFile });
});
