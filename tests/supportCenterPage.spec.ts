import { test } from '../fixtures'

const username = process.env.MYUSERNAME;
const password = process.env.MYPASSWORD;

test.beforeEach(async ({ page }) => {
    await page.goto('/');
})

test('Check Presale Information', async ({ pageManager }) => {
    await pageManager.signInPage.goToSignInPage();
    await pageManager.signInPage.signIn(username, password);
    await pageManager.homePage.goToSupportCenter();
    await pageManager.supportCenterPage.checkPresaleInformation();
})

test('Check Order information', async ({ pageManager }) => {
    await pageManager.signInPage.goToSignInPage();
    await pageManager.signInPage.signIn(username, password);
    await pageManager.homePage.goToSupportCenter();
    await pageManager.supportCenterPage.checkOrderInformation();
})

test('Check Returns&Exchange information', async ({ pageManager }) => {
    await pageManager.signInPage.goToSignInPage();
    await pageManager.signInPage.signIn(username, password);
    await pageManager.homePage.goToSupportCenter();
    await pageManager.supportCenterPage.checkReturnsAndExchange();
})
