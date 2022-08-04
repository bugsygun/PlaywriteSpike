const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('url');
 
});

test.describe('login', () => {
    test('should allow me to login', async ({ page }) => {
    
        await page.locator('text=Accept All Cookies').click();
        await page.locator('id=log-in').click();
            
        await page.fill('#Username', 'username');
        await page.fill('#Password', 'password');
      
        await page.locator('id=LoginButton').click();
      
     
    });
});

