import { Locator, Page, expect } from '@playwright/test';

export class SignInPage {
    readonly page: Page;
    readonly accountIcon: Locator
    readonly signInRegisterButton: Locator


    constructor(page: Page) {
        this.page
        this.page = page;
        this.accountIcon = page.locator('.js-topaccount-user');
        this.signInRegisterButton = page.getByRole('link', { name: 'Sign In/Register' })
    }

    async goToSignInPage() {
        const closeCouponButton = this.page.locator('.newuser-coupon-close')
        await closeCouponButton.click();
        await this.accountIcon.hover();
        await this.signInRegisterButton.click();
        await this.page.getByRole('link', { name: 'Sign In' }).click();
    }

    async signIn(username: string, password: string) {
        await this.page.locator('#email').fill(username);
        await this.page.locator('#passwordsign').fill(password);
        await this.page.getByRole('button', { name: 'SIGN IN' }).click();
    }

    async checkUserUnauthorized() {
        await this.accountIcon.hover();
        await expect(this.signInRegisterButton).toBeVisible();
    }
}