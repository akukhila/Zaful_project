import { test, expect } from '@playwright/test';
import { PageManager } from '../helper/pageManager';



test.beforeEach(async ({ page }) => {
    await page.goto('/');


})

test.skip('Check My Favorites_empty list', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.signInPage.goToSignInPage();
    await pm.signInPage.signIn(process.env.MYUSERNAME, process.env.MYPASSWORD);
    await pm.homePage.goToMyFavorites()
    await pm.myFavoritePage.checkEmptyFavorites();
})

test.skip('Add item to My Favourites list', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.signInPage.goToSignInPage();
    await pm.signInPage.signIn(process.env.MYUSERNAME, process.env.MYPASSWORD);
    await pm.catalogPage.setLiketoFirstItem('Menswear');
    await pm.homePage.goToMyFavorites();
    const itemBox = page.locator('.hurry-buy-goods');
    await expect(itemBox).toBeVisible();
});


test.skip('Delete item from My Favorite list', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.signInPage.goToSignInPage();
    await pm.signInPage.signIn(process.env.MYUSERNAME, process.env.MYPASSWORD);
    await pm.homePage.goToMyFavorites();
    await pm.myFavoritePage.deleteItemFromFavorites();
    await pm.myFavoritePage.checkEmptyFavorites();
})

test.skip('Get to My Favorites list_ Unauthorized user', async ({ page }) => {
    const pm = new PageManager(page);
    const closeCouponButton = page.locator('.newuser-coupon-close')
    await closeCouponButton.click();
    await pm.homePage.goToMyFavorites();
    await expect(page.locator('h4').first()).toHaveText('Sign In');

})

test.skip('Check "Add to bag" function', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.signInPage.goToSignInPage();
    await pm.signInPage.signIn(process.env.MYUSERNAME, process.env.MYPASSWORD);
    await pm.catalogPage.setLiketoFirstItem('Menswear');
    await pm.homePage.goToMyFavorites();
    await pm.myFavoritePage.addItemToBag();
    await pm.myFavoritePage.clickViewBag()
    const bagItem = page.locator('.item1');
    await expect(bagItem).toBeVisible();

})

