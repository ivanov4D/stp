import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов хедера', async ({ mainPage }) => {
  await await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов попапа уведомлений', async ({ mainPage }) => {
  await mainPage.openNotificationsPopup();
  await mainPage.notificationsPopupListHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов раскрытого меню', async ({ mainPage }) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAriaSnapshot();
});
