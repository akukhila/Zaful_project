import { test, expect } from '@playwright/test';
import { PageManager } from '../helper/pageManager';

const username = process.env.MYUSERNAME;
const password = process.env.MYPASSWORD;

test.beforeEach(async ({ page }) => {
    await page.goto('/');

})

test('Check Support Center page', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.signInPage.goToSignInPage();
    await pm.signInPage.signIn(username, password);
    await pm.homePage.goToSupportCenter();
    await pm.supportCenterPage.checkGenerallPageContent();

})

