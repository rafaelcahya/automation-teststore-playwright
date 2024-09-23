export default class AccountLoginPage {
    constructor(page) {
        this.page = page;
        this.continueBtn = page.locator("text='Continue'");
        this.loginNameField = page.locator("#loginFrm_loginname");
        this.passwordField = page.locator("#loginFrm_password");
        this.invalidLoginMsg = page.locator(
            "text=Error: Incorrect login or password provided."
        );
        this.forgotPasswordHyperlink = page.locator(
            "text=Forgot your password?"
        );
        this.forgotLoginNameHyperlink = page.locator(
            "text= Forgot your login?"
        );
        this.loginButton = page.locator(
            "button[type='submit']:has-text('Login')"
        );
    }

    async clickContinueBtn() {
        await this.continueBtn.click();
    }

    async clickLoginBtn() {
        this.loginButton.click();
    }

    async clickForgotPasswordLink() {
        this.forgotPasswordHyperlink.click();
    }

    async clickForgotLoginnameLink() {
        await this.forgotLoginNameHyperlink.click();
    }

    async doLogin() {
        await this.loginNameField.fill("moose");
        await this.passwordField.fill("caca123");
        await this.loginButton.click();
    }
}
