import { test } from '../fixtures'

const username = process.env.MYUSERNAME;
const password = process.env.MYPASSWORD;

test.beforeEach(async ({ page }) => {
    await page.goto('/');

})

test('Check Support Center page', async ({ pageManager }) => {
    await pageManager.signInPage.goToSignInPage();
    await pageManager.signInPage.signIn(username, password);
    await pageManager.homePage.goToSupportCenter();
    await pageManager.supportCenterPage.checkGenerallPageContent();

})

