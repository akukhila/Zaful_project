import { Page, expect } from '@playwright/test';

export class MyFavoritesPage {
    readonly page: Page;



    constructor(page: Page) {
        this.page
        this.page = page;
    }

    async checkEmptyFavorites() {
        const myFindsBox = this.page.locator('.my-finds')
        await expect(myFindsBox).toHaveText('You have no favorites yet.')
    }

    async deleteItemFromFavorites() {
        const crossIcon = this.page.locator('.fav_delete');
        await crossIcon.click();
        const confirmButton = this.page.locator('.js-comfirm')
        await confirmButton.click();
    }
}