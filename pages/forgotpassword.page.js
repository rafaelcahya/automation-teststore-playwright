export default class ForgotPassword {
    constructor(page) {
        this.loginNameField = page.locator("#forgottenFrm_loginname");
        this.emailField = page.locator("#forgottenFrm_email");
        this.emailValidationMsg1 = page.locator(
            "text=Error: The Email address was not provided or not found in our records, please try again!"
        );
        this.nameValidationMsg1 = page.locator(
            "text=Error: The Login name was not provided or not found in our records, please try again!"
        );
        this.noRecordValidationMsg = page.locator(
            "text=Error: No records found matching information your provided, please check your information and try again!"
        );
        this.successMsg = page.locator(
            "text=Success: Password reset link has been sent to your e-mail address."
        );
        this.continueBtn = page.locator(
            "button[type='submit']:has-text('Continue')"
        );
    }

    async clickContineBtn() {
        await this.continueBtn.click();
    }
}
