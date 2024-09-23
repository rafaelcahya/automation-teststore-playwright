import { test, expect } from "@playwright/test";
import Navbar from "../component/navbar.comp";
import AccountLoginPage from "../pages/accountLogin.page";
import RegisterPage from "../pages/register.page";
import generateData from "../helper/generateData";

test.describe("Register Tests", () => {
    test.beforeEach(async ({ page }) => {
        const navbar = new Navbar(page);
        const accountLoginPage = new AccountLoginPage(page);
        await page.goto("/");
        await navbar.clickLoginRegisterBtn();
        await accountLoginPage.clickContinueBtn();
    });

    test("should be able to input first name", async ({ page }) => {
        const registerPage = new RegisterPage(page);
        const stringValue = generateData.generateUniqueName();
        await registerPage.firstNameField.fill(stringValue);
        await expect(registerPage.firstNameField).toHaveValue(stringValue);
    });

    test("should be able to show message if first name is empty", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.firstNameField.fill("");
        await registerPage.clickContinueBtn();
        await expect(registerPage.minMaxFirstnameMsg).toBeVisible();
        await expect(registerPage.minMaxFirstnameMsg).toHaveText(
            "First Name must be between 1 and 32 characters!"
        );
    });

    test("should be able to show message if first name is more than 32 chars", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.firstNameField.fill(
            "Graciella Abigail Limuria Francesc"
        );
        await registerPage.clickContinueBtn();
        await expect(registerPage.minMaxFirstnameMsg).toBeVisible();
        await expect(registerPage.minMaxFirstnameMsg).toHaveText(
            "First Name must be between 1 and 32 characters!"
        );
    });

    test("should be able to show message if last name is empty", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.lastNameField.fill("");
        await registerPage.clickContinueBtn();
        await expect(registerPage.minMaxLastnameMsg).toBeVisible();
        await expect(registerPage.minMaxLastnameMsg).toHaveText(
            "Last Name must be between 1 and 32 characters!"
        );
    });

    test("should be able to show message if last name is more than 32 chars", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.lastNameField.fill(
            "Graciella Abigail Limuria Francesc"
        );
        await registerPage.clickContinueBtn();
        await expect(registerPage.minMaxLastnameMsg).toBeVisible();
        await expect(registerPage.minMaxLastnameMsg).toHaveText(
            "Last Name must be between 1 and 32 characters!"
        );
    });

    test("should be able to input last name", async ({ page }) => {
        const registerPage = new RegisterPage(page);
        const stringValue = generateData.generateUniqueName();
        await registerPage.lastNameField.fill(stringValue);
        await expect(registerPage.lastNameField).toHaveValue(stringValue);
    });

    test("should be able to input email", async ({ page }) => {
        const registerPage = new RegisterPage(page);
        const stringValue = generateData.generateUniqueName();
        await registerPage.emailField.fill(stringValue + "@example.com");
        await expect(registerPage.emailField).toHaveValue(stringValue + "@example.com");
    });

    test("should be able to show message if email is empty", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.emailField.fill("");
        await registerPage.clickContinueBtn();
        await expect(registerPage.invalidEmailMsg).toBeVisible();
        await expect(registerPage.invalidEmailMsg).toHaveText(
            "Email Address does not appear to be valid!"
        );
    });

    test("should be able to show message if email is invalid format", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        const stringValue = generateData.generateUniqueName();
        await registerPage.emailField.fill(stringValue.toString());
        await registerPage.clickContinueBtn();
        await expect(registerPage.invalidEmailMsg).toBeVisible();
        await expect(registerPage.invalidEmailMsg).toHaveText(
            "Email Address does not appear to be valid!"
        );
    });

    test("should be able to input phonenumber", async ({ page }) => {
        const registerPage = new RegisterPage(page);
        const numberValue = generateData.generateNumber();
        await registerPage.phoneNumberField.fill(
            "0877" + numberValue.toString()
        );
        await expect(registerPage.phoneNumberField).toHaveValue(
            "0877" + numberValue.toString()
        );
    });

    test("should be able to input fax", async ({ page }) => {
        const registerPage = new RegisterPage(page);
        const numberValue = generateData.generateNumber();
        await registerPage.faxField.fill(numberValue.toString());
        await expect(registerPage.faxField).toHaveValue(numberValue.toString());
    });

    test("should be able to input company", async ({ page }) => {
        const registerPage = new RegisterPage(page);
        const stringValue = generateData.generateUniqueName();
        await registerPage.companyField.fill(stringValue);
        await expect(registerPage.companyField).toHaveValue(stringValue);
    });

    test("should be able to input first address", async ({ page }) => {
        const registerPage = new RegisterPage(page);
        const stringValue = generateData.generateUniqueName();
        await registerPage.firstAddressField.fill(stringValue);
        await expect(registerPage.firstAddressField).toHaveValue(stringValue);
    });

    test("should be able to show message if first address is empty", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.firstAddressField.fill("");
        await registerPage.clickContinueBtn();
        await expect(registerPage.minMaxFirstAddressMsg).toBeVisible();
        await expect(registerPage.minMaxFirstAddressMsg).toHaveText(
            "Address 1 must be between 3 and 128 characters!"
        );
    });

    test("should be able to show message if first address is more than 128 chars", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.firstAddressField.fill(
            "1234567 Elmwood Street, Apt 56B, West Park Heights, Greenfield Township, San Andreas, California, United States, 90210-1234, Building C, near Oakwood Plaza"
        );
        await registerPage.clickContinueBtn();
        await expect(registerPage.minMaxFirstAddressMsg).toBeVisible();
        await expect(registerPage.minMaxFirstAddressMsg).toHaveText(
            "Address 1 must be between 3 and 128 characters!"
        );
    });

    test("should be able to input second address", async ({ page }) => {
        const registerPage = new RegisterPage(page);
        const stringValue = generateData.generateUniqueName();
        await registerPage.secondAddressField.fill(stringValue);
        await expect(registerPage.secondAddressField).toHaveValue(stringValue);
    });

    test("should be able to input city", async ({ page }) => {
        const registerPage = new RegisterPage(page);
        const stringValue = generateData.generateUniqueName();
        await registerPage.cityField.fill(stringValue);
        await expect(registerPage.cityField).toHaveValue(stringValue);
    });

    test("should be able to show message if city is less than 3 chars", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.cityField.fill("ca");
        await registerPage.clickContinueBtn();
        await expect(registerPage.minMaxCityMsg).toBeVisible();
        await expect(registerPage.minMaxCityMsg).toHaveText(
            "City must be between 3 and 128 characters!"
        );
    });

    test("should be able to show message if city is more than 128 chars", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.cityField.fill(
            "1234567 Elmwood Street, Apt 56B, West Park Heights, Greenfield Township, San Andreas, California, United States, 90210-1234, Building C, near Oakwood Plaza"
        );
        await registerPage.clickContinueBtn();
        await expect(registerPage.minMaxCityMsg).toBeVisible();
        await expect(registerPage.minMaxCityMsg).toHaveText(
            "City must be between 3 and 128 characters!"
        );
    });

    test("should be able to choose region", async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.regionField.selectOption("3513");
    });

    test("should be able to show message if region is empty", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.regionField.selectOption("FALSE");
        await registerPage.clickContinueBtn();
        await expect(registerPage.emptyRegionMsg).toBeVisible();
    });

    test("should be able to input zip code", async ({ page }) => {
        const registerPage = new RegisterPage(page);
        const numberValue = generateData.generateNumber();
        await registerPage.zipCodeField.fill(numberValue.toString());
        await expect(registerPage.zipCodeField).toHaveValue(
            numberValue.toString()
        );
    });

    test("should be able to show message if zipcode is less than 3 chars", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.zipCodeField.fill("12");
        await registerPage.clickContinueBtn();
        await expect(registerPage.minMaxZipMsg).toBeVisible();
        await expect(registerPage.minMaxZipMsg).toHaveText(
            "Zip/postal code must be between 3 and 10 characters!"
        );
    });

    test("should be able to dynamically choose a country", async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.countryField.click();
        const countryFieldOptionCount =
            await registerPage.countryFieldOptions.count();
        const randomIndex = Math.floor(Math.random() * countryFieldOptionCount);
        await registerPage.countryField.selectOption(randomIndex.toString());
        await expect(registerPage.countryField).toHaveValue(randomIndex.toString());
    });

    test("should be able to fill the login name", async ({ page }) => {
        const registerPage = new RegisterPage(page);
        const stringValue = generateData.generateUniqueName();
        await registerPage.loginNameField.fill(stringValue);
        await expect(registerPage.loginNameField).toHaveValue(stringValue);
    });

    test("should be able to fill the password", async ({ page }) => {
        const registerPage = new RegisterPage(page);
        const stringValue = generateData.generateUniqueName();
        await registerPage.passwordField.fill(stringValue);
        await expect(registerPage.passwordField).toHaveValue(stringValue);
    });

    test("should be able to fill the confirm password", async ({ page }) => {
        const registerPage = new RegisterPage(page);
        const stringValue = generateData.generateUniqueName();
        await registerPage.confirmPasswordField.fill(stringValue);
        await expect(registerPage.confirmPasswordField).toHaveValue(
            stringValue
        );
    });

    test("should be able to show message if login name is less than 5 chars", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.loginNameField.fill("");
        await registerPage.clickContinueBtn();
        await expect(registerPage.minMaxLoginnameMsg).toBeVisible();
    });

    test("should be able to show message if login name is more than 64 chars", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.loginNameField.fill(
            "yvyRpR1pe4PPnl016R3L0S8D8899fdOm3ZAu6FyH8P5zV8GUb3d010AsmMhg8O6D1ufGOq"
        );
        await registerPage.clickContinueBtn();
        await expect(registerPage.minMaxLoginnameMsg).toBeVisible();
    });

    test("should be able to show message if login name is duplicate with another login name", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.loginNameField.fill("caca123");
        await registerPage.clickContinueBtn();
        await expect(registerPage.duplicateLoginnameMsg).toBeVisible();
    });

    test("should be able to show message if password less than 4 chars", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.passwordField.fill("");
        await registerPage.clickContinueBtn();
        await expect(registerPage.minMaxPasswordMsg).toBeVisible();
    });

    test("should be able to show message if password is more than 20 chars", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.passwordField.fill("wE8gByK5WTpC52FkXWZ4F9XeL");
        await registerPage.clickContinueBtn();
        await expect(registerPage.minMaxPasswordMsg).toBeVisible();
    });

    test("should be able to show message if confirm password is not same with password", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.passwordField.fill("wE8gByK5WTpC52FkXWZ4");
        await registerPage.confirmPasswordField.fill("wE8gBy");
        await registerPage.clickContinueBtn();
        await expect(registerPage.notMatchConfirmPasswordMsg).toBeVisible();
    });

    test("should be able to clear the password if confirm password is not same with password", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.passwordField.fill("wE8gByK5WTpC52FkXWZ4");
        await registerPage.confirmPasswordField.fill("wE8gBy");
        await registerPage.clickContinueBtn();
        await expect(registerPage.passwordField).toHaveValue("");
    });

    test("should be able to checked yes option in subscribe", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.yesOptionSubscribe.check();
        await expect(registerPage.yesOptionSubscribe).toBeChecked();
    });

    test("should be able to checked no option in subscribe", async ({
        page,
    }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.noOptionSubscribe.check();
        await expect(registerPage.noOptionSubscribe).toBeChecked();
    });

    test("should be able to checked agree privacy policy", async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.agreePP.check();
        await expect(registerPage.agreePP).toBeChecked();
    });

    test("should be able to register", async ({ page }) => {
        const registerPage = new RegisterPage(page);
        const stringValue = generateData.generateUniqueName();
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
    });
});
