import { test, expect } from '@playwright/test';

test('Epic Café Page Test - Logo Presence', async ({ page }) => {
  // Navigate to the Epic Café website
  await page.goto('http://localhost:3000');

  // Check if the logo is present
  const logoElement = await page.waitForSelector('img[src="/images/logo.png"]');
  expect(logoElement).toBeTruthy();
});