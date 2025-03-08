import { test, expect } from "@playwright/test";
import Navbar from "../component/navbar.comp";
import AccountLoginPage from "../pages/accountLogin.page";
import RegisterPage from "../pages/register.page";
import generateData from "../helper/generateData";
import dotenv from "dotenv";

dotenv.config();

test.describe("Register Tests", () => {
    test.beforeEach(async ({ page }) => {
        const navbar = new Navbar(page);
        const accountLoginPage = new AccountLoginPage(page);
        await page.goto(
            "https://automationteststore.com/index.php?rt=account/login"
        );
        await navbar.clickLoginRegisterBtn();
        await accountLoginPage.clickContinueBtn();
    });

    test("should be able to show message if first name is less than 1 characters", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.firstNameField.fill("");
        await registerPage.clickContinueBtn();
        await expect(registerPage.minMaxFirstnameMsg).toBeVisible();
        await expect(registerPage.minMaxFirstnameMsg).toContainText(
            process.env.MAXCHAR_FIRSTNAME_REGISTER_MSG
        );
    });

    test("should be able to show message if first name is more than 32 characters", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.firstNameField.fill(process.env.STRING_VALUE32);
        await registerPage.clickContinueBtn();
        await expect(registerPage.minMaxFirstnameMsg).toBeVisible();
        await expect(registerPage.minMaxFirstnameMsg).toContainText(
            process.env.MAXCHAR_FIRSTNAME_REGISTER_MSG
        );
    });

    test("should be able to show message if last name is less than 1 characters", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.lastNameField.fill("");
        await registerPage.clickContinueBtn();
        await expect(registerPage.minMaxLastnameMsg).toBeVisible();
        await expect(registerPage.minMaxLastnameMsg).toContainText(
            process.env.MAXCHAR_LASTNAME_REGISTER_MSG
        );
    });

    test("should be able to show message if last name is more than 32 characters", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.lastNameField.fill(process.env.STRING_VALUE32);
        await registerPage.clickContinueBtn();
        await expect(registerPage.minMaxLastnameMsg).toBeVisible();
        await expect(registerPage.minMaxLastnameMsg).toContainText(
            process.env.MAXCHAR_LASTNAME_REGISTER_MSG
        );
    });

    test("should be able to show message if email is empty", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.emailField.fill("");
        await registerPage.clickContinueBtn();
        await expect(registerPage.invalidEmailMsg).toBeVisible();
        await expect(registerPage.invalidEmailMsg).toContainText(
            process.env.INVALID_EMAIL_REGISTER_MSG
        );
    });

    test("should be able to show message if email is invalid format", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        const stringValue = generateData.generateRandomString();
        await registerPage.emailField.fill(stringValue.toString());
        await registerPage.clickContinueBtn();
        await expect(registerPage.invalidEmailMsg).toBeVisible();
        await expect(registerPage.invalidEmailMsg).toContainText(
            process.env.INVALID_EMAIL_REGISTER_MSG
        );
    });

    test("should be able to show message if first address is less than 3 characters", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.firstAddressField.fill("");
        await registerPage.clickContinueBtn();
        await expect(registerPage.minMaxFirstAddressMsg).toBeVisible();
        await expect(registerPage.minMaxFirstAddressMsg).toContainText(
            process.env.MAXCHAR_FIRST_ADDRESS_REGISTER_MSG
        );
    });

    test("should be able to show message if first address is more than 128 characters", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.firstAddressField.fill(process.env.STRING_VALUE128);
        await registerPage.clickContinueBtn();
        await expect(registerPage.minMaxFirstAddressMsg).toBeVisible();
        await expect(registerPage.minMaxFirstAddressMsg).toContainText(
            process.env.MAXCHAR_FIRST_ADDRESS_REGISTER_MSG
        );
    });

    test("should be able to show message if city is less than 3 characters", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.cityField.fill(process.env.STRING_VALUE1);
        await registerPage.clickContinueBtn();
        await expect(registerPage.minMaxCityMsg).toBeVisible();
        await expect(registerPage.minMaxCityMsg).toContainText(
            process.env.MAXCHAR_CITY_REGISTER_MSG
        );
    });

    test("should be able to show message if city is more than 128 characters", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.cityField.fill(process.env.STRING_VALUE128);
        await registerPage.clickContinueBtn();
        await expect(registerPage.minMaxCityMsg).toBeVisible();
        await expect(registerPage.minMaxCityMsg).toContainText(
            process.env.MAXCHAR_CITY_REGISTER_MSG
        );
    });

    test("should be able to show message if region is empty", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.regionField.selectOption("FALSE");
        await registerPage.clickContinueBtn();
        await expect(registerPage.emptyRegionMsg).toBeVisible();
        await expect(registerPage.emptyRegionMsg).toContainText(
            process.env.EMPTY_REGION_REGISTER_MSG
        );
    });

    test("should be able to show message if zipcode is less than 3 characters", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.zipCodeField.fill(process.env.INT_VALUE1);
        await registerPage.clickContinueBtn();
        await expect(registerPage.minMaxZipMsg).toBeVisible();
        await expect(registerPage.minMaxZipMsg).toContainText(
            process.env.MAXCHAR_ZIP_REGISTER_MSG
        );
    });

    test("should be able to show message if login name is less than 5 characters", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.loginNameField.fill(process.env.STRING_VALUE1);
        await registerPage.clickContinueBtn();
        await expect(registerPage.minMaxLoginnameMsg).toBeVisible();
        await expect(registerPage.minMaxLoginnameMsg).toContainText(
            process.env.MAXCHAR_LOGINNAME_REGISTER_MSG
        );
    });

    test("should be able to show message if login name is more than 64 characters", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.loginNameField.fill(process.env.STRING_VALUE128);
        await registerPage.clickContinueBtn();
        await expect(registerPage.minMaxLoginnameMsg).toBeVisible();
        await expect(registerPage.minMaxLoginnameMsg).toContainText(
            process.env.MAXCHAR_LOGINNAME_REGISTER_MSG
        );
    });

    test("should be able to show message if login name is duplicate with another login name", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.loginNameField.fill(process.env.LOGIN_USERNAME);
        await registerPage.clickContinueBtn();
        await expect(registerPage.duplicateLoginnameMsg).toBeVisible();
        await expect(registerPage.duplicateLoginnameMsg).toContainText(
            process.env.REGISTERED_LOGINNAME_REGISTER_MSG
        );
    });

    test("should be able to show message if password less than 3 characters", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.passwordField.fill(process.env.STRING_VALUE1);
        await registerPage.clickContinueBtn();
        await expect(registerPage.minMaxPasswordMsg).toBeVisible();
        await expect(registerPage.minMaxPasswordMsg).toContainText(
            process.env.MAXCHAR_PASSWORD_REGISTER_MSG
        );
    });

    test("should be able to show message if password is more than 20 characters", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.passwordField.fill(process.env.STRING_VALUE32);
        await registerPage.clickContinueBtn();
        await expect(registerPage.minMaxPasswordMsg).toBeVisible();
        await expect(registerPage.minMaxPasswordMsg).toContainText(
            process.env.MAXCHAR_PASSWORD_REGISTER_MSG
        );
    });

    test("should be able to show message if confirm password is not same with password", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.passwordField.fill(process.env.STRING_VALUE32);
        await registerPage.confirmPasswordField.fill(process.env.STRING_VALUE1);
        await registerPage.clickContinueBtn();
        await expect(registerPage.notMatchConfirmPasswordMsg).toBeVisible();
        await expect(registerPage.notMatchConfirmPasswordMsg).toContainText(
            process.env.MATCH_PASSWORD_REGISTER_MSG
        );
    });

    test("should be able to show message if privacy policy is not selected", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        const stringValue = generateData.generateRandomString();
        const numberValue = generateData.generateNumber().toString();
        await registerPage.firstNameField.fill(stringValue);
        await registerPage.lastNameField.fill(stringValue);
        await registerPage.emailField.fill(stringValue + "@example.com");
        await registerPage.phoneNumberField.fill("0877" + numberValue);
        await registerPage.faxField.fill(numberValue);
        await registerPage.companyField.fill(stringValue);
        await registerPage.firstAddressField.fill(stringValue);
        await registerPage.secondAddressField.fill(stringValue);
        await registerPage.cityField.fill(stringValue);
        await registerPage.regionField.selectOption("3513");
        await registerPage.zipCodeField.fill(numberValue);
        await registerPage.loginNameField.fill(stringValue);
        await registerPage.passwordField.fill(process.env.STRING_VALUE32);
        await registerPage.confirmPasswordField.fill(
            process.env.STRING_VALUE32
        );
        await registerPage.yesOptionSubscribe.check();
        await registerPage.clickContinueBtn();
        await expect(registerPage.notSelectedPPMsg).toBeVisible();
        await expect(registerPage.notSelectedPPMsg).toContainText(
            process.env.NOT_SELECTED_PP_REGISTER_MSG
        );
    });

    test("should be able to show message is register with registered email", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        const stringValue = generateData.generateRandomString();
        const numberValue = generateData.generateNumber().toString();
        await registerPage.firstNameField.fill(stringValue);
        await registerPage.lastNameField.fill(stringValue);
        await registerPage.emailField.fill(
            process.env.LOGIN_USERNAME + numberValue + "@testqwe.com"
        );
        await registerPage.phoneNumberField.fill("0877" + numberValue);
        await registerPage.faxField.fill(numberValue);
        await registerPage.companyField.fill(stringValue);
        await registerPage.firstAddressField.fill(stringValue);
        await registerPage.secondAddressField.fill(stringValue);
        await registerPage.cityField.fill(stringValue);
        await registerPage.regionField.selectOption("3513");
        await registerPage.zipCodeField.fill(numberValue);
        await registerPage.loginNameField.fill(stringValue);
        await registerPage.passwordField.fill("wE8gByK5WTpC52FkXWZ4");
        await registerPage.confirmPasswordField.fill("wE8gByK5WTpC52FkXWZ4");
        await registerPage.yesOptionSubscribe.check();
        await registerPage.agreePP.check();
        await registerPage.clickContinueBtn();
        await expect(registerPage.successRegisterMsg).toBeVisible();
        await expect(registerPage.successRegisterMsg).toContainText(
            process.env.SUCCESS_REGISTER_MSG
        );
    });

    test("should be able to register", async ({ page }) => {
        const registerPage = new RegisterPage(page);
        const stringValue = generateData.generateRandomString();
        const numberValue = generateData.generateNumber().toString();
        await registerPage.firstNameField.fill(stringValue);
        await registerPage.lastNameField.fill(stringValue);
        await registerPage.emailField.fill(stringValue + "@example.com");
        await registerPage.phoneNumberField.fill("0877" + numberValue);
        await registerPage.faxField.fill(numberValue);
        await registerPage.companyField.fill(stringValue);
        await registerPage.firstAddressField.fill(stringValue);
        await registerPage.secondAddressField.fill(stringValue);
        await registerPage.cityField.fill(stringValue);
        await registerPage.regionField.selectOption("3513");
        await registerPage.zipCodeField.fill(numberValue);
        await registerPage.loginNameField.fill(stringValue);
        await registerPage.passwordField.fill("wE8gByK5WTpC52FkXWZ4");
        await registerPage.confirmPasswordField.fill("wE8gByK5WTpC52FkXWZ4");
        await registerPage.yesOptionSubscribe.check();
        await registerPage.agreePP.check();
        await registerPage.clickContinueBtn();
        await expect(registerPage.successRegisterMsg).toBeVisible();
        await expect(registerPage.successRegisterMsg).toContainText(
            process.env.SUCCESS_REGISTER_MSG
        );
    });
});
