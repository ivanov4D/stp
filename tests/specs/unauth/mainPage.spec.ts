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

test('Проверка доступности элементов списка добавления контента', async ({ mainPage }) => {
  await mainPage.openAddPopupList();
  await mainPage.addPopupListHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов попапа уведомлений', async ({ mainPage }) => {
  await mainPage.openNotificationsPopup();
  await mainPage.notificationsPopupListHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов модального окна авторизации', async ({ mainPage }) => {
  await mainPage.openAuthModal();
  await mainPage.authModalHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов модального окна регистрации', async ({ mainPage }) => {
  await mainPage.openAuthModal();
  await mainPage.switchToRegModal();
  await mainPage.regModalHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов раскрытого меню', async ({ mainPage }) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAriaSnapshot();
});

test('Переключение темы', async ({ mainPage }) => {
  await mainPage.checkThemeAttributeValue('dark2021');
  await mainPage.changeThemeToWhite();
  await mainPage.checkThemeAttributeValue('white2022');
});
