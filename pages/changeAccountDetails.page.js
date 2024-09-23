export default class ChangeAccountDetailsPage {
    constructor(page) {
        this.page = page;
        this.firstNameField = page.locator("#AccountFrm_firstname");
        this.lastNameField = page.locator("#AccountFrm_lastname");
        this.emailField = page.locator("#AccountFrm_email");
        this.phonenumberField = page.locator("#AccountFrm_telephone");
        this.faxField = page.locator("#AccountFrm_fax");
        this.invalidLoginMsg = page.locator(
            "text=Error: Incorrect login or password provided."
        );
        this.continueBtn = page.locator(
            "button[type='submit']:has-text('Continue')"
        );
		this.minMaxFirstnameMsg = page.locator("text=First Name must be between 1 and 32 characters!")
		this.minMaxLastnameMsg = page.locator("text=Last Name must be between 1 and 32 characters!")
		this.invalidEmailMsg = page.locator("text=E-Mail Address does not appear to be valid!")
		this.successMsg = page.locator("text=Success: Your account has been successfully updated.")
    }

    async clickContinueBtn() {
        await this.continueBtn.click();
    }
}
