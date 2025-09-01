import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './sauceDemo/tests',
  use: { baseURL: 'https://www.saucedemo.com' },
  projects: [
    {
      name: 'Sauce Demo Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
});
