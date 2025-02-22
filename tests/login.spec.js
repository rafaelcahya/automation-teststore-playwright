import { test, expect } from "@playwright/test";
import Navbar from "../component/navbar.comp";
import AccountLoginPage from "../pages/accountLogin.page";
import generateData from "../helper/generateData";

test.describe("Login Tests", () => {
    test.beforeEach(async ({ page }) => {
        const navbar = new Navbar(page);
        await page.goto("/");
        await navbar.clickLoginRegisterBtn();
    });

    test("should be able to input login name", async ({ page }) => {
        const loginPage = new AccountLoginPage(page);
        const stringValue = generateData.generateUniqueName();
        await loginPage.loginNameField.fill(stringValue);
        await expect(loginPage.loginNameField).toHaveValue(stringValue);
    });

    test("should be able to input password", async ({ page }) => {
        const loginPage = new AccountLoginPage(page);
        const stringValue = generateData.generateUniqueName();
        await loginPage.passwordField.fill(stringValue);
        await expect(loginPage.passwordField).toHaveValue(stringValue);
    });

    test("should be able to message is invalid login", async ({
        page,
    }) => {
        const loginPage = new AccountLoginPage(page);
        const stringValue = generateData.generateUniqueName();
        await loginPage.loginNameField.fill(stringValue);
        await loginPage.passwordField.fill(stringValue);
        await loginPage.clickLoginBtn();
        await expect(loginPage.invalidLoginMsg).toBeVisible();
    });

    test("should be able to login", async ({
        page,
    }) => {
        const loginPage = new AccountLoginPage(page);
        await loginPage.loginNameField.fill("caca123");
        await loginPage.passwordField.fill("caca123");
        await loginPage.clickLoginBtn();
        await expect(page).toHaveURL("https://automationteststore.com/index.php?rt=account/account")
    });
});
