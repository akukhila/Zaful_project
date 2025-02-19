import { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly favoritesIcon: Locator
    readonly supportCenterIcon: Locator


    constructor(page: Page) {
        this.page
        this.page = page;
        this.favoritesIcon = page.locator('.header-favorite');
        this.supportCenterIcon = page.locator('.header-service');
    }

    async signOut() {
        await this.page.locator('.js-topaccount-user').hover();
        await this.page.getByRole('link', { name: 'SIGN OUT' }).click();
    }

    async goToMyFavorites() {
        await this.favoritesIcon.click();

    }

    async goToSupportCenter(){
        await this.supportCenterIcon.click();
    }
}