import { test, expect } from '@playwright/test';

test('Header, Title, and Logo Test', async ({ page }) => {
  // Navigate to the Epic Café website
  await page.goto('http://localhost:3000');

  const pageTitle = await page.title();
  expect(pageTitle).toContain('Epic Café');


  const headerContent = await page.$eval('header', (header) => {
    return {
      title: header.querySelector('h1').textContent.trim(),
      menuItems: Array.from(header.querySelectorAll('nav a')).map((item) => item.textContent.trim()),
      logoSrc: header.querySelector('img').src,
    };
  });

  expect(headerContent.title).toBe('Epic Café');

  expect(headerContent.menuItems).toEqual(['Home', 'Testimonials', 'Loyalty Program']);

  expect(headerContent.logoSrc.toLowerCase()).toContain('.png');
});