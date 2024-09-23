import { test, expect } from "@playwright/test";
import Navbar from "../component/navbar.comp";
import AccountLoginPage from "../pages/accountLogin.page";
import generateData from "../helper/generateData";
import ForgotLoginnamePage from "../pages/forgotLoginname.page";
import ChangePasswordPage from "../pages/changePassword.page";

test.describe("Change Password Test Tests", () => {
    test.beforeEach(async ({ page }) => {
        const navbar = new Navbar(page);
        const accountLoginPage = new AccountLoginPage(page);
        await page.goto("/");
        await navbar.clickLoginRegisterBtn();
        await accountLoginPage.doLogin();
        await navbar.hoverMenuAccountBtn();
        await navbar.clickChangePasswordBtn();
    });

    test("should be able to input current password", async ({ page }) => {
        const changePasswordPage = new ChangePasswordPage(page);
        const stringValue = generateData.generateUniqueName();
        await changePasswordPage.curPasswordField.fill(stringValue);
        await expect(changePasswordPage.curPasswordField).toHaveValue(
            stringValue
        );
    });

    test("should be able to input new password", async ({ page }) => {
        const changePasswordPage = new ChangePasswordPage(page);
        const stringValue = generateData.generateUniqueName();
        await changePasswordPage.newPasswordField.fill(stringValue);
        await expect(changePasswordPage.newPasswordField).toHaveValue(
            stringValue
        );
    });

    test("should be able to input new confirm password", async ({ page }) => {
        const changePasswordPage = new ChangePasswordPage(page);
        const stringValue = generateData.generateUniqueName();
        await changePasswordPage.newPasswordConfirmField.fill(stringValue);
        await expect(changePasswordPage.newPasswordConfirmField).toHaveValue(
            stringValue
        );
    });

    test("should be able to show message if current password is empty", async ({
        page,
    }) => {
        const changePasswordPage = new ChangePasswordPage(page);
        await changePasswordPage.curPasswordField.fill("");
        await changePasswordPage.clickContinueBtn();
        await expect(changePasswordPage.emptyCurPasswordMsg).toBeVisible();
    });

    test("should be able to show message if new password is empty", async ({
        page,
    }) => {
        const changePasswordPage = new ChangePasswordPage(page);
        await changePasswordPage.newPasswordField.fill("");
        await changePasswordPage.clickContinueBtn();
        await expect(changePasswordPage.minMaxNewPasswordMsg).toBeVisible();
    });

    test("should be able to show message if new password is not same with new confirm password", async ({
        page,
    }) => {
        const changePasswordPage = new ChangePasswordPage(page);
        await changePasswordPage.newPasswordField.fill("caca");
        await changePasswordPage.newPasswordConfirmField.fill("");
        await changePasswordPage.clickContinueBtn();
        await expect(changePasswordPage.notMatchNewConfirmPasswordMsg).toBeVisible();
    });

    test("should be able to show message if current password is wrong", async ({
        page,
    }) => {
        const changePasswordPage = new ChangePasswordPage(page);
		const stringValue = generateData.generateUniqueName()
        await changePasswordPage.curPasswordField.fill(stringValue);
        await changePasswordPage.newPasswordField.fill(stringValue);
        await changePasswordPage.newPasswordConfirmField.fill(stringValue);
        await changePasswordPage.clickContinueBtn();
        await expect(changePasswordPage.wrongCurPasswordMsg).toBeVisible();
    });

    test("should be able to show message if change password is success", async ({
        page,
    }) => {
        const changePasswordPage = new ChangePasswordPage(page);
        await changePasswordPage.curPasswordField.fill("caca123");
        await changePasswordPage.newPasswordField.fill("caca123");
        await changePasswordPage.newPasswordConfirmField.fill("caca123");
        await changePasswordPage.clickContinueBtn();
        await expect(changePasswordPage.successChangePasswordMsg).toBeVisible();
    });
});
