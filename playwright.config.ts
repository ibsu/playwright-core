import { defineConfig, devices } from "@playwright/test";

import dotenv from "dotenv";
import path from "path";
const ENV = process.env.ENV || "dev";
dotenv.config({ path: path.resolve(__dirname, `.env.${ENV}`) });

const rpConfig = {
  endpoint: "https://demo.reportportal.io/api/v1",

  apiKey:
    "report-key_GCBgnRUIRjalRrjxJ4YBcKA_D_3UcxQEVsi6TAE3-bQaHeX-G31hvEYlTQwm6OTY",

  project: "ibsu_personal",

  launch: "Playwright demo",

  description: "My awesome launch",

  attributes: [
    {
      key: "attributeKey",

      value: "attrbiuteValue",
    },

    {
      value: "anotherAttrbiuteValue",
    },
  ],

  mode: "DEFAULT",
};

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["@reportportal/agent-js-playwright", rpConfig]], //"html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
