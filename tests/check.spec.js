import { test, expect } from '@playwright/test';

test('Navigate to Epic Café', async ({ page }) => {
  await page.goto('http://localhost:3001/');
  await page.getByRole('heading', { name: 'Epic Café' }).click();
});

test('Navigate to Home from Epic Café', async ({ page }) => {
  await page.getByText('Sip, relax, feel cozy.').click();
});

test('Navigate to Testimonials from Home', async ({ page }) => {
  await page.getByRole('link', { name: 'Testimonials' }).click();
});

test('Open popup on Join Now button click', async ({ page }) => {
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Join Now' }).click();
  const page1 = await page1Promise;
});

test('Navigate to Learn More from Loyalty Program', async ({ page }) => {
  await page.locator('#lo').getByRole('button', { name: 'Learn More' }).click();
});


