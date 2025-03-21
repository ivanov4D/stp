import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов хедера неавторизованного пользователя', async ({
  mainPage,
}) => {
  await await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов табов категории неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.categoriesTabsHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов бокового меню слева неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.menuHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов списка добавления контента неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openAddPopupList();
  await mainPage.addPopupListHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов попапа уведомлений неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openNotificationsPopup();
  await mainPage.notificationsPopupListHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов модального окна авторизации неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openAuthModal();
  await mainPage.authModalHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов модального окна регистрации неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openAuthModal();
  await mainPage.switchToRegModal();
  await mainPage.regModalHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов раскрытого меню неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAriaSnapshot();
});

test('Переключение темы', async ({ mainPage }) => {
  await mainPage.checkThemeAttributeValue('dark2021');
  await mainPage.changeThemeToWhite();
  await mainPage.checkThemeAttributeValue('white2022');
});
