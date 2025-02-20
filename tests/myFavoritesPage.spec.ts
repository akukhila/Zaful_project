import { expect } from '@playwright/test';
import { test } from '../fixtures'

const username = process.env.MYUSERNAME;
const password = process.env.MYPASSWORD;



test.beforeEach(async ({ page }) => {
    await page.goto('/');


})

test('Check My Favorites_empty list', async ({ pageManager }) => {
    await pageManager.signInPage.goToSignInPage();
    await pageManager.signInPage.signIn(username, password);
    await pageManager.homePage.goToMyFavorites()
    await pageManager.myFavoritePage.checkEmptyFavorites();
})

test('Add item to My Favourites list', async ({ page, pageManager }) => {
    await pageManager.signInPage.goToSignInPage();
    await pageManager.signInPage.signIn(username, password);
    await pageManager.catalogPage.setLiketoFirstItem('Menswear');
    await pageManager.homePage.goToMyFavorites();
    const itemBox = page.locator('.hurry-buy-goods');
    await expect(itemBox).toBeVisible();
});


test('Delete item from My Favorite list', async ({ pageManager }) => {
    await pageManager.signInPage.goToSignInPage();
    await pageManager.signInPage.signIn(username, password);
    await pageManager.homePage.goToMyFavorites();
    await pageManager.myFavoritePage.deleteItemFromFavorites();
    await pageManager.myFavoritePage.checkEmptyFavorites();
})

test('Get to My Favorites list_ Unauthorized user', async ({ page, pageManager }) => {
    const closeCouponButton = page.locator('.newuser-coupon-close')
    await closeCouponButton.click();
    await pageManager.homePage.goToMyFavorites();
    await expect(page.locator('h4').first()).toHaveText('Sign In');

})

test('Check "Add to bag" function', async ({ page, pageManager }) => {
    await pageManager.signInPage.goToSignInPage();
    await pageManager.signInPage.signIn(username, password);
    await pageManager.catalogPage.setLiketoFirstItem('Menswear');
    await pageManager.homePage.goToMyFavorites();
    await pageManager.myFavoritePage.addItemToBag();
    await pageManager.myFavoritePage.clickViewBag()
    const bagItem = page.locator('.item1');
    await expect(bagItem).toBeVisible();

})

