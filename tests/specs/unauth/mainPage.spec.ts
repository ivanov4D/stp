import { test } from '@playwright/test';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов хедера', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCoockiesTab();
  await await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов табов категории', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCoockiesTab();
  await mainPage.categoriesTabsHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов бокового меню слева', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCoockiesTab();
  await mainPage.menuHasCorrectAriaSnapshot();
});
