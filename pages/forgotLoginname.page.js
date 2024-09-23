export default class ForgotLoginnamePage {
    constructor(page) {
        this.lastNameField = page.locator("#forgottenFrm_lastname");
        this.emailField = page.locator("#forgottenFrm_email");
        this.notRecordedLastnameMsg = page.locator(
            "text=Error: The Last name was not provided or not found in our records, please try again!"
        );
        this.notRecordedEmailMsg = page.locator(
            "text=Error: The Email address was not provided or not found in our records, please try again!"
        );
        this.noRecordValidationMsg = page.locator(
            "text=Error: No records found matching information your provided, please check your information and try again!"
        );
        this.successRequestMsg = page.locator(
            "text=Success: Your login name reminder has been sent to your e-mail address."
        );
        this.continueBtn = page.locator(
            "button[type='submit']:has-text('Continue')"
        );
    }

    async clickContineBtn() {
        await this.continueBtn.click();
    }
}
