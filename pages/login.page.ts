import BasePage from "./base.page";

export default class LoginPage extends BasePage {
  get emailInputField() {
    return this.page.getByRole("textbox", { name: "Enter registered email" });
  }

  get passwordInputField() {
    return this.page.getByPlaceholder("Enter password");
  }
  get loginButton() {
    return this.page.getByRole("button", { name: "LOGIN" });
  }
}
