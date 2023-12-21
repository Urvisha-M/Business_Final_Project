import { test, expect } from '@playwright/test';

test('Epic Café page test - Title', async ({ page }) => {
  // Navigate to the Epic Café page
  await page.goto('http://localhost:3000');

  // Assert that the page title is correct
  await expect(page).toHaveTitle('Epic Café');

});