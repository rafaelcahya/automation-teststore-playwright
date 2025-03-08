import { test, expect } from "@playwright/test";
import Navbar from "../component/navbar.comp";
import AccountLoginPage from "../pages/accountLogin.page";
import ForgotPassword from "../pages/forgotpassword.page";

test.describe("Forgot Password Tests", () => {
    test.beforeEach(async ({ page }) => {
        const navbar = new Navbar(page);
        const accountLoginPage = new AccountLoginPage(page);
        await page.goto("https://automationteststore.com/index.php?rt=account/login");
        await navbar.clickLoginRegisterBtn();
        await accountLoginPage.clickForgotPasswordLink();
    });

    test("should be able to show message if email is empty", async ({
        page,
    }) => {
        const forgotPasswordPage = new ForgotPassword(page);
        await forgotPasswordPage.loginNameField.fill(process.env.STRING_VALUE32);
        await forgotPasswordPage.emailField.fill("");
        await forgotPasswordPage.clickContineBtn();
        await expect(forgotPasswordPage.emptyEmailMsg).toBeVisible();
        await expect(forgotPasswordPage.emptyEmailMsg).toContainText(
            process.env.INVALID_EMAIL_FORGOTPASSWORD_MSG
        );
    });

    test("should be able to show message if email is invalid format", async ({
        page,
    }) => {
        const forgotPasswordPage = new ForgotPassword(page);
        await forgotPasswordPage.loginNameField.fill(process.env.STRING_VALUE32);
        await forgotPasswordPage.emailField.fill(process.env.STRING_VALUE32);
        await forgotPasswordPage.clickContineBtn();
        await expect(forgotPasswordPage.invalidEmailMsg).toBeVisible();
        await expect(forgotPasswordPage.invalidEmailMsg).toContainText(
            process.env.INVALID_EMAIL_FORMAT_FORGOTPASSWORD_MSG
        );
    });

    test("should be able to show message if login name is empty", async ({
        page,
    }) => {
        const forgotPasswordPage = new ForgotPassword(page);
        await forgotPasswordPage.emailField.fill(process.env.LOGIN_EMAIL);
        await forgotPasswordPage.clickContineBtn();
        await expect(forgotPasswordPage.invalidLoginnameMsg).toBeVisible();
        await expect(forgotPasswordPage.invalidLoginnameMsg).toContainText(
            process.env.INVALID_LOGINNAME_FORGOTPASSWORD_MSG
        );
    });

    test("should be able to show message if email and login name are empty", async ({
        page,
    }) => {
        const forgotPasswordPage = new ForgotPassword(page);
        await forgotPasswordPage.loginNameField.fill("");
        await forgotPasswordPage.emailField.fill("");
        await forgotPasswordPage.clickContineBtn();
        await expect(forgotPasswordPage.emptyEmailAndLoginnameMsg).toBeVisible();
        await expect(forgotPasswordPage.emptyEmailAndLoginnameMsg).toContainText(
            process.env.INVALID_CREDENTIAL_FORGOTPASSWORD_MSG
        );
    });

    test("should be able to show message if request forgot password with unregistered credential", async ({
        page,
    }) => {
        const forgotPasswordPage = new ForgotPassword(page);
        await forgotPasswordPage.loginNameField.fill(process.env.STRING_VALUE32);
        await forgotPasswordPage.emailField.fill(process.env.STRING_VALUE32 + "@example.com");
        await forgotPasswordPage.clickContineBtn();
        await expect(forgotPasswordPage.noRecordValidationMsg).toBeVisible();
        await expect(forgotPasswordPage.noRecordValidationMsg).toContainText(
            process.env.UNREGISTERED_CREDENTIAL_FORGOTPASSWORD_MSG
        );
    });

    test("should be able to show message if success request change password", async ({
        page,
    }) => {
        const forgotPasswordPage = new ForgotPassword(page);
        await forgotPasswordPage.loginNameField.fill(process.env.LOGIN_USERNAME);
        await forgotPasswordPage.emailField.fill(process.env.LOGIN_EMAIL);
        await forgotPasswordPage.clickContineBtn();
        await expect(forgotPasswordPage.successMsg).toBeVisible();
        await expect(forgotPasswordPage.successMsg).toContainText(
            process.env.SUCCESS_FORGOTPASSWORD_MSG
        );
    });
});
