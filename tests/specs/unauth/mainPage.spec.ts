import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов хедера', async ({ mainPage }) => {
  await await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов табов категории', async ({ mainPage }) => {
  await mainPage.categoriesTabsHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов бокового меню слева', async ({ mainPage }) => {
  await mainPage.menuHasCorrectAriaSnapshot();
});
