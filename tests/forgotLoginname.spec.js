import { test, expect } from "@playwright/test";
import Navbar from "../component/navbar.comp";
import AccountLoginPage from "../pages/accountLogin.page";
import generateData from "../helper/generateData";
import ForgotLoginnamePage from "../pages/forgotLoginname.page";

test.describe("Forgot Loginname Tests", () => {
    test.beforeEach(async ({ page }) => {
        const navbar = new Navbar(page);
        const accountLoginPage = new AccountLoginPage(page);
        await page.goto("/");
        await navbar.clickLoginRegisterBtn();
        await accountLoginPage.clickForgotLoginnameLink();
    });

    test("should be able to input login name", async ({ page }) => {
        const forgotLoginnamePage = new ForgotLoginnamePage(page);
        const stringValue = generateData.generateUniqueName();
        await forgotLoginnamePage.lastNameField.fill(stringValue);
        await expect(forgotLoginnamePage.lastNameField).toHaveValue(
            stringValue
        );
    });

    test("should be able to input email", async ({ page }) => {
        const forgotLoginnamePage = new ForgotLoginnamePage(page);
        const stringValue = generateData.generateUniqueName();
        await forgotLoginnamePage.emailField.fill(stringValue + "@example.com");
        await expect(forgotLoginnamePage.emailField).toHaveValue(
            stringValue + "@example.com"
        );
    });

    test("should be able to show error message if last name is empty", async ({
        page,
    }) => {
        const forgotLoginnamePage = new ForgotLoginnamePage(page);
        await forgotLoginnamePage.emailField.fill("moose@example.com");
        await forgotLoginnamePage.clickContineBtn();
        await expect(forgotLoginnamePage.notRecordedLastnameMsg).toBeVisible();
    });

    test("should be able to show error message if email is empty", async ({
        page,
    }) => {
        const forgotLoginnamePage = new ForgotLoginnamePage(page);
        await forgotLoginnamePage.lastNameField.fill("moose");
        await forgotLoginnamePage.clickContineBtn();
        await expect(forgotLoginnamePage.notRecordedEmailMsg).toBeVisible();
    });

    test("should be able to show error message if no record in data base", async ({
        page,
    }) => {
        const forgotLoginnamePage = new ForgotLoginnamePage(page);
        await forgotLoginnamePage.lastNameField.fill("asdas");
        await forgotLoginnamePage.emailField.fill("asdasd@example.com");
        await forgotLoginnamePage.clickContineBtn();
        await expect(forgotLoginnamePage.noRecordValidationMsg).toBeVisible();
    });

    test("should be able to show message if success request change login name", async ({
        page,
    }) => {
        const forgotLoginnamePage = new ForgotLoginnamePage(page);
        await forgotLoginnamePage.lastNameField.fill("PUTRA UGIRA");
        await forgotLoginnamePage.emailField.fill("cahyaputraugira95@gmail.com");
        await forgotLoginnamePage.clickContineBtn();
        await expect(forgotLoginnamePage.successRequestMsg).toBeVisible();
    });

    test("should be able to login with old login name after request change login name", async ({
        page,
    }) => {
        const forgotLoginnamePage = new ForgotLoginnamePage(page);
        const accountLoginPage = new AccountLoginPage(page);
        await forgotLoginnamePage.lastNameField.fill("PUTRA UGIRA");
        await forgotLoginnamePage.emailField.fill("cahyaputraugira95@gmail.com");
        await forgotLoginnamePage.clickContineBtn();
        await accountLoginPage.loginNameField.fill("caca123");
        await accountLoginPage.passwordField.fill("caca123");
        await accountLoginPage.clickLoginBtn();
        await expect(page).toHaveURL(
            "https://automationteststore.com/index.php?rt=account/account"
        );
    });
});
