import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

// Load environment variables based on NODE_ENV
dotenv.config({ path: '.env', quiet: true });
if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: '.env.test', override: true, quiet: true });
} else if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: '.env.production', override: true, quiet: true });
}

// For tests, use port 3001, otherwise use port 8080
const baseURL = process.env.NODE_ENV === 'test'
  ? 'http://localhost:3001'
  : (process.env.BASE_URL || 'http://localhost:8080');

export default defineConfig({
  testMatch: '**/*.spec.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL,
    trace: 'on-first-retry',
    headless: true, // Run in headless mode (no browser UI)
  },

  projects: [
    // Setup project - runs first to authenticate
    {
      name: 'setup',
      testMatch: '**/auth.setup.ts',
    },

    // Test project - depends on setup
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
  ],

  webServer: {
    command: 'rm -f .next/dev/lock && NODE_ENV=test NEXT_BUILD_ID=test next dev -p 3001 --turbopack',
    url: baseURL,
    reuseExistingServer: false,
    timeout: 120000,
    env: {
      NODE_ENV: 'test',
      NEXT_BUILD_ID: 'test',
    },
  },
});
