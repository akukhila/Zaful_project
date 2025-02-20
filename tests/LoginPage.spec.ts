import { expect } from '@playwright/test';
import { test } from '../fixtures'


const username = process.env.MYUSERNAME;
const password = process.env.MYPASSWORD;


test.beforeEach(async ({ page }) => {
    await page.goto('/');

})


test('Login with correct credentials', async ({ pageManager, page }) => {
    const greeting = page.locator('.header-user-welcome')
    await pageManager.signInPage.goToSignInPage();
    await pageManager.signInPage.signIn(username, password);
    await expect(greeting).toContainText('Hi,');

});

test('Login with incorrect credentials', async ({ page, pageManager }) => {
    const errorMessage = page.locator('.msg_error').first()
    await pageManager.signInPage.goToSignInPage();
    await pageManager.signInPage.signIn('testaccount@gmail.com', 'testTest7777');
    await expect(errorMessage).toHaveText('Your account name or password is incorrect.');
});

test('Logout from account', async ({ pageManager }) => {
    await pageManager.signInPage.goToSignInPage();
    await pageManager.signInPage.signIn(username, password);
    await pageManager.homePage.signOut();
    await pageManager.signInPage.checkUserUnauthorized();
});

