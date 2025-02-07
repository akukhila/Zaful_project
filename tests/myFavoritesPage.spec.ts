import { test } from '@playwright/test';
import { PageManager } from '../helper/pageManager';



test.beforeEach(async ({ page }) => {
    await page.goto('/');


})

test('Check My Favorites_empty list', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.signInPage.goToSignInPage();
    await pm.signInPage.signIn(process.env.MYUSERNAME, process.env.MYPASSWORD);
    await pm.homePage.checkEmptyFavorites();
})