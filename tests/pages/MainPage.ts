import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  private readonly headerLocator: Locator;
  private readonly categoriesTabsLocator: Locator;
  private readonly menuLocator: Locator;
  private readonly headerAddButtonLocator: Locator;
  private readonly headerNotificationsButtonLocator: Locator;
  private readonly headerLoginButtonLocator: Locator;
  private readonly headerAddButtonPopupListLocator: Locator;
  private readonly headerNotificationsPopupLocator: Locator;
  private readonly authModulLocator: Locator;
  private readonly switchToRegModalLocator: Locator;
  private readonly menuButtonLocator: Locator;
  private readonly openMenuAriaLocator: Locator;
  private readonly changeThemeBtnLocator: Locator;
  private readonly userLogoLocator: Locator;
  private readonly headerUserMenuLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLocator = this.page.locator('.header-module__charHeaderWrapper');
    this.categoriesTabsLocator = this.page.locator('.wdp-tabs-module__tabs');
    this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
    this.headerAddButtonLocator = this.page.getByRole('button', { name: 'Добавить' });
    this.headerNotificationsButtonLocator = this.page.getByRole('button', { name: 'Уведомления' });
    this.headerLoginButtonLocator = this.page.getByRole('button', { name: 'Вход и регистрация' });
    this.headerAddButtonPopupListLocator = this.page.locator(
      '.wdp-header-right-module__uploader ul',
    );
    this.headerNotificationsPopupLocator = this.page.locator(
      '.wdp-notifications-popup-module__wrapper',
    );
    this.authModulLocator = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .locator('div[role="form"]');
    this.switchToRegModalLocator = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .locator('div[role="form"]')
      .getByRole('button', { name: 'Зарегистрироваться' });
    this.menuButtonLocator = this.page.getByRole('button', { name: 'Открыть меню навигации' });
    this.openMenuAriaLocator = this.page.locator('.menu-content-module__menuOpen');
    this.changeThemeBtnLocator = this.page.getByRole('button', {
      name: 'Переключить на светлую тему',
    });
    this.userLogoLocator = this.page.locator(
      '//section[contains(@class, "wdp-header-user-avatar-module__wrapper")]',
    ); // xpath
    this.headerUserMenuLocator = this.page.getByText(/channel.*ПрофильМой каналСтудия RUTUBEВыйти/);
  }

  //actions
  async openHeaderUserMenu() {
    await this.userLogoLocator.click();
  }
  async changeThemeToWhite() {
    await this.changeThemeBtnLocator.click();
  }
  async openFullMenu() {
    await this.menuButtonLocator.click();
  }
  async open() {
    await this.page.goto('https://rutube.ru/');
    // await this.page.getByRole('button').filter({ hasText: /^$/ }).click();
  }
  async openAddPopupList() {
    await this.headerAddButtonLocator.click();
  }
  async openNotificationsPopup() {
    await this.headerNotificationsButtonLocator.click();
  }
  async openAuthModal() {
    await this.headerLoginButtonLocator.click();
  }
  async switchToRegModal() {
    await this.switchToRegModalLocator.click();
  }
  //assertions
  async headerHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerLocator, 'headerAriaSnapShot.yml');
  }
  async categoriesTabsHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.categoriesTabsLocator, 'categoriesTabsAriaSnapshot.yml');
  }
  async menuHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.menuLocator, 'menuAriaSnapshot.yml');
  }
  async addPopupListHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerAddButtonPopupListLocator, 'addButtonList.yml');
  }
  async notificationsPopupListHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerNotificationsPopupLocator, 'notificationsPopup.yml');
  }
  async authModalHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.authModulLocator, 'authModal.yml');
  }
  async regModalHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.authModulLocator, 'regModal.yml');
  }
  async fullMenuHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.openMenuAriaLocator, 'fullMenuSnapshot.yml');
  }
  async headerUserMenuHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerUserMenuLocator, 'headerUserMenuSnapshot.yml');
  }
  async checkThemeAttributeValue(attributeValue: 'dark2021' | 'white2022') {
    await expect(this.page.locator('html')).toHaveAttribute('data-pen-theme', attributeValue);
  }
}
