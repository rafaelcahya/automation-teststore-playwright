export default class ForgotPassword {
    constructor(page) {
        this.loginNameField = page.locator("#forgottenFrm_loginname");
        this.emailField = page.locator("#forgottenFrm_email");
        this.emptyEmailMsg = page.locator(
            `text=${process.env.INVALID_EMAIL_FORGOTPASSWORD_MSG}`
        );
        this.invalidEmailMsg = page.locator(
            `text=${process.env.UNREGISTERED_CREDENTIAL_FORGOTPASSWORD_MSG}`
        );
        this.invalidEmailFormatMsg = page.locator(
            `text=${process.env.INVALID_EMAIL_FORMAT_FORGOTPASSWORD_MSG}`
        );
        this.invalidLoginnameMsg = page.locator(
            `text=${process.env.INVALID_LOGINNAME_FORGOTPASSWORD_MSG}`
        );
        this.emptyEmailAndLoginnameMsg = page.locator(
            `text=${process.env.INVALID_EMAIL_FORGOTPASSWORD_MSG}`
        );
        this.noRecordValidationMsg = page.locator(
            `text=${process.env.UNREGISTERED_CREDENTIAL_FORGOTPASSWORD_MSG}`
        );
        this.successMsg = page.locator(
            `text=${process.env.SUCCESS_FORGOTPASSWORD_MSG}`
        );
        this.continueBtn = page.locator(
            "button[type='submit']:has-text('Continue')"
        );
    }

    async clickContineBtn() {
        await this.continueBtn.click();
    }
}
