import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './reqres/tests',
  use: { baseURL: 'https://reqres.in' },
});
