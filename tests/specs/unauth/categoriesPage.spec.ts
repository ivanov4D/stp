import { test, expect } from '../../fixtures/fixtures';
import { CategoriesPage } from '../../pages/CategoriesPage';

test('Проверка лэйаута', async ({ categoriesPage }) => {
  await categoriesPage.contentPageHasCorrectLayout();
});
