import BasePage from "../pages/base.page";

export default class BaseActions extends BasePage {
  async navigateTo(url: string) {
    await this.page.goto(url);
  }
}
