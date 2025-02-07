import { Page } from "@playwright/test";
import { SignInPage } from "./signInPage";
import { HomePage } from "./homePage";

export class PageManager {
    readonly page: Page;
    readonly signInPage: SignInPage
    readonly homePage: HomePage


    constructor(page: Page) {
        this.page
        this.page = page;
        this.signInPage = new SignInPage(this.page);
        this.homePage = new HomePage(this.page);
    }
}