import { test, expect } from "@playwright/test";
import Navbar from "../component/navbar.comp";
import AccountLoginPage from "../pages/accountLogin.page";
import generateData from "../helper/generateData";
import ChangeAccountDetailsPage from "../pages/changeAccountDetails.page";

test.describe("Change Account Details Tests", () => {
    test.beforeEach(async ({ page }) => {
        const navbar = new Navbar(page);
        const accountLoginPage = new AccountLoginPage(page);
        await page.goto("/");
        await navbar.clickLoginRegisterBtn();
        await accountLoginPage.doLogin();
        await navbar.hoverMenuAccountBtn();
        await navbar.clickEditAccountDetailsBtn();
    });

    test("should be able to input first name", async ({ page }) => {
        const editAccountDetailsPage = new ChangeAccountDetailsPage(page);
        const stringValue = generateData.generateUniqueName();
        await editAccountDetailsPage.firstNameField.clear();
        await editAccountDetailsPage.firstNameField.fill(stringValue);
        await expect(editAccountDetailsPage.firstNameField).toHaveValue(
            stringValue
        );
    });

    test("should be able to input last name", async ({ page }) => {
        const editAccountDetailsPage = new ChangeAccountDetailsPage(page);
        const stringValue = generateData.generateUniqueName();
        await editAccountDetailsPage.lastNameField.clear();
        await editAccountDetailsPage.lastNameField.fill(stringValue);
        await expect(editAccountDetailsPage.lastNameField).toHaveValue(
            stringValue
        );
    });

    test("should be able to input email", async ({ page }) => {
        const editAccountDetailsPage = new ChangeAccountDetailsPage(page);
        const stringValue = generateData.generateUniqueName();
        await editAccountDetailsPage.emailField.clear();
        await editAccountDetailsPage.emailField.fill(stringValue + "@test.com");
        await expect(editAccountDetailsPage.emailField).toHaveValue(
            stringValue + "@test.com"
        );
    });

    test("should be able to input phone number", async ({ page }) => {
        const editAccountDetailsPage = new ChangeAccountDetailsPage(page);
        const numberValue = generateData.generateNumber().toString();
        await editAccountDetailsPage.emailField.clear();
        await editAccountDetailsPage.emailField.fill("0877" + numberValue);
        await expect(editAccountDetailsPage.emailField).toHaveValue(
            "0877" + numberValue
        );
    });

    test("should be able to input fax", async ({ page }) => {
        const editAccountDetailsPage = new ChangeAccountDetailsPage(page);
        const numberValue = generateData.generateNumber().toString();
        await editAccountDetailsPage.faxField.clear();
        await editAccountDetailsPage.faxField.fill(numberValue);
        await expect(editAccountDetailsPage.faxField).toHaveValue(numberValue);
    });

    test("should be able to show message if firstname is less than 1 char", async ({
        page,
    }) => {
        const editAccountDetailsPage = new ChangeAccountDetailsPage(page);
        await editAccountDetailsPage.firstNameField.fill("");
        await editAccountDetailsPage.clickContinueBtn();
        await expect(editAccountDetailsPage.minMaxFirstnameMsg).toBeVisible();
    });

    test("should be able to show message if lastname is less than 1 char", async ({
        page,
    }) => {
        const editAccountDetailsPage = new ChangeAccountDetailsPage(page);
        await editAccountDetailsPage.lastNameField.fill("");
        await editAccountDetailsPage.clickContinueBtn();
        await expect(editAccountDetailsPage.minMaxLastnameMsg).toBeVisible();
    });

    test("should be able to show message if email is invalid", async ({
        page,
    }) => {
        const editAccountDetailsPage = new ChangeAccountDetailsPage(page);
        await editAccountDetailsPage.emailField.fill("");
        await editAccountDetailsPage.clickContinueBtn();
        await expect(editAccountDetailsPage.invalidEmailMsg).toBeVisible();
    });

    test("should be able to change first name", async ({ page }) => {
        const editAccountDetailsPage = new ChangeAccountDetailsPage(page);
        await editAccountDetailsPage.firstNameField.fill("graciela");
        await editAccountDetailsPage.clickContinueBtn();
        await expect(editAccountDetailsPage.successMsg).toBeVisible();
    });

    test("should be able to change last name", async ({ page }) => {
        const editAccountDetailsPage = new ChangeAccountDetailsPage(page);
        const stringValue = generateData.generateUniqueName();
        await editAccountDetailsPage.lastNameField.fill(stringValue);
        await editAccountDetailsPage.clickContinueBtn();
        await expect(editAccountDetailsPage.successMsg).toBeVisible();
    });

    test("should be able to change email", async ({ page }) => {
        const editAccountDetailsPage = new ChangeAccountDetailsPage(page);
        await editAccountDetailsPage.emailField.fill("graciela@example.com");
        await editAccountDetailsPage.clickContinueBtn();
        await expect(editAccountDetailsPage.successMsg).toBeVisible();
    });

    test("should be able to change phone number", async ({ page }) => {
        const editAccountDetailsPage = new ChangeAccountDetailsPage(page);
        const numberValue = generateData.generateNumber().toString();
        await editAccountDetailsPage.phonenumberField.fill(
            "0877" + numberValue
        );
        await editAccountDetailsPage.clickContinueBtn();
        await expect(editAccountDetailsPage.successMsg).toBeVisible();
    });

    test("should be able to change account without phone number", async ({
        page,
    }) => {
        const editAccountDetailsPage = new ChangeAccountDetailsPage(page);
        await editAccountDetailsPage.phonenumberField.fill("");
        await editAccountDetailsPage.clickContinueBtn();
        await expect(editAccountDetailsPage.successMsg).toBeVisible();
    });

    test("should be able to change fax", async ({ page }) => {
        const editAccountDetailsPage = new ChangeAccountDetailsPage(page);
        const numberValue = generateData.generateNumber().toString();
        await editAccountDetailsPage.faxField.fill(numberValue);
        await editAccountDetailsPage.clickContinueBtn();
        await expect(editAccountDetailsPage.successMsg).toBeVisible();
    });

    test("should be able to change account without fax", async ({
        page,
    }) => {
        const editAccountDetailsPage = new ChangeAccountDetailsPage(page);
        await editAccountDetailsPage.faxField.fill("");
        await editAccountDetailsPage.clickContinueBtn();
        await expect(editAccountDetailsPage.successMsg).toBeVisible();
    });
});
