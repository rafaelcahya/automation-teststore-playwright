export default class ForgotLoginnamePage {
    constructor(page) {
        this.lastNameField = page.locator("#forgottenFrm_lastname");
        this.emailField = page.locator("#forgottenFrm_email");
        this.emptyLastnameMsg = page.locator(
            `text=${process.env.INVALID_LASTNAME_FORGOTLOGINNAME_MSG}`
        );
        this.emptyEmailMsg = page.locator(
            `text=${process.env.INVALID_EMAIL_FORGOTLOGINNAME_MSG}`
        );
        this.invalidEmailMsg = page.locator(
            `text=${process.env.UNREGISTERED_CREDENTIAL_FORGOTLOGINNAME_MSG}`
        );
        this.emptyEmailAndLastnameMsg = page.locator(
            `text=${process.env.INVALID_EMAIL_FORGOTLOGINNAME_MSG}`
        );
        this.noRecordValidationMsg = page.locator(
            `text=${process.env.UNREGISTERED_CREDENTIAL_FORGOTLOGINNAME_MSG}`
        );
        this.successRequestMsg = page.locator(
            `text=${process.env.SUCCESS_FORGOTLOGINNAME_MSG}`
        );
        this.continueBtn = page.locator(
            "button[type='submit']:has-text('Continue')"
        );
    }

    async clickContineBtn() {
        await this.continueBtn.click();
    }
}
