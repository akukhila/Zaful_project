import { Locator, Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly favoritesIcon: Locator


    constructor(page: Page) {
        this.page
        this.page = page;
        this.favoritesIcon = page.locator('.header-favorite')
    }

    async signOut() {
        await this.page.locator('.js-topaccount-user').hover();
        await this.page.getByRole('link', { name: 'SIGN OUT' }).click();
    }

    async checkEmptyFavorites() {
        await this.favoritesIcon.click();
        const myFindsBox = this.page.locator('.my-finds')
        await expect(myFindsBox).toHaveText('You have no favorites yet.')
    }
}