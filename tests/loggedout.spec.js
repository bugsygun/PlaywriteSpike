import 'jasmine';
const { test, expect } = require('@playwright/test');
import { LoggedOutHomePage } from '../../pages/logged-out-home.page';
import { ContactUsPage } from '../../pages/contact-us.page';
import { stringify } from 'querystring';

test.beforeEach(async ({ page }) => {
     await page.goto('https://www.cendex.co.uk/');
  });
    
 test.describe('logged out', () => {
    const homePage  = new LoggedOutHomePage();
    const contactUsPage = new ContactUsPage();

    test('navigates back to home page when clicking on header logo', async ({ page }) => {
        await homePage.expectToBeOnPage();

        await contactUsPage.navigateTo();
        await contactUsPage.expectToBeOnPage();

        await browser.wait(ExpectedConditions.presenceOf(contactUsPage.header.logo));
        await contactUsPage.header.logo.click();

        await homePage.expectToBeOnPage();
    });

 })
      


