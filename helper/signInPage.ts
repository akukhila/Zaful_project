import { Page } from '@playwright/test';

export class SignInPage {
    readonly page: Page;


    constructor(page: Page) {
        this.page
        this.page = page;
    }

    async goToSignInPage() {
        await this.page.locator('.newuser-coupon-close').click();
        await this.page.locator('.js-topaccount-user').hover();
        await this.page.getByRole('link', { name: 'Sign In/Register' }).click();
        await this.page.getByRole('link', { name: 'Sign In' }).click();
    }

    async signIn(username:string, password:string){
        await this.page.locator('#email').fill(username);
        await this.page.locator('#passwordsign').fill(password);
        await this.page.getByRole('button',{name:'SIGN IN'}).click();
    }
}