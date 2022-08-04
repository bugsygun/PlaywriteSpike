const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://cendex.systest.gb.docker.xhrdev.net/');
 
});

test.describe('login', () => {
    test('should allow me to login', async ({ page }) => {
    
        await page.locator('text=Accept All Cookies').click();
        await page.locator('id=log-in').click();
            
        await page.fill('#Username', 'Cendexess@xperthr.co.uk');
        await page.fill('#Password', 'Password1');
      
        await page.locator('id=LoginButton').click();
      
     
    });
});

