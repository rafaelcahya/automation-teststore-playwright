import { test, expect } from "@playwright/test";
import Navbar from "../component/navbar.comp";
import AccountLoginPage from "../pages/accountLogin.page";
import ForgotLoginnamePage from "../pages/forgotLoginname.page";

test.describe("Forgot Loginname Tests", () => {
    test.beforeEach(async ({ page }) => {
        const navbar = new Navbar(page);
        const accountLoginPage = new AccountLoginPage(page);
        await page.goto("https://automationteststore.com/index.php?rt=account/login");
        await navbar.clickLoginRegisterBtn();
        await accountLoginPage.clickForgotLoginnameLink();
    });

    test("should be able to show error message if email is empty", async ({
        page,
    }) => {
        const forgotLoginnamePage = new ForgotLoginnamePage(page);
        await forgotLoginnamePage.lastNameField.fill(process.env.LOGIN_LASTNAME);
        await forgotLoginnamePage.clickContineBtn();
        await expect(forgotLoginnamePage.emptyEmailMsg).toBeVisible();
        await expect(forgotLoginnamePage.emptyEmailMsg).toContainText(
            process.env.INVALID_EMAIL_FORGOTLOGINNAME_MSG
        );
    });

    test("should be able to show error message if email is invalid format", async ({
        page,
    }) => {
        const forgotLoginnamePage = new ForgotLoginnamePage(page);
        await forgotLoginnamePage.lastNameField.fill(process.env.LOGIN_LASTNAME);
        await forgotLoginnamePage.emailField.fill(process.env.LOGIN_LASTNAME);
        await forgotLoginnamePage.clickContineBtn();
        await expect(forgotLoginnamePage.invalidEmailMsg).toBeVisible();
        await expect(forgotLoginnamePage.invalidEmailMsg).toContainText(
            process.env.UNREGISTERED_CREDENTIAL_FORGOTLOGINNAME_MSG
        );
    });

    test("should be able to show error message if last name is empty", async ({
        page,
    }) => {
        const forgotLoginnamePage = new ForgotLoginnamePage(page);
        await forgotLoginnamePage.emailField.fill(process.env.LOGIN_EMAIL);
        await forgotLoginnamePage.clickContineBtn();
        await expect(forgotLoginnamePage.emptyLastnameMsg).toBeVisible();
        await expect(forgotLoginnamePage.emptyLastnameMsg).toContainText(
            process.env.INVALID_LASTNAME_FORGOTLOGINNAME_MSG
        );
    });

    test("should be able to show error message if last name email are empty", async ({
        page,
    }) => {
        const forgotLoginnamePage = new ForgotLoginnamePage(page);
        await forgotLoginnamePage.emailField.fill('');
        await forgotLoginnamePage.lastNameField.fill('');
        await forgotLoginnamePage.clickContineBtn();
        await expect(forgotLoginnamePage.emptyEmailAndLastnameMsg).toBeVisible();
        await expect(forgotLoginnamePage.emptyEmailAndLastnameMsg).toContainText(
            process.env.INVALID_EMAIL_FORGOTLOGINNAME_MSG
        );
    });

    test("should be able to show error message if no record in data base", async ({
        page,
    }) => {
        const forgotLoginnamePage = new ForgotLoginnamePage(page);
        await forgotLoginnamePage.lastNameField.fill(process.env.STRING_VALUE32);
        await forgotLoginnamePage.emailField.fill(process.env.STRING_VALUE32 + "@example.com");
        await forgotLoginnamePage.clickContineBtn();
        await expect(forgotLoginnamePage.noRecordValidationMsg).toBeVisible();
        await expect(forgotLoginnamePage.noRecordValidationMsg).toContainText(
            process.env.UNREGISTERED_CREDENTIAL_FORGOTLOGINNAME_MSG
        );
    });

    test("should be able to show message if success request change login name", async ({
        page,
    }) => {
        const forgotLoginnamePage = new ForgotLoginnamePage(page);
        await forgotLoginnamePage.lastNameField.fill(process.env.LOGIN_LASTNAME);
        await forgotLoginnamePage.emailField.fill(process.env.LOGIN_EMAIL);
        await forgotLoginnamePage.clickContineBtn();
        await expect(forgotLoginnamePage.successRequestMsg).toBeVisible();
        await expect(forgotLoginnamePage.successRequestMsg).toContainText(
            process.env.SUCCESS_FORGOTLOGINNAME_MSG
        );
    });
});
