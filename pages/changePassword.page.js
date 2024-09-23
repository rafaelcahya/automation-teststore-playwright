export default class ChangePasswordPage {
    constructor(page) {
        this.curPasswordField = page.locator("#PasswordFrm_current_password");
        this.newPasswordField = page.locator("#PasswordFrm_password");
        this.newPasswordConfirmField = page.locator("#PasswordFrm_confirm");
        this.continueBtn = page.locator(
            "button[type='submit']:has-text('Continue')"
        );
        this.emptyCurPasswordMsg = page.locator(
            "text=Your current password is incorrect! Please try again."
        );
        this.minMaxNewPasswordMsg = page.locator(
            "text=Password must be between 4 and 20 characters!"
        );
        this.notMatchNewConfirmPasswordMsg = page.locator(
            "text=Password confirmation does not match password!"
        );
        this.wrongCurPasswordMsg = page.locator(
            "text=Your current password is incorrect! Please try again."
        );
        this.successChangePasswordMsg = page.locator(
            "text=Success: Your password has been successfully updated."
        );
    }

    async clickContinueBtn() {
        await this.continueBtn.click();
    }
}
