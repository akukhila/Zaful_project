import { Page, expect } from '@playwright/test';

export class SupportCenterPage {
    readonly page: Page;
    readonly page1Promise: Promise<Page>



    constructor(page: Page) {
        this.page
        this.page = page;
        
    }

    async waitForNewTab(){
        const page1Promise = this.page.waitForEvent('popup');
        return await page1Promise;

    }

    async checkPresaleInformation() {
        const page1 = await this.waitForNewTab();
        page1.waitForLoadState('load');
        await expect(page1).toHaveScreenshot();
    }

    async checkOrderInformation() {
        const page1 = await this.waitForNewTab();
        const orderOption = page1.locator('.cate-nav-list').getByText('Order');
        await orderOption.click();
        await page1.setViewportSize({ width: 1920, height: 1080 });
        page1.waitForLoadState('load');
        await expect(page1).toHaveScreenshot();
    }

    async checkReturnsAndExchange() {
        const page1 = await this.waitForNewTab();
        const orderOption = page1.locator('.cate-nav-list').getByText('Returns & Exchange');
        await orderOption.click();
        page1.waitForLoadState('load');
        await expect(page1).toHaveScreenshot();
    }
}