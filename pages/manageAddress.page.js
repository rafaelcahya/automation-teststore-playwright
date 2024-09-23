export default class ManageAddressPage {
    constructor(page) {
        this.newAddressBtn = page.locator("text=New Address");
        this.firstNameField = page.locator("#AddressFrm_firstname");
        this.lastNameField = page.locator("#AddressFrm_lastname");
        this.companyField = page.locator("#AddressFrm_company");
        this.firstAddressField = page.locator("#AddressFrm_address_1");
        this.secondAddressField = page.locator("#AddressFrm_address_2");
        this.cityField = page.locator("#AddressFrm_city");
        this.regionField = page.locator("#AddressFrm_zone_id");
        this.regionFieldOptions = page.locator("#AddressFrm_zone_id option");
        this.zipField = page.locator("#AddressFrm_postcode");
        this.countryField = page.locator("#AddressFrm_country_id");
        this.countryFieldOptions = page.locator(
            "#AddressFrm_country_id option"
        );
        this.yesDefaultAddress = page.locator("#AddressFrm_default1");
        this.noDefaultAddress = page.locator("#AddressFrm_default0");
        this.continueBtn = page.locator("text=Continue");
        this.minMaxFirstnameMsg = page.locator(
            "text=First Name must be between 1 and 32 characters!"
        );
        this.minMaxLastnameMsg = page.locator(
            "text=Last Name must be between 1 and 32 characters!"
        );
        this.minMaxFirstAddressMsg = page.locator(
            "text=Address must be between 3 and 128 characters!"
        );
        this.minMaxCityMsg = page.locator(
            "text=City must be between 3 and 128 characters!"
        );
        this.emptyRegionMsg = page.locator(
            "text=Please select a region / state!"
        );
        this.minMaxZipcodeMsg = page.locator(
            "text=Zip/postal code must be between 2 and 10 characters!"
        );
        this.emptyCountryMsg = page.locator("text=Please select a country!");
        this.successMsg = page.locator('div.alert.alert-success:has-text(\'Your address has been successfully inserted\')')
    }

    async clickNewAddressBtn() {
        await this.newAddressBtn.click();
    }

    async clickContinueBtn() {
        await this.continueBtn.click();
    }
}
