import { test, expect } from "@playwright/test";
import Navbar from "../component/navbar.comp";
import AccountLoginPage from "../pages/accountLogin.page";
import generateData from "../helper/generateData";
import ChangeAccountDetailsPage from "../pages/changeAccountDetails.page";
import ManageAddressPage from "../pages/manageAddress.page";

test.describe("Add New Address Tests", () => {
    test.beforeEach(async ({ page }) => {
        const navbar = new Navbar(page);
        const accountLoginPage = new AccountLoginPage(page);
        const manageAddressPage = new ManageAddressPage(page);
        await page.goto("/");
        await navbar.clickLoginRegisterBtn();
        await accountLoginPage.doLogin();
        await navbar.hoverMenuAccountBtn();
        await navbar.clickManageAddressBookBtn();
        await manageAddressPage.clickNewAddressBtn();
    });

    test("should be able to input first name", async ({ page }) => {
        const manageAddressPage = new ManageAddressPage(page);
        const stringValue = generateData.generateUniqueName();
        await manageAddressPage.firstNameField.fill(stringValue);
        await expect(manageAddressPage.firstNameField).toHaveValue(stringValue);
    });

    test("should be able to input last name", async ({ page }) => {
        const manageAddressPage = new ManageAddressPage(page);
        const stringValue = generateData.generateUniqueName();
        await manageAddressPage.lastNameField.fill(stringValue);
        await expect(manageAddressPage.lastNameField).toHaveValue(stringValue);
    });

    test("should be able to input company", async ({ page }) => {
        const manageAddressPage = new ManageAddressPage(page);
        const stringValue = generateData.generateUniqueName();
        await manageAddressPage.companyField.fill(stringValue);
        await expect(manageAddressPage.companyField).toHaveValue(stringValue);
    });

    test("should be able to input first address", async ({ page }) => {
        const manageAddressPage = new ManageAddressPage(page);
        const stringValue = generateData.generateUniqueName();
        await manageAddressPage.firstAddressField.fill(stringValue);
        await expect(manageAddressPage.firstAddressField).toHaveValue(
            stringValue
        );
    });

    test("should be able to input second address", async ({ page }) => {
        const manageAddressPage = new ManageAddressPage(page);
        const stringValue = generateData.generateUniqueName();
        await manageAddressPage.secondAddressField.fill(stringValue);
        await expect(manageAddressPage.secondAddressField).toHaveValue(
            stringValue
        );
    });

    test("should be able to input city", async ({ page }) => {
        const manageAddressPage = new ManageAddressPage(page);
        const stringValue = generateData.generateUniqueName();
        await manageAddressPage.cityField.fill(stringValue);
        await expect(manageAddressPage.cityField).toHaveValue(stringValue);
    });

    test("should be able to input zipcode", async ({ page }) => {
        const manageAddressPage = new ManageAddressPage(page);
        const numberValue = generateData.generateNumber().toString();
        await manageAddressPage.zipField.fill(numberValue);
        await expect(manageAddressPage.zipField).toHaveValue(numberValue);
    });

    test("should be able to dynamically choose a country", async ({ page }) => {
        const manageAddressPage = new ManageAddressPage(page);
        await manageAddressPage.countryField.click();
        const countryFieldOptionCount =
            await manageAddressPage.countryFieldOptions.count();
        const randomIndex = Math.floor(Math.random() * countryFieldOptionCount);
        await manageAddressPage.countryField.selectOption(
            randomIndex.toString()
        );
        await expect(manageAddressPage.countryField).toHaveValue(
            randomIndex.toString()
        );
    });

    test("should be able to choose a region", async ({ page }) => {
        const manageAddressPage = new ManageAddressPage(page);
        await manageAddressPage.regionField.selectOption({ index: 1 });
    });

    test("should be able to choose a yes default address", async ({ page }) => {
        const manageAddressPage = new ManageAddressPage(page);
        await manageAddressPage.yesDefaultAddress.click();
        await expect(manageAddressPage.yesDefaultAddress).toBeChecked();
    });

    test("should be able to choose a no default address", async ({ page }) => {
        const manageAddressPage = new ManageAddressPage(page);
        await manageAddressPage.noDefaultAddress.click();
        await expect(manageAddressPage.noDefaultAddress).toBeChecked();
    });

    test("should be able to show message if first name is less than 1 char", async ({
        page,
    }) => {
        const manageAddressPage = new ManageAddressPage(page);
        await manageAddressPage.firstNameField.fill("");
        await manageAddressPage.clickContinueBtn();
        await expect(manageAddressPage.minMaxFirstnameMsg).toBeVisible();
    });

    test("should be able to show message if last name is less than 1 char", async ({
        page,
    }) => {
        const manageAddressPage = new ManageAddressPage(page);
        await manageAddressPage.lastNameField.fill("");
        await manageAddressPage.clickContinueBtn();
        await expect(manageAddressPage.minMaxLastnameMsg).toBeVisible();
    });

    test("should be able to show message if first address is less than 1 char", async ({
        page,
    }) => {
        const manageAddressPage = new ManageAddressPage(page);
        await manageAddressPage.firstAddressField.fill("");
        await manageAddressPage.clickContinueBtn();
        await expect(manageAddressPage.minMaxFirstAddressMsg).toBeVisible();
    });

    test("should be able to show message if city is less than 3 char", async ({
        page,
    }) => {
        const manageAddressPage = new ManageAddressPage(page);
        await manageAddressPage.cityField.fill("");
        await manageAddressPage.clickContinueBtn();
        await expect(manageAddressPage.minMaxCityMsg).toBeVisible();
    });

    test("should be able to show message if zip code is less than 2 char", async ({
        page,
    }) => {
        const manageAddressPage = new ManageAddressPage(page);
        await manageAddressPage.zipField.fill("");
        await manageAddressPage.clickContinueBtn();
        await expect(manageAddressPage.minMaxZipcodeMsg).toBeVisible();
    });

    test("should be able to show message if country is empty", async ({
        page,
    }) => {
        const manageAddressPage = new ManageAddressPage(page);
        await manageAddressPage.countryField.selectOption({ index: 0 });
        await manageAddressPage.clickContinueBtn();
        await expect(manageAddressPage.emptyCountryMsg).toBeVisible();
    });

    test("should be able to show message if region is empty", async ({
        page,
    }) => {
        const manageAddressPage = new ManageAddressPage(page);
        await manageAddressPage.regionField.selectOption({ index: 0 });
        await manageAddressPage.clickContinueBtn();
        await expect(manageAddressPage.emptyRegionMsg).toBeVisible();
    });

    test("should be able to add new address", async ({ page }) => {
        const manageAddressPage = new ManageAddressPage(page);
        const stringValue = generateData.generateUniqueName();
        const numberValue = generateData.generateNumber().toString();
        await manageAddressPage.firstNameField.fill(stringValue);
        await manageAddressPage.lastNameField.fill(stringValue);
        await manageAddressPage.companyField.fill(stringValue);
        await manageAddressPage.firstAddressField.fill(stringValue);
        await manageAddressPage.secondAddressField.fill(stringValue);
        await manageAddressPage.cityField.fill(stringValue);
        await manageAddressPage.zipField.fill(numberValue);
        await manageAddressPage.countryField.click();
        const countryFieldOptionCount =
            await manageAddressPage.countryFieldOptions.count();
        const randomIndex = Math.floor(Math.random() * countryFieldOptionCount);
        await manageAddressPage.countryField.selectOption(
            randomIndex.toString()
        );
        await manageAddressPage.regionField.selectOption({ index: 1 });
        await manageAddressPage.yesDefaultAddress.click();
        await manageAddressPage.clickContinueBtn();
    });
});
