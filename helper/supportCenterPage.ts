import { Page, expect } from '@playwright/test';

export class SupportCenterPage {
    readonly page: Page;


    constructor(page: Page) {
        this.page
        this.page = page;

    }

    async checkGenerallPageContent(){
        const page1Promise = this.page.waitForEvent('popup');
        const page1 = await page1Promise;
        page1.waitForLoadState('load');
        await expect(page1).toHaveScreenshot();
    }
}