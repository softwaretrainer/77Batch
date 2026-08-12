//To Provide Actual Test Scripts
import { test } from "@playwright/test";
import { general } from "../lib/General";
test("@Smoke_TC001-Login to HRMS Application", async ({ page }) => {
    //Test Steps
    let obj = new general(page);
    await obj.openApplication();
    await obj.login();
    await obj.logout();
    console.log("Execution Completed")
});
