import { Page } from '@playwright/test';

export class CatalogPage {
    readonly page: Page;


    constructor(page: Page) {
        this.page
        this.page = page;

    }

    async setLiketoFirstItem(catalogTitle: string) {
        await this.page.getByTitle(catalogTitle).first().click();
        await this.page.locator('.like-icon').first().click();
    }
}
