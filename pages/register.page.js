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
        this.countryFieldOptions = page.locator("#AccountFrm_country_id option");
        this.loginNameField = page.locator("#AccountFrm_loginname");
        this.passwordField = page.locator("#AccountFrm_password");
        this.confirmPasswordField = page.locator("#AccountFrm_confirm");
        this.yesOptionSubscribe = page.locator("#AccountFrm_newsletter1");
        this.noOptionSubscribe = page.locator("#AccountFrm_newsletter0");
        this.agreePP = page.locator("#AccountFrm_agree");
        this.minMaxFirstnameMsg = page.locator(
            "text=First Name must be between 1 and 32 characters!"
        );
        this.minMaxLastnameMsg = page.locator(
            "text=Last Name must be between 1 and 32 characters!"
        );
        this.invalidEmailMsg = page.locator(
            "text=Email Address does not appear to be valid!"
        );
        this.emptyRegionMsg = page.locator(
            "text=Please select a region / state!"
        );
        this.minMaxFirstAddressMsg = page.locator(
            "text=Address 1 must be between 3 and 128 characters!"
        );
        this.minMaxCityMsg = page.locator(
            "text=City must be between 3 and 128 characters!"
        );
        this.minMaxZipMsg = page.locator(
            "text=Zip/postal code must be between 3 and 10 characters!"
        );
        this.minMaxLoginnameMsg = page.locator(
            "text=Login name must be alphanumeric only and between 5 and 64 characters!"
        );
        this.duplicateLoginnameMsg = page.locator(
            "text=This login name is not available. Try different login name!"
        );
        this.minMaxPasswordMsg = page.locator(
            "text=Password must be between 4 and 20 characters!"
        );
        this.notMatchConfirmPasswordMsg = page.locator(
            "text=Password confirmation does not match password!"
        );
        this.continueBtn = page.locator("button:has-text('Continue')");
        this.successRegisterMsg = page.locator("text=Your Account Has Been Created!")
    }

    async clickContinueBtn() {
        await this.continueBtn.click();
    }
}
