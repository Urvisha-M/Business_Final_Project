import { test, expect } from '@playwright/test';

test('Navigate to Epic Café and click on "Sip, relax, feel cozy."', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('heading', { name: 'Epic Café' }).click();
  await page.getByText('Sip, relax, feel cozy.').click();
});

test('Navigate to Testimonials via Home link', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Testimonials' }).click();
});

test('Navigate to Loyalty Program and click "Learn More" button', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Loyalty Program' }).click();
  await page.locator('#lo').getByRole('button', { name: 'Learn More' }).click();
});
