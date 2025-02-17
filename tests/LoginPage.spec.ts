import { test, expect } from '@playwright/test';
import { PageManager } from '../helper/pageManager';



test.beforeEach(async ({ page }) => {
    await page.goto('/');

})


test('Login with correct credentials', async ({ page }) => {
    const pm = new PageManager(page);
    const greeting = page.locator('.header-user-welcome')
    await pm.signInPage.goToSignInPage();
    await pm.signInPage.signIn(process.env.MYUSERNAME, process.env.MYPASSWORD);
    await page.frameLocator('iframe[title="reCAPTCHA"]').locator('.recaptcha-checkbox').click();
    await expect(greeting).toContainText('Hi,');

});

test('Login with incorrect credentials', async ({ page }) => {
    const pm = new PageManager(page);
    const errorMessage = page.locator('.msg_error').first()
    await pm.signInPage.goToSignInPage();
    await pm.signInPage.signIn('testaccount@gmail.com', 'testTest7777');
    await expect(errorMessage).toHaveText('Your account name or password is incorrect.');
});

test.skip('Logout from account', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.signInPage.goToSignInPage();
    await pm.signInPage.signIn(process.env.MYUSERNAME, process.env.MYPASSWORD);
    await pm.homePage.signOut();
    await pm.signInPage.checkUserUnauthorized();
});
