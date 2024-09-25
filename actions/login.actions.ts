import { Page, BrowserContext, expect } from "@playwright/test";
import LoginPage from "../pages/login.page";
import BaseAction from "../actions/base.actions";
import credentials from "../resources/testData.json" with { type: "json" };


export default class LoginActions extends BaseAction {
    login: LoginPage

    constructor(page: Page, context: BrowserContext) {
        super(page, context);
        this.login = new LoginPage(page, context)
    }

    async fillEmail() {
        const emailIn = this.login.emailInputField;
        await emailIn.fill(credentials.customerDetails.username_default);
        expect(emailIn).not.toBe('');
    }

    async fillPassword() {
        await this.login.passwordInputField.fill(credentials.customerDetails.password_default);
    }

    async pressSubmitButton() {
        await this.login.loginButton.click();
    }

    async completeForm() {
        await this.fillEmail();
        await this.fillPassword();
        await this.pressSubmitButton();
    }

}