import { Page } from "@playwright/test";
import { SignInPage } from "./signInPage";
import { HomePage } from "./homePage";
import { CatalogPage } from "./catalogPage";
import { MyFavoritesPage } from "./myFavoritesPage";

export class PageManager {
    readonly page: Page;
    readonly signInPage: SignInPage
    readonly homePage: HomePage
    readonly catalogPage: CatalogPage
    readonly myFavoritePage: MyFavoritesPage


    constructor(page: Page) {
        this.page
        this.page = page;
        this.signInPage = new SignInPage(this.page);
        this.homePage = new HomePage(this.page);
        this.catalogPage = new CatalogPage(this.page);
        this.myFavoritePage = new MyFavoritesPage(this.page)
    }
}