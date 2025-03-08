import dotenv from "dotenv";

dotenv.config();

export default class RegisterPage {
    constructor(page) {
        this.page = page;
        this.firstNameField = page.locator("id=AccountFrm_firstname");
        this.lastNameField = page.locator("id=AccountFrm_lastname");
        this.emailField = page.locator("id=AccountFrm_email");
        this.phoneNumberField = page.locator("id=AccountFrm_telephone");
        this.faxField = page.locator("id=AccountFrm_fax");
        this.companyField = page.locator("id=AccountFrm_company");
        this.firstAddressField = page.locator("id=AccountFrm_address_1");
        this.secondAddressField = page.locator("id=AccountFrm_address_2");
        this.cityField = page.locator("id=AccountFrm_city");
        this.regionField = page.locator("id=AccountFrm_zone_id");
        this.regionOption = page.locator("#AccountFrm_zone_id option");
        this.zipCodeField = page.locator("id=AccountFrm_postcode");
        this.countryField = page.locator("id=AccountFrm_country_id");
        this.countryFieldOptions = page.locator(
            "#AccountFrm_country_id option"
        );
        this.loginNameField = page.locator("#AccountFrm_loginname");
        this.passwordField = page.locator("#AccountFrm_password");
        this.confirmPasswordField = page.locator("#AccountFrm_confirm");
        this.yesOptionSubscribe = page.locator("#AccountFrm_newsletter1");
        this.noOptionSubscribe = page.locator("#AccountFrm_newsletter0");
        this.agreePP = page.locator("#AccountFrm_agree");
        this.minMaxFirstnameMsg = page.locator(
            `text=${process.env.MAXCHAR_FIRSTNAME_REGISTER_MSG}`
        );
        this.minMaxLastnameMsg = page.locator(
            `text=${process.env.MAXCHAR_LASTNAME_REGISTER_MSG}`
        );
        this.invalidEmailMsg = page.locator(
            `text=${process.env.INVALID_EMAIL_REGISTER_MSG}`
        );
        this.minMaxFirstAddressMsg = page.locator(
            `text=${process.env.MAXCHAR_FIRST_ADDRESS_REGISTER_MSG}`
        );
        this.minMaxCityMsg = page.locator(
            `text=${process.env.MAXCHAR_CITY_REGISTER_MSG}`
        );
        this.emptyRegionMsg = page.locator(
            `text=${process.env.EMPTY_REGION_REGISTER_MSG}`
        );
        this.minMaxZipMsg = page.locator(
            `text=${process.env.MAXCHAR_ZIP_REGISTER_MSG}`
        );
        this.minMaxLoginnameMsg = page.locator(
            `text=${process.env.MAXCHAR_LOGINNAME_REGISTER_MSG}`
        );
        this.duplicateLoginnameMsg = page.locator(
            `text=${process.env.REGISTERED_LOGINNAME_REGISTER_MSG}`
        );
        this.minMaxPasswordMsg = page.locator(
            `text=${process.env.MAXCHAR_PASSWORD_REGISTER_MSG}`
        );
        this.notMatchConfirmPasswordMsg = page.locator(
            `text=${process.env.MATCH_PASSWORD_REGISTER_MSG}`
        );
        this.notSelectedPPMsg = page.locator(
            `text=${process.env.NOT_SELECTED_PP_REGISTER_MSG}`
        );
        this.continueBtn = page.locator("button:has-text('Continue')");
        this.successRegisterMsg = page.locator(
            `text=${process.env.SUCCESS_REGISTER_MSG}`
        );
    }

    async clickContinueBtn() {
        await this.continueBtn.click();
    }
}
