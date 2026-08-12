import {test} from "@playwright/test";
import {general} from "../lib/General";

test.describe("Test Suite for HRMS Application", () => {
   test("TC001-Login to HRMS Application", async ({ page }) => {
    //Test Steps
    let obj = new general(page);
    await obj.openApplication();
    await obj.login();
    await obj.logout();
});
 test("TC002-Add Employee in HRMS Application", async ({page}) => {
    //Test Steps
    let obj = new general(page);
   await obj.openApplication();
   await obj.waitStmt();
    await obj.login();
    await obj.waitStmt();
    await obj.addEmployee();
    await obj.waitStmt();
    await obj.logout();
    await obj.waitStmt();
});
});