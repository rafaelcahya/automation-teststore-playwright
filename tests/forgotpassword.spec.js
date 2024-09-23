import { test, expect } from "@playwright/test";
import Navbar from "../component/navbar.comp";
import AccountLoginPage from "../pages/accountLogin.page";
import generateData from "../helper/generateData";
import ForgotPassword from "../pages/forgotpassword.page";

test.describe("Register Tests", () => {
    test.beforeEach(async ({ page }) => {
        const navbar = new Navbar(page);
        const accountLoginPage = new AccountLoginPage(page);
        await page.goto("/");
        await navbar.clickLoginRegisterBtn();
        await accountLoginPage.clickForgotPasswordLink();
    });

    test("should be able to input login name", async ({ page }) => {
        const forgotPasswordPage = new ForgotPassword(page);
        const stringValue = generateData.generateUniqueName();
        await forgotPasswordPage.loginNameField.fill(stringValue);
        await expect(forgotPasswordPage.loginNameField).toHaveValue(
            stringValue
        );
    });

    test("should be able to input email", async ({ page }) => {
        const forgotPasswordPage = new ForgotPassword(page);
        const stringValue = generateData.generateUniqueName();
        await forgotPasswordPage.emailField.fill(stringValue + "@example.com");
        await expect(forgotPasswordPage.emailField).toHaveValue(
            stringValue + "@example.com"
        );
    });

    test("should be able to show error message if email is empty", async ({
        page,
    }) => {
        const forgotPasswordPage = new ForgotPassword(page);
        await forgotPasswordPage.emailField.fill("");
        await forgotPasswordPage.clickContineBtn();
        await expect(forgotPasswordPage.emailValidationMsg1).toBeVisible();
    });

    test("should be able to show error message if login name is empty", async ({
        page,
    }) => {
        const forgotPasswordPage = new ForgotPassword(page);
        await forgotPasswordPage.emailField.fill("asdasd@example.com");
        await forgotPasswordPage.clickContineBtn();
        await expect(forgotPasswordPage.nameValidationMsg1).toBeVisible();
    });

    test("should be able to show error message if no record in data base", async ({
        page,
    }) => {
        const forgotPasswordPage = new ForgotPassword(page);
        await forgotPasswordPage.loginNameField.fill("asdas");
        await forgotPasswordPage.emailField.fill("asdasd@example.com");
        await forgotPasswordPage.clickContineBtn();
        await expect(forgotPasswordPage.noRecordValidationMsg).toBeVisible();
    });

    test("should be able to show message if success request change password", async ({
        page,
    }) => {
        const forgotPasswordPage = new ForgotPassword(page);
        await forgotPasswordPage.loginNameField.fill("caca123");
        await forgotPasswordPage.emailField.fill("cahyaputraugira95@gmail.com");
        await forgotPasswordPage.clickContineBtn();
        await expect(forgotPasswordPage.successMsg).toBeVisible();
    });

    test("should be able to login with old password after request change password", async ({
        page,
    }) => {
        const forgotPasswordPage = new ForgotPassword(page);
        const accountLoginPage = new AccountLoginPage(page)
        await forgotPasswordPage.loginNameField.fill("caca123");
        await forgotPasswordPage.emailField.fill("cahyaputraugira95@gmail.com");
        await forgotPasswordPage.clickContineBtn();
        await accountLoginPage.loginNameField.fill("caca123")
        await accountLoginPage.passwordField.fill("caca123")
        await accountLoginPage.clickLoginBtn()
        await expect(page).toHaveURL("https://automationteststore.com/index.php?rt=account/account")
    });
});
