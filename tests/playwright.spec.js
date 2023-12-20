const { test, expect } = require('@playwright/test');

const websiteURL = 'http://localhost:3000';

test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});

test('Landing Page Title', async ({ page }) => {
  const pageTitle = await page.title();
  await expect(pageTitle).toBe(''); 
});

test('Header Logo Visibility on Landing Page', async ({ page }) => {
  await expect(page.locator('.logo')).toBeVisible();
});

test('Navigation to loyalty program', async ({ page }) => {
  await page.click('.menu-item:has-text("Loyalty Program")');
  await expect(page.url()).toBe(`${websiteURL}/`);
});

test('Join Us Button', async ({ page }) => {
  await expect(page.locator('.join now')).toBeVisible();
});

test('Navigation to Join Us Page', async ({ page }) => {
  await expect(page.url()).toBe(`${websiteURL}/`);
});

test('Footer Links on Landing Page', async ({ page }) => {
  const footerLinks = await page.locator('.footer-link').count();
  await expect(footerLinks).toBeGreaterThan(0); 
});

test('Header Logo Visibility on other Page', async ({ page }) => {
    await page.goto(`${websiteURL}/`);
    const pageTitle = await page.title();
    await expect(pageTitle).not.toBe(""); 
  });
