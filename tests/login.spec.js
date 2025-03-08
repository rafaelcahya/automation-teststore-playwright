import { test, expect } from "@playwright/test";
import Navbar from "../component/navbar.comp";
import AccountLoginPage from "../pages/accountLogin.page";
import generateData from "../helper/generateData";
import dotenv from "dotenv";

dotenv.config();

test.describe("Login Tests", () => {
    test.beforeEach(async ({ page }) => {
        const navbar = new Navbar(page);
        await page.goto(
            "https://automationteststore.com/index.php?rt=account/login"
        );
        await navbar.clickLoginRegisterBtn();
    });

    test("should be able to show message if login name and password are empty", async ({
        page,
    }) => {
        const loginPage = new AccountLoginPage(page);
        await loginPage.loginNameField.fill("");
        await loginPage.passwordField.fill("");
        await loginPage.clickLoginBtn();
        await expect(loginPage.invalidLoginMsg).toBeVisible();
    });

    test("should be able to show message if login with invalid credential", async ({
        page,
    }) => {
        const loginPage = new AccountLoginPage(page);
        const stringValue = generateData.generateRandomString();
        await loginPage.loginNameField.fill(stringValue);
        await loginPage.passwordField.fill(stringValue);
        await loginPage.clickLoginBtn();
        await expect(loginPage.invalidLoginMsg).toBeVisible();
    });

    test("should be able to login with valid credential", async ({ page }) => {
        const loginPage = new AccountLoginPage(page);
        await loginPage.loginNameField.fill(process.env.LOGIN_USERNAME);
        await loginPage.passwordField.fill(process.env.LOGIN_PASSWORD);
        await loginPage.clickLoginBtn();
        await expect(page).toHaveURL(
            "https://automationteststore.com/index.php?rt=account/account"
        );
    });
});
