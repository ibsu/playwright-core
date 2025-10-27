import { test, expect } from "@playwright/test";

test.beforeEach(async (page) => {});
test.describe("All scenarios related to login", () => {
  test("Log in failure test", async ({ page }) => {
    await page.goto("http://demoqa.com/login");
    await page.getByPlaceholder("UserName").fill("autotestsudhi");
    await page.getByPlaceholder("Password").fill("autoTest@1234");
    await page.getByRole("button", { name: "Login" }).click();
    expect(
      page.getByRole("paragraph", { name: "Invalid username or password!" })
    ).toBeVisible({ timeout: 10000 });
    console.log("waiting");
  });
});
