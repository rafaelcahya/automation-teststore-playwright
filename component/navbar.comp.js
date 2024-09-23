export default class Navbar {
    constructor(page) {
        this.page = page;
        this.loginRegisterBtn = page.locator("text='Login or register'");
        this.menuAccountBtn = page.getByRole("link", {
            name: "Welcome back graciela",
        });
        this.changePasswordBtn = page
            .locator("#customer_menu_top")
            .getByRole("link", { name: "Change password" });
        this.editAccountDetailsBtn = page
            .locator("#customer_menu_top")
            .getByRole("link", { name: "Edit account details" });
        this.manageAddressBookBtn = page
            .locator("#customer_menu_top")
            .getByRole("link", { name: "Manage Address Book" });
    }

    async clickLoginRegisterBtn() {
        await this.loginRegisterBtn.click();
    }

    async hoverMenuAccountBtn() {
        await this.menuAccountBtn.hover();
    }

    async clickChangePasswordBtn() {
        await this.changePasswordBtn.click();
    }

    async clickEditAccountDetailsBtn() {
        await this.editAccountDetailsBtn.click();
    }

    async clickManageAddressBookBtn() {
        await this.manageAddressBookBtn.click();
    }
}
