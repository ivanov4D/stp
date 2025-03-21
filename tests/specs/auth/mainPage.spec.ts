import { test, expect } from '../../fixtures/fixtures';

test('Проверка доступности элементов хедера авторизованного пользователя', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов попапа уведомлений авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openNotificationsPopup();
  await mainPage.notificationsPopupListHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов раскрытого меню авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов меню ююзера в хэдере авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openHeaderUserMenu();
  await mainPage.headerUserMenuHasCorrectAriaSnapshot();
});
