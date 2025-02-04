import { Page } from "@playwright/test";
import { SignInPage } from "./signInPage";

export class PageManager{
    readonly page: Page;
    readonly signInPage: SignInPage


    constructor(page: Page) {
        this.page
        this.page = page;
        this.signInPage = new SignInPage(this.page);
    }
}