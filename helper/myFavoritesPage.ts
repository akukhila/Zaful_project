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

    async addItemToBag() {
        const addToBagLink = this.page.getByRole('link', { name: 'Add To Bag' })
        await addToBagLink.click();
        const frame = this.page.locator('#xubox_iframe1').contentFrame();
        const addToBagButton = frame.getByRole('button', { name: 'ADD TO BAG' })
        await addToBagButton.waitFor({state:'visible'});
        await addToBagButton.click();
    }

    async clickViewBag() {
        const viewBagLink = this.page.getByRole('link', { name: 'View Bag' })
        await viewBagLink.click();
    }
}